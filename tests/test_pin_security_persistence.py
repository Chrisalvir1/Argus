"""Restart-safe rate limits and legacy credential migration."""

from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock, patch

import homeassistant.core  # Initialize Core's compatibility layer.

from custom_components.argus import security, storage


class PinSecurityPersistenceTests(IsolatedAsyncioTestCase):
    async def test_limit_is_restored_and_backoff_doubles(self):
        persisted = {}

        class FakeStore:
            def __init__(self, _hass, _version, key, *, private):
                self.key = key
                self.private = private

            async def async_load(self):
                return persisted.get(self.key)

            def async_delay_save(self, data, _delay):
                persisted[self.key] = data()

        with patch.object(storage, "Store", FakeStore), patch.object(
            security.time, "time", return_value=1000
        ) as clock:
            hass = SimpleNamespace(data={})
            await storage.async_restore_pin_limiters(hass, "first")
            limiter = hass.data["argus_limiter_first"]
            for _ in range(5):
                limiter.record_failure("actor")

            restarted = SimpleNamespace(data={})
            await storage.async_restore_pin_limiters(restarted, "first")
            await storage.async_restore_pin_limiters(restarted, "second")
            limiter = restarted.data["argus_limiter_first"]
            self.assertTrue(limiter.is_blocked("actor"))
            self.assertFalse(restarted.data["argus_limiter_second"].is_blocked("actor"))
            self.assertFalse(restarted.data["argus_pin_limiter_first"].is_blocked("actor"))

            clock.return_value = 1300
            self.assertFalse(limiter.is_blocked("actor"))
            for _ in range(5):
                limiter.record_failure("actor")
            clock.return_value = 1899
            self.assertTrue(limiter.is_blocked("actor"))
            clock.return_value = 1900
            self.assertFalse(limiter.is_blocked("actor"))
            limiter.reset("actor")
            self.assertEqual(persisted["argus.pin_attempts.first"]["websocket"], {})

    async def test_legacy_ui_credentials_are_hashed_without_changing_the_pin(self):
        async def executor(fn):
            return fn()

        hass = SimpleNamespace(async_add_executor_job=AsyncMock(side_effect=executor))
        user = {"pin": "1234", "access_pin_hash": "654321", "master_pin_hash": "0000"}
        advanced = {"guest_code": "1111", "duress_pin": "1212"}
        payload = {"users": [user], "advanced": advanced}
        plaintext = [(record, name, pin) for record in (user, advanced) for name, pin in record.items()]
        self.assertTrue(await storage._async_migrate_ui_pins(hass, payload))
        for record, field, pin in plaintext:
            self.assertNotEqual(pin, record[field])
            self.assertTrue(security.verify_pin(pin, record[field]))
            self.assertFalse(security.verify_pin(pin, pin))
        self.assertFalse(await storage._async_migrate_ui_pins(hass, payload))
        hass.async_add_executor_job.assert_awaited_once()
