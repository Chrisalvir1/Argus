import React, { useEffect, useState, useRef } from 'react';
import { SecurityConsole } from './SecurityConsole';
import { createRoot, Root } from 'react-dom/client';
import { applyToAllEntries } from '../../safety/slide-action';

export function mountSecurityConsole(panel: any) {
  const shadow = panel.shadowRoot;
  if (!shadow) return;
  
  const container = shadow.getElementById('entries');
  if (!container) return;
  
  if (!panel._reactConsoleRoot) {
    // Delete the old HTML to follow the user's explicit instruction
    container.innerHTML = '';
    // Take over the container completely
    panel._reactConsoleRoot = createRoot(container);
  }
  
  panel._reactConsoleRoot.render(
    <SecurityConsoleRoot panel={panel} />
  );
}

function SecurityConsoleRoot({ panel }: { panel: any }) {
  const [tick, setTick] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(panel.classList.contains('fullscreen-active'));
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onUpdate = () => {
      setTick(t => t + 1);
      setIsFullscreen(panel.classList.contains('fullscreen-active'));
    };
    
    // Completely hijack the render cycle. We do NOT call originalRender.
    // This entirely eliminates the legacy DOM rendering for the HUD.
    const originalRender = panel._renderEntries;
    panel._renderEntries = function(...args: any[]) {
      onUpdate();
      return;
    };
    
    return () => {
      panel._renderEntries = originalRender;
    };
  }, [panel]);

  // Handle side-effects (WebGL + SOS Slider) after React renders
  useEffect(() => {
    if (!rootRef.current) return;
    
    // 1. Initialize WebGL Weather Canvases
    const canvases = rootRef.current.querySelectorAll('.wx-webgl');
    canvases.forEach((canvas: any) => {
      if (!canvas._argusWebglInit) {
        canvas._argusWebglInit = true;
        panel._initWeatherWebGL?.(canvas);
      }
    });

    // 2. Re-apply the slide-to-action sliders to the new React DOM
    setTimeout(() => {
      try {
        if (typeof applyToAllEntries === 'function') {
           applyToAllEntries(panel);
        }
      } catch (e) {
        console.error("Argus: Failed to attach SOS sliders", e);
      }
    }, 50);

  }, [tick, panel]);

  return (
    <div ref={rootRef} style={{ width: '100%', height: '100%' }}>
      <SecurityConsole 
        panel={panel} 
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => panel._toggleFullscreen(panel.shadowRoot.querySelector('.entry'))}
        onUnlockKiosk={() => panel._requestKioskUnlock()}
      />
    </div>
  );
}

export function applyReactSecurityConsole(C: any) {
  if (!C || C.__argusReactSecurityConsole) return;
  C.__argusReactSecurityConsole = true;
  
  const connected = C.prototype.connectedCallback;
  const load = C.prototype._load;
  
  C.prototype.connectedCallback = function() {
    const res = connected?.call(this);
    mountSecurityConsole(this);
    return res;
  };
  
  C.prototype._load = async function(...args: any[]) {
    const res = await load?.apply(this, args);
    mountSecurityConsole(this);
    return res;
  };
}
