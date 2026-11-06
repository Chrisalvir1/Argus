"""Opt-in zone policy and automation payload regression coverage."""
import copy
import importlib.util
from pathlib import Path
from types import SimpleNamespace
import unittest

path = Path(__file__).resolve().parents[1] / 'custom_components/argus/zones.py'
spec = importlib.util.spec_from_file_location('zone_activation_test', path)
zones = importlib.util.module_from_spec(spec)
spec.loader.exec_module(zones)

class ZoneActivationTests(unittest.TestCase):
    def setUp(self):
        self.zone = {**zones.default_zones()[0], 'modes': ['away'], 'entity_ids': ['binary_sensor.patio']}
        self.modes = {'away': {'sensors': ['binary_sensor.legacy'], 'exit_delay': 15}}

    def test_disabled_definition_edits_leave_legacy_policy_intact(self):
        result = zones.zone_activation_updates({'modes': self.modes}, [self.zone], False)
        self.assertEqual(result['modes'], self.modes)
        self.assertEqual(result['zones'], [])
        self.assertEqual(result['zones_saved'], [self.zone])

    def test_enable_disable_restores_legacy_sensors_and_keeps_other_mode_edits(self):
        original = copy.deepcopy(self.modes)
        enabled = zones.zone_activation_updates({'modes': self.modes}, [self.zone], True)
        self.assertEqual(enabled['modes']['away']['sensors'], ['binary_sensor.legacy', 'binary_sensor.patio'])
        enabled['modes']['away']['exit_delay'] = 30
        disabled = zones.zone_activation_updates(enabled, [self.zone], False)
        self.assertEqual(disabled['modes']['away']['sensors'], ['binary_sensor.legacy'])
        self.assertEqual(disabled['modes']['away']['exit_delay'], 30)
        self.assertEqual(self.modes, original)
        self.assertEqual(disabled['zones_saved'], [self.zone])

    def test_empty_activation_provides_initial_zone_slots(self):
        enabled = zones.zone_activation_updates({'modes': self.modes}, [], True)
        self.assertEqual(enabled['zones'], zones.default_zones())
        self.assertEqual(enabled['modes']['away']['sensors'], ['binary_sensor.legacy'])

    def test_entity_scoped_modes_restore(self):
        before = {'__by_entity__': {'alarm_control_panel.argus': self.modes}}
        enabled = zones.zone_activation_updates({'modes': before}, [self.zone], True)
        disabled = zones.zone_activation_updates(enabled, [self.zone], False)
        self.assertEqual(disabled['modes']['__by_entity__']['alarm_control_panel.argus']['away']['sensors'], ['binary_sensor.legacy'])

    def test_unavailable_never_counts_as_closed(self):
        states = {'binary_sensor.patio': SimpleNamespace(state='unavailable')}
        event = zones.zone_event_payloads([self.zone], 'binary_sensor.patio', states)[0]
        self.assertFalse(event['all_sensors_closed'])
        self.assertFalse(event['all_sensors_active'])
        self.assertEqual(event['unverifiable_sensors'], ['binary_sensor.patio'])

    def test_all_and_any_sensor_state(self):
        zone = {**self.zone, 'entity_ids': ['a', 'b']}
        states = {'a': SimpleNamespace(state='on'), 'b': SimpleNamespace(state='off')}
        event = zones.zone_event_payloads([zone], 'a', states)[0]
        self.assertTrue(event['any_sensor_active'])
        self.assertFalse(event['all_sensors_active'])
        states['b'].state = 'on'
        self.assertTrue(zones.zone_event_payloads([zone], 'b', states)[0]['all_sensors_active'])
        self.assertEqual(zones.zone_event_payloads([], 'a', states), [])
