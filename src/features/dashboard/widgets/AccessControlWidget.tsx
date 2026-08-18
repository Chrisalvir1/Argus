import React, { useState } from 'react';
import { GlassModal } from '../components/GlassModal';

interface AccessControlWidgetProps {
  hass: any;
}

export function AccessControlWidget({ hass }: AccessControlWidgetProps) {
  const [isConfigOpen, setConfigOpen] = useState(false);

  return (
    <>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800 }}>Control de Acceso</h3>
          <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 8px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
            ACTIVO
          </span>
        </div>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px' }}>
            <span style={{ fontSize: '24px' }}>🛡️</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', fontWeight: 700 }}>PIN Maestro Requerido</span>
              <span style={{ fontSize: '12px', opacity: 0.6 }}>Protección global activada</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setConfigOpen(true)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '16px',
              padding: '16px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <span>👥</span> Gestionar Usuarios y Permisos
          </button>
        </div>
      </div>

      <GlassModal 
        isOpen={isConfigOpen} 
        onClose={() => setConfigOpen(false)}
        title="Control de Acceso & Usuarios"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ margin: 0, fontSize: '14px', opacity: 0.8, lineHeight: 1.5 }}>
            Gestión global de seguridad, PIN maestro y administradores.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#1E88E5' }}>Usuarios Registrados</h4>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#43A047', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>C</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Chris (Tú)</span>
                  <span style={{ fontSize: '11px', color: '#43A047', fontWeight: 800 }}>ADMINISTRADOR</span>
                </div>
              </div>
              <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}>Editar</button>
            </div>
            
            <button style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px dashed rgba(255,255,255,0.3)', borderRadius: '12px', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontWeight: 600, marginTop: '8px' }}>
              + Añadir Usuario
            </button>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px' }}>
             <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Configuración Global</h4>
             <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>Requerir PIN para desarmar</span>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
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
            Cerrar
          </button>
        </div>
      </GlassModal>
    </>
  );
}
