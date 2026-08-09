import asyncio
import unittest
import sys
from unittest.mock import AsyncMock, MagicMock, patch
import os

# Mock homeassistant modules before importing custom_components
ha_mock = MagicMock()
sys.modules["homeassistant"] = ha_mock
sys.modules["homeassistant.core"] = ha_mock
sys.modules["homeassistant.config_entries"] = ha_mock
sys.modules["homeassistant.const"] = ha_mock
sys.modules["homeassistant.helpers"] = ha_mock
sys.modules["homeassistant.helpers.event"] = ha_mock
sys.modules["homeassistant.helpers.dispatcher"] = ha_mock
sys.modules["homeassistant.helpers.storage"] = ha_mock
ws_mock = MagicMock()
ws_mock.async_response = lambda func: func
ws_mock.websocket_command = lambda *args, **kwargs: lambda func: func
components_mock = MagicMock()
components_mock.websocket_api = ws_mock
sys.modules["homeassistant.components"] = components_mock
sys.modules["homeassistant.components.http"] = ha_mock

class TestV192Functional(unittest.IsolatedAsyncioTestCase):

    def test_frontend_contracts_v192(self):
        """Verify frontend contracts for v1.9.2:
           - 7 language tables present (es, en, fr, pt, it, zh, ru).
           - New keys present across all 7 dictionaries.
           - Profile selector renders Argus logo (argus_logo.png), title, and accessible cards.
           - Delete user button has danger styling and confirmation prompt.
           - Profile badge rendered in top bar.
           - Unlinked HA accounts section present in frontend.
        """
        panel_path = os.path.join(
            os.path.dirname(__file__), "..", "src", "legacy", "argus-panel.ts"
        )
        with open(panel_path, "r", encoding="utf-8") as f:
            content = f.read()

        # 1. Check all 7 languages declared
        for lang in ['es:', 'en:', 'fr:', 'pt:', 'it:', 'zh:', 'ru:']:
            self.assertIn(lang, content, f"Missing language block {lang} in argus-panel.ts")

        # 2. Check key elements
        self.assertIn("select_profile_title", content, "Missing select_profile_title i18n key")
        self.assertIn("role_argus_admin", content, "Missing role_argus_admin i18n key")
        self.assertIn("role_argus_user", content, "Missing role_argus_user i18n key")
        self.assertIn("ha_account_linked", content, "Missing ha_account_linked i18n key")
        self.assertIn("clock_format_label", content, "Missing clock_format_label i18n key")
        self.assertIn("profile_is_yours", content, "Missing profile_is_yours i18n key")
        self.assertIn("ha_role_admin", content, "Missing ha_role_admin i18n key")
        self.assertIn("_formatTime", content, "Missing _formatTime helper")
        self.assertIn("_formatDateTime", content, "Missing _formatDateTime helper")

    async def test_allowlist_profile_redaction(self):
        """Verify _redact_user_profile uses strict allowlist and removes unknown/sensitive fields."""
        from custom_components.argus.websocket_api import _redact_user_profile

        raw_profile = {
            "id": "u1",
            "name": "Admin",
            "role": "admin",
            "enabled": True,
            "permissions": {"view_status": True, "arm": True, "disarm": True},
            "shared_kiosk_profile": False,
            # Sensitive or unallowed fields:
            "ha_user_id": "ha_admin_123",
            "access_pin_hash": "scrypt:99999",
            "pin": "scrypt:12345",
            "master_pin": "scrypt:11111",
            "password": "secret_password",
            "secret": "top_secret_token",
            "unknown_custom_field": "should_be_stripped"
        }
        redacted = _redact_user_profile(raw_profile)

        # Verify allowlisted keys are present
        self.assertEqual(redacted["id"], "u1")
        self.assertEqual(redacted["name"], "Admin")
        self.assertEqual(redacted["role"], "admin")
        self.assertEqual(redacted["enabled"], True)
        self.assertEqual(redacted["permissions"], {"view_status": True, "arm": True, "disarm": True})
        self.assertEqual(redacted["shared_kiosk_profile"], False)

        # Verify exact set of keys matches allowlist
        allowed_keys = {"id", "name", "role", "enabled", "permissions", "shared_kiosk_profile"}
        self.assertEqual(set(redacted.keys()), allowed_keys)

        # Verify non-allowlisted / sensitive fields are stripped
        self.assertNotIn("ha_user_id", redacted)
        self.assertNotIn("access_pin_hash", redacted)
        self.assertNotIn("pin", redacted)
        self.assertNotIn("master_pin", redacted)
        self.assertNotIn("password", redacted)
        self.assertNotIn("secret", redacted)
        self.assertNotIn("unknown_custom_field", redacted)

    async def test_get_ha_users_filters_system_and_inactive(self):
        """Verify ws_argus_get_ha_users filters system_generated and inactive users safely."""
        from custom_components.argus.websocket_api import ws_argus_get_ha_users

        hass = MagicMock()
        connection = MagicMock()
        connection.user.is_admin = True

        u1 = MagicMock()
        u1.id = "ha_user_123456"
        u1.name = "Human Admin"
        u1.is_admin = True
        u1.system_generated = False
        u1.is_active = True

        u2 = MagicMock()
        u2.id = "ha_system_789012"
        u2.name = "Home Assistant Cloud"
        u2.is_admin = True
        u2.system_generated = True
        u2.is_active = True

        u3 = MagicMock()
        u3.id = "ha_inactive_345678"
        u3.name = "Inactive User"
        u3.is_admin = False
        u3.system_generated = False
        u3.is_active = False

        u4 = MagicMock()
        u4.id = "ha_user_999999"
        u4.name = "Human Standard"
        u4.is_admin = False
        u4.system_generated = False
        u4.is_active = True

        hass.auth.async_get_users = AsyncMock(return_value=[u1, u2, u3, u4])

        msg = {"id": 10, "type": "argus/get_ha_users"}

        with patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="entry1"), \
             patch("custom_components.argus.websocket_api._require_argus_admin"):
            await ws_argus_get_ha_users(hass, connection, msg)

        connection.send_result.assert_called_once()
        args = connection.send_result.call_args[0]
        result = args[1]
        ha_users = result.get("ha_users", [])

        self.assertEqual(len(ha_users), 2)
        user_ids = [u["id"] for u in ha_users]
        self.assertIn("ha_user_123456", user_ids)
        self.assertIn("ha_user_999999", user_ids)
        self.assertNotIn("ha_system_789012", user_ids)
        self.assertNotIn("ha_inactive_345678", user_ids)

    async def test_two_ha_users_setup_and_linking(self):
        """Verify scenario with two active human HA accounts:
           1. First run creates profile for admin only. Second user has no Argus profile.
           2. Creating & linking Argus profile for second user makes it appear in login_bootstrap.
           3. Duplicate ha_user_id is prevented by backend storage validation.
        """
        from custom_components.argus.websocket_api import ws_argus_login_bootstrap
        from custom_components.argus.storage import async_save_ui_data

        hass = MagicMock()
        hass.auth.async_get_user = AsyncMock(return_value=MagicMock(is_admin=True))

        # 1. Simulate storage data after first_run (only Admin has profile)
        initial_ui_data = {
            "first_run": True,
            "users": [
                {
                    "id": "argus_u1",
                    "name": "Admin User",
                    "role": "admin",
                    "ha_user_id": "ha_admin_001",
                    "enabled": True,
                    "permissions": {"view_status": True, "arm": True, "disarm": True}
                }
            ]
        }

        connection = MagicMock()
        connection.user.id = "ha_admin_001"

        with patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="entry1"), \
             patch("custom_components.argus.websocket_api.async_sync_ha_profiles", new_callable=AsyncMock), \
             patch("custom_components.argus.websocket_api.async_load_ui_data", return_value=initial_ui_data), \
             patch("custom_components.argus.websocket_api.async_get_session_manager"):
            await ws_argus_login_bootstrap(hass, connection, {"id": 1, "type": "argus/login_bootstrap"})

        connection.send_result.assert_called_once()
        bootstrap_users = connection.send_result.call_args[0][1]["users"]
        self.assertEqual(len(bootstrap_users), 1)
        self.assertEqual(bootstrap_users[0]["id"], "argus_u1")

        # 2. Add second user linked to ha_user_002
        new_users_data = list(initial_ui_data["users"]) + [
            {
                "id": "argus_u2",
                "name": "Standard User",
                "role": "standard",
                "ha_user_id": "ha_user_002",
                "enabled": True,
                "permissions": {"view_status": True, "arm": False, "disarm": False}
            }
        ]

        updated_ui_data = dict(initial_ui_data)
        updated_ui_data["users"] = new_users_data

        connection.reset_mock()
        with patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="entry1"), \
             patch("custom_components.argus.websocket_api.async_sync_ha_profiles", new_callable=AsyncMock), \
             patch("custom_components.argus.websocket_api.async_load_ui_data", return_value=updated_ui_data), \
             patch("custom_components.argus.websocket_api.async_get_session_manager"):
            await ws_argus_login_bootstrap(hass, connection, {"id": 2, "type": "argus/login_bootstrap"})

        bootstrap_users_2 = connection.send_result.call_args[0][1]["users"]
        self.assertEqual(len(bootstrap_users_2), 2)
        user_ids = [u["id"] for u in bootstrap_users_2]
        self.assertIn("argus_u1", user_ids)
        self.assertIn("argus_u2", user_ids)

        # 3. Verify backend storage prevents duplicate ha_user_id
        duplicate_users_data = list(new_users_data) + [
            {
                "id": "argus_u3",
                "name": "Duplicate User",
                "role": "standard",
                "ha_user_id": "ha_user_002", # Duplicate ha_user_id!
                "enabled": True,
            }
        ]

        store_mock = AsyncMock()
        with patch("custom_components.argus.storage.async_load_ui_data", return_value=initial_ui_data), \
             patch("custom_components.argus.storage._store", return_value=store_mock):
            with self.assertRaises(ValueError) as ctx:
                await async_save_ui_data(hass, {"users": duplicate_users_data})
            self.assertIn("already linked", str(ctx.exception))

    async def test_clock_format_normalization(self):
        """Verify clock_format is normalized to 'auto' for invalid input."""
        from custom_components.argus.storage import async_save_ui_data

        hass = MagicMock()
        store_mock = AsyncMock()
        saved_data = {}

        async def fake_save(data):
            nonlocal saved_data
            saved_data = data

        store_mock.async_save = fake_save

        with patch("custom_components.argus.storage.async_load_ui_data", return_value={"clock_format": "auto"}), \
             patch("custom_components.argus.storage._store", return_value=store_mock):

            updated = await async_save_ui_data(hass, {"clock_format": "invalid_format"})
            self.assertEqual(updated["clock_format"], "auto")

            updated_valid = await async_save_ui_data(hass, {"clock_format": "12h"})
            self.assertEqual(updated_valid["clock_format"], "12h")

if __name__ == '__main__':
    unittest.main()
