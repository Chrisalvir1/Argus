"""Executable policy tests for the frontend/backend arming-wait contract."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "custom_components" / "argus" / "arming_policy_runtime.py"
SPEC = importlib.util.spec_from_file_location("argus_arming_policy_runtime", MODULE_PATH)
POLICY = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(POLICY)
resolve_open_sensor_policy = POLICY.resolve_open_sensor_policy


class ArmingPolicyBehaviorTests(unittest.TestCase):
    def test_explicit_policies_are_authoritative(self):
        for policy in ("allow", "pending", "block"):
            with self.subTest(policy=policy):
                self.assertEqual(
                    policy,
                    resolve_open_sensor_policy(
                        {"open_sensors_policy": policy}, has_sensors=True
                    ),
                )

    def test_broken_legacy_save_with_sensors_migrates_to_pending(self):
        self.assertEqual(
            "pending",
            resolve_open_sensor_policy(
                {"sensors": ["binary_sensor.front_door"], "require_closed": False},
                has_sensors=True,
            ),
        )

    def test_legacy_wait_aliases_migrate_to_pending(self):
        for key in ("wait_for_sensors", "waitForSensors", "arming_wait", "armingWait"):
            with self.subTest(key=key):
                self.assertEqual(
                    "pending",
                    resolve_open_sensor_policy({key: True}, has_sensors=False),
                )

    def test_mode_without_sensors_defaults_to_allow(self):
        self.assertEqual("allow", resolve_open_sensor_policy({}, has_sensors=False))

    def test_runtime_install_order_and_frontend_transport_are_explicit(self):
        init = (ROOT / "custom_components/argus/__init__.py").read_text(encoding="utf-8")
        self.assertLess(init.index("install_safety_runtime();"), init.index("install_arming_policy_runtime();"))
        frontend = (ROOT / "src/app/index.ts").read_text(encoding="utf-8")
        self.assertLess(frontend.index("applyLegacyAfterTypedClients(C);"), frontend.index("applyArmingWaitPolicy(C);"))
        policy = (ROOT / "src/features/arming/wait-policy.ts").read_text(encoding="utf-8")
        self.assertIn("argus/save_mode_config", policy)
        self.assertIn("open_sensors_policy", policy)


if __name__ == "__main__":
    unittest.main()
