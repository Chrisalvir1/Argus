"""Constants for Argus."""

DOMAIN = "argus"
NAME = "Argus"
VERSION = "0.1.0"

PLATFORMS = ["alarm_control_panel"]

# Alarm states
STATE_DISARMED = "disarmed"
STATE_ARMED_HOME = "armed_home"
STATE_ARMED_AWAY = "armed_away"
STATE_ARMED_NIGHT = "armed_night"
STATE_ARMED_VACATION = "armed_vacation"
STATE_ARMING = "arming"
STATE_DISARMING = "disarming"
STATE_TRIGGERED = "triggered"
STATE_PENDING = "pending"

# Config keys
CONF_NAME = "name"
CONF_CODE = "code"
CONF_CODE_ARM_REQUIRED = "code_arm_required"
CONF_ARMING_TIME = "arming_time"
CONF_TRIGGER_TIME = "trigger_time"
CONF_DISARM_TIME = "disarm_time"

# Default values
DEFAULT_NAME = "Argus"
DEFAULT_ARMING_TIME = 30
DEFAULT_TRIGGER_TIME = 300
DEFAULT_DISARM_TIME = 0
