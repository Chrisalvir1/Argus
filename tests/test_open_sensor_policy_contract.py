"""Regression contracts for open-sensor arming policies.

These source-level tests complement HA integration tests in environments where
Home Assistant is not installed.  They protect the routing and compatibility
guarantees that must hold for every arming source.
"""
from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
PANEL = (ROOT / "custom_components/argus/alarm_control_panel.py").read_text(encoding="utf-8")
UI = (ROOT / "custom_components/argus/www/argus-panel.js").read_text(encoding="utf-8")
PRESENCE = (ROOT / "custom_components/argus/presence.py").read_text(encoding="utf-8")


class TestOpenSensorPolicyContract(unittest.TestCase):
    def test_all_policies_and_legacy_mapping_exist(self):
        self.assertIn('if config.get("require_closed") or config.get("requireClosed")', PANEL)
        self.assertIn('policy in {"allow", "pending"}', PANEL)
        self.assertIn('if policy == "block"', PANEL)

    def test_bypass_is_excluded_from_blocking_and_pending(self):
        self.assertIn('config.get("bypassed_sensors") or config.get("bypassedSensors")', PANEL)
        self.assertIn('if sensor not in bypassed', PANEL)

    def test_pending_has_generation_and_sensor_recheck(self):
        for token in ('_arm_generation', '_arm_request', '_async_recheck_arm_request', 'delay_elapsed'):
            self.assertIn(token, PANEL)
        self.assertIn('if entity_id and self._arm_request', PANEL)

    def test_schedule_mqtt_and_presence_use_canonical_flow(self):
        self.assertIn('_async_arm(scheduled_state, origin="schedule")', PANEL)
        self.assertIn('origin="mqtt"', PANEL)
        self.assertIn('await panel._async_arm(target, origin="presence")', PRESENCE)

    def test_ui_offers_policy_and_does_not_preblock_pending(self):
        for token in ('open_sensors_policy', 'policy_allow', 'policy_pending', 'open_sensor_policy_hint'):
            self.assertIn(token, UI)
        self.assertIn("if (configuredPolicy === 'pending')", UI)
        selector = UI.split('id="mode-open-sensors-policy"', 1)[1].split('</select>', 1)[0]
        self.assertNotIn('<option value="block"', selector)

    def test_legacy_block_is_normalized_to_require_closed_on_save(self):
        websocket = (ROOT / "custom_components/argus/websocket_api.py").read_text(encoding="utf-8")
        self.assertIn('if policy == "block"', websocket)
        self.assertIn('config["require_closed"] = True', websocket)
        self.assertIn('config["open_sensors_policy"] = "allow"', websocket)

    def test_pending_shield_uses_backend_attributes_and_has_delay_variant(self):
        """The active-instance shield must render the canonical ARMING details."""
        for token in (
            '_renderArmingStatusIcon', 'arming_target',
            'arming_blocking_sensors', 'arming_waiting_for_sensors',
            'perimeter_closing', 'PERÍMETRO EN CIERRE',
            'arming_in_progress', 'ARMADO EN CURSO',
            'argus-perimeter-door', 'premium-armed-complete',
        ):
            self.assertIn(token, UI)
        self.assertIn("if (state === 'arming') return this._renderArmingStatusIcon(arming)", UI)
        self.assertIn("const waiting = Boolean(arming.waiting)", UI)

    def test_open_sensor_ui_and_shield_are_localized_for_every_selectable_language(self):
        """Every selectable language owns the new selector and shield copy."""
        languages = re.findall(r"code:'([a-z]{2})'", UI.split('const LANG_LIST', 1)[1].split('];', 1)[0])
        self.assertEqual(languages, ["es", "en", "fr", "pt", "it", "zh", "ru"])
        keys = (
            "open_sensor_policy", "policy_allow", "policy_pending",
            "open_sensor_policy_hint", "perimeter_closing", "arming_in_progress",
            "accesses_open", "access_to_secure", "more_sensors", "arming_delay_marker",
        )
        assignment_lines = UI.splitlines()
        for language in languages:
            lines = [line for line in assignment_lines if f"Object.assign(TEXTS.{language}," in line]
            for key in keys:
                self.assertTrue(any(f"{key}:" in line for line in lines), f"{language} lacks {key}")
        # The pre-existing, authoritative checkbox label remains translated
        # in the seven base language dictionaries.
        self.assertEqual(UI.count("lock_if_open:"), len(languages))

    def test_localized_shield_formats_counts_and_uses_translation_helpers(self):
        """Count/list copy is formatted through _format and mode copy through _t."""
        self.assertIn("_format(key, values = {})", UI)
        self.assertIn("this._format('accesses_open', { count })", UI)
        self.assertIn("this._format('more_sensors', { count: overflow })", UI)
        self.assertIn("this._t(`mode_${mode}`)", UI)
        for language in ("es", "en", "fr", "pt", "it", "zh", "ru"):
            line = next(line for line in UI.splitlines() if f"Object.assign(TEXTS.{language}, {{ perimeter_closing:" in line)
            template = re.search(r"accesses_open:'([^']+)'", line).group(1)
            self.assertNotIn("{count}", template.replace("{count}", "2"))
