"""Exercise the real light helpers with virtual states and mocked HA services."""
import ast
import asyncio
import copy
import logging
from pathlib import Path
from types import SimpleNamespace
from typing import Any
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock

source = Path(__file__).resolve().parents[1] / 'custom_components/argus/output_profiles.py'
tree = ast.parse(source.read_text())
names = {'_normalise_rgb', '_supported_modes', '_supports_brightness', '_light_service_data', '_capture_light_state', '_restore_light_state', '_brightness_pulse', '_async_dispatch_with_output_profiles'}
namespace = {'copy': copy, 'asyncio': asyncio, 'Any': Any, 'HomeAssistant': object,
             '_COLOR_MODES': {'hs', 'xy', 'rgb', 'rgbw', 'rgbww'}, '_NATIVE_EFFECT_NAMES': set(), '_LOGGER': logging.getLogger(__name__)}
exec(compile(ast.Module(body=[node for node in tree.body if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)) and node.name in names], type_ignores=[]), str(source), 'exec'), namespace)

class RgbAlarmRestorationTests(IsolatedAsyncioTestCase):
    def panel(self, state='on', **attrs):
        original = {'supported_color_modes': ['rgb'], 'supported_features': 32, 'color_mode': 'rgb',
                    'rgb_color': [10, 40, 90], 'brightness': 90, 'effect': 'Calma', 'effect_list': ['Calma']}
        original.update(attrs)
        self.states = {'light.test': SimpleNamespace(state=state, attributes=original)}
        self.services = AsyncMock()
        hass = SimpleNamespace(states=self.states, services=SimpleNamespace(async_call=self.services), async_create_task=asyncio.create_task)
        return SimpleNamespace(hass=hass, _panic_active=False, _triggered_mode='away', _ui_config={},
                               _mode_config=lambda mode: {'light_siren_settings': {'light.test': {'rgb_color': [255, 0, 0], 'flash_mode': 'breathing'}}})

    async def test_selected_rgb_is_preserved_during_breathing(self):
        panel = self.panel()
        data, method, interval = namespace['_light_service_data'](panel, 'light.test', {'rgb_color': [255, 0, 0], 'flash_mode': 'breathing'})
        self.assertEqual(data['rgb_color'], [255, 0, 0])
        self.assertNotIn('effect', data)
        self.assertEqual((method, interval, data['transition']), ('brightness_pulse', 1.5, 1.2))

    async def test_alarm_can_stop_advertised_native_effect_and_restore_it(self):
        panel = self.panel(effect_list=['None', 'Calma'])
        snapshot = namespace['_capture_light_state'](panel.hass, 'light.test')
        data, _, _ = namespace['_light_service_data'](panel, 'light.test', {'rgb_color': [255, 0, 0], 'flash_mode': 'breathing'})
        self.assertEqual(data['effect'], 'None')
        await namespace['_restore_light_state'](panel.hass, 'light.test', snapshot)
        self.assertEqual(self.services.call_args.args[2]['effect'], 'Calma')

    async def test_unsupported_lamp_gets_no_rgb_or_breathing(self):
        panel = self.panel(supported_color_modes=['onoff'], supported_features=0, brightness=None)
        data, method, _ = namespace['_light_service_data'](panel, 'light.test', {'rgb_color': [255, 0, 0], 'flash_mode': 'breathing'})
        self.assertNotIn('rgb_color', data)
        self.assertNotIn('transition', data)
        self.assertEqual(method, 'steady_safe')

    async def test_disarm_stops_task_and_restores_previous_on_color_brightness_effect(self):
        panel = self.panel()
        await namespace['_async_dispatch_with_output_profiles'](panel, True, ['light.test'])
        await asyncio.sleep(0)
        await namespace['_async_dispatch_with_output_profiles'](panel, False, ['light.test'])
        self.assertEqual(panel._argus_flash_tasks, {})
        self.assertEqual(panel._argus_light_restore, {})
        restored = self.services.call_args.args[2]
        self.assertEqual(restored['rgb_color'], [10, 40, 90])
        self.assertEqual(restored['brightness'], 90)
        self.assertEqual(restored['effect'], 'Calma')
        self.assertEqual(restored['transition'], 0)
        count = self.services.call_count
        await asyncio.sleep(0)
        self.assertEqual(self.services.call_count, count)

    async def test_previous_off_state_returns_to_off(self):
        panel = self.panel(state='off')
        snapshot = namespace['_capture_light_state'](panel.hass, 'light.test')
        await namespace['_restore_light_state'](panel.hass, 'light.test', snapshot)
        self.assertEqual(self.services.call_args.args[:2], ('light', 'turn_off'))

    async def test_rgbw_channels_are_preserved(self):
        panel = self.panel(color_mode='rgbw', supported_color_modes=['rgbw'], rgbw_color=[10, 20, 30, 40])
        snapshot = namespace['_capture_light_state'](panel.hass, 'light.test')
        self.assertEqual(snapshot['service_data']['rgbw_color'], [10, 20, 30, 40])
        self.assertNotIn('rgb_color', snapshot['service_data'])

    async def test_siren_only_receives_advertised_tone(self):
        panel = self.panel()
        self.states['siren.test'] = SimpleNamespace(state='off', attributes={'available_tones': ['alarm', 'fire']})
        panel._mode_config = lambda mode: {'siren_settings': {'siren.test': {'tone': 'fire'}}}
        await namespace['_async_dispatch_with_output_profiles'](panel, True, ['siren.test'])
        self.assertEqual(self.services.call_args.args[2]['tone'], 'fire')
        panel._mode_config = lambda mode: {'siren_settings': {'siren.test': {'tone': 'unsupported'}}}
        await namespace['_async_dispatch_with_output_profiles'](panel, True, ['siren.test'])
        self.assertNotIn('tone', self.services.call_args.args[2])
