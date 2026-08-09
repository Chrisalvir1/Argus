import re

alarm = 'src/features/render/alarm.ts'
with open(alarm, 'r') as f:
    content = f.read()

# Fix alarm.ts typing
content = content.replace('const item = panel._dashboard?.entries?.[index] || {};', 'const item: any = panel._dashboard?.entries?.[index] || {};')
content = content.replace('panel._dashboard?.available_entities?.find', '(panel._dashboard as any)?.available_entities?.find')

with open(alarm, 'w') as f:
    f.write(content)

stable = 'src/features/render/stable.ts'
with open(stable, 'r') as f:
    content = f.read()

# Fix stable.ts typing
content = content.replace('const e = entries[idx];', 'const e: any = entries[idx];')
content = content.replace('oldHass.language !== hass.language', '(oldHass as any).language !== (hass as any).language')
content = content.replace('const alarmChanged = this._dashboard.entries.some(e => e.entity_id && oldHass.states[e.entity_id]?.state !== hass.states[e.entity_id]?.state);', 'const alarmChanged = this._dashboard.entries.some((e: any) => e.entity_id && oldHass.states[e.entity_id]?.state !== hass.states[e.entity_id]?.state);')
content = content.replace('entries.map(e => this._hass?.states?.[e.entity_id!]', 'entries.map((e: any) => this._hass?.states?.[e.entity_id!]')
content = content.replace('find((s: any) => s.entity_id?.startsWith(\'weather.\'))?.entity_id;', 'find((s: any) => (s as any).entity_id?.startsWith(\'weather.\'))?.entity_id;')

with open(stable, 'w') as f:
    f.write(content)

