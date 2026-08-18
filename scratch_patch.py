import re

with open("src/legacy/argus-panel.ts", "r") as f:
    content = f.read()

# Remove the top-to-bottom gradient from entry-content inside the container query
content = content.replace(
    "background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 60%) !important;",
    ""
)

# Apply a solid Liquid Glass background to .entry so it goes all the way down
content = content.replace(
    "flex: 1 !important;\n  }",
    "flex: 1 !important;\n    background: var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))) !important;\n    backdrop-filter: blur(28px) saturate(150%) !important;\n    -webkit-backdrop-filter: blur(28px) saturate(150%) !important;\n  }"
)

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(content)

with open("src/legacy/argus-card.ts", "r") as f:
    content = f.read()

content = content.replace(
    "background: transparent !important;",
    "background: transparent !important;\n          border: none !important;\n          box-shadow: none !important;"
)

with open("src/legacy/argus-card.ts", "w") as f:
    f.write(content)
