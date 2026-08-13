import re

file_path = "src/legacy/argus-panel.ts"
with open(file_path, "r") as f:
    text = f.read()

# The error is: Duplicate key "save_config" in object literal
# Because there's "save_config: 'Guardar configuración'," and also "save_config: 'Guardar configuración', edit_dashboard: 'Editar tablero',"
text = re.sub(r"save_config: '[^']+', edit_dashboard: '[^']+',\n", "", text)

with open(file_path, "w") as f:
    f.write(text)
print("Removed duplicates")
