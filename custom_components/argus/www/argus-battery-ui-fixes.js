/**
 * Argus v2.0.26 — Battery UI Fixes.
 *
 * Implements real-time battery display for active sensors in the console.
 * Injects a battery badge and highlights it in orange if <= 20%.
 */

function argusInjectBatteryUiStyles(panel) {
  const root = panel.shadowRoot;
  if (!root || root.getElementById('argus-battery-ui-style')) return;
  const style = document.createElement('style');
  style.id = 'argus-battery-ui-style';
  style.textContent = `
    .console-sensor-battery {
      font-size: 9px;
      font-weight: 800;
      margin-left: 8px;
      padding: 3px 6px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #e2e8f0;
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }
    .console-sensor-battery.low {
      background: rgba(239, 68, 68, 0.2) !important;
      border-color: rgba(239, 68, 68, 0.4) !important;
      color: #fca5a5 !important;
      animation: pulse 2s infinite;
    }
    .console-sensor-battery.dead {
      background: rgba(220, 38, 38, 0.3) !important;
      border-color: rgba(220, 38, 38, 0.6) !important;
      color: #f87171 !important;
    }
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.6; }
      100% { opacity: 1; }
    }
    .sensor-pill .pill-power {
      font-size: 9px;
      font-weight: 800;
      padding: 2px 5px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #e2e8f0;
    }
    .sensor-pill .pill-power.low {
      background: rgba(239, 68, 68, 0.2) !important;
      border-color: rgba(239, 68, 68, 0.4) !important;
      color: #fca5a5 !important;
      animation: pulse 2s infinite;
    }
    .sensor-pill .pill-power.dead {
      background: rgba(220, 38, 38, 0.3) !important;
      border-color: rgba(220, 38, 38, 0.6) !important;
      color: #f87171 !important;
    }
  `;
  root.appendChild(style);
}

function argusFixConsoleSensorBatteries(panel) {
  const root = panel.shadowRoot;
  if (!root || !panel._hass?.states) return;

  const entries = panel._dashboard?.entries || [];
  root.querySelectorAll('.entry').forEach((art, idx) => {
    const entry = entries[idx];
    if (!entry) return;
    const stateObj = panel._hass.states[entry.entity_id];
    const state = String(stateObj?.state || 'disarmed');
    const mKey = state.replace('armed_', '');
    
    let eCfg = (panel._ui?.modes?.__by_entity__?.[entry.entity_id]?.[mKey])
              || (panel._ui?.modes?.[mKey]) || {};
    let sList = eCfg.sensors || [];
    if (state === 'disarmed' || !sList.length) {
      const modes = panel._ui?.modes?.__by_entity__?.[entry.entity_id] || panel._ui?.modes || {};
      const all = new Set();
      ['away', 'home', 'night', 'vacation'].forEach(m => {
        if (modes[m]?.sensors) modes[m].sensors.forEach(s => all.add(s));
      });
      sList = Array.from(all);
    }
    const bypassed = eCfg.bypassed_sensors || [];
    const active = sList.filter(s => !bypassed.includes(s) && panel._hass.states[s]);

    const rows = art.querySelectorAll('.console-sensors .console-sensor');
    if (!rows.length) return;
    
    rows.forEach((row, rowIdx) => {
      const sid = active[rowIdx];
      if (!sid) return;
      const st = panel._hass.states[sid];
      if (!st) return;
      
      // Prevent duplicate injection if re-rendered by another fix
      if (row.querySelector('.console-sensor-battery')) return;

      const pwr = panel._getSensorBattery(sid, st);
      if (pwr !== null && pwr !== undefined && typeof pwr === 'number') {
        const stateEl = row.querySelector('.console-sensor-state');
        if (stateEl) {
           const isDead = pwr === 0;
           const isLow = pwr <= 10 && !isDead;
           
           let batText = isDead ? '🔋 ❌' : `🔋 ${pwr}%`;
           let cls = isDead ? 'dead' : (isLow ? 'low' : '');
           let title = isDead ? 'Sin conexión (Batería agotada)' : (isLow ? 'Batería crítica - Reemplazar ya' : 'Nivel de batería');
           
           const batHtml = `<span class="console-sensor-battery ${cls}" title="${title}">${batText}</span>`;
           stateEl.insertAdjacentHTML('beforebegin', batHtml);
        }
      }
    });
  });
}

export function applyBatteryUiFixes(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusBatteryUiFixes) return;
  ArgusPanel.__argusBatteryUiFixes = true;
  const proto = ArgusPanel.prototype;

  const originalRenderEntries = proto._renderEntries;
  proto._renderEntries = function() {
    const result = originalRenderEntries.call(this);
    argusInjectBatteryUiStyles(this);
    argusFixConsoleSensorBatteries(this);
    return result;
  };
}
