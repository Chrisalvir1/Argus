"""v2.0.50 version contracts (supersedes stale 2.0.49 asserts in older suites)."""
from pathlib import Path
import json
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"


class TestV2050VersionContracts(unittest.TestCase):
    def test_manifest_version(self):
        manifest = json.loads((ROOT / "custom_components" / "argus" / "manifest.json").read_text(encoding="utf-8"))
        self.assertEqual(manifest["version"], "2.0.50")

    def test_const_version(self):
        const = (ROOT / "custom_components" / "argus" / "const.py").read_text(encoding="utf-8")
        self.assertIn('VERSION = "2.0.50"', const)

    def test_bootstrap_cache_bust(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")
        self.assertIn("2.0.50", bootstrap)
        self.assertIn("applyV2050AlarmVisuals", bootstrap)
        self.assertIn("applyV2050WidgetLayouts", bootstrap)

    def test_card_version(self):
        card = (WWW / "argus-card.js").read_text(encoding="utf-8")
        self.assertIn("2.0.50", card)


if __name__ == "__main__":
    unittest.main()
