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
  ArrowRight,
  Building2,
  MapPin,
  Phone,
  Globe,
  FileCheck,
} from 'lucide-react';
import {
  HERO_CONTENT_BY_LANG,
  ABOUT_CONTENT_BY_LANG,
  SAFETY_FEATURES_BY_LANG,
  SAFETY_DISCLAIMER_BY_LANG,
  COMPANY_LEGAL_INFO,
} from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { HeroPhoneMockup, HeroScreenMode } from './PhoneMockup';

interface HeroAndAboutSectionsProps {
  onOpenDownloadModal: (appType: 'client' | 'business') => void;
}

export const HeroAndAboutSections: React.FC<HeroAndAboutSectionsProps> = ({
  onOpenDownloadModal,
}) => {
  const { lang, isRTL } = useLanguage();
  const [heroMode, setHeroMode] = useState<HeroScreenMode>('dashcam');
  const [activeSafetyId, setActiveSafetyId] = useState<
    'dashcam' | 'drowsiness' | 'danger'
  >('dashcam');

  const heroContent = HERO_CONTENT_BY_LANG[lang];
  const aboutContent = ABOUT_CONTENT_BY_LANG[lang];
  const safetyFeatures = SAFETY_FEATURES_BY_LANG[lang];
  const safetyDisclaimer = SAFETY_DISCLAIMER_BY_LANG[lang];

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
            {/* Primary Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs sm:text-sm font-medium text-[#0052CC] tracking-normal">
                <span>{heroContent.kicker}</span>
              </div>

              <h1 className="font-display font-extrabold text-slate-950 text-3xl sm:text-4xl lg:text-[46px] leading-[1.32] tracking-tight">
                <span className="block">{heroContent.headlineLine1}</span>
                <span className="block text-[#0052CC] mt-2">
                  {heroContent.headlineLine2}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {heroContent.description}
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenDownloadModal('client')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0043A8] active:bg-[#00368A] text-white font-semibold text-base shadow-sm rx-transition whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
                >
                  <Download className="w-5 h-5" />
                  <span>{heroContent.primaryCta}</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('safety')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-900 font-semibold text-base rx-transition whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  <Compass className="w-5 h-5 text-[#0052CC]" />
                  <span>{heroContent.secondaryCta}</span>
                </button>
              </div>

              {/* Interactive Capabilities Strip */}
              <div className="pt-6 border-t border-slate-200/80">
                <p className="text-xs font-medium text-slate-500 mb-3">
                  {heroContent.interactivePrompt}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setHeroMode('dashcam')}
                    className={`text-start p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'dashcam'
                        ? 'bg-blue-50/70 border-[#0052CC] text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      {heroContent.highlights.dashcam}
                    </span>
                    <Video className="w-4 h-4 text-[#0052CC] shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setHeroMode('drowsiness')}
                    className={`text-start p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'drowsiness'
                        ? 'bg-blue-50/70 border-[#0052CC] text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      {heroContent.highlights.drowsiness}
                    </span>
                    <Eye className="w-4 h-4 text-[#0052CC] shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setHeroMode('danger')}
                    className={`text-start p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'danger'
                        ? 'bg-red-50/70 border-red-600 text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      {heroContent.highlights.danger}
                    </span>
                    <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setHeroMode('services')}
                    className={`text-start p-3 rounded-xl border rx-transition flex items-center justify-between gap-3 cursor-pointer ${
                      heroMode === 'services'
                        ? 'bg-blue-50/70 border-[#0052CC] text-slate-950'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold">
                      {heroContent.highlights.services}
                    </span>
                    <Wrench className="w-4 h-4 text-[#0052CC] shrink-0" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Phone Visual Column */}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-medium text-[#0052CC]">
                <span>{aboutContent.kicker}</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
                {aboutContent.title}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {aboutContent.lead}
              </p>
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                <h3 className="font-display font-bold text-base text-slate-900">
                  {aboutContent.visionTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {aboutContent.visionBody}
                </p>
              </div>
            </div>
          </div>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutContent.pillars.map((pillar) => (
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
                  {aboutContent.pillarFooter}
                </div>
              </div>
            ))}
          </div>

          {/* Official Business & Legal Identity Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-medium text-[#0052CC] block">
                  {aboutContent.legalCard.kicker}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">
                  {aboutContent.legalCard.title}
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
                  <span>{aboutContent.legalCard.legalNameLabel}</span>
                </div>
                <p
                  dir="ltr"
                  className={`font-display font-bold text-slate-950 ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  {COMPANY_LEGAL_INFO.legalName}
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-0.5">
                  <FileCheck className="w-3.5 h-3.5 text-[#0052CC] shrink-0" />
                  <span>{aboutContent.legalCard.taxIdLabel}:</span>
                  <strong className="font-mono-tabular text-slate-800" dir="ltr">
                    {COMPANY_LEGAL_INFO.taxId}
                  </strong>
                </p>
              </div>

              <div className="space-y-1.5 lg:col-span-2">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <MapPin className="w-4 h-4 text-[#0052CC] shrink-0" />
                  <span>{aboutContent.legalCard.addressLabel}</span>
                </div>
                <p className="text-slate-900 font-medium leading-relaxed">
                  {isRTL
                    ? COMPANY_LEGAL_INFO.addressLine1
                    : COMPANY_LEGAL_INFO.addressLine1En}
                </p>
                <p className="text-slate-600 text-xs">
                  {isRTL
                    ? COMPANY_LEGAL_INFO.addressLine2
                    : COMPANY_LEGAL_INFO.addressLine2En}
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Phone className="w-4 h-4 text-[#0052CC] shrink-0" />
                    <span>{aboutContent.legalCard.phoneLabel}</span>
                  </div>
                  <a
                    href={COMPANY_LEGAL_INFO.phoneHref}
                    dir="ltr"
                    className={`font-mono-tabular font-bold text-slate-950 hover:text-[#0052CC] block rx-transition ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {COMPANY_LEGAL_INFO.phone}
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Globe className="w-4 h-4 text-[#0052CC] shrink-0" />
                    <span>{aboutContent.legalCard.websiteLabel}</span>
                  </div>
                  <a
                    href={COMPANY_LEGAL_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className={`font-mono-tabular font-semibold text-[#0052CC] hover:underline block ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
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
              <span>
                {isRTL
                  ? 'أدوات المساعدة والأمان · Driver Safety Suite'
                  : 'Driver Safety Suite · Assistive Protection'}
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              {isRTL
                ? 'ثلاث أدوات ذكية لدعم انتباهك وتوثيق رحلتك'
                : 'Three Smart Tools to Support Your Attention and Document Your Trip'}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {isRTL
                ? 'تتكامل ميزات السلامة داخل تطبيق RoadX لتحويل كاميرا الهاتف وحساساته إلى طبقة مساعدة عملية أثناء القيادة اليومية والسفر.'
                : 'Safety features inside the RoadX app work together to turn your smartphone camera and sensors into a practical assistive layer during daily commutes and travel.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {safetyFeatures.map((feat) => {
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
                    <div className="flex items-center justify-between text-xs">
                      <span
                        dir="ltr"
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

                    <div
                      className={`p-3.5 rounded-xl border text-xs space-y-2 ${
                        isDanger
                          ? 'bg-black/40 border-red-500/30 text-slate-200'
                          : 'bg-slate-50 border-slate-200/80 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between font-medium">
                        <span>
                          {isRTL ? 'واجهة توضيحية للميزة' : 'Key Capabilities'}
                        </span>
                        <span
                          className={
                            isDanger ? 'text-red-400' : 'text-[#0052CC]'
                          }
                        >
                          {feat.id === 'dashcam'
                            ? isRTL
                              ? 'Loop · تلقائي'
                              : 'Loop · Auto'
                            : feat.id === 'drowsiness'
                            ? isRTL
                              ? 'AI · تنبيه بصري/صوتي'
                              : 'AI · Audio/Visual'
                            : isRTL
                            ? 'طوارئ · حفظ سحابي'
                            : 'Emergency · Cloud'}
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
                        isDanger
                          ? 'text-red-300 hover:text-white'
                          : 'text-[#0052CC] hover:text-slate-900'
                      }`}
                    >
                      <span>
                        {isRTL ? 'عرض التفاصيل التقنية' : 'View Technical Details'}
                      </span>
                      {isRTL ? (
                        <ArrowLeft className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0052CC] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {safetyDisclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
