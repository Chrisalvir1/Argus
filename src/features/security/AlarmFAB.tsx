import React, { useState } from 'react';
import { Liquid } from 'liquid-gooey';

interface AlarmFABProps {
  state: 'disarmed' | 'armed_home' | 'armed_away' | 'triggered' | 'arming';
  onArmHome: () => void;
  onArmAway: () => void;
  onArmNight: () => void;
  onArmVacation: () => void;
  onDisarm: () => void;
  onSOS: () => void;
}

export function AlarmFAB({ state, onArmHome, onArmAway, onArmNight, onArmVacation, onDisarm, onSOS }: AlarmFABProps) {
  const [open, setOpen] = useState(false);

  // Get color based on state
  const getBlobColor = () => {
    switch (state) {
      case 'armed_home': return 'rgba(251, 191, 36, 0.9)'; // Amber
      case 'armed_away': return 'rgba(239, 68, 68, 0.9)'; // Red
      case 'triggered': return 'rgba(255, 0, 0, 0.95)'; // Strong Red
      case 'disarmed':
      default: return 'rgba(255, 255, 255, 0.15)'; // Glassmorphism white
    }
  };

  const getIcon = () => {
    if (state === 'triggered') return '🚨';
    if (state.startsWith('armed_')) return '🛡️';
    return '🛡️'; // Shield
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 10000, pointerEvents: 'auto' }}>
      <Liquid blur={6} contrast={18}>
        <div style={{ position: 'relative', width: '60px', height: '60px' }}>
          
          {/* Main FAB */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              position: 'absolute',
              width: '60px', height: '60px',
              borderRadius: '30px',
              border: state === 'disarmed' ? '1px solid rgba(255,255,255,0.3)' : 'none',
              background: getBlobColor(),
              backdropFilter: state === 'disarmed' ? 'blur(10px)' : 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10,
              transition: 'transform 0.2s',
              transform: open ? 'scale(0.9)' : 'scale(1)',
              animation: state === 'triggered' ? 'argus-pulse-red 1s infinite' : 'none'
            }}
          >
            {getIcon()}
          </button>

          {/* Sub-buttons */}
          <Liquid.Item
            transition={{ stiffness: 300, damping: 20 }}
            delay={0}
            style={{ position: 'absolute', bottom: '70px', right: '0' }}
          >
            <button onClick={() => { onDisarm(); setOpen(false); }} className="argus-gooey-sub-btn" style={{ background: 'rgba(255,255,255,0.2)' }}>
              Off
            </button>
          </Liquid.Item>

          <Liquid.Item
            transition={{ stiffness: 300, damping: 20 }}
            delay={40}
            style={{ position: 'absolute', bottom: '130px', right: '0' }}
          >
            <button onClick={() => { onArmHome(); setOpen(false); }} className="argus-gooey-sub-btn" style={{ background: 'rgba(251,191,36,0.8)' }}>
              Casa
            </button>
          </Liquid.Item>

          <Liquid.Item
            transition={{ stiffness: 300, damping: 20 }}
            delay={80}
            style={{ position: 'absolute', bottom: '190px', right: '0' }}
          >
            <button onClick={() => { onArmAway(); setOpen(false); }} className="argus-gooey-sub-btn" style={{ background: 'rgba(239,68,68,0.8)' }}>
              Afuera
            </button>
          </Liquid.Item>
          
          <Liquid.Item
            transition={{ stiffness: 300, damping: 20 }}
            delay={120}
            style={{ position: 'absolute', bottom: '70px', right: '60px' }}
          >
            <button onClick={() => { onSOS(); setOpen(false); }} className="argus-gooey-sub-btn" style={{ background: 'rgba(255,59,48,0.9)' }}>
              SOS
            </button>
          </Liquid.Item>

        </div>
      </Liquid>
    </div>
  );
}
