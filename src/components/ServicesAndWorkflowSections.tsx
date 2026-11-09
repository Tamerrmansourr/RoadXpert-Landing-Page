import React, { useState } from 'react';
import {
  Truck,
  Wrench,
  Disc,
  BatteryCharging,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  ShoppingBag,
  Sparkles,
  Tag,
} from 'lucide-react';
import {
  ROADSIDE_SERVICES_BY_LANG,
  ROADSIDE_NOTE_BY_LANG,
  HOW_IT_WORKS_BY_LANG,
  BUSINESS_CONTENT_BY_LANG,
  STORE_CONTENT_BY_LANG,
  PageView,
} from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { BusinessDualPhonesMockup } from './PhoneMockup';

interface ServicesAndWorkflowSectionsProps {
  onNavigatePage: (page: PageView, sectionId?: string) => void;
  onSelectProviderRegistration: (specialty?: string) => void;
}

export const ServicesAndWorkflowSections: React.FC<
  ServicesAndWorkflowSectionsProps
> = ({ onNavigatePage, onSelectProviderRegistration }) => {
  const { lang, isRTL } = useLanguage();
  const [selectedAccessExplain, setSelectedAccessExplain] = useState<
    'all' | 'direct' | 'directory'
  >('all');

  const roadsideServices = ROADSIDE_SERVICES_BY_LANG[lang];
  const roadsideNote = ROADSIDE_NOTE_BY_LANG[lang];
  const howItWorksSteps = HOW_IT_WORKS_BY_LANG[lang];
  const businessContent = BUSINESS_CONTENT_BY_LANG[lang];
  const storeContent = STORE_CONTENT_BY_LANG[lang];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'winch':
        return <Truck className="w-6 h-6 text-[#0052CC]" />;
      case 'mechanic':
        return <Wrench className="w-6 h-6 text-[#0052CC]" />;
      case 'tires':
        return <Disc className="w-6 h-6 text-[#0052CC]" />;
      case 'electrician':
        return <BatteryCharging className="w-6 h-6 text-[#0052CC]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#0052CC]" />;
    }
  };

  return (
    <>
      {/* SECTION 07 — ROADSIDE SERVICES */}
      <section
        id="services"
        className="py-16 lg:py-24 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-medium text-[#0052CC]">
                <span>
                  {isRTL
                    ? 'خدمات الطريق والسيارات · Roadside Assistance'
                    : 'Roadside Assistance & Car Services'}
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                {isRTL
                  ? 'خدمات عربيتك أقرب ليك.'
                  : 'Your Car Services, Closer to You.'}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {isRTL
                  ? 'أربعة تخصصات أساسية تغطي أهم احتياجات السائق على الطريق، مرتبطة بمنظومة RoadX Business لتسهيل الوصول إلى الفني أو الخدمة المناسبة.'
                  : 'Four essential automotive specialties covering what drivers need most on the road—connected to RoadX Business to make reaching the right technician faster and simpler.'}
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200/80 rounded-xl self-start lg:self-auto">
              <button
                type="button"
                onClick={() => setSelectedAccessExplain('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold rx-transition cursor-pointer whitespace-nowrap ${
                  selectedAccessExplain === 'all'
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isRTL ? 'كل طرق الوصول' : 'All Access Modes'}
              </button>
              <button
                type="button"
                onClick={() => setSelectedAccessExplain('direct')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold rx-transition cursor-pointer whitespace-nowrap ${
                  selectedAccessExplain === 'direct'
                    ? 'bg-white text-[#0052CC] shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isRTL ? 'الطلب المباشر' : 'Direct Request'}
              </button>
              <button
                type="button"
                onClick={() => setSelectedAccessExplain('directory')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold rx-transition cursor-pointer whitespace-nowrap ${
                  selectedAccessExplain === 'directory'
                    ? 'bg-white text-[#0052CC] shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isRTL ? 'الاكتشاف عبر الدليل' : 'Directory Discovery'}
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedAccessExplain === 'all' && <p>{roadsideNote}</p>}
            {selectedAccessExplain === 'direct' && (
              <p>
                <strong className="text-slate-950">
                  {isRTL
                    ? 'الطلب المباشر داخل التطبيق:'
                    : 'In-App Direct Service Request:'}
                </strong>{' '}
                {isRTL
                  ? 'عند توفر مقدمي خدمة نشطين عبر RoadX Business في نطاقك (مثل خدمات ونش الإنقاذ أو الفنيين المتاحين للطلبات الفورية)، يمكنك إرسال طلب الخدمة ومتابعة حالته مباشرة من التطبيق.'
                  : 'When active providers on RoadX Business are available in your zone (such as winch operators or on-demand technicians), you can submit a direct request and track its status inside the app.'}
              </p>
            )}
            {selectedAccessExplain === 'directory' && (
              <p>
                <strong className="text-slate-950">
                  {isRTL ? 'الاكتشاف عبر الدليل:' : 'Directory Discovery:'}
                </strong>{' '}
                {isRTL
                  ? 'بالنسبة للورش ومراكز الصيانة والفنيين المسجلين في دليل المنظومة، يتيح لك التطبيق استعراض تخصصاتهم وبيانات التواصل أو الموقع للوصول إليهم بسهولة وقت الحاجة.'
                  : 'For workshops, maintenance centers, and technicians listed in the platform directory, the app lets you browse specialties, locations, and contact details to reach them directly.'}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadsideServices.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0052CC]/60 rx-transition flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </span>
                    <span
                      dir="ltr"
                      className="font-mono-tabular text-xs font-semibold text-slate-400"
                    >
                      {service.index}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl text-slate-950">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#0052CC] font-medium">
                      {service.accessLabel}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-semibold text-slate-800">
                    {isRTL ? 'أبرز الحالات:' : 'Common Use Cases:'}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-1.5">
                        <span className="text-[#0052CC] font-bold">·</span>
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08 — HOW IT WORKS */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-medium text-[#0052CC]">
              <span>
                {isRTL
                  ? 'خطوات الاستخدام · How It Works'
                  : 'How It Works · Simple Onboarding'}
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              {isRTL
                ? 'تجربة واضحة من أول رحلة'
                : 'A Clear Experience from Your First Trip'}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {isRTL
                ? 'لا توجد إعدادات معقدة؛ صُمم RoadX ليعمل بخطوات منطقية سواء كنت توثق طريقك اليومي أو تبحث عن خدمة لسيارتك.'
                : 'No complicated setup—RoadX is designed around four straightforward steps whether you are documenting your daily commute or looking for a car service.'}
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((item, idx) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      dir="ltr"
                      className="w-9 h-9 rounded-lg bg-[#0052CC] text-white font-mono-tabular font-bold text-sm flex items-center justify-center"
                    >
                      {item.step}
                    </span>
                    <span className="text-xs text-slate-400">
                      {isRTL ? `خطوة ${idx + 1} من 4` : `Step ${idx + 1} of 4`}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{isRTL ? 'داخل تطبيق RoadX' : 'Inside the RoadX App'}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — ROADX BUSINESS */}
      <section
        id="business"
        className="py-16 lg:py-24 bg-[#0B0F17] text-white border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold text-[#60A5FA]">
                <span>{businessContent.kicker}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                {businessContent.title}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                {businessContent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {businessContent.categories.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className="p-4 rounded-xl bg-[#111622] border border-white/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs text-[#60A5FA] font-mono-tabular">
                      <span dir="ltr">0{idx + 1}.</span>
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cat.detail}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2.5 pt-2 text-sm text-slate-300">
                {businessContent.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0075FF] shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectProviderRegistration('business_winch')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0043A8] text-white font-semibold text-sm rx-transition cursor-pointer whitespace-nowrap"
                >
                  <span>{businessContent.primaryCta}</span>
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => onNavigatePage('business')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rx-transition cursor-pointer whitespace-nowrap"
                >
                  <span>{businessContent.secondaryCta}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <BusinessDualPhonesMockup />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — STORE & OFFERS */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-medium text-[#0052CC]">
                  <span>{storeContent.kicker}</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                  {storeContent.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {storeContent.description}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-200/80">
                  {storeContent.transparencyNote}
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {storeContent.categoriesPreview.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052CC]">
                      {idx === 0 && <ShoppingBag className="w-5 h-5" />}
                      {idx === 1 && <Sparkles className="w-5 h-5" />}
                      {idx === 2 && <Tag className="w-5 h-5" />}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-base text-slate-950">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {storeContent.badgeText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
