import{describe,expect,it}from'vitest';
import{activityTime,activityTitle,legacyActivityDetail}from'./activity';

describe('localized activity history',()=>{
 it('renders semantic events and historical dates from the active locale',()=>{
  const event={action:'armed',ts:'2025-01-01T00:00:00Z'};
  expect(activityTitle(event,'en')).toBe('System armed');
  expect(activityTitle(event,'es')).toBe('Sistema armado');
  expect(activityTime(event,'en',Date.parse('2025-01-01T00:01:00Z'))).not.toBe(activityTime(event,'es',Date.parse('2025-01-01T00:01:00Z')));
 });
 it('keeps legacy prose as a secondary forensic detail',()=>{
  expect(legacyActivityDetail({action:'armed',message:'Sistema armado'})).toBe('Sistema armado');
  expect(legacyActivityDetail({action:'armed',message_key:'activity.armed',detail:'sensor.binary'})).toBe('sensor.binary');
 });
});
