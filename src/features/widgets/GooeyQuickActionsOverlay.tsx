import React, { useEffect, useState, useRef } from 'react';
import { Liquid } from 'liquid-gooey';

interface ActiveSensor {
  entityId: string;
  rect: DOMRect;
  element: HTMLElement;
}

export function GooeyQuickActionsOverlay() {
  const [active, setActive] = useState<ActiveSensor | null>(null);
  const hoverTimer = useRef<number | null>(null);

  useEffect(() => {
    // The panel's shadowRoot is where events happen
    const root = document.querySelector('argus-panel')?.shadowRoot || document;

    const handlePointerEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const sensor = target.closest('.console-sensor') as HTMLElement;
      if (!sensor) return;

      const entityId = sensor.dataset.entityId || '';
      const domain = entityId.split('.')[0];
      
      // Only light and switch as requested
      if (domain !== 'light' && domain !== 'switch') return;

      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      
      hoverTimer.current = window.setTimeout(() => {
        const rect = sensor.getBoundingClientRect();
        setActive({ entityId, rect, element: sensor });
      }, 400); // 400ms long press / hover
    };

    const handlePointerLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      // If we are moving into the gooey menu, don't close
      if (target.closest('.argus-gooey-quick-menu')) return;
      
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      // Wait a bit before closing to allow mouse to move to the menu
      hoverTimer.current = window.setTimeout(() => setActive(null), 300);
    };

    const handleContextMenu = (e: Event) => {
      const target = e.target as HTMLElement;
      const sensor = target.closest('.console-sensor') as HTMLElement;
      if (!sensor) return;
      
      const entityId = sensor.dataset.entityId || '';
      const domain = entityId.split('.')[0];
      if (domain !== 'light' && domain !== 'switch') return;
      
      e.preventDefault();
      const rect = sensor.getBoundingClientRect();
      setActive({ entityId, rect, element: sensor });
    };

    // Use event delegation on the root
    root.addEventListener('pointerover', handlePointerEnter, true);
    root.addEventListener('pointerout', handlePointerLeave, true);
    root.addEventListener('contextmenu', handleContextMenu, true);

    return () => {
      root.removeEventListener('pointerover', handlePointerEnter, true);
      root.removeEventListener('pointerout', handlePointerLeave, true);
      root.removeEventListener('contextmenu', handleContextMenu, true);
    };
  }, []);

  const sendAction = (service: string) => {
    if (!active) return;
    const argus = document.querySelector('argus-panel') as any;
    if (argus && argus._send) {
      const domain = active.entityId.split('.')[0];
      argus._send('argus/call_service', {
        domain,
        service,
        service_data: { entity_id: active.entityId }
      });
    }
    setActive(null);
  };

  if (!active) return null;

  const btnStyle = {
    width: '44px', height: '44px', borderRadius: '22px',
    background: 'rgba(255,255,255,0.9)',
    border: 'none', color: '#000',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    fontWeight: 'bold', fontSize: '11px',
    pointerEvents: 'auto' as any
  };

  const cx = active.rect.left + active.rect.width / 2;
  const cy = active.rect.top + active.rect.height / 2;

  const isLight = active.entityId.startsWith('light.');

  return (
    <div
      className="argus-gooey-quick-menu"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: 'none', zIndex: 10000,
      }}
      onPointerOver={() => { if (hoverTimer.current) clearTimeout(hoverTimer.current); }}
      onPointerOut={(e) => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        hoverTimer.current = window.setTimeout(() => setActive(null), 300);
      }}
    >
      <Liquid blur={5} contrast={16}>
        <div style={{ position: 'absolute', left: cx, top: cy, width: 0, height: 0 }}>
          
          <Liquid.Item transition={{ stiffness: 300, damping: 20 }} delay={0} style={{ position: 'absolute', left: '-22px', top: '-70px' }}>
            <button onClick={(e) => { e.stopPropagation(); sendAction('turn_on'); }} style={btnStyle}>ON</button>
          </Liquid.Item>
          
          <Liquid.Item transition={{ stiffness: 300, damping: 20 }} delay={40} style={{ position: 'absolute', left: '-70px', top: '-10px' }}>
            <button onClick={(e) => { e.stopPropagation(); sendAction('turn_off'); }} style={btnStyle}>OFF</button>
          </Liquid.Item>

          {isLight && (
            <Liquid.Item transition={{ stiffness: 300, damping: 20 }} delay={80} style={{ position: 'absolute', left: '26px', top: '-10px' }}>
              <button onClick={(e) => { e.stopPropagation(); sendAction('toggle'); }} style={btnStyle}>DIM</button>
            </Liquid.Item>
          )}

        </div>
      </Liquid>
    </div>
  );
}
