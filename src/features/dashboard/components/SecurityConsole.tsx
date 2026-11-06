import { formatContextTimestamp, sensorAvailability, zoneReadiness } from '../zone-context';
import { ContextSensorChecks } from './ContextSensorChecks';
import { SecurityContext } from './SecurityContext';
import { SecurityShield } from './SecurityShield';
import glassStyles from './ConsoleGlass.css?inline';
import balanceStyles from './ConsoleBalance.css?inline';
import styles from "./SecurityConsole.css?inline";

import React, { useEffect, useState, useRef } from 'react';
import { SensorChip, getSensorVisual } from './SensorChip';
import { useArgusPanelBridge } from '../argus-panel-bridge';
import { SlideAction } from './SlideAction';
import { MODE_PALETTE } from './mode-palette';

interface SecurityConsoleProps {
  panel: any;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onUnlockKiosk: () => void;
  entryIndex?: number;
}

export function SecurityConsole({ panel, isFullscreen, onToggleFullscreen, onUnlockKiosk, entryIndex }: SecurityConsoleProps) {
  const bypassInFlight = useRef(false);
  const [bypassPending, setBypassPending] = useState(false);
  const [bypassError, setBypassError] = useState<string | null>(null);
  const bridge = useArgusPanelBridge(panel);
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
  const dashboard = bridge.dashboard;
  const hass = bridge.hass;
  
  const configuredEntity = panel._cardConfig?.entity || panel._config?.entity;
  const configuredEntry = panel._cardConfig?.entry_id || panel._config?.entry_id || dashboard?.entry_id;
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const callOrigin = useRef<HTMLButtonElement | null>(null);
  const callCancel = useRef<HTMLButtonElement | null>(null);
  const [callOpen, setCallOpen] = useState(false);
  useEffect(() => { if (callOpen) callCancel.current?.focus(); }, [callOpen]);
  const verificationClose = useRef<HTMLButtonElement>(null);
  const verificationOrigin = useRef<HTMLButtonElement>(null);
  const [verificationOpen, setVerificationOpen] = useState(false);
  useEffect(() => {
    if (verificationOpen) verificationClose.current?.focus();
  }, [verificationOpen]);
  const [chooseTest, setChooseTest] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [incidentOpen, setIncidentOpen] = useState(false);
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
  const t = bridge.translate;
  // Prefer Argus's explicit label, then follow Home Assistant's live location
  // name so changing it in HA is reflected without a panel reload.
  const fullHudLoc = panel._homeName || panel._ui?.home_name || hass?.config?.location_name || t('home_fallback') || 'Hogar';
  const triggered = state === 'triggered';
  const panicActive = Boolean(hass?.states?.[entry.entity_id]?.attributes?.argus_panic_active);
  const alarmActive = triggered || panicActive;
  const isOnline = panel._hass ? panel._hass.connected !== false : false;
  const isWaiting = Boolean(hass?.states?.[entry.entity_id]?.attributes?.arming_waiting_for_sensors);
  const pendingTarget = hass?.states?.[entry.entity_id]?.attributes?.arming_target;
  const pendingModeLabel = ({ armed_home: t('mode_home'), armed_away: t('mode_away'), armed_night: t('mode_night') } as Record<string, string>)[pendingTarget];
  const isPending = state === 'pending' || state === 'arming' || isWaiting;
  const actionsDisabled = !isOnline || ['unknown', 'unavailable'].includes(state) || triggered;
  // A mode change is a two-step action by design: disarm first, then choose
  // the next mode. The selected mode stays visually selected while locked.
  const modesDisabled = actionsDisabled || state !== 'disarmed' || isPending;
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
    if (state === 'disarmed') return 'DESARMADO';
    if (state === 'armed_home') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_home') || 'CASA');
    if (state === 'armed_away') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_away') || 'AUSENTE');
    if (state === 'armed_night') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_night') || 'NOCHE');
    return t('system_armed') || 'ARMADO';
  };

  const getIconSvg = () => {
    return panel._getIntelligentSVG?.(isWaiting ? 'pending' : state, null, panel._isNight, triggered, idx) || '';
  };

  const modeAccentStyles = {
    '--console-accent': (alarmActive ? MODE_PALETTE.alarm.css
      : state === 'armed_home' ? MODE_PALETTE.home.css
      : state === 'armed_away' ? MODE_PALETTE.away.css
      : state === 'armed_night' ? MODE_PALETTE.night.css
      : state === 'disarmed' ? MODE_PALETTE.disarmed.css : '#a4aab4'),
    '--argus-mode-disarmed': MODE_PALETTE.disarmed.css,
    '--argus-mode-home': MODE_PALETTE.home.css,
    '--argus-mode-away': MODE_PALETTE.away.css,
    '--argus-mode-night': MODE_PALETTE.night.css,
    '--argus-mode-alarm': MODE_PALETTE.alarm.css,
  } as React.CSSProperties & { '--console-accent': string };

  // Sensors mapping - strictly only from configured modes: home, away, night
  const activeSensors: Array<{id: string, name?: string, isBypassed: boolean}> = [];
  const cycleBypassed: string[] = hass?.states?.[entry.entity_id]?.attributes?.cycle_bypassed_sensors || [];
  const changeBypass = async (entityId: string, name: string, bypass: boolean) => {
    if (bypassInFlight.current) return;
    const generation = hass?.states?.[entry.entity_id]?.attributes?.arming_generation;
    bypassInFlight.current = true;
    setBypassPending(true);
    setBypassError(null);
    try {
      const confirmed = await panel._showArgusConfirmModal(bypass
        ? `${name} quedará omitido durante este armado. La protección será parcial.`
        : `${name} volverá a estar protegido y podrá disparar la alarma.`);
      if (!confirmed) return;
      await panel._send('argus/cycle_bypass', { entry_id: entry.entry_id, entity_id: entityId, bypass, generation });
    } catch (error) {
      setBypassError(String((error as Error).message || error));
    } finally {
      bypassInFlight.current = false;
      setBypassPending(false);
    }
  };
  const bypassEligible: string[] = hass?.states?.[entry.entity_id]?.attributes?.arming_bypass_eligible_sensors || [];
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
  const openSensorIds = sortedSensors.filter((sensor: any) => {
    const entity = hass?.states?.[sensor.id];
    if (!entity || ['unknown', 'unavailable', 'offline'].includes(String(entity.state).toLowerCase())) return false;
    return typeof bridge.isSensorActive === 'function'
      ? bridge.isSensorActive(entity)
      : ['on', 'open', 'opening', 'motion', 'detected', 'triggered', 'unlocked'].includes(String(entity.state).toLowerCase());
  }).map((sensor: any) => sensor.id);
  const pulse = alarmActive ? 'sos' : openSensorIds.length ? 'sensor' : '';
  const pulseKey = pulse === 'sos' ? `sos:${entry.entity_id}` : openSensorIds.join('|');
  const configuredZones = (panel._ui?.zones_enabled !== false ? panel._ui?.zones || [] : []).filter((zone: any) => zone.enabled !== false);
  const triggeredSensorId = hass?.states?.[entry.entity_id]?.attributes?.triggered_by;
  const zones = configuredZones.map((zone: any, index: number) => ({
    id: zone.id, name: `Zona ${zone.number || index + 1}`, area: zone.area || '', number: zone.number || index + 1,
    triggered: triggered && (zone.entity_ids || []).includes(triggeredSensorId),
    open: (zone.entity_ids || []).some((id: string) => {
      const entity = hass?.states?.[id];
      return entity && (bridge.isSensorActive?.(entity) ?? ['on', 'open', 'detected'].includes(entity.state));
    }),
    sensors: (zone.entity_ids || []).filter((id: string) => hass?.states?.[id] && bridge.isSensorActive(hass.states[id])).map((id: string) => hass?.states?.[id]?.attributes?.friendly_name || id),
  }));
  const walk = panel._walkTestEntryId === entry.entry_id ? panel._walkTestSession : null;
  const testing = Boolean(walk?.active);
  const selectContextZone = (id: string | null) => { setSelectedZoneId(id); setVerificationOpen(Boolean(id)); setDiagnosticOpen(false); setChooseTest(false); setIncidentOpen(false); };
  const selectedZone = configuredZones.find((zone: any) => zone.id === selectedZoneId);
  const incidentZone = zones.find((zone: any) => zone.triggered);
  const incidentSensor = triggeredSensorId && hass?.states?.[triggeredSensorId];
  const confirmed = panel._hass?.states?.[entry.entity_id];
  const confirmedState = confirmed?.state || 'unknown';
  const modeNames = { home: 'En Casa', away: 'Ausente', night: 'Noche' };
  const modeConfigs = panel._ui?.modes?.__by_entity__?.[entry.entity_id] || panel._ui?.modes || {};
  const confirmedTarget = String(confirmed?.attributes?.arming_target || confirmedState).replace(/^armed_/, '');
  const modeName = modeNames[confirmedTarget as keyof typeof modeNames];
  const confirmedWaiting = Boolean(confirmed?.attributes?.arming_waiting_for_sensors);
  const modeConfig = modeName && modeConfigs[confirmedTarget];
  const required = modeConfig && new Set<string>((modeConfig.sensors || []).filter((id: string) =>
    !(modeConfig.bypassed_sensors || modeConfig.bypassedSensors || []).includes(id) && !cycleBypassed.includes(id)));
  const confirmedBlockers = confirmedWaiting ? new Set<string>(confirmed?.attributes?.arming_blocking_sensors || []) : undefined;
  const showOverview = !testing && !selectedZone && !diagnosticOpen && !isPending && !alarmActive &&
    (confirmedState === 'disarmed' || Boolean(required));
  const readEntity = (id: string) => isOnline ? bridge.getEntityState(id) : undefined;
  const checkZone = (ids: string[]) => zoneReadiness(ids, readEntity, bridge.isSensorActive, required || undefined, confirmedBlockers);
  const zoneChecks = configuredZones.map((zone: { entity_ids?: string[] }) => checkZone(zone.entity_ids || []))
    .filter((status: ReturnType<typeof zoneReadiness>) => status !== 'notApplicable');
  const selectedZoneStatus = selectedZone && checkZone(selectedZone.entity_ids || []);
  const readyZones = zoneChecks.filter((status: string) => status === 'ready').length;
  const pendingZones = zoneChecks.filter((status: string) => status === 'pending').length;
  const unknownZones = zoneChecks.length - readyZones - pendingZones;
  const mode = String(hass?.states?.[entry.entity_id]?.attributes?.triggered_mode || '').replace(/^armed_/, '');
  const incidentMode = ({ home: 'En Casa', away: 'Ausente', night: 'Noche' } as Record<string, string>)[mode];
  const degraded = sortedSensors.some(sensor => !sensor.isBypassed && !cycleBypassed.includes(sensor.id) &&
    (!hass?.states?.[sensor.id] || ['unknown', 'unavailable', 'offline'].includes(hass.states[sensor.id].state)));
  const officialState = confirmedWaiting ? 'Armado en espera'
    : confirmedState === 'triggered' ? 'ALARMA ACTIVA'
    : confirmedState.startsWith('armed_') && modeName ? `Armado · ${modeName}`
    : confirmedState === 'disarmed' ? 'Desarmado'
    : ['arming', 'pending'].includes(confirmedState) ? 'Armado en curso' : 'Estado sin verificar';
  const affectedZones = configuredZones.filter((zone: { entity_ids?: string[] }) =>
    zone.entity_ids?.some(id => cycleBypassed.includes(id))).map((zone: { area?: string; number?: number }) =>
    zone.area || `Zona ${zone.number}`);
  const statusDetail = [
    pendingZones ? `Zonas que requieren atención: ${pendingZones}.` : '',
    unknownZones ? `${unknownZones} zona(s) sin verificar.` : '',
    !zoneChecks.length ? 'No hay zonas evaluables en este alcance.' : '',
  ].filter(Boolean).join(' ');
  const emergencyNumber = panel._ui?.emergency_number ? panel._normaliseEmergencyNumber?.(panel._ui.emergency_number) : '';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles + glassStyles + balanceStyles }} />
      <div data-entry-index={idx} data-alert-pulse={pulse || undefined} className={`entry ${isFullscreen ? 'ios-fullscreen' : ''} ${isWaiting ? 'argus-waiting' : ''} ${pulse ? 'argus-alarm-attention' : ''}`} style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <div dangerouslySetInnerHTML={{ __html: bgHtml }} />
        {panel._kioskLocked && !isFullscreen && (
          <button className="btn-unlock-kiosk" onClick={onUnlockKiosk} style={{position:'absolute',top:'16px',right:'16px',zIndex:99,padding:'8px 14px',background:'rgba(220,38,38,0.85)',color:'white',border:'none',borderRadius:'10px',fontWeight:600,fontSize:'13px',cursor:'pointer',backdropFilter:'blur(8px)',boxShadow:'0 4px 12px rgba(0,0,0,0.4)'}}>
            🔓 {t('unlock_kiosk') || 'Desbloquear kiosco'}
          </button>
        )}
        
        <div className="entry-content security-console" data-alarm-state={isWaiting ? 'pending' : state} style={modeAccentStyles}>
          <div className="console-hud">
            <span className="console-hud-loc"><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/></svg>{fullHudLoc}</span>
            <div role="status" aria-live="polite" className="argus-connection-pill" data-online={isOnline ? 'true' : 'false'}>
              <i className="argus-connection-dot"></i>
              <span className="argus-connection-label">{isOnline ? 'Argus en línea' : 'Argus desconectado'}</span>
            </div>
            <div className="console-hud-right">
        {isFullscreen && (
          <button aria-label={t('fullscreen_title')} className="ghost entry-exit-fs" onClick={onToggleFullscreen} title={t('fullscreen_title') || 'Salir de pantalla completa'} style={{position:'fixed',top:'max(16px, env(safe-area-inset-top))',right:'max(16px, env(safe-area-inset-right))',zIndex:100000,padding:'10px 16px',fontSize:'20px',fontWeight:900,background:'rgba(0,0,0,.65)',backdropFilter:'blur(16px)',borderRadius:'14px',color:'white',border:'1px solid rgba(255,255,255,.25)',boxShadow:'0 8px 24px rgba(0,0,0,.5)',cursor:'pointer'}}>✕</button>
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

        <div className={`entry-icon ${alarmActive ? 'sos-core-active' : ''}`}>
            <div className="console-emblem-viewport">
            <SecurityShield state={isWaiting ? 'pending' : state} label={getBadgeText()} variant={panel._getProfileShieldStyle?.() || 'core'} pulse={panicActive ? 'sos' : pulse} pulseKey={pulseKey} zones={zones} zonesEnabled={configuredZones.length > 0} onSelectZone={selectContextZone} />
            </div>
          </div>

          <nav aria-label="Modos de seguridad y emergencia" className={`liquid-stack console-modes-vertical ${modesDisabled ? 'sos-modes-locked' : ''}`}>
            <span className="console-nav-caption">Modos de seguridad</span>
            <button type="button" aria-pressed={state === 'armed_home'} disabled={modesDisabled} className={`liquid-btn btn-home ${state==='armed_home'?'active':isPending && pendingTarget==='armed_home'?'mode-requested':''}`} onClick={() => bridge.handleAction(idx, 'home')}><span className="console-mode-dot" aria-hidden="true" /><span className="console-mode-label">{t('mode_home') || 'En Casa'}</span></button>
            <button type="button" aria-pressed={state === 'armed_away'} disabled={modesDisabled} className={`liquid-btn btn-away ${state==='armed_away'?'active':isPending && pendingTarget==='armed_away'?'mode-requested':''}`} onClick={() => bridge.handleAction(idx, 'away')}><span className="console-mode-dot" aria-hidden="true" /><span className="console-mode-label">{t('mode_away') || 'Ausente'}</span></button>
            <button type="button" aria-pressed={state === 'armed_night'} disabled={modesDisabled} className={`liquid-btn btn-night ${state==='armed_night'?'active':isPending && pendingTarget==='armed_night'?'mode-requested':''}`} onClick={() => bridge.handleAction(idx, 'night')}><span className="console-mode-dot" aria-hidden="true" /><span className="console-mode-label">{t('mode_night') || 'Noche'}</span></button>
            {(isPending || state.startsWith('armed_') || triggered) && <SlideAction
              panel={panel}
              kind="disarm"
              label={isPending ? 'Desliza para cancelar el armado' : (t('slide_disarm') || 'Desliza para desarmar')}
              touchLabel={isPending ? 'Cancelar armado' : (t('tap_disarm') || 'Desarmar')}
              icon={<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>}
              onConfirm={() => bridge.handleAction(idx, 'disarm')}
            />}
            <span className="console-nav-caption console-nav-sos">SOS / Pánico</span>
            {<SlideAction
              panel={panel}
              kind="sos"
              label={panicActive ? (t('slide_sos_stop') || 'Desliza para detener SOS') : (t('slide_sos') || 'Desliza para activar SOS')}
              touchLabel={panicActive ? (t('tap_sos_stop') || 'Detener SOS') : (t('tap_sos') || 'Activar SOS')}
              activeSos={panicActive}
              icon={panicActive
                ? <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="m5 5 14 14"/></svg>
                : <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4m0 4h.01"/></svg>}
              onConfirm={() => {
                if (panicActive) return panel._stopSOS?.(idx);
                panel._sosEntryIdx = idx;
                return panel._triggerSOS?.();
              }}
            />}
          </nav>

          <SecurityContext
            online={isOnline}
            focused={verificationOpen}
            tone={alarmActive ? 'alarm' : isPending || cycleBypassed.length ? 'warning' : 'normal'}
            overviewAttention={showOverview && pendingZones > 0}
            accent={state.startsWith('armed_') && !alarmActive ? modeAccentStyles['--console-accent'] : undefined}
            indicatorScope={required && modeName ? modeName : undefined}
            indicators={[
              { label: 'Zonas', value: zoneChecks.length },
              { label: 'Listas', value: readyZones },
              { label: 'Pendientes', value: pendingZones },
            ]}
            selection={<>
              <button hidden={verificationOpen || !configuredZones.length} ref={verificationOrigin} className="context-tool context-verify-entry" data-pending={pendingZones > 0 ? "true" : "false"} type="button"
                onClick={() => setVerificationOpen(true)}>
                <strong>Verificar zonas</strong><span>Revisar todas las zonas o una individualmente.</span>
              </button>
              <section hidden={!verificationOpen} className="context-verification-dialog" aria-label="Verificar zonas"
                onKeyDown={event => {
                  if (event.key === 'Escape') {
                    event.stopPropagation();
                    setVerificationOpen(false);
                    requestAnimationFrame(() => verificationOrigin.current?.focus());
                  }
                }}>
                <div className="context-heading"><strong>Verificar zonas</strong>
                  <button ref={verificationClose} type="button" aria-label="Cerrar verificación" onClick={() => {
                    setVerificationOpen(false);
                    requestAnimationFrame(() => verificationOrigin.current?.focus());
                  }}>Cerrar</button>
                </div>
                <p>Elige todas las zonas o una zona y después cómo quieres comprobarla.</p>
                <div className="context-zone-picker" role="group" aria-label="Zona contextual">
                  <div>
                    <button type="button" aria-pressed={!selectedZoneId} onClick={() => selectContextZone(null)}>Todas las zonas</button>
                    {zones.map((zone: {id: string; name: string; area: string}) =>
                      <button type="button" key={zone.id} aria-pressed={selectedZoneId === zone.id}
                        onClick={() => selectContextZone(zone.id)}>{zone.name}{zone.area ? ' · ' + zone.area : ''}</button>)}
                  </div>
                </div>
                <p role="status">{selectedZone ? selectedZone.area || zones.find((item: any) => item.id === selectedZoneId)?.name : 'Todas las zonas'}</p>
                <div className="context-tools context-verification">
                  <button className="context-tool" type="button" aria-pressed={diagnosticOpen}
                    onClick={() => { setChooseTest(false); setDiagnosticOpen(true); }}>
                    <strong>Diagnóstico automático</strong><span>Consultar en Home Assistant si los sensores están abiertos o cerrados, disponibles y su batería.</span>
                  </button>
                  {panel._isAdmin && <button className="context-tool" type="button" aria-pressed={chooseTest}
                    onClick={() => { setDiagnosticOpen(false); setChooseTest(true); }}>
                    <strong>Prueba física</strong><span>Abre y cierra contactos o activa detectores siguiendo una sesión guiada o libre.</span>
                  </button>}
                </div>
            <ContextSensorChecks key={entry.entry_id} panel={panel} entryId={entry.entry_id}
              zones={configuredZones} zone={selectedZone} online={isOnline} states={hass?.states}
              canStart={confirmedState === 'disarmed' && !alarmActive && !isPending}
              visible={verificationOpen} diagnostic={diagnosticOpen} choose={chooseTest} />
              </section>
            </>}
            navigation={<>
              {testing && <button type="button" onClick={() => void panel._stopWalkTest()}>Finalizar prueba</button>}
              {(panicActive || triggered) && emergencyNumber && <div className="context-tools">
                <small>Llamada de emergencia</small>
                {callOpen ? <div className="context-call" role="group" aria-label="Confirmación de llamada"
                  onKeyDown={event => {
                    if (event.key === 'Escape') {
                      event.stopPropagation();
                      setCallOpen(false);
                      requestAnimationFrame(() => callOrigin.current?.focus());
                    }
                  }}>
                  <span>¿Llamar al {emergencyNumber}?</span>
                  <button ref={callCancel} type="button" onClick={() => { setCallOpen(false); requestAnimationFrame(() => callOrigin.current?.focus()); }}>Ahora no</button>
                  <a href={`tel:${emergencyNumber}`} onClick={() => setCallOpen(false)}>Llamar</a>
                </div> : <button ref={callOrigin} type="button" onClick={() => setCallOpen(true)}>Llamar</button>}
              </div>}
              {selectedZone && <button className="context-back" type="button" onClick={() => {
                setSelectedZoneId(null);
                setDiagnosticOpen(false);
                setChooseTest(false);
                setIncidentOpen(false);
              }}>← Estado</button>}
              {diagnosticOpen && !selectedZone && <button className="context-back" type="button" onClick={() => setDiagnosticOpen(false)}>← Estado</button>}
              {triggered && (selectedZone || testing || diagnosticOpen) && <button type="button" onClick={() => setIncidentOpen(!incidentOpen)}>
                {incidentOpen ? 'Volver a la zona' : 'Alarma activa · Ver incidente'}
              </button>}
            </>}
            title={panicActive ? 'SOS / PÁNICO ACTIVO' : triggered && (!(selectedZone || testing || diagnosticOpen) || incidentOpen) ? 'ALARMA ACTIVA' : officialState}
            detail={panicActive ? `Sistema de seguridad: ${officialState}.`
              : triggered && (!(selectedZone || testing || diagnosticOpen) || incidentOpen)
                ? [incidentMode && `Modo: ${incidentMode}`, incidentZone?.area || incidentZone?.name, incidentSensor?.attributes?.friendly_name || triggeredSensorId].filter(Boolean).join(' · ')
              : confirmedState !== state ? 'Esperando confirmación del servidor.'
              : isPending ? [pendingModeLabel && `Modo solicitado: ${pendingModeLabel}.`, isWaiting && `Condiciones pendientes: ${blockingSensors.length}.`].filter(Boolean).join(' ')
              : state.startsWith('armed_') ? [degraded && 'Protección degradada: sensor sin conexión.', cycleBypassed.length && `Protección parcial: ${cycleBypassed.length} sensor(es) omitido(s)${affectedZones.length ? ' · ' + affectedZones.join(', ') : ''}.`, statusDetail].filter(Boolean).join(' ')
              : showOverview ? statusDetail : undefined}
            view={selectedZone && !incidentOpen ? selectedZone.area || zones.find((zone: any) => zone.id === selectedZoneId)?.name
              : testing && !incidentOpen ? `Modo de prueba · ${walk.tested_count || 0} de ${walk.total_sensors || 0} verificados`
              : diagnosticOpen && !incidentOpen ? 'Diagnóstico de sensores' : undefined}

          >
            {bypassError && <small role="alert">{bypassError}</small>}
            {selectedZone && !testing && !incidentOpen && <div className="context-sensor-row">
              <small>{selectedZoneStatus === 'ready' ? 'Zona lista' : selectedZoneStatus === 'pending' ? 'Zona pendiente' :
                selectedZoneStatus === 'notApplicable' ? 'No aplica a este modo' : 'Zona sin verificar'}</small>
              {!selectedZone.entity_ids?.length && <small>Sin sensores configurados.</small>}
              {!selectedZone.entity_ids?.length && panel._isAdmin && <button className="context-back" type="button" onClick={() => {
                const tab = panel.shadowRoot?.querySelector('#mode-tabs [data-mode-view="zones"]');
                tab?.click();
                tab?.scrollIntoView({ block: 'nearest' });
              }}>Configurar zonas</button>}
            </div>}
            {diagnosticOpen && !incidentOpen && !alarmActive ? null : testing && !incidentOpen && !panicActive ? (walk.all_sensors || []).filter((id: string) => !selectedZone || selectedZone.entity_ids?.includes(id)).map((id: string) => {
              const verified = Object.values(walk.tested_sensors || {}).some((item: any) => item === id || item.entity_id === id);
              return <div className="context-sensor-row" key={id}>
                {verified ? '✓' : '○'} {hass?.states?.[id]?.attributes?.friendly_name || id}
              </div>;
            }) : (selectedZone && !(triggered && incidentOpen)
              ? (selectedZone.entity_ids || []).map((id: string) => sortedSensors.find((sensor: any) => sensor.id === id) || { id })
              : diagnosticOpen && !isPending && !triggered
                ? Array.from(new Set<string>(configuredZones.flatMap((zone: any) => zone.entity_ids || []).concat(sortedSensors.map((sensor: any) => sensor.id))))
                  .map(id => sortedSensors.find((sensor: any) => sensor.id === id) || { id })
                : state === 'disarmed' && !isPending
                  ? Array.from(new Set<string>(configuredZones.flatMap((zone: any) => zone.entity_ids || []).concat(sortedSensors.map((sensor: any) => sensor.id))))
                    .map(id => sortedSensors.find((sensor: any) => sensor.id === id) || { id })
                  : configuredZones.length && !selectedZone && isWaiting ? [] : isWaiting ? blockingSensors.map((id: string) => ({ id })) : sortedSensors).map((sensor: any) => {
                const normalizedId = String(sensor.id || '').trim();
                // Always read from panel._hass which is updated on every hass change
                const sState = readEntity(normalizedId);
                const sName = String(sensor.name || sState?.attributes?.friendly_name || normalizedId);
                const deviceClass = String(sState?.attributes?.device_class || '');
                const visualType = !deviceClass && !normalizedId.startsWith('lock.') ? 'generic' : getSensorVisual(normalizedId, deviceClass);
                const isLockLike = visualType === 'lock';
                const isBlocking = isWaiting && blockingSensors.includes(normalizedId);
                const availability = sensorAvailability(sState);
                const isUnavailable = availability !== 'available';
                const sStateStr = String(sState?.state || '').toLowerCase();
                const timestamp = deviceClass === 'timestamp';
                const genericStatus = timestamp ? 'Dato informativo' : sStateStr;
                const formattedTime = timestamp && !isUnavailable
                  ? formatContextTimestamp(sState.state, hass?.language || 'es', hass?.config?.time_zone)
                  : null;
                const isOpen = !isUnavailable && bridge.isSensorActive(sState);
                const power = panel._getSensorBattery?.(normalizedId, sState) ?? null;
                const participatingModes = Object.entries(modeNames).filter(([key]) => {
                  const config = modeConfigs[key];
                  return config?.sensors?.includes(normalizedId) &&
                    !(config.bypassed_sensors || config.bypassedSensors || []).includes(normalizedId);
                }).map(([, label]) => label);

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

                const cycleOmitted = cycleBypassed.includes(normalizedId);
                const canOmit = isBlocking && bypassEligible.includes(normalizedId) && panel._isAdmin && entry.entry_id;
                const canRestore = cycleOmitted && state.startsWith('armed_') && panel._isAdmin && entry.entry_id;
                const isAtRest = !isUnavailable && ['off', 'closed', 'locked', 'clear', 'idle'].includes(sStateStr);
                if (!selectedZone || incidentOpen) {
                  if (isWaiting && !isBlocking) return null;
                  if (!isWaiting && !diagnosticOpen && !cycleOmitted && !isOpen && !isUnavailable &&
                      !sensor.isBypassed && !(power !== null && power <= 20)) return null;
                }

                return (
                  <div className="context-sensor-row" key={sensor.id}>
                  <SensorChip 
                    key={sensor.id}
                    id={sensor.id}
                    name={sName}
                    isOpen={isOpen}
                    isUnavailable={isUnavailable}
                    unavailableLabel={availability === 'offline' ? 'Sin conexión' : 'Estado sin verificar'}
                    isBlocking={isBlocking}
                    isBypassed={sensor.isBypassed || cycleOmitted}
                    battery={power}
                    delay={effectiveDelay}
                    iconHtml={panel._getSensorIcon?.(sState, sensor) || ''}
                    statusLabelOpen={visualType === 'motion' ? 'Detección activa' : visualType === 'generic' ? genericStatus : t('status_open')}
                    statusLabelClosed={visualType === 'motion' ? 'Sin detección' : visualType === 'generic' ? genericStatus : t('status_closed')}
                    bypassedLabel={t('bypassed_sensor') || 'OMITIDO'}
                    isLockLike={isLockLike}
                    visualType={visualType}
                  />
                  {(selectedZone || diagnosticOpen) && <small>
                    {[
                      timestamp ? 'Fecha y hora' : deviceClass || normalizedId.split('.')[0],
                      formattedTime,
                      availability === 'available' ? 'Disponible' : availability === 'offline' ? 'Revisar conexión' : 'Sin datos verificables',
                      power !== null && `${power <= 20 ? 'Batería baja' : 'Batería'} · ${power} %`,
                      participatingModes.length > 0 && participatingModes.join(', '),
                      isBlocking && 'Bloqueo confirmado del armado',
                    ].filter(Boolean).join(' · ')}
                  </small>}
                  {isBlocking && <small>{[
                    configuredZones.find((zone: any) => zone.entity_ids?.includes(normalizedId))?.area,
                    isUnavailable ? 'Bloqueo por falta de conexión o datos' : 'Bloqueo por sensor abierto o activo',
                  ].filter(Boolean).join(' · ')}</small>}
                  {cycleOmitted && isAtRest && <small>Sensor recuperado. Sigue omitido en este armado.</small>}
                  {canOmit && <button className="context-primary" type="button" disabled={bypassPending} onClick={() => void changeBypass(normalizedId, sName, true)}>Omitir por este armado</button>}
                  {canRestore && <button className="context-primary" type="button" disabled={!isAtRest || bypassPending} onClick={() => void changeBypass(normalizedId, sName, false)}>
                    {isAtRest ? 'Reincorporar al armado' : 'Esperando que el sensor vuelva a estado normal'}
                  </button>}
                  </div>
                );
              })}
          </SecurityContext>
        </div>
      </div>
    </>
  );
}
