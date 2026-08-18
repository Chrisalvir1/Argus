import React from 'react';

interface ActiveInstancesProps {
  hass: any;
}

export function ActiveInstances({ hass }: ActiveInstancesProps) {
  // En Liquid Glass, las instancias activas se mostraban como tarjetas difuminadas con iconos.
  // Como esto es un clon puro, simularemos la estética "Liquid Glass"
  
  const entities = hass?.states || {};
  // Filtrar algunos sensores de ejemplo para mostrar en el lienzo en blanco
  const sensors = Object.values(entities).filter((e: any) => 
    e.entity_id.startsWith('binary_sensor.') && 
    (e.attributes.device_class === 'door' || e.attributes.device_class === 'window' || e.attributes.device_class === 'motion')
  ).slice(0, 6); // Mostrar hasta 6

  if (sensors.length === 0) {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '20px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 800 }}>Instancias Activas</h3>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5, fontSize: '13px', fontWeight: 600 }}>
          No hay sensores detectados
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 800 }}>Instancias Activas</h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', 
        gap: '12px',
        overflowY: 'auto'
      }}>
        {sensors.map((sensor: any) => {
          const isOpen = sensor.state === 'on';
          return (
            <div key={sensor.entity_id} style={{
              background: isOpen ? 'rgba(255, 138, 31, 0.15)' : 'rgba(255, 255, 255, 0.08)',
              border: `1px solid ${isOpen ? 'rgba(255, 138, 31, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '16px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '20px' }}>
                  {sensor.attributes.device_class === 'motion' ? '🏃‍♂️' : '🚪'}
                </span>
                <span style={{ 
                  fontSize: '10px', 
                  fontWeight: 900, 
                  padding: '2px 6px', 
                  borderRadius: '6px',
                  background: isOpen ? 'rgba(255, 138, 31, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                  color: isOpen ? '#ff8a1f' : 'rgba(255,255,255,0.7)'
                }}>
                  {isOpen ? 'ABIERTO' : 'CERRADO'}
                </span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.2 }}>
                {sensor.attributes.friendly_name || sensor.entity_id}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
