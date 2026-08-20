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

  const iconColor = isBypassed ? '#a1a1aa' : (isBlocking ? '#ffd700' : (isOpen ? '#ff968b' : '#75f4b0'));
  const iconAnimation = isBypassed ? 'none' : (isBlocking ? 'pulse 1s infinite' : (isOpen ? 'pulse 2s infinite' : 'none'));
  const stateColor = isBypassed ? '#a1a1aa' : (isBlocking ? '#ffd700' : (isOpen ? '#ff968b' : '#75f4b0'));
  const opacity = isBypassed ? 0.6 : 1;

  const stateText = isOpen ? statusLabelOpen : statusLabelClosed;
  const labelText = isBypassed ? `${bypassedLabel || 'OMITIDO'} · ${stateText}` : stateText;

  return (
    <div className={`console-sensor ${isOpen && !isBypassed ? 'open' : ''}`} style={{ opacity }}>
      <span className="console-sensor-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColor, animation: iconAnimation }} dangerouslySetInnerHTML={{ __html: iconHtml }} />
      <span className="console-sensor-name" style={{ color: isBlocking && !isBypassed ? '#ffd700' : '' }}>{name}</span>
      <span className="console-sensor-state" style={{ color: stateColor }}>
        {labelText}
        {batHtml}
      </span>
    </div>
  );
}
