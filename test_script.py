import re

content = open("custom_components/argus/alarm_control_panel.py").read()

def inject_get_user(content):
    get_user_code = """
    async def _get_user_name(self) -> str:
        if not self._context or not self._context.user_id:
            return "Argus"
        user = await self.hass.auth.async_get_user(self._context.user_id)
        return user.name if user else "Argus"
"""
    return content.replace("class ArgusAlarmPanel(AlarmControlPanelEntity):", "class ArgusAlarmPanel(AlarmControlPanelEntity):\n" + get_user_code)

print("Exists self.context?" , "self._context" in content or "self.context" in content)
