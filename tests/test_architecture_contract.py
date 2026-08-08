"""Architecture contracts for Argus 1.8."""
from pathlib import Path
import unittest

ROOT = Path(__file__).parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


class TestArchitectureContract(unittest.TestCase):
    def test_version_is_consistent(self) -> None:
        manifest = (COMPONENT / "manifest.json").read_text(encoding="utf-8")
        constants = (COMPONENT / "const.py").read_text(encoding="utf-8")
        card = (COMPONENT / "www" / "argus-card.js").read_text(encoding="utf-8")
        self.assertIn('"version": "2.0.49"', manifest)
        self.assertIn('VERSION = "2.0.49"', constants)
        self.assertIn("ARGUS_CARD_VERSION='2.0.49'", card)

    def test_private_media_is_not_local(self) -> None:
        media = (COMPONENT / "media.py").read_text(encoding="utf-8")
        self.assertIn('hass.config.path(".storage", "argus_media")', media)
        self.assertIn("hmac.compare_digest", media)
        self.assertIn("X-Content-Type-Options", media)
        self.assertNotIn('/local/argus/', media)

    def test_frontend_is_composed_from_clients(self) -> None:
        bootstrap = (COMPONENT / "www" / "argus-bootstrap.js").read_text(encoding="utf-8")
        for module in ("security-client.js", "media-client.js", "premium-experience.js"):
            self.assertIn(module, bootstrap)
            self.assertTrue((COMPONENT / "www" / module).is_file())

    def test_removed_features_are_not_registered(self) -> None:
        api = (COMPONENT / "websocket_api.py").read_text(encoding="utf-8")
        panel = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")
        self.assertNotIn("get_tts_engines", api)
        self.assertNotIn("google_generative_ai", panel)
        self.assertNotIn("analyze_camera", panel)
        card = (COMPONENT / "www" / "argus-card.js").read_text(encoding="utf-8")
        self.assertNotIn("Costa Rica", card)
        self.assertNotIn("temperature: 24", card)

    def test_legacy_websocket_uses_single_media_manager(self) -> None:
        init = (COMPONENT / "__init__.py").read_text(encoding="utf-8")
        compatibility = (COMPONENT / "media_websocket.py").read_text(encoding="utf-8")
        self.assertIn("install_media_websocket", init)
        self.assertIn("async_get_media_manager", compatibility)
        self.assertIn("ws_argus_upload_file = ws_upload", compatibility)


if __name__ == "__main__":
    unittest.main()
