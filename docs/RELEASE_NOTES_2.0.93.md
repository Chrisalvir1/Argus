# v2.0.93 — CI Fix

## Bug Fixes
•	Fix GitHub Actions release workflow: remove conflicting python-version + python-version-file dual config that caused setup-python to resolve an unexpected Python version and fail the release pipeline in ~13s.
