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

export function SensorChip({ id, name, isOpen, isBlocking, isBypassed, isUnavailable, unavailableLabel, battery, delay, iconHtml, statusLabelOpen, statusLabelClosed, bypassedLabel, isLockLike }: SensorChipProps) {
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

  let delayHtml = null;
  if (delay !== undefined) {
    const isInstant = delay === 0;
    delayHtml = (
      <span style={{
        marginLeft: '6px', fontSize: '9px', fontWeight: 700, color: isInstant ? '#38bdf8' : '#fbbf24',
        background: 'rgba(255,255,255,0.08)', padding: '2px 5px', borderRadius: '6px',
      }}>
        {isInstant ? '⚡ 0s' : `⏱️ ${delay}s`}
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
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColor, animation: iconAnimation }}
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
      <span className="console-sensor-name" title={name} style={{ color: isBlocking && !isBypassed ? '#fde047' : '#ffffff' }}>{name}</span>
      <span className="console-sensor-state" style={{ color: stateColor }}>
        {labelText}
        {delayHtml}
        {batHtml}
      </span>
    </div>
  );
}
