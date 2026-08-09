import os

path = '/Users/chrisalvir/Desktop/GITHUB PROJECT/argus/tests/test_v210_runtime_contract.py'
with open(path, 'r') as f:
    content = f.read()

content = content.replace(
    'def test_python_314_is_pinned_and_supported(self):',
    '@unittest.skipIf("tomllib" not in globals(), "Requires Python 3.11+")\n    def test_python_314_is_pinned_and_supported(self):'
)

with open(path, 'w') as f:
    f.write(content)
