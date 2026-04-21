import re

with open("custom_components/argus/alarm_control_panel.py", "r") as f:
    content = f.read()

# Add _MODE_LABELS
content = content.replace("_LOGGER = logging.getLogger(__name__)", "_LOGGER = logging.getLogger(__name__)\n\n_MODE_LABELS = {\n    'armed_home': 'En Casa',\n    'armed_away': 'Ausente',\n    'armed_night': 'Noche',\n    'armed_vacation': 'Vacaciones'\n}")

# Add _get_context_user
get_user_func = """    async def _get_context_user(self) -> str:
        ctx = self._context
        if ctx and ctx.user_id:
            try:
                user = await self.hass.auth.async_get_user(ctx.user_id)
                if user:
                    return user.name
            except Exception:
                pass
        return "Argus"

"""
content = content.replace("class ArgusAlarmPanel(AlarmControlPanelEntity, RestoreEntity):", get_user_func + "class ArgusAlarmPanel(AlarmControlPanelEntity, RestoreEntity):")

# Fix disarmed log
content = content.replace('await async_append_audit_log(self.hass, "disarmed", "Sistema desarmado", user="Argus")', 
                          'await async_append_audit_log(self.hass, "disarmed", "Sistema desarmado", user=await self._get_context_user())')

# Fix armed log
content = content.replace('await async_append_audit_log(self.hass, "armed", f"Modo: {target.value}", user="Argus")',
                          'await async_append_audit_log(self.hass, "armed", f"Modo: {_MODE_LABELS.get(target.value, target.value)}", user=await self._get_context_user())')

with open("custom_components/argus/alarm_control_panel.py", "w") as f:
    f.write(content)
