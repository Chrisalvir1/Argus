"""Immediate arming must announce its committed mode without waiting sensors."""
import ast
from pathlib import Path
from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock

SOURCE = Path(__file__).resolve().parents[1] / 'custom_components/argus/arming_voice.py'
TREE = ast.parse(SOURCE.read_text())
METHOD = next(n for n in TREE.body if isinstance(n, ast.AsyncFunctionDef) and n.name == 'async_announce_arming_wait_update')

class TestImmediateArmingVoice(IsolatedAsyncioTestCase):
    async def test_committed_empty_modes_announce_selected_mode(self):
        speak = AsyncMock()
        events = []
        mode_names = {'armed_home': 'En casa', 'armed_away': 'Ausente', 'armed_night': 'Noche'}
        namespace = {'_get_language': AsyncMock(return_value='es'), '_options': lambda *a: {},
                     '_async_speak': speak, 'translate': lambda lang, key: {**mode_names, 'msg_armed': 'Argus: sistema armado en modo {mode}.'}.get(key, key),
                     'CONF_ARMING_VOICE_MESSAGE_COMPLETE': 'complete'}
        exec(compile(ast.Module(body=[METHOD], type_ignores=[]), str(SOURCE), 'exec'), namespace)
        hass = SimpleNamespace(bus=SimpleNamespace(async_fire=lambda *a: events.append(a)))
        entry = SimpleNamespace(entry_id='argus', title='Casa')
        await namespace[METHOD.name](hass, entry, alarm_entity_id='alarm_control_panel.argus', target='armed_home', previous_open=[], current_open=[])
        speak.assert_not_awaited()
        for mode, name in mode_names.items():
            await namespace[METHOD.name](hass, entry, alarm_entity_id='alarm_control_panel.argus', target=mode, previous_open=[], current_open=[], committed=True)
            self.assertEqual(speak.await_args.args[2], f'Argus: sistema armado en modo {name}.')
            self.assertEqual(events[-1][1]['mode'], mode)
        self.assertEqual(speak.await_count, 3)
