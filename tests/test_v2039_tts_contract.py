from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1]
COMPONENT=ROOT/'custom_components'/'argus'
class TestV2039TtsContract(unittest.TestCase):
    def test_selectors_and_service_contract(self):
        flow=(COMPONENT/'config_flow.py').read_text(encoding='utf-8')
        voice=(COMPONENT/'arming_voice.py').read_text(encoding='utf-8')
        self.assertIn('EntitySelectorConfig(domain="tts")', flow)
        self.assertIn('multiple=True, domain="media_player"', flow)
        self.assertNotIn('CONF_ARMING_VOICE_TTS, default=', flow)
        self.assertIn('"tts", "speak"', voice)
        self.assertIn('media_player_entity_id', voice)
    def test_cancel_event_exists(self):
        voice=(COMPONENT/'arming_voice.py').read_text(encoding='utf-8')
        self.assertIn('argus_arming_wait_cancelled', voice)
if __name__=='__main__': unittest.main()
