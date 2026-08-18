import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function GlassModal({ isOpen, onClose, title, children }: GlassModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      {/* Fondo oscuro desenfocado */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          animation: 'argusFadeIn 0.3s ease forwards'
        }}
        onClick={onClose}
      />
      
      {/* Contenedor principal Liquid Glass */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        maxHeight: '90vh',
        background: 'rgba(30, 30, 30, 0.6)',
        backdropFilter: 'blur(30px) saturate(150%)',
        WebkitBackdropFilter: 'blur(30px) saturate(150%)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        borderRadius: '28px',
        display: 'flex',
        flexDirection: 'column',
        animation: 'argusJellyBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        overflow: 'hidden'
      }}>
        <style>
          {`
            @keyframes argusFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes argusJellyBounce {
              0% { opacity: 0; transform: scale(0.8); }
              50% { transform: scale(1.03); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
        
        {/* Header */}
        <header style={{
          padding: '24px 24px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>
            {title}
          </h2>
          <button 
            type="button" 
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              transition: 'background 0.2s',
              fontSize: '18px'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            ×
          </button>
        </header>

        {/* Contenido (Scrollable) */}
        <div style={{
          padding: '24px',
          overflowY: 'auto',
          flex: 1,
          color: 'rgba(255,255,255,0.9)'
        }}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
