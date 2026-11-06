import { expect, it, vi } from 'vitest';

vi.mock('react', async importOriginal => {
  const actual = await importOriginal<typeof import('react')>();
  return { ...actual, useState: (initial: unknown) => [initial, vi.fn()], useEffect: vi.fn() };
});
vi.mock('../argus-panel-bridge', () => ({ useArgusPanelBridge: (panel: any) => panel.bridge }));
import { SecurityConsoleRoot } from './SecurityConsoleRoot';

it('preserves the selected console identity and fullscreen target across entry/exit', () => {
  const toggle = vi.fn();
  const querySelector = vi.fn(() => 'selected-entry');
  const panel = {
    classList: { contains: () => false }, shadowRoot: { querySelector }, _toggleFullscreen: toggle,
    bridge: { entries: [{ entry_id: 'first' }, { entry_id: 'selected' }],
      selectedEntry: 'selected', cardMode: false, fullscreen: false, fullscreenIndex: -1 },
  };
  const normal = SecurityConsoleRoot({ panel }).props.children[0];
  normal.props.onToggleFullscreen();
  expect(querySelector).toHaveBeenCalledWith('.entry[data-entry-index="1"]');
  panel.bridge.fullscreen = true;
  panel.bridge.fullscreenIndex = 1;
  const fullscreen = SecurityConsoleRoot({ panel }).props.children[0];
  expect(fullscreen.key).toBe(normal.key);
  panel.bridge.fullscreen = false;
  expect(SecurityConsoleRoot({ panel }).props.children[0].key).toBe(normal.key);
});
