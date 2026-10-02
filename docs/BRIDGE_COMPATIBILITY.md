# Argus bridge compatibility

Argus owns its alarm configuration and state machine in Home Assistant. A
bridge can control it when that bridge consumes the `alarm_control_panel`
entity and sends the standard `alarm_control_panel.alarm_arm_*` and
`alarm_control_panel.alarm_disarm` actions. These actions enter the same Argus
validation path as the Argus UI, including PIN validation, sensor policy,
arming delay, pending requests, cancellation, and alarm state changes.

## State contract

While an arm request is waiting for sensors or the configured delay, the
canonical entity state remains `arming`; it does not become armed prematurely.
The entity publishes `arming_target`, `arming_waiting_for_sensors`,
`arming_blocking_sensors`, and the generic `argus_arming_transition` marker.
The `binary_sensor` entities `arming_in_progress` and
`waiting_for_sensors_to_close` expose progress separately. Only completion of
the Argus request changes the alarm state to `armed_home`, `armed_away`,
`armed_night`, or `armed_vacation`. Disarming while a request is pending
cancels that request through the same state machine.

During a long pending transition, Argus emits a generic state refresh with
`argus_transition_revision`. This helps subscribed Home Assistant exporters
refresh progress attributes. It does not alter or complete the request. The
older `argus_homekit_keepalive` attribute remains temporarily for dashboards or
automations that may already rely on it.

## Bridge requirements and limits

An HAP bridge must expose Home Assistant alarm panels as a security-system
accessory and map their states and arm/disarm commands. Merely supporting HAP
or HomeKit does not guarantee support for the alarm-panel entity. The Home
Assistant HomeKit Bridge has a small Argus-specific adapter for its
`ARMING`-target mapping; other bridges receive Argus's generic state and
attributes and must implement their own equivalent mapping if their protocol
requires it.

Alexa and Google integrations document alarm-panel support, but their PIN and
arming rules differ. Argus still validates a configured PIN in its backend;
a bridge that cannot send a PIN will receive a rejected action rather than
bypass that check. Test the configured PIN behavior in the target ecosystem.

Matter bridges can only preserve behavior that their supported Matter device
types represent. Do not assume a Matter bridge exposes an alarm panel, its
arming modes, or its PIN semantics just because it supports Matter or other
entity types. SmartThings compatibility likewise depends on the specific
bridge; Home Assistant's official SmartThings integration does not currently
list `alarm_control_panel` as a supported entity type.

Argus can keep one source of truth and provide the generic Home Assistant
contract, but cannot force an external bridge to expose unsupported entity
types or protocol states. Validate the bridge's entity mapping before relying
on it for security-critical arm/disarm operations.
