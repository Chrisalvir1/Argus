import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"

def source(name):
    return (WWW / name).read_text(encoding="utf-8")

class TestV2013UiAudit(unittest.TestCase):
    def test_bootstrap_loads_v2013_audit_last(self):
        bootstrap = source("argus-bootstrap.js")
        self.assertIn("argus-v2013-audit-fixes.js?v=2.0.36", bootstrap)
        self.assertTrue(bootstrap.rfind("applyV2012AuditFixes") > bootstrap.rfind("applyFullscreenPolish"))

    def test_widget_layout_has_local_and_server_persistence(self):
        js = source("argus-v2013-audit-fixes.js")
        self.assertIn("argus-widgets-v2", js)
        self.assertIn("widget_layout", js)
        self.assertIn("_widgetSaveChain", js)
        self.assertIn("entry_id", js)
        self.assertIn("normalizeLayout", js)

    def test_clock_format_is_configurable_and_persisted(self):
        js = source("argus-v2013-audit-fixes.js")
        self.assertIn("argus-clock-format-select", js)
        self.assertIn("clock_format", js)
        self.assertTrue('"12h"' in js or '"24h"' in js)
        self.assertIn("CLOCK_COPY", js)

    def test_fullscreen_exit_does_not_trigger_full_render_jump(self):
        js = source("argus-v2013-audit-fixes.js")
        self.assertIn("stopImmediatePropagation", js)
        self.assertIn("argus-exiting-fullscreen", js)
        self.assertIn("requestAnimationFrame(()=>requestAnimationFrame", js)

    def test_shield_state_changes_are_cross_faded(self):
        js = source("argus-v2013-audit-fixes.js")
        self.assertIn("argusShieldIn", js)
        self.assertIn("argusShieldOut", js)
        self.assertIn("snapshotShields", js)
        self.assertIn("animateShieldChanges", js)

    def test_active_instance_alignment_and_mobile_stack(self):
        js = source("argus-v2013-audit-fixes.js")
        self.assertIn("grid-template-areas:'hud hud hud' 'modes icon sensors'", js)
        self.assertIn("grid-template-areas:'hud' 'icon' 'modes' 'sensors'", js)
        self.assertIn("max-height:100dvh", js)
        self.assertIn("overflow-y:auto", js)

    def test_glass_clarity_and_rounded_corners(self):
        js = source("argus-v2013-audit-fixes.js")
        self.assertIn("border-radius:32px!important", js)
        self.assertIn("--argus-clear-bg", js)
        self.assertIn("backdrop-filter:none!important", js)

if __name__ == "__main__":
    unittest.main()
