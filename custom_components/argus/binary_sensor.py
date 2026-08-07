"""Home Assistant automation state for Argus arming progress."""
from __future__ import annotations

from homeassistant.components.binary_sensor import BinarySensorDeviceClass, BinarySensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import CONF_NAME, DATA_PANELS, DEFAULT_NAME, DOMAIN


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry, async_add_entities: AddEntitiesCallback) -> None:
    async_add_entities([
        ArgusWaitingForSensorsBinarySensor(hass, config_entry),
        ArgusArmingInProgressBinarySensor(hass, config_entry),
    ])


class _ArgusRequestBinarySensor(BinarySensorEntity):
    _attr_has_entity_name = True
    _attr_should_poll = False

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        self.hass = hass
        self._config_entry = config_entry
        self._unsub_dispatcher = None

    @property
    def _panel(self):
        return self.hass.data.get(DOMAIN, {}).get(DATA_PANELS, {}).get(self._config_entry.entry_id)

    @property
    def _request(self):
        panel = self._panel
        request = getattr(panel, "_arm_request", None) if panel else None
        return request if isinstance(request, dict) else None

    @property
    def device_info(self) -> dict:
        return {
            "identifiers": {(DOMAIN, self._config_entry.entry_id)},
            "name": self._config_entry.data.get(CONF_NAME, DEFAULT_NAME),
            "manufacturer": "Argus",
            "model": "Argus Alarm",
        }

    @property
    def extra_state_attributes(self) -> dict:
        request = self._request
        if not request:
            return {"blocking_sensor_count": 0, "blocking_sensors": []}
        target = request.get("target")
        sensors = list(request.get("blocking_sensors") or [])
        names = []
        for entity_id in sensors:
            state = self.hass.states.get(entity_id)
            names.append(state.attributes.get("friendly_name", entity_id) if state else entity_id)
        return {
            "arming_target": getattr(target, "value", target),
            "blocking_sensor_count": len(sensors),
            "blocking_sensors": sensors,
            "blocking_sensor_names": names,
        }

    async def async_added_to_hass(self) -> None:
        self._unsub_dispatcher = async_dispatcher_connect(self.hass, f"{DOMAIN}_state_changed", self._handle_state_changed)

    async def async_will_remove_from_hass(self) -> None:
        if self._unsub_dispatcher:
            self._unsub_dispatcher()
            self._unsub_dispatcher = None

    @callback
    def _handle_state_changed(self) -> None:
        self.async_write_ha_state()


class ArgusWaitingForSensorsBinarySensor(_ArgusRequestBinarySensor):
    """On only while selected intrusion sensors block the requested mode."""
    _attr_translation_key = "waiting_for_sensors_to_close"
    _attr_device_class = BinarySensorDeviceClass.SAFETY
    _attr_icon = "mdi:door-closed-lock"

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        super().__init__(hass, config_entry)
        self._attr_unique_id = f"{config_entry.entry_id}_waiting_for_sensors_to_close"

    @property
    def is_on(self) -> bool:
        request = self._request
        return bool(request and request.get("wait_for_sensors") is True and request.get("blocking_sensors"))


class ArgusArmingInProgressBinarySensor(_ArgusRequestBinarySensor):
    """Expose an arming request outside the alarm entity for HomeKit-safe waiting."""
    _attr_translation_key = "arming_in_progress"
    _attr_icon = "mdi:shield-lock-outline"

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        super().__init__(hass, config_entry)
        self._attr_unique_id = f"{config_entry.entry_id}_arming_in_progress"

    @property
    def is_on(self) -> bool:
        return self._request is not None
