import re

with open("custom_components/argus/arming_voice.py", "r") as f:
    content = f.read()

# 1. Remove the popping loop in _options
content = re.sub(
    r"    for k, v in list\(merged\.items\(\)\):\n        if isinstance\(v, str\) and any\(v\.strip\(\) == val for lang_dict in _TRANSLATIONS\.values\(\) for val in lang_dict\.values\(\)\):\n            merged\.pop\(k\)",
    "",
    content
)

# 2. Change fallbacks to return empty string if no template is provided
content = re.sub(
    r'template = options\.get\(CONF_ARMING_VOICE_MESSAGE_START\) or translate\(lang, "msg_start"\)',
    'template = options.get(CONF_ARMING_VOICE_MESSAGE_START)',
    content
)
content = re.sub(
    r'template = options\.get\(CONF_ARMING_VOICE_MESSAGE_REMAINING\) or translate\(lang, "msg_remaining"\)',
    'template = options.get(CONF_ARMING_VOICE_MESSAGE_REMAINING)',
    content
)
content = re.sub(
    r'template = options\.get\(CONF_ARMING_VOICE_MESSAGE_LAST\) or translate\(lang, "msg_last"\)',
    'template = options.get(CONF_ARMING_VOICE_MESSAGE_LAST)',
    content
)
content = re.sub(
    r'template = options\.get\(CONF_ARMING_VOICE_MESSAGE_COMPLETE\) or translate\(lang, "msg_complete"\)',
    'template = options.get(CONF_ARMING_VOICE_MESSAGE_COMPLETE)',
    content
)

# 3. Fix cancelled
content = re.sub(
    r'    else:\n        message = translate\(lang, "msg_cancelled", mode=mode, home=config_entry\.title, source=source\)',
    '    else:\n        message = ""',
    content
)

# 4. Fix triggered
content = re.sub(
    r'    else:\n        msg_key = "msg_additional_triggered" if additional else "msg_triggered"\n        message = translate\(lang, msg_key, \*\*values\)',
    '    else:\n        message = ""',
    content
)

with open("custom_components/argus/arming_voice.py", "w") as f:
    f.write(content)
