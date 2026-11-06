"""Isolated execution of the real PIN update handler; no HA outputs."""
import ast
from pathlib import Path
from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock, Mock

SOURCE = Path(__file__).resolve().parents[1] / 'custom_components/argus/websocket_api.py'
node = next(n for n in ast.parse(SOURCE.read_text()).body if isinstance(n, ast.AsyncFunctionDef) and n.name == 'ws_argus_update_master_pin')
node.decorator_list = []

class MasterPinUpdateTests(IsolatedAsyncioTestCase):
    async def run_update(self, current='existing', supplied='', new='', confirmation='', legacy='legacy'):
        entry = SimpleNamespace(entry_id='lab', options={'code': current}, data={'code': legacy})
        limiter = SimpleNamespace(is_blocked=Mock(return_value=False), record_failure=Mock(return_value=False), reset=Mock())
        entries = SimpleNamespace(async_update_entry=Mock(), async_reload=AsyncMock())
        connection = SimpleNamespace(send_error=Mock(), send_result=Mock())
        env = {'_require_argus_admin': AsyncMock(return_value=({'id':'admin','name':'Admin'}, None)),
               '_entry_by_id': lambda *a:entry, '_limiter':lambda *a:limiter,
               'verify_pin':lambda given, stored:given == stored, 'validate_pin':lambda p:True,
               'hash_pin':lambda p:'hashed:'+p, 'needs_rehash':lambda p:False,
               'async_append_audit_log':AsyncMock()}
        exec(compile(ast.Module(body=[node], type_ignores=[]), str(SOURCE), 'exec'), env)
        await env['ws_argus_update_master_pin'](SimpleNamespace(config_entries=entries), connection,
            {'id':1,'entry_id':'lab','pin':new,'confirm_pin':confirmation,'current_pin':supplied})
        return entries, connection

    async def test_admin_missing_current_cannot_delete(self):
        entries, conn = await self.run_update()
        entries.async_update_entry.assert_not_called()
        conn.send_error.assert_called_once()

    async def test_wrong_current_cannot_replace(self):
        entries, _ = await self.run_update(supplied='wrong', new='new', confirmation='new')
        entries.async_update_entry.assert_not_called()

    async def test_confirmation_mismatch_cannot_replace(self):
        entries, _ = await self.run_update(supplied='existing', new='new', confirmation='other')
        entries.async_update_entry.assert_not_called()

    async def test_correct_current_replaces(self):
        entries, conn = await self.run_update(supplied='existing', new='new', confirmation='new')
        self.assertEqual(entries.async_update_entry.call_args.kwargs['options']['code'], 'hashed:new')
        conn.send_result.assert_called_once()

    async def test_correct_current_removes(self):
        entries, _ = await self.run_update(supplied='existing')
        self.assertEqual(entries.async_update_entry.call_args.kwargs['options']['code'], '')

    async def test_explicit_removal_does_not_resurrect_legacy_pin(self):
        entries, conn = await self.run_update(current='', new='new', confirmation='new')
        entries.async_update_entry.assert_called_once()
        conn.send_error.assert_not_called()
