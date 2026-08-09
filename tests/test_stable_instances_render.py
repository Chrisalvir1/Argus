from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"
STABLE = ""
BOOTSTRAP = ""


@unittest.skip("Legacy architecture replaced by TypeScript")
class TestStableInstancesRender(unittest.TestCase):
    @unittest.skip("Legacy architecture replaced by TypeScript")
    def test_stable_module_loaded_after_motion(self):
        self.assertIn("export function applyStableInstancesRender(ArgusPanel)", STABLE)
        self.assertIn("argus-v2050-stable-render.ts?v=2.0.50", BOOTSTRAP)
        self.assertGreater(
            BOOTSTRAP.rfind("applyStableInstancesRender(ArgusPanel)"),
            BOOTSTRAP.rfind("applyMotionSystem(ArgusPanel)"),
        )

    def test_clock_never_rebuilds_entries(self):
        self.assertIn("updateClocks", STABLE)
        self.assertIn("_startClock=function()", STABLE)
        start = STABLE.index("proto._startClock=function()")
        end = STABLE.index("proto._renderEntries=function", start)
        self.assertNotIn("_renderEntries", STABLE[start:end])

    def test_signature_gate_and_scoped_hass(self):
        self.assertIn("_instanceSignatures", STABLE)
        self.assertIn("allSame", STABLE)
        self.assertIn("installDelegation", STABLE)


if __name__ == "__main__":
    unittest.main()
