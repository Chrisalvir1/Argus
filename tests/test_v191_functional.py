import unittest
import os
from unittest.mock import AsyncMock, patch, MagicMock

class TestV191Functional(unittest.IsolatedAsyncioTestCase):
    
    def test_github_star_contract(self):
        """Contract: Ensure chrisalvir/argus is not in argus-panel.js and Chrisalvir1/Argus is used."""
        panel_path = os.path.join(
            os.path.dirname(__file__), "..", "custom_components", "argus", "www", "argus-panel.js"
        )
        with open(panel_path, "r") as f:
            content = f.read()
        self.assertNotIn("chrisalvir/argus", content, "Old GitHub link found in argus-panel.js")
        self.assertIn("Chrisalvir1/Argus", content, "New GitHub link not found in argus-panel.js")

    def test_frontend_contracts_v191_pt2(self):
        """Verify frontend logic without executing JS:
           - Escaping native fullscreen does not drop kiosk if _kioskLocked is true.
           - document.getElementById is not used in shadow DOM for setup pins.
           - Entry ID saved on kiosk enter is config entry_id (not entity_id).
           - Fail closed if kioskEntry or kioskEntry.entry_id cannot be resolved.
           - Restricted view renders a visible unlock-kiosk button.
        """
        panel_path = os.path.join(
            os.path.dirname(__file__), "..", "custom_components", "argus", "www", "argus-panel.js"
        )
        with open(panel_path, "r") as f:
            content = f.read()
            
        # 1. Kiosk lock isolation on Escape (fullscreenchange)
        self.assertIn("if (!fsEl && !this._kioskLocked) {", content, "Missing _kioskLocked protection in fullscreenchange")
        
        # 2. Shadow DOM uses addEventListener, not document.getElementById inline
        self.assertNotIn("onclick=\"document.getElementById('setup-access-pin')", content, "Should not use global document in Shadow DOM")
        self.assertNotIn("onclick=\"document.getElementById('setup-master-pin')", content, "Should not use global document in Shadow DOM")
        self.assertIn("this.shadowRoot.getElementById('skip-access-pin')", content, "Should use shadowRoot for skip buttons")
        
        # 3. Kiosk entry_id saved on enter is from dashboard.entries[idx].entry_id
        self.assertIn("this._kioskEntryId = entry?.entry_id", content, "Kiosk must save entry_id from dashboard entries")
        self.assertNotIn("this._kioskEntryId = target.dataset.id", content, "Must not use dataset.id for kiosk entry_id")
        self.assertNotIn("this._kioskEntryId = this._modeEntryId", content, "Must not use _modeEntryId (entity_id) for kiosk entry_id")

        # 4. Fail closed when kioskEntry cannot be resolved
        self.assertIn("if (!kioskEntry || !kioskEntry.entry_id)", content, "Must fail closed if kioskEntry cannot be resolved")

        # 5. Dedicated unlock button rendered in restricted view
        self.assertIn("btn-unlock-kiosk", content, "Restricted view must render btn-unlock-kiosk button")
        self.assertIn("unlock-kiosk", content, "Restricted view must bind unlock-kiosk action")

    async def test_pin_migration_keeps_legacy_pin(self):
        """Test that loading from v1.8 keeps `pin` and leaves `access_pin_hash` empty."""
        from custom_components.argus.storage import async_load_ui_data
        
        hass = MagicMock()
        store_mock = AsyncMock()
        store_mock.async_load.return_value = {
            "users": [
                {"id": "u1", "name": "Test", "pin": "scrypt:1234", "is_admin": True}
            ]
        }
        
        with patch("custom_components.argus.storage._store", return_value=store_mock):
            data = await async_load_ui_data(hass)
            users = data.get("users", [])
            self.assertEqual(len(users), 1)
            self.assertEqual(users[0]["pin"], "scrypt:1234")
            self.assertFalse(users[0].get("access_pin_hash"))

    async def test_ha_user_id_uniqueness(self):
        """Test that we cannot save two enabled profiles with the same ha_user_id."""
        from custom_components.argus.storage import async_save_ui_data
        
        hass = MagicMock()
        async def mock_count(*args):
            return 1
            
        with patch("custom_components.argus.storage.async_load_ui_data", return_value={"users": []}), \
             patch("custom_components.argus.storage._store"), \
             patch("custom_components.argus.storage._count_real_ha_admins", side_effect=mock_count):
            
            updates = {
                "users": [
                    {"id": "1", "ha_user_id": "ha1", "enabled": True},
                    {"id": "2", "ha_user_id": "ha1", "enabled": True},
                ]
            }
            with self.assertRaisesRegex(ValueError, "is already linked to another enabled"):
                await async_save_ui_data(hass, updates)

    async def test_sos_panic_outputs_preservation(self):
        """Test that panic_outputs are preserved if not included in the payload."""
        from custom_components.argus.storage import async_save_ui_data
        
        hass = MagicMock()
        
        async def mock_load(*args):
            return {"panic_outputs": ["switch.siren1"]}
            
        with patch("custom_components.argus.storage.async_load_ui_data", side_effect=mock_load), \
             patch("custom_components.argus.storage._store"):
            
            
            # Save without panic_outputs
            updates = {"home_name": "Test"}
            # We mock the _store call but call async_save_ui_data directly, which internally calls async_save
            store_mock = AsyncMock()
            with patch("custom_components.argus.storage._store", return_value=store_mock):
                saved = await async_save_ui_data(hass, updates)
            self.assertEqual(saved.get("panic_outputs"), ["switch.siren1"])

            # Save with explicit empty panic_outputs
            updates_empty = {"panic_outputs": []}
            with patch("custom_components.argus.storage._store", return_value=store_mock):
                saved2 = await async_save_ui_data(hass, updates_empty)
            self.assertEqual(saved2.get("panic_outputs"), [])

    async def test_login_per_mount(self):
        """Test that a new instance (profileSelectedThisMount=False) requires profile selection even with backend session."""
        # This is a frontend logic test conceptually, but we can verify the backend bootstrap response.
        # The backend sends has_active_session=True. The UI enforces the local state.
        # We'll just verify the backend bootstrap response contains the session flag.
        from custom_components.argus.websocket_api import ws_argus_login_bootstrap
        from custom_components.argus.session import SessionManager
        
        hass = MagicMock()
        hass.data = {"argus_session_manager": SessionManager(hass)}
        sm = hass.data["argus_session_manager"]
        sm.create_session("ha1", "entry1", "argus1", "access_pin")
        
        connection = MagicMock()
        connection.user.id = "ha1"
        connection.user.name = "TestHA"
        connection.user.is_admin = True
        
        msg = {"id": 1, "type": "argus/login_bootstrap", "entry_id": "entry1"}
        
        with patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="entry1"), \
             patch("custom_components.argus.websocket_api.async_sync_ha_profiles", new_callable=AsyncMock), \
             patch("custom_components.argus.websocket_api.async_load_ui_data", return_value={"first_run": False, "users": []}):
            await ws_argus_login_bootstrap(hass, connection, msg)
            
        connection.send_result.assert_called_once()
        result = connection.send_result.call_args[0][1]
        self.assertTrue(result["has_active_session"])

    async def test_pin_independence(self):
        """Test that providing a master PIN to an action works but doesn't grant Argus session, 
           and an access PIN doesn't bypass HA master PIN requirement."""
        from custom_components.argus.websocket_api import ws_argus_perform_alarm_action, ArgusAuthError
        
        hass = MagicMock()
        connection = MagicMock()
        connection.user.id = "ha1"
        
        msg = {"id": 1, "type": "argus/perform_alarm_action", "action": "arm_home", "entry_id": "entry1", "code": "9999"}
        
        # Test 1: Trying to arm without an Argus session should fail with AuthError, even if code is provided
        async def mock_require_session(*args):
            raise ArgusAuthError("no_session", "No active session")
            
        with patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="entry1"), \
             patch("custom_components.argus.websocket_api._require_argus_session", side_effect=mock_require_session):
            await ws_argus_perform_alarm_action(hass, connection, msg)
            
        connection.send_error.assert_called_once_with(1, "no_session", "No active session")
        connection.send_error.reset_mock()
        
        # Test 2: If we have an Argus session but provide a bad HA code, the service call fails
        async def mock_require_session_success(*args):
            return {"name": "TestUser", "id": "argus1"}, "ha1"
            
        async def mock_service_call(*args, **kwargs):
            raise ValueError("Invalid HA code")
            
        hass.services.async_call = mock_service_call
        
        with patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="entry1"), \
             patch("custom_components.argus.websocket_api._require_argus_session", side_effect=mock_require_session_success), \
             patch("custom_components.argus.websocket_api._require_permission"), \
             patch("custom_components.argus.websocket_api._resolve_alarm_entity_id", return_value="alarm_control_panel.test"):
            await ws_argus_perform_alarm_action(hass, connection, msg)
            
        connection.send_error.assert_called_once_with(1, "service_failed", "Invalid HA code")

    async def test_onboarding_requires_ha_admin(self):
        """Test that complete_first_run raises AuthError if connection.user is not HA admin."""
        from custom_components.argus.websocket_api import ws_argus_complete_first_run, ArgusAuthError
        
        hass = MagicMock()
        connection = MagicMock()
        connection.user.is_admin = False
        
        msg = {"id": 1, "type": "argus/complete_first_run", "admin_name": "Test"}
        
        with patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="entry1"):
            await ws_argus_complete_first_run(hass, connection, msg)
            
        connection.send_error.assert_called_once_with(1, "unauthorized", "Requires Home Assistant administrator privileges")

    async def test_kiosk_master_pin_unlock(self):
        """Test the master PIN validation logic for screen unlock, including rate limiting."""
        from custom_components.argus.websocket_api import ws_argus_verify_master_pin_for_screen_unlock
        from custom_components.argus.security import PinAttemptLimiter, hash_pin
        
        hass = MagicMock()
        connection = MagicMock()
        connection.user.id = "ha1"
        connection.user.name = "HA User"
        
        # Setup Limiter mock
        limiter = PinAttemptLimiter(max_attempts=3, block_seconds=300)
        
        # Setup entry mock
        entry_mock = MagicMock()
        entry_mock.entry_id = "entry1"
        entry_mock.options = {"code": hash_pin("1357")}
        entry_mock.data = {}
        
        msg = {"id": 1, "type": "argus/verify_master_pin_for_screen_unlock", "entry_id": "entry1", "pin": "0000"}
        
        with patch("custom_components.argus.websocket_api._entry_by_id", return_value=entry_mock), \
             patch("custom_components.argus.websocket_api._limiter", return_value=limiter), \
             patch("custom_components.argus.websocket_api.async_append_audit_log"):
            
            # 1. Wrong PIN attempt
            await ws_argus_verify_master_pin_for_screen_unlock(hass, connection, msg)
            connection.send_error.assert_called_with(1, "invalid_pin", "Incorrect PIN")
            
            # 2. Correct PIN attempt
            msg_correct = {"id": 2, "type": "argus/verify_master_pin_for_screen_unlock", "entry_id": "entry1", "pin": "1357"}
            await ws_argus_verify_master_pin_for_screen_unlock(hass, connection, msg_correct)
            connection.send_result.assert_called_with(2, {"success": True})
            
            # 3. Rate limiting test
            msg_wrong = {"id": 3, "type": "argus/verify_master_pin_for_screen_unlock", "entry_id": "entry1", "pin": "9999"}
            await ws_argus_verify_master_pin_for_screen_unlock(hass, connection, msg_wrong)
            await ws_argus_verify_master_pin_for_screen_unlock(hass, connection, msg_wrong)
            await ws_argus_verify_master_pin_for_screen_unlock(hass, connection, msg_wrong)
            # Now it should be rate limited
            await ws_argus_verify_master_pin_for_screen_unlock(hass, connection, msg_wrong)
            connection.send_error.assert_called_with(3, "rate_limited", "Too many failed attempts; try again later")

    async def test_kiosk_master_pin_unlock_no_pin(self):
        """Test the master PIN validation logic when no master PIN is configured."""
        from custom_components.argus.websocket_api import ws_argus_verify_master_pin_for_screen_unlock
        
        hass = MagicMock()
        connection = MagicMock()
        connection.user.id = "ha1"
        connection.user.name = "HA User"
        
        # Setup entry mock with empty pin
        entry_mock = MagicMock()
        entry_mock.entry_id = "entry1"
        entry_mock.options = {}
        entry_mock.data = {}
        
        msg = {"id": 1, "type": "argus/verify_master_pin_for_screen_unlock", "entry_id": "entry1", "pin": "0000"}
        
        with patch("custom_components.argus.websocket_api._entry_by_id", return_value=entry_mock), \
             patch("custom_components.argus.websocket_api.async_append_audit_log") as audit_mock, \
             patch("custom_components.argus.websocket_api._limiter") as limiter_mock:
            
            limiter_mock.return_value.is_blocked.return_value = False
            await ws_argus_verify_master_pin_for_screen_unlock(hass, connection, msg)
            connection.send_error.assert_called_with(1, "no_master_pin_configured", "Master PIN not configured")
            audit_mock.assert_not_called()

if __name__ == '__main__':
    unittest.main()
