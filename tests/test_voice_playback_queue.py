"""Deterministic speaker spacing tests; these do not claim audible delivery."""
import ast
import asyncio
from datetime import datetime
import logging
from pathlib import Path
from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase

ROOT = Path(__file__).resolve().parents[1]


class VoicePlaybackQueueTests(IsolatedAsyncioTestCase):
    def runtime(self, state_at=None):
        tree = ast.parse((ROOT / 'custom_components/argus/arming_voice.py').read_text())
        names = {'_estimated_speech_seconds', '_wait_for_voice_playback', '_async_speak'}
        nodes = [node for node in tree.body if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)) and node.name in names]
        clock, tasks, calls, timeouts = [0.0], [], [], []
        async def sleep(seconds):
            clock[0] += seconds
            await asyncio.sleep(0)
        async def wait_for(coro, timeout):
            timeouts.append(timeout)
            return await asyncio.wait_for(coro, timeout)
        async def service(domain, name, data, blocking):
            calls.append((clock[0], data.copy()))
        hass = SimpleNamespace(states=SimpleNamespace(get=lambda target: state_at(clock[0], len(calls)) if state_at else None),
                               services=SimpleNamespace(async_call=service),
                               async_create_task=lambda coro: tasks.append(asyncio.create_task(coro)))
        ns = {'asyncio': SimpleNamespace(sleep=sleep, Lock=asyncio.Lock, wait_for=wait_for, CancelledError=asyncio.CancelledError, TimeoutError=asyncio.TimeoutError),
              'time': SimpleNamespace(monotonic=lambda: clock[0], time=lambda: clock[0]), 'datetime': datetime,
              '_PLAYER_LOCKS': {}, '_LOGGER': logging.getLogger('voice-test'),
              'CONF_ARMING_VOICE_ENABLED': 'enabled', 'CONF_ARMING_VOICE_TTS': 'tts', 'CONF_ARMING_VOICE_PLAYERS': 'players'}
        exec(compile(ast.Module(body=nodes, type_ignores=[]), '<voice-spacing>', 'exec'), ns)
        return ns, hass, tasks, calls, clock, timeouts

    async def test_two_messages_do_not_overlap_after_service_acceptance(self):
        ns, hass, tasks, calls, clock, timeouts = self.runtime()
        options = {'enabled': True, 'tts': 'tts.engine', 'players': ['media_player.airplay']}
        first = ' '.join(['Aviso'] * 50)
        await ns['_async_speak'](hass, options, first, 'es')
        await ns['_async_speak'](hass, options, 'Segundo', 'es')
        await asyncio.gather(*tasks)
        self.assertEqual(len(calls), 2)
        self.assertGreaterEqual(calls[1][0] - calls[0][0], ns['_estimated_speech_seconds'](first))
        self.assertEqual(calls[0][1]['message'], first)
        self.assertEqual(timeouts, [60.0, 60.0])

    async def test_new_track_duration_extends_spacing(self):
        def state(t, count):
            return SimpleNamespace(state='playing' if t < 20 else 'idle', attributes={'media_content_id': 'announcement' if count else 'music', 'media_duration': 20, 'media_position': 0, 'media_position_updated_at': '1970-01-01T00:00:00+00:00'})
        ns, hass, tasks, calls, clock, _ = self.runtime(state)
        options = {'enabled': True, 'tts': 'tts.engine', 'players': ['media_player.airplay']}
        await ns['_async_speak'](hass, options, 'Hola', 'es')
        await ns['_async_speak'](hass, options, 'Segundo', 'es')
        await asyncio.gather(*tasks)
        self.assertGreaterEqual(calls[1][0], 22)
        self.assertLess(calls[1][0], 24)

    async def test_previous_music_duration_is_not_used(self):
        state = lambda *_: SimpleNamespace(state='playing', attributes={'media_content_id': 'music', 'media_duration': 250})
        ns, hass, tasks, calls, clock, _ = self.runtime(state)
        await ns['_async_speak'](hass, {'enabled': True, 'tts': 'tts.engine', 'players': ['media_player.airplay']}, 'Hola', 'es')
        await asyncio.gather(*tasks)
        self.assertLess(clock[0], 10)

    async def test_stale_or_invalid_position_cannot_extend_forever(self):
        state = lambda t,count: SimpleNamespace(state='playing', attributes={'media_content_id': 'voice' if count else 'old', 'media_duration': 8, 'media_position_updated_at': 'invalid'})
        ns, hass, tasks, calls, clock, _ = self.runtime(state)
        await ns['_async_speak'](hass, {'enabled': True, 'tts': 'tts.engine', 'players': ['media_player.airplay']}, 'Hola', 'es')
        await asyncio.gather(*tasks)
        self.assertLessEqual(clock[0], 26)
