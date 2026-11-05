from pathlib import Path
import ast
from types import SimpleNamespace
import importlib.util
import unittest
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock


ROOT = Path(__file__).resolve().parents[1]


class TestTtsSimpleConfigurationContract(unittest.TestCase):
    def test_ui_explains_default_messages_and_zone_assignment(self):
        source = (ROOT / "src/legacy/argus-panel.ts").read_text(encoding="utf-8")
        self.assertIn("Zonas de este modo", source)
        self.assertIn("Cada mensaje se usa solo en la situación que indica su título", source)
        self.assertIn("Usar mensaje predeterminado", source)
        self.assertNotIn("Variables: {count}", source)

    def test_voice_editor_shows_defaults_and_the_zones_for_the_selected_mode(self):
        source = (ROOT / "src/legacy/argus-panel.ts").read_text(encoding="utf-8")
        api = (ROOT / "custom_components/argus/websocket_api.py").read_text(encoding="utf-8")
        self.assertIn("defaultMessages = data.default_messages", source)
        self.assertIn("data-voice-zone-sensor", source)
        self.assertIn("_updateVoiceZoneStatuses();", source)
        self.assertIn(".argus-voice-sensor-row.is-open", source)
        self.assertIn(".argus-voice-sensor-row.is-closed", source)
        self.assertIn("Cambiar el texto no modifica el funcionamiento del armado", source)
        self.assertIn("Mensaje predeterminado", source)
        self.assertIn("Usar mensaje predeterminado", source)
        self.assertIn("Zonas de este modo", source)
        self.assertIn("Mensajes de voz ·", source)
        self.assertIn("Mensaje predeterminado · ejemplo con tus zonas y sensores", source)
        self.assertIn("Argus añade automáticamente el conteo y los nombres de las zonas, sus áreas y sus sensores", source)
        self.assertIn("No hace falta escribir esos nombres", source)
        self.assertIn("const exampleRows = sampleZoneSensorRows", source)
        self.assertIn("mode: this._mode", source)
        self.assertIn('"default_messages": default_messages', api)
        self.assertIn('"assigned_zones": assigned_zones', api)
        self.assertIn('mode not in zone_modes', api)
        self.assertIn('CONF_ARMING_VOICE_MESSAGE_ARMED: "msg_armed"', api)
        self.assertIn("message_key, translation_key = CONF_ARMING_VOICE_MESSAGE_ARMED, \"msg_armed\"", (ROOT / "custom_components/argus/arming_voice.py").read_text(encoding="utf-8"))

    def test_ui_caps_selected_speakers_at_five_and_lists_home_assistant_tts(self):
        source = (ROOT / "src/legacy/argus-panel.ts").read_text(encoding="utf-8")
        self.assertIn(".slice(0, 5)", source)
        self.assertIn("hasta 5", source)
        self.assertIn("data.tts_entities", source)
        self.assertIn("Puedes seleccionar como máximo cinco reproductores", source)

    def test_server_enforces_five_speakers_and_announces_in_parallel(self):
        api = (ROOT / "custom_components/argus/websocket_api.py").read_text(encoding="utf-8")
        voice = (ROOT / "custom_components/argus/arming_voice.py").read_text(encoding="utf-8")
        self.assertIn("len(players) > 5", api)
        self.assertIn("players = [player for player in players if player][:5]", voice)
        self.assertIn("create_task(deliver())", voice)

    def test_default_wait_messages_include_zone_area_sensor_and_requested_mode(self):
        voice = (ROOT / "custom_components/argus/arming_voice.py").read_text(encoding="utf-8")
        translations = (ROOT / "custom_components/argus/i18n.py").read_text(encoding="utf-8")
        self.assertIn('f"Zona de {area}" if area else "Zona sin área"', voice)
        self.assertIn('"pending": "sigue abierto"', voice)
        self.assertIn('if current or committed or (previous and not current)', voice)
        self.assertIn('"msg_complete": "Todas las zonas están cerradas. Argus procede a armarse en modo {mode}."', translations)
        self.assertIn('"msg_start": "Argus todavía no puede armarse en modo {mode}. Hay {zone_count_label} con {sensor_count_label} {sensor_open_agreement}:', translations)
        self.assertIn('"msg_remaining": "{closed}. Todavía hay {zone_count_label} con {sensor_count_label} {sensor_open_agreement}:', translations)
        self.assertIn('"msg_alarm_sensor_closed": "{closed}. {open_status}', translations)
        self.assertIn('"msg_armed": "Argus ya está armado en modo {mode}."', translations)
        self.assertIn('values["open_status"] = (', voice)
        self.assertIn("_append_voice_sentence(message, _auto_open_summary", voice)
        self.assertIn("if closed and not _has_voice_placeholder(custom_template, \"closed\")", voice)
        self.assertIn("if message_key == CONF_ARMING_VOICE_MESSAGE_START and current and not _has_voice_placeholder(custom_template, \"sensors\")", voice)
        self.assertNotIn("Recuento actualizado", translations)

    def test_spanish_message_defaults_match_singular_and_plural_counts(self):
        spec = importlib.util.spec_from_file_location("argus_i18n_under_test", ROOT / "custom_components/argus/i18n.py")
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        translate = module.translate

        one = translate(
            "es", "msg_start", mode="Noche", zone_count_label="1 zona",
            sensor_count_label="1 sensor", sensor_open_agreement="abierto",
            sensors="Zona de Cocina, sensor Puerta sigue abierto",
        )
        many = translate(
            "es", "msg_start", mode="Noche", zone_count_label="2 zonas",
            sensor_count_label="3 sensores", sensor_open_agreement="abiertos",
            sensors="Zona de Cocina, sensor Puerta sigue abierto",
        )
        self.assertIn("1 zona con 1 sensor abierto", one)
        self.assertIn("2 zonas con 3 sensores abiertos", many)

    def test_spoken_sensor_lists_use_y_before_the_last_zone(self):
        source = (ROOT / "custom_components/argus/arming_voice.py").read_text(encoding="utf-8")
        tree = ast.parse(source)
        helper = next(node for node in tree.body if isinstance(node, ast.FunctionDef) and node.name == "_join_spoken_list")
        module = ast.Module(body=[helper], type_ignores=[])
        namespace = {}
        exec(compile(module, "arming_voice.py", "exec"), namespace)
        join_spoken_list = namespace["_join_spoken_list"]

        self.assertEqual(join_spoken_list(["Zona A, sensor Puerta"], "es"), "Zona A, sensor Puerta")
        self.assertEqual(join_spoken_list(["Zona A, sensor Puerta", "Zona B, sensor Ventana"], "es"), "Zona A, sensor Puerta y Zona B, sensor Ventana")
        self.assertEqual(join_spoken_list(["Zona A, sensor Puerta", "Zona B, sensor Ventana", "Zona C, sensor Garaje"], "es"), "Zona A, sensor Puerta, Zona B, sensor Ventana y Zona C, sensor Garaje")
        self.assertIn("joinSpokenItems(sampleSensors)", (ROOT / "src/legacy/argus-panel.ts").read_text(encoding="utf-8"))

    def test_custom_arming_phrase_can_get_automatic_mode_zone_and_sensor_context(self):
        source = (ROOT / "custom_components/argus/arming_voice.py").read_text(encoding="utf-8")
        tree = ast.parse(source)
        helper_names = {"_count_labels", "_join_spoken_list", "_auto_open_summary"}
        helpers = [node for node in tree.body if isinstance(node, ast.FunctionDef) and node.name in helper_names]
        namespace = {}
        exec(compile(ast.Module(body=helpers, type_ignores=[]), "arming_voice.py", "exec"), namespace)
        summary = namespace["_auto_open_summary"](
            "es", 2, 3,
            ["Zona de Cocina, sensor Puerta sigue abierto", "Zona de Patio, sensor Ventana sigue abierto", "Zona de Garaje, sensor Portón sigue abierto"],
        )
        self.assertEqual(
            summary,
            "Hay 2 zonas con 3 sensores abiertos: Zona de Cocina, sensor Puerta sigue abierto, Zona de Patio, sensor Ventana sigue abierto y Zona de Garaje, sensor Portón sigue abierto.",
        )
        self.assertIn("Argus añade automáticamente el conteo", (ROOT / "src/legacy/argus-panel.ts").read_text(encoding="utf-8"))


class TestCustomTtsAutomaticContext(IsolatedAsyncioTestCase):
    async def test_custom_wait_intro_appends_only_the_selected_mode_sensors(self):
        source_path = ROOT / "custom_components/argus/arming_voice.py"
        tree = ast.parse(source_path.read_text(encoding="utf-8"))
        helper_names = {"_count_labels", "_join_spoken_list", "_has_voice_placeholder", "_append_voice_sentence", "_auto_open_summary", "_format_voice_template"}
        functions = [node for node in tree.body if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)) and (node.name in helper_names or node.name == "async_announce_arming_wait_update")]
        namespace = {
            "_get_language": AsyncMock(return_value="es"),
            "_options": lambda *_args: {"arming_voice_message_start": "Argus no pudo completar el armado."},
            "async_load_ui_data": AsyncMock(return_value={"zones": [
                {"number": 1, "area": "Cocina", "enabled": True, "modes": ["night"], "entity_ids": ["binary_sensor.puerta"]},
                {"number": 2, "area": "Patio", "enabled": True, "modes": ["night"], "entity_ids": ["binary_sensor.ventana"]},
                {"number": 3, "area": "Garaje", "enabled": True, "modes": ["night"], "entity_ids": ["binary_sensor.porton"]},
                {"number": 4, "area": "Oficina", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.oficina"]},
            ]}),
            "_sensor_identity": lambda _hass, entity_id: {"entity_id": entity_id, "name": {
                "binary_sensor.puerta": "Puerta", "binary_sensor.ventana": "Ventana",
                "binary_sensor.porton": "Portón", "binary_sensor.oficina": "Oficina",
            }[entity_id], "state": "on"},
            "_async_speak": AsyncMock(),
            "translate": lambda _lang, key: {"armed_night": "Noche", "msg_start": "Argus está revisando."}.get(key, key),
            "CONF_ARMING_VOICE_MESSAGE_START": "arming_voice_message_start",
        }
        exec(compile(ast.Module(body=functions, type_ignores=[]), str(source_path), "exec"), namespace)
        events = []
        hass = SimpleNamespace(bus=SimpleNamespace(async_fire=lambda *event: events.append(event)))
        entry = SimpleNamespace(entry_id="argus", title="Casa")

        await namespace["async_announce_arming_wait_update"](
            hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_night",
            previous_open=[], current_open=["binary_sensor.puerta", "binary_sensor.ventana", "binary_sensor.porton"],
        )

        message = events[0][1]["message"]
        self.assertEqual(
            message,
            "Argus no pudo completar el armado. Hay 3 zonas con 3 sensores abiertos: Zona de Cocina, sensor Puerta sigue abierto, Zona de Patio, sensor Ventana sigue abierto y Zona de Garaje, sensor Portón sigue abierto.",
        )
        self.assertNotIn("Oficina", message)


if __name__ == "__main__":
    unittest.main()
