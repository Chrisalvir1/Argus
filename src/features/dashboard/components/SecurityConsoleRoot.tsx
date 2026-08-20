import React, { useEffect, useState } from 'react';
import { SecurityConsole } from './SecurityConsole';
import { createRoot, Root } from 'react-dom/client';

export function mountSecurityConsole(panel: any) {
  const shadow = panel.shadowRoot;
  if (!shadow) return;
  
  let reactContainer = shadow.getElementById('react-entries');
  const legacyContainer = shadow.getElementById('entries');
  
  if (legacyContainer) {
    legacyContainer.style.display = 'none';
  }
  
  if (!reactContainer) {
    reactContainer = document.createElement('div');
    reactContainer.id = 'react-entries';
    reactContainer.className = 'entries-container';
    if (legacyContainer) {
      legacyContainer.insertAdjacentElement('afterend', reactContainer);
    } else {
      shadow.appendChild(reactContainer);
    }
  }
  
  if (!panel._reactConsoleRoot) {
    panel._reactConsoleRoot = createRoot(reactContainer);
  }
  
  panel._reactConsoleRoot.render(
    <SecurityConsoleRoot panel={panel} />
  );
}

function SecurityConsoleRoot({ panel }: { panel: any }) {
  const [tick, setTick] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(panel.classList.contains('fullscreen-active'));

  useEffect(() => {
    const onUpdate = () => {
      setTick(t => t + 1);
      setIsFullscreen(panel.classList.contains('fullscreen-active'));
    };
    
    // Hook into the panel's internal render cycle to sync React state
    const originalRender = panel._renderEntries;
    panel._renderEntries = function(...args: any[]) {
      const res = originalRender?.apply(this, args);
      // Wait for legacy DOM to finish updating before triggering React
      requestAnimationFrame(() => onUpdate());
      return res;
    };
    
    return () => {
      panel._renderEntries = originalRender;
    };
  }, [panel]);

  return (
    <SecurityConsole 
      panel={panel} 
      isFullscreen={isFullscreen}
      onToggleFullscreen={() => panel._toggleFullscreen(panel.shadowRoot.querySelector('.entry'))}
      onUnlockKiosk={() => panel._requestKioskUnlock()}
    />
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
