import React, { useEffect, useState } from 'react';
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

// Argus logo SVG — matches the v2.2.13 octopus/shield badge
function ArgusLogo() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="26" cy="26" r="25" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      {/* Shield shape */}
      <path
        d="M26 8 L40 14 v12 c0 10-6 17-14 21 C14 43 8 36 8 26 V14 z"
        fill="rgba(30,136,229,0.35)"
        stroke="rgba(30,136,229,0.7)"
        strokeWidth="1.5"
      />
      {/* Check */}
      <path
        d="M19 26 l5 5 l10-10"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Glow ring */}
      <circle cx="26" cy="26" r="25" fill="none" stroke="rgba(30,136,229,0.25)" strokeWidth="4" />
    </svg>
  );
}

export function ArgusApp({ hass, config }: ArgusAppProps) {
  const [time, setTime] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const userName   = hass?.user?.name || 'Chris';
  const isAdmin    = hass?.user?.is_admin ?? true;
  const userId     = hass?.user?.id || 'default_user';
  const avatarUrl  = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=1E88E5&color=fff&size=128&bold=true`;

  // Formatted clock + date — matches v2.2.13 style
  const clockStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr  = time.toLocaleDateString('es', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  }).toUpperCase();

  const widgets: ArgusWidgetDefinition[] = [
    { id: 'modes',            title: 'Modos',             size: 'L',  kind: 'alarm-configuration', visible: true },
    { id: 'active-instances', title: 'Instancias Activas',size: 'M',  kind: 'security-status',     visible: true },
    { id: 'sos',              title: 'Acciones SOS',       size: 'M',  kind: 'custom',              visible: true },
    { id: 'history',          title: 'Historial',          size: 'L',  kind: 'activity-history',    visible: true },
    { id: 'automations',      title: 'Automatizaciones',   size: 'L',  kind: 'automations',         visible: true },
    { id: 'access',           title: 'Control de Acceso',  size: 'XL', kind: 'access-control',      visible: true },
  ];

  const widgetComponents = {
    'modes':            <Modes            hass={hass} />,
    'active-instances': <ActiveInstances  hass={hass} />,
    'sos':              <SOSWidget        hass={hass} />,
    'history':          <HistoryWidget    hass={hass} />,
    'automations':      <AutomationsWidget hass={hass} />,
    'access':           <AccessControlWidget hass={hass} />,
  };

  return (
    <>
      {/* tvOS entrance animation — shrinks to profile avatar in top-right */}
      <ArgusIntro userName={userName} isAdmin={isAdmin} avatarUrl={avatarUrl} />

      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(160deg, #0b0f19 0%, #0d1526 45%, #111827 100%)',
          color: 'white',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Top Bar — v2.2.13 faithful ───────────────────────────────────── */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(28px) saturate(140%)',
            WebkitBackdropFilter: 'blur(28px) saturate(140%)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            zIndex: 100,
            position: 'sticky',
            top: 0,
            gap: '16px',
          }}
        >
          {/* ── LEFT: Logo + Title + Subtitle ─────────────────────────────── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
            <ArgusLogo />
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                }}
              >
                Argus Home Hub
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  opacity: 0.55,
                  marginTop: '3px',
                  letterSpacing: '0.01em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit.
              </span>
            </div>
          </div>

          {/* ── RIGHT: Clock + Date + Avatar + Name + Role ─────────────────── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>

            {/* Clock block */}
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {clockStr}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  opacity: 0.5,
                  letterSpacing: '0.06em',
                }}
              >
                {dateStr}
              </span>
            </div>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '36px',
                background: 'rgba(255,255,255,0.12)',
                flexShrink: 0,
              }}
            />

            {/* Profile avatar + name + role badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={avatarUrl}
                alt={userName}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  flexShrink: 0,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    letterSpacing: '0.01em',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {userName}
                </span>
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    padding: '2px 7px',
                    borderRadius: '6px',
                    background: isAdmin
                      ? 'rgba(245,166,35,0.2)'
                      : 'rgba(30,136,229,0.2)',
                    color: isAdmin ? '#F5A623' : '#42A5F5',
                    border: `1px solid ${isAdmin ? 'rgba(245,166,35,0.35)' : 'rgba(30,136,229,0.35)'}`,
                    alignSelf: 'flex-start',
                    textTransform: 'uppercase',
                  }}
                >
                  {isAdmin ? 'Admin' : 'Estándar'}
                </span>
              </div>
            </div>

            {/* Edit toggle button — pencil / check */}
            <button
              type="button"
              onClick={() => setIsEditing(v => !v)}
              style={{
                background: isEditing ? 'rgba(30,136,229,0.3)' : 'rgba(255,255,255,0.08)',
                border: `1px solid ${isEditing ? 'rgba(30,136,229,0.6)' : 'rgba(255,255,255,0.15)'}`,
                borderRadius: '12px',
                padding: '8px',
                cursor: 'pointer',
                color: isEditing ? '#42A5F5' : 'rgba(255,255,255,0.75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
              title={isEditing ? 'Guardar y salir de edición' : 'Editar tablero'}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isEditing ? (
                  <path d="M20 6L9 17l-5-5" />
                ) : (
                  <>
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* ── Main Grid ────────────────────────────────────────────────────── */}
        <main style={{ flex: 1, position: 'relative' }}>
          <ArgusDashboard
            widgets={widgets}
            widgetComponents={widgetComponents}
            storage={storage}
            userId={userId}
            dashboardId="main"
            isEditing={isEditing}
            onToggleEditing={() => setIsEditing(v => !v)}
            onEditing={setIsEditing}
            registerEditor={() => {}}
          />
        </main>
      </div>
    </>
  );
}
