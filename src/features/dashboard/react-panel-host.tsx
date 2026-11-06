import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { SecurityConsoleRoot } from './components/SecurityConsoleRoot';

/** Owns the React root lifecycle while Home Assistant owns the custom element. */
export class ReactPanelHost {
  private root: Root | null = null;
  private container: HTMLElement | null = null;

  mount(panel: any): void {
    const container = panel?.shadowRoot?.getElementById('entries') as HTMLElement | null;
    if (!container) return;
    if (!this.root || this.container !== container) {
      this.root?.unmount();
      container.innerHTML = '';
      this.root = createRoot(container);
      this.container = container;
    }
    this.root.render(<SecurityConsoleRoot panel={panel} />);
  }

  unmount(): void {
    this.root?.unmount();
    this.root = null;
    this.container = null;
  }
}
