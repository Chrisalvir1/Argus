import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ArgusIntroProps {
  userName: string;
}

export function ArgusIntro({ userName }: ArgusIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    // Mantener la pantalla de bienvenida unos momentos
    const shrinkTimer = setTimeout(() => {
      setIsShrinking(true);
    }, 1200);

    // Ocultar completamente el componente después de la animación de contracción
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 1200 + 800ms de animación

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return createPortal(
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        background: isShrinking ? 'transparent' : 'rgba(15, 20, 30, 0.95)',
        backdropFilter: isShrinking ? 'none' : 'blur(40px)',
        WebkitBackdropFilter: isShrinking ? 'none' : 'blur(40px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        pointerEvents: isShrinking ? 'none' : 'auto', // Evitar bloquear clics mientras se encoge
        // Cuando isShrinking es true, encogemos el contenedor hacia la esquina superior izquierda
        // (donde está la foto de perfil en el TopBar: aprox x: 20px, y: 16px)
        transformOrigin: 'top left',
        transform: isShrinking ? 'translate(20px, 16px) scale(0)' : 'translate(0, 0) scale(1)',
        opacity: isShrinking ? 0 : 1
      }}
    >
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          animation: 'argusIntroFadeIn 0.5s ease forwards'
        }}
      >
        <style>
          {`
            @keyframes argusIntroFadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
        
        {/* Logo Shield brillante */}
        <svg viewBox="0 0 200 200" width="120" height="120" style={{ filter: 'drop-shadow(0 10px 25px rgba(30, 136, 229, 0.5))' }}>
          <defs>
            <linearGradient id="intro-shield" x1="20%" y1="10%" x2="85%" y2="100%">
              <stop stopColor="#fff" stopOpacity=".38" />
              <stop offset=".25" stopColor="#1E88E5" stopOpacity=".78" />
              <stop offset="1" stopColor="#1E88E5" stopOpacity=".18" />
            </linearGradient>
            <filter id="intro-glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#intro-shield)" stroke="#1E88E5" strokeWidth="3" filter="url(#intro-glow)" />
          <path d="M100 31 148 51" stroke="#fff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Texto de bienvenida */}
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            Bienvenido a Argus
          </h1>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 600, opacity: 0.8 }}>
            Iniciando sesión como {userName}...
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
