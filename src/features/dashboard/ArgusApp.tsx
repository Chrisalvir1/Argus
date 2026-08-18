import React, { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { ArgusDashboard } from './ArgusDashboard';
import { LocalStorageDashboardLayoutStorage } from './layout';
import type { ArgusWidgetDefinition } from './types';
import { ActiveInstances } from './widgets/ActiveInstances';
import { Modes } from './widgets/Modes';
import { SOSWidget } from './widgets/SOSWidget';
import { AccessControlWidget } from './widgets/AccessControlWidget';
import { HistoryWidget } from './widgets/HistoryWidget';
import { AutomationsWidget } from './widgets/AutomationsWidget';
import { ArgusIntro } from './components/ArgusIntro';

interface ArgusAppProps {
  hass: any;
  config: any;
}

const storage = new LocalStorageDashboardLayoutStorage();

// ── Inline SVG avatar — no external URLs (HA CSP blocks them) ───────────────
function UserAvatar({ name, size = 42 }: { name: string; size?: number }) {
  const initials = name
    .split(/\s+/)
    .map(w => w[0] ?? '')
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Deterministic color from name
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      style={{ borderRadius: '50%', flexShrink: 0, display: 'block' }}
    >
      <defs>
        <linearGradient id={`av-${initials}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue},70%,55%)`} />
          <stop offset="100%" stopColor={`hsl(${(hue + 40) % 360},65%,38%)`} />
        </linearGradient>
        <clipPath id="circ">
          <circle cx="21" cy="21" r="21" />
        </clipPath>
      </defs>
      <circle cx="21" cy="21" r="21" fill={`url(#av-${initials})`} />
      <text
        x="21"
        y="21"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={initials.length === 1 ? '18' : '14'}
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fill="white"
        clipPath="url(#circ)"
      >
        {initials}
      </text>
      <circle cx="21" cy="21" r="20.5" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
    </svg>
  );
}

// ── Clock extracted as its OWN component so it doesn't re-render ArgusApp ───
const TopBarClock = memo(function TopBarClock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const clockStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr  = time
    .toLocaleDateString('es', { weekday: 'short', day: '2-digit', month: 'short' })
    .toUpperCase();

  return (
    <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '1px', flexShrink: 0 }}>
      <span style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>
        {clockStr}
      </span>
      <span style={{ fontSize: '10px', fontWeight: 700, opacity: 0.45, letterSpacing: '0.07em' }}>
        {dateStr}
      </span>
    </div>
  );
});

// ── Argus logo SVG ────────────────────────────────────────────────────────────
const ArgusLogo = memo(function ArgusLogo() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="25" cy="25" r="24" fill="rgba(30,136,229,0.15)" stroke="rgba(30,136,229,0.4)" strokeWidth="1.5" />
      <path
        d="M25 9 L38 15 v11 c0 9-6 16-13 20 C17 42 11 35 11 26 V15 z"
        fill="rgba(30,136,229,0.3)"
        stroke="rgba(30,136,229,0.8)"
        strokeWidth="1.5"
      />
      <path d="M18 26 l5 5 l10-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
});

// ── Main App ─────────────────────────────────────────────────────────────────
export function ArgusApp({ hass, config }: ArgusAppProps) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = useCallback(() => setIsEditing(v => !v), []);

  const userName = hass?.user?.name || 'Chris';
  const isAdmin  = hass?.user?.is_admin ?? true;

  // Memoize widgets array — only changes if config changes (never in practice)
  const widgets = useMemo<ArgusWidgetDefinition[]>(() => [
    { id: 'modes',            title: 'Modos',              size: 'L',  kind: 'alarm-configuration', visible: true },
    { id: 'active-instances', title: 'Instancias Activas', size: 'M',  kind: 'security-status',     visible: true },
    { id: 'sos',              title: 'Acciones SOS',        size: 'M',  kind: 'custom',              visible: true },
    { id: 'history',          title: 'Historial',           size: 'L',  kind: 'activity-history',    visible: true },
    { id: 'automations',      title: 'Automatizaciones',    size: 'L',  kind: 'automations',         visible: true },
    { id: 'access',           title: 'Control de Acceso',   size: 'XL', kind: 'access-control',      visible: true },
  ], []);

  // Memoize widget components — only recreate when hass changes (HA state update)
  const widgetComponents = useMemo(() => ({
    'modes':            <Modes             hass={hass} />,
    'active-instances': <ActiveInstances   hass={hass} />,
    'sos':              <SOSWidget         hass={hass} />,
    'history':          <HistoryWidget     hass={hass} />,
    'automations':      <AutomationsWidget hass={hass} />,
    'access':           <AccessControlWidget hass={hass} />,
  }), [hass]);

  const userId = hass?.user?.id || 'default_user';

  return (
    <>
      <ArgusIntro userName={userName} isAdmin={isAdmin} />

      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(160deg, #0b0f19 0%, #0d1526 50%, #111827 100%)',
          color: 'white',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Top Bar ─────────────────────────────────────────────────────── */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 100%)',
            backdropFilter: 'blur(30px) saturate(140%)',
            WebkitBackdropFilter: 'blur(30px) saturate(140%)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            zIndex: 100,
            position: 'sticky',
            top: 0,
            gap: '12px',
          }}
        >
          {/* LEFT: Logo + Title + Subtitle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '13px', minWidth: 0, flex: 1 }}>
            <ArgusLogo />
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span style={{ fontSize: '21px', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
                Argus Home Hub
              </span>
              <span style={{ fontSize: '11px', fontWeight: 500, opacity: 0.5, marginTop: '3px', letterSpacing: '0.01em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit.
              </span>
            </div>
          </div>

          {/* RIGHT: Clock | Profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            {/* Clock — isolated component, doesn't re-render parent */}
            <TopBarClock />

            <div style={{ width: '1px', height: '34px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />

            {/* Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
              <UserAvatar name={userName} size={42} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, lineHeight: 1, whiteSpace: 'nowrap' }}>
                  {userName}
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    padding: '2px 7px',
                    borderRadius: '6px',
                    background: isAdmin ? 'rgba(245,166,35,0.2)' : 'rgba(30,136,229,0.2)',
                    color: isAdmin ? '#F5A623' : '#42A5F5',
                    border: `1px solid ${isAdmin ? 'rgba(245,166,35,0.35)' : 'rgba(30,136,229,0.35)'}`,
                    textTransform: 'uppercase',
                    alignSelf: 'flex-start',
                  }}
                >
                  {isAdmin ? 'Admin' : 'Estándar'}
                </span>
              </div>
            </div>

            {/* Edit pencil */}
            <button
              type="button"
              onClick={toggleEditing}
              title={isEditing ? 'Guardar y salir de edición' : 'Editar tablero'}
              style={{
                background: isEditing ? 'rgba(30,136,229,0.3)' : 'rgba(255,255,255,0.07)',
                border: `1px solid ${isEditing ? 'rgba(30,136,229,0.55)' : 'rgba(255,255,255,0.13)'}`,
                borderRadius: '11px',
                padding: '8px',
                cursor: 'pointer',
                color: isEditing ? '#42A5F5' : 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {isEditing
                  ? <path d="M20 6L9 17l-5-5" />
                  : (<><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></>)
                }
              </svg>
            </button>
          </div>
        </header>

        {/* Main grid — contains its own scroll so the page body never scrolls */}
        <main style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <ArgusDashboard
            widgets={widgets}
            widgetComponents={widgetComponents}
            storage={storage}
            userId={userId}
            dashboardId="main"
            isEditing={isEditing}
            onToggleEditing={toggleEditing}
            onEditing={setIsEditing}
            registerEditor={() => {}}
          />
        </main>
      </div>
    </>
  );
}
