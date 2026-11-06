"""Bridge SOS stop must honor PIN and preserve independent intrusion state."""
import ast
import importlib.util
import sys
from pathlib import Path
from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock, Mock

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('panic_bridge_security', ROOT/'custom_components/argus/security.py')
security = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = security
spec.loader.exec_module(security)
source = ROOT/'custom_components/argus/alarm_control_panel.py'
tree = ast.parse(source.read_text())
method = next(node for node in ast.walk(tree) if isinstance(node, ast.AsyncFunctionDef) and node.name == 'async_stop_panic')
namespace = {'HomeAssistantError': RuntimeError, 'PinAttemptLimiter': security.PinAttemptLimiter, 'DOMAIN': 'argus',
             'AlarmControlPanelState': SimpleNamespace(TRIGGERED='triggered'),
             'persistent_notification': SimpleNamespace(async_dismiss=Mock()), 'async_append_audit_log': AsyncMock()}
exec(compile(ast.Module(body=[method], type_ignores=[]), str(source), 'exec'), namespace)

class PanicPinBridgeTests(IsolatedAsyncioTestCase):
    def panel(self, pin=True, intrusion=False):
        return SimpleNamespace(_panic_active=True, _code='configured' if pin else '', _ui_config={},
            _context=SimpleNamespace(user_id='bridge'), _config_entry=SimpleNamespace(entry_id='lab'),
            hass=SimpleNamespace(data={}), _validate_code=lambda value: value == 'fixture-only',
            _require_alarm_actor_permission=AsyncMock(), _alarm_state='triggered' if intrusion else 'armed_away',
            _active_panic_outputs=('siren.shared', 'light.sos'), _get_siren_entities=lambda: ['siren.shared'],
            async_write_ha_state=Mock(), _async_siren=AsyncMock(), _get_context_user=AsyncMock(return_value='lab'))

    async def test_bridge_without_pin_cannot_stop_protected_sos(self):
        panel = self.panel()
        with self.assertRaises(RuntimeError):
            await namespace['async_stop_panic'](panel)
        self.assertTrue(panel._panic_active)
        panel._async_siren.assert_not_awaited()

    async def test_wrong_pin_does_not_change_state(self):
        panel = self.panel()
        with self.assertRaises(RuntimeError):
            await namespace['async_stop_panic'](panel, code='invalid')
        self.assertTrue(panel._panic_active)
        self.assertEqual(panel._alarm_state, 'armed_away')

    async def test_correct_pin_stops_only_sos_during_intrusion(self):
        panel = self.panel(intrusion=True)
        await namespace['async_stop_panic'](panel, code='fixture-only')
        self.assertFalse(panel._panic_active)
        self.assertEqual(panel._alarm_state, 'triggered')
        panel._async_siren.assert_awaited_once_with(False, ['light.sos'])

    async def test_no_pin_switch_off_preserves_armed_mode(self):
        panel = self.panel(pin=False)
        await namespace['async_stop_panic'](panel)
        self.assertFalse(panel._panic_active)
        self.assertEqual(panel._alarm_state, 'armed_away')

    async def test_blocked_attempts_cannot_be_bypassed_with_valid_pin(self):
        panel = self.panel()
        limiter = security.PinAttemptLimiter()
        for _ in range(20): limiter.record_failure('bridge')
        panel.hass.data['argus_pin_limiter_lab'] = limiter
        with self.assertRaises(RuntimeError):
            await namespace['async_stop_panic'](panel, code='fixture-only')
        self.assertTrue(panel._panic_active)
