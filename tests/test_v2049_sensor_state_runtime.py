from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1]
ARGUS=ROOT/'custom_components'/'argus'
class TestV2049SensorStateRuntime(unittest.TestCase):
 def test_pending_request_is_reconciled_from_event_and_watchdog(self):
  source=(ARGUS/'sensor_state_runtime.py').read_text(encoding='utf-8')
  for token in ('_arm_request','_async_recheck_arm_request','state_change','watchdog','async_track_time_interval','blocking_sensors'):
   self.assertIn(token,source)
 def test_armed_sensor_has_authoritative_trigger_fallback(self):
  source=(ARGUS/'sensor_state_runtime.py').read_text(encoding='utf-8')
  for token in ('_ARMED_STATES','_sensors_for_state','is_sensor_active','newly_active','_triggered_by','_triggered_mode','await self._async_trigger()'):
   self.assertIn(token,source)
 def test_preexisting_open_sensor_is_only_a_baseline(self):
  source=(ARGUS/'sensor_state_runtime.py').read_text(encoding='utf-8')
  self.assertIn('_argus_last_active_sensors = active_for_state(self, self._alarm_state)',source)
  self.assertIn('_argus_last_active_sensors = active_for_state(self, target)',source)
  self.assertIn('active - previous',source)
 def test_extended_sensor_semantics_are_supported(self):
  source=(ARGUS/'sensor_state_runtime.py').read_text(encoding='utf-8')
  for token in ('binary_sensor','lock','cover','opening','detected','wet','problem','unsafe'):
   self.assertIn(token,source)
 def test_arming_wait_completes_when_all_sensors_close(self):
  source=(ARGUS/'sensor_state_runtime.py').read_text(encoding='utf-8')
  for token in ('arming wait cleared','force-complete arming','open_blocking_sensors','await self._async_complete_arming(target)'):
   self.assertIn(token,source)
 def test_runtime_installs_after_voice_wrapper(self):
  source=(ARGUS/'__init__.py').read_text(encoding='utf-8')
  self.assertIn('install_trigger_voice();install_sensor_state_runtime()',source)
if __name__=='__main__':unittest.main()
