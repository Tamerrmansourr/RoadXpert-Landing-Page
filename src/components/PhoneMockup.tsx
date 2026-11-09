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

export type HeroScreenMode = 'dashcam' | 'drowsiness' | 'danger' | 'services';

interface HeroPhoneMockupProps {
  activeMode?: HeroScreenMode;
  onModeChange?: (mode: HeroScreenMode) => void;
}

export const HeroPhoneMockup: React.FC<HeroPhoneMockupProps> = ({
  activeMode: controlledMode,
  onModeChange,
}) => {
  const [internalMode, setInternalMode] = useState<HeroScreenMode>('dashcam');
  const mode = controlledMode ?? internalMode;

  const handleSelect = (next: HeroScreenMode) => {
    setInternalMode(next);
    onModeChange?.(next);
  };

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      {/* Mode Switcher Bar Above Phone (Interactive Segmented Buttons) */}
      <div
        role="tablist"
        aria-label="معاينة شاشات تطبيق RoadX"
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
          انتباه السائق
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
          وضع الخطر
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
          الخدمات
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
              <span className="font-display font-bold text-sm tracking-tight text-white">
                RoadX
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              معاينة توضيحية للواجهة
            </span>
          </div>

          {/* Screen Body by Mode */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            {mode === 'dashcam' && (
              <div className="space-y-4">
                {/* Road Perspective SVG Viewfinder */}
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
                    <span className="font-medium">Dashcam · تسجيل الطريق</span>
                    <span className="font-mono-tabular text-slate-300">
                      Loop · 03:00
                    </span>
                  </div>

                  <div className="relative z-10 bg-slate-950/85 border border-white/10 rounded-lg px-3 py-2 flex items-center justify-between text-xs">
                    <span className="text-slate-300">
                      التسجيل الدوري مفعل · يدعم الخلفية
                    </span>
                    <RotateCw className="w-3.5 h-3.5 text-[#0075FF] shrink-0" />
                  </div>
                </div>

                {/* Loop Recording & Trip Status */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#0075FF] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-white">
                        إدارة المقاطع تلقائيًا (Loop Recording)
                      </p>
                      <p className="text-slate-400 leading-relaxed">
                        يتم تقسيم الفيديو إلى مقاطع منتظمة واستبدال الأقدم غير المحمي عند امتلاء المساحة المخصصة.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Navigation className="w-4 h-4 text-[#0075FF] shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-white">
                        العمل في الخلفية وفق أذونات الجهاز
                      </p>
                      <p className="text-slate-400 leading-relaxed">
                        استمر في متابعة الخرائط أثناء تسجيل الرحلة بشرط تفعيل أذونات النظام.
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

                  {/* Driver Face Alignment Frame Illustration */}
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
                      تحليل مؤشرات انتباه العين والوجه عبر الكاميرا
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200">
                    تنبيه مساعد: عند رصد علامات نعاس متكررة، يصدر التطبيق تنبيهًا صوتيًا وبصريًا لتنبيه السائق.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 leading-relaxed">
                  أداة مساعدة لتعزيز الانتباه أثناء الرحلات، وتعتمد على زاوية تثبيت الهاتف والإضاءة ولا تغني عن الراحة الكافية.
                </div>
              </div>
            )}

            {mode === 'danger' && (
              <div className="space-y-4">
                <div className="rounded-xl bg-red-950/40 border border-red-500/40 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-300">
                      Danger Mode · وضع الخطر
                    </span>
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    تأمين فوري لتسجيل الفيديو الحالي مع تفعيل آليات إشعار جهات الطوارئ المحددة مسبقًا في حسابك.
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200 bg-black/30 p-2.5 rounded-lg border border-white/10">
                      <FolderLock className="w-4 h-4 text-red-400 shrink-0" />
                      <span>قفل المقطع المسجل لمنع الكتابة فوقه</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200 bg-black/30 p-2.5 rounded-lg border border-white/10">
                      <PhoneCall className="w-4 h-4 text-red-400 shrink-0" />
                      <span>تنبيه جهات الاتصال للطوارئ المختارة</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200 bg-black/30 p-2.5 rounded-lg border border-white/10">
                      <CloudUpload className="w-4 h-4 text-red-400 shrink-0" />
                      <span>حفظ سحابي (رهن الاتصال بالإنترنت والأذونات)</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed px-1">
                  ملاحظة: التطبيق لا يتصل تلقائيًا بالإسعاف أو الشرطة، ولا يضمن وصول المساعدة الميدانية.
                </p>
              </div>
            )}

            {mode === 'services' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 pb-1">
                  <span className="font-semibold text-white">خدمات الطريق والسيارات</span>
                  <span>اختر التخصص المطلوب</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <Truck className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">ونش إنقاذ</p>
                    <p className="text-[11px] text-slate-400">نقل ومساعدة على الطريق</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <Wrench className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">ميكانيكي</p>
                    <p className="text-[11px] text-slate-400">أعطال المحرك والصيانة</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <Disc className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">فني كاوتش</p>
                    <p className="text-[11px] text-slate-400">إطارات وضبط هواء</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <BatteryCharging className="w-4 h-4 text-[#0075FF]" />
                    <p className="text-xs font-bold text-white">كهربائي سيارات</p>
                    <p className="text-[11px] text-slate-400">بطارية ودينامو وضفيرة</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0052CC]/20 border border-[#0052CC]/40 text-xs text-slate-200 leading-relaxed">
                  متصل بمنظومة <span className="font-semibold text-white">RoadX Business</span> لربط السائق بمقدمي الخدمة المتاحين أو استعراضهم عبر الدليل.
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
                <span>الانتباه</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelect('danger')}
                className={`py-1.5 rounded-lg flex flex-col items-center gap-1 text-[10px] cursor-pointer ${
                  mode === 'danger' ? 'text-red-400 font-semibold' : 'text-slate-400'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>الخطر</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelect('services')}
                className={`py-1.5 rounded-lg flex flex-col items-center gap-1 text-[10px] cursor-pointer ${
                  mode === 'services' ? 'text-[#0075FF] font-semibold' : 'text-slate-400'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>الخدمات</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Dual Interactive Phone Showcase for RoadX Business (Service Providers)
 */
export const BusinessDualPhonesMockup: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'winch' | 'mechanic' | 'tires' | 'electrician'>('winch');

  const categoryLabels = {
    winch: { title: 'ونش إنقاذ', sampleTask: 'طلب نقل سيارة متعطلة — محور المشير / التجمع' },
    mechanic: { title: 'ميكانيكي سيارات', sampleTask: 'طلب فحص عطل حرارة محرك — مدينة نصر' },
    tires: { title: 'فني كاوتش وإطارات', sampleTask: 'طلب إصلاح إطار / تغيير استبن — الشيخ زايد' },
    electrician: { title: 'كهربائي سيارات', sampleTask: 'طلب فحص بطارية ودينامو — المعادي' },
  };

  return (
    <div className="space-y-4">
      {/* Interactive Provider Specialty Selector */}
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
                  RoadX Business · الطلبات
                </span>
                <span className="text-[11px] text-[#60A5FA]">
                  {categoryLabels[selectedCategory].title}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <p className="text-[11px] text-slate-400">نموذج توضيحي لطلب وارد</p>
                <p className="text-xs font-semibold text-white leading-relaxed">
                  {categoryLabels[selectedCategory].sampleTask}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-300">
                  <span>عرض تفاصيل الموقع والسيارة</span>
                  <span className="text-[#60A5FA] font-medium">متاح للرد</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <p className="text-xs font-medium text-slate-300">
                  تحديث حالة التفرغ والاستقبال
                </p>
                <p className="text-[11px] text-slate-400">
                  يتحكم مقدم الخدمة في أوقات استقبال الطلبات حسب تفرغه الفعلي.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
              <span>شاشة 01 · استقبال الطلبات</span>
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
                  RoadX Business · إدارة العمل
                </span>
                <span className="text-[11px] text-slate-400">متابعة التنفيذ</span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-[#0052CC]/20 border border-[#0052CC]/40 text-xs text-white">
                  1. مراجعة نوع العطل أو الخدمة المطلوبة
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                  2. قبول الطلب والتوجه أو التواصل مع العميل
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                  3. تحديث حالة الطلب عند إتمام الخدمة
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
              <span>شاشة 02 · تنظيم حالة الخدمة</span>
              <Wrench className="w-3.5 h-3.5 text-[#0075FF]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
