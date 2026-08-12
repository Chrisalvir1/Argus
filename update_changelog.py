import sys

new_entry = """## [2.0.78] - 2026-08-12

### Changed
- Replaced the profile selection overlay with a tvOS-inspired design.
- Added smooth scale and transform animations for profile selection.
- Redesigned the PIN prompt for a cleaner, modern interface matching tvOS aesthetics.
- Profile welcome animation now transitions smoothly with a scaling and flying effect.

"""

with open("CHANGELOG.md", "r") as f:
    content = f.read()

parts = content.split("## [2.0.77]", 1)
content = parts[0] + new_entry + "## [2.0.77]" + parts[1]

with open("CHANGELOG.md", "w") as f:
    f.write(content)

with open("docs/RELEASE_NOTES_2.0.78.md", "w") as f:
    f.write("# Argus v2.0.78 — Patch Release\n\n" + new_entry.replace("## [2.0.78] - 2026-08-12\n\n", ""))

