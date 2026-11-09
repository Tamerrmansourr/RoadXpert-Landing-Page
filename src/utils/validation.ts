import type { FaqItem, Language } from '../config/siteConfig';

export interface ContactInquiryInput {
  fullName: string;
  contactMethod: string; // Egyptian mobile number or email
  roleType: 'driver' | 'business_winch' | 'business_mechanic' | 'business_tires' | 'business_electrician' | 'general';
  governorate: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactInquiryInput, string>>;
}

const EGYPT_PHONE_REGEX = /^(?:\+?20|0)?1[0125][0-9]{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactInquiry(
  input: ContactInquiryInput,
  lang: Language = 'ar'
): ValidationResult {
  const errors: Partial<Record<keyof ContactInquiryInput, string>> = {};
  const isEn = lang === 'en';

  const trimmedName = input.fullName.trim();
  if (!trimmedName || trimmedName.length < 3) {
    errors.fullName = isEn
      ? 'Please enter your full name (at least 3 characters).'
      : 'يرجى إدخال الاسم بالكامل (3 أحرف على الأقل).';
  }

  const trimmedContact = input.contactMethod.trim().replace(/\s+/g, '');
  if (!trimmedContact) {
    errors.contactMethod = isEn
      ? 'Please enter a valid Egyptian mobile number or email address.'
      : 'يرجى إدخال رقم موبايل مصري صحيح أو بريد إلكتروني.';
  } else if (!EGYPT_PHONE_REGEX.test(trimmedContact) && !EMAIL_REGEX.test(trimmedContact)) {
    errors.contactMethod = isEn
      ? 'Please verify your Egyptian mobile number (e.g., 010XXXXXXXX) or email address.'
      : 'يرجى التأكد من صحة رقم الموبايل المصري (مثال: 010XXXXXXXX) أو البريد الإلكتروني.';
  }

  if (!input.governorate.trim()) {
    errors.governorate = isEn
      ? 'Please select your governorate or operating area.'
      : 'يرجى اختيار المحافظة أو نطاق التواجد.';
  }

  const trimmedMsg = input.message.trim();
  if (!trimmedMsg || trimmedMsg.length < 10) {
    errors.message = isEn
      ? 'Please write the details of your message or inquiry (at least 10 characters).'
      : 'يرجى كتابة تفاصيل رسالتك أو استفسارك (10 أحرف على الأقل).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function filterFaqs(
  items: FaqItem[],
  category: string,
  searchQuery: string
): FaqItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery) ||
      item.categoryLabel.toLowerCase().includes(normalizedQuery)
    );
  });
}

export interface LoopRecordingSimulation {
  segmentDurationMinutes: 1 | 3 | 5;
  allocatedStorageGb: 2 | 4 | 8;
  estimatedActiveSegments: number;
  estimatedTotalLoopMinutes: number;
}

export function calculateLoopCycle(
  segmentDurationMinutes: 1 | 3 | 5,
  allocatedStorageGb: 2 | 4 | 8
): LoopRecordingSimulation {
  const approxMbPerMinute = 90;
  const segmentMb = segmentDurationMinutes * approxMbPerMinute;
  const totalMb = allocatedStorageGb * 1024;
  const estimatedActiveSegments = Math.max(2, Math.floor(totalMb / segmentMb));
  const estimatedTotalLoopMinutes = estimatedActiveSegments * segmentDurationMinutes;

  return {
    segmentDurationMinutes,
    allocatedStorageGb,
    estimatedActiveSegments,
    estimatedTotalLoopMinutes,
  };
}
