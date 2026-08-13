import React, { useRef, useEffect, useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface GooeyNavProps {
  tabs: Tab[];
  activeTab: string;
  onSelectTab: (id: string) => void;
}

export function GooeyNav({ tabs, activeTab, onSelectTab }: GooeyNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    if (idx >= 0) setActiveIndex(idx);
  }, [activeTab, tabs]);

  // Calculate position of the active blob
  const numTabs = tabs.length;
  const itemWidth = 100 / (numTabs || 1);
  const leftPos = `calc(${activeIndex * itemWidth}% + ${itemWidth / 2}%)`;

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '0 auto', filter: 'url(#argus-nav-gooey)' }} ref={navRef}>
      
      {/* Background Blob that moves with spring animation */}
      <div
        className="gooey-nav-blob"
        style={{
          position: 'absolute',
          top: '50%',
          left: leftPos,
          transform: 'translate(-50%, -50%)',
          width: '56px',
          height: '56px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          transition: 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          zIndex: 1
        }}
      />

      {/* Nav Items */}
      <div style={{ display: 'flex', position: 'relative', zIndex: 2, height: '70px', alignItems: 'center' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              style={{
                flex: 1,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: 'transparent', border: 'none', color: '#fff',
                cursor: 'pointer', outline: 'none',
                opacity: isActive ? 1 : 0.6,
                transition: 'opacity 0.2s',
                height: '100%'
              }}
            >
              <span style={{ fontSize: '20px', marginBottom: '4px' }}>{tab.icon}</span>
              <span style={{ fontSize: '10px', fontWeight: isActive ? '600' : '400' }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
