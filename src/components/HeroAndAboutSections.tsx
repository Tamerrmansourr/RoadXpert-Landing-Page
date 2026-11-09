import React, { useState } from 'react';
import {
  Download,
  Compass,
  Video,
  Eye,
  ShieldAlert,
  Wrench,
  Check,
  Info,
  ArrowLeft,
  Building2,
  MapPin,
  Phone,
  Globe,
  FileCheck,
} from 'lucide-react';
import {
  HERO_CONTENT,
  ABOUT_CONTENT,
  SAFETY_FEATURES,
  SAFETY_DISCLAIMER,
  COMPANY_LEGAL_INFO,
} from '../config/siteConfig';
import { HeroPhoneMockup, HeroScreenMode } from './PhoneMockup';

interface HeroAndAboutSectionsProps {
  onOpenDownloadModal: (appType: 'client' | 'business') => void;
}

export const HeroAndAboutSections: React.FC<HeroAndAboutSectionsProps> = ({
  onOpenDownloadModal,
}) => {
  const [heroMode, setHeroMode] = useState<HeroScreenMode>('dashcam');
  const [activeSafetyId, setActiveSafetyId] = useState<'dashcam' | 'drowsiness' | 'danger'>('dashcam');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* SECTION 02 — HERO */}
      <section
        id="hero"
        className="relative overflow-hidden bg-white bg-road-grid border-b border-slate-200/80 pt-10 pb-16 lg:pt-16 lg:pb-24"
      >
        {/* Subtle Architectural Road Curve SVG Background */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-48 text-slate-100"
          viewBox="0 0 1440 200"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 180 C420 60, 980 220, 1440 40"
            stroke="#0052CC"
            strokeOpacity="0.08"
            strokeWidth="3"
          />
          <path
            d="M0 195 C420 75, 980 235, 1440 55"
            stroke="#0F172A"
            strokeOpacity="0.06"
            strokeWidth="1.5"
            strokeDasharray="10 10"
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Right Column (RTL Primary Content) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet Unboxed Kicker (Zero-Pill Rule) */}
              <div className="text-xs sm:text-sm font-medium text-[#0052CC] tracking-normal">
                <span>{HERO_CONTENT.kicker}</span>
              </div>

              <h1 className="font-display font-extrabold text-slate-950 text-3xl sm:text-4xl lg:text-[46px] leading-[1.38] tracking-tight">
                <span className="block">{HERO_CONTENT.headlineLine1}</span>
                <span className="block text-[#0052CC] mt-2">
                  {HERO_CONTENT.headlineLine2}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {HERO_CONTENT.description}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenDownloadModal('client')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0043A8] active:bg-[#00368A] text-white font-semibold text-base shadow-sm rx-transition whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
                >
                  <Download className="w-5 h-5" />
                  <span>{HERO_CONTENT.primaryCta}</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('safety')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-900 font-semibold text-base rx-transition whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  <Compass className="w-5 h-5 text-[#0052CC]" />
                  <span>{HERO_CONTENT.secondaryCta}</span>
                </button>
              </div>

              {/* Interactive Capabilities Strip (Syncs with Hero Phone Mockup) */}
              <div className="pt-6 border-t border-slate-200/80">
                <p className="text-xs font-medium text-slate-500 mb-3">
                  اضغط لاستعراض وظائف التطبيق داخل شاشة المعاينة:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setHeroMode('dashcam')}
                    className={`text-right p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'dashcam'
                        ? 'bg-blue-50/70 border-[#0052CC] text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      تسجيل الطريق Dashcam مع Loop Recording
                    </span>
                    <Video className="w-4 h-4 text-[#0052CC] shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setHeroMode('drowsiness')}
                    className={`text-right p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'drowsiness'
                        ? 'bg-blue-50/70 border-[#0052CC] text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      تنبيهات المساعدة عند علامات النعاس بالـ AI
                    </span>
                    <Eye className="w-4 h-4 text-[#0052CC] shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setHeroMode('danger')}
                    className={`text-right p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'danger'
                        ? 'bg-red-50/70 border-red-600 text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      وضع الخطر لتوثيق المواقف ومشاركة التنبيهات
                    </span>
                    <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setHeroMode('services')}
                    className={`text-right p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'services'
                        ? 'bg-blue-50/70 border-[#0052CC] text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      الوصول لخدمات الونش والميكانيكا والكاوتش والكهرباء
                    </span>
                    <Wrench className="w-4 h-4 text-[#0052CC] shrink-0" />
                  </button>
                </div>
              </div>
            </div>

            {/* Left Column (Interactive Phone Visual) */}
            <div className="lg:col-span-5">
              <HeroPhoneMockup activeMode={heroMode} onModeChange={setHeroMode} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — ABOUT ROADX */}
      <section
        id="about"
        className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Editorial Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-medium text-[#0052CC]">
                <span>{ABOUT_CONTENT.kicker}</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                {ABOUT_CONTENT.title}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {ABOUT_CONTENT.lead}
              </p>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                <h3 className="font-display font-bold text-base text-slate-900">
                  {ABOUT_CONTENT.visionTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {ABOUT_CONTENT.visionBody}
                </p>
              </div>
            </div>
          </div>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_CONTENT.pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span
                      dir="ltr"
                      className="font-mono-tabular font-semibold text-[#0052CC] text-sm"
                    >
                      {pillar.index}
                    </span>
                    <span>{pillar.subtitle}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                  جزء أساسي من منظومة RoadX في مصر
                </div>
              </div>
            ))}
          </div>

          {/* Official Business & Legal Identity Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-medium text-[#0052CC] block">
                  البيانات الرسمية والشركة المالكة · Official Business Details
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">
                  تفاصيل النشاط التجاري المعتمد في مصر
                </h3>
              </div>
              <span
                dir="ltr"
                className="text-sm font-display font-bold text-slate-900"
              >
                {COMPANY_LEGAL_INFO.legalName}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <Building2 className="w-4 h-4 text-[#0052CC] shrink-0" />
                  <span>الاسم القانوني للنشاط التجاري</span>
                </div>
                <p
                  dir="ltr"
                  className="font-display font-bold text-slate-950 text-right"
                >
                  {COMPANY_LEGAL_INFO.legalName}
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-0.5">
                  <FileCheck className="w-3.5 h-3.5 text-[#0052CC] shrink-0" />
                  <span>المعرف الضريبي:</span>
                  <strong className="font-mono-tabular text-slate-800" dir="ltr">
                    {COMPANY_LEGAL_INFO.taxId}
                  </strong>
                </p>
              </div>

              <div className="space-y-1.5 lg:col-span-2">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <MapPin className="w-4 h-4 text-[#0052CC] shrink-0" />
                  <span>العنوان الإداري المعتمد</span>
                </div>
                <p className="text-slate-900 font-medium leading-relaxed">
                  {COMPANY_LEGAL_INFO.addressLine1}
                </p>
                <p className="text-slate-600 text-xs">
                  {COMPANY_LEGAL_INFO.addressLine2}
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Phone className="w-4 h-4 text-[#0052CC] shrink-0" />
                    <span>هاتف النشاط التجاري</span>
                  </div>
                  <a
                    href={COMPANY_LEGAL_INFO.phoneHref}
                    dir="ltr"
                    className="font-mono-tabular font-bold text-slate-950 hover:text-[#0052CC] block text-right rx-transition"
                  >
                    {COMPANY_LEGAL_INFO.phone}
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Globe className="w-4 h-4 text-[#0052CC] shrink-0" />
                    <span>موقع الويب الرسمي</span>
                  </div>
                  <a
                    href={COMPANY_LEGAL_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="font-mono-tabular font-semibold text-[#0052CC] hover:underline block text-right"
                  >
                    {COMPANY_LEGAL_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — SAFETY FEATURES */}
      <section
        id="safety"
        className="py-16 lg:py-24 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-medium text-[#0052CC]">
              <span>أدوات المساعدة والأمان · Driver Safety Suite</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              ثلاث أدوات ذكية لدعم انتباهك وتوثيق رحلتك
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              تتكامل ميزات السلامة داخل تطبيق RoadX لتحويل كاميرا الهاتف وحساساته إلى طبقة مساعدة عملية أثناء القيادة اليومية والسفر.
            </p>
          </div>

          {/* Three Integrated Safety Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SAFETY_FEATURES.map((feat) => {
              const isDanger = feat.id === 'danger';
              const isSelected = activeSafetyId === feat.id;

              return (
                <article
                  key={feat.id}
                  onClick={() => setActiveSafetyId(feat.id)}
                  className={`rounded-2xl p-6 border flex flex-col justify-between space-y-6 rx-transition cursor-pointer ${
                    isDanger
                      ? isSelected
                        ? 'bg-slate-950 text-white border-red-500/80'
                        : 'bg-slate-900 text-white border-slate-800 hover:border-red-500/50'
                      : isSelected
                      ? 'bg-slate-50/80 text-slate-900 border-[#0052CC]'
                      : 'bg-white text-slate-900 border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Metadata Line (Unboxed Text) */}
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`font-mono-tabular font-semibold ${
                          isDanger ? 'text-red-400' : 'text-[#0052CC]'
                        }`}
                      >
                        {feat.index} {feat.subtitle}
                      </span>
                      {feat.id === 'dashcam' && (
                        <Video className="w-5 h-5 text-[#0052CC]" />
                      )}
                      {feat.id === 'drowsiness' && (
                        <Eye className="w-5 h-5 text-[#0052CC]" />
                      )}
                      {feat.id === 'danger' && (
                        <ShieldAlert className="w-5 h-5 text-red-400" />
                      )}
                    </div>

                    <h3
                      className={`font-display font-bold text-xl ${
                        isDanger ? 'text-white' : 'text-slate-950'
                      }`}
                    >
                      {feat.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDanger ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {feat.description}
                    </p>

                    {/* Mini Interactive Interface Schematic inside each card */}
                    <div
                      className={`p-3.5 rounded-xl border text-xs space-y-2 ${
                        isDanger
                          ? 'bg-black/40 border-red-500/30 text-slate-200'
                          : 'bg-slate-50 border-slate-200/80 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between font-medium">
                        <span>واجهة توضيحية للميزة</span>
                        <span
                          className={
                            isDanger ? 'text-red-400' : 'text-[#0052CC]'
                          }
                        >
                          {feat.id === 'dashcam'
                            ? 'Loop · تلقائي'
                            : feat.id === 'drowsiness'
                            ? 'AI · تنبيه بصري/صوتي'
                            : 'طوارئ · حفظ سحابي'}
                        </span>
                      </div>
                      <ul className="space-y-1.5 pt-1">
                        {feat.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2">
                            <Check
                              className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                                isDanger ? 'text-red-400' : 'text-[#0052CC]'
                              }`}
                            />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technical Caveat Footer */}
                  <div
                    className={`pt-4 border-t text-xs leading-relaxed space-y-2 ${
                      isDanger
                        ? 'border-white/10 text-slate-400'
                        : 'border-slate-100 text-slate-500'
                    }`}
                  >
                    <p>{feat.technicalNote}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(
                          feat.id === 'danger' ? 'danger-mode' : 'dashcam-showcase'
                        );
                      }}
                      className={`inline-flex items-center gap-1 font-semibold underline cursor-pointer ${
                        isDanger ? 'text-red-300 hover:text-white' : 'text-[#0052CC] hover:text-slate-900'
                      }`}
                    >
                      <span>عرض التفاصيل التقنية</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mandatory Clear Safety Disclaimer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0052CC] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {SAFETY_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
