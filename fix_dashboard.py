import re

file_path = "src/features/dashboard/ArgusDashboard.tsx"
with open(file_path, "r") as f:
    text = f.read()

# 1. Remove the imports
text = re.sub(r"import \{ createPortal \} from 'react-dom';\nimport \{ ShadowGooeyPortal \} from '\.\./\.\./core/shadow-gooey';\nimport \{ AlarmFAB \} from '\.\./security/AlarmFAB';\nimport \{ ProfileSelector \} from '\./ProfileSelector';\nimport \{ GooeyNav \} from '\./GooeyNav';\nimport \{ GooeyQuickActionsOverlay \} from '\.\./widgets/GooeyQuickActionsOverlay';\n", "", text)

# 2. Remove container_hooks
hooks_pattern = r"  const \[profileContainer.*?\n    \{ id: 'away', name: 'Afuera' \}\n  \];\n"
text = re.sub(hooks_pattern, "", text, flags=re.DOTALL)

# 3. Remove rendering
rendering_pattern = r"      \{/\* Liquid Gooey Portals and Overlays \*/\}.*?(?=</section>)"
text = re.sub(rendering_pattern, "", text, flags=re.DOTALL)

with open(file_path, "w") as f:
    f.write(text)

