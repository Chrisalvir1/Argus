from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1]
COMPONENT=ROOT/'custom_components'/'argus'
class TestV2039TtsContract(unittest.TestCase):
    def test_selectors_and_service_contract(self):
        flow=(COMPONENT/'config_flow.py').read_text(encoding='utf-8')
        voice=(COMPONENT/'arming_voice.py').read_text(encoding='utf-8')
        api=(COMPONENT/'websocket_api.py').read_text(encoding='utf-8')
        ui=(ROOT/'src/legacy/argus-panel.ts').read_text(encoding='utf-8')
        self.assertIn('voice_settings_in_panel', flow)
        self.assertIn('hass.states.async_all("tts")', api)
        self.assertIn('hass.states.async_all("media_player")', api)
        self.assertIn("registry.entities.values()", api)
        self.assertIn("merge_media_player_entities", api)
        self.assertIn('data.tts_entities', ui)
        self.assertIn('data-voice-player', ui)
        self.assertIn('argus-refresh-players', ui)
        self.assertIn("Alexa Media", ui)
        self.assertIn('"tts", "speak"', voice)
        self.assertIn('media_player_entity_id', voice)
    def test_cancel_event_exists(self):
        voice=(COMPONENT/'arming_voice.py').read_text(encoding='utf-8')
        self.assertIn('argus_arming_wait_cancelled', voice)
if __name__=='__main__': unittest.main()
