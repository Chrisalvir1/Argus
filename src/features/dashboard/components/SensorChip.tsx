import React from 'react';

interface SensorChipProps {
  id: string;
  name: string;
  isOpen: boolean;
  isBlocking: boolean;
  isBypassed?: boolean;
  battery: number | null;
  iconHtml: string;
  statusLabelOpen: string;
  statusLabelClosed: string;
  bypassedLabel?: string;
}

export function SensorChip({ id, name, isOpen, isBlocking, isBypassed, battery, iconHtml, statusLabelOpen, statusLabelClosed, bypassedLabel }: SensorChipProps) {
  let batHtml = null;
  if (battery !== null) {
    const isDead = battery === 0;
    const isLow = battery <= 10 && !isDead;
    const batText = isDead ? '🔋 ❌' : `🔋 ${battery}%`;
    if (isDead || isLow) {
      batHtml = (
        <span style={{
          marginLeft: '8px', fontSize: '10px', fontWeight: 700, color: '#ff5252',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '2px 6px',
          borderRadius: '10px', border: '1px solid rgba(255,82,82,0.3)', textShadow: '0 0 5px rgba(255,82,82,0.5)'
        }}>
          {batText}
        </span>
      );
    }
  }

  const iconColor = isBypassed ? '#94a3b8' : (isBlocking ? '#fde047' : (isOpen ? '#f87171' : '#34d399'));
  const iconAnimation = isBypassed ? 'none' : (isBlocking ? 'pulse 1s infinite' : (isOpen ? 'pulse 2s infinite' : 'none'));
  const stateColor = isBypassed ? '#94a3b8' : (isBlocking ? '#fde047' : (isOpen ? '#f87171' : '#34d399'));
  const opacity = isBypassed ? 0.6 : 1;

  const stateText = isOpen ? statusLabelOpen : statusLabelClosed;
  const labelText = isBypassed ? `${bypassedLabel || 'Omitido'} · ${stateText}` : stateText;
  const fullLabel = `${name}: ${labelText}${battery !== null ? ` (Batería: ${battery}%)` : ''}`;

  return (
    <div
      className={`console-sensor ${isOpen && !isBypassed ? 'open' : ''}`}
      style={{ opacity }}
      title={fullLabel}
      aria-label={fullLabel}
      tabIndex={0}
      role="status"
    >
      <span
        className="console-sensor-icon"
        aria-hidden="true"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColor, animation: iconAnimation }}
        dangerouslySetInnerHTML={{ __html: iconHtml }}
      />
      <span className="console-sensor-name" title={name} style={{ color: isBlocking && !isBypassed ? '#fde047' : '#ffffff' }}>{name}</span>
      <span className="console-sensor-state" style={{ color: stateColor }}>
        {labelText}
        {batHtml}
      </span>
    </div>
  );
}
