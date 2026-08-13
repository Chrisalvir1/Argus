import re

file_path = "src/features/dashboard/ArgusDashboard.tsx"
with open(file_path, "r") as f:
    text = f.read()

# Add imports
imports = """
import { createPortal } from 'react-dom';
import { ShadowGooeyPortal } from '../../core/shadow-gooey';
import { AlarmFAB } from '../security/AlarmFAB';
import { ProfileSelector } from './ProfileSelector';
import { GooeyNav } from './GooeyNav';
import { GooeyQuickActionsOverlay } from '../widgets/GooeyQuickActionsOverlay';
"""

text = text.replace("import type{ArgusBreakpoint", imports + "\nimport type{ArgusBreakpoint")

# Inside ArgusDashboard, get references to the containers
container_hooks = """
  const [profileContainer, setProfileContainer] = useState<HTMLElement | null>(null);
  const [navContainer, setNavContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.querySelector('argus-panel')?.shadowRoot;
    if (root) {
      setProfileContainer(root.getElementById('hero-profile-container'));
      setNavContainer(root.querySelector('.argus-mode-tabs'));
    }
  }, [hydrated]);

  // Mock handlers
  const handleAlarm = (action: string) => {
    const panel = document.querySelector('argus-panel') as any;
    if (panel?._send) panel._send('argus/alarm', { action });
  };
  
  // Replace current profile selector with Gooey
  const profiles = [
    { id: userId, name: userId, is_own_profile: true },
    { id: 'home', name: 'Casa' },
    { id: 'away', name: 'Afuera' }
  ];
"""

# inject inside ArgusDashboard function
text = text.replace("const currentLayout=layouts[bp]||[];", container_hooks + "\n  const currentLayout=layouts[bp]||[];")

# inject the rendering
rendering = """
      {/* Liquid Gooey Portals and Overlays */}
      <ShadowGooeyPortal id="argus-alarm-gooey" blur={6} contrast={18} />
      <ShadowGooeyPortal id="argus-profile-gooey" blur={8} contrast={20} />
      <ShadowGooeyPortal id="argus-widget-quick-gooey" blur={5} contrast={16} />
      <ShadowGooeyPortal id="argus-nav-gooey" blur={10} contrast={20} />
      
      <AlarmFAB 
        state="disarmed" 
        onArmHome={() => handleAlarm('arm_home')}
        onArmAway={() => handleAlarm('arm_away')}
        onArmNight={() => handleAlarm('arm_night')}
        onArmVacation={() => handleAlarm('arm_vacation')}
        onDisarm={() => handleAlarm('disarm')}
        onSOS={() => handleAlarm('sos')}
      />
      
      <GooeyQuickActionsOverlay />

      {profileContainer && createPortal(
        <ProfileSelector 
          currentProfile={profiles[0]} 
          profiles={profiles} 
          onSelectProfile={(id) => {
            const panel = document.querySelector('argus-panel') as any;
            if (panel) panel.setProfile(id);
          }} 
        />, 
        profileContainer
      )}

      {navContainer && createPortal(
        <GooeyNav 
          tabs={[
            { id: 'history', label: 'Historial', icon: '🕘' },
            { id: 'automations', label: 'Automaciones', icon: '⚡' },
            { id: 'access', label: 'Accesos', icon: '🔑' },
            { id: 'modes', label: 'Modos', icon: '🛡️' }
          ]} 
          activeTab="history" 
          onSelectTab={(id) => console.log('Tab selected', id)} 
        />, 
        navContainer
      )}
"""

text = text.replace("</ResponsiveGridLayout>", "</ResponsiveGridLayout>\n" + rendering)

with open(file_path, "w") as f:
    f.write(text)
print("Updated ArgusDashboard")
