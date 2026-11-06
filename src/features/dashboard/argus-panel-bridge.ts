import { useEffect, useState } from 'react';

/** Stable React-facing boundary for the Home Assistant panel host. */
export interface ArgusPanelBridge {
  panel: any;
  dashboard: any;
  hass: any;
  translate(key: string): string;
  getEntityState(entityId: string): any;
  isSensorActive(entity: any): boolean;
  modeButtonIcon(mode: string): string;
  handleAction(index: number, action: string): void;
  entries: any[];
  cardMode: boolean;
  selectedEntity?: string;
  selectedEntry?: string;
  fullscreen: boolean;
  fullscreenIndex: number;
  toggleFullscreen(index?: number): void;
  exitFullscreen(): void;
  requestKioskUnlock(): void;
}

export function useArgusPanelBridge(panel: any): ArgusPanelBridge {
  const [, refresh] = useState(0);
  useEffect(() => {
    const update = () => refresh(value => value + 1);
    panel?.addEventListener?.('argus-state-update', update);
    panel?.addEventListener?.('argus-fullscreen-changed', update);
    window.addEventListener('argus-lang-changed', update);
    return () => {
      panel?.removeEventListener?.('argus-state-update', update);
      panel?.removeEventListener?.('argus-fullscreen-changed', update);
      window.removeEventListener('argus-lang-changed', update);
    };
  }, [panel]);

  const cardMode = Boolean(panel?.hasAttribute?.('compact') || panel?.classList?.contains('argus-compact') || panel?._cardConfig?.compact);
  return {
    panel,
    dashboard: panel?._dashboard,
    // The panel projects an immediate click-time alarm state while the
    // websocket action is in flight, then replaces it with HA's confirmation.
    hass: panel?._getDisplayHass?.() || panel?._hass,
    translate: (key: string) => panel?._t?.(key) || key,
    getEntityState: (entityId: string) => panel?._getEntityState?.(entityId) || panel?._hass?.states?.[entityId],
    isSensorActive: (entity: any) => panel?.isSensorActive?.(entity) ??
      ['on', 'open', 'opening', 'unlocked', 'recording', 'active', 'motion',
        'abierto', 'activa', 'true', '1', 'detected', 'tamper', 'vibration', 'triggered'].includes(String(entity?.state ?? '').toLowerCase()),
    modeButtonIcon: (mode: string) => panel?._modeButtonIcon?.(mode) || '',
    handleAction: (index: number, action: string) => panel?._handleAction?.(index, action),
    entries: panel?._dashboard?.entries || [],
    cardMode,
    selectedEntity: panel?._cardConfig?.entity || panel?._config?.entity,
    selectedEntry: panel?._cardConfig?.entry_id || panel?._config?.entry_id,
    fullscreen: Boolean(panel?.classList?.contains('fullscreen-active') || document.fullscreenElement),
    fullscreenIndex: Number.isInteger(panel?._fullscreenIdx) ? panel._fullscreenIdx : -1,
    toggleFullscreen: (index = 0) => {
      const entry = panel?.shadowRoot?.querySelector?.(`.entry[data-entry-index="${index}"]`);
      if (typeof panel?._toggleFullscreen === 'function') panel._toggleFullscreen(entry);
      else panel?.classList?.add('fullscreen-active');
    },
    exitFullscreen: () => {
      if (typeof panel?._exitFullscreenView === 'function') panel._exitFullscreenView();
      else panel?.classList?.remove('fullscreen-active');
    },
    requestKioskUnlock: () => panel?._requestKioskUnlock?.(),
  };
}
