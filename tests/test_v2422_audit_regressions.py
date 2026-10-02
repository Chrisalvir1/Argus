"""Execute endpoint/storage regressions without a running Home Assistant server."""
from __future__ import annotations

import ast
import copy
import importlib.util
from pathlib import Path
import unittest
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock

ROOT = Path(__file__).parents[1] / 'custom_components' / 'argus'


def function(filename, name, namespace):
    tree = ast.parse((ROOT / filename).read_text())
    node = next(n for n in ast.walk(tree) if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)) and n.name == name)
    node.decorator_list = []
    module = ast.Module(body=[ast.ImportFrom(module='__future__', names=[ast.alias(name='annotations')], level=0), node], type_ignores=[])
    exec(compile(ast.fix_missing_locations(module), str(ROOT / filename), 'exec'), namespace)
    return namespace[name]


class AuthError(Exception):
    code = 'unauthorized'
    message = 'Administrator required'


class AuditRegressions(unittest.IsolatedAsyncioTestCase):
    def test_redacted_pins_survive_rename_and_do_not_cross_profiles(self):
        preserve = function('storage.py', '_preserve_redacted_user_pins', {'copy': copy})
        current = [{'id': 'a', 'name': 'Old', 'access_pin_hash': 'secret', 'master_pin_hash': 'master'}]
        renamed = preserve(current, [{'id': 'a', 'name': 'New'}])[0]
        self.assertEqual(renamed['access_pin_hash'], 'secret')
        self.assertEqual(renamed['master_pin_hash'], 'master')
        self.assertNotIn('access_pin_hash', preserve(current, [{'id': 'b', 'name': 'Old'}])[0])
        self.assertEqual(preserve(current, [{'id': 'a', 'access_pin_hash': ''}])[0]['access_pin_hash'], '')

    async def test_access_pin_update_uses_session_and_invalidates_it(self):
        profile = {'id': 'a', 'name': 'Admin', 'role': 'admin'}
        manager = SimpleNamespace(invalidate_all_for_argus_user=Mock())
        save = AsyncMock()
        namespace = {
            '_resolve_entry_id': lambda h, e: e,
            '_require_argus_session': AsyncMock(return_value=(profile, 'ha')),
            'ArgusAuthError': AuthError,
            'async_load_ui_data': AsyncMock(return_value={'users': [profile.copy()]}),
            'async_save_ui_data': save,
            'validate_pin': lambda p: True, 'hash_pin': lambda p: 'hash:' + p,
            'async_get_session_manager': lambda h: manager,
            'async_append_audit_log': AsyncMock(),
        }
        endpoint = function('websocket_api.py', 'ws_argus_save_user_access_pin', namespace)
        connection = SimpleNamespace(send_error=Mock(), send_result=Mock())
        await endpoint(object(), connection, {'id': 1, 'entry_id': 'e', 'argus_user_id': 'a', 'pin': '840275'})
        self.assertEqual(save.call_args.args[1]['users'][0]['access_pin_hash'], 'hash:840275')
        manager.invalidate_all_for_argus_user.assert_called_once_with('e', 'a')
        connection.send_result.assert_called_once_with(1, {'success': True})

    async def test_master_validation_blocks_repeated_failures(self):
        spec = importlib.util.spec_from_file_location('audit_security', ROOT / 'security.py')
        import sys
        security = importlib.util.module_from_spec(spec)
        sys.modules[spec.name] = security
        spec.loader.exec_module(security)
        limiter = security.PinAttemptLimiter()
        namespace = {
            '_resolve_entry_id': lambda h, e: e,
            '_entry_by_id': lambda h, e: SimpleNamespace(options={'code': '840275'}, data={}),
            '_get_ha_actor': lambda c: ('ha', 'Actor'),
            '_limiter': lambda h, e: limiter, 'verify_pin': Mock(return_value=False),
        }
        endpoint = function('websocket_api.py', 'ws_argus_validate_master_pin', namespace)
        connection = SimpleNamespace(send_error=Mock(), send_result=Mock())
        for _ in range(6):
            await endpoint(object(), connection, {'id': 1, 'entry_id': 'e', 'pin': '0000'})
        self.assertEqual(connection.send_error.call_args.args[1], 'rate_limited')
        self.assertEqual(namespace['verify_pin'].call_count, 5)

    async def test_media_commands_reject_non_admin_before_storage_access(self):
        def denied(c):
            raise AuthError()
        manager = AsyncMock()
        for name in ('ws_upload', 'ws_list', 'ws_delete'):
            endpoint = function('media_websocket.py', name, {
                '_require_ha_admin': denied, 'ArgusAuthError': AuthError,
                'async_get_media_manager': manager,
            })
            connection = SimpleNamespace(send_error=Mock(), send_result=Mock())
            await endpoint(object(), connection, {'id': 1})
            connection.send_error.assert_called_once_with(1, 'unauthorized', 'Administrator required')
        manager.assert_not_called()

    async def test_disarm_invalid_code_raises_and_duress_stays_silent(self):
        import logging
        import sys
        from unittest.mock import patch
        security = sys.modules.get('audit_security')
        if security is None:
            spec = importlib.util.spec_from_file_location('audit_security', ROOT / 'security.py')
            security = importlib.util.module_from_spec(spec)
            sys.modules[spec.name] = security
            spec.loader.exec_module(security)
        state = SimpleNamespace(DISARMED='disarmed', ARMING='arming')
        audit = AsyncMock()
        namespace = {'AlarmControlPanelState': state, 'DOMAIN': 'argus',
            'PinAttemptLimiter': security.PinAttemptLimiter, 'verify_pin': lambda p,h: p == h,
            '_LOGGER': logging.getLogger('audit'), 'async_append_audit_log': audit,
            'HomeAssistantError': ValueError,
            'persistent_notification': SimpleNamespace(async_dismiss=Mock())}
        endpoint = function('alarm_control_panel.py', 'async_alarm_disarm', namespace)
        hass = SimpleNamespace(data={}, bus=SimpleNamespace(async_fire=Mock()), async_create_task=Mock())
        panel = SimpleNamespace(hass=hass, _alarm_state='armed_away', _code='840275',
            _ui_config={'users': [], 'advanced': {'duress_pin':'918273'}},
            _config_entry=SimpleNamespace(entry_id='e'), entity_id='alarm_control_panel.argus',
            _get_context_user=AsyncMock(return_value='ha'), _validate_code=lambda c: False,
            _cancel_timers=Mock(), _async_siren=AsyncMock(), _async_sync_panels=AsyncMock(),
            async_write_ha_state=Mock(), _async_mqtt_publish=AsyncMock(),
            _async_persist_stable_state=AsyncMock(), _evaluate_automations=Mock(return_value=None),
            _async_notify_configured=AsyncMock(), _matching_disarm_user=lambda c: None)
        with self.assertRaisesRegex(ValueError, 'Invalid or missing'):
            await endpoint(panel, '0000')
        panel._async_siren.assert_not_called()
        await endpoint(panel, '918273')
        self.assertEqual(panel._alarm_state, 'disarmed')
        panel._async_siren.assert_called_once_with(False)
        self.assertTrue(any(c.args[0] == 'argus_duress_activated' for c in hass.bus.async_fire.call_args_list))
        self.assertEqual(panel._async_notify_configured.call_args.args[0], 'ARGUS — Coacción / Duress')
        self.assertFalse(any('alarm.caf' in str(c) for c in panel._async_notify_configured.call_args_list))

    def test_legacy_fallback_hash_verifies_on_scrypt_capable_host(self):
        import base64
        import hashlib
        import sys
        security = sys.modules['audit_security']
        salt = b'0123456789abcdef'
        digest = hashlib.pbkdf2_hmac('sha256', b'840275', salt, 100000)
        stored = 'scrypt:' + base64.b64encode(salt).decode() + ':' + base64.b64encode(digest).decode()
        self.assertTrue(security.verify_pin('840275', stored))
        self.assertFalse(security.verify_pin('840276', stored))
