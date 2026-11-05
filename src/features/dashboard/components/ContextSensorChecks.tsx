import React, { useEffect, useRef, useState } from 'react';

type Mode = 'guided' | 'free';
type Session = {
  entry_id: string;
  zone_id?: string;
  mode: Mode;
  active: boolean;
  current_sensor?: string;
  step_phase?: 'activate' | 'close' | 'verified' | 'complete';
  all_sensors: string[];
  tested_sensors: Record<string, unknown>;
  tested_count: number;
  total_sensors: number;
  skipped_sensors: string[];
  reason?: string;
};
type Diagnosis = {
  entity_id: string;
  category: 'correct' | 'attention' | 'unverifiable' | 'informational';
  state: string | null;
  battery: number | null;
  physical_test_kind: string | null;
};

function errorMessage(error: unknown) {
  if (error && typeof error === 'object' && 'message' in error) return String(error.message);
  return String(error);
}

const diagnosisLabels = {
  correct: 'Correcto', attention: 'Requiere atención',
  unverifiable: 'No verificable', informational: 'Informativo',
};

export function ContextSensorChecks({ panel, entryId, zones, zone, online, canStart, visible, diagnostic, choose }: {
  panel: any;
  entryId: string;
  zones: { id: string; area?: string; number?: number; entity_ids?: string[] }[];
  zone?: { id: string; area?: string; number?: number; entity_ids?: string[] };
  online: boolean;
  canStart: boolean;
  visible: boolean;
  diagnostic: boolean;
  choose: boolean;
}) {
  const [mode, setMode] = useState<Mode | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [rows, setRows] = useState<Diagnosis[] | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const request = useRef(false);
  const revision = useRef(0);
  const connection = panel._hass?.connection;
  const admin = Boolean(panel._isAdmin);

  useEffect(() => {
    setSubscribed(false);
    if (!online || !admin || !connection || !entryId) return;
    let active = true;
    let unsubscribe: (() => void) | undefined;
    Promise.resolve(connection.subscribeMessage((event: Session) => {
      if (active && event.entry_id === entryId) {
        revision.current++;
        setSession(event);
      }
    }, { type: 'argus/subscribe_walk_test', entry_id: entryId })).then(async (stop) => {
      if (!active) { stop(); return; }
      unsubscribe = stop;
      const before = revision.current;
      const status = await panel._send('argus/get_walk_test_status', { entry_id: entryId });
      if (!active) return;
      if (before === revision.current) setSession(status.active || status.reason ? status : null);
      setSubscribed(true);
    }).catch((err: unknown) => { if (active) setError(errorMessage(err)); });
    return () => { active = false; unsubscribe?.(); };
  }, [admin, connection, entryId, online, panel]);

  useEffect(() => {
    if (!diagnostic || !online || !entryId) return;
    let active = true;
    setRows(null);
    panel._send('argus/sensor_diagnosis', { entry_id: entryId }).then((result: Diagnosis[]) => {
      if (active) setRows(result);
    }).catch((err: unknown) => { if (active) setError(errorMessage(err)); });
    return () => { active = false; };
  }, [diagnostic, entryId, online, panel, zone?.id]);

  async function operate(command: string, data: object) {
    if (request.current || !online || !subscribed || !admin) return;
    request.current = true;
    setBusy(true);
    setError('');
    const before = revision.current;
    try {
      const result = await panel._send('argus/' + command, { entry_id: entryId, ...data });
      if (before === revision.current) setSession(result);
      setMode(null);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      request.current = false;
      setBusy(false);
    }
  }

  if (!visible || (!diagnostic && !choose && !(admin && session))) return null;
  const entity = (id: string) => panel._hass?.states?.[id];
  const name = (id: string) => entity(id)?.attributes?.friendly_name || id;
  const zoneName = (item?: typeof zone) => item?.area || (item ? `Zona ${item.number ?? ''}` : 'Todas las zonas');
  const unavailable = (id: string) => !entity(id) || ['unknown', 'unavailable', 'offline'].includes(entity(id).state);
  const disabled = busy || !online || !subscribed;
  const current = session?.current_sensor;
  const currentClass = current && entity(current)?.attributes?.device_class;
  const instruction = session?.step_phase === 'close' ? 'Apertura detectada. Ahora cierra el contacto.'
    : session?.step_phase === 'verified' ? 'Sensor comprobado.'
    : currentClass === 'motion' || currentClass === 'occupancy' ? 'Camina frente al sensor de movimiento.'
    : currentClass === 'vibration' ? 'Activa el sensor de vibración.'
    : 'Abre el contacto y vuelve a cerrarlo.';
  return <div className="context-tools" style={{ minWidth: 0, overflowWrap: 'anywhere' }}>
    {!online && <small role="status">Conexión perdida. Esperando confirmación del servidor.</small>}
    {error && <small role="alert">{error}</small>}
    {diagnostic && <div aria-live="polite">
      <strong>Diagnóstico automático · {zoneName(zone)}</strong>
      {!rows && !error && online && <div>Consultando sensores…</div>}
      {rows && (zone ? rows.filter(row => zone.entity_ids?.includes(row.entity_id)) : rows).map(row => (
        <div className="context-sensor-row" key={row.entity_id}>
          <strong>{name(row.entity_id)}</strong>
          <small>{zones.filter(item => item.entity_ids?.includes(row.entity_id)).map(zoneName).join(', ')}</small>
          <small>{entity(row.entity_id)?.attributes?.device_class || row.entity_id.split('.')[0]} · {diagnosisLabels[row.category]}</small>
          <small>{row.category === 'unverifiable' ? 'Disponibilidad sin confirmar' : 'Disponible'} · {row.state ?? 'Estado desconocido'}</small>
          {row.battery !== null && <small>Batería {row.battery}%</small>}
          {row.category === 'attention' && <small>Revisar batería.</small>}
          {!row.physical_test_kind && <small>Sin prueba física compatible en Argus.</small>}
        </div>
      ))}
    </div>}
    {admin && choose && !session?.active && <div>
      <strong>Prueba física · {zoneName(zone)}</strong>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button type="button" aria-pressed={mode === 'guided'} onClick={() => setMode('guided')}>Guiada</button>
        <button type="button" aria-pressed={mode === 'free'} onClick={() => setMode('free')}>Libre</button>
      </div>
      <button type="button" disabled={disabled || !mode || !canStart}
        onClick={() => void operate('start_walk_test', { mode, zone_id: zone?.id })}>Iniciar prueba</button>
    </div>}
    {admin && session?.all_sensors && <div>
      <strong>{session.mode === 'guided' ? 'Prueba guiada' : 'Prueba libre'} · {zoneName(zones.find(item => item.id === session.zone_id))}</strong>
      <div role="status">{session.tested_count} de {session.total_sensors} sensores comprobados.
        {!session.active && (session.reason === 'expired' ? ' Sesión expirada.' : session.reason === 'cancelled' ? ' Sesión cancelada.' : session.tested_count === session.total_sensors ? ' Prueba completada.' : ' Resultado parcial.')}
      </div>
      {session.active && current && <div role="status"><strong>{name(current)}</strong><div>{unavailable(current) ? 'Sensor no disponible.' : instruction}</div></div>}
      {session.all_sensors.map(id => <div key={id} className="context-sensor-row">{name(id)} · {
        session.tested_sensors[id] ? 'Detectado' : session.skipped_sensors.includes(id) ? 'Omitido de la prueba'
          : unavailable(id) ? 'No disponible' : session.active ? 'Pendiente' : 'No comprobado'
      }</div>)}
      {session.active && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {current && <>
          <button type="button" disabled={disabled || session.step_phase !== 'verified'} onClick={() => void operate('walk_test_step', { action: 'continue' })}>Continuar</button>
          <button type="button" disabled={disabled} onClick={() => void operate('walk_test_step', { action: 'retry' })}>Reintentar</button>
          <button type="button" disabled={disabled} onClick={() => void operate('walk_test_step', { action: 'skip' })}>Omitir paso</button>
        </>}
        <button type="button" disabled={disabled} onClick={() => void operate('stop_walk_test', { cancel: true })}>Cancelar prueba</button>
        <button type="button" disabled={disabled} onClick={() => void operate('stop_walk_test', {})}>Finalizar prueba</button>
      </div>}
      {!session.active && <button type="button" onClick={() => setSession(null)}>Cerrar resultado</button>}
    </div>}
  </div>;
}
