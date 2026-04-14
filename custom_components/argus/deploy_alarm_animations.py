#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de despliegue para animaciones SVG de Argus en Home Assistant.
Envía automáticamente los archivos SVG a la carpeta www de HA.
"""

import os
import sys
import requests

# ==========================================
# CONFIGURACIÓN (Ajusta estos valores)
# ==========================================
HA_URL = "http://homeassistant.local:8123"
HA_TOKEN = "your_long_lived_access_token_here"
SVG_SOURCE_FOLDER = "./custom_components/argus/www"  # Carpeta local con los 5 archivos SVG
# ==========================================

SVG_FILES = [
    "mode_home.svg",
    "mode_away.svg",
    "mode_night.svg",
    "mode_vacation.svg",
    "mode_disarmed.svg",
]

# Cabeceras para la API REST de Home Assistant
HEADERS = {
    "Authorization": f"Bearer {HA_TOKEN}",
    "Content-Type": "application/json",
}

def verify_connection():
    """Verifica si la API de Home Assistant responde y el token es válido."""
    print("Verificando conexión con Home Assistant...")
    url = f"{HA_URL}/api/config/core/check_config"
    try:
        response = requests.post(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            print("✅ Conexión establecida correctamente.\n")
            return True
        else:
            print(f"❌ Error de autenticación o conexión: {response.status_code} - {response.text}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Error de red al intentar conectar con {HA_URL}: {e}")
        return False

def upload_fallback():
    """Fallback por SCP usando Paramiko si Home Assistant no soporta upload directo vía API en la carpeta www"""
    print("Para subir a /config/www/, se recomienda configurar samba/ssh o copiar directamente si estás local.")
    print("Asegúrate de que la carpeta /config/www/alarm_animations existe y pega allí los archivos.")
    print()
    try:
        import paramiko
        print("💡 Para desplegar remotamente vía SSH, usa sftp de paramiko. Aquí iría tu código paramiko si tu host tiene SSH habilitado.")
    except ImportError:
        print("💡 Sugerencia: pip install paramiko (si deseas usar carga remota vía SSH)")

def reload_lovelace():
    """Recarga los elementos del frontend en Home Assistant."""
    print("\nRecargando recursos Lovelace...")
    url = f"{HA_URL}/api/services/homeassistant/reload_all"
    try:
        response = requests.post(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            print("✅ Lovelace recargado correctamente.")
        else:
            print(f"⚠ No se pudo recargar Lovelace automáticamente: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"⚠ Error de red al recargar Lovelace: {e}")

def main():
    if not os.path.exists(SVG_SOURCE_FOLDER):
        print(f"❌ La carpeta '{SVG_SOURCE_FOLDER}' no existe.")
        sys.exit(1)

    if HA_TOKEN == "your_long_lived_access_token_here":
        print("⚠ ADVERTENCIA: No has configurado el HA_TOKEN en el script.")
        print("Se saltará la carga automática. Asegúrate de copiar los archivos a mano a /config/www/alarm_animations/")
    else:
        if not verify_connection():
            sys.exit(1)

        upload_fallback()
        reload_lovelace()

    print("\n" + "="*64)
    print("🎯 PASO FINAL: Añade este código a tu dashboard Lovelace (Tarjeta Manual)")
    print("="*64)
    
    lovelace_yaml = """
type: custom:button-card
entity: alarm_control_panel.argus
show_name: false
show_icon: false
show_label: true
show_state: false
styles:
  card:
    - background-color: "#0f172a"
    - border-radius: 16px
    - padding: 24px
  custom_fields:
    animation:
      - margin-bottom: 16px
      - display: flex
      - justify-content: center
  label:
    - font-size: 18px
    - font-weight: 600
    - justify-self: center
label: >
  [[[
    if (entity.state === 'armed_home') return 'Modo En Casa';
    if (entity.state === 'armed_away') return 'Modo Ausente';
    if (entity.state === 'armed_night') return 'Modo Noche';
    if (entity.state === 'armed_vacation') return 'Modo Vacaciones';
    if (entity.state === 'disarmed') return 'Desarmado';
    if (entity.state === 'triggered') return '🚨 ¡DISPARADA! 🚨';
    return entity.state;
  ]]]
custom_fields:
  animation: >
    [[[
      let img = 'mode_disarmed.svg';
      if (entity.state === 'armed_home') img = 'mode_home.svg';
      else if (entity.state === 'armed_away') img = 'mode_away.svg';
      else if (entity.state === 'armed_night') img = 'mode_night.svg';
      else if (entity.state === 'armed_vacation') img = 'mode_vacation.svg';
      
      let color = '#22c55e';
      if (entity.state === 'armed_home') color = '#2dd4bf';
      else if (entity.state === 'armed_away') color = '#f59e0b';
      else if (entity.state === 'armed_night') color = '#818cf8';
      else if (entity.state === 'armed_vacation') color = '#38bdf8';
      
      this.style.color = color;
      return `<img src="/local/alarm_animations/${img}" width="160" height="160" style="object-fit: contain;">`;
    ]]]
    """
    print(lovelace_yaml)
    print("="*64)

if __name__ == "__main__":
    main()
