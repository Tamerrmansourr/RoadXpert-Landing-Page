import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactInquiry,
  filterFaqs,
  calculateLoopCycle,
} from './validation';
import { FAQ_ITEMS, FAQ_ITEMS_BY_LANG } from '../config/siteConfig';

test('validateContactInquiry rejects empty or invalid inputs in Arabic and English', () => {
  const resultAr = validateContactInquiry(
    {
      fullName: 'أح',
      contactMethod: '12345',
      roleType: 'driver',
      governorate: '',
      message: 'قصير',
    },
    'ar'
  );

  assert.equal(resultAr.valid, false);
  assert.ok(resultAr.errors.fullName);
  assert.ok(resultAr.errors.contactMethod);
  assert.ok(resultAr.errors.governorate);
  assert.ok(resultAr.errors.message);

  const resultEn = validateContactInquiry(
    {
      fullName: 'Jo',
      contactMethod: 'invalid',
      roleType: 'driver',
      governorate: '',
      message: 'short',
    },
    'en'
  );
  assert.equal(resultEn.valid, false);
  assert.match(resultEn.errors.fullName ?? '', /Please enter your full name/);
});

test('validateContactInquiry accepts valid Egyptian mobile and valid email', () => {
  const phoneResult = validateContactInquiry({
    fullName: 'Ahmed Mahmoud Hassan',
    contactMethod: '01012345678',
    roleType: 'business_winch',
    governorate: 'Cairo',
    message: 'I would like to join RoadX Business as a winch provider in Nasr City.',
  }, 'en');
  assert.equal(phoneResult.valid, true);
  assert.equal(Object.keys(phoneResult.errors).length, 0);

  const emailResult = validateContactInquiry({
    fullName: 'سارة علي',
    contactMethod: 'sara@example.com',
    roleType: 'driver',
    governorate: 'الإسكندرية',
    message: 'استفسار بخصوص موعد إطلاق التطبيق الرسمي وتفعيل ميزة Dashcam.',
  }, 'ar');
  assert.equal(emailResult.valid, true);
});

test('filterFaqs filters by category and search query in both languages', () => {
  const allAr = filterFaqs(FAQ_ITEMS, 'all', '');
  assert.equal(allAr.length, FAQ_ITEMS.length);

  const safetyOnlyEn = filterFaqs(FAQ_ITEMS_BY_LANG.en, 'safety', '');
  assert.ok(safetyOnlyEn.length >= 3);
  assert.ok(safetyOnlyEn.every((item) => item.category === 'safety'));

  const searchDangerEn = filterFaqs(FAQ_ITEMS_BY_LANG.en, 'all', 'Danger Mode');
  assert.ok(searchDangerEn.length >= 2);
});

test('calculateLoopCycle computes illustrative segment counts cleanly', () => {
  const sim = calculateLoopCycle(3, 4);
  assert.equal(sim.segmentDurationMinutes, 3);
  assert.equal(sim.allocatedStorageGb, 4);
  assert.ok(sim.estimatedActiveSegments >= 10);
  assert.equal(sim.estimatedTotalLoopMinutes, sim.estimatedActiveSegments * 3);
});
