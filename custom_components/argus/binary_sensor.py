"""Home Assistant automation state for Argus pending arming."""
from __future__ import annotations

from homeassistant.components.binary_sensor import BinarySensorDeviceClass, BinarySensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import CONF_NAME, DATA_PANELS, DEFAULT_NAME, DOMAIN


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry, async_add_entities: AddEntitiesCallback) -> None:
    """Expose an automation-ready pending-arming condition per Argus entry."""
    async_add_entities([ArgusWaitingForSensorsBinarySensor(hass, config_entry)])


class ArgusWaitingForSensorsBinarySensor(BinarySensorEntity):
    """On only while this instance waits for blocking sensors to close."""

    _attr_has_entity_name = True
    _attr_translation_key = "waiting_for_sensors_to_close"
    _attr_device_class = BinarySensorDeviceClass.SAFETY
    _attr_icon = "mdi:door-closed-lock"
    _attr_should_poll = False

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        self.hass = hass
        self._config_entry = config_entry
        self._attr_unique_id = f"{config_entry.entry_id}_waiting_for_sensors_to_close"
        self._unsub_dispatcher = None

    @property
    def _panel(self):
        return self.hass.data.get(DOMAIN, {}).get(DATA_PANELS, {}).get(self._config_entry.entry_id)

    @property
    def device_info(self) -> dict:
        """Attach the condition to exactly the same Argus device as its panel."""
        return {
            "identifiers": {(DOMAIN, self._config_entry.entry_id)},
            "name": self._config_entry.data.get(CONF_NAME, DEFAULT_NAME),
            "manufacturer": "Argus",
            "model": "Argus Alarm",
        }

    @property
    def is_on(self) -> bool:
        panel = self._panel
        request = getattr(panel, "_arm_request", None) if panel else None
        state = getattr(panel, "_alarm_state", None) if panel else None
        return bool(getattr(state, "value", state) == "arming" and isinstance(request, dict) and request.get("wait_for_sensors") is True)

    @property
    def extra_state_attributes(self) -> dict:
        panel = self._panel
        request = getattr(panel, "_arm_request", None) if panel else None
        if not isinstance(request, dict):
            return {"blocking_sensor_count": 0, "blocking_sensors": []}
        target = request.get("target")
        sensors = list(request.get("blocking_sensors") or [])
        return {"arming_target": getattr(target, "value", target), "blocking_sensor_count": len(sensors), "blocking_sensors": sensors}

    async def async_added_to_hass(self) -> None:
        self._unsub_dispatcher = async_dispatcher_connect(self.hass, f"{DOMAIN}_state_changed", self._handle_state_changed)

    async def async_will_remove_from_hass(self) -> None:
        if self._unsub_dispatcher:
            self._unsub_dispatcher()
            self._unsub_dispatcher = None

    @callback
    def _handle_state_changed(self) -> None:
        self.async_write_ha_state()
