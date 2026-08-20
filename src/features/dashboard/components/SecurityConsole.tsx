import styles from "./SecurityConsole.css?inline";

import React, { useEffect, useState } from 'react';
import { SensorChip } from './SensorChip';

interface SecurityConsoleProps {
  panel: any;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onUnlockKiosk: () => void;
}

export function SecurityConsole({ panel, isFullscreen, onToggleFullscreen, onUnlockKiosk }: SecurityConsoleProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Listen for updates from the panel
    const handler = () => setTick(t => t + 1);
    panel.addEventListener('argus-state-update', handler);
    return () => panel.removeEventListener('argus-state-update', handler);
  }, [panel]);

  // Read data directly from the panel instance
  const dashboard = panel._dashboard;
  const hass = panel._hass;
  if (!dashboard || !dashboard.entries || dashboard.entries.length === 0) return null;

  const entry = dashboard.entries[0];
  const idx = 0;
  
  // Need to port the logic from _renderEntries safely. 
  // For now, since the logic in _renderEntries is extremely complex 
  // (weather state, background images, checking sensors, SOS bindings),
  // we will execute the raw rendering inside React, calling panel methods.

  const bgHtml = panel._renderEntryBackground?.(panel._weatherState, panel._isNight) || '';
  const batteryAlerts = panel._renderBatteryAlerts?.(panel._activeSensors || []) || '';

  // Calculate HUD and State
  const state = entry.entity_id && hass?.states[entry.entity_id] ? hass.states[entry.entity_id].state : 'unknown';
  const fullHudLoc = panel._hass?.config?.location_name || panel._homeName || t('home_fallback') || 'Hogar';
  const triggered = state === 'triggered';
  const isOnline = panel._hass ? panel._hass.connected !== false : false;
  const isWaiting = Boolean(hass?.states?.[entry.entity_id]?.attributes?.arming_waiting_for_sensors);

  const t = (k: string) => panel._t?.(k) || k;
  
  const getBadgeText = () => {
    if (triggered) return t('system_triggered') || 'ALARMA ACTIVADA';
    if (isWaiting) { const b = hass?.states?.[entry.entity_id]?.attributes?.arming_blocking_sensors || []; return b.length ? (t('waiting_sensors_count') || 'ESPERANDO {count} SENSOR(ES)').replace('{count}', String(b.length)) : t('waiting_sensors') || 'ESPERANDO SENSORES'; }
    if (state === 'disarmed') return t('system_disarmed') || 'SISTEMA DESARMADO';
    if (state === 'armed_home') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_home') || 'CASA');
    if (state === 'armed_away') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_away') || 'AUSENTE');
    if (state === 'armed_night') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_night') || 'NOCHE');
    if (state === 'armed_vacation') return (t('system_armed') || 'ARMADO') + ' · ' + (t('mode_vacation') || 'VACACIONES');
    return t('system_armed') || 'ARMADO';
  };

  const getIconSvg = () => {
    return panel._getIntelligentSVG?.(isWaiting ? 'pending' : state, null, panel._isNight, triggered, idx) || '';
  };

  // Sensors mapping
  const activeSensors: Array<{id: string, name?: string}> = [];
  const blockingSensors = hass?.states?.[entry.entity_id]?.attributes?.arming_blocking_sensors || [];
  
  if (entry.entity_id) {
    const modes = panel._ui?.modes?.__by_entity__?.[entry.entity_id] || panel._ui?.modes || {};
    
    // Default to currently active mode if armed
    let eCfg = modes[state.replace('armed_', '')] || {};
    
    // If triggered, use the mode that was active during trigger if any
    if (triggered) {
      eCfg = ['away', 'home', 'night', 'vacation']
        .map(m => modes[m])
        .find(config => (config?.sensors || []).some((id: string) => ['on', 'open', 'unlocked', 'recording', 'active', 'motion'].includes(hass?.states?.[id]?.state)))
        || {};
    }
    
    let sList = eCfg.sensors || [];
    if (state === 'disarmed' || !sList.length) {
      const allSensors = new Set<string>();
      ['away', 'home', 'night', 'vacation'].forEach(m => {
        if (modes[m]?.sensors) {
          modes[m].sensors.forEach((s: string) => allSensors.add(s));
        }
      });
      sList = Array.from(allSensors);
    }
    
    const sByps = eCfg.bypassed_sensors || [];
    sList.filter((s: string) => !sByps.includes(s)).forEach((s: string) => {
       activeSensors.push({ id: s });
    });
  }
  
  return (
    <><style dangerouslySetInnerHTML={{ __html: styles }} /><div className={`entry ${isFullscreen ? 'ios-fullscreen' : ''} ${isWaiting ? 'argus-waiting' : ''}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div dangerouslySetInnerHTML={{ __html: bgHtml }} />
      {panel._kioskLocked && !isFullscreen && (
        <button className="btn-unlock-kiosk" onClick={onUnlockKiosk} style={{position:'absolute',top:'16px',right:'16px',zIndex:99,padding:'8px 14px',background:'rgba(220,38,38,0.85)',color:'white',border:'none',borderRadius:'10px',fontWeight:600,fontSize:'13px',cursor:'pointer',backdropFilter:'blur(8px)',boxShadow:'0 4px 12px rgba(0,0,0,0.4)'}}>
          🔓 {t('unlock_kiosk') || 'Desbloquear kiosco'}
        </button>
      )}
      
      {isFullscreen ? (
        <button className="ghost entry-exit-fs" onClick={onToggleFullscreen} title={t('fullscreen_title')} style={{position:'absolute',top:'24px',left:'24px',zIndex:120,padding:'9px 13px',fontSize:'18px',background:'rgba(0,0,0,.55)',backdropFilter:'blur(12px)',borderRadius:'14px',color:'white',border:'1px solid rgba(255,255,255,.25)',boxShadow:'0 8px 20px rgba(0,0,0,.3)'}}>×</button>
      ) : (
        <button className="ghost fs-btn entry-fs" onClick={onToggleFullscreen} title={t('fullscreen_title')} style={{position:'absolute',bottom:'24px',right:'24px',zIndex:10,padding:'10px 15px',fontSize:'18px',background:'rgba(0,0,0,0.4)',backdropFilter:'blur(12px)',borderRadius:'14px',opacity:0.8,color:'white',border:'1px solid rgba(255,255,255,0.2)',boxShadow:'0 8px 20px rgba(0,0,0,0.3)'}}>⛶</button>
      )}

      <div dangerouslySetInnerHTML={{ __html: batteryAlerts }} />

      <div className="entry-content security-console">
        <div className="console-hud">
          <span className="console-hud-loc">🏡 {fullHudLoc}</span>
          <div className="argus-connection-pill" data-online={isOnline ? 'true' : 'false'}>
            <i className="argus-connection-dot"></i>
            <span className="argus-connection-label">{isOnline ? (t('connected') || 'CONECTADO') : (t('disconnected') || 'DESCONECTADO')}</span>
          </div>
          <div className="console-hud-right">
            <span className={`console-system-badge console-system-badge--${triggered ? 'triggered' : state}`}>
              {getBadgeText()}
            </span>
          </div>
        </div>

        <div className="entry-icon" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',animation:'float-icon 5s ease-in-out infinite'}}>
          <div dangerouslySetInnerHTML={{ __html: getIconSvg() }} />
          {isWaiting && <span className="argus-shield-status">{blockingSensors.length ? (t('waiting_sensors') || 'ESPERANDO SENSORES') : (t('arming') || 'ARMANDO…')}</span>}
        </div>

        <div className="liquid-stack">
          <button className={`liquid-btn btn-home ${state==='armed_home'?'active':''}`} onClick={() => panel._handleAction(idx, 'home')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('home') + `<span>${t('mode_home') || 'CASA'}</span>` }} />
          <button className={`liquid-btn btn-away ${state==='armed_away'?'active':''}`} onClick={() => panel._handleAction(idx, 'away')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('away') + `<span>${t('mode_away') || 'AUSENTE'}</span>` }} />
          <button className={`liquid-btn btn-night ${state==='armed_night'?'active':''}`} onClick={() => panel._handleAction(idx, 'night')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('night') + `<span>${t('mode_night') || 'NOCHE'}</span>` }} />
          {state !== 'disarmed' && (
            <button className="liquid-btn btn-disarm" onClick={() => panel._handleAction(idx, 'disarm')}>
              <span style={{fontSize: '20px'}}>🛡️</span><span>{t('btn_disarmed') || 'DESARMAR'}</span>
            </button>
          )}
        </div>

        <div className="console-sensors">
          {activeSensors.length === 0 ? (
            <div className="console-empty">{t('no_sensors_configured') || 'Sin sensores configurados'}</div>
          ) : (
            activeSensors.map((sensor: any) => {
              const sState = hass.states[sensor.id];
              const sName = sensor.name || sState?.attributes?.friendly_name || sensor.id;
              const isBlocking = isWaiting && blockingSensors.includes(sensor.id);
              const isOpen = panel.isSensorActive ? panel.isSensorActive(sState) : sState?.state === 'on';
              
              let power = null;
              if (sState?.attributes?.battery_level !== undefined) power = sState.attributes.battery_level;
              else if (sState?.attributes?.battery !== undefined) power = sState.attributes.battery;

              return (
                <SensorChip 
                  key={sensor.id}
                  id={sensor.id}
                  name={sName}
                  isOpen={isOpen}
                  isBlocking={isBlocking}
                  battery={power}
                  iconHtml={panel._getSensorIcon?.(sState, sensor) || ''}
                  statusLabelOpen={t('status_open') || 'ABIERTO'}
                  statusLabelClosed={t('status_closed') || 'CERRADO'}
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
