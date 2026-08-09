import re

with open("custom_components/argus/sensor_state_runtime.py", "r") as f:
    content = f.read()

# Replace _ACTIVE and is_sensor_active
new_is_sensor_active = """
_ACTIVE = {
    "on", "open", "opening", "unlocked", "active", "motion", "detected",
    "wet", "problem", "unsafe", "recording",
}
_CLOSED = {
    "off", "closed", "closing", "locked", "locking", "standby", "safe", "clear", "cerrado"
}

def is_sensor_active(hass, entity_id: str) -> bool:
    \"\"\"Return True when a monitored sensor is currently blocking/open.\"\"\"
    state = hass.states.get(entity_id)
    if state is None:
        return False
    value = str(state.state).strip().lower()
    if value in {STATE_UNKNOWN, STATE_UNAVAILABLE, "none", ""}:
        return False
        
    if value in _CLOSED:
        return False
    if value in _ACTIVE:
        return True

    domain = entity_id.split(".", 1)[0]
    if domain == "binary_sensor":
        # HA binary sensors: on = open/active for door/window/motion.
        return value == "on"
    if domain == "lock":
        return value not in {"locked", "locking"}
    if domain == "cover":
        return value not in {"closed", "closing"}
    return value in _ACTIVE
"""

content = re.sub(
    r'_ACTIVE = \{.*?\}.*?def is_sensor_active.*?return value in _ACTIVE\n',
    new_is_sensor_active.strip() + '\n',
    content,
    flags=re.DOTALL
)

with open("custom_components/argus/sensor_state_runtime.py", "w") as f:
    f.write(content)

print("Patched sensor_state_runtime.py")
