import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactInquiry,
  filterFaqs,
  calculateLoopCycle,
} from './validation';
import { FAQ_ITEMS } from '../config/siteConfig';

test('validateContactInquiry rejects empty or invalid inputs', () => {
  const result = validateContactInquiry({
    fullName: 'أح',
    contactMethod: '12345',
    roleType: 'driver',
    governorate: '',
    message: 'قصير',
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.contactMethod);
  assert.ok(result.errors.governorate);
  assert.ok(result.errors.message);
});

test('validateContactInquiry accepts valid Egyptian mobile and valid email', () => {
  const phoneResult = validateContactInquiry({
    fullName: 'أحمد محمود حسن',
    contactMethod: '01012345678',
    roleType: 'business_winch',
    governorate: 'القاهرة',
    message: 'أرغب في الانضمام كمقدم خدمة ونش إنقاذ في منطقة مدينة نصر والتجمع.',
  });
  assert.equal(phoneResult.valid, true);
  assert.equal(Object.keys(phoneResult.errors).length, 0);

  const emailResult = validateContactInquiry({
    fullName: 'سارة علي',
    contactMethod: 'sara@example.com',
    roleType: 'driver',
    governorate: 'الإسكندرية',
    message: 'استفسار بخصوص موعد إطلاق التطبيق الرسمي وتفعيل ميزة Dashcam.',
  });
  assert.equal(emailResult.valid, true);
});

test('filterFaqs filters by category and Arabic search query accurately', () => {
  const all = filterFaqs(FAQ_ITEMS, 'all', '');
  assert.equal(all.length, FAQ_ITEMS.length);

  const safetyOnly = filterFaqs(FAQ_ITEMS, 'safety', '');
  assert.ok(safetyOnly.length >= 3);
  assert.ok(safetyOnly.every((item) => item.category === 'safety'));

  const searchDanger = filterFaqs(FAQ_ITEMS, 'all', 'وضع الخطر');
  assert.ok(searchDanger.length >= 2);
});

test('calculateLoopCycle computes illustrative segment counts cleanly', () => {
  const sim = calculateLoopCycle(3, 4);
  assert.equal(sim.segmentDurationMinutes, 3);
  assert.equal(sim.allocatedStorageGb, 4);
  assert.ok(sim.estimatedActiveSegments >= 10);
  assert.equal(sim.estimatedTotalLoopMinutes, sim.estimatedActiveSegments * 3);
});
