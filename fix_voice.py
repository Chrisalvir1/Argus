with open("custom_components/argus/arming_voice.py", "r") as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if line.startswith("LEGACY_SPANISH_DEFAULTS = {"):
        skip = True
        continue
    if skip and line.strip() == "}":
        skip = False
        continue
    if skip:
        continue
    if "if isinstance(v, str) and v.strip() in LEGACY_SPANISH_DEFAULTS:" in line:
        new_lines.append("        if isinstance(v, str) and any(v.strip() == val for lang_dict in _TRANSLATIONS.values() for val in lang_dict.values()):\n")
    else:
        new_lines.append(line)

with open("custom_components/argus/arming_voice.py", "w") as f:
    f.writelines(new_lines)
