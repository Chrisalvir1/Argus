import React, { useState } from 'react';
import { GlassModal } from '../components/GlassModal';

interface SOSWidgetProps {
  hass: any;
}

export function SOSWidget({ hass }: SOSWidgetProps) {
  const [isConfigOpen, setConfigOpen] = useState(false);

  const handleSOSClick = () => {
    // Aquí iría la lógica para activar el SOS real (ej. llamar servicio de Home Assistant)
    if (confirm('¿Estás seguro de que quieres activar el pánico SOS? Las sirenas se dispararán inmediatamente.')) {
      console.log('SOS Activado');
    }
  };

  return (
    <>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.01em' }}>Acciones SOS</span>
          <button 
            type="button" 
            onClick={() => setConfigOpen(true)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '12px',
              padding: '6px 12px',
              color: 'white',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            ⚙️ Configurar
          </button>
        </div>
        
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={handleSOSClick}
            style={{
              background: 'linear-gradient(135deg, #FF3B30 0%, #D32F2F 100%)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(255, 59, 48, 0.4), inset 0 2px 0 rgba(255,255,255,0.2)',
              borderRadius: '24px',
              color: 'white',
              width: '100%',
              padding: '24px',
              fontSize: '20px',
              fontWeight: 900,
              letterSpacing: '1px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontSize: '40px', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}>🚨</span>
            ACTIVAR PÁNICO
          </button>
        </div>
      </div>

      <GlassModal 
        isOpen={isConfigOpen} 
        onClose={() => setConfigOpen(false)}
        title="Configuración SOS"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.8, lineHeight: 1.5 }}>
            Aquí puedes configurar qué acciones ocurren cuando presionas el botón de pánico en el dashboard.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px' }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#ff8a1f' }}>Acciones Automáticas</h4>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Disparar todas las sirenas</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Parpadear luces rojas</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px' }} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Notificar administradores</span>
            </label>
          </div>

          <button
            onClick={() => setConfigOpen(false)}
            style={{
              background: '#1E88E5',
              border: 'none',
              borderRadius: '12px',
              padding: '14px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            Guardar Configuración
          </button>
        </div>
      </GlassModal>
    </>
  );
}
