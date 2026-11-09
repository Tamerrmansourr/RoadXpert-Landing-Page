import React, { useState } from 'react';
import {
  Video,
  Eye,
  ShieldAlert,
  Wrench,
  CloudUpload,
  RotateCw,
  Navigation,
  PhoneCall,
  CheckCircle2,
  FolderLock,
  Layers,
  BatteryCharging,
  Disc,
  Truck,
} from 'lucide-react';
import { BRAND_ASSETS } from '../config/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export type HeroScreenMode = 'dashcam' | 'drowsiness' | 'danger' | 'services';

interface HeroPhoneMockupProps {
  activeMode?: HeroScreenMode;
  onModeChange?: (mode: HeroScreenMode) => void;
}

export const HeroPhoneMockup: React.FC<HeroPhoneMockupProps> = ({
  activeMode: controlledMode,
  onModeChange,
}) => {
  const { isRTL } = useLanguage();
  const [internalMode, setInternalMode] = useState<HeroScreenMode>('dashcam');
  const mode = controlledMode ?? internalMode;

  const handleSelect = (next: HeroScreenMode) => {
    setInternalMode(next);
    onModeChange?.(next);
  };

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      {/* Mode Switcher Bar Above Phone */}
      <div
        role="tablist"
        aria-label={isRTL ? 'معاينة شاشات تطبيق RoadX' : 'RoadX App Screen Preview'}
        className="mb-4 grid grid-cols-4 gap-1 p-1 bg-slate-100 border border-slate-200/80 rounded-xl"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'dashcam'}
          onClick={() => handleSelect('dashcam')}
          className={`py-2 px-2 rounded-lg text-xs font-semibold rx-transition whitespace-nowrap truncate cursor-pointer ${
            mode === 'dashcam'
              ? 'bg-white text-[#0052CC] shadow-2xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Dashcam
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'drowsiness'}
          onClick={() => handleSelect('drowsiness')}
          className={`py-2 px-2 rounded-lg text-xs font-semibold rx-transition whitespace-nowrap truncate cursor-pointer ${
            mode === 'drowsiness'
              ? 'bg-white text-[#0052CC] shadow-2xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {isRTL ? 'انتباه السائق' : 'AI Alert'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'danger'}
          onClick={() => handleSelect('danger')}
          className={`py-2 px-2 rounded-lg text-xs font-semibold rx-transition whitespace-nowrap truncate cursor-pointer ${
            mode === 'danger'
              ? 'bg-red-600 text-white shadow-2xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {isRTL ? 'وضع الخطر' : 'Danger'}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'services'}
          onClick={() => handleSelect('services')}
          className={`py-2 px-2 rounded-lg text-xs font-semibold rx-transition whitespace-nowrap truncate cursor-pointer ${
            mode === 'services'
              ? 'bg-white text-[#0052CC] shadow-2xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {isRTL ? 'الخدمات' : 'Services'}
        </button>
      </div>

      {/* Hardware Phone Frame */}
      <div className="rounded-[34px] bg-[#111317] p-3 shadow-xl border border-slate-800">
        {/* Inner Screen */}
        <div className="rounded-[24px] bg-[#0B0F17] text-white overflow-hidden border border-white/10 min-h-[470px] flex flex-col justify-between">
          {/* App Top Bar */}
          <div className="px-4 py-3 bg-[#111622] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={BRAND_ASSETS.logoSquare}
                alt="RoadX"
                referrerPolicy="no-referrer"
                className="w-6 h-6 rounded bg-white p-0.5 object-contain aspect-square"
              />
              <span dir="ltr" className="font-display font-bold text-sm tracking-tight text-white">
                RoadX
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              {isRTL ? 'معاينة توضيحية للواجهة' : 'Interactive UI Preview'}
            </span>
          </div>

          {/* Screen Body by Mode */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            {mode === 'dashcam' && (
              <div className="space-y-4">
                <div className="relative rounded-xl bg-slate-900 border border-white/10 h-48 overflow-hidden flex flex-col justify-between p-3">
                  <svg
                    viewBox="0 0 320 180"
                    className="absolute inset-0 w-full h-full opacity-55"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#1e293b" />
                      </linearGradient>
                    </defs>
                    <rect width="320" height="80" fill="#090D16" />
                    <polygon points="0,180 320,180 205,80 115,80" fill="url(#roadGrad)" />
                    <line
                      x1="115"
                      y1="80"
                      x2="18"
                      y2="180"
                      stroke="#0066FF"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                    />
                    <line
                      x1="205"
                      y1="80"
                      x2="302"
                      y2="180"
                      stroke="#0066FF"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                    />
                    <line
                      x1="160"
                      y1="84"
                      x2="160"
                      y2="180"
                      stroke="#F8FAFC"
                      strokeWidth="2.5"
                      strokeDasharray="10 8"
                      strokeOpacity="0.75"
                    />
                  </svg>

                  <div className="relative z-10 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-medium">
                      {isRTL ? 'Dashcam · تسجيل الطريق' : 'Dashcam · Road View'}
                    </span>
                    <span className="font-mono-tabular text-slate-300">
                      Loop · 03:00
                    </span>
                  </div>

                  <div className="relative z-10 bg-slate-950/85 border border-white/10 rounded-lg px-3 py-2 flex items-center justify-between text-xs">
                    <span className="text-slate-300">
                      {isRTL
                        ? 'التسجيل الدوري مفعل · يدعم الخلفية'
                        : 'Loop Recording Active · Background Ready'}
                    </span>
                    <RotateCw className="w-3.5 h-3.5 text-[#0075FF] shrink-0" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#0075FF] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-white">
                        {isRTL
                          ? 'إدارة المقاطع تلقائيًا (Loop Recording)'
                          : 'Automated Clip Cycling (Loop Recording)'}
                      </p>
                      <p className="text-slate-400 leading-relaxed">
                        {isRTL
                          ? 'يتم تقسيم الفيديو إلى مقاطع منتظمة واستبدال الأقدم غير المحمي عند امتلاء المساحة المخصصة.'
                          : 'Segments road video into fixed clips and overwrites the oldest unlocked clip when allocated storage is full.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Navigation className="w-4 h-4 text-[#0075FF] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-white">
                        {isRTL
                          ? 'العمل في الخلفية وفق أذونات الجهاز'
                          : 'Background Mode per Device Permissions'}
                      </p>
                      <p className="text-slate-400 leading-relaxed">
                        {isRTL
                          ? 'استمر في متابعة الخرائط أثناء تسجيل الرحلة بشرط تفعيل أذونات النظام.'
                          : 'Keep following navigation maps while recording trips when OS permissions are enabled.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {mode === 'drowsiness' && (
              <div className="space-y-4">
                <div className="rounded-xl bg-slate-900 border border-[#0052CC]/40 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#60A5FA]">
                      AI Drowsiness Monitoring
                    </span>
                    <Eye className="w-4 h-4 text-[#60A5FA]" />
                  </div>

                  <div className="h-32 rounded-lg bg-slate-950 border border-white/10 flex flex-col items-center justify-center p-3 text-center relative">
                    <svg
                      viewBox="0 0 120 80"
                      className="w-24 h-16 stroke-[#0075FF]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M25 20 V10 H38 M95 20 V10 H82 M25 60 V70 H38 M95 60 V70 H82"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <ellipse
                        cx="60"
                        cy="40"
                        rx="20"
                        ry="24"
                        stroke="#94A3B8"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line x1="49" y1="35" x2="55" y2="35" stroke="#60A5FA" strokeWidth="2" />
                      <line x1="65" y1="35" x2="71" y2="35" stroke="#60A5FA" strokeWidth="2" />
                    </svg>
                    <span className="text-[11px] text-slate-300 mt-1">
                      {isRTL
                        ? 'تحليل مؤشرات انتباه العين والوجه عبر الكاميرا'
                        : 'Camera-based eye & facial attention analysis'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200">
                    {isRTL
                      ? 'تنبيه مساعد: عند رصد علامات نعاس متكررة، يصدر التطبيق تنبيهًا صوتيًا وبصريًا لتنبيه السائق.'
                      : 'Assistive Alert: Issues audio & visual alerts when recurring signs of drowsiness are detected.'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                  {isRTL
                    ? 'أداة مساعدة لتعزيز الانتباه أثناء الرحلات، وتعتمد على زاوية تثبيت الهاتف والإضاءة ولا تغني عن الراحة الكافية.'
                    : 'An assistive alertness tool dependent on mounting angle and lighting; never a substitute for adequate rest.'}
                </div>
              </div>
            )}

            {mode === 'danger' && (
              <div className="space-y-4">
                <div className="rounded-xl bg-red-950/40 border border-red-500/40 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-300">
                      {isRTL ? 'Danger Mode · وضع الخطر' : 'Danger Mode · Emergency'}
                    </span>
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    {isRTL
                      ? 'تأمين فوري لتسجيل الفيديو الحالي مع تفعيل آليات إشعار جهات الطوارئ المحددة مسبقًا في حسابك.'
                      : 'Immediate protection for active video footage while triggering alerts to your pre-selected emergency contacts.'}
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200 bg-black/30 p-2.5 rounded-lg border border-white/10">
                      <FolderLock className="w-4 h-4 text-red-400 shrink-0" />
                      <span>
                        {isRTL
                          ? 'قفل المقطع المسجل لمنع الكتابة فوقه'
                          : 'Locks active video clip from loop overwrite'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200 bg-black/30 p-2.5 rounded-lg border border-white/10">
                      <PhoneCall className="w-4 h-4 text-red-400 shrink-0" />
                      <span>
                        {isRTL
                          ? 'تنبيه جهات الاتصال للطوارئ المختارة'
                          : 'Notifies user-selected emergency contacts'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200 bg-black/30 p-2.5 rounded-lg border border-white/10">
                      <CloudUpload className="w-4 h-4 text-red-400 shrink-0" />
                      <span>
                        {isRTL
                          ? 'حفظ سحابي (رهن الاتصال بالإنترنت والأذونات)'
                          : 'Cloud backup (subject to internet & permissions)'}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed px-1">
                  {isRTL
                    ? 'ملاحظة: التطبيق لا يتصل تلقائيًا بالإسعاف أو الشرطة، ولا يضمن وصول المساعدة الميدانية.'
                    : 'Note: The app does not automatically call police or ambulance and does not guarantee physical rescue.'}
                </p>
              </div>
            )}

            {mode === 'services' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 pb-1">
                  <span className="font-semibold text-white">
                    {isRTL ? 'خدمات الطريق والسيارات' : 'Roadside & Car Services'}
                  </span>
                  <span>{isRTL ? 'اختر التخصص المطلوب' : 'Select specialty'}</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <Truck className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">
                      {isRTL ? 'ونش إنقاذ' : 'Winch Recovery'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {isRTL ? 'نقل ومساعدة على الطريق' : 'Towing & roadside help'}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <Wrench className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">
                      {isRTL ? 'ميكانيكي' : 'Auto Mechanic'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {isRTL ? 'أعطال المحرك والصيانة' : 'Engine & repair'}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <Disc className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">
                      {isRTL ? 'فني كاوتش' : 'Tire Specialist'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {isRTL ? 'إطارات وضبط هواء' : 'Tires & air pressure'}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <BatteryCharging className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">
                      {isRTL ? 'كهربائي سيارات' : 'Auto Electrician'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {isRTL ? 'بطارية ودينامو وضفيرة' : 'Battery & electrical'}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0052CC]/20 border border-[#0052CC]/40 text-xs text-slate-200 leading-relaxed">
                  {isRTL ? (
                    <>
                      متصل بمنظومة <span className="font-semibold text-white">RoadX Business</span> لربط السائق بمقدمي الخدمة المتاحين أو استعراضهم عبر الدليل.
                    </>
                  ) : (
                    <>
                      Connected to <span className="font-semibold text-white">RoadX Business</span> to link drivers with available providers or directory listings.
                    </>
                  )}
                </div>
              </div>
            )}

            {/* App Bottom Navigation Bar */}
            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-4 gap-1 text-center">
              <button
                type="button"
                onClick={() => handleSelect('dashcam')}
                className={`py-1.5 rounded-lg flex flex-col items-center gap-1 text-[10px] cursor-pointer ${
                  mode === 'dashcam' ? 'text-[#0075FF] font-semibold' : 'text-slate-400'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Dashcam</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelect('drowsiness')}
                className={`py-1.5 rounded-lg flex flex-col items-center gap-1 text-[10px] cursor-pointer ${
                  mode === 'drowsiness' ? 'text-[#0075FF] font-semibold' : 'text-slate-400'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{isRTL ? 'الانتباه' : 'AI Alert'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelect('danger')}
                className={`py-1.5 rounded-lg flex flex-col items-center gap-1 text-[10px] cursor-pointer ${
                  mode === 'danger' ? 'text-red-400 font-semibold' : 'text-slate-400'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{isRTL ? 'الخطر' : 'Danger'}</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelect('services')}
                className={`py-1.5 rounded-lg flex flex-col items-center gap-1 text-[10px] cursor-pointer ${
                  mode === 'services' ? 'text-[#0075FF] font-semibold' : 'text-slate-400'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>{isRTL ? 'الخدمات' : 'Services'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BusinessDualPhonesMockup: React.FC = () => {
  const { isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<
    'winch' | 'mechanic' | 'tires' | 'electrician'
  >('winch');

  const categoryLabels = isRTL
    ? {
        winch: {
          title: 'ونش إنقاذ',
          sampleTask: 'طلب نقل سيارة متعطلة — محور المشير / التجمع',
        },
        mechanic: {
          title: 'ميكانيكي سيارات',
          sampleTask: 'طلب فحص عطل حرارة محرك — مدينة نصر',
        },
        tires: {
          title: 'فني كاوتش وإطارات',
          sampleTask: 'طلب إصلاح إطار / تغيير استبن — الشيخ زايد',
        },
        electrician: {
          title: 'كهربائي سيارات',
          sampleTask: 'طلب فحص بطارية ودينامو — المعادي',
        },
      }
    : {
        winch: {
          title: 'Winch Recovery',
          sampleTask: 'Vehicle towing request — El-Moshir Axis / New Cairo',
        },
        mechanic: {
          title: 'Auto Mechanic',
          sampleTask: 'Engine overheating inspection — Nasr City',
        },
        tires: {
          title: 'Tire Specialist',
          sampleTask: 'Tire repair / spare wheel mount — Sheikh Zayed',
        },
        electrician: {
          title: 'Auto Electrician',
          sampleTask: 'Battery & alternator check — Maadi',
        },
      };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 border border-white/10 rounded-xl">
        {(['winch', 'mechanic', 'tires', 'electrician'] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold rx-transition cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#0052CC] text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {categoryLabels[cat].title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone 1: Incoming Requests Screen */}
        <div className="rounded-[28px] bg-[#111317] p-2.5 border border-white/10">
          <div className="rounded-[20px] bg-[#0B0F17] p-4 space-y-3.5 border border-white/5 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="font-display font-bold text-xs text-white">
                  {isRTL ? 'RoadX Business · الطلبات' : 'RoadX Business · Requests'}
                </span>
                <span className="text-[11px] text-[#60A5FA]">
                  {categoryLabels[selectedCategory].title}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <p className="text-[11px] text-slate-400">
                  {isRTL ? 'نموذج توضيحي لطلب وارد' : 'Sample incoming service request'}
                </p>
                <p className="text-xs font-semibold text-white leading-relaxed">
                  {categoryLabels[selectedCategory].sampleTask}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-300">
                  <span>
                    {isRTL ? 'عرض تفاصيل الموقع والسيارة' : 'View location & vehicle details'}
                  </span>
                  <span className="text-[#60A5FA] font-medium">
                    {isRTL ? 'متاح للرد' : 'Available'}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <p className="text-xs font-medium text-slate-300">
                  {isRTL
                    ? 'تحديث حالة التفرغ والاستقبال'
                    : 'Availability & Receiving Status'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {isRTL
                    ? 'يتحكم مقدم الخدمة في أوقات استقبال الطلبات حسب تفرغه الفعلي.'
                    : 'Providers control when they receive requests based on real availability.'}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
              <span>
                {isRTL ? 'شاشة 01 · استقبال الطلبات' : 'Screen 01 · Incoming Feed'}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0075FF]" />
            </div>
          </div>
        </div>

        {/* Phone 2: Active Work Management Screen */}
        <div className="rounded-[28px] bg-[#111317] p-2.5 border border-white/10">
          <div className="rounded-[20px] bg-[#0B0F17] p-4 space-y-3.5 border border-white/5 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="font-display font-bold text-xs text-white">
                  {isRTL ? 'RoadX Business · إدارة العمل' : 'RoadX Business · Workflow'}
                </span>
                <span className="text-[11px] text-slate-400">
                  {isRTL ? 'متابعة التنفيذ' : 'Job Tracking'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-[#0052CC]/20 border border-[#0052CC]/40 text-xs text-white">
                  {isRTL
                    ? '1. مراجعة نوع العطل أو الخدمة المطلوبة'
                    : '1. Review issue type & requested service'}
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                  {isRTL
                    ? '2. قبول الطلب والتوجه أو التواصل مع العميل'
                    : '2. Accept request & coordinate with driver'}
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                  {isRTL
                    ? '3. تحديث حالة الطلب عند إتمام الخدمة'
                    : '3. Update job status upon completion'}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
              <span>
                {isRTL ? 'شاشة 02 · تنظيم حالة الخدمة' : 'Screen 02 · Status Management'}
              </span>
              <Wrench className="w-3.5 h-3.5 text-[#0075FF]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
