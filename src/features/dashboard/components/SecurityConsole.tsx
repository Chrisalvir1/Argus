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
    window.addEventListener('argus-state-update', handler);
    return () => {
      panel.removeEventListener('argus-state-update', handler);
      window.removeEventListener('argus-state-update', handler);
    };
  }, [panel]);

  // Read data directly from the panel instance
  const dashboard = panel._dashboard;
  const hass = panel._hass;
  
  let entry = dashboard?.entries?.[0];
  if (!entry) {
    const entityId = panel._cardConfig?.entity || panel._config?.entity || Object.keys(hass?.states || {}).find(k => k.startsWith('alarm_control_panel.')) || 'alarm_control_panel.argus';
    if (!entityId || !hass?.states?.[entityId]) return null;
    entry = { entity_id: entityId };
  }

  const idx = 0;

  const bgHtml = panel._renderEntryBackground?.(panel._weatherState, panel._isNight) || '';

  // Calculate HUD and State
  const state = entry.entity_id && hass?.states[entry.entity_id] ? hass.states[entry.entity_id].state : 'unknown';
  const t = (k: string) => panel._t?.(k) || k;
  const fullHudLoc = panel._homeName || panel._ui?.home_name || t('home_fallback') || 'Hogar';
  const triggered = state === 'triggered';
  const isOnline = panel._hass ? panel._hass.connected !== false : false;
  const isWaiting = Boolean(hass?.states?.[entry.entity_id]?.attributes?.arming_waiting_for_sensors);
  const isPending = state === 'pending' || isWaiting;
  
  const getBadgeText = () => {
    if (triggered) return t('system_triggered') || 'ALARMA ACTIVADA';
    if (isWaiting) {
      const b = hass?.states?.[entry.entity_id]?.attributes?.arming_blocking_sensors || [];
      return b.length
        ? (t('waiting_sensors_count') || 'ESPERANDO {count} SENSOR(ES)').replace('{count}', String(b.length))
        : t('waiting_sensors') || 'ESPERANDO SENSORES';
    }
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
  
  if (entry.entity_id) {
    const modes = panel._ui?.modes?.__by_entity__?.[entry.entity_id] || panel._ui?.modes || {};
    
    let eCfg = modes[state.replace('armed_', '')] || {};
    
    if (triggered) {
      eCfg = ['away', 'home', 'night']
        .map(m => modes[m])
        .find(config => (config?.sensors || []).some((id: string) => ['on', 'open', 'unlocked', 'recording', 'active', 'motion'].includes(hass?.states?.[id]?.state)))
        || {};
    }
    
    let sList = eCfg.sensors || [];
    if (state === 'disarmed' || isPending || !sList.length) {
      const allSensors = new Set<string>();
      ['away', 'home', 'night'].forEach(m => {
        if (modes[m]?.sensors) {
          modes[m].sensors.forEach((s: string) => allSensors.add(s));
        }
      });
      if (Array.isArray(panel._sensors)) {
        panel._sensors.forEach((s: any) => allSensors.add(typeof s === 'string' ? s : s.entity_id || s.id));
      }
      if (allSensors.size === 0 && hass?.states) {
        Object.keys(hass.states).forEach(id => {
          if (id.startsWith('binary_sensor.') && (
            id.includes('door') || id.includes('window') || id.includes('motion') || id.includes('puerta') || id.includes('porton') || id.includes('patio') || id.includes('sensor') || id.includes('seguridad')
          )) {
            allSensors.add(id);
          }
        });
      }
      sList = Array.from(allSensors);
    }
    
    const sByps = eCfg.bypassed_sensors || [];
    sList.forEach((s: string) => {
       activeSensors.push({ id: s, isBypassed: sByps.includes(s) });
    });
  }

  // Sort sensors: in waiting/pending or armed, place blocking & open sensors first
  const sortedSensors = [...activeSensors].sort((a, b) => {
    const isBlockingA = isWaiting && blockingSensors.includes(a.id);
    const isBlockingB = isWaiting && blockingSensors.includes(b.id);
    if (isBlockingA && !isBlockingB) return -1;
    if (!isBlockingA && isBlockingB) return 1;

    const isOpenA = panel.isSensorActive ? panel.isSensorActive(hass?.states[a.id]) : hass?.states[a.id]?.state === 'on';
    const isOpenB = panel.isSensorActive ? panel.isSensorActive(hass?.states[b.id]) : hass?.states[b.id]?.state === 'on';
    if (isOpenA && !isOpenB) return -1;
    if (!isOpenA && isOpenB) return 1;
    return 0;
  });

  const sensorCount = sortedSensors.length;
  const gridClass = sensorCount >= 7 ? 'console-sensors--micro' : (sensorCount >= 3 ? 'console-sensors--compact' : '');
  
  // Battery alerts strictly for configured active sensors
  const modeSensorIds = activeSensors.map(s => s.id);
  const batteryAlerts = panel._renderBatteryAlerts?.(modeSensorIds) || '';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className={`entry ${isFullscreen ? 'ios-fullscreen' : ''} ${isWaiting ? 'argus-waiting' : ''}`} style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div dangerouslySetInnerHTML={{ __html: bgHtml }} />
        {panel._kioskLocked && !isFullscreen && (
          <button className="btn-unlock-kiosk" onClick={onUnlockKiosk} style={{position:'absolute',top:'16px',right:'16px',zIndex:99,padding:'8px 14px',background:'rgba(220,38,38,0.85)',color:'white',border:'none',borderRadius:'10px',fontWeight:600,fontSize:'13px',cursor:'pointer',backdropFilter:'blur(8px)',boxShadow:'0 4px 12px rgba(0,0,0,0.4)'}}>
            🔓 {t('unlock_kiosk') || 'Desbloquear kiosco'}
          </button>
        )}
        
        {isFullscreen ? (
          <button className="ghost entry-exit-fs" onClick={onToggleFullscreen} title={t('fullscreen_title') || 'Salir de pantalla completa'} style={{position:'fixed',top:'max(16px, env(safe-area-inset-top))',left:'max(16px, env(safe-area-inset-left))',zIndex:100000,padding:'10px 16px',fontSize:'20px',fontWeight:900,background:'rgba(0,0,0,.65)',backdropFilter:'blur(16px)',borderRadius:'14px',color:'white',border:'1px solid rgba(255,255,255,.25)',boxShadow:'0 8px 24px rgba(0,0,0,.5)',cursor:'pointer'}}>✕</button>
        ) : (
          <button className="ghost fs-btn entry-fs" onClick={onToggleFullscreen} title={t('fullscreen_title') || 'Pantalla completa'} style={{position:'absolute',bottom:'20px',right:'20px',zIndex:10,padding:'10px 15px',fontSize:'18px',background:'rgba(0,0,0,0.45)',backdropFilter:'blur(12px)',borderRadius:'14px',opacity:0.85,color:'white',border:'1px solid rgba(255,255,255,0.22)',boxShadow:'0 8px 20px rgba(0,0,0,0.35)',cursor:'pointer'}}>⛶</button>
        )}

        {batteryAlerts && (
          <div className="battery-alerts-wrapper" dangerouslySetInnerHTML={{ __html: batteryAlerts }} />
        )}

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

          <div className="entry-icon">
            <div dangerouslySetInnerHTML={{ __html: getIconSvg() }} />
            {isWaiting && <span className="argus-shield-status">{blockingSensors.length ? (t('waiting_sensors') || 'ESPERANDO SENSORES') : (t('arming') || 'ARMANDO…')}</span>}
          </div>

          <div className="liquid-stack">
            <button className={`liquid-btn btn-home ${state==='armed_home'?'active':''}`} onClick={() => panel._handleAction(idx, 'home')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('home') + `<span>${t('mode_home') || 'CASA'}</span>` }} />
            <button className={`liquid-btn btn-away ${state==='armed_away'?'active':''}`} onClick={() => panel._handleAction(idx, 'away')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('away') + `<span>${t('mode_away') || 'AUSENTE'}</span>` }} />
            <button className={`liquid-btn btn-night ${state==='armed_night'?'active':''}`} onClick={() => panel._handleAction(idx, 'night')} dangerouslySetInnerHTML={{ __html: panel._modeButtonIcon('night') + `<span>${t('mode_night') || 'NOCHE'}</span>` }} />
          </div>

          <div className={`console-sensors ${gridClass}`} data-count={sensorCount}>
            {sortedSensors.length === 0 ? (
              <div className="console-empty">{t('no_sensors_configured') || 'Sin sensores configurados'}</div>
            ) : (
              sortedSensors.map((sensor: any) => {
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
                    isBypassed={sensor.isBypassed}
                    battery={power}
                    iconHtml={panel._getSensorIcon?.(sState, sensor) || ''}
                    statusLabelOpen={t('status_open') || 'ABIERTO'}
                    statusLabelClosed={t('status_closed') || 'CERRADO'}
                    bypassedLabel={t('bypassed_sensor') || 'OMITIDO'}
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
