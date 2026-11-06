import {describe,it,expect} from 'vitest';
import {clockFormat,clockTime} from './clock';
describe('profile clock preference',()=>{
 it('honors the explicitly saved format over an older personalization value',()=>{
  expect(clockFormat({clock_format:'12h',personalization:{clock_format:'24h'}})).toBe('12h');
 });
 it('formats midnight, noon and afternoon correctly',()=>{
  expect(clockTime(new Date(2026,10,6,0,3),'12h')).toBe('12:03 AM');
  expect(clockTime(new Date(2026,10,6,12,3),'12h')).toBe('12:03 PM');
  expect(clockTime(new Date(2026,10,6,23,3),'24h')).toBe('23:03');
 });
 it('uses the HA preference only in automatic mode',()=>{
  expect(clockTime(new Date(2026,10,6,23,3),'auto','12')).toBe('11:03 PM');
  expect(clockTime(new Date(2026,10,6,23,3),'24h','12')).toBe('23:03');
 });
});
