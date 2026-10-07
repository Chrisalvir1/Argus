import { SecurityShield } from './SecurityShield';
import glassStyles from './ConsoleGlass.css?inline';
import balanceStyles from './ConsoleBalance.css?inline';
import styles from "./SecurityConsole.css?inline";

import React, { useEffect, useState, useRef } from 'react';
import { SensorChip, getSensorVisual } from './SensorChip';

interface SecurityConsoleProps {
  panel: any;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onUnlockKiosk: () => void;
  entryIndex?: number;
}

export function SecurityConsole({ panel, isFullscreen, onToggleFullscreen, onUnlockKiosk, entryIndex }: SecurityConsoleProps) {
  const [tick, setTick] = useState(0);
  const lastArmedMode = useRef<Record<string, string>>({});

  useEffect(() => {
    // Listen for updates from the panel
    const handler = () => setTick(t => t + 1);
    panel.addEventListener('argus-state-update', handler);
    window.addEventListener('argus-state-update', handler);
    return () => {
      panel.removeEventListener('argus-state-update', handler);
      window.removeEventListener('argus-state-update', handler);
    };
  }, [panel]);

  // Read data directly from the panel instance
  const dashboard = panel._dashboard;
  const hass = panel._hass;
  
  const configuredEntity = panel._cardConfig?.entity || panel._config?.entity;
  const configuredEntry = panel._cardConfig?.entry_id || panel._config?.entry_id || dashboard?.entry_id;
  const foundIdx = dashboard?.entries?.findIndex((value: any) =>
    configuredEntity ? value.entity_id === configuredEntity : value.entry_id === configuredEntry
  ) ?? -1;
  if (entryIndex === undefined && dashboard?.entries?.length && (configuredEntity || configuredEntry) && foundIdx < 0) {
    return <div role="status">{panel._t?.('unavailable') || 'No disponible'}: {configuredEntity || configuredEntry}</div>;
  }
  const idx = entryIndex ?? (foundIdx >= 0 ? foundIdx : 0);
  let entry = dashboard?.entries?.[idx];
  if (!entry) {
    if (dashboard?.entries?.length && foundIdx < 0) return null;
    const entityId = panel._cardConfig?.entity || panel._config?.entity || 'alarm_control_panel.argus';
    if (!entityId || !hass?.states?.[entityId]) return null;
    entry = { entity_id: entityId };
  }



  const bgHtml = panel._renderEntryBackground?.(panel._weatherState, panel._isNight) || '';

  // Calculate HUD and State
  const state = entry.entity_id && hass?.states[entry.entity_id] ? hass.states[entry.entity_id].state : 'unknown';
  const t = (k: string) => panel._t?.(k) || k;
  const fullHudLoc = panel._homeName || panel._ui?.home_name || t('home_fallback') || 'Hogar';
  const triggered = state === 'triggered';
  const isOnline = panel._hass ? panel._hass.connected !== false : false;
  const isWaiting = Boolean(hass?.states?.[entry.entity_id]?.attributes?.arming_waiting_for_sensors);
  const isPending = state === 'pending' || state === 'arming' || isWaiting;
  const actionsDisabled = !isOnline || ['unknown', 'unavailable'].includes(state);
  
  const getBadgeText = () => {
    if (triggered) return t('system_triggered') || 'ALARMA ACTIVADA';
    if (isWaiting) {
      const b = hass?.states?.[entry.entity_id]?.attributes?.arming_blocking_sensors || [];
      return b.length
        ? (t('waiting_sensors_count') || 'ESPERANDO {count} SENSOR(ES)').replace('{count}', String(b.length))
        : t('waiting_sensors') || 'ESPERANDO SENSORES';
    }
    if (state === 'unknown' || state === 'unavailable') return t('unavailable');
    if (state === 'arming') return t('arming');
    if (state === 'pending') return t('pending');
    if (state === 'disarmed') return t('system_disarmed') || 'SISTEMA DESARMADO';
    if (state === 'armed_home') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_home') || 'CASA');
    if (state === 'armed_away') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_away') || 'AUSENTE');
    if (state === 'armed_night') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_night') || 'NOCHE');
    return t('system_armed') || 'ARMADO';
  };

  const getIconSvg = () => {
    return panel._getIntelligentSVG?.(isWaiting ? 'pending' : state, null, panel._isNight, triggered, idx) || '';
  };

  // Sensors mapping - strictly only from configured modes: home, away, night
  const activeSensors: Array<{id: string, name?: string, isBypassed: boolean}> = [];
  const blockingSensors = hass?.states?.[entry.entity_id]?.attributes?.arming_blocking_sensors || [];
  let eCfg: any = {};
  
  if (entry.entity_id) {
    const modes = panel._ui?.modes?.__by_entity__?.[entry.entity_id] || panel._ui?.modes || {};
    
    const attrs = hass?.states?.[entry.entity_id]?.attributes || {};
    if (state.startsWith('armed_')) lastArmedMode.current[entry.entity_id] = state.slice(6);
    const target = String(attrs.arming_target || attrs.triggered_mode || attrs.panic_previous_state || '').replace(/^armed_/, '');
    const mode = state.startsWith('armed_') ? state.slice(6)
      : isPending || triggered ? (target || lastArmedMode.current[entry.entity_id] || 'disarmed') : 'disarmed';
    eCfg = modes[mode] || {};
    const sByps: string[] = eCfg.bypassed_sensors || [];
    const sList = [...new Set<string>([...(eCfg.sensors || []), ...sByps])];
    sList.forEach((s: string) => {
       activeSensors.push({ id: s, isBypassed: sByps.includes(s) });
    });
  }

  // Keep configured order stable; live state must never move a card.
  const sortedSensors = activeSensors;

  const sensorCount = sortedSensors.length;
  const gridClass = sensorCount >= 7 ? 'console-sensors--micro' : (sensorCount >= 3 ? 'console-sensors--compact' : '');
  
  // Battery alerts strictly for configured active sensors
  const modeSensorIds = activeSensors.map(s => s.id);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles + balanceStyles + glassStyles }} />
      <div data-entry-index={idx} className={`entry ${isFullscreen ? 'ios-fullscreen' : ''} ${isWaiting ? 'argus-waiting' : ''}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div dangerouslySetInnerHTML={{ __html: bgHtml }} />
        {panel._kioskLocked && !isFullscreen && (
          <button className="btn-unlock-kiosk" onClick={onUnlockKiosk} style={{position:'absolute',top:'16px',right:'16px',zIndex:99,padding:'8px 14px',background:'rgba(220,38,38,0.85)',color:'white',border:'none',borderRadius:'10px',fontWeight:600,fontSize:'13px',cursor:'pointer',backdropFilter:'blur(8px)',boxShadow:'0 4px 12px rgba(0,0,0,0.4)'}}>
            🔓 {t('unlock_kiosk') || 'Desbloquear kiosco'}
          </button>
        )}
        
        {isFullscreen && (
          <button aria-label={t('fullscreen_title')} className="ghost entry-exit-fs" onClick={onToggleFullscreen} title={t('fullscreen_title') || 'Salir de pantalla completa'} style={{position:'fixed',top:'max(16px, env(safe-area-inset-top))',left:'max(16px, env(safe-area-inset-left))',zIndex:100000,padding:'10px 16px',fontSize:'20px',fontWeight:900,background:'rgba(0,0,0,.65)',backdropFilter:'blur(16px)',borderRadius:'14px',color:'white',border:'1px solid rgba(255,255,255,.25)',boxShadow:'0 8px 24px rgba(0,0,0,.5)',cursor:'pointer'}}>✕</button>
        )}

        <div className="entry-content security-console" data-alarm-state={isWaiting ? 'pending' : state}>
          <div className="console-hud">
            <span className="console-hud-loc"><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/></svg>{fullHudLoc}</span>
            <div role="status" aria-live="polite" className="argus-connection-pill" data-online={isOnline ? 'true' : 'false'}>
              <i className="argus-connection-dot"></i>
              <span className="argus-connection-label">{isOnline ? 'Argus en línea' : 'Argus desconectado'}</span>
            </div>
            <div className="console-hud-right">
              <button type="button" aria-label="Configurar modo nocturno" onClick={() => panel._openNightSettings?.()}>☾ Modo nocturno</button>
              {panel._isAdmin && (
                <button
                  type="button"
                  onClick={() => panel._openWalkTest?.()}
                  title={t('walk_test') || 'Prueba de Sensores (Walk Test)'}
                  style={{
                    marginRight: '8px',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.18)',
                    cursor: 'pointer',
                  }}
                >
                  {(t('walk_test_btn') || 'Prueba de sensores').replace(/🚶(?:‍♂️)?/gu, '').trim()}
                </button>
              )}
              {!isFullscreen && (
                <button
                  aria-label={t('fullscreen_title')}
                  className="ghost fs-btn entry-fs"
                  onClick={onToggleFullscreen}
                  title={t('fullscreen_title') || 'Pantalla completa'}
                  style={{
                    marginLeft: '8px',
                    width: '38px',
                    height: '38px',
                    minWidth: '38px',
                    padding: '0',
                    fontSize: '16px',
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: '12px',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ⛶
                </button>
              )}
            </div>
          </div>

          <div className="entry-icon">
            <SecurityShield state={isWaiting ? 'pending' : state} label={getBadgeText()} />
              <span role="status" aria-live="polite" className={`console-system-badge console-system-badge--${triggered ? 'triggered' : state}`}>
                {getBadgeText()}
              </span>
            {isWaiting && <span className="argus-shield-status">{blockingSensors.length ? (t('waiting_sensors') || 'ESPERANDO SENSORES') : (t('arming') || 'ARMANDO…')}</span>}
          </div>

          <div className="liquid-stack">
            <button type="button" aria-pressed={state === 'armed_home'} disabled={actionsDisabled} className={`liquid-btn btn-home ${state==='armed_home'?'active':''}`} onClick={() => panel._handleAction(idx, 'home')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('home') + `<span>${t('mode_home') || 'CASA'}</span>` }} />
            <button type="button" aria-pressed={state === 'armed_away'} disabled={actionsDisabled} className={`liquid-btn btn-away ${state==='armed_away'?'active':''}`} onClick={() => panel._handleAction(idx, 'away')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('away') + `<span>${t('mode_away') || 'AUSENTE'}</span>` }} />
            <button type="button" aria-pressed={state === 'armed_night'} disabled={actionsDisabled} className={`liquid-btn btn-night ${state==='armed_night'?'active':''}`} onClick={() => panel._handleAction(idx, 'night')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('night') + `<span>${t('mode_night') || 'NOCHE'}</span>` }} />
          </div>

          <div className={`console-sensors ${gridClass}`} data-count={sensorCount}>
            {sortedSensors.length === 0 ? (
              <div className="console-empty">{t('no_sensors_configured') || 'Sin sensores configurados'}</div>
            ) : (
              sortedSensors.map((sensor: any) => {
                const normalizedId = String(sensor.id || '').trim();
                // Always read from panel._hass which is updated on every hass change
                const liveHass = panel._hass || hass;
                let sState: any = null;
                // 1. Try panel's multi-tier resolver first
                if (typeof panel?._getEntityState === 'function') {
                  sState = panel._getEntityState(normalizedId);
                }
                // 2. Direct or lowercase lookup
                if (!sState && liveHass?.states) {
                  sState = liveHass.states[normalizedId] || liveHass.states[normalizedId.toLowerCase()];
                }
                const rawName = String(sensor.name || sState?.attributes?.friendly_name || normalizedId).trim();
                // Keep the configured sensor name, removing only generated type
                // suffixes that Argus appended to the display label.
                const sName = rawName
                  .replace(/\s+\(?dps\s*\d+\)?\s*$/i, '')
                  .replace(/\s+(?:puerta|door|window|ventana)\s*$/i, '')
                  .trim();
                const visualType = getSensorVisual(normalizedId, sState?.attributes?.device_class);
                const isLockLike = visualType === 'lock';
                const isBlocking = isWaiting && blockingSensors.includes(normalizedId);
                const sStateStr = String(sState?.state || '').toLowerCase();
                let isUnavailable = !sState || ['unknown', 'unavailable', 'offline', 'disconnected', 'desconectado'].includes(sStateStr);
                
                // If marked unavailable by Tuya Local due to sleep mode, check contact attributes
                const availability = sState?.attributes;
                if (availability && (availability.available === false || availability.online === false || availability.connected === false || availability.is_online === false)) isUnavailable = true;

                // Tuya Local / Omni Tuya Local sensors may report "true"/"false", "1"/"0",
                // "detected", "tamper", "vibration" instead of standard HA "on"/"off"
                const intrusionStates = ['on', 'open', 'opening', 'unlocked', 'recording', 'active', 'motion',
                  'abierto', 'activa', 'true', '1', 'detected', 'tamper', 'vibration', 'triggered'];
                const isOpen = !isUnavailable && (
                  typeof panel?.isSensorActive === 'function'
                    ? Boolean(panel.isSensorActive(sState))
                    : intrusionStates.includes(sStateStr)
                );
                
                let power: number | null = null;
                if (typeof panel?._getSensorBattery === 'function') {
                  power = panel._getSensorBattery(normalizedId, sState);
                }
                if (power === null && sState?.attributes) {
                  const direct = [sState.attributes.battery_level, sState.attributes.battery, sState.attributes.battery_percentage]
                    .find((val: any) => val !== undefined && val !== null && val !== '' && Number.isFinite(Number(val)));
                  if (direct !== undefined) {
                    power = Math.max(0, Math.min(100, Math.round(Number(direct))));
                  }
                }

                let effectiveDelay: number | undefined = undefined;
                const sSettings = eCfg?.sensor_settings?.[sensor.id] || eCfg?.sensor_settings?.[normalizedId];
                if (sSettings) {
                  if (sSettings.type === 'instant' || sSettings.delay === 0) {
                    effectiveDelay = 0;
                  } else if (sSettings.delay !== undefined && sSettings.delay !== null) {
                    effectiveDelay = Number(sSettings.delay);
                  }
                } else if ((eCfg?.entry_sensors || []).includes(sensor.id) || (eCfg?.entry_sensors || []).includes(normalizedId)) {
                  effectiveDelay = eCfg?.entry_delay !== undefined && eCfg?.entry_delay !== null ? Number(eCfg.entry_delay) : undefined;
                }

                return (
                  <SensorChip 
                    key={sensor.id}
                    id={sensor.id}
                    name={sName}
                    isOpen={isOpen}
                    isUnavailable={isUnavailable}
                    unavailableLabel={t('unavailable')}
                    isBlocking={isBlocking}
                    isBypassed={sensor.isBypassed}
                    battery={power}
                    delay={effectiveDelay}
                    iconHtml={panel._getSensorIcon?.(sState, sensor) || ''}
                    statusLabelOpen={t('status_open') || 'ABIERTO'}
                    statusLabelClosed={t('status_closed') || 'CERRADO'}
                    bypassedLabel={t('bypassed_sensor') || 'OMITIDO'}
                    isLockLike={isLockLike}
                    visualType={visualType}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
