/** Entity domains are independent of transport (MQTT, Zigbee, Wi-Fi, etc.). */
export function isModeSensor(entityId: string): boolean {
  return ['binary_sensor', 'sensor', 'lock', 'cover', 'input_boolean'].includes(entityId.split('.')[0]);
}

export function isAlarmOutput(entityId: string, ownPanels: string[] = []): boolean {
  return !ownPanels.includes(entityId) && ['siren', 'switch', 'light', 'fan', 'input_boolean', 'script', 'alarm_control_panel'].includes(entityId.split('.')[0]);
}
