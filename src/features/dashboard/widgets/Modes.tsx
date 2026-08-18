import React, { useState } from 'react';

interface ModesProps {
  hass: any;
}

const MODES = [
  { id: 'disarmed',       label: 'Desarmado', icon: '🔓', color: '#43A047' },
  { id: 'armed_home',     label: 'En Casa',   icon: '🏠', color: '#1E88E5' },
  { id: 'armed_away',     label: 'Ausente',   icon: '🔴', color: '#E53935' },
  { id: 'armed_night',    label: 'Noche',     icon: '🌙', color: '#8E24AA' },
  { id: 'armed_vacation', label: 'Vacaciones',icon: '✈️', color: '#00897B' },
];

interface SectionPanelProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

function SectionPanel({ icon, title, children }: SectionPanelProps) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <span style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>{icon}</span> {title}
      </span>
      {children}
    </div>
  );
}

function EmptyList({ label }: { label: string }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px dashed rgba(255,255,255,0.15)',
        borderRadius: '10px',
        padding: '12px',
        textAlign: 'center',
        fontSize: '12px',
        color: 'rgba(255,255,255,0.4)',
        fontWeight: 600,
      }}
    >
      Ninguno seleccionado
    </div>
  );
}

function AddButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '100%',
        padding: '9px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '10px',
        color: 'rgba(255,255,255,0.75)',
        fontSize: '12px',
        fontWeight: 700,
        cursor: 'pointer',
        letterSpacing: '0.02em',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
    >
      {label}
    </button>
  );
}

function NumberInput({ label, defaultVal }: { label: string; defaultVal: number }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span style={{ fontSize: '11px', fontWeight: 700, opacity: 0.6 }}>{label}</span>
      <input
        type="number"
        defaultValue={defaultVal}
        style={{
          background: 'rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '8px',
          color: 'white',
          fontSize: '14px',
          fontWeight: 800,
          padding: '8px 10px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    </label>
  );
}

export function Modes({ hass }: ModesProps) {
  const [activeTab, setActiveTab] = useState('armed_home');

  const mode = MODES.find(m => m.id === activeTab) || MODES[1];

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
      {/* Header */}
      <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0 }}>
        📋 Modos
      </span>

      {/* Mode tabs */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          overflowX: 'auto',
          flexShrink: 0,
          paddingBottom: '2px',
        }}
      >
        {MODES.map(m => {
          const active = activeTab === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveTab(m.id)}
              style={{
                background: active ? `${m.color}22` : 'transparent',
                border: `1.5px solid ${active ? m.color : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '10px',
                color: active ? m.color : 'rgba(255,255,255,0.6)',
                fontSize: '11px',
                fontWeight: 800,
                padding: '6px 10px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
            >
              <span>{m.icon}</span>
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Config panels — 2-column grid */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          alignContent: 'start',
        }}
      >
        {/* Sensores de intrusión */}
        <SectionPanel icon="🔴" title="SENSORES DE INTRUSIÓN">
          <EmptyList label="sensores" />
          <AddButton label="+ Seleccionar" />
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
            <input type="checkbox" style={{ accentColor: mode.color }} />
            Bloquear si abiertos
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
            <input type="checkbox" style={{ accentColor: mode.color }} />
            Esperar armado en espera
          </label>
        </SectionPanel>

        {/* Omitir */}
        <SectionPanel icon="🚫" title="OMITIR">
          <EmptyList label="omitidos" />
          <AddButton label="+ Añadir" />
        </SectionPanel>

        {/* Sirenas */}
        <SectionPanel icon="📢" title="SIRENAS">
          <EmptyList label="sirenas" />
          <AddButton label="+ Seleccionar" />
        </SectionPanel>

        {/* Tiempos */}
        <SectionPanel icon="⏱" title="TIEMPOS">
          <NumberInput label="Armado (s)" defaultVal={0} />
          <NumberInput label="Retraso de entrada (s)" defaultVal={60} />
        </SectionPanel>

        {/* Paneles externos */}
        <SectionPanel icon="🔗" title="PANELES EXTERNOS">
          <EmptyList label="paneles" />
          <AddButton label="+ Seleccionar" />
          <AddButton label="+ Añadir" />
        </SectionPanel>

        {/* MQTT */}
        <SectionPanel icon="📡" title="MQTT">
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
            <span>Activar MQTT</span>
            <input type="checkbox" style={{ accentColor: mode.color, width: '16px', height: '16px' }} />
          </label>
        </SectionPanel>
      </div>
    </div>
  );
}
