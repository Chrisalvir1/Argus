from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class TestModeDraftGuardContract(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = (ROOT / "src" / "legacy" / "argus-panel.ts").read_text(encoding="utf-8")
        cls.dashboard_css = (ROOT / "src" / "features" / "dashboard" / "style.css").read_text(encoding="utf-8")

    def test_voice_settings_have_a_separate_slot_before_mode_save(self):
        self.assertIn('id="mode-arming-card"', self.source)
        self.assertIn('id="mode-voice-slot"', self.source)
        voice_render = self.source.split("  _renderVoiceSettings(container: HTMLElement) {", 1)[1].split("  _renderLiquidGlassClockSvg", 1)[0]
        self.assertIn("container.querySelector('#mode-voice-slot')", voice_render)
        self.assertNotIn("container.querySelector('#mode-arming-card')", voice_render)
        self.assertLess(self.source.index('id="mode-voice-slot"'), self.source.index('id="save-mode"'))

    def test_mode_zone_and_arming_cards_share_height(self):
        self.assertIn("grid-auto-rows:auto!important;align-items:stretch!important", self.dashboard_css)
        self.assertIn(".mode-grid-layout>.mode-section-card{align-self:stretch!important;height:auto!important}", self.dashboard_css)
        self.assertIn(".mode-grid-layout>.mode-sirens-card{grid-column:1/-1}", self.dashboard_css)

    def test_expanded_voice_body_uses_its_own_scroll_region(self):
        self.assertIn(".argus-mode-voice-card[open]>.argus-voice-body{max-height:min(45cqh,420px)", self.dashboard_css)
        self.assertIn("overflow-y:auto;overscroll-behavior-y:auto;touch-action:pan-y", self.dashboard_css)

    def test_unsaved_mode_changes_offer_save_discard_or_stay(self):
        for token in [
            "_modeDraftBaselines",
            "_guardModeDraft(continueTo",
            "Guardar y continuar",
            "Descartar y continuar",
            "Seguir editando",
            "await this._saveMode()",
        ]:
            self.assertIn(token, self.source)

    def test_mode_state_is_committed_to_memory_only_after_server_save(self):
        save = self.source.split("  async _saveMode() {", 1)[1].split("  /* ── Automations", 1)[0]
        self.assertLess(save.index("await this._send('argus/save_mode_config'"), save.index("this._ui.modes.__by_entity__[_eid][this._mode] = JSON.parse"))
        self.assertIn("✓ Modo ${modeName} guardado", save)


if __name__ == "__main__":
    unittest.main()
