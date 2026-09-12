"""Brand patch and assets contract test."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / "custom_components" / "argus"
PANEL = (COMPONENT / "panel.py").read_text(encoding="utf-8")
BOOTSTRAP = (COMPONENT / "www" / "argus-bootstrap.js").read_text(encoding="utf-8")
PATCH = (COMPONENT / "www" / "argus-brand-patch.js").read_text(encoding="utf-8")


class TestBrandPatchContract(unittest.TestCase):
    def test_brand_patch_file_exists_and_implements_interceptions(self):
        self.assertTrue((COMPONENT / "www" / "argus-brand-patch.js").exists())
        self.assertIn("HTMLImageElement.prototype", PATCH)
        self.assertIn("setAttribute", PATCH)
        self.assertIn("MutationObserver", PATCH)
        self.assertIn("brands\\.home-assistant\\.io", PATCH)
        self.assertIn("/api/argus_static/brand/dark_icon.png", PATCH)
        self.assertIn("/api/argus_static/brand/icon.png", PATCH)

    def test_panel_registers_brand_patch_globally(self):
        self.assertIn("add_extra_js_url", PANEL)
        self.assertIn("argus-brand-patch.js", PANEL)

    def test_bootstrap_imports_brand_patch(self):
        self.assertIn("import './argus-brand-patch.js'", BOOTSTRAP)

    def test_all_brand_assets_present(self):
        for sub in ("brand", "www/brand"):
            target_dir = COMPONENT / sub
            for asset in ("icon.png", "dark_icon.png", "logo.png", "dark_logo.png"):
                file_path = target_dir / asset
                self.assertTrue(file_path.is_file(), f"Missing {asset} in {sub}")
                self.assertGreater(file_path.stat().st_size, 1000, f"{asset} in {sub} is suspiciously small")


if __name__ == "__main__":
    unittest.main()
