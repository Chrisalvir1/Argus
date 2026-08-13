import re
import os

file_path = "src/legacy/argus-v2066-webgl2.ts"
with open(file_path, "r") as f:
    text = f.read()

# Remove any lines containing "daytime-theme"
lines = text.split("\n")
new_lines = [line for line in lines if "daytime-theme" not in line and "[argus-dark-mode=\"false\"]" not in line]

with open(file_path, "w") as f:
    f.write("\n".join(new_lines))

# Also in argus-panel.ts
file_path = "src/legacy/argus-panel.ts"
with open(file_path, "r") as f:
    text = f.read()

lines = text.split("\n")
new_lines = [line for line in lines if "daytime-theme" not in line and "[argus-dark-mode=\"false\"]" not in line]

with open(file_path, "w") as f:
    f.write("\n".join(new_lines))

