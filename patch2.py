import re

with open("custom_components/argus/arming_voice.py", "r") as f:
    content = f.read()

# Fix cancelled
content = re.sub(
    r'    else:\n        message = translate\(lang, "msg_cancelled", mode=mode, home=config_entry\.title, source=source\)',
    '    else:\n        message = ""',
    content
)

# Fix triggered
content = re.sub(
    r'    else:\n        message = translate\(lang, msg_key, \*\*values\)',
    '    else:\n        message = ""',
    content
)

with open("custom_components/argus/arming_voice.py", "w") as f:
    f.write(content)
