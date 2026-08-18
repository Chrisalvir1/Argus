import React, { useState } from 'react';

interface SOSWidgetProps {
  hass: any;
}

export function SOSWidget({ hass }: SOSWidgetProps) {
  const [stage, setStage] = useState<'idle' | 'confirm' | 'activated'>('idle');

  const entities = hass?.states || {};
  const alarmPanel: any = Object.values(entities).find(
    (e: any) => e.entity_id?.startsWith('alarm_control_panel.argus')
  );

  const handleClick = () => {
    if (stage === 'idle') {
      setStage('confirm');
      setTimeout(() => setStage('idle'), 4000);
    } else if (stage === 'confirm') {
      if (hass && alarmPanel) {
        hass.callService('alarm_control_panel', 'alarm_trigger', {
          entity_id: alarmPanel.entity_id,
        });
      }
      setStage('activated');
      setTimeout(() => setStage('idle'), 5000);
    }
  };

  const btnStyle: React.CSSProperties =
    stage === 'activated'
      ? {
          background: 'linear-gradient(135deg, #B71C1C 0%, #E53935 100%)',
          border: '1px solid rgba(229,57,53,0.8)',
          boxShadow: '0 0 32px rgba(229,57,53,0.55)',
          color: '#fff',
        }
      : stage === 'confirm'
      ? {
          background: 'linear-gradient(135deg, #D32F2F 0%, #F44336 100%)',
          border: '1px solid rgba(244,67,54,0.9)',
          boxShadow: '0 0 24px rgba(244,67,54,0.5)',
          color: '#fff',
          animation: 'argus-sos-pulse 0.6s infinite alternate',
        }
      : {
          background: 'rgba(10,8,18,0.8)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          color: 'rgba(255,255,255,0.85)',
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
      {/* Header */}
      <span
        style={{
          fontSize: '13px',
          fontWeight: 900,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          flexShrink: 0,
        }}
      >
        ⚡ Acciones SOS
      </span>

      {/* Main SOS button — matches v2.2.13 dark slider style */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
        <button
          type="button"
          onClick={handleClick}
          style={{
            ...btnStyle,
            borderRadius: '18px',
            width: '100%',
            padding: '20px 16px',
            fontSize: '15px',
            fontWeight: 900,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)',
          }}
          onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <span style={{ fontSize: '22px' }}>
            {stage === 'activated' ? '🚨' : stage === 'confirm' ? '⚠️' : '🔴'}
          </span>
          <span>
            {stage === 'activated'
              ? '¡SOS ACTIVADO!'
              : stage === 'confirm'
              ? '¡CONFIRMAR SOS PÁNICO!'
              : 'SOS / PÁNICO'}
          </span>
        </button>

        {stage === 'confirm' && (
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 700,
              color: '#EF5350',
              opacity: 0.9,
              letterSpacing: '0.02em',
            }}
          >
            Toca de nuevo para confirmar. Se cancela solo en 4 seg.
          </p>
        )}

        {stage === 'idle' && (
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 600,
              opacity: 0.45,
              lineHeight: 1.4,
            }}
          >
            Activa el pánico. Las sirenas y alarmas se disparan de inmediato.
          </p>
        )}
      </div>

      {/* Keyframe for pulse animation */}
      <style>{`
        @keyframes argus-sos-pulse {
          from { box-shadow: 0 0 20px rgba(244,67,54,0.4); }
          to   { box-shadow: 0 0 40px rgba(244,67,54,0.85); }
        }
      `}</style>
    </div>
  );
}
