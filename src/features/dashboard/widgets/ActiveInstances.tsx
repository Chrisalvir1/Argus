import React, { useState } from 'react';

interface ActiveInstancesProps {
  hass: any;
}

export function ActiveInstances({ hass }: ActiveInstancesProps) {
  const [sosConfirm, setSosConfirm] = useState(false);

  const entities = hass?.states || {};

  // Alarm panel
  const alarmPanel: any = Object.values(entities).find(
    (e: any) => e.entity_id?.startsWith('alarm_control_panel.argus')
  );
  const alarmState: string = alarmPanel?.state || 'disarmed';
  const instanceName: string =
    alarmPanel?.attributes?.friendly_name?.toUpperCase() ||
    (hass?.config?.location_name?.toUpperCase()) ||
    'MI HOGAR';

  const isDisarmed = alarmState === 'disarmed';
  const isTriggered = alarmState === 'triggered';
  const isArming = alarmState === 'arming' || alarmState === 'pending';
  const isArmed = !isDisarmed && !isTriggered && !isArming;

  const connected = !!hass;

  // Sensors — door / window / motion
  const sensors = Object.values(entities)
    .filter(
      (e: any) =>
        e.entity_id.startsWith('binary_sensor.') &&
        ['door', 'window', 'motion', 'garage_door'].includes(
          e.attributes.device_class
        )
    )
    .slice(0, 5);

  // System status badge
  const systemBadge = (() => {
    switch (alarmState) {
      case 'disarmed':    return { text: 'SISTEMA DESARMADO',   color: '#43A047', bg: 'rgba(67,160,71,0.2)',   border: 'rgba(67,160,71,0.5)' };
      case 'armed_home':  return { text: 'SISTEMA ARMADO · EN CASA',  color: '#F5A623', bg: 'rgba(245,166,35,0.2)',  border: 'rgba(245,166,35,0.5)' };
      case 'armed_away':  return { text: 'SISTEMA ARMADO · AUSENTE',  color: '#E53935', bg: 'rgba(229,57,53,0.2)',   border: 'rgba(229,57,53,0.5)' };
      case 'armed_night': return { text: 'SISTEMA ARMADO · NOCHE',    color: '#8E24AA', bg: 'rgba(142,36,170,0.2)',  border: 'rgba(142,36,170,0.5)' };
      case 'armed_vacation': return { text: 'SISTEMA ARMADO · VACACIONES', color: '#00897B', bg: 'rgba(0,137,123,0.2)', border: 'rgba(0,137,123,0.5)' };
      case 'triggered':   return { text: '¡ALARMA DISPARADA!',  color: '#FF3B30', bg: 'rgba(255,59,48,0.2)',   border: 'rgba(255,59,48,0.5)' };
      case 'arming':
      case 'pending':     return { text: 'ARMANDO...',           color: '#F5B041', bg: 'rgba(245,176,65,0.2)',  border: 'rgba(245,176,65,0.5)' };
      default:            return { text: 'ESTADO DESCONOCIDO',   color: 'rgba(255,255,255,0.5)', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.15)' };
    }
  })();

  const modes = [
    { id: 'armed_home',     service: 'alarm_arm_home',     icon: '🏠', label: 'EN CASA',    color: '#1E88E5' },
    { id: 'armed_away',     service: 'alarm_arm_away',     icon: '🔒', label: 'AUSENTE',    color: '#E53935' },
    { id: 'armed_night',    service: 'alarm_arm_night',    icon: '🌙', label: 'NOCHE',      color: '#8E24AA' },
    { id: 'armed_vacation', service: 'alarm_arm_vacation', icon: '✈️', label: 'VACACIONES', color: '#00897B' },
  ];

  const callAlarm = (service: string) => {
    if (hass && alarmPanel) {
      hass.callService('alarm_control_panel', service, {
        entity_id: alarmPanel.entity_id,
      });
    }
  };

  const handleSOS = () => {
    if (sosConfirm) {
      if (hass && alarmPanel) {
        hass.callService('alarm_control_panel', 'alarm_trigger', {
          entity_id: alarmPanel.entity_id,
        });
      }
      setSosConfirm(false);
    } else {
      setSosConfirm(true);
      setTimeout(() => setSosConfirm(false), 3000);
    }
  };

  // ── Shield SVG ──────────────────────────────────────────────────────────────
  const shieldColor = isTriggered ? '#FF3B30' : isArming ? '#F5B041' : isArmed ? '#F5A623' : '#43A047';
  const ShieldSVG = () => (
    <svg
      viewBox="0 0 200 220"
      width="100%"
      height="100%"
      style={{
        filter: `drop-shadow(0 12px 28px ${shieldColor}55)`,
        maxWidth: '130px',
        maxHeight: '150px',
        margin: 'auto',
        display: 'block',
        overflow: 'visible',
      }}
    >
      <defs>
        <linearGradient id="sg" x1="20%" y1="5%" x2="85%" y2="100%">
          <stop stopColor="#fff" stopOpacity=".32" />
          <stop offset=".28" stopColor={shieldColor} stopOpacity=".82" />
          <stop offset="1"   stopColor={shieldColor} stopOpacity=".18" />
        </linearGradient>
        <filter id="sglow" filterUnits="userSpaceOnUse" x="-60" y="-60" width="320" height="340">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path
        d="M100 18 L158 44 v46 c0 46-26 73-58 91 C68 163 42 136 42 90 V44 z"
        fill="url(#sg)"
        stroke={shieldColor}
        strokeWidth="3"
        filter="url(#sglow)"
      />
      <path d="M100 28 L150 50" stroke="#fff" strokeOpacity=".4" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="108" r="44" fill="rgba(0,8,20,.3)" stroke="rgba(255,255,255,.18)" strokeWidth="1.5" />
      <g fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#sglow)">
        {isTriggered ? (
          <path d="M88 96 L112 120 M112 96 L88 120" />
        ) : isArming ? (
          <path d="M100 88 v22 l14 14" />
        ) : isArmed ? (
          <path d="M100 88 v22 l14 14" />
        ) : (
          <path d="M84 108 l12 12 l22-22" />
        )}
      </g>
      {!isTriggered && (
        <circle cx="100" cy="108" r="56" fill="none" stroke={shieldColor} strokeOpacity=".38" strokeWidth="2">
          <animate attributeName="r" values="50;65;50" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".6;.06;.6" dur="3.5s" repeatCount="indefinite" />
        </circle>
      )}
      {isTriggered && (
        <>
          <circle cx="100" cy="108" r="55" fill="none" stroke="#FF3B30" strokeWidth="3.5">
            <animate attributeName="r" values="40;90" dur="0.75s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="0.75s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="108" r="55" fill="none" stroke="#FF3B30" strokeWidth="3.5">
            <animate attributeName="r" values="40;90" dur="0.75s" begin="0.375s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="0.75s" begin="0.375s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  );

  // ── Sensor row ──────────────────────────────────────────────────────────────
  const SensorRow = ({ sensor }: { sensor: any }) => {
    const isOpen = sensor.state === 'on';
    const battery = sensor.attributes?.battery_level ?? sensor.attributes?.battery ?? null;
    const dc = sensor.attributes?.device_class;
    const icon = dc === 'motion' ? '🏃‍♂️' : dc === 'window' ? '🪟' : dc === 'garage_door' ? '🚘' : '🚪';
    const name: string = (sensor.attributes?.friendly_name || sensor.entity_id)
      .toUpperCase()
      .replace('BINARY_SENSOR.', '')
      .slice(0, 20);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '7px 10px',
          borderRadius: '12px',
          background: isOpen ? 'rgba(229,57,53,0.13)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${isOpen ? 'rgba(229,57,53,0.35)' : 'rgba(255,255,255,0.08)'}`,
          transition: 'background 0.3s',
        }}
      >
        <span style={{ fontSize: '16px', flexShrink: 0 }}>{icon}</span>
        <span
          style={{
            flex: 1,
            fontSize: '11px',
            fontWeight: 700,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}
        >
          {name}
        </span>
        {battery !== null && (
          <span style={{ fontSize: '10px', fontWeight: 700, opacity: 0.6 }}>
            🔋{battery}%
          </span>
        )}
        <span
          style={{
            fontSize: '9px',
            fontWeight: 900,
            padding: '2px 6px',
            borderRadius: '6px',
            background: isOpen ? 'rgba(229,57,53,0.25)' : 'rgba(67,160,71,0.2)',
            color: isOpen ? '#FF6B6B' : '#66BB6A',
            letterSpacing: '0.04em',
          }}
        >
          {isOpen ? 'ABIERTO' : 'CERRADO'}
        </span>
      </div>
    );
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '14px 16px',
        boxSizing: 'border-box',
        gap: '12px',
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          🏠 {instanceName}
        </span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '11px',
            fontWeight: 700,
            color: connected ? '#66BB6A' : '#EF5350',
            background: connected ? 'rgba(67,160,71,0.12)' : 'rgba(229,57,53,0.12)',
            padding: '3px 8px',
            borderRadius: '20px',
          }}
        >
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: connected ? '#66BB6A' : '#EF5350', display: 'inline-block' }} />
          {connected ? 'Conectado' : 'Desconectado'}
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 900,
              padding: '4px 10px',
              borderRadius: '8px',
              background: systemBadge.bg,
              color: systemBadge.color,
              border: `1px solid ${systemBadge.border}`,
              letterSpacing: '0.03em',
            }}
          >
            {systemBadge.text}
          </span>
        </div>
      </div>

      {/* ── Body: 3 columns ─────────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', gap: '14px', overflow: 'hidden', minHeight: 0 }}>

        {/* Left: mode buttons + action buttons */}
        <div
          style={{
            flexShrink: 0,
            width: '190px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {/* 2×2 mode grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              flex: 1,
            }}
          >
            {modes.map(mode => {
              const active = alarmState === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => callAlarm(mode.service)}
                  style={{
                    background: active ? `${mode.color}22` : 'rgba(255,255,255,0.06)',
                    border: `1.5px solid ${active ? mode.color : 'rgba(255,255,255,0.12)'}`,
                    borderRadius: '14px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    padding: '10px 6px',
                    transition: 'all 0.2s cubic-bezier(0.175,0.885,0.32,1.275)',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '6px',
                        right: '6px',
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: mode.color,
                      }}
                    />
                  )}
                  <span style={{ fontSize: '22px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>{mode.icon}</span>
                  <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.04em', color: active ? mode.color : 'rgba(255,255,255,0.8)' }}>
                    {mode.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Disarm / status button */}
          <button
            type="button"
            onClick={() => callAlarm('alarm_disarm')}
            style={{
              background: isDisarmed
                ? 'rgba(67,160,71,0.15)'
                : 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)',
              border: `1px solid ${isDisarmed ? 'rgba(67,160,71,0.3)' : 'rgba(67,160,71,0.6)'}`,
              borderRadius: '14px',
              color: isDisarmed ? 'rgba(255,255,255,0.5)' : '#fff',
              fontSize: '12px',
              fontWeight: 900,
              padding: '11px 10px',
              cursor: isDisarmed ? 'default' : 'pointer',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.25s ease',
            }}
            disabled={isDisarmed}
          >
            <span style={{ fontSize: '14px' }}>{isDisarmed ? '🔓' : '🔒'}</span>
            {isDisarmed ? 'DESARMADO' : 'Desliza para desarmar'}
          </button>

          {/* SOS button */}
          <button
            type="button"
            onClick={handleSOS}
            style={{
              background: sosConfirm
                ? 'linear-gradient(135deg, #B71C1C 0%, #E53935 100%)'
                : 'rgba(20,15,25,0.7)',
              border: `1px solid ${sosConfirm ? 'rgba(229,57,53,0.8)' : 'rgba(255,255,255,0.15)'}`,
              borderRadius: '14px',
              color: sosConfirm ? '#fff' : 'rgba(255,255,255,0.85)',
              fontSize: '12px',
              fontWeight: 900,
              padding: '11px 10px',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.25s ease',
              boxShadow: sosConfirm ? '0 0 20px rgba(229,57,53,0.5)' : 'none',
            }}
          >
            <span style={{ fontSize: '14px' }}>⚠️</span>
            {sosConfirm ? '¡CONFIRMAR SOS!' : '🔴 SOS / PÁNICO'}
          </button>
        </div>

        {/* Center: shield */}
        <div
          style={{
            flexShrink: 0,
            width: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ShieldSVG />
        </div>

        {/* Right: sensors */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            overflowY: 'auto',
            paddingRight: '2px',
          }}
        >
          {sensors.length === 0 ? (
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.4,
                fontSize: '12px',
                fontWeight: 600,
                textAlign: 'center',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span style={{ fontSize: '24px' }}>🔍</span>
              No hay sensores detectados
            </div>
          ) : (
            sensors.map((s: any) => <SensorRow key={s.entity_id} sensor={s} />)
          )}
        </div>
      </div>
    </div>
  );
}
