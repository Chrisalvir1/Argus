import React, { useEffect, useState } from 'react';
import { SecurityConsole } from './SecurityConsole';
import { createRoot, Root } from 'react-dom/client';

export function mountSecurityConsole(panel: any) {
  const container = panel.shadowRoot?.getElementById('entries');
  if (!container) return;
  
  if (!panel._reactConsoleRoot) {
    panel._reactConsoleRoot = createRoot(container);
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
    
    // We hook into the panel's internal render cycle
    const originalRender = panel._renderEntries;
    panel._renderEntries = function(...args: any[]) {
      const res = originalRender?.apply(this, args);
      onUpdate();
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
