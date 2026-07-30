# Argus v1.9.7 — Navegación desde el selector de perfiles

Este parche permite salir del selector de perfiles de Argus y utilizar
normalmente la navegación de Home Assistant.

## Correcciones

- La capa de onboarding y selección de perfiles queda limitada al área del
  panel de Argus y deja de cubrir o interceptar la barra lateral de Home
  Assistant.
- El selector incorpora un botón visible «Volver a Home Assistant».
- El botón de salida está traducido en español, inglés, francés, portugués,
  italiano, chino y ruso.
- El historial de actividad se carga explícitamente desde el endpoint forense
  protegido, se vincula a la instancia activa y se actualiza después de borrar
  eventos.
- El Web Component y los recursos JavaScript utilizan la versión v1.9.7 para
  evitar que el navegador reutilice la capa defectuosa de v1.9.6.
