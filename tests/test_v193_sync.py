"""Behavioral tests for Home Assistant profile synchronization."""
from __future__ import annotations

import sys
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

ha_mock = MagicMock()
sys.modules["homeassistant"] = ha_mock
sys.modules["homeassistant.core"] = ha_mock
sys.modules["homeassistant.config_entries"] = ha_mock
sys.modules["homeassistant.const"] = ha_mock
sys.modules["homeassistant.helpers"] = ha_mock
sys.modules["homeassistant.helpers.storage"] = ha_mock
sys.modules["homeassistant.helpers.event"] = ha_mock
sys.modules["homeassistant.helpers.dispatcher"] = ha_mock
sys.modules["homeassistant.helpers.entity_platform"] = ha_mock
sys.modules["homeassistant.helpers.restore_state"] = ha_mock
sys.modules["homeassistant.helpers.service"] = ha_mock
sys.modules["homeassistant.util"] = ha_mock
sys.modules["homeassistant.util.dt"] = ha_mock
sys.modules["voluptuous"] = ha_mock

ws_mock = MagicMock()
ws_mock.async_response = lambda function: function
ws_mock.websocket_command = lambda *args, **kwargs: lambda function: function
components_mock = MagicMock()
components_mock.websocket_api = ws_mock
sys.modules["homeassistant.components"] = components_mock
sys.modules["homeassistant.components.http"] = ha_mock


def make_ha_user(user_id: str, name: str, *, admin=False, active=True, system=False):
    user = MagicMock()
    user.id = user_id
    user.name = name
    user.is_admin = admin
    user.is_active = active
    user.system_generated = system
    return user


def make_hass(ha_users: list, stored_users: list | None = None, *, first_run=False):
    hass = MagicMock()
    hass.data = {}
    hass.auth.async_get_users = AsyncMock(return_value=ha_users)
    stored = {"first_run": first_run, "users": list(stored_users or [])}

    async def load():
        return dict(stored)

    async def save(data):
        stored.clear()
        stored.update(data)

    store = MagicMock()
    store.async_load = AsyncMock(side_effect=load)
    store.async_save = AsyncMock(side_effect=save)
    return hass, stored, store


class TestProfileSync(unittest.IsolatedAsyncioTestCase):
    async def test_creates_profiles_with_roles_permissions_and_no_pins(self):
        from custom_components.argus.storage import async_sync_ha_profiles

        hass, _, store = make_hass([
            make_ha_user("admin", "Admin", admin=True),
            make_ha_user("standard", "Standard"),
        ])
        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        profiles = {profile["ha_user_id"]: profile for profile in result}
        self.assertEqual(profiles["admin"]["role"], "admin")
        self.assertTrue(all(profiles["admin"]["permissions"].values()))
        self.assertEqual(profiles["standard"]["role"], "standard")
        self.assertTrue(profiles["standard"]["permissions"]["view_status"])
        self.assertFalse(profiles["standard"]["permissions"]["arm"])
        for profile in result:
            self.assertTrue(profile["managed_by_ha_sync"])
            self.assertNotIn("pin", profile)
            self.assertNotIn("access_pin_hash", profile)

    async def test_repeated_sync_is_idempotent(self):
        from custom_components.argus.storage import async_sync_ha_profiles

        hass, _, store = make_hass([make_ha_user("admin", "Admin", admin=True)])
        with patch("custom_components.argus.storage._store", return_value=store):
            await async_sync_ha_profiles(hass, "entry1")
            result = await async_sync_ha_profiles(hass, "entry1")
        self.assertEqual([p["ha_user_id"] for p in result], ["admin"])

    async def test_missing_account_is_disabled_and_reactivated_when_it_returns(self):
        from custom_components.argus.storage import async_sync_ha_profiles

        profile = {
            "id": "profile-1",
            "name": "Resident",
            "ha_user_id": "resident",
            "role": "standard",
            "enabled": True,
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True},
        }
        hass, _, store = make_hass([], [profile])
        with patch("custom_components.argus.storage._store", return_value=store):
            disabled = await async_sync_ha_profiles(hass, "entry1")
            self.assertFalse(disabled[0]["enabled"])
            self.assertTrue(disabled[0]["sync_disabled"])
            hass.auth.async_get_users = AsyncMock(return_value=[make_ha_user("resident", "Resident")])
            restored = await async_sync_ha_profiles(hass, "entry1")
        self.assertTrue(restored[0]["enabled"])
        self.assertNotIn("sync_disabled", restored[0])

    async def test_manually_disabled_profile_is_not_reactivated_or_duplicated(self):
        from custom_components.argus.storage import async_sync_ha_profiles

        profile = {
            "id": "profile-2",
            "name": "Manual",
            "ha_user_id": "manual",
            "role": "standard",
            "enabled": False,
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True},
        }
        hass, _, store = make_hass([make_ha_user("manual", "Manual")], [profile])
        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")
        matches = [item for item in result if item.get("ha_user_id") == "manual"]
        self.assertEqual(len(matches), 1)
        self.assertFalse(matches[0]["enabled"])

    async def test_existing_profile_fields_are_preserved(self):
        from custom_components.argus.storage import async_sync_ha_profiles

        profile = {
            "id": "profile-3",
            "name": "Custom Name",
            "ha_user_id": "existing",
            "role": "standard",
            "enabled": True,
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True, "arm": True},
            "access_pin_hash": "scrypt:preserved",
        }
        hass, _, store = make_hass([make_ha_user("existing", "HA Name", admin=True)], [profile])
        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")
        self.assertEqual(result[0]["name"], "Custom Name")
        self.assertEqual(result[0]["role"], "standard")
        self.assertEqual(result[0]["access_pin_hash"], "scrypt:preserved")
        self.assertTrue(result[0]["permissions"]["arm"])

    async def test_system_accounts_are_excluded(self):
        from custom_components.argus.storage import async_sync_ha_profiles

        hass, _, store = make_hass([
            make_ha_user("system", "homeassistant", system=True),
            make_ha_user("human", "Resident"),
        ])
        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")
        self.assertEqual([profile["ha_user_id"] for profile in result], ["human"])

    async def test_first_run_does_not_create_profiles(self):
        from custom_components.argus.storage import async_sync_ha_profiles

        hass, _, store = make_hass([make_ha_user("admin", "Admin", admin=True)], first_run=True)
        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")
        self.assertEqual(result, [])


if __name__ == "__main__":
    unittest.main()
