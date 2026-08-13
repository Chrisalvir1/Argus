import re
import os

files = [
    "custom_components/argus/manifest.json",
    "custom_components/argus/const.py",
    "src/legacy/argus-card.ts",
    "custom_components/argus/www/argus-bootstrap.js",
    "tests/test_architecture_contract.py",
    "tests/test_security_contract.py",
    "tests/test_v193_sync.py",
    "tests/test_v2050_arming_complete.py",
    "tests/test_v2052_typescript_frontend_contract.py",
    "tests/test_v2052_version_contracts.py"
]

for file_path in files:
    with open(file_path, "r") as f:
        text = f.read()
    text = text.replace("2.1.2", "2.1.3")
    with open(file_path, "w") as f:
        f.write(text)

with open("CHANGELOG.md", "r") as f:
    text = f.read()
text = text.replace("## [2.1.2]", "## [2.1.3]")
with open("CHANGELOG.md", "w") as f:
    f.write(text)

with open("docs/RELEASE_NOTES_2.1.3.md", "w") as f:
    f.write("# Argus v2.1.3 — React Stability\n- Added ErrorBoundary to ArgusDashboard to prevent white screens on widget crashes.\n")

print("Bumped to 2.1.3")
