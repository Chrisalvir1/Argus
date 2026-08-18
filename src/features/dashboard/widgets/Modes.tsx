import React, { useState } from 'react';
import { GlassModal } from '../components/GlassModal';

interface ModesProps {
  hass: any;
}

export function Modes({ hass }: ModesProps) {
  const [selectedMode, setSelectedMode] = useState<any>(null);
  const entities = hass?.states || {};
  const alarmPanel: any = Object.values(entities).find((e: any) => e.entity_id?.startsWith('alarm_control_panel.argus'));
  const currentAlarmState = alarmPanel?.state || 'disarmed';

  const modes = [
    { id: 'armed_home', service: 'alarm_arm_home', icon: '🏠', label: 'EN CASA', color: '#1E88E5' },
    { id: 'armed_away', service: 'alarm_arm_away', icon: '🔒', label: 'AUSENTE', color: '#E53935' },
    { id: 'armed_night', service: 'alarm_arm_night', icon: '🌙', label: 'NOCHE', color: '#8E24AA' },
    { id: 'armed_vacation', service: 'alarm_arm_vacation', icon: '✈️', label: 'VACACIONES', color: '#00897B' }
  ];

  const handleModeClick = (mode: any) => {
    if (currentAlarmState === mode.id) {
      setSelectedMode(mode);
    } else {
      if (hass && alarmPanel) {
        hass.callService('alarm_control_panel', mode.service, { entity_id: alarmPanel.entity_id });
      }
    }
  };

  const handleDisarm = () => {
    if (hass && alarmPanel) {
      hass.callService('alarm_control_panel', 'alarm_disarm', { entity_id: alarmPanel.entity_id });
    }
  };

  const getStateLabel = () => {
    switch (currentAlarmState) {
      case 'armed_home': return { text: 'EN CASA', color: '#1E88E5', bg: 'rgba(30, 136, 229, 0.2)' };
      case 'armed_away': return { text: 'AUSENTE', color: '#E53935', bg: 'rgba(229, 57, 53, 0.2)' };
      case 'armed_night': return { text: 'NOCHE', color: '#8E24AA', bg: 'rgba(142, 36, 170, 0.2)' };
      case 'armed_vacation': return { text: 'VACACIONES', color: '#00897B', bg: 'rgba(0, 137, 123, 0.2)' };
      case 'triggered': return { text: 'DISPARADA', color: '#FF3B30', bg: 'rgba(255, 59, 48, 0.2)' };
      case 'arming': return { text: 'ARMANDO...', color: '#F5B041', bg: 'rgba(245, 176, 65, 0.2)' };
      case 'pending': return { text: 'PENDIENTE', color: '#F5B041', bg: 'rgba(245, 176, 65, 0.2)' };
      default: return { text: 'DESARMADO', color: '#43A047', bg: 'rgba(67, 160, 71, 0.2)' };
    }
  };

  const stateInfo = getStateLabel();

  return (
    <>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.01em' }}>Modos de Alarma</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 8px', borderRadius: '8px', background: stateInfo.bg, color: stateInfo.color }}>
              {stateInfo.text}
            </span>
            {currentAlarmState !== 'disarmed' && (
              <button 
                type="button" 
                onClick={handleDisarm}
                style={{
                  background: 'rgba(67, 160, 71, 0.2)',
                  border: '1px solid rgba(67, 160, 71, 0.4)',
                  borderRadius: '8px',
                  padding: '4px 8px',
                  color: '#43A047',
                  fontSize: '11px',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                Desarmar
              </button>
            )}
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '10px',
          flex: 1
        }}>
          {modes.map(mode => {
            const isActive = currentAlarmState === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                className="argus-mode-btn"
                onClick={() => handleModeClick(mode)}
                style={{
                  background: isActive ? `${mode.color}25` : 'rgba(255, 255, 255, 0.05)',
                  border: `1.5px solid ${isActive ? mode.color : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  color: 'white',
                  padding: '12px 6px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span style={{ fontSize: '24px', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))' }}>{mode.icon}</span>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px', color: mode.color }}>{mode.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <GlassModal 
        isOpen={!!selectedMode} 
        onClose={() => setSelectedMode(null)}
        title={`Configurar Modo ${selectedMode?.label || ''}`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
            Configuración de sensores y temporizadores para el modo <strong>{selectedMode?.label}</strong>.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700 }}>Tiempo de Salida / Armado (segundos)</span>
            <input type="number" defaultValue="30" style={{ width: '100%', marginTop: '6px', padding: '8px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }} />
          </div>
          <button 
            type="button" 
            onClick={() => setSelectedMode(null)}
            style={{ background: '#1E88E5', border: 'none', borderRadius: '10px', padding: '12px', color: 'white', fontWeight: 800, cursor: 'pointer' }}
          >
            Guardar
          </button>
        </div>
      </GlassModal>
    </>
  );
}
