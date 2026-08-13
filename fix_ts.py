import re

files = [
    "src/features/dashboard/ProfileSelector.tsx",
    "src/features/security/AlarmFAB.tsx",
    "src/features/widgets/GooeyQuickActionsOverlay.tsx"
]

for file_path in files:
    with open(file_path, "r") as f:
        text = f.read()

    # Remove filterId="..."
    text = re.sub(r'\bfilterId="[^"]+"\s*', '', text)
    
    # Remove active={...}
    text = re.sub(r'\bactive=\{[^}]+\}\s*', '', text)
    
    # Replace config={{...}} with transition={{...}}
    # Wait, in config={{ type: 'spring', stiffness: 300, damping: 20 }}
    # I should replace config={{ type: 'spring', stiffness: 300, damping: 20 }} 
    # with transition={{ stiffness: 300, damping: 20 }}
    text = re.sub(r'config=\{\{\s*type:\s*\'spring\',\s*stiffness:\s*(\d+),\s*damping:\s*(\d+)\s*\}\}', r'transition={{ stiffness: \1, damping: \2 }}', text)
    
    with open(file_path, "w") as f:
        f.write(text)

print("Fixed TS errors")
