import React from 'react';

interface AutomationsWidgetProps {
  hass: any;
}

export function AutomationsWidget({ hass }: AutomationsWidgetProps) {
  // Simular automatizaciones (reglas vinculadas) de Home Assistant
  const mockAutomations = [
    { id: '1', name: 'Encender luces si hay intrusión', status: 'enabled', type: 'triggered', icon: '🚨' },
    { id: '2', name: 'Apagar todo al Armar Ausente', status: 'enabled', type: 'pending', icon: '⏳' },
    { id: '3', name: 'Enviar notificación al Desarmar', status: 'disabled', type: 'disarmed', icon: '🔓' }
  ];

  const getColorForType = (type: string) => {
    switch (type) {
      case 'disarmed': return '#43A047'; // Verde
      case 'triggered': return '#E53935'; // Rojo
      case 'pending': return '#F5B041'; // Naranja
      default: return 'rgba(255, 255, 255, 0.4)';
    }
  };

  const getBackgroundForType = (type: string) => {
    switch (type) {
      case 'disarmed': return 'rgba(67, 160, 71, 0.15)'; 
      case 'triggered': return 'rgba(229, 57, 53, 0.15)'; 
      case 'pending': return 'rgba(245, 176, 65, 0.15)'; 
      default: return 'rgba(255, 255, 255, 0.05)';
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.01em' }}>Automatizaciones</span>
        <button 
          type="button" 
          onClick={() => {
            // Lógica para abrir el editor de automatizaciones de Home Assistant
            alert('Abriendo creador de automatizaciones en Home Assistant...');
          }}
          style={{
            background: '#1E88E5',
            border: 'none',
            borderRadius: '12px',
            padding: '6px 12px',
            color: 'white',
            fontSize: '12px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>+</span> Crear con HA
        </button>
      </div>

      <p style={{ margin: '0 0 12px 0', fontSize: '13px', opacity: 0.7, lineHeight: 1.4 }}>
        Reglas configuradas en Home Assistant que utilizan el panel de Argus como disparador o condición.
      </p>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', paddingRight: '4px' }}>
        {mockAutomations.map((item) => (
          <div key={item.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '12px', 
            borderRadius: '16px',
            opacity: item.status === 'enabled' ? 1 : 0.5
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: getBackgroundForType(item.type),
                color: getColorForType(item.type),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                boxShadow: `0 0 8px ${getBackgroundForType(item.type)}`
              }}>
                {item.icon}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600 }}>{item.name}</span>
            </div>
            
            {/* Toggle visual */}
            <div style={{ 
              width: '36px', 
              height: '20px', 
              background: item.status === 'enabled' ? '#43A047' : 'rgba(255,255,255,0.2)', 
              borderRadius: '10px', 
              position: 'relative',
              cursor: 'pointer'
            }}>
              <div style={{
                position: 'absolute',
                top: '2px',
                left: item.status === 'enabled' ? '18px' : '2px',
                width: '16px',
                height: '16px',
                background: 'white',
                borderRadius: '50%',
                transition: 'left 0.2s ease'
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
