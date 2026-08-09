from pathlib import Path
import unittest
R=Path(__file__).resolve().parents[1];C=R/'custom_components'/'argus';W=C/'www'
class TestOptionsAndVisuals(unittest.TestCase):
 def test_options_form_is_voice_only(self):
  s=(C/'config_flow.py').read_text();schema=s.split('schema=vol.Schema({',1)[1];self.assertNotIn('vol.Optional(CONF_ARMING_TIME',schema);self.assertNotIn('vol.Optional(CONF_TRIGGER_TIME',schema);self.assertNotIn('vol.Optional(CONF_ENTRY_DELAY',schema);self.assertIn('CONF_ARMING_VOICE_MESSAGE_TRIGGERED',schema);self.assertIn('CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED',schema)
 def test_non_voice_options_are_preserved(self):
  s=(C/'config_flow.py').read_text();self.assertIn('submitted=dict(self.config_entry.options)',s);self.assertIn('for key in _VOICE_KEYS',s)
 def test_buttons_use_glass_and_only_active_state_colors(self):
  s=((R/'src'/'legacy')/'argus-v2046-active-visuals.ts').read_text();self.assertIn("state==='disarmed'",s);self.assertIn("rgba(255,255,255,.105)",s);self.assertIn('argus-action-active',s)
 def test_arming_shield_and_label_are_restored(self):
  s=((R/'src'/'legacy')/'argus-v2046-active-visuals.ts').read_text();self.assertIn('argusArmingShield',s);self.assertIn('ESPERANDO SENSORES',s);self.assertIn('ARMANDO…',s)
if __name__=='__main__':unittest.main()
