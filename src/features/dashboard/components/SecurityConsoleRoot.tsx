import React, { useEffect, useState, useRef } from 'react';
import { SecurityConsole } from './SecurityConsole';
import { createRoot } from 'react-dom/client';
import { applyToAllEntries } from '../../safety/slide-action';

export function mountSecurityConsole(panel: any) {
  const shadow = panel.shadowRoot;
  if (!shadow) return;
  
  const container = shadow.getElementById('entries');
  if (!container) return;
  
  if (!panel._reactConsoleRoot) {
    container.innerHTML = '';
    panel._reactConsoleRoot = createRoot(container);
  }
  
  panel._reactConsoleRoot.render(
    <SecurityConsoleRoot panel={panel} />
  );
}

if (typeof window !== 'undefined') {
  (window as any).mountSecurityConsole = mountSecurityConsole;
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
    
    const onFsChange = () => {
      setIsFullscreen(panel.classList.contains('fullscreen-active') || Boolean(document.fullscreenElement));
    };

    panel.addEventListener('argus-state-update', onUpdate);
    panel.addEventListener('argus-fullscreen-changed', onFsChange);
    document.addEventListener('fullscreenchange', onFsChange);
    document.addEventListener('webkitfullscreenchange', onFsChange);

    const originalRender = panel._renderEntries;
    panel._renderEntries = function(...args: any[]) {
      onUpdate();
      return;
    };
    
    return () => {
      panel.removeEventListener('argus-state-update', onUpdate);
      panel.removeEventListener('argus-fullscreen-changed', onFsChange);
      document.removeEventListener('fullscreenchange', onFsChange);
      document.removeEventListener('webkitfullscreenchange', onFsChange);
      panel._renderEntries = originalRender;
    };
  }, [panel]);

  // Re-apply slide-to-action sliders whenever React renders or fullscreen changes
  useEffect(() => {
    if (!rootRef.current) return;
    
    const timer = setTimeout(() => {
      try {
        if (typeof applyToAllEntries === 'function') {
          applyToAllEntries(panel);
        }
      } catch (e) {
        console.error("Argus: Failed to attach SOS sliders", e);
      }
    }, 40);

    return () => clearTimeout(timer);
  }, [tick, isFullscreen, panel]);

  return (
    <div ref={rootRef} style={{ width: '100%', height: '100%' }}>
      <SecurityConsole 
        panel={panel} 
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => {
          if (isFullscreen) {
            if (typeof panel._exitFullscreenView === 'function') {
              panel._exitFullscreenView();
            } else {
              panel.classList.remove('fullscreen-active');
              document.body.style.overflow = '';
              setIsFullscreen(false);
            }
          } else {
            const entryEl = panel.shadowRoot?.querySelector('.entry');
            if (typeof panel._toggleFullscreen === 'function') {
              panel._toggleFullscreen(entryEl);
            } else {
              panel.classList.add('fullscreen-active');
              document.body.style.overflow = 'hidden';
              setIsFullscreen(true);
            }
          }
        }}
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
  const renderEntries = C.prototype._renderEntries;
  
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

  C.prototype._renderEntries = function() {
    mountSecurityConsole(this);
  };
}
