import React, { useState } from 'react';
import { Liquid } from 'liquid-gooey';

interface Profile {
  id: string;
  name: string;
  picture?: string;
  is_own_profile?: boolean;
}

interface ProfileSelectorProps {
  currentProfile: Profile | null;
  profiles: Profile[];
  onSelectProfile: (id: string) => void;
}

export function ProfileSelector({ currentProfile, profiles, onSelectProfile }: ProfileSelectorProps) {
  const [open, setOpen] = useState(false);
  
  if (!currentProfile) return null;

  const others = profiles.filter(p => p.id !== currentProfile.id).slice(0, 4);

  const getAvatar = (p: Profile) => {
    if (p.picture) return <img src={p.picture} alt={p.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />;
    return <span style={{ fontWeight: 'bold' }}>{p.name.substring(0, 2).toUpperCase()}</span>;
  };

  const btnStyle = {
    width: '44px', height: '44px', borderRadius: '22px',
    background: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    padding: 0, overflow: 'hidden'
  };

  return (
    <Liquid filterId="argus-profile-gooey" blur={8} contrast={20}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
        
        {/* Main active profile */}
        <button
          onClick={() => setOpen(!open)}
          style={{ ...btnStyle, zIndex: 10, position: 'relative' }}
        >
          {getAvatar(currentProfile)}
        </button>

        {/* Other profiles emerging horizontally to the left */}
        {others.map((p, index) => (
          <Liquid.Item
            key={p.id}
            active={open}
            config={{ type: 'spring', stiffness: 250, damping: 20 }}
            delay={index * 40}
            style={{ position: 'absolute', right: `${54 + (index * 54)}px` }}
          >
            <button
              onClick={() => { onSelectProfile(p.id); setOpen(false); }}
              style={btnStyle}
            >
              {getAvatar(p)}
            </button>
          </Liquid.Item>
        ))}
      </div>
    </Liquid>
  );
}
