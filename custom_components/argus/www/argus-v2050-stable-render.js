/** Argus stable instance render — stops Parkinson rebuild loop without removing visuals. */
const KEY='__argusStableRenderV2050';
function updateClocks(panel){
  const root=panel.shadowRoot; if(!root) return;
  const now=new Date();
  const timeStr=now.toLocaleTimeString(panel._getLocale?.()||undefined,{hour:'2-digit',minute:'2-digit'});
  const dateStr=now.toLocaleDateString(panel._getLocale?.()||undefined,{weekday:'short',month:'short',day:'numeric'});
  const heroClock=root.getElementById('hero-clock-time');
  const heroDate=root.getElementById('hero-clock-date');
  if(heroClock&&heroClock.textContent!==timeStr) heroClock.textContent=timeStr;
  if(heroDate&&heroDate.textContent!==dateStr) heroDate.textContent=dateStr;
  root.querySelectorAll('.console-hud-time,.hud-data>span:first-child').forEach(n=>{if(n&&n.textContent!==timeStr)n.textContent=timeStr});
}
function signature(panel,entry,state,attrs,sensorKey,panicActive,isFS){
  return [entry?.entity_id||'',entry?.entry_id||'',state||'',panicActive?'1':'0',isFS?'1':'0',sensorKey||'',attrs?.arming_waiting_for_sensors?'1':'0',JSON.stringify(attrs?.arming_blocking_sensors||[]),JSON.stringify(attrs?.triggered_sensors||[]),panel._backgroundMode||'',panel._panelBgFile||'',panel._getWeatherEntity?.()?.state||'',panel._hass?.states?.['sun.sun']?.state||'',panel._getDisplayedTemperature?.()||'',panel._homeName||'',panel._kioskLocked?'1':'0'].join('|');
}
function installDelegation(panel,el){
  if(!el||el._argusDelegated) return;
  el._argusDelegated=true;
  el.addEventListener('click',ev=>{
    const t=ev.target;
    const unlock=t.closest?.('button[data-action="unlock-kiosk"]');
    if(unlock){panel._requestKioskUnlock?.();return}
    const sos=t.closest?.('button[data-action="sos"]');
    if(sos){panel._sosEntryIdx=Number(sos.dataset.idx);panel.shadowRoot?.getElementById('sos-modal')?.classList.add('open');return}
    const stop=t.closest?.('button[data-action="stop-sos"]');
    if(stop){panel._stopSOS?.(Number(stop.dataset.idx));return}
    const fs=t.closest?.('button[data-fullscreen]');
    if(fs){panel._toggleFullscreen?.(fs.closest('.entry'));return}
    const exit=t.closest?.('button[data-exit-fullscreen]');
    if(exit){panel._exitFullscreenView?.();return}
    const action=t.closest?.('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])');
    if(action?.dataset?.idx!=null&&action?.dataset?.action) panel._handleAction?.(action.dataset.idx,action.dataset.action);
  });
}
export function applyStableInstancesRender(ArgusPanel){
  if(!ArgusPanel||ArgusPanel[KEY]) return; ArgusPanel[KEY]=true;
  const proto=ArgusPanel.prototype;
  const renderEntries=proto._renderEntries;
  const desc=Object.getOwnPropertyDescriptor(proto,'hass')||Object.getOwnPropertyDescriptor(Object.getPrototypeOf(proto),'hass');
  // Stable clock: never full rebuild for time ticks.
  proto._updateLiveClocks=function(){updateClocks(this)};
  proto._startClock=function(){
    if(this._clockInterval) clearInterval(this._clockInterval);
    updateClocks(this);
    this._clockInterval=setInterval(()=>{if(this._dashboard) updateClocks(this)},1000);
  };
  // Signature-gated render: keep visuals, skip innerHTML when payload unchanged.
  proto._renderEntries=function(force=false){
    const root=this.shadowRoot; if(!root) return renderEntries?.call(this,force);
    const el=root.getElementById('entries');
    const entries=this._dashboard?.entries||[];
    this._instanceSignatures=this._instanceSignatures||new Map();
    if(!el||!entries.length){const r=renderEntries?.call(this,force); installDelegation(this,root.getElementById('entries')); updateClocks(this); return r}
    // If force or article count mismatch, fall through to original once.
    const arts=[...el.querySelectorAll('article.entry')];
    let needFull=force||arts.length!==entries.length||!arts.every(a=>a.querySelector('.entry-content'));
    if(!needFull){
      let allSame=true;
      for(let idx=0;idx<entries.length;idx++){
        const e=entries[idx];
        const live=this._hass?.states?.[e.entity_id];
        const state=live?.state||e.state||'unavailable';
        const attrs=live?.attributes||{};
        const panicActive=Boolean(attrs.argus_panic_active);
        const isFS=this._fullscreenIdx===idx||(this._kioskLocked&&(this._kioskEntryId===e.entry_id||entries.length===1));
        // Build sensor key from configured modes
        const mKey=String(state).replace('armed_','');
        let eCfg=(this._ui?.modes?.__by_entity__?.[e.entity_id]?.[mKey])||(this._ui?.modes?.[mKey])||{};
        let sList=eCfg.sensors||[];
        if(state==='disarmed'||!sList.length){
          const modes=this._ui?.modes?.__by_entity__?.[e.entity_id]||this._ui?.modes||{};
          const all=new Set(); ['away','home','night','vacation'].forEach(m=>{(modes[m]?.sensors||[]).forEach(s=>all.add(s))}); sList=[...all];
        }
        const sByps=eCfg.bypassed_sensors||[];
        const active=sList.filter(s=>!sByps.includes(s));
        const sensorKey=active.map(sid=>{const st=this._hass?.states?.[sid]; const bat=st?.attributes?.battery_level??st?.attributes?.battery_percentage??''; return `${sid}:${st?.state||''}:${bat}`}).join(',');
        const sig=signature(this,e,state,attrs,sensorKey,panicActive,isFS);
        if(this._instanceSignatures.get(idx)!==sig){allSame=false; break}
      }
      if(allSame){
        // Surgical: update clocks + global status only. Preserve DOM/animations.
        const allStates=entries.map(e=>this._hass?.states?.[e.entity_id]?.state||'unavailable');
        const isArmed=allStates.some(s=>String(s).startsWith('armed')||s==='triggered'||s==='pending');
        const globalStatusEl=root.getElementById('global-status');
        if(globalStatusEl){
          const t=k=>this._t?.(k)||k;
          const html=`<span class="badge ${isArmed?'armed_away':'disarmed'}">${isArmed?t('system_armed'):t('system_disarmed')}</span>`;
          if(globalStatusEl.innerHTML!==html) globalStatusEl.innerHTML=html;
        }
        const heroSecurity=root.getElementById('hero-security-pill');
        if(heroSecurity){
          const t=k=>this._t?.(k)||k;
          const label=isArmed?t('system_armed'):t('system_disarmed');
          const html=`<i class="hero-live" style="background:${isArmed?'#ffb54d':'#55df91'};box-shadow:0 0 9px ${isArmed?'#ffb54d':'#55df91'}"></i>${this._escapeHtml?.(label)||label}`;
          if(heroSecurity.innerHTML!==html) heroSecurity.innerHTML=html;
        }
        updateClocks(this);
        installDelegation(this,el);
        return;
      }
    }
    const result=renderEntries?.call(this, force===true?true:undefined);
    // Record signatures after real rebuild.
    const after=[...el.querySelectorAll('article.entry')];
    after.forEach((art,idx)=>{
      const e=entries[idx]; if(!e) return;
      const live=this._hass?.states?.[e.entity_id];
      const state=live?.state||e.state||'unavailable';
      const attrs=live?.attributes||{};
      const panicActive=Boolean(attrs.argus_panic_active);
      const isFS=this._fullscreenIdx===idx||(this._kioskLocked&&(this._kioskEntryId===e.entry_id||entries.length===1));
      const mKey=String(state).replace('armed_','');
      let eCfg=(this._ui?.modes?.__by_entity__?.[e.entity_id]?.[mKey])||(this._ui?.modes?.[mKey])||{};
      let sList=eCfg.sensors||[];
      if(state==='disarmed'||!sList.length){const modes=this._ui?.modes?.__by_entity__?.[e.entity_id]||this._ui?.modes||{}; const all=new Set(); ['away','home','night','vacation'].forEach(m=>{(modes[m]?.sensors||[]).forEach(s=>all.add(s))}); sList=[...all]}
      const sByps=eCfg.bypassed_sensors||[];
      const active=sList.filter(s=>!sByps.includes(s));
      const sensorKey=active.map(sid=>{const st=this._hass?.states?.[sid]; const bat=st?.attributes?.battery_level??st?.attributes?.battery_percentage??''; return `${sid}:${st?.state||''}:${bat}`}).join(',');
      this._instanceSignatures.set(idx, signature(this,e,state,attrs,sensorKey,panicActive,isFS));
      art.dataset.renderSig=this._instanceSignatures.get(idx);
    });
    installDelegation(this,el);
    updateClocks(this);
    return result;
  };
  // Narrow battery-driven redraws: wrap hass setter.
  const currentGet=desc?.get;
  const currentSet=desc?.set;
  if(currentSet){
    Object.defineProperty(proto,'hass',{
      configurable:true,
      enumerable:true,
      get:function(){return currentGet?currentGet.call(this):this._hass},
      set:function(hass){
        const oldHass=this._hass;
        // If only unrelated HA batteries changed, skip rebuild and only tick clocks.
        if(oldHass&&this._dashboard?.entries?.length){
          const configured=new Set();
          const collect=v=>{if(!v||typeof v!=='object')return; if(Array.isArray(v.sensors))v.sensors.forEach(id=>configured.add(id)); Object.values(v).forEach(c=>{if(c&&typeof c==='object')collect(c)})};
          collect(this._ui?.modes);
          const alarmChanged=this._dashboard.entries.some(e=>e.entity_id&&oldHass.states[e.entity_id]?.state!==hass.states[e.entity_id]?.state);
          const sensorChanged=[...configured].some(id=>oldHass.states[id]?.state!==hass.states[id]?.state||oldHass.states[id]?.attributes?.battery_level!==hass.states[id]?.attributes?.battery_level||oldHass.states[id]?.attributes?.battery_percentage!==hass.states[id]?.attributes?.battery_percentage);
          const tempEntity=this._temperatureSource==='auto'?null:this._temperatureSource;
          const tempChanged=tempEntity&&oldHass.states[tempEntity]?.state!==hass.states[tempEntity]?.state;
          const weatherEnt=(this._weatherSource&&this._weatherSource!=='auto')?this._weatherSource:Object.values(hass.states).find(s=>s.entity_id?.startsWith('weather.'))?.entity_id;
          const weatherChanged=weatherEnt&&(oldHass.states[weatherEnt]?.state!==hass.states[weatherEnt]?.state||oldHass.states[weatherEnt]?.attributes?.temperature!==hass.states[weatherEnt]?.attributes?.temperature);
          const relevant=alarmChanged||sensorChanged||tempChanged||weatherChanged;
          this._hass=hass;
          this._updateTheme?.();
          if(relevant){this._renderEntries?.(); this._renderActivityLog?.()}
          else {updateClocks(this)}
          return;
        }
        return currentSet.call(this,hass);
      }
    });
  }
  const connected=proto.connectedCallback;
  proto.connectedCallback=function(){const r=connected?.call(this); this._startClock?.(); return r};
}
