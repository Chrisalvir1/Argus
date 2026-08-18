import json

with open("custom_components/argus/manifest.json", "r") as f:
    data = json.load(f)

data["version"] = "2.2.7"

with open("custom_components/argus/manifest.json", "w") as f:
    json.dump(data, f, indent=2)

with open("src/features/safety/slide-action.ts", "r") as f:
    content = f.read()

content = content.replace("Argus Slide-to-Action — v2.2.3", "Argus Slide-to-Action — v2.2.7")

with open("src/features/safety/slide-action.ts", "w") as f:
    f.write(content)
