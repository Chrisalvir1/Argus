import sys
from unittest.mock import MagicMock

# Global mock for homeassistant and voluptuous to ensure tests don't fail
# due to non-deterministic execution order on different filesystems.
ha_mock = MagicMock()
sys.modules["homeassistant"] = ha_mock
sys.modules["homeassistant.core"] = ha_mock
sys.modules["homeassistant.config_entries"] = ha_mock
sys.modules["homeassistant.const"] = ha_mock
sys.modules["homeassistant.helpers"] = ha_mock
sys.modules["homeassistant.helpers.event"] = ha_mock
sys.modules["homeassistant.helpers.dispatcher"] = ha_mock
sys.modules["homeassistant.helpers.storage"] = ha_mock
sys.modules["homeassistant.helpers.entity_platform"] = ha_mock
sys.modules["homeassistant.helpers.restore_state"] = ha_mock
sys.modules["homeassistant.helpers.service"] = ha_mock
sys.modules["homeassistant.util"] = ha_mock
sys.modules["homeassistant.util.dt"] = ha_mock
sys.modules["voluptuous"] = ha_mock
