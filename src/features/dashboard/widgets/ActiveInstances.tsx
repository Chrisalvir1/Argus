import React, { useRef, useState, useCallback, memo } from 'react';

interface ActiveInstancesProps {
  hass: any;
}

// ── Slide-to-Action button (real drag interaction) ───────────────────────────
interface SlideButtonProps {
  label: string;
  subLabel?: string;
  color: string;
  onAction: () => void;
  icon?: string;
  disabled?: boolean;
}

const SlideButton = memo(function SlideButton({
  label, subLabel, color, onAction, icon = '›', disabled = false,
}: SlideButtonProps) {
  const trackRef    = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const KNOB_W      = 50;
  const PAD         = 4;

  const maxOffset = useCallback(() => {
    return Math.max(0, (trackRef.current?.offsetWidth ?? 200) - KNOB_W - PAD * 2);
  }, []);

  const pct = maxOffset() > 0 ? offset / maxOffset() : 0;

  const reset = useCallback(() => {
    isDragging.current = false;
    setOffset(0);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    startX.current = e.clientX - offset;
  }, [disabled, offset]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const newOffset = Math.max(0, Math.min(maxOffset(), e.clientX - startX.current));
    setOffset(newOffset);
    if (newOffset >= maxOffset() * 0.82) {
      isDragging.current = false;
      setOffset(0);
      onAction();
    }
  }, [maxOffset, onAction]);

  const onPointerUp = useCallback(() => reset(), [reset]);

  return (
    <div
      ref={trackRef}
      style={{
        position: 'relative',
        height: '50px',
        borderRadius: '25px',
        background: disabled
          ? 'rgba(255,255,255,0.04)'
          : `linear-gradient(90deg, ${color}22 0%, ${color}0a 100%)`,
        border: `1.5px solid ${disabled ? 'rgba(255,255,255,0.08)' : color + '55'}`,
        overflow: 'hidden',
        flexShrink: 0,
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* Progress fill */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: `${PAD + KNOB_W + offset}px`,
        background: `linear-gradient(90deg, ${color}55, ${color}22)`,
        borderRadius: '25px',
        pointerEvents: 'none',
        transition: isDragging.current ? 'none' : 'width 0.35s cubic-bezier(0.34,1.56,0.64,1)',
      }} />

      {/* Label in center */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        transition: 'opacity 0.2s',
        opacity: disabled ? 0.4 : 0.7 + pct * 0.3,
      }}>
        <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.05em', color: disabled ? 'rgba(255,255,255,0.3)' : color, lineHeight: 1 }}>
          {label}
        </span>
        {subLabel && (
          <span style={{ fontSize: '10px', fontWeight: 600, opacity: 0.55, marginTop: '1px' }}>
            {subLabel}
          </span>
        )}
      </div>

      {/* Draggable knob */}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          position: 'absolute',
          left: `${PAD + offset}px`,
          top: `${PAD}px`,
          width: `${KNOB_W}px`,
          height: `${50 - PAD * 2}px`,
          borderRadius: '21px',
          background: disabled ? 'rgba(255,255,255,0.12)' : color,
          boxShadow: disabled ? 'none' : `0 4px 20px ${color}88`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          color: 'white',
          fontWeight: 900,
          cursor: disabled ? 'not-allowed' : 'grab',
          touchAction: 'none',
          transition: isDragging.current ? 'none' : 'left 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {icon}
      </div>
    </div>
  );
});

// ── Sensor row ───────────────────────────────────────────────────────────────
const SensorRow = memo(function SensorRow({ entity }: { entity: any }) {
  const isOpen    = entity.state === 'on' || entity.state === 'open' || entity.state === 'unlocked';
  const isLocked  = entity.state === 'locked';
  const dc        = entity.attributes?.device_class ?? '';
  const name: string = (entity.attributes?.friendly_name ?? entity.entity_id)
    .replace(/binary_sensor\./i, '')
    .replace(/_/g, ' ')
    .toUpperCase()
    .slice(0, 22);
  const battery   = entity.attributes?.battery_level ?? entity.attributes?.battery ?? null;

  const icon =
    dc === 'motion' ? '🏃‍♂️' :
    dc === 'window' ? '🪟' :
    dc === 'garage_door' ? '🚘' :
    dc === 'lock' ? '🔒' :
    dc === 'smoke' ? '🔥' :
    dc === 'vibration' ? '📳' :
    '🚪';

  const stateColor  = isOpen ? '#FF6B6B' : '#66BB6A';
  const stateBg     = isOpen ? 'rgba(229,57,53,0.15)' : 'rgba(67,160,71,0.12)';
  const stateLabel  = isLocked ? 'BLOQUEADO' : isOpen ? 'ABIERTO' : 'CERRADO';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      padding: '7px 10px',
      borderRadius: '11px',
      background: isOpen ? 'rgba(229,57,53,0.1)' : 'rgba(255,255,255,0.03)',
      border: `1px solid ${isOpen ? 'rgba(229,57,53,0.3)' : 'rgba(255,255,255,0.07)'}`,
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <span style={{ fontSize: '15px', flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1px', overflow: 'hidden' }}>
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.04em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', lineHeight: 1 }}>
          {name}
        </span>
        {battery !== null && (
          <span style={{ fontSize: '9px', fontWeight: 600, opacity: 0.5 }}>🔋 {battery}%</span>
        )}
      </div>
      <span style={{
        fontSize: '9px', fontWeight: 900, padding: '2px 6px', borderRadius: '6px',
        background: stateBg, color: stateColor, letterSpacing: '0.04em', flexShrink: 0,
      }}>
        {stateLabel}
      </span>
    </div>
  );
});

// ── Shield SVG ───────────────────────────────────────────────────────────────
const ShieldSVG = memo(function ShieldSVG({ alarmState }: { alarmState: string }) {
  const isTriggered = alarmState === 'triggered';
  const isArming    = alarmState === 'arming' || alarmState === 'pending';
  const isArmed     = alarmState.startsWith('armed_');

  const color = isTriggered ? '#FF3B30' : isArming ? '#F5B041' : isArmed ? '#F5A623' : '#43A047';

  return (
    <svg viewBox="0 0 200 220" width="100%" height="100%"
      style={{ filter: `drop-shadow(0 10px 24px ${color}55)`, maxWidth: '130px', maxHeight: '155px', margin: 'auto', display: 'block', overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="sg" x1="20%" y1="5%" x2="85%" y2="100%">
          <stop stopColor="#fff" stopOpacity=".28" />
          <stop offset=".3" stopColor={color} stopOpacity=".8" />
          <stop offset="1" stopColor={color} stopOpacity=".15" />
        </linearGradient>
        <filter id="sglow" filterUnits="userSpaceOnUse" x="-60" y="-60" width="320" height="340">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M100 18 L158 44 v46 c0 46-26 73-58 91 C68 163 42 136 42 90 V44 z"
        fill="url(#sg)" stroke={color} strokeWidth="2.5" filter="url(#sglow)" />
      <path d="M100 28 L150 50" stroke="#fff" strokeOpacity=".38" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="108" r="44" fill="rgba(0,8,20,.28)" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" />
      <g fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#sglow)">
        {isTriggered
          ? <path d="M86 94 L114 122 M114 94 L86 122" />
          : isArming
            ? <path d="M100 86 v24 l14 14" />
            : isArmed
              ? <path d="M100 86 v24 l14 14" />
              : <path d="M83 108 l12 12 l22-22" />
        }
      </g>
      {/* Pulse ring */}
      {!isTriggered && (
        <circle cx="100" cy="108" r="56" fill="none" stroke={color} strokeOpacity=".35" strokeWidth="1.8">
          <animate attributeName="r" values="50;66;50" dur={isArming ? '1.5s' : '3.5s'} repeatCount="indefinite" />
          <animate attributeName="opacity" values=".6;.05;.6" dur={isArming ? '1.5s' : '3.5s'} repeatCount="indefinite" />
        </circle>
      )}
      {/* Triggered pulse rings */}
      {isTriggered && [0, 0.4].map((delay, i) => (
        <circle key={i} cx="100" cy="108" r="55" fill="none" stroke="#FF3B30" strokeWidth="3.5">
          <animate attributeName="r" values="42;90" dur="0.7s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0" dur="0.7s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
});

// ── Main widget ──────────────────────────────────────────────────────────────
export function ActiveInstances({ hass }: ActiveInstancesProps) {
  const entities = hass?.states ?? {};

  // Alarm panel — try both the named entity and any argus panel
  const alarmPanel: any =
    Object.values(entities).find((e: any) => e.entity_id?.startsWith('alarm_control_panel.argus')) ??
    Object.values(entities).find((e: any) => e.entity_id?.startsWith('alarm_control_panel.'));

  const alarmState: string = alarmPanel?.state ?? 'disarmed';
  const attrs = alarmPanel?.attributes ?? {};

  const instanceName: string = (
    attrs.friendly_name ??
    alarmPanel?.attributes?.name ??
    hass?.config?.location_name ??
    'MI HOGAR'
  ).toUpperCase();

  const connected   = !!hass;
  const isDisarmed  = alarmState === 'disarmed';
  const isArmed     = alarmState.startsWith('armed_');
  const isTriggered = alarmState === 'triggered';
  const isArming    = alarmState === 'arming' || alarmState === 'pending';

  // ── Read configured sensors from alarm panel attributes ──────────────────
  // Argus stores sensor IDs in attributes like sensors_away, sensors_home, etc.
  // We show sensors for the CURRENT mode (or all configured ones)
  const configuredSensorIds: string[] = (() => {
    // Try mode-specific list first
    const modeMap: Record<string, string[]> = {
      armed_away:     attrs.sensors_away     ?? [],
      armed_home:     attrs.sensors_home     ?? [],
      armed_night:    attrs.sensors_night    ?? [],
      armed_vacation: attrs.sensors_vacation ?? [],
    };
    const modeList = modeMap[alarmState] ?? [];
    if (modeList.length > 0) return modeList;

    // Fall back to generic sensors list
    const generic = attrs.sensors ?? attrs.open_sensors ?? attrs.sensor_ids ?? [];
    if (Array.isArray(generic)) return generic;
    if (typeof generic === 'object') return Object.keys(generic);

    // Last resort: try entry sensors
    return attrs.entry_sensors ?? [];
  })();

  // Resolve sensor IDs to entities
  const configuredSensors = configuredSensorIds
    .map((id: string) => entities[id])
    .filter(Boolean)
    .slice(0, 6);

  // Open sensors from attr (dict entity_id -> state or just list)
  const openSensorsAttr = attrs.open_sensors ?? {};
  const openSensorIds = new Set<string>(
    typeof openSensorsAttr === 'object' && !Array.isArray(openSensorsAttr)
      ? Object.keys(openSensorsAttr)
      : Array.isArray(openSensorsAttr) ? openSensorsAttr : []
  );

  // If no configured sensors from attrs, fall back to binary sensors in HA
  const fallbackSensors = configuredSensors.length === 0
    ? Object.values(entities)
        .filter((e: any) =>
          e.entity_id.startsWith('binary_sensor.') &&
          ['door', 'window', 'motion', 'garage_door', 'lock', 'smoke', 'vibration'].includes(
            e.attributes?.device_class ?? ''
          )
        )
        .slice(0, 6)
    : [];

  const sensors = configuredSensors.length > 0 ? configuredSensors : fallbackSensors;

  // ── System status badge ──────────────────────────────────────────────────
  const badge = (() => {
    const map: Record<string, { text: string; color: string; bg: string; border: string }> = {
      disarmed:       { text: 'SISTEMA DESARMADO',         color: '#43A047', bg: 'rgba(67,160,71,0.15)',    border: 'rgba(67,160,71,0.4)' },
      armed_home:     { text: 'SISTEMA ARMADO · EN CASA',  color: '#F5A623', bg: 'rgba(245,166,35,0.15)',   border: 'rgba(245,166,35,0.4)' },
      armed_away:     { text: 'SISTEMA ARMADO · AUSENTE',  color: '#EF5350', bg: 'rgba(229,57,53,0.15)',    border: 'rgba(229,57,53,0.4)' },
      armed_night:    { text: 'SISTEMA ARMADO · NOCHE',    color: '#AB47BC', bg: 'rgba(142,36,170,0.15)',   border: 'rgba(142,36,170,0.4)' },
      armed_vacation: { text: 'SISTEMA ARMADO · VACACIONES',color: '#26A69A',bg: 'rgba(0,137,123,0.15)',   border: 'rgba(0,137,123,0.4)' },
      triggered:      { text: '¡ALARMA DISPARADA!',        color: '#FF3B30', bg: 'rgba(255,59,48,0.18)',    border: 'rgba(255,59,48,0.5)' },
      arming:         { text: 'ARMANDO...',                 color: '#F5B041', bg: 'rgba(245,176,65,0.15)',   border: 'rgba(245,176,65,0.4)' },
      pending:        { text: 'ENTRADA DETECTADA...',       color: '#F5B041', bg: 'rgba(245,176,65,0.15)',   border: 'rgba(245,176,65,0.4)' },
    };
    return map[alarmState] ?? { text: alarmState.toUpperCase(), color: 'rgba(255,255,255,0.5)', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.15)' };
  })();

  // ── Alarm modes ──────────────────────────────────────────────────────────
  const MODES = [
    { id: 'armed_home',     service: 'alarm_arm_home',     icon: '🏠', label: 'EN CASA',    color: '#1E88E5' },
    { id: 'armed_away',     service: 'alarm_arm_away',     icon: '🔒', label: 'AUSENTE',    color: '#E53935' },
    { id: 'armed_night',    service: 'alarm_arm_night',    icon: '🌙', label: 'NOCHE',      color: '#8E24AA' },
    { id: 'armed_vacation', service: 'alarm_arm_vacation', icon: '✈️', label: 'VACACIONES', color: '#00897B' },
  ];

  const callAlarm = useCallback((service: string) => {
    if (hass && alarmPanel) {
      hass.callService('alarm_control_panel', service, { entity_id: alarmPanel.entity_id });
    }
  }, [hass, alarmPanel]);

  const doDisarm = useCallback(() => callAlarm('alarm_disarm'), [callAlarm]);
  const doSOS    = useCallback(() => {
    if (hass && alarmPanel) {
      hass.callService('alarm_control_panel', 'alarm_trigger', { entity_id: alarmPanel.entity_id });
    }
  }, [hass, alarmPanel]);

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '14px 16px',
      boxSizing: 'border-box',
      gap: '10px',
    }}>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.05em', opacity: 0.9 }}>
          🏠 {instanceName}
        </span>
        <span style={{
          display: 'flex', alignItems: 'center', gap: '5px',
          fontSize: '11px', fontWeight: 700,
          color: connected ? '#66BB6A' : '#EF5350',
          background: connected ? 'rgba(67,160,71,0.12)' : 'rgba(229,57,53,0.12)',
          padding: '3px 8px', borderRadius: '20px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
          {connected ? 'Conectado' : 'Desconectado'}
        </span>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{
            fontSize: '10px', fontWeight: 900, padding: '4px 10px', borderRadius: '8px',
            background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, letterSpacing: '0.03em',
          }}>
            {badge.text}
          </span>
        </div>
      </div>

      {/* ── Body: 3 columns ────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', gap: '12px', overflow: 'hidden', minHeight: 0 }}>

        {/* Left: mode buttons + sliders */}
        <div style={{ width: '185px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {/* 2×2 mode grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', flex: 1 }}>
            {MODES.map(mode => {
              const active = alarmState === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => callAlarm(mode.service)}
                  style={{
                    background: active ? `${mode.color}22` : 'rgba(255,255,255,0.05)',
                    border: `1.5px solid ${active ? mode.color : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '13px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    gap: '4px', padding: '9px 5px',
                    transition: 'all 0.2s cubic-bezier(0.175,0.885,0.32,1.275)',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {active && (
                    <span style={{
                      position: 'absolute', top: '5px', right: '5px',
                      width: '6px', height: '6px', borderRadius: '50%', background: mode.color,
                    }} />
                  )}
                  <span style={{ fontSize: '20px' }}>{mode.icon}</span>
                  <span style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '0.04em', color: active ? mode.color : 'rgba(255,255,255,0.7)' }}>
                    {mode.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Slide to Disarm — only visible when armed */}
          {isArmed && (
            <SlideButton
              label="Desliza para desarmar"
              icon="🔓"
              color="#43A047"
              onAction={doDisarm}
            />
          )}

          {/* Disarmed state button (static, no action) */}
          {isDisarmed && (
            <div style={{
              height: '50px', borderRadius: '25px', flexShrink: 0,
              background: 'rgba(67,160,71,0.12)',
              border: '1.5px solid rgba(67,160,71,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              <span style={{ fontSize: '16px' }}>🔓</span>
              <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.04em', color: '#43A047' }}>
                DESARMADO
              </span>
            </div>
          )}

          {/* Arming state */}
          {isArming && (
            <div style={{
              height: '50px', borderRadius: '25px', flexShrink: 0,
              background: 'rgba(245,176,65,0.12)',
              border: '1.5px solid rgba(245,176,65,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
              <span style={{ fontSize: '16px' }}>⏳</span>
              <span style={{ fontSize: '12px', fontWeight: 900, color: '#F5B041' }}>ARMANDO...</span>
            </div>
          )}

          {/* Slide to activate SOS */}
          <SlideButton
            label="Desliza para activar SOS"
            subLabel="Sirenas se dispararán"
            icon="🔴"
            color="#E53935"
            onAction={doSOS}
          />
        </div>

        {/* Center: shield */}
        <div style={{ width: '135px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldSVG alarmState={alarmState} />
        </div>

        {/* Right: sensors */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px', overflowY: 'auto', minWidth: 0 }}>
          {sensors.length === 0 ? (
            <div style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '8px', opacity: 0.35,
            }}>
              <span style={{ fontSize: '22px' }}>🔍</span>
              <span style={{ fontSize: '11px', fontWeight: 600, textAlign: 'center', lineHeight: 1.4 }}>
                No hay sensores configurados en Argus
              </span>
            </div>
          ) : (
            sensors.map((sensor: any) => (
              <SensorRow key={sensor.entity_id} entity={sensor} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
