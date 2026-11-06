"""Run legacy backend test modules in isolated processes to contain HA mocks."""
from __future__ import annotations

import inspect
from pathlib import Path
import runpy
import subprocess
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]


def run_file(path: str) -> bool:
    namespace = runpy.run_path(path, run_name="argus_isolated_test")
    suite = unittest.TestSuite()
    for name, value in namespace.items():
        if inspect.isclass(value) and issubclass(value, unittest.TestCase):
            suite.addTests(unittest.defaultTestLoader.loadTestsFromTestCase(value))
        elif name.startswith("test_") and inspect.isfunction(value):
            suite.addTest(unittest.FunctionTestCase(value))
    return unittest.TextTestRunner(verbosity=2).run(suite).wasSuccessful()


if __name__ == "__main__":
    sys.path.insert(0, str(ROOT))
    if len(sys.argv) > 1:
        raise SystemExit(0 if run_file(sys.argv[1]) else 1)
    failures = []
    for path in sorted((ROOT / "tests").glob("test_*.py")):
        result = subprocess.run([sys.executable, __file__, str(path)], cwd=ROOT)
        if result.returncode:
            failures.append(path.name)
    print(f"Failed modules: {failures}")
    raise SystemExit(bool(failures))
