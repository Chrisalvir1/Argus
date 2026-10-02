import React, { useEffect, useMemo, useState } from 'react';

type EventRow = { ts?: string; action?: string; detail?: string; user?: string; metadata?: Record<string, unknown> };
type Panel = { _send?: (type: string, payload: Record<string, unknown>) => Promise<any>; _dashboard?: { entry_id?: string; entries?: Array<{ entry_id?: string }> } };

export function dailyCounts(events: EventRow[], days = 14, now = Date.now()) {
  const result = Array.from({ length: days }, (_, i) => {
    const date = new Date(now); date.setHours(0, 0, 0, 0); date.setDate(date.getDate() - (days - 1 - i));
    return { date, count: 0 };
  });
  const index = new Map(result.map((row, i) => [row.date.toDateString(), i]));
  for (const event of events) {
    const date = new Date(String(event.ts || ''));
    const i = index.get(new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString());
    if (i !== undefined) result[i].count++;
  }
  return result;
}

export function SecurityInsights({ panel }: { panel: Panel }) {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const entry_id = panel._dashboard?.entry_id || panel._dashboard?.entries?.[0]?.entry_id;
  const refresh = async () => {
    if (!panel._send) { setError('La conexión de Argus no está disponible'); setLoading(false); return; }
    setLoading(true); setError('');
    const request = (type: string) => panel._send!(type, entry_id ? { entry_id } : {});
    const [timeline, summary, readiness] = await Promise.allSettled([
      panel._send('argus/get_forensic_timeline', { limit: 500, ...(entry_id ? { entry_id } : {}) }),
      request('argus/get_stats'), request('argus/get_health'),
    ]);
    if (timeline.status === 'fulfilled') setEvents(Array.isArray(timeline.value?.timeline) ? timeline.value.timeline : []);
    if (summary.status === 'fulfilled') setStats(summary.value);
    if (readiness.status === 'fulfilled') setHealth(readiness.value);
    if (timeline.status === 'rejected' && summary.status === 'rejected' && readiness.status === 'rejected') setError('No se pudieron cargar los datos. Comprueba tus permisos y vuelve a intentarlo.');
    setLoading(false);
  };
  useEffect(() => { void refresh(); }, [entry_id]);
  const daily = useMemo(() => dailyCounts(events), [events]);
  const max = Math.max(1, ...daily.map(day => day.count));
  const issues = Array.isArray(health?.issues) ? health.issues.slice(0, 3) : [];
  return <section className="argus-insights" aria-label="Resumen de seguridad">
    <div className="argus-insights__metrics">
      <div><strong>{stats?.triggers_30d ?? '—'}</strong><span>Alertas · 30 días</span></div>
      <div><strong>{stats?.armings_30d ?? '—'}</strong><span>Armados · 30 días</span></div>
      <div><strong>{health?.readiness_score != null ? `${health.readiness_score}%` : '—'}</strong><span>Preparación</span></div>
    </div>
    <div className="argus-insights__chart-wrap">
      <div className="argus-insights__section-title"><strong>Actividad diaria</strong><button type="button" onClick={() => void refresh()} disabled={loading} aria-label="Actualizar actividad">↻</button></div>
      <svg className="argus-insights__chart" viewBox="0 0 280 92" role="img" aria-label="Eventos registrados por día durante los últimos 14 días">
        <title>Eventos registrados por día durante los últimos 14 días</title>
        {daily.map((day, i) => { const h = Math.max(day.count ? 5 : 2, day.count / max * 66); return <g key={day.date.toISOString()}><rect x={i * 20 + 2} y={78 - h} width="12" height={h} rx="3" className={day.count ? 'has-events' : ''}><title>{day.date.toLocaleDateString()}: {day.count} eventos</title></rect></g>; })}
        <path d="M0 79.5H280" />
      </svg>
      <div className="argus-insights__axis"><span>14 días atrás</span><span>Hoy</span></div>
    </div>
    <div className="argus-insights__section-title"><strong>Estado del sistema</strong><span className={`argus-insights__status argus-insights__status--${health?.status === 'ready' ? 'good' : health?.status ? 'warn' : 'muted'}`}>{health?.status || (loading ? 'Cargando' : 'Sin datos')}</span></div>
    {issues.length > 0 ? <ul className="argus-insights__issues">{issues.map((issue: any, i: number) => <li key={`${issue?.code || issue?.message || 'issue'}-${i}`}>{String(issue?.message || issue?.detail || issue?.title || issue)}</li>)}</ul> : <p className="argus-insights__empty">{error || (loading ? 'Consultando preparación…' : health ? 'No se reportan problemas.' : 'El resumen requiere permisos de administrador.')}</p>}
    <div className="argus-insights__recent"><strong>Últimos eventos</strong>{events.slice(0, 3).map((event, i) => <div key={`${event.ts}-${i}`}><span>{event.action || 'Evento'}</span><time>{event.ts ? new Date(event.ts).toLocaleString() : ''}</time></div>)}{!events.length && <small>{error || (loading ? 'Cargando historial…' : 'No hay eventos disponibles.')}</small>}</div>
  </section>;
}
