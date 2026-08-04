import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"


def source(name):
    return (WWW / name).read_text(encoding="utf-8")


class TestPerformanceProfile(unittest.TestCase):
    def test_bootstrap_loads_performance_profile_after_audit_fixes(self):
        bootstrap = source("argus-bootstrap.js")
        self.assertIn("argus-performance-profile.js?v=2.0.21", bootstrap)
        self.assertTrue(
            bootstrap.rfind("applyPerformanceProfile")
            > bootstrap.rfind("applyV2012AuditFixes")
        )

    def test_detects_capabilities_without_forcing_a_hardware_model(self):
        js = source("argus-performance-profile.js")
        self.assertIn("hardwareConcurrency", js)
        self.assertIn("deviceMemory", js)
        self.assertIn("webgl2", js)
        self.assertIn("function detectCapabilities", js)
        self.assertIn("no identifica ni supone", js)

    def test_runs_a_short_safe_benchmark(self):
        js = source("argus-performance-profile.js")
        self.assertIn("function benchmark", js)
        self.assertIn("requestAnimationFrame", js)

    def test_computes_four_profiles(self):
        js = source("argus-performance-profile.js")
        for profile in ["essential", "light", "balanced", "full"]:
            self.assertIn(f"'{profile}'", js)

    def test_profile_is_stored_per_device_not_per_dashboard(self):
        js = source("argus-performance-profile.js")
        self.assertIn("argus-performance-v1", js)
        self.assertIn("function fingerprint", js)
        self.assertNotIn("argus/save_ui'", js)

    def test_manual_override_is_respected_over_auto_detection(self):
        js = source("argus-performance-profile.js")
        self.assertIn("_argusPerfPreference", js)
        self.assertIn("function setPreference", js)

    def test_runtime_monitor_can_downgrade_but_never_touches_security(self):
        js = source("argus-performance-profile.js")
        self.assertIn("function startMonitor", js)
        self.assertIn("MONITOR_COOLDOWN_MS", js)

    def test_security_functions_are_never_referenced_by_this_module(self):
        js = source("argus-performance-profile.js")
        executable = re.sub(r"//[^\n]*|/\*.*?\*/", "", js, flags=re.DOTALL).lower()
        for forbidden in ["arm_away", "arm_home", "disarm", "sos", "siren"]:
            self.assertNotIn(forbidden, executable)
        self.assertNotRegex(executable, r"\bpin\b")

    def test_diagnostics_button_exists_in_personalization(self):
        js = source("argus-performance-profile.js")
        self.assertIn("argus-performance-diagnose", js)
        self.assertIn("argus-performance-select", js)

    def test_manifest_uses_home_hub_name(self):
        manifest = (ROOT / "custom_components" / "argus" / "manifest.json").read_text(encoding="utf-8")
        self.assertIn('"name": "Argus Home Hub"', manifest)
        self.assertNotIn("Argus Smart Security", manifest)


if __name__ == "__main__":
    unittest.main()
