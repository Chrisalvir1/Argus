import React, { useState } from 'react';

interface AccessControlWidgetProps {
  hass: any;
}

interface ArgusUser {
  id: string;
  name: string;
  haAccount: string;
  role: 'admin' | 'standard';
  pin: boolean;
  expiry: string;
}

function mockUsers(hass: any): ArgusUser[] {
  const self = hass?.user?.name || 'Chris';
  return [
    {
      id: '1',
      name: self,
      haAccount: `CUENTA DE HOME ASSISTANT: ${self.toUpperCase()}`,
      role: 'admin',
      pin: false,
      expiry: 'INDEFINIDO',
    },
    {
      id: '2',
      name: 'Gecko',
      haAccount: 'CUENTA DE HOME ASSISTANT: JASON',
      role: 'admin',
      pin: false,
      expiry: 'INDEFINIDO',
    },
  ];
}

const ROLE_LABEL: Record<string, string> = {
  admin: '⭐ ADMINISTRADOR DE ARGUS',
  standard: '👤 USUARIO ESTÁNDAR',
};

const ROLE_COLOR: Record<string, string> = {
  admin: '#F5A623',
  standard: '#42A5F5',
};

const ROLE_BG: Record<string, string> = {
  admin: 'rgba(245,166,35,0.18)',
  standard: 'rgba(30,136,229,0.18)',
};

export function AccessControlWidget({ hass }: AccessControlWidgetProps) {
  const [users] = useState<ArgusUser[]>(() => mockUsers(hass));

  const actionBtn = (icon: string, title: string, danger = false) => (
    <button
      key={icon}
      type="button"
      title={title}
      style={{
        width: '38px',
        height: '38px',
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        color: danger ? '#EF5350' : 'white',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = danger ? 'rgba(229,57,53,0.2)' : 'rgba(255,255,255,0.14)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
    >
      {icon}
    </button>
  );

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '14px 16px', boxSizing: 'border-box', gap: '12px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          🛡️ Control de Acceso
        </span>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 900,
            padding: '3px 9px',
            borderRadius: '8px',
            background: 'rgba(67,160,71,0.2)',
            color: '#66BB6A',
            border: '1px solid rgba(67,160,71,0.35)',
            letterSpacing: '0.05em',
          }}
        >
          ACTIVO
        </span>
      </div>

      {/* User cards */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {users.map(user => (
          <div
            key={user.id}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '18px',
              padding: '14px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {/* Row 1: name + role badge + action icons */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {/* Role badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '5px 10px',
                    borderRadius: '10px',
                    background: ROLE_BG[user.role],
                    color: ROLE_COLOR[user.role],
                    fontSize: '11px',
                    fontWeight: 900,
                    letterSpacing: '0.03em',
                    alignSelf: 'flex-start',
                  }}
                >
                  {ROLE_LABEL[user.role]}
                </div>

                {/* HA account */}
                <span style={{ fontSize: '11px', fontWeight: 700, opacity: 0.6, letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                  {user.haAccount}
                </span>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
                {actionBtn('✏️', 'Editar usuario')}
                {actionBtn('🔑', 'Cambiar PIN')}
                {actionBtn('⭐', 'Cambiar rol')}
                {actionBtn('🗑️', 'Eliminar usuario', true)}
              </div>
            </div>

            {/* Row 2: PIN + expiry */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  color: user.pin ? '#66BB6A' : 'rgba(255,255,255,0.45)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                🔒 {user.pin ? 'PIN ACTIVO' : 'SIN PIN'}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  background: 'rgba(67,160,71,0.12)',
                  color: '#66BB6A',
                  border: '1px solid rgba(67,160,71,0.25)',
                }}
              >
                ∞ {user.expiry}
              </span>
            </div>
          </div>
        ))}

        {/* Add user button */}
        <button
          type="button"
          style={{
            width: '100%',
            padding: '12px',
            background: 'transparent',
            border: '1px dashed rgba(255,255,255,0.2)',
            borderRadius: '16px',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.02em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
          }}
        >
          + Añadir Usuario
        </button>
      </div>
    </div>
  );
}
