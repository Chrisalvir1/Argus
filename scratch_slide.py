import re

with open("src/features/safety/slide-action.ts", "r") as f:
    content = f.read()

# Fix Disarm callback
content = re.sub(
    r"attachDrag\(panel,\s*'disarm'.*?=>\s*\{\s*const\s*eid\s*=\s*entityId.*?\s*if\s*\(typeof\s*panel\._send\s*===\s*'function'\)\s*\{\s*panel\._send\('argus/perform_alarm_action',\s*\{\s*action:\s*'disarm',\s*entry_id:\s*eid,\s*\.\.\.\(pin\s*\?\s*\{\s*code:\s*pin\s*\}\s*:\s*\{\}\)\s*\}\)\.catch\(\(\)\s*=>\s*\{\}\);\s*\}\s*\}\);",
    "attachDrag(panel, 'disarm', dTrack, dFill, dThumb, dLabel, dPin, (pin) => {\n    const realEntryId = panel._dashboard?.entries?.[idx]?.entry_id || '';\n    if (typeof panel._send === 'function') {\n      panel._send('argus/perform_alarm_action', { action: 'disarm', entry_id: realEntryId, ...(pin ? { code: pin } : {}) }).catch(() => {});\n    }\n  });",
    content,
    flags=re.DOTALL
)

# Fix SOS callback
content = re.sub(
    r"attachDrag\(panel,\s*'sos'.*?=>\s*\{\s*const\s*panicNow.*?\s*const\s*eid.*?\s*if\s*\(typeof\s*panel\._send\s*===\s*'function'\)\s*\{\s*panel\._send\('argus/perform_alarm_action',\s*\{\s*action:\s*panicNow\s*\?\s*'stop_sos'\s*:\s*'sos',\s*entry_id:\s*eid\s*\}\)\.catch\(\(\)\s*=>\s*\{\}\);\s*\}\s*\}\);",
    "attachDrag(panel, 'sos', sTrack, sFill, sThumb, sLabel, sPin, () => {\n    const realEntryId = panel._dashboard?.entries?.[idx]?.entry_id || '';\n    if (typeof panel._send === 'function') {\n      panel._send('argus/perform_alarm_action', { action: 'sos', entry_id: realEntryId }).catch(() => {});\n    }\n  });",
    content,
    flags=re.DOTALL
)

# Force applyToAllEntries to run consistently
# I'll modify proto._renderEntries to wait for the next macrotask (setTimeout) just in case LitElement delays rendering in React dashboard.
content = content.replace(
    "requestAnimationFrame(() => applyToAllEntries(this));",
    "requestAnimationFrame(() => {\n      applyToAllEntries(this);\n      setTimeout(() => applyToAllEntries(this), 100); // Fail-safe for delayed renders\n    });"
)

with open("src/features/safety/slide-action.ts", "w") as f:
    f.write(content)
