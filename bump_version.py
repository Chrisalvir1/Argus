import re
import os

files = [
    "custom_components/argus/manifest.json",
    "custom_components/argus/const.py",
    "src/legacy/argus-card.ts",
    "custom_components/argus/www/argus-bootstrap.js",
    "tests/test_v2052_version_contracts.py"
]

for file_path in files:
    with open(file_path, "r") as f:
        text = f.read()
    text = text.replace("2.1.0", "2.1.1")
    with open(file_path, "w") as f:
        f.write(text)

with open("CHANGELOG.md", "r") as f:
    text = f.read()
text = text.replace("## [2.1.0]", "## [2.1.1]")
with open("CHANGELOG.md", "w") as f:
    f.write(text)

with open("docs/RELEASE_NOTES_2.1.1.md", "w") as f:
    f.write("# Argus v2.1.1 — Hotfix\n- Removed liquid-gooey and fixed text contrast issues.\n")
