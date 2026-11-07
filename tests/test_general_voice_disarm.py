"""Confirmed disarm transitions emit one general announcement."""
import ast
import asyncio
from pathlib import Path
from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock

ROOT = Path(__file__).resolve().parents[1]

class GeneralVoiceDisarmTests(IsolatedAsyncioTestCase):
    async def run_transition(self, before, after, *, context=None, sources=None):
        tree = ast.parse((ROOT / 'custom_components/argus/trigger_voice.py').read_text())
        method = next(node for node in ast.walk(tree) if isinstance(node, ast.AsyncFunctionDef) and node.name == 'wrapped_disarm')
        tasks = []
        panel = SimpleNamespace(_alarm_state=before, _config_entry=object(), async_write_ha_state=lambda: None)
        panel.entity_id = 'alarm_control_panel.argus'
        panel._context = context
        panel.hass = SimpleNamespace(data={'argus': {'voice_action_contexts': sources or {}}}, async_create_task=lambda coro: tasks.append(asyncio.create_task(coro)))
        async def disarm(*args, **kwargs):
            panel._alarm_state = after
        announce = AsyncMock()
        namespace = {'original_disarm': disarm, 'AlarmControlPanelState': SimpleNamespace(DISARMED='disarmed'),
                     'stop_repeat_alarm_voice': lambda panel: None, 'async_announce_disarmed': announce}
        exec(compile(ast.Module(body=[method], type_ignores=[]), '<disarm-wrapper>', 'exec'), namespace)
        await namespace['wrapped_disarm'](panel)
        if tasks:
            await asyncio.gather(*tasks)
        self.last_announcement = announce.call_args
        return announce.await_count

    async def test_rejected_disarm_does_not_announce(self):
        self.assertEqual(await self.run_transition('armed_away', 'armed_away'), 0)

    async def test_confirmed_disarm_announces_once(self):
        self.assertEqual(await self.run_transition('armed_away', 'disarmed'), 1)

    async def test_already_disarmed_does_not_repeat(self):
        self.assertEqual(await self.run_transition('disarmed', 'disarmed'), 0)

    async def test_confirmed_disarm_keeps_previous_mode_and_verified_profile(self):
        await self.run_transition('armed_night', 'disarmed', context=SimpleNamespace(id='ctx', user_id='ha'), sources={'ctx': {'entity_id': 'alarm_control_panel.argus', 'source': 'Argus', 'profile_name': 'Chris'}})
        self.assertEqual(self.last_announcement.kwargs['actor_profile_name'], 'Chris')
        self.assertEqual(self.last_announcement.kwargs['previous_mode'], 'armed_night')

    async def test_unrelated_context_does_not_claim_an_actor(self):
        await self.run_transition('armed_away', 'disarmed', context=SimpleNamespace(id='ctx', user_id=None), sources={'ctx': {'entity_id': 'alarm_control_panel.other', 'source': 'Argus', 'profile_name': 'Incorrect'}})
        self.assertIsNone(self.last_announcement.kwargs['actor_profile_name'])
        self.assertIsNone(self.last_announcement.kwargs['actor_source'])

class DisarmSpeechIdentityTests(IsolatedAsyncioTestCase):
    async def message(self, **kwargs):
        tree = ast.parse((ROOT / 'custom_components/argus/arming_voice.py').read_text())
        method = next(n for n in tree.body if isinstance(n, ast.AsyncFunctionDef) and n.name == 'async_announce_disarmed')
        speak = AsyncMock()
        ns = {'_get_language': AsyncMock(return_value='es'), '_options': lambda *args: {},
              'translate': lambda lang, value: {'armed_home': 'En Casa', 'armed_away': 'Ausente', 'armed_night': 'Noche'}.get(value, value),
              '_apply_message_rule': AsyncMock(return_value='Sistema desarmado'),
              '_append_voice_sentence': lambda a,b: a + '. ' + b, '_async_speak': speak}
        exec(compile(ast.Module(body=[method], type_ignores=[]), '<disarm-speech>', 'exec'), ns)
        hass = SimpleNamespace(auth=SimpleNamespace(async_get_user=AsyncMock(return_value=SimpleNamespace(name='Servicio', is_active=True))))
        await ns['async_announce_disarmed'](hass, SimpleNamespace(title='Casa'), **kwargs)
        return speak.call_args.args[2]

    async def test_argus_profile_and_mode_are_announced(self):
        text = await self.message(actor_source='Argus', actor_profile_name='Chris', previous_mode='armed_night')
        self.assertIn('Desarmado por Chris', text)
        self.assertIn('Noche', text)

    async def test_homekit_never_infers_a_person_from_service_account(self):
        text = await self.message(actor_source='HomeKit', actor_user_id='service', actor_profile_name='Untrusted')
        self.assertIn('desde HomeKit', text)
        self.assertNotIn('Untrusted', text)
        self.assertNotIn('Servicio', text)

    async def test_unidentified_and_account_are_distinct(self):
        self.assertIn('no identificado', await self.message())
        self.assertIn('cuenta de Home Assistant Servicio', await self.message(actor_user_id='ha'))
