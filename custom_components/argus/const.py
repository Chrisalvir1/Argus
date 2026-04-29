"""Constants for the Argus Home Hub v0.9.58"""
from homeassistant.const import CONF_NAME, CONF_CODE

DOMAIN = "argus"
NAME = "Argus"
VERSION = "0.9.58"

PLATFORMS = ["alarm_control_panel"]

# Config keys (custom - NOT from homeassistant.const)
CONF_ARMING_TIME = "arming_time"
CONF_TRIGGER_TIME = "trigger_time"
CONF_CODE_ARM_REQUIRED = "code_arm_required"
CONF_ENTRY_DELAY = "entry_delay"
CONF_SENSORS_AWAY = "sensors_away"
CONF_SENSORS_HOME = "sensors_home"
CONF_SENSORS_NIGHT = "sensors_night"
CONF_SENSORS_VACATION = "sensors_vacation"
CONF_ENTRY_SENSORS = "entry_sensors"
CONF_LINKED_ALARM_ENTITY = "linked_alarm_entity"
CONF_SIREN_ENTITY = "siren_entity"
CONF_GUEST_CODE = "guest_code"
CONF_GUEST_CODE_ENABLED = "guest_code_enabled"

CONF_MQTT_ENABLED = "mqtt_enabled"
CONF_MQTT_TOPIC_STATE = "mqtt_topic_state"
CONF_MQTT_TOPIC_COMMAND = "mqtt_topic_command"

DEFAULT_NAME = "Argus Alarm Card v0.9.16"
DEFAULT_ARMING_TIME = 0
DEFAULT_TRIGGER_TIME = 120
DEFAULT_ENTRY_DELAY = 60
DEFAULT_MQTT_TOPIC_STATE = "argus/alarm/state"
DEFAULT_MQTT_TOPIC_COMMAND = "argus/alarm/command"

# MQTT command payloads
MQTT_COMMAND_DISARM = "DISARM"
MQTT_COMMAND_ARM_HOME = "ARM_HOME"
MQTT_COMMAND_ARM_AWAY = "ARM_AWAY"
MQTT_COMMAND_ARM_NIGHT = "ARM_NIGHT"
MQTT_COMMAND_ARM_VACATION = "ARM_VACATION"

# Storage keys
STORAGE_KEY = "argus_ui_data"
STORAGE_VERSION = 1

# Dispatcher signals
SIGNAL_CONFIG_UPDATED = f"{DOMAIN}_config_updated"
