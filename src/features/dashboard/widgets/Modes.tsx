import React from 'react';

interface ModesProps {
  hass: any;
}

export function Modes({ hass }: ModesProps) {
  // En Liquid Glass v2.2.13, los modos son círculos con un "Jelly Bounce" hover.
  // Colores originales:
  // Armed Away: #E53935
  // Armed Home: #1E88E5
  // Armed Night: #8E24AA
  // Armed Vacation: #00897B
  // Disarmed: #43A047

  const modes = [
    { id: 'armed_home', icon: '🏠', label: 'EM CASA', color: '#1E88E5' },
    { id: 'armed_away', icon: '🔒', label: 'AUSENTE', color: '#E53935' },
    { id: 'armed_night', icon: '🌙', label: 'NOITE', color: '#8E24AA' },
    { id: 'armed_vacation', icon: '✈️', label: 'FÉRIAS', color: '#00897B' }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800 }}>Modos de Alarme</h3>
        <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 8px', borderRadius: '8px', background: 'rgba(67, 160, 71, 0.2)', color: '#43A047' }}>
          DESARMADO
        </span>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '12px',
        flex: 1
      }}>
        {modes.map(mode => (
          <button
            key={mode.id}
            type="button"
            className="argus-mode-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s ease',
              color: 'white',
              padding: '16px 8px'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1.05)'}
          >
            <span style={{ fontSize: '28px', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}>{mode.icon}</span>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px', color: mode.color }}>{mode.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
