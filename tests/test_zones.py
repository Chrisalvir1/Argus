import importlib.util
from pathlib import Path


_SPEC = importlib.util.spec_from_file_location(
    "argus_zones_tested_directly",
    Path(__file__).resolve().parents[1] / "custom_components" / "argus" / "zones.py",
)
_ZONES = importlib.util.module_from_spec(_SPEC)
_SPEC.loader.exec_module(_ZONES)
sanitize_zones = _ZONES.sanitize_zones


def test_sanitize_zones_preserves_manual_links_and_deduplicates():
    zones = sanitize_zones(
        [{"id": "zone-1", "name": "  Entrada ", "entity_ids": ["binary_sensor.door", "binary_sensor.door"], "device_ids": ["dev-1", "dev-1"]}],
        {"binary_sensor.door"}, {"dev-1"},
    )
    assert zones[0]["name"] == "Entrada"
    assert zones[0]["entity_ids"] == ["binary_sensor.door"]
    assert zones[0]["device_ids"] == ["dev-1"]


def test_sanitize_zones_rejects_unknown_manual_link():
    try:
        sanitize_zones([{"name": "Entrada", "entity_ids": ["sensor.missing"]}], {"sensor.real"}, set())
    except ValueError as error:
        assert "unknown entity_id" in str(error)
    else:
        raise AssertionError("unknown entities must not be persisted")
