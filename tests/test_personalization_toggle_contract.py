"""Regression contract for the advanced-personalization disclosure."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components/argus/www"


class PersonalizationToggleContractTests(unittest.TestCase):
    def test_fix_loads_after_other_runtime_overlays(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text()
        self.assertIn("argus-personalization-toggle-fix.js?v=2.0.44", bootstrap)
        self.assertGreater(
            bootstrap.index("applyPersonalizationToggleFix(ArgusPanel)"),
            bootstrap.index("applyLightCapabilityFixes(ArgusPanel)"),
        )

    def test_stale_duplicate_listeners_are_removed(self):
        source = (WWW / "argus-personalization-toggle-fix.js").read_text()
        self.assertIn("cloneNode(true)", source)
        self.assertIn("currentHeader.replaceWith(header)", source)
        self.assertIn("argusPersonalizationToggle", source)

    def test_personalization_starts_closed_and_does_not_rotate_text(self):
        source = (WWW / "argus-personalization-toggle-fix.js").read_text()
        self.assertIn("setOpen(false)", source)
        self.assertIn("workspace.hidden = !open", source)
        self.assertIn("workspace.classList.toggle('collapsed', !open)", source)
        self.assertIn("chevron.style.transform = 'none'", source)
        self.assertIn("open ? '▲ Ocultar' : '▼ Desplegar'", source)

    def test_toggle_is_keyboard_accessible(self):
        source = (WWW / "argus-personalization-toggle-fix.js").read_text()
        self.assertIn("setAttribute('aria-expanded'", source)
        self.assertIn("event.key !== 'Enter'", source)
        self.assertIn("event.key !== ' '", source)


if __name__ == "__main__":
    unittest.main()
