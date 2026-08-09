"""Functional tests for Argus v1.9.3 — HA profile synchronization."""
import asyncio
import unittest
import sys
import os
from unittest.mock import AsyncMock, MagicMock, patch

# ── Mock homeassistant modules before any custom_components import ────────────
ha_mock = MagicMock()
sys.modules["homeassistant"] = ha_mock
sys.modules["homeassistant.core"] = ha_mock
sys.modules["homeassistant.config_entries"] = ha_mock
sys.modules["homeassistant.const"] = ha_mock
sys.modules["homeassistant.helpers"] = ha_mock
sys.modules["homeassistant.helpers.event"] = ha_mock
sys.modules["homeassistant.helpers.dispatcher"] = ha_mock
sys.modules["homeassistant.helpers.storage"] = ha_mock
sys.modules["homeassistant.helpers.entity_platform"] = ha_mock
sys.modules["homeassistant.helpers.restore_state"] = ha_mock
sys.modules["homeassistant.helpers.service"] = ha_mock
sys.modules["homeassistant.util"] = ha_mock
sys.modules["homeassistant.util.dt"] = ha_mock
ws_mock = MagicMock()
ws_mock.async_response = lambda func: func
ws_mock.websocket_command = lambda *args, **kwargs: lambda func: func
components_mock = MagicMock()
components_mock.websocket_api = ws_mock
sys.modules["homeassistant.components"] = components_mock
sys.modules["homeassistant.components.http"] = ha_mock
sys.modules["voluptuous"] = ha_mock

class DummyAlarmControlPanelEntity:
    pass

class DummyRestoreEntity:
    pass

acp_mock = MagicMock()
class AlarmControlPanelState:
    DISARMED = "disarmed"
    ARMED_HOME = "armed_home"
    ARMED_AWAY = "armed_away"
    ARMED_NIGHT = "armed_night"
    ARMED_VACATION = "armed_vacation"
    TRIGGERED = "triggered"
    PENDING = "pending"
    ARMING = "arming"
    def __init__(self, val):
        self.value = str(val)
    def __eq__(self, other):
        if isinstance(other, AlarmControlPanelState):
            return self.value == other.value
        return self.value == str(other)
    def __str__(self):
        return self.value

acp_mock.AlarmControlPanelState = AlarmControlPanelState
acp_mock.AlarmControlPanelEntity = DummyAlarmControlPanelEntity
class CodeFormat:
    NUMBER = "number"
acp_mock.CodeFormat = CodeFormat
sys.modules["homeassistant.components.alarm_control_panel"] = acp_mock
restore_mock = MagicMock()
restore_mock.RestoreEntity = DummyRestoreEntity
sys.modules["homeassistant.helpers.restore_state"] = restore_mock


# ── Helpers ───────────────────────────────────────────────────────────────────

def _make_ha_user(uid: str, name: str, is_admin: bool = False, is_active: bool = True, system_generated: bool = False):
    u = MagicMock()
    u.id = uid
    u.name = name
    u.is_admin = is_admin
    u.is_active = is_active
    u.system_generated = system_generated
    return u


def _make_hass(ha_users: list, stored_users: list = None, first_run: bool = False):
    """Return a mock hass with the specified HA users and stored profile list."""
    hass = MagicMock()
    hass.data = {}
    hass.auth.async_get_users = AsyncMock(return_value=ha_users)

    stored = {"first_run": first_run, "users": list(stored_users or [])}

    async def fake_load():
        return stored.copy()

    async def fake_save(data):
        stored.update(data)

    store_mock = MagicMock()
    store_mock.async_load = AsyncMock(side_effect=fake_load)
    store_mock.async_save = AsyncMock(side_effect=fake_save)

    with patch(
        "custom_components.argus.storage._store", return_value=store_mock
    ):
        return hass, stored, store_mock


# ── Test cases ────────────────────────────────────────────────────────────────

class TestV193ProfileSync(unittest.IsolatedAsyncioTestCase):

    async def test_creates_profiles_for_admin_and_standard(self):
        """HA admin + HA standard → 2 Argus profiles created."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [
            _make_ha_user("uid-admin", "Alice", is_admin=True),
            _make_ha_user("uid-std", "Bob", is_admin=False),
        ]
        hass, stored, store = _make_hass(ha_users, stored_users=[], first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        enabled = [u for u in result if u.get("enabled", True)]
        self.assertEqual(len(enabled), 2, "Expected 2 enabled profiles after sync")

        by_ha = {u["ha_user_id"]: u for u in enabled}
        self.assertIn("uid-admin", by_ha)
        self.assertIn("uid-std", by_ha)
        self.assertEqual(by_ha["uid-admin"]["role"], "admin")
        self.assertEqual(by_ha["uid-std"]["role"], "standard")

    async def test_idempotent_no_duplicate_profiles(self):
        """Calling async_sync_ha_profiles twice does not create duplicates."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [_make_ha_user("uid-a", "Carol", is_admin=True)]
        hass, stored, store = _make_hass(ha_users, first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            r1 = await async_sync_ha_profiles(hass, "entry1")
            r2 = await async_sync_ha_profiles(hass, "entry1")

        enabled = [u for u in r2 if u.get("enabled", True)]
        self.assertEqual(len(enabled), 1, "Second sync must NOT create a duplicate profile")

    async def test_auto_profile_has_no_pin_or_access_pin(self):
        """Auto-created profiles must never contain pin or access_pin_hash."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [_make_ha_user("uid-x", "Dave", is_admin=False)]
        hass, stored, store = _make_hass(ha_users, first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        for u in result:
            self.assertNotIn("pin", u, "Auto-created profile must not contain 'pin'")
            self.assertNotIn("access_pin_hash", u, "Auto-created profile must not contain 'access_pin_hash'")

    async def test_managed_by_ha_sync_flag_set(self):
        """Auto-created profiles must have managed_by_ha_sync == True."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [_make_ha_user("uid-y", "Eve", is_admin=True)]
        hass, stored, store = _make_hass(ha_users, first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        for u in result:
            self.assertTrue(u.get("managed_by_ha_sync"), "Auto-created profile must have managed_by_ha_sync=True")

    async def test_inactive_ha_account_disables_synced_profile(self):
        """When a HA account goes inactive, its sync-managed profile is disabled."""
        from custom_components.argus.storage import async_sync_ha_profiles

        existing_profile = {
            "id": "argus-001",
            "name": "Frank",
            "ha_user_id": "uid-gone",
            "role": "standard",
            "enabled": True,
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True, "view_history": False, "arm": False, "disarm": False, "sos": False},
        }
        # HA returns empty (account gone)
        hass, stored, store = _make_hass([], stored_users=[existing_profile], first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        disabled = [u for u in result if u["id"] == "argus-001"]
        self.assertEqual(len(disabled), 1)
        self.assertFalse(disabled[0].get("enabled", True), "Sync-managed profile should be disabled when HA account is gone")
        self.assertTrue(disabled[0].get("sync_disabled"), "sync_disabled flag should be set")

    async def test_reactivates_sync_disabled_profile(self):
        """When HA account comes back, previously sync-disabled profile is reactivated."""
        from custom_components.argus.storage import async_sync_ha_profiles

        existing_profile = {
            "id": "argus-002",
            "name": "Grace",
            "ha_user_id": "uid-back",
            "role": "standard",
            "enabled": False,
            "sync_disabled": True,
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True, "view_history": False, "arm": False, "disarm": False, "sos": False},
        }
        ha_users = [_make_ha_user("uid-back", "Grace", is_admin=False)]
        hass, stored, store = _make_hass(ha_users, stored_users=[existing_profile], first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        reactivated = [u for u in result if u["id"] == "argus-002"]
        self.assertEqual(len(reactivated), 1)
        self.assertTrue(reactivated[0].get("enabled", True), "Sync-disabled profile should be reactivated")
        self.assertNotIn("sync_disabled", reactivated[0], "sync_disabled flag should be cleared")

    async def test_manually_disabled_profile_never_reactivated(self):
        """Profiles disabled manually (no sync_disabled flag) are never touched by sync."""
        from custom_components.argus.storage import async_sync_ha_profiles

        manually_disabled = {
            "id": "argus-003",
            "name": "Hector",
            "ha_user_id": "uid-manual",
            "role": "standard",
            "enabled": False,
            # No sync_disabled flag = manually disabled
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True, "view_history": False, "arm": False, "disarm": False, "sos": False},
        }
        ha_users = [_make_ha_user("uid-manual", "Hector", is_admin=False)]
        hass, stored, store = _make_hass(ha_users, stored_users=[manually_disabled], first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        hector_profiles = [u for u in result if u["id"] == "argus-003"]
        self.assertEqual(len(hector_profiles), 1)
        self.assertFalse(hector_profiles[0].get("enabled", True),
                         "Manually disabled profile must not be reactivated by sync")

    async def test_manually_disabled_no_duplicate_created(self):
        """When HA account exists but its profile is manually disabled, sync must NOT create a new profile."""
        from custom_components.argus.storage import async_sync_ha_profiles

        manually_disabled = {
            "id": "argus-004",
            "name": "Irene",
            "ha_user_id": "uid-irene",
            "role": "standard",
            "enabled": False,
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True, "view_history": False, "arm": False, "disarm": False, "sos": False},
        }
        ha_users = [_make_ha_user("uid-irene", "Irene", is_admin=False)]
        hass, stored, store = _make_hass(ha_users, stored_users=[manually_disabled], first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        irene_profiles = [u for u in result if u.get("ha_user_id") == "uid-irene"]
        self.assertEqual(len(irene_profiles), 1, "Sync must not create a duplicate for a manually disabled profile")

    async def test_existing_profile_not_modified(self):
        """Sync must NOT overwrite name, role, permissions, pin or access_pin_hash of existing profiles."""
        from custom_components.argus.storage import async_sync_ha_profiles

        custom_profile = {
            "id": "argus-005",
            "name": "CustomName",          # differs from HA name
            "ha_user_id": "uid-existing",
            "role": "standard",            # HA user is admin but role was manually set
            "enabled": True,
            "managed_by_ha_sync": True,
            "permissions": {"view_status": True, "view_history": True, "arm": True, "disarm": True, "sos": True},
            "access_pin_hash": "scrypt:fake-hash",
        }
        ha_users = [_make_ha_user("uid-existing", "OriginalName", is_admin=True)]
        hass, stored, store = _make_hass(ha_users, stored_users=[custom_profile], first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        found = next((u for u in result if u["id"] == "argus-005"), None)
        self.assertIsNotNone(found)
        self.assertEqual(found["name"], "CustomName", "Sync must not overwrite custom name")
        self.assertEqual(found["role"], "standard", "Sync must not overwrite custom role")
        self.assertEqual(found["access_pin_hash"], "scrypt:fake-hash", "Sync must not overwrite access_pin_hash")
        self.assertTrue(found["permissions"]["view_history"], "Sync must not overwrite custom permissions")

    async def test_system_generated_users_excluded(self):
        """System-generated HA users must not receive Argus profiles."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [
            _make_ha_user("uid-sys", "homeassistant", system_generated=True),
            _make_ha_user("uid-real", "Jorge", is_admin=False),
        ]
        hass, stored, store = _make_hass(ha_users, first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        ha_ids = {u.get("ha_user_id") for u in result}
        self.assertNotIn("uid-sys", ha_ids, "system_generated user must not get an Argus profile")
        self.assertIn("uid-real", ha_ids, "Human user must get an Argus profile")

    async def test_first_run_skips_sync(self):
        """Sync must be a no-op when first_run is True."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [_make_ha_user("uid-k", "Kim", is_admin=True)]
        hass, stored, store = _make_hass(ha_users, stored_users=[], first_run=True)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        self.assertEqual(result, [], "Sync must return empty list and create no profiles during first_run")

    async def test_default_permissions_standard(self):
        """Auto-created standard profile has correct minimum permissions."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [_make_ha_user("uid-std2", "Lena", is_admin=False)]
        hass, stored, store = _make_hass(ha_users, first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        std = next((u for u in result if u.get("ha_user_id") == "uid-std2"), None)
        self.assertIsNotNone(std)
        perms = std["permissions"]
        self.assertTrue(perms["view_status"])
        self.assertFalse(perms["view_history"])
        self.assertFalse(perms["arm"])
        self.assertFalse(perms["disarm"])
        self.assertFalse(perms["sos"])

    async def test_default_permissions_admin(self):
        """Auto-created admin profile has full permissions."""
        from custom_components.argus.storage import async_sync_ha_profiles

        ha_users = [_make_ha_user("uid-adm2", "Marco", is_admin=True)]
        hass, stored, store = _make_hass(ha_users, first_run=False)

        with patch("custom_components.argus.storage._store", return_value=store):
            result = await async_sync_ha_profiles(hass, "entry1")

        admin = next((u for u in result if u.get("ha_user_id") == "uid-adm2"), None)
        self.assertIsNotNone(admin)
        perms = admin["permissions"]
        self.assertTrue(perms["view_status"])
        self.assertTrue(perms["view_history"])
        self.assertTrue(perms["arm"])
        self.assertTrue(perms["disarm"])
        self.assertTrue(perms["sos"])


class TestV193FrontendContracts(unittest.TestCase):

    def setUp(self):
        panel_path = os.path.join(
            os.path.dirname(__file__), "..", "src", "legacy", "argus-panel.ts"
        )
        with open(panel_path, "r", encoding="utf-8") as f:
            self.content = f.read()

    def test_version_updated_to_current(self):
        """argus-panel.ts header must carry a v2.0.x version marker."""
        self.assertIn("Argus Home Hub – v2.0.", self.content, "argus-panel.ts must carry a v2.0.x header version")
        self.assertIn("argus-panel-v2018", self.content, "customElements.define must use argus-panel-v2018")

    def test_new_i18n_keys_all_languages(self):
        """All 7 language tables must contain all new v1.9.3 i18n keys."""
        required_keys = [
            "profile_is_yours",
            "profile_needs_pin",
            "profile_no_pin_access",
            "ha_role_admin",
            "ha_role_standard",
            "login_btn",
            "cancel_btn",
            "pin_placeholder",
            "user_role_label",
            "link_ha_user",
            "ha_admin_label",
            "ha_standard_user_label",
            "role_argus_standard",
        ]
        for key in required_keys:
            occurrences = self.content.count(key)
            self.assertGreaterEqual(
                occurrences, 7,
                f"i18n key '{key}' must appear in all 7 language dicts (found {occurrences})"
            )

    def test_no_role_user_in_codebase(self):
        """Ensure role: 'user' is not present in custom_components/argus."""
        comp_dir = os.path.join(
            os.path.dirname(__file__), "..", "custom_components", "argus"
        )
        for root, _, files in os.walk(comp_dir):
            for file in files:
                if file.endswith((".py", ".js")):
                    path = os.path.join(root, file)
                    with open(path, "r", encoding="utf-8") as f:
                        text = f.read()
                    self.assertNotIn('"role": "user"', text, f"Found 'role: user' in {file}")
                    self.assertNotIn("'role': 'user'", text, f"Found 'role: user' in {file}")
                    self.assertNotIn('role = "user"', text, f"Found 'role = user' in {file}")

    def test_no_new_user_admin_reference(self):
        """Ensure new-user-admin does not exist in argus-panel.ts."""
        self.assertNotIn("new-user-admin", self.content, "Found 'new-user-admin' in argus-panel.ts")

    def test_enter_space_select_user_card(self):
        """Ensure user cards in _renderLoginScreen listen to Enter and Space keys."""
        self.assertIn("e.key === 'Enter'", self.content)
        self.assertIn("e.key === ' '", self.content)
        self.assertIn("e.code === 'Space'", self.content)

    def test_aria_label_includes_name_role_status(self):
        """Ensure user cards have descriptive aria-label with name, role, and status."""
        self.assertIn("ariaLabelText", self.content)
        self.assertIn("aria-label", self.content)

    def test_render_login_screen_uses_is_own_profile(self):
        """_renderLoginScreen must use is_own_profile field from bootstrap response."""
        self.assertIn("is_own_profile", self.content)

    def test_render_login_screen_rejects_no_pin_foreign_profile(self):
        """_renderLoginScreen must handle profile_no_pin_access for foreign profiles without PIN."""
        self.assertIn("profile_no_pin_access", self.content)

    def test_user_card_own_css(self):
        """CSS class user-card-own must be defined for visual distinction."""
        self.assertIn("user-card-own", self.content)

    def test_profile_own_badge_css(self):
        """CSS class profile-own-badge must be defined."""
        self.assertIn("profile-own-badge", self.content)

    def test_shake_animation(self):
        """shake keyframe animation must be defined for rejection feedback."""
        self.assertIn("@keyframes shake", self.content)


class TestV193ManifestVersion(unittest.TestCase):
    def test_manifest_version_current(self):
        import json
        manifest_path = os.path.join(
            os.path.dirname(__file__), "..", "custom_components", "argus", "manifest.json"
        )
        with open(manifest_path) as f:
            manifest = json.load(f)
        self.assertEqual(manifest["version"], "2.0.53", "manifest.json version must be 2.0.50")


class TestV193BootstrapCacheBust(unittest.TestCase):
    def test_bootstrap_version_current(self):
        bootstrap_path = os.path.join(
            os.path.dirname(__file__), "..", "custom_components", "argus", "www", "argus-bootstrap.js"
        )
        with open(bootstrap_path) as f:
            content = f.read()
        self.assertIn("2.0.53", content, "argus-bootstrap.js must reference version 2.0.50 for cache-busting")


class TestV193ScheduleAndDisarmProtection(unittest.IsolatedAsyncioTestCase):

    def _make_panel(self, code=None, state="disarmed", panic_active=False):
        from custom_components.argus.alarm_control_panel import ArgusAlarmPanel
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState

        def _mock_create_task(target):
            if asyncio.iscoroutine(target):
                target.close()
            return MagicMock()

        panel = ArgusAlarmPanel.__new__(ArgusAlarmPanel)
        panel.hass = MagicMock()
        panel.hass.data = {}
        panel.hass.bus = MagicMock()
        panel.hass.services = MagicMock()
        panel.hass.services.async_call = AsyncMock()
        panel.hass.async_create_task = MagicMock(side_effect=_mock_create_task)
        panel.entity_id = "alarm_control_panel.argus"
        panel._config_entry = MagicMock()
        panel._config_entry.entry_id = "entry1"
        panel._name = "Argus"
        panel._ui_config = {"users": []}
        panel._code = code
        panel._alarm_state = AlarmControlPanelState(state)
        panel._panic_active = panic_active
        panel._panic_previous_state = None
        panel._triggered_by = "test" if state == "triggered" else None
        panel._triggered_mode = "away" if state == "triggered" else None
        panel._siren_entity = None
        panel._async_siren = AsyncMock()
        panel.async_write_ha_state = MagicMock()
        panel._async_mqtt_publish = AsyncMock()
        panel._async_persist_stable_state = AsyncMock()
        panel._evaluate_automations = AsyncMock()
        panel._cancel_timers = MagicMock()
        panel._get_context_user = AsyncMock(return_value="ha_admin")
        return panel

    async def test_triggered_state_disarmed_schedule_ends_disarmed(self):
        """TRIGGERED state + DISARMED schedule => ends DISARMED, siren off, persistence updated."""
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState
        from datetime import datetime, timezone

        panel = self._make_panel(state="triggered")
        panel._latest_scheduled_transition = MagicMock(return_value=(
            datetime.now(timezone.utc), "disarmed", "sched_disarm"
        ))

        with patch("custom_components.argus.alarm_control_panel.async_append_audit_log", new_callable=AsyncMock), \
             patch("homeassistant.components.persistent_notification.async_dismiss"):
            await panel._async_reconcile_state_schedule({})

        self.assertEqual(panel._alarm_state, AlarmControlPanelState.DISARMED)
        panel._async_siren.assert_called_with(False)
        panel._async_persist_stable_state.assert_called_with("schedule_recovery")

    async def test_triggered_state_armed_home_schedule_remains_triggered(self):
        """TRIGGERED state + ARMED_HOME schedule => remains TRIGGERED."""
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState
        from datetime import datetime, timezone

        panel = self._make_panel(state="triggered")
        panel._latest_scheduled_transition = MagicMock(return_value=(
            datetime.now(timezone.utc), "armed_home", "sched_home"
        ))

        await panel._async_reconcile_state_schedule({})
        self.assertEqual(panel._alarm_state, AlarmControlPanelState.TRIGGERED)

    async def test_pending_arming_state_disarmed_schedule_ends_disarmed(self):
        """PENDING / ARMING state + DISARMED schedule => ends DISARMED."""
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState
        from datetime import datetime, timezone

        for initial_state in ["pending", "arming"]:
            panel = self._make_panel(state=initial_state)
            panel._latest_scheduled_transition = MagicMock(return_value=(
                datetime.now(timezone.utc), "disarmed", "sched_disarm"
            ))

            with patch("custom_components.argus.alarm_control_panel.async_append_audit_log", new_callable=AsyncMock), \
                 patch("homeassistant.components.persistent_notification.async_dismiss"):
                await panel._async_reconcile_state_schedule({})

            self.assertEqual(panel._alarm_state, AlarmControlPanelState.DISARMED)

    async def test_sos_panic_active_disarmed_schedule_does_not_disarm(self):
        """SOS/panic active + DISARMED schedule => does NOT disarm automatically."""
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState
        from datetime import datetime, timezone

        panel = self._make_panel(state="triggered", panic_active=True)
        panel._latest_scheduled_transition = MagicMock(return_value=(
            datetime.now(timezone.utc), "disarmed", "sched_disarm"
        ))

        await panel._async_reconcile_state_schedule({})
        self.assertEqual(panel._alarm_state, AlarmControlPanelState.TRIGGERED)

    async def test_master_pin_configured_code_none_rejected(self):
        """Master PIN configured + code=None => disarm REJECTED."""
        from custom_components.argus.access.pin import hash_pin
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState

        panel = self._make_panel(code=hash_pin("248163"), state="armed_away")
        with patch("custom_components.argus.alarm_control_panel.async_append_audit_log", new_callable=AsyncMock):
            await panel.async_alarm_disarm(code=None)

        self.assertEqual(panel._alarm_state, AlarmControlPanelState.ARMED_AWAY, "Disarm without code must be rejected when master PIN exists")

    async def test_master_pin_configured_invalid_pin_rejected(self):
        """Master PIN configured + invalid PIN => REJECTED."""
        from custom_components.argus.access.pin import hash_pin
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState

        panel = self._make_panel(code=hash_pin("248163"), state="armed_away")
        with patch("custom_components.argus.alarm_control_panel.async_append_audit_log", new_callable=AsyncMock):
            await panel.async_alarm_disarm(code="999999")

        self.assertEqual(panel._alarm_state, AlarmControlPanelState.ARMED_AWAY, "Disarm with invalid PIN must be rejected")

    async def test_master_pin_configured_valid_pin_disarms(self):
        """Master PIN configured + valid PIN => DISARMS."""
        from custom_components.argus.access.pin import hash_pin
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState

        panel = self._make_panel(code=hash_pin("248163"), state="armed_away")
        with patch("custom_components.argus.alarm_control_panel.async_append_audit_log", new_callable=AsyncMock), \
             patch("homeassistant.components.persistent_notification.async_dismiss"):
            await panel.async_alarm_disarm(code="248163")

        self.assertEqual(panel._alarm_state, AlarmControlPanelState.DISARMED, "Disarm with valid PIN must succeed")

    async def test_no_master_pin_code_none_disarms(self):
        """No master PIN + code=None => DISARMS."""
        from homeassistant.components.alarm_control_panel import AlarmControlPanelState

        panel = self._make_panel(code=None, state="armed_away")
        with patch("custom_components.argus.alarm_control_panel.async_append_audit_log", new_callable=AsyncMock), \
             patch("homeassistant.components.persistent_notification.async_dismiss"):
            await panel.async_alarm_disarm(code=None)

        self.assertEqual(panel._alarm_state, AlarmControlPanelState.DISARMED, "Disarm without master PIN must succeed")
if __name__ == "__main__":
    unittest.main()
