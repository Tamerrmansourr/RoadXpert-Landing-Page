import React, { useState } from 'react';
import {
  ChevronDown,
  Search,
  Download,
  Briefcase,
  Send,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
} from 'lucide-react';
import {
  WHY_ROADX_CONTENT,
  FAQ_ITEMS,
  LAUNCH_CONFIG,
  COMPANY_LEGAL_INFO,
  NAVBAR_LINKS,
  PageView,
} from '../config/siteConfig';
import {
  ContactInquiryInput,
  validateContactInquiry,
  filterFaqs,
} from '../utils/validation';
import { BrandLogo } from './BrandLogo';

interface WhyFaqAndCtaSectionsProps {
  onOpenDownloadModal: (appType: 'client' | 'business') => void;
  onNavigatePage: (page: PageView, sectionId?: string) => void;
  initialRoleType?: ContactInquiryInput['roleType'];
}

interface SubmittedInquiry extends ContactInquiryInput {
  id: string;
  submittedAt: string;
}

const EGYPT_GOVERNORATES = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'القليوبية',
  'الدقهلية',
  'الشرقية',
  'الغربية',
  'المنوفية',
  'البحيرة',
  'السويس',
  'الإسماعيلية',
  'بورسعيد',
  'أسيوط',
  'سوهاج',
  'المنيا',
  'بني سويف',
  'الفيوم',
  'أسوان',
  'الأقصر',
  'البحر الأحمر',
  'محافظة أخرى',
];

export const WhyFaqAndCtaSections: React.FC<WhyFaqAndCtaSectionsProps> = ({
  onOpenDownloadModal,
  onNavigatePage,
  initialRoleType = 'driver',
}) => {
  // FAQ State
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string>('what-is-roadx');

  // Contact / Provider Inquiry Form State
  const [formState, setFormState] = useState<ContactInquiryInput>({
    fullName: '',
    contactMethod: '',
    roleType: initialRoleType,
    governorate: 'القاهرة',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof ContactInquiryInput, string>>
  >({});
  const [submissions, setSubmissions] = useState<SubmittedInquiry[]>([]);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  // Sync external role selection when user clicks "Join RoadX Business"
  React.useEffect(() => {
    setFormState((prev) => ({ ...prev, roleType: initialRoleType }));
  }, [initialRoleType]);

  const filteredFaqs = filterFaqs(FAQ_ITEMS, faqCategory, faqSearch);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactInquiry(formState);
    if (!validation.valid) {
      setFormErrors(validation.errors);
      setShowSuccessBanner(false);
      return;
    }

    setFormErrors({});
    const newEntry: SubmittedInquiry = {
      ...formState,
      id: `RX-${1000 + submissions.length + 1}`,
      submittedAt: new Date().toLocaleTimeString('ar-EG', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setSubmissions((prev) => [newEntry, ...prev]);
    setShowSuccessBanner(true);
    setFormState((prev) => ({
      ...prev,
      fullName: '',
      contactMethod: '',
      message: '',
    }));
  };

  return (
    <>
      {/* SECTION 11 — WHY ROADX */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-medium text-[#0052CC]">
              <span>{WHY_ROADX_CONTENT.kicker}</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              {WHY_ROADX_CONTENT.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {WHY_ROADX_CONTENT.subtitle}
            </p>
          </div>

          {/* 4 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ROADX_CONTENT.valuePillars.map((pillar) => (
              <div
                key={pillar.index}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-3"
              >
                <span className="font-mono-tabular font-bold text-sm text-[#0052CC] block">
                  {pillar.index}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-950">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conceptual Comparison Table */}
          <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden">
            <div className="px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display font-bold text-base">
                مقارنة مفاهيمية: التعامل التقليدي المتفرق مقابل منظومة RoadX المتكاملة
              </h3>
              <span className="text-xs text-slate-400">
                توضيح لتكامل الوظائف داخل تجربة واحدة
              </span>
            </div>

            <div className="divide-y divide-slate-200/80">
              {WHY_ROADX_CONTENT.conceptualComparison.map((row) => (
                <div
                  key={row.aspect}
                  className="p-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
                >
                  <div className="lg:col-span-3 font-display font-bold text-sm sm:text-base text-slate-950">
                    {row.aspect}
                  </div>
                  <div className="lg:col-span-4 text-xs sm:text-sm text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                    <span className="block font-semibold text-slate-700 mb-1">
                      الأسلوب المتفرق التقليدي:
                    </span>
                    {row.traditionalApproach}
                  </div>
                  <div className="lg:col-span-5 text-xs sm:text-sm text-slate-900 bg-blue-50/50 p-3.5 rounded-xl border border-[#0052CC]/25">
                    <span className="block font-semibold text-[#0052CC] mb-1">
                      داخل منظومة RoadX:
                    </span>
                    {row.roadxApproach}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FAQ */}
      <section
        id="faq"
        className="py-16 lg:py-24 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-medium text-[#0052CC]">
              <span>الأسئلة الشائعة · إجابات واضحة وشفافة</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              كل ما تود معرفته عن RoadX وRoadX Business
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              إجابات مباشرة حول طريقة عمل الميزات، الأذونات المطلوبة، والفرق بين تطبيقي المنظومة.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200/80 rounded-xl">
              {[
                { id: 'all', label: 'الكل' },
                { id: 'general', label: 'عام' },
                { id: 'safety', label: 'السلامة والتسجيل' },
                { id: 'services', label: 'خدمات الطريق' },
                { id: 'business', label: 'RoadX Business' },
                { id: 'plans', label: 'الباقات والأجهزة' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFaqCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold rx-transition cursor-pointer whitespace-nowrap ${
                    faqCategory === cat.id
                      ? 'bg-white text-[#0052CC] shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <label htmlFor="faq-search-input" className="sr-only">
                ابحث في الأسئلة الشائعة
              </label>
              <input
                id="faq-search-input"
                type="search"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="ابحث عن سؤال (مثال: وضع الخطر، iPhone)..."
                className="w-full ps-9 pe-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0052CC] focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <p className="text-sm font-semibold text-slate-800">
                  لا توجد أسئلة مطابقة لعبارة البحث الحالية.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFaqCategory('all');
                    setFaqSearch('');
                  }}
                  className="text-xs font-semibold text-[#0052CC] underline cursor-pointer"
                >
                  إعادة عرض جميع الأسئلة
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border rx-transition ${
                      isOpen
                        ? 'bg-slate-50/70 border-[#0052CC]/50'
                        : 'bg-white border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenFaqId(isOpen ? '' : faq.id)
                        }
                        className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <div className="space-y-1">
                          <span className="text-[11px] text-[#0052CC] font-medium block">
                            {faq.categoryLabel}
                          </span>
                          <span className="font-display font-bold text-base sm:text-lg text-slate-950 block">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 shrink-0 rx-transition ${
                            isOpen ? 'rotate-180 text-[#0052CC]' : ''
                          }`}
                        />
                      </button>
                    </h3>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed space-y-3 border-t border-slate-200/60">
                        <p>{faq.answer}</p>
                        {faq.verificationNote && (
                          <p className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900">
                            {faq.verificationNote}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTACT & ROADX BUSINESS INQUIRY SECTION */}
      <section
        id="contact"
        className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Right Column: Contact Context & Pre-launch Transparency */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-medium text-[#0052CC]">
                  <span>تواصل معنا وانضم للمنظومة · Contact & Registration</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                  تواصل مع فريق RoadX أو سجّل اهتمامك كمقدم خدمة
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  سواء كنت سائقًا ترغب في الاستفسار عن ميزات التطبيق أو مقدم خدمة سيارات (ونش، ميكانيكي، كاوتش، كهربائي) ترغب في الانضمام إلى RoadX Business في محافظتك، يمكنك تسجيل رسالتك هنا مباشرة.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-3 text-xs sm:text-sm">
                <h3 className="font-display font-bold text-slate-950 text-base">
                  تفاصيل النشاط التجاري وقنوات التواصل الرسمية
                </h3>
                <div className="space-y-2 text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">الاسم القانوني للنشاط التجاري:</strong>{' '}
                    <span dir="ltr" className="font-semibold text-slate-900">
                      {COMPANY_LEGAL_INFO.legalName}
                    </span>
                  </p>
                  <p>
                    <strong className="text-slate-900">العنوان:</strong>{' '}
                    {COMPANY_LEGAL_INFO.addressLine1} — {COMPANY_LEGAL_INFO.addressLine2}
                  </p>
                  <p>
                    <strong className="text-slate-900">هاتف النشاط التجاري:</strong>{' '}
                    <a
                      href={COMPANY_LEGAL_INFO.phoneHref}
                      dir="ltr"
                      className="font-mono-tabular font-semibold text-[#0052CC] hover:underline"
                    >
                      {COMPANY_LEGAL_INFO.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-slate-900">موقع الويب:</strong>{' '}
                    <a
                      href={COMPANY_LEGAL_INFO.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="font-mono-tabular font-semibold text-[#0052CC] hover:underline"
                    >
                      {COMPANY_LEGAL_INFO.website}
                    </a>
                  </p>
                  <p>
                    <strong className="text-slate-900">المعرف الضريبي:</strong>{' '}
                    <span dir="ltr" className="font-mono-tabular font-semibold text-slate-900">
                      {COMPANY_LEGAL_INFO.taxId}
                    </span>
                  </p>
                </div>
              </div>

              {/* Submitted Requests Log in Current Session */}
              {submissions.length > 0 && (
                <div
                  data-testid="submitted-inquiries-list"
                  className="p-5 rounded-2xl bg-blue-50/70 border border-[#0052CC]/30 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-sm text-slate-950 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-[#0052CC]" />
                      <span>الطلبات المسجلة خلال جلستك ({submissions.length})</span>
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {submissions.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between font-semibold text-slate-900">
                          <span>{item.fullName}</span>
                          <span className="font-mono-tabular text-[#0052CC]">
                            {item.id} · {item.submittedAt}
                          </span>
                        </div>
                        <p className="text-slate-600">
                          {item.governorate} · {item.contactMethod}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Left Column: Validated Interactive Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                noValidate
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5 shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <h3 className="font-display font-bold text-lg text-slate-950">
                    نموذج التواصل وتسجيل مقدمي الخدمات
                  </h3>
                  <span className="text-xs text-slate-500">
                    جميع الحقول مطلوبة لضمان دقة المتابعة
                  </span>
                </div>

                {showSuccessBanner && (
                  <div
                    role="status"
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold">
                        تم تسجيل رسالتك بنجاح في سجل المتابعة.
                      </p>
                      <p className="text-emerald-800">
                        شكراً لتواصلك مع RoadX. سيتم مراجعة بياناتك والتواصل معك عبر وسيلة الاتصال المسجلة.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-full-name"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      الاسم بالكامل
                    </label>
                    <input
                      id="contact-full-name"
                      type="text"
                      value={formState.fullName}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      placeholder="مثال: محمد أحمد علي"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                        formErrors.fullName
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-slate-200 focus:border-[#0052CC]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone or Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-method"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      رقم الموبايل المصري أو البريد الإلكتروني
                    </label>
                    <input
                      id="contact-method"
                      type="text"
                      dir="ltr"
                      value={formState.contactMethod}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          contactMethod: e.target.value,
                        }))
                      }
                      placeholder="010XXXXXXXX / name@email.com"
                      className={`w-full px-3.5 py-2.5 text-sm text-right rounded-xl border bg-slate-50 focus:bg-white focus:outline-none font-mono-tabular ${
                        formErrors.contactMethod
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-slate-200 focus:border-[#0052CC]'
                      }`}
                    />
                    {formErrors.contactMethod && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.contactMethod}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Role / Category Selection */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-role-type"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      صفتك / نوع الطلب
                    </label>
                    <select
                      id="contact-role-type"
                      value={formState.roleType}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          roleType: e.target
                            .value as ContactInquiryInput['roleType'],
                        }))
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0052CC] focus:outline-none"
                    >
                      <option value="driver">سائق / صاحب سيارة (تطبيق RoadX)</option>
                      <option value="business_winch">
                        مقدم خدمة: ونش إنقاذ (RoadX Business)
                      </option>
                      <option value="business_mechanic">
                        مقدم خدمة: ميكانيكي سيارات (RoadX Business)
                      </option>
                      <option value="business_tires">
                        مقدم خدمة: فني كاوتش وإطارات (RoadX Business)
                      </option>
                      <option value="business_electrician">
                        مقدم خدمة: كهربائي سيارات (RoadX Business)
                      </option>
                      <option value="general">استفسار عام / أخرى</option>
                    </select>
                  </div>

                  {/* Governorate */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-governorate"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      المحافظة / نطاق العمل
                    </label>
                    <select
                      id="contact-governorate"
                      value={formState.governorate}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          governorate: e.target.value,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0052CC] focus:outline-none"
                    >
                      {EGYPT_GOVERNORATES.map((gov) => (
                        <option key={gov} value={gov}>
                          {gov}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-800"
                  >
                    تفاصيل الرسالة أو الخدمة التي تقدمها
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="اكتب استفسارك، أو اذكر تفاصيل الخدمة والمنطقة التي تغطيها إذا كنت مقدم خدمة..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none ${
                      formErrors.message
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-slate-200 focus:border-[#0052CC]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-[#0043A8] text-white font-semibold text-sm rx-transition cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الطلب</span>
                  </button>

                  <span className="text-xs text-slate-500">
                    بياناتك تُستخدم فقط للتواصل بخصوص خدمات ومنظومة RoadX.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA */}
      <section className="py-16 lg:py-24 bg-[#0052CC] text-white relative overflow-hidden">
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full opacity-15"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 320 C480 120, 960 360, 1440 80"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
          <path
            d="M0 350 C480 150, 960 390, 1440 110"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="12 10"
          />
        </svg>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-medium text-blue-100">
              RoadX — أمان أكثر، وخدمات أقرب
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              كل اللي تحتاجه على الطريق، في مكان واحد.
            </h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              ابدأ بتوثيق رحلاتك والاستفادة من أدوات المساعدة على القيادة والوصول إلى خدمات السيارات في مصر، أو انضم لمنظومة مقدمي الخدمات عبر RoadX Business.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenDownloadModal('client')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#0052CC] hover:bg-blue-50 font-bold text-base shadow-sm rx-transition cursor-pointer whitespace-nowrap"
            >
              <Download className="w-5 h-5" />
              <span>حمّل RoadX</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenDownloadModal('business')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#0B0F17] text-white hover:bg-slate-900 border border-white/15 font-bold text-base rx-transition cursor-pointer whitespace-nowrap"
            >
              <Briefcase className="w-5 h-5 text-[#60A5FA]" />
              <span>استكشف RoadX Business</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 14 — FOOTER */}
      <footer className="bg-[#0B0F17] text-slate-400 border-t border-slate-800 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Brand & Legal Identity Column */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo variant="inverse" size="md" />
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                منظومة تقنية للقيادة الآمنة وخدمات السيارات في مصر. تجمع بين حماية السائق، توثيق الرحلات عبر Dashcam، المساعدة على الطريق، وربط أصحاب السيارات بمقدمي الخدمات عبر RoadX Business.
              </p>
              <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-slate-400">
                <p>
                  <span className="text-slate-500">الاسم القانوني:</span>{' '}
                  <strong dir="ltr" className="text-white font-semibold">
                    {COMPANY_LEGAL_INFO.legalName}
                  </strong>
                </p>
                <p>
                  <span className="text-slate-500">المعرف الضريبي:</span>{' '}
                  <strong dir="ltr" className="font-mono-tabular text-slate-200">
                    {COMPANY_LEGAL_INFO.taxId}
                  </strong>
                </p>
                <p className="leading-relaxed">
                  <span className="text-slate-500">العنوان:</span>{' '}
                  <span className="text-slate-300">
                    {COMPANY_LEGAL_INFO.addressLine1} — {COMPANY_LEGAL_INFO.addressLine2}
                  </span>
                </p>
                <p className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={COMPANY_LEGAL_INFO.phoneHref}
                    dir="ltr"
                    className="font-mono-tabular text-white hover:text-[#60A5FA] rx-transition"
                  >
                    {COMPANY_LEGAL_INFO.phone}
                  </a>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <a
                    href={COMPANY_LEGAL_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="font-mono-tabular text-[#60A5FA] hover:underline"
                  >
                    {COMPANY_LEGAL_INFO.website}
                  </a>
                </p>
              </div>
            </div>

            {/* Section Links */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display font-bold text-sm text-white">
                أقسام الصفحة الرئيسية
              </h3>
              <ul className="space-y-2 text-sm">
                {NAVBAR_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigatePage('home', link.href.replace('#', ''));
                      }}
                      className="hover:text-white rx-transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dedicated Pages & Legal Links */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display font-bold text-sm text-white">
                صفحات المنظومة والسياسات
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigatePage('about')}
                    className="hover:text-white rx-transition cursor-pointer"
                  >
                    من نحن (عن RoadX)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigatePage('business')}
                    className="hover:text-white rx-transition cursor-pointer"
                  >
                    صفحة RoadX Business لمقدمي الخدمات
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigatePage('privacy')}
                    className="hover:text-white rx-transition cursor-pointer"
                  >
                    سياسة الخصوصية والأذونات
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigatePage('terms')}
                    className="hover:text-white rx-transition cursor-pointer"
                  >
                    شروط الاستخدام وإخلاء المسؤولية
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigatePage('support')}
                    className="hover:text-white rx-transition cursor-pointer"
                  >
                    الدعم الفني وجاهزية البيانات
                  </button>
                </li>
              </ul>
            </div>

            {/* Store & Official Channels Status */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-display font-bold text-sm text-white">
                المتاجر والتطبيقات
              </h3>
              <div className="space-y-2 text-xs">
                <button
                  type="button"
                  onClick={() => onOpenDownloadModal('client')}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-right font-medium rx-transition cursor-pointer block"
                >
                  تطبيق RoadX للعملاء
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    حالة المتاجر والروابط
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDownloadModal('business')}
                  className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-right font-medium rx-transition cursor-pointer block"
                >
                  تطبيق RoadX Business
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    لمقدمي خدمات السيارات
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} {COMPANY_LEGAL_INFO.legalName} (RoadX Egypt). جميع الحقوق محفوظة.
            </p>
            <p>
              المعرف الضريبي: <span dir="ltr" className="font-mono-tabular text-slate-400">{COMPANY_LEGAL_INFO.taxId}</span> · القاهرة، مصر
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
