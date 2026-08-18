import React, { useEffect, useState } from 'react';

interface ArgusAppProps {
  hass: any;
  config: any;
}

export function ArgusApp({ hass, config }: ArgusAppProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const profileImage = hass?.user?.name ? `https://ui-avatars.com/api/?name=${encodeURIComponent(hass.user.name)}&background=random` : '';

  return (
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
      <main style={{ flex: 1, padding: '20px' }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px', 
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '200px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '0 0 8px 0' }}>Argus React Edition</h2>
          <p style={{ margin: 0, opacity: 0.7, fontSize: '14px' }}>Capa Liquid Glass unificada en construcción...</p>
        </div>
      </main>
    </div>
  );
}
