import {createElement} from 'react';
import {createRoot,type Root} from 'react-dom/client';
import {ArgusApp} from './ArgusApp';
import {I18nProvider} from './i18n';
import type {HomeAssistant} from '../core/home-assistant';

class ArgusReactPanel extends HTMLElement{
 private root?:Root;
 private value?:HomeAssistant;
 set hass(value:HomeAssistant){this.value=value;this.render()}
 get hass(){return this.value}
 connectedCallback(){this.render()}
 disconnectedCallback(){this.root?.unmount();this.root=undefined}
 private render(){if(!this.isConnected||!this.value)return;const mount=this.shadowRoot||this.attachShadow({mode:'open'});this.root??=createRoot(mount);this.root.render(createElement(I18nProvider,{hass:this.value},createElement(ArgusApp,{hass:this.value})))}
}

export function applyArgusFrontend():void{
 if(!customElements.get('argus-panel-v2018'))customElements.define('argus-panel-v2018',ArgusReactPanel);
}
