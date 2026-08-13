import re

file_path = "src/features/dashboard/ArgusDashboard.tsx"
with open(file_path, "r") as f:
    text = f.read()

# Replace from {/* Liquid Gooey Portals and Overlays */} up to just before <nav className="argus-dashboard__toolbar"
portals_pattern = r"      \{/\* Liquid Gooey Portals and Overlays \*/\}.*?(?=<nav className=\"argus-dashboard__toolbar\")"
text = re.sub(portals_pattern, "", text, flags=re.DOTALL)

with open(file_path, "w") as f:
    f.write(text)

print("Removed Gooey")
