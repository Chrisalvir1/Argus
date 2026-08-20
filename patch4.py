import re

with open("custom_components/argus/arming_voice.py", "r") as f:
    content = f.read()

new_get_language = """async def _get_language(hass, config_entry):
    ui_data = await async_load_ui_data(hass, config_entry.entry_id)
    lang = ui_data.get("language")
    if not lang:
        tts = config_entry.options.get(CONF_ARMING_VOICE_TTS, "")
        if "espanol" in tts.lower() or "_es" in tts.lower():
            return "es"
    return lang or hass.config.language or "en"
"""

content = re.sub(
    r"async def _get_language\(hass, config_entry\):\n    ui_data = await async_load_ui_data\(hass, config_entry\.entry_id\)\n    lang = ui_data\.get\(\"language\"\)\n    return lang or hass\.config\.language or \"en\"",
    new_get_language,
    content
)

with open("custom_components/argus/arming_voice.py", "w") as f:
    f.write(content)
