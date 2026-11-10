"""Exercise duplicate requests, delayed outputs and recovery without hardware."""
import ast
import asyncio
import json
import logging
import time
import unittest
from pathlib import Path
from types import SimpleNamespace, MethodType
from unittest.mock import AsyncMock, Mock

ROOT = Path(__file__).resolve().parents[1] / 'custom_components' / 'argus'
STATES = SimpleNamespace(DISARMED='disarmed', ARMING='arming', TRIGGERED='triggered')


def method(file, name, namespace):
    tree = ast.parse((ROOT / file).read_text())
    node = next(n for n in ast.walk(tree) if isinstance(n, (ast.AsyncFunctionDef, ast.FunctionDef)) and n.name == name)
    exec(compile(ast.Module(body=[node], type_ignores=[]), str(ROOT / file), 'exec'), namespace)
    return namespace[name]


class NotificationTransitions(unittest.IsolatedAsyncioTestCase):
    async def test_concurrent_and_repeated_disarm_create_one_effect_task(self):
        tasks = []
        limiter = SimpleNamespace(is_blocked=lambda _: False, reset=Mock())
        ns = dict(AlarmControlPanelState=STATES, DOMAIN='argus', PinAttemptLimiter=lambda: limiter,
                  persistent_notification=SimpleNamespace(async_dismiss=Mock()), verify_pin=lambda *a: False)
        disarm = method('alarm_control_panel.py', 'async_alarm_disarm', ns)
        panel = SimpleNamespace(_alarm_state='armed_night', _arm_request=None, _code=None,
            _context=None, _ui_config={}, _config_entry=SimpleNamespace(entry_id='one'),
            hass=SimpleNamespace(data={}, async_create_task=lambda coro: tasks.append(asyncio.create_task(coro))),
            _require_alarm_actor_permission=AsyncMock(), _get_siren_entities=lambda: [],
            _active_panic_outputs=(), _cancel_timers=Mock(), _cycle_bypassed=set(),
            async_write_ha_state=Mock(), _async_finish_disarm=AsyncMock())
        async def actor(_context=None):
            await asyncio.sleep(0)
            return 'Chris'
        panel._get_context_user = actor
        panel._advance_output_revision = MethodType(method('alarm_control_panel.py', '_advance_output_revision', ns), panel)
        await asyncio.gather(disarm(panel), disarm(panel))
        await disarm(panel)
        await asyncio.gather(*tasks)
        self.assertEqual(len(tasks), 1)
        panel._async_finish_disarm.assert_awaited_once()
        self.assertEqual(panel._async_finish_disarm.call_args.args[0], 'Chris')

    async def test_disarm_superseded_while_stopping_siren_cannot_sync_or_notify(self):
        ns = dict(AlarmControlPanelState=STATES, _LOGGER=logging.getLogger(__name__))
        finish = method('alarm_control_panel.py', '_async_finish_disarm', ns)
        panel = SimpleNamespace(_alarm_state='disarmed', _output_revision=1,
            _async_sync_panels=AsyncMock(), _async_notify_configured=AsyncMock())
        async def siren(*args):
            panel._alarm_state = 'armed_night'
            panel._output_revision = 2
        panel._async_siren = siren
        await finish(panel, 'Chris', 'user', False, [], 1)
        panel._async_sync_panels.assert_not_awaited()
        panel._async_notify_configured.assert_not_awaited()

    async def test_retained_mqtt_command_does_not_dispatch(self):
        ns = dict(callback=lambda fn: fn, _LOGGER=logging.getLogger(__name__))
        receive = method('alarm_control_panel.py', '_async_mqtt_message', ns)
        panel = SimpleNamespace(hass=SimpleNamespace(async_create_task=Mock()))
        receive(panel, SimpleNamespace(retain=True, payload='DISARM'))
        panel.hass.async_create_task.assert_not_called()

    async def test_tracker_recovery_cancels_waiting_rule_without_arrival(self):
        load = AsyncMock()
        ns = dict(Event=object, STATE_UNKNOWN='unknown', STATE_UNAVAILABLE='unavailable', async_load_ui_data=load)
        changed = method('presence.py', '_async_state_changed', ns)
        panel = SimpleNamespace(_pending_tasks={'one': object()}, _cancel_pending_task=Mock())
        event = SimpleNamespace(data=dict(entity_id='person.chris', old_state=SimpleNamespace(state='unavailable'), new_state=SimpleNamespace(state='home')))
        await changed(panel, event)
        panel._cancel_pending_task.assert_called_once_with('one')
        load.assert_not_awaited()

    async def test_queued_tts_is_discarded_after_state_revision_changes(self):
        lock = asyncio.Lock()
        await lock.acquire()
        tasks = []
        speak = AsyncMock()
        hass = SimpleNamespace(data={'argus': {'voice_revisions': {'one': 1}}},
            services=SimpleNamespace(async_call=speak), async_create_task=lambda c: tasks.append(asyncio.create_task(c)))
        ns = dict(asyncio=asyncio, time=time, DOMAIN='argus', _PLAYER_LOCKS={'media_player.test': lock},
            CONF_ARMING_VOICE_ENABLED='enabled', CONF_ARMING_VOICE_TTS='tts', CONF_ARMING_VOICE_PLAYERS='players',
            _LOGGER=logging.getLogger(__name__))
        send = method('arming_voice.py', '_async_speak', ns)
        options = dict(enabled=True, tts='tts.test', players=['media_player.test'], _voice_entry_id='one', _voice_revision=1, _voice_created_at=time.monotonic())
        await send(hass, options, 'Sistema armado', 'es')
        await asyncio.sleep(0)
        hass.data['argus']['voice_revisions']['one'] = 2
        lock.release()
        await asyncio.gather(*tasks)
        speak.assert_not_awaited()

    async def test_mobile_delivery_drops_superseded_transition(self):
        ns = dict(asyncio=asyncio, _LOGGER=logging.getLogger(__name__))
        deliver = method('alarm_control_panel.py', '_async_deliver_notify', ns)
        hass = SimpleNamespace(services=SimpleNamespace(async_call=AsyncMock()))
        await deliver(hass, 'mobile_app_test', {'message': 'Desarmado'}, is_current=lambda: False)
        hass.services.async_call.assert_not_awaited()

    async def test_actor_snapshot_keeps_profile_and_homekit_does_not_invent_person(self):
        ns = dict(DOMAIN='argus')
        actor = method('alarm_control_panel.py', '_get_context_user', ns)
        context = SimpleNamespace(id='expired', user_id='service', parent_id=None)
        panel = SimpleNamespace(entity_id='alarm_control_panel.argus', _context=context,
            hass=SimpleNamespace(data={}, auth=SimpleNamespace(async_get_user=AsyncMock(return_value=SimpleNamespace(name='Cuenta HA')))))
        name = await actor(panel, context, {'entity_id': panel.entity_id, 'source': 'Argus', 'profile_name': 'Chris'})
        self.assertEqual(name, 'Chris')
        name = await actor(panel, context, {'entity_id': panel.entity_id, 'source': 'HomeKit'})
        self.assertIn('HomeKit', name)
        self.assertNotIn('Cuenta HA', name)
        panel.hass.auth.async_get_user.assert_not_awaited()

    async def test_duress_alert_survives_superseded_disarm(self):
        ns = dict(AlarmControlPanelState=STATES, _LOGGER=logging.getLogger(__name__), async_append_audit_log=AsyncMock())
        finish = method('alarm_control_panel.py', '_async_finish_disarm', ns)
        panel = SimpleNamespace(_alarm_state='armed_night', _output_revision=2,
            entity_id='alarm_control_panel.argus', _config_entry=SimpleNamespace(entry_id='one'),
            hass=SimpleNamespace(bus=SimpleNamespace(async_fire=Mock())), _async_notify_configured=AsyncMock())
        await finish(panel, 'Chris', 'user', True, [], 1)
        panel._async_notify_configured.assert_awaited_once()
        self.assertIn('Coacción', panel._async_notify_configured.call_args.args[0])

    async def test_alarm_announcement_created_after_disarm_is_not_played(self):
        tasks = []
        speak = AsyncMock()
        hass = SimpleNamespace(data={'argus': {'voice_revisions': {'one': 2}}},
            states=SimpleNamespace(get=lambda entity: SimpleNamespace(state='disarmed')),
            services=SimpleNamespace(async_call=speak), async_create_task=lambda c: tasks.append(asyncio.create_task(c)))
        ns = dict(asyncio=asyncio, time=time, DOMAIN='argus', _PLAYER_LOCKS={},
            CONF_ARMING_VOICE_ENABLED='enabled', CONF_ARMING_VOICE_TTS='tts', CONF_ARMING_VOICE_PLAYERS='players', _LOGGER=logging.getLogger(__name__))
        send = method('arming_voice.py', '_async_speak', ns)
        options = dict(enabled=True, tts='tts.test', players=['media_player.test'], _voice_entry_id='one',
            _voice_revision=2, _voice_created_at=time.monotonic(), _voice_alarm_entity_id='alarm_control_panel.argus', _voice_expected_states={'triggered'})
        await send(hass, options, 'Alarma disparada', 'es')
        await asyncio.gather(*tasks)
        speak.assert_not_awaited()
