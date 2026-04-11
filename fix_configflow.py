#!/usr/bin/env python3
import re

path = 'custom_components/argus/config_flow.py'
with open(path, 'r', encoding='utf-8') as f:
    original = f.read()

# Show suspect line bytes for debugging
for i, line in enumerate(original.splitlines(), 1):
    if i in (42, 43, 44):
        print(f'  line {i}: {repr(line)}')

# The broken line is:  self._ dict[str, Any] = {}
# Fix it to:           self._ dict[str, Any] = {}
# Use a simple string replace (most reliable)
bad  = 'self._ dict[str, Any] = {}'
good = 'self._ dict[str, Any] = {}'

if bad in original:
    fixed = original.replace(bad, good, 1)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(fixed)
    print('PATCHED (literal replace) OK')
else:
    # Try with unicode NBSP or other whitespace between _ and dict
    m = re.search(r'self\._([ \t\u00a0\u2009]+)dict', original)
    if m:
        fixed = original[:m.start()] + 'self._ dict' + original[m.end():]
        with open(path, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f'PATCHED (unicode ws={repr(m.group(1))}) OK')
    else:
        print('FAILED - line 43 chars:', [hex(ord(c)) for c in original.splitlines()[42]])
