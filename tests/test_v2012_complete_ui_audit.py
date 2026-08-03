from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"


def source(name):
    return (WWW / name).read_text(encoding="utf-8")


def test_bootstrap_loads_v2012_audit_last():
    bootstrap = source("argus-bootstrap.js")
    assert "argus-v2012-audit-fixes.js?v=2.0.12" in bootstrap
    assert bootstrap.rfind("applyV2012AuditFixes") > bootstrap.rfind("applyFullscreenPolish")


def test_widget_layout_has_local_and_server_persistence():
    js = source("argus-v2012-audit-fixes.js")
    assert "argus-widgets-v2" in js
    assert "widget_layout" in js
    assert "_widgetSaveChain" in js
    assert "entry_id" in js
    assert "normalizeLayout" in js


def test_clock_format_is_configurable_and_persisted():
    js = source("argus-v2012-audit-fixes.js")
    assert "argus-clock-format-select" in js
    assert "clock_format" in js
    assert "'12h'" in js and "'24h'" in js
    assert "CLOCK_COPY" in js


def test_fullscreen_exit_does_not_trigger_full_render_jump():
    js = source("argus-v2012-audit-fixes.js")
    assert "stopImmediatePropagation" in js
    assert "argus-exiting-fullscreen" in js
    assert "requestAnimationFrame(()=>requestAnimationFrame" in js


def test_shield_state_changes_are_cross_faded():
    js = source("argus-v2012-audit-fixes.js")
    assert "argusShieldIn" in js
    assert "argusShieldOut" in js
    assert "snapshotShields" in js
    assert "animateShieldChanges" in js


def test_active_instance_alignment_and_mobile_stack():
    js = source("argus-v2012-audit-fixes.js")
    assert "grid-template-areas:'hud hud hud' 'modes icon sensors'" in js
    assert "grid-template-areas:'hud' 'icon' 'modes' 'sensors'" in js
    assert "max-height:100dvh" in js
    assert "overflow-y:auto" in js


def test_glass_clarity_and_rounded_corners():
    js = source("argus-v2012-audit-fixes.js")
    assert "border-radius:32px!important" in js
    assert "--argus-clear-bg" in js
    assert "backdrop-filter:none!important" in js
