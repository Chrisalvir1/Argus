"""Functional tests for Argus v1.9.0 Security Review Findings."""
import asyncio
import unittest
import sys
from unittest.mock import AsyncMock, MagicMock, patch

# Mock homeassistant before anything imports custom_components.argus
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
alarm_panel_mock = MagicMock()
alarm_panel_mock.AlarmControlPanelState = MagicMock()
sys.modules["homeassistant.components.alarm_control_panel"] = alarm_panel_mock
sys.modules["voluptuous"] = ha_mock
sys.modules["aiohttp"] = ha_mock
sys.modules["aiohttp.web"] = ha_mock


class TestV190Functional(unittest.IsolatedAsyncioTestCase):

    async def test_sos_output_profile_saves_selected_outputs_for_active_entry(self):
        """The SOS picker sends its explicit entry and persists valid outputs."""
        from custom_components.argus.output_profiles import ws_argus_save_panic_output_profile

        hass = MagicMock()
        hass.states.get.return_value = None
        connection = MagicMock()
        saved = {"panic_outputs": ["light.hall"], "panic_output_settings": {"light.hall": {"flash_mode": "none"}}}
        with patch("custom_components.argus.output_profiles.argus_ws._resolve_entry_id", return_value="entry-active"), \
             patch("custom_components.argus.output_profiles._require_permission", new_callable=AsyncMock) as require, \
             patch("custom_components.argus.output_profiles.async_save_ui_data", new_callable=AsyncMock, return_value=saved) as save, \
             patch("custom_components.argus.output_profiles.async_dispatcher_send"):
            await ws_argus_save_panic_output_profile(hass, connection, {
                "id": 17, "type": "argus/save_panic_output_profile", "entry_id": "entry-active",
                "outputs": ["light.hall", "sensor.invalid"], "settings": {"light.hall": {"flash_mode": "none"}},
            })

        require.assert_awaited_once_with(hass, connection, "entry-active", "manage_sos")
        self.assertEqual(save.await_args.args[1]["panic_outputs"], ["light.hall"])
        self.assertEqual(save.await_args.args[2], "entry-active")
        connection.send_result.assert_called_once_with(17, {
            "success": True, "outputs": ["light.hall"],
            "settings": {"light.hall": {"flash_mode": "none"}},
        })
    
    @patch("custom_components.argus.websocket_api._resolve_entry_id")
    @patch("custom_components.argus.websocket_api._require_permission", new_callable=AsyncMock)
    async def test_forensic_timeline_authorization(self, mock_require, mock_resolve):
        """1. Corregir autorización de timeline forense."""
        from custom_components.argus.websocket_api import ws_argus_get_forensic_timeline
        from custom_components.argus.auth import ArgusAuthError
        
        mock_resolve.return_value = "test_entry"
        mock_require.side_effect = ArgusAuthError("auth_error", "Missing view_history permission")
        
        hass = MagicMock()
        connection = MagicMock()
        msg = {"id": 1, "type": "argus/get_forensic_timeline", "entry_id": "test_entry", "limit": 100}
        
        await ws_argus_get_forensic_timeline(hass, connection, msg)
        
        # Verify it requires the permission and sends error
        mock_require.assert_awaited_once_with(hass, connection, "test_entry", "view_history")
        connection.send_error.assert_called_once_with(1, "auth_error", "Missing view_history permission")

    @patch("custom_components.argus.websocket_api._get_ha_actor")
    @patch("custom_components.argus.websocket_api.async_load_ui_data", new_callable=AsyncMock)
    @patch("custom_components.argus.websocket_api.async_save_ui_data", new_callable=AsyncMock)
    @patch("custom_components.argus.websocket_api.async_get_session_manager")
    @patch("custom_components.argus.websocket_api.async_append_audit_log", new_callable=AsyncMock)
    async def test_onboarding_pins(self, mock_audit, mock_sm, mock_save, mock_load, mock_actor):
        """2. Corregir PINs del onboarding."""
        from custom_components.argus.websocket_api import ws_argus_complete_first_run
        
        mock_actor.return_value = ("ha_123", "Admin")
        mock_load.return_value = {"first_run": True, "users": []}
        
        hass = MagicMock()
        entry_mock = MagicMock()
        entry_mock.options = {"code": "old_code"}
        hass.config_entries.async_get_entry.return_value = entry_mock
        
        connection = MagicMock()
        connection.user = MagicMock()
        connection.user.is_admin = True
        msg = {
            "id": 2, 
            "type": "argus/complete_first_run", 
            "entry_id": "test_entry", 
            "admin_name": "Admin",
            "access_pin": "8394",
            "master_pin": "4938"
        }
        
        await ws_argus_complete_first_run(hass, connection, msg)
        
        # Check if any error was sent
        connection.send_error.assert_not_called()
        
        # Verify UI data is saved with access_pin_hash and no pin
        mock_save.assert_awaited_once()
        saved_updates = mock_save.await_args[0][1]
        
        new_user = saved_updates["users"][0]
        self.assertEqual(new_user["name"], "Admin")
        self.assertIn("access_pin_hash", new_user)
        self.assertNotIn("pin", new_user)
        
        # Verify master pin updates the config entry options
        hass.config_entries.async_update_entry.assert_called_once()
        args, kwargs = hass.config_entries.async_update_entry.call_args
        self.assertEqual(args[0], entry_mock)
        self.assertIn("code", kwargs["options"])
        self.assertNotEqual(kwargs["options"]["code"], "old_code")
        self.assertNotEqual(kwargs["options"]["code"], "54321") # it should be hashed
        self.assertNotIn("advanced", saved_updates) # Should not save in advanced

    @patch("custom_components.argus.presence.async_load_ui_data", new_callable=AsyncMock)
    @patch("custom_components.argus.presence.async_track_state_change_event")
    async def test_presence_manager_updates(self, mock_track, mock_load):
        """3. Corregir actualización de PresenceManager."""
        from custom_components.argus.presence import PresenceManager
        
        hass = MagicMock()
        pm = PresenceManager(hass, "test_entry")
        
        # Set up a dummy pending task
        dummy_task = MagicMock()
        pm._pending_tasks["rule1"] = dummy_task
        
        # Mock load ui data to return a valid rule
        mock_load.return_value = {
            "presence_rules": [
                {"id": "rule1", "enabled": True, "persons": ["person.john"]}
            ]
        }
        
        # Directly await the listener update logic to ensure completion
        await pm.async_update_listeners()
        
        # Verify pending task was cancelled
        dummy_task.cancel.assert_called_once()
        self.assertEqual(len(pm._pending_tasks), 0)
        
        # Verify track state change was called
        mock_track.assert_called_once_with(hass, ["person.john"], pm._async_state_changed)

    @patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="test_entry")
    @patch("custom_components.argus.websocket_api._require_ha_admin")
    @patch("custom_components.argus.websocket_api._require_argus_admin", new_callable=AsyncMock)
    async def test_get_ha_users_persons_auth(self, mock_require_argus, mock_require_ha, mock_resolve):
        """Test get_ha_users and get_ha_persons require HA and Argus admin."""
        from custom_components.argus.websocket_api import ws_argus_get_ha_users, ws_argus_get_ha_persons, ArgusAuthError
        
        # Test 1: HA admin check fails
        hass = AsyncMock()
        mock_require_ha.side_effect = ArgusAuthError("unauthorized", "Requires HA Admin")
        connection = MagicMock()
        connection.user.is_admin = False
        msg = {"id": 10, "type": "argus/get_ha_users", "entry_id": "test_entry"}
        
        await ws_argus_get_ha_users(hass, connection, msg)
        connection.send_error.assert_called_with(10, "unauthorized", "Requires HA Admin")
        
        # Test 2: Argus admin check fails
        mock_require_ha.side_effect = None
        mock_require_argus.side_effect = ArgusAuthError("unauthorized", "Requires Argus Admin")
        connection.reset_mock()
        msg["type"] = "argus/get_ha_persons"
        msg["id"] = 11
        
        await ws_argus_get_ha_persons(hass, connection, msg)
        connection.send_error.assert_called_with(11, "unauthorized", "Requires Argus Admin")
        
        # Test 3: Both pass for get_ha_users
        mock_require_argus.side_effect = None
        
        # Mock auth users
        class MockUser:
            def __init__(self, uid, name, admin):
                self.id = uid
                self.name = name
                self.is_admin = admin
        
        async def mock_get_users():
            return [MockUser("u1", "Admin", True)]
        
        hass.auth.async_get_users = mock_get_users
        
        connection.reset_mock()
        msg["type"] = "argus/get_ha_users"
        msg["id"] = 12
        
        await ws_argus_get_ha_users(hass, connection, msg)
        connection.send_result.assert_called_with(12, {"ha_users": [{"id": "u1", "name": "Admin", "is_admin": True}]})

        # Test 4: Both pass for get_ha_persons
        class MockState:
            def __init__(self, entity_id, name):
                self.entity_id = entity_id
                self.attributes = {"friendly_name": name}
        
        hass.states.async_all = MagicMock(return_value=[MockState("person.john", "John Doe")])
        connection.reset_mock()
        msg["type"] = "argus/get_ha_persons"
        msg["id"] = 13
        
        await ws_argus_get_ha_persons(hass, connection, msg)
        connection.send_result.assert_called_with(13, {"ha_persons": [{"entity_id": "person.john", "name": "John Doe", "user_id": None}]})

    @patch("custom_components.argus.websocket_api._resolve_entry_id", return_value="test_entry")
    @patch("custom_components.argus.websocket_api._require_argus_session", new_callable=AsyncMock)
    @patch("custom_components.argus.websocket_api._require_permission", new_callable=AsyncMock)
    @patch("custom_components.argus.websocket_api._resolve_alarm_entity_id")
    @patch("custom_components.argus.websocket_api.async_append_audit_log", new_callable=AsyncMock)
    async def test_perform_alarm_action(self, mock_audit, mock_resolve_alarm, mock_require_perm, mock_require_session, mock_resolve_entry):
        from custom_components.argus.websocket_api import ws_argus_perform_alarm_action
        hass = AsyncMock()
        connection = MagicMock()
        
        mock_require_session.return_value = ({"name": "Admin"}, "user1")
        mock_resolve_alarm.return_value = "alarm_control_panel.argus"
        
        msg = {"id": 20, "type": "argus/perform_alarm_action", "action": "arm_away", "entry_id": "test_entry"}
        
        # Test 1: Service succeeds
        hass.services.async_call.return_value = None
        await ws_argus_perform_alarm_action(hass, connection, msg)
        
        hass.services.async_call.assert_called_once()
        kwargs = hass.services.async_call.call_args[1]
        self.assertTrue(kwargs.get("blocking"))
        mock_audit.assert_called_once()
        connection.send_result.assert_called_with(20, {"success": True})
        
        # Test 2: Service fails
        hass.services.async_call.reset_mock()
        mock_audit.reset_mock()
        connection.reset_mock()
        
        msg["id"] = 21
        hass.services.async_call.side_effect = Exception("Service error")
        
        await ws_argus_perform_alarm_action(hass, connection, msg)
        
        connection.send_error.assert_called_with(21, "service_failed", "Service error")
        mock_audit.assert_not_called()
