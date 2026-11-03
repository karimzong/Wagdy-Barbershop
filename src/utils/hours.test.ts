import test from 'node:test';
import assert from 'node:assert/strict';
import { getSalonStatus } from './hours.ts';

test('Monday is always closed', () => {
  // Monday at 14:00
  const statusMidday = getSalonStatus({ dayOfWeek: 1, hour: 14, minute: 0 });
  assert.equal(statusMidday.isOpen, false);
  assert.match(statusMidday.statusAr, /مغلق/);
  assert.match(statusMidday.statusEn, /Closed/);

  // Monday at 11:30
  const statusMorning = getSalonStatus({ dayOfWeek: 1, hour: 11, minute: 30 });
  assert.equal(statusMorning.isOpen, false);
});

test('Tuesday open during business hours (11:00 to 23:00)', () => {
  // Tuesday at 11:00 sharp
  const openSharp = getSalonStatus({ dayOfWeek: 2, hour: 11, minute: 0 });
  assert.equal(openSharp.isOpen, true);
  assert.equal(openSharp.statusEn, 'Open Now');
  assert.equal(openSharp.statusAr, 'مفتوح الآن');

  // Tuesday afternoon at 16:30
  const openMidday = getSalonStatus({ dayOfWeek: 2, hour: 16, minute: 30 });
  assert.equal(openMidday.isOpen, true);

  // Tuesday evening at 22:59
  const openNight = getSalonStatus({ dayOfWeek: 2, hour: 22, minute: 59 });
  assert.equal(openNight.isOpen, true);
});

test('Tuesday before 11:00 is closed', () => {
  const early = getSalonStatus({ dayOfWeek: 2, hour: 9, minute: 30 });
  assert.equal(early.isOpen, false);
  assert.equal(early.statusEn, 'Currently Closed');
});

test('Tuesday at or after 23:00 is closed', () => {
  const late = getSalonStatus({ dayOfWeek: 2, hour: 23, minute: 0 });
  assert.equal(late.isOpen, false);
});

test('Sunday evening after 23:00 informs user about Monday closure', () => {
  const sundayLate = getSalonStatus({ dayOfWeek: 0, hour: 23, minute: 15 });
  assert.equal(sundayLate.isOpen, false);
  assert.match(sundayLate.detailEn, /Monday/);
  assert.match(sundayLate.detailAr, /الاثنين/);
});
