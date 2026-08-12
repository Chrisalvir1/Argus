import sys
import re

with open("src/legacy/argus-panel.ts", "r") as f:
    content = f.read()

# Fix 1 & 2: CSS updates for mobile and touch-action
css_search = ".argus-profile-item {"
css_replace = """@media (max-width: 480px) and (orientation: portrait) {
  .argus-profile-grid { 
    grid-template-columns: 1fr;
    padding: 16px;
  }
  .argus-profile-item { width: 100%; }
}

.argus-profile-item {
  touch-action: manipulation;
  min-height: 44px;"""
content = content.replace(css_search, css_replace)

# Fix 6 & 7: Old welcome removal and animation destination fix
# Remove the old _showProfileWelcome call
content = content.replace("this._showProfileWelcome();", "")
# Remove the old _showProfileWelcome and _triggerWelcomeSpringAnimation function definitions
content = re.sub(r'  _showProfileWelcome\(\) \{.*?\n  \}\n', '', content, flags=re.DOTALL)
content = re.sub(r'  _triggerWelcomeSpringAnimation\(prof\) \{.*?\n  \}\n', '', content, flags=re.DOTALL)

# Fix animation destination in _runProfileWelcomeAnimation
# Top right instead of left
# The original code had: destX = 30; // Posición apróx del badge de perfil en TopBar
# Let's change destX to window.innerWidth - 60
anim_search = "const destX = 30; // Posición apróx del badge de perfil en TopBar"
anim_replace = "const destX = window.innerWidth - 60; // Posición apróx del badge de perfil en TopBar derecho"
content = content.replace(anim_search, anim_replace)

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(content)

