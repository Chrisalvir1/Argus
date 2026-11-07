"""Voice selection tests use real matching logic, without Home Assistant imports."""
import importlib.util
from pathlib import Path
from types import SimpleNamespace
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('voice_rules_test', ROOT / 'custom_components/argus/voice_message_rules.py')
rules = importlib.util.module_from_spec(spec)
spec.loader.exec_module(rules)

def entity(state, **attributes):
    return SimpleNamespace(state=state, attributes=attributes)

class VoiceMessageRulesTests(unittest.TestCase):
    def setUp(self):
        self.zones = [
            {'id': 'a', 'number': 1, 'area': 'Entrada', 'modes': ['home', 'away'], 'entity_ids': ['binary_sensor.a', 'binary_sensor.b']},
            {'id': 'b', 'number': 1, 'area': 'Patio', 'modes': ['away'], 'entity_ids': ['binary_sensor.c']},
        ]
        self.entities = {'binary_sensor.a': entity('on', friendly_name='Puerta'), 'binary_sensor.b': entity('off'), 'binary_sensor.c': entity('unavailable')}

    def message(self, states, **kwargs):
        return rules.build_rule_message('Atención', {'zone_ids': kwargs.pop('selected', None), 'states': states}, self.zones, self.entities, **kwargs)

    def test_open_closed_and_offline_are_independent(self):
        opened = self.message(['open'], mode='away')
        self.assertIn('1 zona, 1 sensor', opened)
        self.assertIn('Puerta', opened)
        self.assertNotIn('binary_sensor.b', opened)
        self.assertNotIn('Patio', opened)
        self.assertIn('binary_sensor.b', self.message(['closed']))
        self.assertNotIn('Patio', self.message(['closed']))
        self.assertIn('Patio', self.message(['unavailable']))

    def test_mode_zone_and_eligibility_intersect(self):
        self.assertNotIn('Patio', self.message(['unavailable'], mode='home'))
        self.assertNotIn('Entrada', self.message(['open'], selected=['b']))
        self.assertNotIn('Puerta', self.message(['open'], eligible={'binary_sensor.b'}))

    def test_counts_unique_sensors_and_zone_ids_not_zone_numbers(self):
        self.zones[1]['entity_ids'].append('binary_sensor.a')
        text = self.message(['open', 'unavailable'])
        self.assertIn('2 zonas, 2 sensores', text)
        self.assertEqual(text.count('Puerta'), 1)

    def test_transitions_require_event_and_matching_current_state(self):
        self.assertNotIn('se acaba', self.message(['recently_closed']))
        self.assertIn('se acaba de cerrar', self.message(['recently_closed'], closed=['binary_sensor.b']))
        self.assertNotIn('se acaba', self.message(['recently_closed'], closed=['binary_sensor.a']))

    def test_low_battery_and_open_are_counted_once(self):
        self.entities['binary_sensor.a'].attributes.update(battery_level=12)
        text = self.message(['open', 'battery_low'])
        self.assertIn('1 sensor', text)
        self.assertIn('12%', text)

    def test_unknown_state_is_never_closed_or_open(self):
        self.entities['binary_sensor.a'] = entity('unknown')
        self.assertNotIn('Entrada', self.message(['open']))
        self.assertIn('sin conexión', self.message(['unavailable']))

    def test_plain_text_without_states_is_literal(self):
        self.assertEqual(self.message([]), 'Atención')
        self.assertEqual(rules.build_rule_message('Hola {mode}', {'states': []}, [], {}), 'Hola {mode}')

    def test_removed_disabled_and_empty_zone_selections_do_not_leak(self):
        self.zones[0]['enabled'] = False
        self.assertNotIn('Entrada', self.message(['open']))
        self.assertNotIn('Patio', self.message(['unavailable'], selected=[]))

    def test_validation_rejects_unknown_zones_states_and_fields(self):
        for bad in [{'start': {'zone_ids': ['unknown'], 'states': []}}, {'start': {'states': ['fake']}}, {'fake': {}}, {'start': {'extra': True}}]:
            with self.assertRaises(ValueError): rules.validate_rules(bad, ['start'], {'a'})
        self.assertEqual(rules.validate_rules({'start': {'zone_ids': ['a','a'], 'states': ['open','open']}}, ['start'], {'a'}), {'start': {'zone_ids': ['a'], 'states': ['open']}})

    def test_without_zones_counts_sensors_without_inventing_a_zone(self):
        text = rules.build_rule_message('', {'states': ['open']}, [{'id': '__mode_sensors__', 'entity_ids': ['binary_sensor.a']}], self.entities)
        self.assertIn('1 sensor', text)
        self.assertNotIn('zona', text)

class VoiceRuleRuntimeTests(unittest.IsolatedAsyncioTestCase):
    async def test_live_values_and_mode_scope_are_applied_before_speech(self):
        import ast
        import sys
        from unittest.mock import patch
        tree = ast.parse((ROOT / 'custom_components/argus/arming_voice.py').read_text())
        node = next(n for n in tree.body if isinstance(n, ast.AsyncFunctionDef) and n.name == '_apply_message_rule')
        ui = {'zones': [{'id': 'entrada', 'modes': ['home'], 'entity_ids': ['binary_sensor.a', 'binary_sensor.b']}],
              'modes': {'__by_entity__': {'alarm_control_panel.argus': {'home': {'sensors': ['binary_sensor.a']}}}},
              'voice_message_rules': {'start': {'zone_ids': None, 'states': ['open', 'unavailable']}}}
        async def load(*args): return ui
        ns = {'__package__': 'voice_test_runtime', 'async_load_ui_data': load, '_append_voice_sentence': lambda a, b: a + '. ' + b, 'translate': lambda lang, key: key}
        exec(compile(ast.Module(body=[node], type_ignores=[]), '<voice-runtime>', 'exec'), ns)
        values = {'binary_sensor.a': entity('on', friendly_name='Mi puerta'), 'binary_sensor.b': entity('on', friendly_name='Fuera del modo')}
        hass = SimpleNamespace(states=SimpleNamespace(get=values.get))
        entry = SimpleNamespace(entry_id='entry')
        with patch.dict(sys.modules, {'voice_test_runtime.voice_message_rules': rules}):
            call = ns['_apply_message_rule']
            self.assertEqual(await call(hass, entry, 'legacy', 'Texto anterior', {}, 'es'), 'Texto anterior')
            text = await call(hass, entry, 'start', 'Ignored legacy message', {'start': 'Atención'}, 'es', mode='armed_home', alarm_entity_id='alarm_control_panel.argus')
            self.assertIn('Mi puerta', text)
            self.assertNotIn('Fuera del modo', text)
            self.assertNotIn('Ignored legacy', text)
            values['binary_sensor.a'] = entity('unavailable', friendly_name='Mi puerta')
            text = await call(hass, entry, 'start', '', {'start': 'Atención'}, 'es', mode='armed_home', alarm_entity_id='alarm_control_panel.argus')
            self.assertIn('sin conexión', text)
            self.assertNotIn('abierto o activo', text)
