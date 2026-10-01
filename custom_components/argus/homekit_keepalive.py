"""Backward-compatible import for the generic arming transition runtime."""
from .arming_transition_runtime import install_arming_transition_runtime

install_homekit_keepalive = install_arming_transition_runtime
