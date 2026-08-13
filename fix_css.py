import re

file_path = "src/legacy/argus-v2066-webgl2.ts"
with open(file_path, "r") as f:
    text = f.read()

# Remove the media query for light mode:
# @media(prefers-color-scheme:light){:host:not(.daytime-theme){--v2066-glass:linear-gradient(135deg,rgba(255,255,255,.56),rgba(255,255,255,.24));--v2066-border:rgba(255,255,255,.72);--v2066-text:var(--primary-text-color,#172033);--v2066-muted:var(--secondary-text-color,#4c586d)}}
text = re.sub(r"@media\(prefers-color-scheme:light\)\{.*?\}\}", "", text)

# Ensure --v2066-text defaults to #fff
text = text.replace("--v2066-text:var(--primary-text-color,#f7f9ff)", "--v2066-text:#fff")
text = text.replace("--v2066-muted:var(--secondary-text-color,rgba(247,249,255,.72))", "--v2066-muted:rgba(255,255,255,0.72)")

with open(file_path, "w") as f:
    f.write(text)

file_path = "src/legacy/argus-panel.ts"
with open(file_path, "r") as f:
    text = f.read()

# Change --primary-text-color definition
text = text.replace("--primary-text-color: #ffffff;", "--primary-text-color: #fff !important;")
text = text.replace("--primary-text-color: var(--v2066-text);", "--primary-text-color: #fff !important;")

with open(file_path, "w") as f:
    f.write(text)

print("Fixed CSS")
