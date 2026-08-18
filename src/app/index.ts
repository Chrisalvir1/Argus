import { createRoot, type Root } from 'react-dom/client';
import React from 'react';
import { ArgusApp } from '../features/dashboard/ArgusApp';
import gridCss from 'react-grid-layout/css/styles.css?inline';
import resizeCss from 'react-resizable/css/styles.css?inline';
import localCss from '../features/dashboard/style.css?inline';

class ArgusReactRoot extends HTMLElement {
  private root: Root | null = null;
  private _hass: any = null;
  private _config: any = null;
  private container: HTMLDivElement | null = null;

  set hass(value: any) {
    this._hass = value;
    this.render();
  }

  get hass() {
    return this._hass;
  }

  set panel(value: any) {
    this._config = value?.config || this._config;
    this.render();
  }

  setConfig(config: any) {
    this._config = config;
    this.render();
  }

  connectedCallback() {
    if (!this.container) {
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      this.style.minHeight = '100vh';
      this.style.backgroundColor = '#0b0f19';
      this.style.color = '#ffffff';

      // Inject styles into document head
      if (!document.getElementById('argus-global-styles')) {
        const style = document.createElement('style');
        style.id = 'argus-global-styles';
        style.textContent = `
          ${gridCss}
          ${resizeCss}
          ${localCss}
          body, html { margin: 0; padding: 0; background-color: #0b0f19 !important; }
        `;
        document.head.appendChild(style);
      }

      this.container = document.createElement('div');
      this.container.style.width = '100%';
      this.container.style.minHeight = '100vh';
      this.container.style.backgroundColor = '#0b0f19';
      this.appendChild(this.container);
      this.root = createRoot(this.container);
    }
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
      this.container = null;
    }
  }

  private render() {
    if (this.root) {
      this.root.render(
        React.createElement(ArgusApp, {
          hass: this._hass,
          config: this._config || {},
        })
      );
    }
  }
}

export function applyArgusFrontend(value?: CustomElementConstructor | undefined): void {
  const names = ['argus-panel-v2018', 'argus-panel', 'argus-card'];
  for (const name of names) {
    if (!customElements.get(name)) {
      customElements.define(name, class extends ArgusReactRoot {});
    }
  }
}
