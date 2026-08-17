// @ts-nocheck
/** Persist SOS outputs as soon as the selector is accepted.
 *
 * The old UI only kept this selection in memory until the unrelated
 * Personalization save button was pressed.  That made SOS output selection
 * look broken, and a later legacy wrapper preserved that behavior.
 */
const OUTPUT_DOMAINS=new Set(['alarm_control_panel','fan','input_boolean','light','script','siren','switch']);
const isOutput=value=>typeof value==='string'&&value.split('.').length===2&&OUTPUT_DOMAINS.has(value.split('.',1)[0]);

export function applySosOutputPersistence(C){
 if(!C||C.__argusSosOutputPersistence)return;C.__argusSosOutputPersistence=true;
 const p=C.prototype,previous=p._acceptSelection;
 p._acceptSelection=async function(){
  if(this._selectorTarget!=='panic')return previous?.call(this);
  const before=Array.isArray(this._panicOutputs)?[...this._panicOutputs]:[];
  const beforeSettings={...(this._panicOutputSettings||{})};
  const outputs=[...new Set((this._selected||[]).filter(isOutput))];
  const settings={...(this._panicOutputSettings||{})};
  Object.keys(settings).forEach(id=>{if(!outputs.includes(id))delete settings[id]});
  outputs.forEach(id=>{settings[id]??={flash_mode:'none'}});
  this._panicOutputs=outputs;this._panicOutputSettings=settings;
  this._renderSosOutputs?.();this._closeModal?.();
  const entry_id=this._dashboard?.entry_id||this._dashboard?.entries?.[0]?.entry_id;
  try{
   const saved=await this._send('argus/save_panic_output_profile',{...(entry_id?{entry_id}:{}),outputs,settings});
   this._panicOutputs=Array.isArray(saved?.outputs)?saved.outputs:outputs;
   this._panicOutputSettings=saved?.settings&&typeof saved.settings==='object'?saved.settings:settings;
   this._ui=this._ui||{};this._ui.panic_outputs=this._panicOutputs;this._ui.panic_output_settings=this._panicOutputSettings;
   this._renderSosOutputs?.();
  }catch(error){
   this._panicOutputs=before;this._panicOutputSettings=beforeSettings;this._renderSosOutputs?.();
   alert(`No se pudieron guardar las acciones SOS: ${error?.message||error}`);
  }
 };
}
