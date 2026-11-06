"""SOS reuses the compatible output picker without inheriting zone assignments."""
from pathlib import Path


PANEL = (Path(__file__).resolve().parents[1] / "src" / "legacy" / "argus-panel.ts").read_text()


def test_sos_view_has_no_zone_summary_and_uses_shared_output_selector():
    sos_view = PANEL.split("  _renderModeView()", 1)[1].split("if (this._mode === 'sos') {", 1)[1].split("const cfg = this._currentModeConfig();", 1)[0]
    assert "mode-zone-summary" not in sos_view
    assert "_openModal('alarm_device')" in sos_view
    assert "_renderModeZoneSummary" not in sos_view


def test_sos_selection_persists_separately_from_mode_output_lists():
    assert "this._selectorTarget === 'alarm_device' && this._mode === 'sos'" in PANEL
    assert "this._panicOutputs = [...this._selected]" in PANEL
    assert "cfg.sirens = this._selected.filter" in PANEL
    assert "this._ui.modes.__by_entity__[_eid][this._mode] = cfg" in PANEL


def test_zones_offer_only_arming_modes():
    assert "['disarmed','home','away','night']" in PANEL
    assert "'night','sos'" not in PANEL


def test_zone_editor_keeps_zone_number_fixed_and_uses_liquid_glass_styles():
    assert 'data-zone-field="name"' not in PANEL
    assert 'data-zone-field="area"' in PANEL
    assert 'zone-toggle' in PANEL and 'Sin área' in PANEL
    assert '#argus-zone-editor .zone-item' in PANEL


def test_zone_sensor_editor_uses_glass_event_and_timing_choices():
    assert '⚡ Instantáneo' in PANEL
    assert 'Con espera de ${waitingFor}' in PANEL
    assert 'data-zone-delay-unit="minutes"' in PANEL
    assert '#argus-zone-editor .zone-choice.is-selected' in PANEL
    assert '<select data-zone-condition' not in PANEL
