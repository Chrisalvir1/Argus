import React, { useEffect, useState } from 'react';
import { ArgusDashboard } from './ArgusDashboard';
import { LocalStorageDashboardLayoutStorage } from './layout';
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

export function ArgusApp({ hass, config }: ArgusAppProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const userName = hass?.user?.name || 'Chris';
  const profileImage = hass?.user?.name ? `https://ui-avatars.com/api/?name=${encodeURIComponent(hass.user.name)}&background=random` : '';

  const widgets = [
    { id: 'modes', title: 'Modos', size: 'L' as any, kind: 'modes', visible: true },
    { id: 'active-instances', title: 'Instancias Activas', size: 'M' as any, kind: 'instances', visible: true },
    { id: 'sos', title: 'Acciones SOS', size: 'M' as any, kind: 'sos', visible: true },
    { id: 'history', title: 'Historial', size: 'L' as any, kind: 'history', visible: true },
    { id: 'automations', title: 'Automatizaciones', size: 'L' as any, kind: 'automations', visible: true },
    { id: 'access', title: 'Control de Acceso', size: 'XL' as any, kind: 'access-control', visible: true }
  ];

  const widgetComponents = {
    'modes': <Modes hass={hass} />,
    'active-instances': <ActiveInstances hass={hass} />,
    'sos': <SOSWidget hass={hass} />,
    'history': <HistoryWidget hass={hass} />,
    'automations': <AutomationsWidget hass={hass} />,
    'access': <AccessControlWidget hass={hass} />
  };

  return (
    <>
      <ArgusIntro userName={userName} />
      
      <div style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        boxSizing: 'border-box'
      }}>
        {/* Liquid Glass Top Bar */}
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          zIndex: 100,
          position: 'sticky',
          top: 0
        }}>
          
          {/* Left: Profile & Hub Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Profile" 
                style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.2)' }}
              />
            ) : (
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', opacity: 0.6, letterSpacing: '0.5px' }}>
                Argus Home Hub
              </span>
              <span style={{ fontSize: '18px', fontWeight: 900, marginTop: '2px', letterSpacing: '-0.02em' }}>
                {config?.name || 'Mi Casa'}
              </span>
            </div>
          </div>

          {/* Right: Status & Clock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, opacity: 0.8 }}>
                {hass ? 'Conectado' : 'Desconectado'}
              </span>
              <span style={{ fontSize: '14px', fontWeight: 800 }}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            
            {/* Settings Button */}
            <button 
              type="button"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '8px',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main style={{ flex: 1, position: 'relative' }}>
          <ArgusDashboard 
            widgets={widgets}
            widgetComponents={widgetComponents}
            storage={storage}
            userId={hass?.user?.id || 'default_user'}
            dashboardId="main"
            onEditing={() => {}}
            registerEditor={() => {}}
          />
        </main>
      </div>
    </>
  );
}
