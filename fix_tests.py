import re
import os

files = [
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
    text = text.replace("2.1.0", "2.1.1")
    with open(file_path, "w") as f:
        f.write(text)

print("Fixed tests")
