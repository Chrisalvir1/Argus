import React, { useState, useCallback } from 'react';

interface HistoryWidgetProps {
  hass: any;
}

type HistoryEntry = {
  id: string;
  type: string;
  title: string;
  detail: string;
  time: string;
  source: string;
};

const TYPE_STYLES: Record<string, { color: string; bg: string; icon: string }> = {
  triggered:  { color: '#FF6B6B', bg: 'rgba(229,57,53,0.18)',  icon: '🚨' },
  armed_away: { color: '#EF5350', bg: 'rgba(229,57,53,0.15)',  icon: '🔒' },
  armed_home: { color: '#42A5F5', bg: 'rgba(30,136,229,0.15)', icon: '🏠' },
  armed_night:{ color: '#AB47BC', bg: 'rgba(142,36,170,0.15)', icon: '🌙' },
  disarmed:   { color: '#66BB6A', bg: 'rgba(67,160,71,0.18)',  icon: '🔓' },
  login:      { color: 'rgba(255,255,255,0.6)', bg: 'rgba(255,255,255,0.06)', icon: '👤' },
  config:     { color: 'rgba(255,255,255,0.6)', bg: 'rgba(255,255,255,0.06)', icon: '⚙️' },
  restored:   { color: '#66BB6A', bg: 'rgba(67,160,71,0.15)',  icon: '♻️' },
  default:    { color: 'rgba(255,255,255,0.5)', bg: 'rgba(255,255,255,0.05)', icon: '📋' },
};

function styleFor(type: string) {
  return TYPE_STYLES[type] || TYPE_STYLES.default;
}

function buildMockHistory(hass: any): HistoryEntry[] {
  const entities = hass?.states || {};
  const panel: any = Object.values(entities).find((e: any) => e.entity_id?.startsWith('alarm_control_panel.argus'));
  const state = panel?.state || 'disarmed';
  const user = hass?.user?.name || 'Chris';
  const now = new Date();
  const fmt = (d: Date) =>
    d.toLocaleString('es', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const baseEntries: HistoryEntry[] = [
    {
      id: '1',
      type: 'login',
      title: 'CONEXIÓN USUARIO',
      detail: 'Conexión usuario',
      time: fmt(new Date(now.getTime() - 2 * 60000)),
      source: user,
    },
    {
      id: '2',
      type: 'restored',
      title: 'ESTADO LOCAL RESTAURADO',
      detail: `Estado local restaurado: ${
        state === 'disarmed' ? 'Desarmado' : state.replace('armed_', '').toUpperCase()
      }`,
      time: fmt(new Date(now.getTime() - 5 * 60000)),
      source: 'Argus',
    },
  ];

  if (state !== 'disarmed') {
    baseEntries.unshift({
      id: '0',
      type: state,
      title: 'CAMBIO DE ESTADO',
      detail: `Sistema ${state.replace('armed_', 'armado · ').replace('_', ' ')}`,
      time: fmt(new Date(now.getTime() - 1 * 60000)),
      source: user,
    });
  }

  return baseEntries;
}

export function HistoryWidget({ hass }: HistoryWidgetProps) {
  const [history, setHistory] = useState<HistoryEntry[]>(() => buildMockHistory(hass));
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setHistory(buildMockHistory(hass));
      setRefreshing(false);
    }, 600);
  }, [hass]);

  const handleClear = useCallback(() => {
    if (confirm('¿Limpiar el historial local?')) {
      setHistory([]);
    }
  }, []);

  const handleJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify(history, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'argus-history.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [history]);

  const BtnStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '10px',
    color: 'white',
    fontSize: '11px',
    fontWeight: 800,
    padding: '5px 10px',
    cursor: 'pointer',
    letterSpacing: '0.03em',
    transition: 'background 0.2s',
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '14px 16px', boxSizing: 'border-box', gap: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, flexWrap: 'wrap' }}>
        <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase', flex: 1 }}>
          📋 Historial de Actividad
        </span>
        <button
          type="button"
          onClick={handleRefresh}
          style={BtnStyle}
          title="Actualizar"
        >
          {refreshing ? '⏳' : '🔄'} Actualizar
        </button>
        <button type="button" onClick={handleJSON} style={BtnStyle} title="Exportar JSON">
          JSON
        </button>
        <button
          type="button"
          onClick={handleClear}
          style={{ ...BtnStyle, color: '#EF5350', borderColor: 'rgba(229,57,53,0.3)' }}
          title="Borrar historial"
        >
          BORRAR
        </button>
      </div>

      {/* Entries */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '7px', paddingRight: '2px' }}>
        {history.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4, fontSize: '13px', fontWeight: 600 }}>
            Sin entradas de historial
          </div>
        ) : (
          history.map(entry => {
            const s = styleFor(entry.type);
            return (
              <div
                key={entry.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '11px 12px',
                  borderRadius: '14px',
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: s.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '17px',
                    flexShrink: 0,
                    boxShadow: `0 0 10px ${s.bg}`,
                  }}
                >
                  {s.icon}
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: s.color, letterSpacing: '0.04em' }}>
                    {entry.title}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, opacity: 0.85, lineHeight: 1.3 }}>
                    {entry.detail}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, opacity: 0.45 }}>{entry.time}</span>
                    <span style={{ fontSize: '10px', opacity: 0.3 }}>·</span>
                    <span style={{ fontSize: '10px', fontWeight: 700, opacity: 0.55 }}>👤 {entry.source}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
