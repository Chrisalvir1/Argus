import{describe,expect,it}from'vitest';
import type{HomeAssistant}from'./home-assistant';
import{sendArgus}from'./websocket';

describe('typed Argus websocket transport',()=>{
 it('sends the exact command and payload',async()=>{
  const calls:Record<string,unknown>[]=[];
  const hass={states:{},callWS:async<T>(message:Readonly<Record<string,unknown>>)=>{calls.push({...message});return{success:true}as T}}satisfies HomeAssistant;
  const response=await sendArgus(hass,'argus/perform_alarm_action',{entry_id:'entry-1',action:'arm_away'});
  expect(response.success).toBe(true);
  expect(calls).toEqual([{type:'argus/perform_alarm_action',entry_id:'entry-1',action:'arm_away'}]);
 });
});
