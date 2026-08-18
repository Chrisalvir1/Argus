import React, { useMemo } from 'react';

interface ActiveInstancesProps {
  hass: any;
}

export function ActiveInstances({ hass }: ActiveInstancesProps) {
  const entities = hass?.states || {};
  const sensors = Object.values(entities).filter((e: any) => 
    e.entity_id.startsWith('binary_sensor.') && 
    (e.attributes.device_class === 'door' || e.attributes.device_class === 'window' || e.attributes.device_class === 'motion')
  ).slice(0, 4);

  // Determinar el estado general de la alarma usando el primer panel disponible, o 'disarmed' por defecto
  const alarmPanel: any = Object.values(entities).find((e: any) => e.entity_id.startsWith('alarm_control_panel.argus'));
  const alarmState = alarmPanel?.state || 'disarmed';

  const isTriggered = alarmState === 'triggered';
  const isArming = alarmState === 'arming' || alarmState === 'pending';

  // Componente de Escudo Premium Original (Liquid Glass v2.2.13)
  const ShieldSVG = () => (
    <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ filter: 'drop-shadow(0 18px 28px rgba(0,0,0,.34))', maxWidth: '140px', margin: 'auto', display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="premium-shield" x1="20%" y1="10%" x2="85%" y2="100%">
          <stop stopColor="#fff" stopOpacity=".38" />
          <stop offset=".25" stopColor={isArming ? '#f5b041' : '#43A047'} stopOpacity=".78" />
          <stop offset="1" stopColor={isArming ? '#f5b041' : '#43A047'} stopOpacity=".18" />
        </linearGradient>
        <filter id="premium-glow" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-shield)" stroke={isArming ? '#f5b041' : '#43A047'} strokeWidth="3" filter="url(#premium-glow)" />
      <path d="M100 31 148 51" stroke="#fff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="105" r="43" fill="rgba(5,12,23,.3)" stroke="rgba(255,255,255,.22)" strokeWidth="2" />
      <g fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#premium-glow)">
        {isArming ? (
          <path d="M100 80 v25 l15 15" />
        ) : (
          <path d="M85 105 l10 10 l20 -20" />
        )}
      </g>
      <circle cx="100" cy="105" r="55" fill="none" stroke={isArming ? '#f5b041' : '#43A047'} strokeOpacity=".42" strokeWidth="2">
        <animate attributeName="r" values="51;60;51" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values=".6;.08;.6" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  // Nueva Sirena Roja SVG (Para estado Triggered o SOS)
  const SirenSVG = () => (
    <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ filter: 'drop-shadow(0 18px 30px rgba(255, 0, 0, 0.6))', maxWidth: '140px', margin: 'auto', display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="siren-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#ff4b4b" offset="0%" />
          <stop stopColor="#c62828" offset="100%" />
        </linearGradient>
        <filter id="siren-glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Base */}
      <path d="M60 140 h80 v15 c0 8 -8 15 -15 15 h-50 c-7 0 -15 -7 -15 -15 z" fill="#333" stroke="#222" strokeWidth="2"/>
      
      {/* Cúpula de la sirena */}
      <path d="M70 140 v-30 c0 -30 15 -45 30 -45 c15 0 30 15 30 45 v30 z" fill="url(#siren-grad)" stroke="#ff8a8a" strokeWidth="2" filter="url(#siren-glow)">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="0.8s" repeatCount="indefinite" />
      </path>
      
      {/* Reflejos internos */}
      <path d="M85 130 v-20 c0 -10 5 -15 15 -15" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="0.8s" repeatCount="indefinite" />
      </path>

      {/* Ondas expansivas rojas */}
      <circle cx="100" cy="100" r="50" fill="none" stroke="#ff0000" strokeWidth="4">
        <animate attributeName="r" values="40;90" dur="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="50" fill="none" stroke="#ff0000" strokeWidth="4">
        <animate attributeName="r" values="40;90" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 800 }}>Instancias Activas</h3>
      
      <div style={{ display: 'flex', flex: 1, gap: '20px' }}>
        {/* Lado izquierdo: Escudo / Sirena */}
        <div style={{ flex: '0 0 160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {isTriggered ? <SirenSVG /> : <ShieldSVG />}
          
          <div style={{ 
            marginTop: '16px', 
            fontSize: '12px', 
            fontWeight: 800, 
            textAlign: 'center',
            color: isTriggered ? '#ff4b4b' : (isArming ? '#f5b041' : '#43A047'),
            background: isTriggered ? 'rgba(255, 75, 75, 0.15)' : (isArming ? 'rgba(245, 176, 65, 0.15)' : 'rgba(67, 160, 71, 0.15)'),
            padding: '6px 12px',
            borderRadius: '12px'
          }}>
            {isTriggered ? '¡ALARMA DISPARADA!' : (isArming ? 'ESPERANDO SENSORES...' : 'SISTEMA PROTEGIDO')}
          </div>
        </div>

        {/* Lado derecho: Grid de sensores */}
        <div style={{ 
          flex: 1,
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', 
          gap: '12px',
          overflowY: 'auto',
          alignContent: 'start'
        }}>
          {sensors.length === 0 ? (
            <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', opacity: 0.5, fontSize: '13px', fontWeight: 600 }}>
              No hay sensores detectados
            </div>
          ) : (
            sensors.map((sensor: any) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
}
