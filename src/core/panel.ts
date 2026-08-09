import type {Root} from 'react-dom/client';
import type {HomeAssistant} from './home-assistant';
import type {ArgusCommand,ArgusRequestMap,ArgusResponse} from './websocket';

export interface ArgusPanelHost extends HTMLElement{
 readonly shadowRoot:ShadowRoot;
 _hass?:HomeAssistant;
 _currentProfile?:{id?:string};
 _dashboard?:{entry_id?:string;entries?:Array<{entry_id?:string}>};
 _ui?:{dashboard?:Record<string,unknown>};
 _widgetEditing?:boolean;
 _argusReactRoot?:Root;
 _argusReactSetEditing?:(value:boolean)=>void;
 _send?<K extends ArgusCommand>(type:K,payload:ArgusRequestMap[K]):Promise<ArgusResponse<K>>;
 _load?():Promise<unknown>;
}

export type ArgusPanelConstructor=CustomElementConstructor&{
 prototype:ArgusPanelHost&Record<string,unknown>;
 __argusReactDashboard?:boolean;
};
