import React from 'react';

interface SensorChipProps {
  id: string;
  name: string;
  isOpen: boolean;
  isBlocking: boolean;
  isUnavailable?: boolean;
  unavailableLabel?: string;
  isBypassed?: boolean;
  battery: number | null;
  iconHtml: string;
  statusLabelOpen: string;
  statusLabelClosed: string;
  bypassedLabel?: string;
  isLockLike?: boolean;
  delay?: number;
}

function PremiumLockIcon({ isOpen, isBypassed, label }: { isOpen: boolean; isBypassed?: boolean; label: string }) {
  return (
    <svg className={`argus-lock-icon ${isOpen ? 'is-open' : 'is-closed'} ${isBypassed ? 'is-bypassed' : ''}`} viewBox="0 0 48 48" role="img" aria-label={label}>
      <path className="argus-lock-shackle" d="M15 21v-7a9 9 0 0 1 18 0v7" />
      <rect className="argus-lock-body" x="8" y="19" width="32" height="25" rx="8" />
      <circle className="argus-lock-keyhole" cx="24" cy="31" r="3" />
      <path className="argus-lock-keyline" d="M24 34v5" />
    </svg>
  );
}

export function LiquidGlassClockIcon({ isInstant, size = 13 }: { isInstant?: boolean; size?: number }) {
  const color = isInstant ? '#38bdf8' : '#fbbf24';
  return (
    <svg className="liquid-glass-clock" viewBox="0 0 20 20" width={size} height={size} style={{ verticalAlign: 'middle', filter: `drop-shadow(0 0 4px ${color})`, flexShrink: 0 }}>
      <circle cx="10" cy="10" r="8" fill="rgba(255,255,255,0.08)" stroke={color} strokeWidth="1.4" />
      <path d="M5 6 A 7 7 0 0 1 15 6" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="0.8" strokeLinecap="round" />
      {isInstant ? (
        <path d="M11 4 L8 10 L11 10 L9 16 L14 9 L11 9 Z" fill={color} />
      ) : (
        <>
          <line x1="10" y1="10" x2="10" y2="5.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="10" y1="10" x2="13.5" y2="10" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="10" cy="10" r="1.2" fill={color} />
        </>
      )}
    </svg>
  );
}

export function SensorChip({ id, name, isOpen, isBlocking, isBypassed, isUnavailable, unavailableLabel, battery, delay, iconHtml, statusLabelOpen, statusLabelClosed, bypassedLabel, isLockLike }: SensorChipProps) {
  let batHtml = null;
  if (battery !== null) {
    const isDead = battery === 0;
    const isLow = battery <= 10 && !isDead;
    const batText = isDead ? '🔋 ❌' : `🔋 ${battery}%`;
    if (isDead || isLow) {
      batHtml = (
        <span className="console-battery-badge" style={{
          fontSize: '10px', fontWeight: 700, color: '#ff5252',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '2px 6px',
          borderRadius: '10px', border: '1px solid rgba(255,82,82,0.3)', textShadow: '0 0 5px rgba(255,82,82,0.5)',
          whiteSpace: 'nowrap',
        }}>
          {batText}
        </span>
      );
    }
  }

  let delayHtml = null;
  if (delay !== undefined) {
    const isInstant = delay === 0;
    delayHtml = (
      <span className="console-delay-badge" style={{
        display: 'inline-flex', alignItems: 'center', gap: '3px',
        fontSize: '9.5px', fontWeight: 800, color: isInstant ? '#38bdf8' : '#fbbf24',
        background: isInstant ? 'rgba(56,189,248,0.18)' : 'rgba(251,191,36,0.18)',
        border: `1px solid ${isInstant ? 'rgba(56,189,248,0.4)' : 'rgba(251,191,36,0.4)'}`,
        padding: '2px 6px', borderRadius: '8px',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        boxShadow: `0 0 8px ${isInstant ? 'rgba(56,189,248,0.25)' : 'rgba(251,191,36,0.25)'}`,
        whiteSpace: 'nowrap',
      }} title={isInstant ? 'Retardo: Instantáneo (0s)' : `Retardo: ${delay}s`}>
        <LiquidGlassClockIcon isInstant={isInstant} size={12} />
        <span>{isInstant ? '0s' : `${delay}s`}</span>
      </span>
    );
  }

  const iconColor = isUnavailable ? '#94a3b8' : isBypassed ? '#94a3b8' : (isBlocking ? '#fde047' : (isOpen ? '#f87171' : '#34d399'));
  const iconAnimation = isLockLike ? 'none' : (isBypassed ? 'none' : (isBlocking ? 'pulse 1s infinite' : (isOpen ? 'pulse 2s infinite' : 'none')));
  const stateColor = isUnavailable ? '#94a3b8' : isBypassed ? '#94a3b8' : (isBlocking ? '#fde047' : (isOpen ? '#f87171' : '#34d399'));
  const opacity = isBypassed ? 0.6 : 1;

  const stateText = isUnavailable ? (unavailableLabel || 'No disponible') : isOpen ? statusLabelOpen : statusLabelClosed;
  const labelText = isBypassed ? `${bypassedLabel || 'Omitido'} · ${stateText}` : stateText;
  const fullLabel = `${name}: ${labelText}${battery !== null ? ` (Batería: ${battery}%)` : ''}`;

  return (
    <div
      className={`console-sensor ${isUnavailable ? 'unavailable' : ''} ${isOpen && !isBypassed ? 'open' : ''}`}
      style={{ opacity }}
      title={fullLabel}
      aria-label={fullLabel}
      tabIndex={0}
      role="status"
    >
      <span
        className="console-sensor-icon"
        aria-hidden={isLockLike ? undefined : 'true'}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColor, animation: iconAnimation, flexShrink: 0 }}
      >
        {isUnavailable ? (
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ) : isLockLike ? (
          <PremiumLockIcon isOpen={isOpen} isBypassed={isBypassed} label={fullLabel} />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: iconHtml }} />
        )}
      </span>
      <div className="console-sensor-main">
        <span className="console-sensor-name" title={name} style={{ color: isBlocking && !isBypassed ? '#fde047' : '#ffffff' }}>{name}</span>
      </div>
      <div className="console-sensor-status-wrap">
        <span className="console-sensor-state" style={{ color: stateColor }}>
          {labelText}
        </span>
        {delayHtml}
        {batHtml}
      </div>
    </div>
  );
}
