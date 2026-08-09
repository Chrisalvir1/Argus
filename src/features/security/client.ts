import type{ArgusPanelConstructor,ArgusPanelHost}from'../../core/panel';

type SecurityEntry={entry_id?:string;pin_configured?:boolean};
type SecurityPanel=ArgusPanelHost&{
 _t?:(key:string)=>string;
 _syncAccessSummary?:()=>void;
};
type SecurityPrototype=SecurityPanel&{
 __argusSecurityClient?:boolean;
 _savePin?:()=>Promise<void>;
 _handleForgotPin?:()=>void;
};

const input=(root:ShadowRoot,id:string)=>root.getElementById(id)as HTMLInputElement|null;
const message=(panel:SecurityPanel,key:string,fallback:string)=>panel._t?.(key)??fallback;

export function applySecurityClient(C:ArgusPanelConstructor|undefined):void{
 const proto=C?.prototype as SecurityPrototype|undefined;
 if(!proto||proto.__argusSecurityClient)return;
 proto.__argusSecurityClient=true;
 proto._savePin=async function(this:SecurityPanel):Promise<void>{
  const status=this.shadowRoot.getElementById('pin-status');
  const dashboard=this._dashboard as{entries?:SecurityEntry[]}|undefined;
  const entry=dashboard?.entries?.[0];
  const current=input(this.shadowRoot,'current-pin')?.value??'';
  const first=input(this.shadowRoot,'new-pin-1')?.value??'';
  const second=input(this.shadowRoot,'new-pin-2')?.value??'';
  const fail=(text:string):void=>{if(status){status.textContent=text;status.className='status err'}};
  if(!entry?.entry_id)return fail('No Argus config entry is available');
  if(entry.pin_configured&&!current)return fail(message(this,'pin_incorrect','PIN incorrecto'));
  if(first!==second)return fail(message(this,'pin_mismatch','Los PIN no coinciden'));
  if(first&&!/^\d{4,12}$/.test(first))return fail('PIN: se requieren entre 4 y 12 dígitos');
  if(!this._send)return fail('Argus WebSocket is unavailable');
  try{
   await this._send('argus/update_master_pin',{entry_id:entry.entry_id,pin:first,current_pin:current});
   entry.pin_configured=Boolean(first);
   if(status){status.textContent=first?message(this,'pin_updated','PIN actualizado'):message(this,'pin_deleted','PIN eliminado');status.className='status ok'}
   for(const id of['current-pin','new-pin-1','new-pin-2']){const field=input(this.shadowRoot,id);if(field)field.value=''}
   this._syncAccessSummary?.();
   window.setTimeout(()=>{void this._load?.()},800);
  }catch(error){fail(error instanceof Error?error.message:String(error))}
 };
 proto._handleForgotPin=function(this:SecurityPanel):void{
  const text='Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.';
  const status=this.shadowRoot.getElementById('pin-status');
  if(status){status.textContent=text;status.className='status err'}else window.alert(text);
 };
}
