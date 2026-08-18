import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ArgusIntroProps {
  userName: string;
  isAdmin?: boolean;
  avatarUrl?: string;
}

export function ArgusIntro({ userName, isAdmin = true, avatarUrl }: ArgusIntroProps) {
  const [isVisible, setIsVisible]     = useState(true);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    // Show welcome for 1.4s then shrink toward top-right avatar
    const shrinkTimer = setTimeout(() => setIsShrinking(true), 1400);
    const hideTimer   = setTimeout(() => setIsVisible(false), 2300);
    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  const imgSrc =
    avatarUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=1E88E5&color=fff&size=200&bold=true`;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Background fades out during shrink
        background: isShrinking
          ? 'rgba(11,15,25,0)'
          : 'rgba(11,15,25,0.96)',
        backdropFilter: isShrinking ? 'none' : 'blur(40px) saturate(120%)',
        WebkitBackdropFilter: isShrinking ? 'none' : 'blur(40px) saturate(120%)',
        // Shrink toward top-right corner where the avatar lives in the top bar
        // avatar is approx 42px from right edge at 14px from top
        transformOrigin: 'calc(100% - 82px) 35px',
        transform: isShrinking ? 'scale(0)' : 'scale(1)',
        opacity: isShrinking ? 0 : 1,
        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, background 0.4s ease, backdrop-filter 0.4s ease',
        pointerEvents: isShrinking ? 'none' : 'auto',
      }}
    >
      <style>{`
        @keyframes argusIntroSlideIn {
          from { opacity: 0; transform: translateY(28px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes argusIntroAvatarBounce {
          0%   { transform: scale(0.8) translateY(8px); opacity: 0; }
          55%  { transform: scale(1.06) translateY(-4px); opacity: 1; }
          75%  { transform: scale(0.97) translateY(2px); }
          88%  { transform: scale(1.02) translateY(-1px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .argus-intro-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          animation: argusIntroSlideIn 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .argus-intro-avatar {
          animation: argusIntroAvatarBounce 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s both;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow:
            0 0 0 3px rgba(255,255,255,0.18),
            0 0 0 8px rgba(30,136,229,0.18),
            0 20px 60px rgba(0,0,0,0.55);
        }
        .argus-intro-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }
        .argus-intro-avatar::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 60%);
          pointer-events: none;
        }
        @media (min-width: 768px) {
          .argus-intro-avatar {
            width: 185px;
            height: 185px;
          }
        }
      `}</style>

      <div className="argus-intro-content">
        {/* tvOS-style circular avatar */}
        <div className="argus-intro-avatar">
          <img src={imgSrc} alt={userName} />
        </div>

        {/* Welcome text */}
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1
            style={{
              margin: '0 0 10px 0',
              fontSize: '30px',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              textShadow: '0 4px 16px rgba(0,0,0,0.6)',
              lineHeight: 1.1,
            }}
          >
            Hola, {userName}
          </h1>

          {/* Admin / Estándar badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              background: isAdmin
                ? 'rgba(245,166,35,0.18)'
                : 'rgba(30,136,229,0.18)',
              border: `1px solid ${isAdmin ? 'rgba(245,166,35,0.4)' : 'rgba(30,136,229,0.4)'}`,
              borderRadius: '20px',
              color: isAdmin ? '#F5A623' : '#42A5F5',
              fontSize: '11px',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {isAdmin ? '⭐ Administrador' : '👤 Estándar'}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
