# Argus 2.9.87

- Zone markers are faceted glass crystals instead of curved ring segments, avoiding the recycling-symbol appearance.
- Arming animation now completes in under half a second when the backend arms immediately. The configured backend arming delay remains authoritative.
- Zone names are presented as fixed `ZONA N` identifiers; only the area can be edited.
- Sensor event and response timing are selected with Liquid Glass controls. Delay units support seconds and minutes, with `Instantáneo` as the default.
- A pending open-delay is cancelled if that sensor closes before the delay expires. Once an alarm triggers, closing a sensor does not silence it; manual disarming remains required.
