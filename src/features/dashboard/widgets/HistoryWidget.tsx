import React from 'react';

interface HistoryWidgetProps {
  hass: any;
}

export function HistoryWidget({ hass }: HistoryWidgetProps) {
  // Ejemplos mockeados para simular el historial de Argus, ya que no tenemos acceso real al logbook de HA desde aquí
  const mockHistory = [
    { id: '1', time: '12:05 PM', action: 'Alarma disparada por Sensor Puerta Principal', type: 'triggered', icon: '🚨' },
    { id: '2', time: '12:00 PM', action: 'Armando sistema (Ausente)...', type: 'pending', icon: '⏳' },
    { id: '3', time: '11:30 AM', action: 'Sistema desarmado por Chris', type: 'disarmed', icon: '🔓' },
    { id: '4', time: '10:00 AM', action: 'Configuración de PIN guardada', type: 'config', icon: '⚙️' }
  ];

  const getColorForType = (type: string) => {
    switch (type) {
      case 'disarmed': return '#43A047'; // Verde
      case 'triggered': return '#E53935'; // Rojo
      case 'pending': return '#F5B041'; // Naranja
      case 'config': return 'rgba(255, 255, 255, 0.4)'; // Sin color dominante
      default: return 'rgba(255, 255, 255, 0.4)';
    }
  };

  const getBackgroundForType = (type: string) => {
    switch (type) {
      case 'disarmed': return 'rgba(67, 160, 71, 0.15)'; 
      case 'triggered': return 'rgba(229, 57, 53, 0.15)'; 
      case 'pending': return 'rgba(245, 176, 65, 0.15)'; 
      case 'config': return 'rgba(255, 255, 255, 0.05)';
      default: return 'rgba(255, 255, 255, 0.05)';
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.01em' }}>Historial de Actividad</span>
        <button 
          type="button" 
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
          🔄 Actualizar
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', paddingRight: '4px' }}>
        {mockHistory.map((item) => (
          <div key={item.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px', 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '12px', 
            borderRadius: '16px' 
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: getBackgroundForType(item.type),
              color: getColorForType(item.type),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              boxShadow: `0 0 10px ${getBackgroundForType(item.type)}`
            }}>
              {item.icon}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.3 }}>{item.action}</span>
              <span style={{ fontSize: '11px', opacity: 0.5, marginTop: '2px', fontWeight: 600 }}>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
