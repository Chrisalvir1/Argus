"""The zone verification workflow must not enroll unrelated legacy-mode sensors."""
import ast
import asyncio
from pathlib import Path
from types import ModuleType, SimpleNamespace
import sys
from unittest import IsolatedAsyncioTestCase
from unittest.mock import AsyncMock, patch

ROOT = Path(__file__).resolve().parents[1]

class WalkTestZoneScopeTests(IsolatedAsyncioTestCase):
    async def start(self, zones, selected=None):
        tree = ast.parse((ROOT/'custom_components/argus/websocket_api.py').read_text())
        node = next(n for n in tree.body if isinstance(n,ast.AsyncFunctionDef) and n.name=='ws_argus_start_walk_test')
        node.decorator_list=[]
        const=ModuleType('zone_scope.const');const.DOMAIN='argus';const.DATA_PANELS='panels'
        walk=ModuleType('zone_scope.core.walk_test')
        manager=SimpleNamespace(get_session=lambda eid:None,start_walk_test=lambda **kw:SimpleNamespace(to_dict=lambda:kw))
        walk.async_get_walk_test_manager=lambda h:manager;walk.physical_test_kind=lambda s:'contact'
        ns={'__package__':'zone_scope','_resolve_entry_id':lambda h,e:e,'_require_argus_admin':AsyncMock(return_value=({'name':'Test'},None)),
            'async_load_ui_data':AsyncMock(return_value={'zones':zones}),'async_append_audit_log':AsyncMock()}
        exec(compile(ast.Module(body=[node],type_ignores=[]),'<zone-walk-scope>','exec'),ns)
        results=[]
        panel=SimpleNamespace(state='disarmed',_arm_request=None,_all_sensors=lambda:['binary_sensor.in_zone','binary_sensor.outside'],_requires_immediate_trigger=lambda s:False)
        hass=SimpleNamespace(data={'argus':{'panels':{'entry':panel}}},states=SimpleNamespace(get=lambda s:object()))
        conn=SimpleNamespace(send_error=lambda *args: self.fail(str(args)),send_result=lambda i,r:results.append(r))
        msg={'id':1,'entry_id':'entry'}
        if selected is not None:msg['zone_id']=selected
        with patch.dict(sys.modules,{'zone_scope.const':const,'zone_scope.core.walk_test':walk}):
            await ns['ws_argus_start_walk_test'](hass,conn,msg)
        return results[0]['sensors']

    async def test_all_zones_excludes_other_mode_sensors(self):
        result=await self.start([{'id':'a','entity_ids':['binary_sensor.in_zone']},{'id':'disabled','enabled':False,'entity_ids':['binary_sensor.outside']}])
        self.assertEqual(result,['binary_sensor.in_zone'])

    async def test_specific_zone_excludes_other_zones(self):
        result=await self.start([{'id':'a','entity_ids':['binary_sensor.in_zone']},{'id':'b','entity_ids':['binary_sensor.outside']}],'a')
        self.assertEqual(result,['binary_sensor.in_zone'])

    async def test_without_zones_keeps_legacy_test_scope(self):
        self.assertEqual(await self.start([]),['binary_sensor.in_zone','binary_sensor.outside'])
