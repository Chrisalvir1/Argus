import React, { useEffect, useState } from 'react';
import { SecurityConsole } from './SecurityConsole';
import { installSlideActionStyles } from '../../safety/slide-action';
import { useArgusPanelBridge } from '../argus-panel-bridge';

import { ReactPanelHost } from '../react-panel-host';

const panelHosts = new WeakMap<object, ReactPanelHost>();

export function mountSecurityConsole(panel: any) {
  const shadow = panel.shadowRoot;
  if (!shadow) return;
  
  const container = shadow.getElementById('entries');
  if (!container) return;

  const isCardMode = panel.hasAttribute?.('compact') || panel.classList?.contains('argus-compact') || Boolean(panel._cardConfig?.compact);
  if (!isCardMode && !panel._profileSelectedThisMount && !panel._currentProfile && !panel._bootstrap?.has_active_session) {
    return;
  }
  
  let host = panelHosts.get(panel);
  if (!host) { host = new ReactPanelHost(); panelHosts.set(panel, host); }
  host.mount(panel);
}

if (typeof window !== 'undefined') {
  (window as any).mountSecurityConsole = mountSecurityConsole;
}

export function SecurityConsoleRoot({ panel }: { panel: any }) {
  const bridge = useArgusPanelBridge(panel);
  const [isFullscreen, setIsFullscreen] = useState(panel.classList.contains('fullscreen-active'));

  useEffect(() => {
    installSlideActionStyles(panel);
  }, [panel]);

  useEffect(() => {
    const onUpdate = () => {
      setIsFullscreen(panel.classList.contains('fullscreen-active'));
    };
    
    const onFsChange = () => {
      setIsFullscreen(panel.classList.contains('fullscreen-active') || Boolean(document.fullscreenElement));
    };

    panel.addEventListener('argus-state-update', onUpdate);
    window.addEventListener('argus-lang-changed', onUpdate);
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
      window.removeEventListener('argus-lang-changed', onUpdate);
      panel.removeEventListener('argus-fullscreen-changed', onFsChange);
      document.removeEventListener('fullscreenchange', onFsChange);
      document.removeEventListener('webkitfullscreenchange', onFsChange);
      panel._renderEntries = originalRender;
    };
  }, [panel]);

  const entries = bridge.entries;
  const cardMode = bridge.cardMode;
  const explicitlySelected = bridge.selectedEntity || bridge.selectedEntry;
  const renderAllEntries = !cardMode && !explicitlySelected && entries.length > 1;
  const indexes: Array<number | undefined> = bridge.fullscreen && bridge.fullscreenIndex >= 0 ? [bridge.fullscreenIndex] : renderAllEntries ? entries.map((_: unknown, index: number) => index) : [undefined];

  const selectedIndex = entries.findIndex((entry: any) => bridge.selectedEntity
    ? entry.entity_id === bridge.selectedEntity
    : entry.entry_id === (bridge.selectedEntry || panel._dashboard?.entry_id));
  const resolvedIndex = (index: number | undefined) => index ?? (selectedIndex >= 0 ? selectedIndex : 0);

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      {indexes.map(index => <SecurityConsole
        key={entries[resolvedIndex(index)]?.entry_id ?? entries[resolvedIndex(index)]?.entity_id ?? resolvedIndex(index)}
        panel={panel}
        entryIndex={index}
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => {
          if (isFullscreen) {
            if (typeof panel._exitFullscreenView === 'function') panel._exitFullscreenView();
            else { panel.classList.remove('fullscreen-active'); document.body.style.overflow = ''; setIsFullscreen(false); }
          } else {
            const entryEl = panel.shadowRoot?.querySelector(`.entry[data-entry-index="${resolvedIndex(index)}"]`);
            if (typeof panel._toggleFullscreen === 'function') panel._toggleFullscreen(entryEl);
            else { panel.classList.add('fullscreen-active'); document.body.style.overflow = 'hidden'; setIsFullscreen(true); }
          }
        }}
        onUnlockKiosk={() => panel._requestKioskUnlock()}
      />)}
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

  C.prototype._renderEntries = function() {
    mountSecurityConsole(this);
  };

  const disconnected = C.prototype.disconnectedCallback;
  C.prototype.disconnectedCallback = function() {
    panelHosts.get(this)?.unmount();
    panelHosts.delete(this);
    return disconnected?.call(this);
  };
}
