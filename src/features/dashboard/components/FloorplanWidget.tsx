import React, { useEffect, useMemo, useState } from 'react';
import type { FloorplanData } from '..';

type Entity = { entity_id: string; name?: string; domain?: string; area?: string | null };
type Panel = { _ui?: { floorplan?: FloorplanData }; _available?: Entity[]; _hass?: { states?: Record<string, { state: string; attributes?: Record<string, unknown> }> }; _currentProfile?: { role?: string }; _dashboard?: { entry_id?: string; entries?: Array<{ entry_id?: string }> }; _send?: (type: string, payload: Record<string, unknown>) => Promise<any> };
type Marker = NonNullable<FloorplanData['markers']>[number];

export function markerCondition(entity: Entity, state?: string) {
  if (!state || state === 'unknown' || state === 'unavailable') return 'unavailable';
  const domain = entity.domain || entity.entity_id.split('.')[0];
  if (domain === 'lock') return state === 'locked' ? 'safe' : state === 'unlocked' ? 'active' : 'unavailable';
  if (domain === 'cover') return state === 'closed' ? 'safe' : state === 'open' ? 'active' : 'unavailable';
  return ['on', 'open', 'motion', 'occupied', 'detected', 'problem', 'tampered'].includes(state.toLowerCase()) ? 'active' : 'safe';
}

const blank: FloorplanData = { image_url: '', markers: [] };
export function FloorplanWidget({ panel }: { panel: Panel }) {
  const [draft, setDraft] = useState<FloorplanData>(() => structuredClone(panel._ui?.floorplan || blank));
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);
  const [entityId, setEntityId] = useState('');
  const [, setStateTick] = useState(0);
  const admin = panel._currentProfile?.role === 'admin';
  useEffect(() => { const timer = window.setInterval(() => setStateTick(value => value + 1), 5000); return () => window.clearInterval(timer); }, []);
  const available = useMemo(() => (panel._available || []).filter(entity => ['binary_sensor', 'lock', 'cover'].includes(entity.domain || entity.entity_id.split('.')[0])), [panel._available]);
  const states = panel._hass?.states || {};
  const update = (changes: Partial<FloorplanData>) => setDraft(current => ({ ...current, ...changes }));
  const addMarker = () => {
    const entity = available.find(item => item.entity_id === entityId);
    if (!entity || draft.markers.some(marker => marker.entity_id === entity.entity_id)) return;
    update({ markers: [...draft.markers, { entity_id: entity.entity_id, label: entity.name || entity.entity_id, x: 50, y: 50 }] }); setEntityId('');
  };
  const save = async () => {
    if (!panel._send) return;
    setSaving(true); setMessage('');
    try {
      const entry_id = panel._dashboard?.entry_id || panel._dashboard?.entries?.[0]?.entry_id;
      const result = await panel._send('argus/save_ui', { floorplan: draft, ...(entry_id ? { entry_id } : {}) });
      const savedFloorplan: FloorplanData = result.ui?.floorplan || draft;
      panel._ui = panel._ui || {}; panel._ui.floorplan = savedFloorplan; setDraft(structuredClone(savedFloorplan)); setMessage('Plano guardado.');
    } catch { setMessage('No se pudo guardar. Se requiere perfil administrador.'); }
    finally { setSaving(false); }
  };
  return <section className="argus-floorplan" aria-label="Plano interactivo de sensores">
    {admin && <div className="argus-floorplan__editor"><label>Imagen del plano<input type="url" value={draft.image_url} placeholder="/local/plano.png o https://…" onChange={event => update({ image_url: event.target.value })} /></label><div className="argus-floorplan__add"><select aria-label="Sensor para agregar" value={entityId} onChange={event => setEntityId(event.target.value)}><option value="">Seleccionar sensor…</option>{available.filter(entity => !draft.markers.some(m => m.entity_id === entity.entity_id)).map(entity => <option key={entity.entity_id} value={entity.entity_id}>{entity.name || entity.entity_id}{entity.area ? ` · ${entity.area}` : ''}</option>)}</select><button type="button" onClick={addMarker} disabled={!entityId}>Agregar</button><button type="button" onClick={() => void save()} disabled={saving}>{saving ? 'Guardando…' : 'Guardar'}</button></div></div>}
    {draft.image_url ? <div className="argus-floorplan__map"><img src={draft.image_url} alt="Plano de la vivienda" referrerPolicy="no-referrer" />{draft.markers.map(marker => {
      const entity = available.find(item => item.entity_id === marker.entity_id) || { entity_id: marker.entity_id, domain: marker.entity_id.split('.')[0] };
      const condition = markerCondition(entity, states[marker.entity_id]?.state);
      const name = marker.label || entity.name || marker.entity_id;
      return <div className={`argus-floorplan__pin argus-floorplan__pin--${condition}`} key={marker.entity_id} style={{ left: `${marker.x}%`, top: `${marker.y}%` }} title={`${name}: ${states[marker.entity_id]?.state || 'sin conexión'}`}><span aria-hidden="true">{condition === 'active' ? '!' : condition === 'safe' ? '✓' : '?'}</span><small>{name}</small>{admin && <button type="button" aria-label={`Quitar ${name}`} onClick={() => update({ markers: draft.markers.filter(item => item.entity_id !== marker.entity_id) })}>×</button>}</div>;
    })}</div> : <div className="argus-floorplan__empty"><span aria-hidden="true">⌂</span><strong>Configura el plano de tu vivienda</strong><p>Añade una imagen y coloca sensores para ver su estado en tiempo real.</p></div>}
    {admin && draft.markers.map(marker => <div className="argus-floorplan__position" key={`position-${marker.entity_id}`}><span>{marker.label || marker.entity_id}</span><label>X <input aria-label={`${marker.entity_id} posición horizontal`} type="range" min="0" max="100" value={marker.x} onChange={event => update({ markers: draft.markers.map(item => item.entity_id === marker.entity_id ? { ...item, x: Number(event.target.value) } : item) })} /></label><label>Y <input aria-label={`${marker.entity_id} posición vertical`} type="range" min="0" max="100" value={marker.y} onChange={event => update({ markers: draft.markers.map(item => item.entity_id === marker.entity_id ? { ...item, y: Number(event.target.value) } : item) })} /></label></div>)}
    {message && <p className="argus-floorplan__message" role="status">{message}</p>}
  </section>;
}
