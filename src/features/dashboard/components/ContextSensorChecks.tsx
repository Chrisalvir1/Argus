import { formatContextTimestamp } from '../zone-context';
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
  battery_low?: boolean | null;
  availability?: 'available' | 'unavailable';
  last_changed?: string | null;
  physical_test_kind: string | null;
};

function errorMessage(error: unknown) {
  if (error && typeof error === 'object' && 'message' in error) return String(error.message);
  return String(error);
}

const diagnosisLabels = {
  correct: 'Estado recibido', attention: 'Requiere atención',
  unverifiable: 'Sin conexión', informational: 'No es sensor de seguridad',
};

const CONTACT_CLASSES = ['door', 'window', 'garage_door', 'opening'];
const ACTIVITY_CLASSES = ['motion', 'occupancy', 'vibration'];

export function ContextSensorChecks({ panel, entryId, zones, zone, online, states, canStart, visible, diagnostic, choose, scopeLabel }: {
  panel: any;
  states?: Record<string, any>;
  entryId: string;
  zones: { id: string; area?: string; number?: number; entity_ids?: string[] }[];
  zone?: { id: string; area?: string; number?: number; entity_ids?: string[] };
  online: boolean;
  canStart: boolean;
  visible: boolean;
  diagnostic: boolean;
  choose: boolean;
  scopeLabel?: string;
}) {
  const [mode, setMode] = useState<Mode | null>('guided');
  const [session, setSession] = useState<Session | null>(null);
  const [rows, setRows] = useState<Diagnosis[] | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [connectionError, setConnectionError] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const request = useRef(false);
  const revision = useRef(0);
  const connection = panel._hass?.connection;
  const admin = Boolean(panel._isAdmin);

  useEffect(() => {
    setSubscribed(false);
    setConnectionError('');
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
    }).catch((err: unknown) => { if (active) setConnectionError(errorMessage(err)); });
    return () => { active = false; unsubscribe?.(); };
  }, [admin, connection, entryId, online, panel]);

  const diagnosisSignature = JSON.stringify(zones.flatMap(item => item.entity_ids || []).map(id => [id, (states || panel._hass?.states)?.[id]]));
  useEffect(() => {
    if ((!diagnostic && !choose) || !online || !entryId) return;
    let active = true;
    setRows(null);
    setError('');
    panel._send('argus/sensor_diagnosis', { entry_id: entryId }).then((result: Diagnosis[]) => {
      if (active) setRows(result);
    }).catch((err: unknown) => { if (active) setError(errorMessage(err)); });
    return () => { active = false; };
  }, [diagnostic, choose, diagnosisSignature, entryId, online, panel, zone?.id]);

  async function operate(command: string, data: object) {
    if (request.current || !online || !subscribed || !admin) return;
    request.current = true;
    setBusy(true);
    setError('');
    const before = revision.current;
    try {
      const result = await panel._send('argus/' + command, { entry_id: entryId, ...data });
      if (before === revision.current) setSession(result);
      setMode('guided');
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      request.current = false;
      setBusy(false);
    }
  }

  if (!visible || (!diagnostic && !choose && !(admin && session))) return null;
  const entity = (id: string) => (states || panel._hass?.states)?.[id];
  const allowedIds = new Set((zone ? [zone] : zones).flatMap(item => item.entity_ids || []));
  const scopedRows = rows && rows.filter(row => allowedIds.has(row.entity_id));
  const compatible = scopedRows?.filter(row => row.physical_test_kind).length;
  const stateLabel = (row: Diagnosis) => {
    const current = entity(row.entity_id);
    if (current?.attributes?.device_class === 'timestamp' && row.state) {
      return `Dato informativo · ${formatContextTimestamp(row.state, panel._hass?.language || 'es', panel._hass?.config?.time_zone) || 'fecha no disponible'}`;
    }
    if (row.category === 'unverifiable' || unavailable(row.entity_id)) return 'Estado no disponible';
    if (row.state === "on" || row.state === "off") {
      const deviceClass = current?.attributes?.device_class;
      if (ACTIVITY_CLASSES.includes(deviceClass)) return row.state === 'on' ? 'Actividad detectada' : 'Sin actividad';
      if (CONTACT_CLASSES.includes(deviceClass)) return row.state === 'on' ? 'Abierto' : 'Cerrado';
      return row.state === 'on' ? 'Activo' : 'Inactivo';
    }
    return row.state || "Estado desconocido";
  };
  const name = (id: string) => entity(id)?.attributes?.friendly_name || id;
  const zoneName = (item?: typeof zone) => item ? `Zona ${item.number ?? ''}${item.area ? ' · ' + item.area : ''}` : 'Todas las zonas';
  const unavailable = (id: string) => !entity(id) || ['unknown', 'unavailable', 'offline'].includes(entity(id).state);
  const connectionLabel = (row: Diagnosis) => unavailable(row.entity_id) || row.availability === 'unavailable' ? 'Sin conexión' : 'Disponible';
  const batteryLabel = (row: Diagnosis) => {
    if (row.battery !== null) return `${row.battery_low ? 'Batería baja' : 'Batería'} · ${row.battery}%`;
    if (row.battery_low === true) return 'Batería baja · porcentaje no informado';
    if (row.battery_low === false) return 'Batería en estado normal · porcentaje no informado';
    return 'Batería: sin datos en Home Assistant';
  };
  const openedSince = (row: Diagnosis) => {
    const current = entity(row.entity_id);
    if (row.state !== 'on' || !CONTACT_CLASSES.includes(current?.attributes?.device_class)) return null;
    const changed = row.last_changed || current?.last_changed;
    const formatted = changed && formatContextTimestamp(changed, panel._hass?.language || 'es', panel._hass?.config?.time_zone);
    return formatted ? `Abierto desde ${formatted} · continúa abierto` : 'Abierto · hora de apertura no disponible';
  };
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
    {choose && connectionError && <small role="alert">No se pudo conectar la sesión de prueba: {connectionError}</small>}
    {diagnostic && <div aria-live="polite">
      <strong>Sensores · {scopeLabel || zoneName(zone)}</strong>
      <p className="small">Estados recibidos de Home Assistant.</p>
      {rows && <small role="status">{scopedRows?.length || 0} sensores en esta selección.</small>}
      {!rows && !error && online && <div>Consultando sensores…</div>}
      {rows && scopedRows?.length === 0 && <p role="status">No hay entidades configuradas en esta zona.</p>}
      {rows && scopedRows?.length !== 0 && scopedRows?.every(row => row.category === 'informational') && <p role="status">Solo hay datos informativos en esta selección. No hay contactos ni detectores de seguridad que permitan confirmar abierto o cerrado.</p>}
      {rows && scopedRows?.map(row => (
        <div className="context-sensor-row" key={row.entity_id}>
          <strong>{name(row.entity_id)}</strong>
          <small>{zones.filter(item => item.entity_ids?.includes(row.entity_id)).map(zoneName).join(', ')}</small>
          <small className="context-sensor-status">{stateLabel(row)} · {connectionLabel(row)}</small>
          <small>{batteryLabel(row)}</small>
          {openedSince(row) && <details><summary>Más información</summary><small>{openedSince(row)}</small></details>}
          {row.category === 'informational' && <small>Esta entidad no es un contacto ni un detector; su estado no indica si la zona está abierta o cerrada.</small>}
          {row.category === 'attention' && <small>Revisar batería.</small>}

        </div>
      ))}
    </div>}
    {admin && choose && !session?.active && <div>
      <strong>Prueba física · {zoneName(zone)}</strong>
      <p>Comprobar los sensores en el lugar. Abre y cierra los contactos o activa los detectores durante la sesión.</p>
      <p role="status">{compatible === undefined ? 'Consultando compatibilidad…' : compatible ? `${compatible} sensores disponibles para prueba física` : 'Esta zona no tiene sensores compatibles con prueba física.'}</p>
      {Boolean(compatible) && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button type="button" aria-pressed={mode === 'guided'} onClick={() => setMode('guided')}>Guiada</button>
        <button type="button" aria-pressed={mode === 'free'} onClick={() => setMode('free')}>Libre</button>
      </div>}
      {Boolean(compatible) && <p>Guiada: sigue cada paso. Libre: prueba los sensores en cualquier orden.</p>}
      {!canStart && <p role="status">Desarma Argus y cancela cualquier armado pendiente antes de iniciar una prueba física.</p>}
      {!subscribed && online && !connectionError && <p role="status">Conectando con la sesión de pruebas de Home Assistant…</p>}
      {mode && compatible ? <p>Modalidad seleccionada: {mode === 'guided' ? 'Guiada' : 'Libre'}.</p> : null}
      {Boolean(compatible) && <button type="button" disabled={disabled || !mode || !canStart}
        onClick={() => void operate('start_walk_test', { mode, zone_id: zone?.id })}>{busy ? 'Iniciando prueba…' : 'Iniciar prueba'}</button>}
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
