import re

with open("custom_components/argus/arming_voice.py", "r") as f:
    content = f.read()

content = re.sub(
    r"    for k, v in list\(merged\.items\(\)\):\n        if isinstance\(v, str\) and any\(v\.strip\(\) == val for lang_dict in _TRANSLATIONS\.values\(\) for val in lang_dict\.values\(\)\):\n            merged\.pop\(k\)",
    "",
    content
)

with open("custom_components/argus/arming_voice.py", "w") as f:
    f.write(content)
