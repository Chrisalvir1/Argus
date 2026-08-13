import re

with open("src/features/dashboard/ArgusDashboard.tsx", "r") as f:
    dash = f.read()
with open("src/features/dashboard/layout.ts", "r") as f:
    lay = f.read()

content = dash + lay

for token in ['Editar tablero','Restablecer diseño','Ocultar widget','Mostrar {w.title}','aria-live="polite"',"event.key==='Escape'",'saveVisibility']:
    if token not in content:
        print(f"Missing token: {token}")

