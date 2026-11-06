import { describe, expect, it } from 'vitest';
import { isAlarmOutput, isModeSensor } from './entity-compatibility';

describe('mode entity selection', () => {
  it('accepts sensor classes including garage, gas, smoke and MQTT binary entities', () => {
    for (const id of ['binary_sensor.garage', 'binary_sensor.gas', 'binary_sensor.smoke', 'binary_sensor.motion', 'sensor.mqtt_temperature', 'cover.garage', 'lock.front', 'input_boolean.virtual_contact']) expect(isModeSensor(id)).toBe(true);
    expect(isModeSensor('light.kitchen')).toBe(false);
  });
  it('accepts controllable alarm outputs and avoids recursive self-panel activation', () => {
    for (const id of ['light.alarm', 'switch.plug', 'siren.mqtt', 'fan.controller', 'script.alarm', 'input_boolean.test', 'alarm_control_panel.external']) expect(isAlarmOutput(id)).toBe(true);
    expect(isAlarmOutput('alarm_control_panel.argus', ['alarm_control_panel.argus'])).toBe(false);
    expect(isAlarmOutput('sensor.mqtt')).toBe(false);
    expect(isAlarmOutput('select.controller')).toBe(false);
  });
});
