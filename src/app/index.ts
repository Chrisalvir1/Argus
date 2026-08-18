import { createRoot } from 'react-dom/client';
import React from 'react';
import { ArgusApp } from '../features/dashboard/ArgusApp';

// Eliminamos todo el código legacy e iniciamos la pizarra en blanco pura de React.

class ArgusReactRoot extends HTMLElement {
  private root: any = null;
  private _hass: any = null;
  private _config: any = null;

  set hass(value: any) {
    this._hass = value;
    this.render();
  }

  setConfig(config: any) {
    this._config = config;
    this.render();
  }

  connectedCallback() {
    if (!this.root) {
      this.root = createRoot(this);
    }
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  private render() {
    if (this.root) {
      this.root.render(
        React.createElement(ArgusApp, {
          hass: this._hass,
          config: this._config,
        })
      );
    }
  }
}

export function applyArgusFrontend(value?: CustomElementConstructor | undefined): void {
  // Registrar el nuevo elemento raíz si no existe
  if (!customElements.get('argus-panel')) {
    customElements.define('argus-panel', ArgusReactRoot);
  }
}
