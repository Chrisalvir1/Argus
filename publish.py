import os
import sys
import subprocess
import re

def update_file(path, old_text, new_text):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = content.replace(old_text, new_text)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

def main():
    print("🚀 Argus Auto-Publisher 🚀")
    current_version = "0.9.65" # We will read this dynamically
    
    # Read current version from manifest.json
    import json
    with open('custom_components/argus/manifest.json', 'r') as f:
        manifest = json.load(f)
        current_version = manifest.get('version', '0.0.0')

    print(f"Versión actual: {current_version}")
    new_version = input(f"Ingresa la nueva versión (ej. 0.9.66): ").strip()
    
    if not new_version:
        print("Operación cancelada.")
        return

    title = input("Título de la versión (ej. Fix de sensores): ").strip()
    print("Ingresa las notas de la versión (escribe 'FIN' en una nueva línea para terminar):")
    notes = []
    while True:
        line = input()
        if line.strip().upper() == 'FIN':
            break
        notes.append(line)
    
    notes_text = "\n".join(notes)
    
    print("\nActualizando archivos...")
    
    # Update manifest
    with open('custom_components/argus/manifest.json', 'r', encoding='utf-8') as f:
        m_content = f.read()
    m_content = re.sub(r'"version": ".*?"', f'"version": "{new_version}"', m_content)
    with open('custom_components/argus/manifest.json', 'w', encoding='utf-8') as f:
        f.write(m_content)

    # Update const.py
    with open('custom_components/argus/const.py', 'r', encoding='utf-8') as f:
        c_content = f.read()
    c_content = re.sub(r'VERSION = ".*?"', f'VERSION = "{new_version}"', c_content)
    with open('custom_components/argus/const.py', 'w', encoding='utf-8') as f:
        f.write(c_content)

    # Update README.md
    with open('README.md', 'r', encoding='utf-8') as f:
        r_content = f.read()
        
    # Replace badge
    r_content = re.sub(
        r'Versi%C3%B3n-.*?-blue\.svg', 
        f'Versi%C3%B3n-{new_version}-blue.svg', 
        r_content
    )
    
    # Replace Novedades section
    # Find the section between ## ✨ Novedades y Correcciones Críticas (...) and the next ---
    section_pattern = re.compile(
        r'(## ✨ Novedades y Correcciones Críticas \(v.*?\)\n\n).*?(?=\n---)', 
        re.DOTALL
    )
    
    new_section = f"## ✨ Novedades y Correcciones Críticas (v{new_version})\n\n{notes_text}"
    r_content = section_pattern.sub(new_section, r_content)
    
    with open('README.md', 'w', encoding='utf-8') as f:
        f.write(r_content)

    print("Archivos actualizados. Subiendo a GitHub...")
    
    commands = [
        f'git add .',
        f'git commit -m "v{new_version}: {title}"',
        f'git push origin main',
        f'git tag v{new_version}',
        f'git push origin v{new_version}'
    ]
    
    for cmd in commands:
        subprocess.run(cmd, shell=True)
        
    print("Creando Release en GitHub...")
    subprocess.run(['gh', 'release', 'create', f'v{new_version}', '-t', f'v{new_version} — {title}', '-n', notes_text])
    
    print("\n✅ ¡Publicación completada con éxito!")

if __name__ == "__main__":
    main()
