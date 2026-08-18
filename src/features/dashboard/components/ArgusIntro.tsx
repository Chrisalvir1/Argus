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
              from { opacity: 0; transform: translateY(20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .tvos-profile {
              position: relative;
              width: 140px;
              height: 140px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.1);
              display: flex;
              align-items: center;
              justifyContent: center;
              box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.2);
              overflow: hidden;
            }
            .tvos-profile img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 50%;
            }
            .tvos-profile::after {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 50%;
              border: 2px solid rgba(255, 255, 255, 0.4);
              box-shadow: inset 0 0 20px rgba(255,255,255,0.2);
              pointer-events: none;
            }
            @media (min-width: 768px) {
              .tvos-profile {
                width: 180px;
                height: 180px;
              }
            }
          `}
        </style>
        
        {/* tvOS Style Circular Profile */}
        <div className="tvos-profile">
          <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=1E88E5&color=fff&size=200`} alt="Profile" />
        </div>

        {/* Texto de bienvenida */}
        <div style={{ textAlign: 'center', color: 'white', marginTop: '8px' }}>
          <h1 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            Bienvenido, {userName}
          </h1>
          <div style={{ 
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(67, 160, 71, 0.2)',
            border: '1px solid rgba(67, 160, 71, 0.4)',
            borderRadius: '20px',
            color: '#43A047',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1px'
          }}>
            ADMINISTRADOR
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
