"""Confirmed disarm transitions emit one general announcement."""
import ast
import asyncio
from pathlib import Path
from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock

ROOT = Path(__file__).resolve().parents[1]

class GeneralVoiceDisarmTests(IsolatedAsyncioTestCase):
    async def run_transition(self, before, after):
        tree = ast.parse((ROOT / 'custom_components/argus/trigger_voice.py').read_text())
        method = next(node for node in ast.walk(tree) if isinstance(node, ast.AsyncFunctionDef) and node.name == 'wrapped_disarm')
        tasks = []
        panel = SimpleNamespace(_alarm_state=before, _config_entry=object(), async_write_ha_state=lambda: None)
        panel.hass = SimpleNamespace(async_create_task=lambda coro: tasks.append(asyncio.create_task(coro)))
        async def disarm(*args, **kwargs):
            panel._alarm_state = after
        announce = AsyncMock()
        namespace = {'original_disarm': disarm, 'AlarmControlPanelState': SimpleNamespace(DISARMED='disarmed'),
                     'stop_repeat_alarm_voice': lambda panel: None, 'async_announce_disarmed': announce}
        exec(compile(ast.Module(body=[method], type_ignores=[]), '<disarm-wrapper>', 'exec'), namespace)
        await namespace['wrapped_disarm'](panel)
        if tasks:
            await asyncio.gather(*tasks)
        return announce.await_count

    async def test_rejected_disarm_does_not_announce(self):
        self.assertEqual(await self.run_transition('armed_away', 'armed_away'), 0)

    async def test_confirmed_disarm_announces_once(self):
        self.assertEqual(await self.run_transition('armed_away', 'disarmed'), 1)

    async def test_already_disarmed_does_not_repeat(self):
        self.assertEqual(await self.run_transition('disarmed', 'disarmed'), 0)
