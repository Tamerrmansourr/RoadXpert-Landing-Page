import React from 'react';
import {
  ArrowRight,
  Shield,
  FileText,
  Briefcase,
  HelpCircle,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import {
  PageView,
  ABOUT_CONTENT_BY_LANG,
  BUSINESS_CONTENT_BY_LANG,
  LAUNCH_CONFIG,
  SAFETY_DISCLAIMER_BY_LANG,
  COMPANY_LEGAL_INFO,
} from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { BusinessDualPhonesMockup } from './PhoneMockup';

interface SubPagesViewProps {
  page: Exclude<PageView, 'home'>;
  onNavigatePage: (page: PageView, sectionId?: string) => void;
  onOpenDownloadModal: (appType: 'client' | 'business') => void;
}

export const SubPagesView: React.FC<SubPagesViewProps> = ({
  page,
  onNavigatePage,
  onOpenDownloadModal,
}) => {
  const { lang, isRTL } = useLanguage();
  const aboutContent = ABOUT_CONTENT_BY_LANG[lang];
  const businessContent = BUSINESS_CONTENT_BY_LANG[lang];
  const safetyDisclaimer = SAFETY_DISCLAIMER_BY_LANG[lang];

  return (
    <div className="min-h-[80vh] bg-slate-50 py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Sub-page Breadcrumb & Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <button
              type="button"
              onClick={() => onNavigatePage('home')}
              className="hover:text-[#0052CC] font-semibold cursor-pointer"
            >
              {lang === 'en' ? 'Home' : 'الرئيسية'}
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-slate-950 font-semibold">
              {page === 'about' && (lang === 'en' ? 'About RoadX' : 'عن RoadX (من نحن)')}
              {page === 'business' && (lang === 'en' ? 'RoadX Business Ecosystem' : 'منظومة RoadX Business')}
              {page === 'privacy' && (lang === 'en' ? 'Privacy Policy & Permissions' : 'سياسة الخصوصية والأذونات')}
              {page === 'terms' && (lang === 'en' ? 'Terms of Use' : 'شروط الاستخدام')}
              {page === 'support' && (lang === 'en' ? 'Support & Launch Readiness' : 'الدعم الفني وجاهزية الإطلاق')}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: 'about', label: lang === 'en' ? 'About Us' : 'من نحن' },
                { id: 'business', label: 'RoadX Business' },
                { id: 'privacy', label: lang === 'en' ? 'Privacy' : 'الخصوصية' },
                { id: 'terms', label: lang === 'en' ? 'Terms' : 'الشروط' },
                { id: 'support', label: lang === 'en' ? 'Support' : 'الدعم' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onNavigatePage(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer rx-transition ${
                  page === tab.id
                    ? 'bg-[#0052CC] text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ABOUT PAGE */}
        {page === 'about' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#0052CC] text-xs font-semibold">
                <Building2 className="w-4 h-4" />
                <span>
                  {lang === 'en'
                    ? 'Company & Ecosystem · Egypt'
                    : 'عن الشركة والمنظومة · مصر'}
                </span>
              </div>
              <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950">
                {aboutContent.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                {aboutContent.lead}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h2 className="font-display font-bold text-lg text-slate-950">
                {aboutContent.visionTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {aboutContent.visionBody}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutContent.pillars.map((p) => (
                <div
                  key={p.index}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <span
                    dir="ltr"
                    className="font-mono-tabular font-bold text-sm text-[#0052CC] inline-block"
                  >
                    {p.index}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-950">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Legal & Business Details in About Page */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <h2 className="font-display font-bold text-lg text-slate-950">
                {lang === 'en'
                  ? 'Official Business & Corporate Details'
                  : 'تفاصيل النشاط التجاري والشركة المالكة'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <span className="text-xs text-slate-500 block">
                    {lang === 'en'
                      ? 'Legal Business Name'
                      : 'الاسم القانوني للنشاط التجاري'}
                  </span>
                  <p
                    dir="ltr"
                    className={`font-display font-bold text-slate-950 ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {COMPANY_LEGAL_INFO.legalName}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <span className="text-xs text-slate-500 block">
                    {lang === 'en' ? 'Tax ID' : 'المعرف الضريبي'}
                  </span>
                  <p
                    dir="ltr"
                    className={`font-mono-tabular font-bold text-slate-950 ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {COMPANY_LEGAL_INFO.taxId}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1 sm:col-span-2">
                  <span className="text-xs text-slate-500 block">
                    {lang === 'en' ? 'Registered Address' : 'العنوان'}
                  </span>
                  <p className="font-medium text-slate-900">
                    {lang === 'en'
                      ? COMPANY_LEGAL_INFO.addressLine1En
                      : COMPANY_LEGAL_INFO.addressLine1}
                  </p>
                  <p className="text-xs text-slate-600">
                    {lang === 'en'
                      ? COMPANY_LEGAL_INFO.addressLine2En
                      : COMPANY_LEGAL_INFO.addressLine2}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <span className="text-xs text-slate-500 block">
                    {lang === 'en' ? 'Business Phone' : 'هاتف النشاط التجاري'}
                  </span>
                  <a
                    href={COMPANY_LEGAL_INFO.phoneHref}
                    dir="ltr"
                    className={`font-mono-tabular font-bold text-[#0052CC] hover:underline block ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {COMPANY_LEGAL_INFO.phone}
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                  <span className="text-xs text-slate-500 block">
                    {lang === 'en' ? 'Website' : 'موقع الويب'}
                  </span>
                  <a
                    href={COMPANY_LEGAL_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className={`font-mono-tabular font-bold text-[#0052CC] hover:underline block ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {COMPANY_LEGAL_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ROADX BUSINESS DEDICATED PAGE */}
        {page === 'business' && (
          <div className="space-y-8">
            <div className="bg-[#0B0F17] text-white rounded-2xl border border-slate-800 p-6 sm:p-10 space-y-8">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2 text-[#60A5FA] text-xs font-semibold">
                  <Briefcase className="w-4 h-4" />
                  <span>
                    {lang === 'en'
                      ? 'Dedicated Service Providers Portal · RoadX Business'
                      : 'صفحة خاصة بمقدمي الخدمات · RoadX Business'}
                  </span>
                </div>
                <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
                  {businessContent.title}
                </h1>
                <p className="text-base text-slate-300 leading-relaxed">
                  {businessContent.description}
                </p>
              </div>

              <BusinessDualPhonesMockup />

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'contact')}
                  className="px-6 py-3 rounded-xl bg-[#0052CC] hover:bg-[#0043A8] text-white font-semibold text-sm cursor-pointer"
                >
                  {lang === 'en'
                    ? 'Register as a Service Provider Now'
                    : 'سجّل بياناتك كمقدم خدمة الآن'}
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDownloadModal('business')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm cursor-pointer"
                >
                  {lang === 'en'
                    ? 'RoadX Business App Download Status'
                    : 'حالة تحميل تطبيق RoadX Business'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PRIVACY POLICY PAGE */}
        {page === 'privacy' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0052CC] text-xs font-semibold">
                <Shield className="w-4 h-4" />
                <span>
                  {lang === 'en'
                    ? 'Privacy & Device Permissions'
                    : 'الخصوصية وأذونات الجهاز'}
                </span>
              </div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
                {lang === 'en'
                  ? 'Privacy Policy & Device Permissions in RoadX'
                  : 'سياسة الخصوصية واستخدام الأذونات في RoadX'}
              </h1>
              <p className="text-xs text-slate-500">
                {lang === 'en'
                  ? 'A transparent framework explaining how the RoadX ecosystem handles camera, location, and recordings.'
                  : 'إطار شفاف لكيفية تعامل منظومة RoadX مع الكاميرا والموقع والتسجيلات (يُستكمل بالنص القانوني المعتمد قبل النشر).'}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h2 className="font-display font-bold text-base text-slate-950">
                  {lang === 'en'
                    ? '1. Camera & Video Recording Permission (Dashcam & AI Drowsiness)'
                    : '1. إذن الكاميرا والتسجيل (Dashcam & AI Drowsiness)'}
                </h2>
                <p>
                  {lang === 'en'
                    ? 'RoadX uses your smartphone camera to record road footage (Dashcam) and analyze drowsiness and attention indicators while activated by the driver. Loop recording clips are stored locally on the device according to your configured storage limit, and video clips are only uploaded to the cloud when Danger Mode cloud backup is triggered with user consent and permissions.'
                    : 'يستخدم تطبيق RoadX كاميرا الهاتف لتسجيل فيديو الطريق (Dashcam) وتحليل مؤشرات الانتباه والنعاس أثناء تفعيل الميزة من قبل السائق. تُحفظ مقاطع التسجيل الدوري محليًا على الجهاز وفق المساحة المحددة، ولا يتم رفع مقاطع الفيديو سحابيًا إلا عند تفعيل ميزة الحفظ السحابي في وضع الخطر وبموافقة المستخدم وأذوناته.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h2 className="font-display font-bold text-base text-slate-950">
                  {lang === 'en'
                    ? '2. Location Permission (Location Services)'
                    : '2. إذن الموقع الجغرافي (Location Services)'}
                </h2>
                <p>
                  {lang === 'en'
                    ? 'Location data is used to connect drivers with the nearest available roadside services (winch, mechanics, tires, automotive electrical) and to share coordinates with pre-selected emergency contacts when Danger Mode is activated.'
                    : 'يُستخدم الموقع الجغرافي لربط السائق بأقرب خدمات الطريق المتاحة (الونش، الميكانيكا، الكاوتش، الكهرباء) وكذلك لمشاركة الموقع مع جهات اتصال الطوارئ المحددة مسبقًا عند تفعيل وضع الخطر.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h2 className="font-display font-bold text-base text-slate-950">
                  {lang === 'en'
                    ? '3. Service Provider Data in RoadX Business'
                    : '3. بيانات مقدمي الخدمات في RoadX Business'}
                </h2>
                <p>
                  {lang === 'en'
                    ? 'Service provider details (specialty, coverage area, and professional contact information) are used to display available providers within the ecosystem and enable drivers to request assistance.'
                    : 'تُستخدم بيانات مقدمي الخدمات (التخصص، نطاق التغطية، وبيانات التواصل المهنية) لعرضها ضمن المنظومة وتمكين العملاء من طلب الخدمة أو الوصول إليها.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TERMS OF USE PAGE */}
        {page === 'terms' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0052CC] text-xs font-semibold">
                <FileText className="w-4 h-4" />
                <span>
                  {lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
                </span>
              </div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
                {lang === 'en'
                  ? 'Terms of Use & Technical Liability Scope'
                  : 'شروط الاستخدام وحدود المسؤولية التقنية'}
              </h1>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950">
                {safetyDisclaimer}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h2 className="font-display font-bold text-base text-slate-950">
                  {lang === 'en'
                    ? 'Nature of Emergency Services & Danger Mode'
                    : 'طبيعة خدمات الطوارئ ووضع الخطر'}
                </h2>
                <p>
                  {lang === 'en'
                    ? 'Danger Mode is not a replacement for contacting official government emergency services (ambulance or police), nor does it automatically place calls to them. Cloud backup and alert notifications depend on active internet connectivity and granted device permissions.'
                    : 'وضع الخطر (Danger Mode) لا يُعد بديلاً عن الاتصال بجهات الطوارئ الحكومية الرسمية (الإسعاف أو النجدة)، ولا يقوم بالاتصال التلقائي بها، كما يعتمد الحفظ السحابي وإرسال التنبيهات على توفر شبكة الإنترنت وصلاحيات الجهاز.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <h2 className="font-display font-bold text-base text-slate-950">
                  {lang === 'en'
                    ? 'Relationship Between Drivers & Service Providers (RoadX Business)'
                    : 'العلاقة بين السائقين ومقدمي الخدمات (RoadX Business)'}
                </h2>
                <p>
                  {lang === 'en'
                    ? 'The platform operates as a digital technology bridge connecting car owners with automotive service providers. Field service execution follows the direct service parameters and standards outlined inside the application.'
                    : 'تعمل المنظومة كجسر تقني يربط أصحاب السيارات بمقدمي خدمات السيارات، وتخضع تفاصيل تنفيذ الخدمة الميدانية للاتفاق المباشر ومعايير الخدمة الموضحة داخل التطبيق.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUPPORT & LAUNCH READINESS PAGE */}
        {page === 'support' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0052CC] text-xs font-semibold">
                <HelpCircle className="w-4 h-4" />
                <span>
                  {lang === 'en'
                    ? 'Technical Support · Launch Readiness Checklist'
                    : 'الدعم الفني · قائمة جاهزية الإطلاق'}
                </span>
              </div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-950">
                {lang === 'en'
                  ? 'Support Center & Pre-Launch Configuration Checklist'
                  : 'مركز الدعم والبيانات المطلوب استكمالها قبل الإطلاق الرسمي'}
              </h1>
              <p className="text-sm text-slate-600">
                {lang === 'en'
                  ? 'This page outlines official support channels along with the configuration items in (`src/config/siteConfig.ts`) to finalize prior to store release.'
                  : 'توضح هذه الصفحة قنوات الدعم المعتمدة، بالإضافة إلى قائمة البيانات الرسمية التي يتم إدراجها في ملف الإعدادات (`src/config/siteConfig.ts`) قبل النشر النهائي.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <h2 className="font-display font-bold text-base text-slate-950">
                {lang === 'en'
                  ? 'Pre-Launch Checklist'
                  : 'البيانات التي تحتاج استكمالًا قبل إطلاق الموقع (Pre-Launch Checklist)'}
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {(lang === 'en'
                  ? LAUNCH_CONFIG.missingDataChecklistEn
                  : LAUNCH_CONFIG.missingDataChecklist
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigatePage('home', 'contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0052CC] text-white text-sm font-semibold cursor-pointer"
              >
                <span>
                  {lang === 'en'
                    ? 'Go to Direct Contact Form'
                    : 'الانتقال إلى نموذج التواصل المباشر'}
                </span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
