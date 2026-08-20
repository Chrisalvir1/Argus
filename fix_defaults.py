import re

with open("custom_components/argus/i18n.py", "r") as f:
    content = f.read()
    
# Extract all msg_* strings
matches = re.findall(r'"msg_[a-z_]+":\s*"([^"]+)"', content)
for m in matches:
    print(m)
