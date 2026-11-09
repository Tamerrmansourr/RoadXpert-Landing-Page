import React, { useState } from 'react';
import {
  Truck,
  Wrench,
  Disc,
  BatteryCharging,
  ArrowLeft,
  CheckCircle2,
  Briefcase,
  ShoppingBag,
  Sparkles,
  Tag,
} from 'lucide-react';
import {
  ROADSIDE_SERVICES,
  ROADSIDE_NOTE,
  HOW_IT_WORKS_STEPS,
  BUSINESS_CONTENT,
  STORE_CONTENT,
  PageView,
} from '../config/siteConfig';
import { BusinessDualPhonesMockup } from './PhoneMockup';

interface ServicesAndWorkflowSectionsProps {
  onNavigatePage: (page: PageView, sectionId?: string) => void;
  onSelectProviderRegistration: (specialty?: string) => void;
}

export const ServicesAndWorkflowSections: React.FC<
  ServicesAndWorkflowSectionsProps
> = ({ onNavigatePage, onSelectProviderRegistration }) => {
  const [selectedAccessExplain, setSelectedAccessExplain] = useState<
    'all' | 'direct' | 'directory'
  >('all');

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
          {/* Header & Access Mode Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-medium text-[#0052CC]">
                <span>خدمات الطريق والسيارات · Roadside Assistance</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                خدمات عربيتك أقرب ليك.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                أربعة تخصصات أساسية تغطي أهم احتياجات السائق على الطريق، مرتبطة بمنظومة RoadX Business لتسهيل الوصول إلى الفني أو الخدمة المناسبة.
              </p>
            </div>

            {/* Interactive Access Mode Explanation Switcher */}
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
                كل طرق الوصول
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
                الطلب المباشر
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
                الاكتشاف عبر الدليل
              </button>
            </div>
          </div>

          {/* Dynamic Explanation Banner for Direct Request vs Directory Discovery */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedAccessExplain === 'all' && <p>{ROADSIDE_NOTE}</p>}
            {selectedAccessExplain === 'direct' && (
              <p>
                <strong className="text-slate-950">الطلب المباشر داخل التطبيق:</strong>{' '}
                عند توفر مقدمي خدمة نشطين عبر RoadX Business في نطاقك (مثل خدمات ونش الإنقاذ أو الفنيين المتاحين للطلبات الفورية)، يمكنك إرسال طلب الخدمة ومتابعة حالته مباشرة من التطبيق.
              </p>
            )}
            {selectedAccessExplain === 'directory' && (
              <p>
                <strong className="text-slate-950">الاكتشاف عبر الدليل:</strong>{' '}
                بالنسبة للورش ومراكز الصيانة والفنيين المسجلين في دليل المنظومة، يتيح لك التطبيق استعراض تخصصاتهم وبيانات التواصل أو الموقع للوصول إليهم بسهولة وقت الحاجة.
              </p>
            )}
          </div>

          {/* Four Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROADSIDE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0052CC]/60 rx-transition flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </span>
                    <span className="font-mono-tabular text-xs font-semibold text-slate-400">
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
                    أبرز الحالات:
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
              <span>خطوات الاستخدام · How It Works</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              تجربة واضحة من أول رحلة
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              لا توجد إعدادات معقدة؛ صُمم RoadX ليعمل بخطوات منطقية سواء كنت توثق طريقك اليومي أو تبحث عن خدمة لسيارتك.
            </p>
          </div>

          {/* Connected 4-Step Timeline */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-lg bg-[#0052CC] text-white font-mono-tabular font-bold text-sm flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="text-xs text-slate-400">
                      خطوة {idx + 1} من 4
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
                  <span>داخل تطبيق RoadX</span>
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
            {/* Right Column: Business Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold text-[#60A5FA]">
                <span>{BUSINESS_CONTENT.kicker}</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                {BUSINESS_CONTENT.title}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                {BUSINESS_CONTENT.description}
              </p>

              {/* 4 Provider Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {BUSINESS_CONTENT.categories.map((cat, idx) => (
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

              {/* Benefits List */}
              <ul className="space-y-2.5 pt-2 text-sm text-slate-300">
                {BUSINESS_CONTENT.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0075FF] shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectProviderRegistration('business_winch')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0043A8] text-white font-semibold text-sm rx-transition cursor-pointer whitespace-nowrap"
                >
                  <span>انضم كمقدم خدمة في RoadX Business</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigatePage('business')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rx-transition cursor-pointer whitespace-nowrap"
                >
                  <span>{BUSINESS_CONTENT.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Left Column: Dual Phone Showcase for RoadX Business */}
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
                  <span>{STORE_CONTENT.kicker}</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight">
                  {STORE_CONTENT.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {STORE_CONTENT.description}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-200/80">
                  {STORE_CONTENT.transparencyNote}
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {STORE_CONTENT.categoriesPreview.map((item, idx) => (
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
                      يُعرض داخل التطبيق وفق المتاح
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
