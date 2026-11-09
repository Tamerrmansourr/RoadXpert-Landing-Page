import React, { useState } from 'react';
import {
  Video,
  RotateCw,
  FolderLock,
  Smartphone,
  ShieldAlert,
  CloudUpload,
  PhoneCall,
  AlertTriangle,
  SlidersHorizontal,
} from 'lucide-react';
import {
  DASHCAM_SHOWCASE_CONTENT,
  DANGER_MODE_CONTENT,
} from '../config/siteConfig';
import { calculateLoopCycle } from '../utils/validation';

export const DashcamAndDangerSections: React.FC = () => {
  const [segmentDuration, setSegmentDuration] = useState<1 | 3 | 5>(3);
  const [storageGb, setStorageGb] = useState<2 | 4 | 8>(4);
  const [backgroundSimActive, setBackgroundSimActive] = useState(true);

  const loopSim = calculateLoopCycle(segmentDuration, storageGb);

  return (
    <>
      {/* SECTION 05 — DASHCAM SHOWCASE */}
      <section
        id="dashcam-showcase"
        className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-medium text-[#0052CC]">
              <span>{DASHCAM_SHOWCASE_CONTENT.kicker}</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              {DASHCAM_SHOWCASE_CONTENT.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {DASHCAM_SHOWCASE_CONTENT.description}
            </p>
          </div>

          {/* Wide Interactive Showcase Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Right Column: Interactive Landscape Phone Dashcam & Loop Simulator */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6">
              {/* Top Bar of Simulator */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <span className="text-xs text-[#60A5FA] font-medium block">
                    معاينة تفاعلية غير مضللة · نظام إدارة التسجيلات
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    محاكي التسجيل الدوري (Loop Recording) والعمل في الخلفية
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setBackgroundSimActive((prev) => !prev)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold border rx-transition cursor-pointer whitespace-nowrap ${
                    backgroundSimActive
                      ? 'bg-[#0052CC] border-[#0066FF] text-white'
                      : 'bg-white/5 border-white/15 text-slate-300 hover:text-white'
                  }`}
                >
                  {backgroundSimActive
                    ? 'وضع الخلفية: نشط مع الخرائط'
                    : 'وضع الشاشة الكاملة: الكاميرا فقط'}
                </button>
              </div>

              {/* Landscape Phone Viewport Mockup */}
              <div className="rounded-2xl bg-[#090D16] border border-white/15 p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Road Viewfinder Illustration */}
                  <div className="sm:col-span-7 relative h-44 rounded-xl bg-slate-900 border border-white/10 overflow-hidden p-3 flex flex-col justify-between">
                    <svg
                      viewBox="0 0 400 180"
                      className="absolute inset-0 w-full h-full opacity-60"
                      aria-hidden="true"
                    >
                      <rect width="400" height="75" fill="#0B1120" />
                      <polygon
                        points="20,180 380,180 245,75 155,75"
                        fill="#1E293B"
                      />
                      <line
                        x1="155"
                        y1="75"
                        x2="35"
                        y2="180"
                        stroke="#0066FF"
                        strokeWidth="2"
                      />
                      <line
                        x1="245"
                        y1="75"
                        x2="365"
                        y2="180"
                        stroke="#0066FF"
                        strokeWidth="2"
                      />
                      <line
                        x1="200"
                        y1="80"
                        x2="200"
                        y2="180"
                        stroke="#F8FAFC"
                        strokeWidth="2.5"
                        strokeDasharray="12 10"
                      />
                    </svg>

                    <div className="relative z-10 flex items-center justify-between text-xs">
                      <span className="text-white font-semibold">
                        RoadX Dashcam · {backgroundSimActive ? 'تسجيل في الخلفية' : 'معاينة الكاميرا'}
                      </span>
                      <span className="font-mono-tabular text-slate-300">
                        {segmentDuration} min / مقطع
                      </span>
                    </div>

                    <div className="relative z-10 bg-slate-950/90 border border-white/10 rounded-lg p-2.5 flex items-center justify-between text-xs">
                      <span className="text-slate-300">
                        {backgroundSimActive
                          ? 'يعمل في الخلفية أثناء فتح الملاحة (حسب أذونات النظام)'
                          : 'عرض مباشر للطريق مع تقسيم تلقائي للمقاطع'}
                      </span>
                      <Video className="w-4 h-4 text-[#0075FF] shrink-0" />
                    </div>
                  </div>

                  {/* Segment Queue Visualization */}
                  <div className="sm:col-span-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>دورة المقاطع (Loop Queue)</span>
                      <RotateCw className="w-3.5 h-3.5 text-[#60A5FA]" />
                    </div>
                    <div className="space-y-1.5 font-mono-tabular text-xs">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-slate-400">
                        <span>Clip_01 ({segmentDuration}m)</span>
                        <span>يُستبدل عند الامتلاء</span>
                      </div>
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-between text-amber-200">
                        <span>Clip_02 ({segmentDuration}m)</span>
                        <span className="inline-flex items-center gap-1">
                          <FolderLock className="w-3 h-3" />
                          محمي
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0052CC]/25 border border-[#0066FF]/50 flex items-center justify-between text-white">
                        <span>Clip_03 ({segmentDuration}m)</span>
                        <span>قيد التسجيل</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Loop Settings Controls */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 flex items-center gap-1.5">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#60A5FA]" />
                      <span>مدة المقطع الواحد:</span>
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {([1, 3, 5] as const).map((min) => (
                        <button
                          key={min}
                          type="button"
                          onClick={() => setSegmentDuration(min)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-semibold cursor-pointer rx-transition ${
                            segmentDuration === min
                              ? 'bg-[#0052CC] text-white'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {min} {min === 1 ? 'دقيقة' : 'دقائق'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 block">
                      المساحة المخصصة للتسجيل الدوري:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {([2, 4, 8] as const).map((gb) => (
                        <button
                          key={gb}
                          type="button"
                          onClick={() => setStorageGb(gb)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-mono-tabular font-semibold cursor-pointer rx-transition ${
                            storageGb === gb
                              ? 'bg-[#0052CC] text-white'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {gb} GB
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculated Loop Summary */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 pt-1">
                <span>
                  سعة الدورة التقديرية:{' '}
                  <strong className="font-mono-tabular text-white">
                    ~{loopSim.estimatedActiveSegments} مقطع
                  </strong>{' '}
                  (حوالي{' '}
                  <strong className="font-mono-tabular text-white">
                    {loopSim.estimatedTotalLoopMinutes} دقيقة
                  </strong>{' '}
                  قبل تدوير أقدم مقطع غير محمي)
                </span>
                <span className="text-slate-400">
                  تقدير توضيحي يختلف حسب دقة كاميرا الهاتف
                </span>
              </div>
            </div>

            {/* Left Column: Detailed Explanations & Technical Constraints */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {DASHCAM_SHOWCASE_CONTENT.features.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2"
                  >
                    <h3 className="font-display font-bold text-base text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technical Constraints Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-sm">
                  <Smartphone className="w-4 h-4 text-[#0052CC]" />
                  <span>الأذونات والضوابط التقنية للتسجيل</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  {DASHCAM_SHOWCASE_CONTENT.technicalConstraints.map((note) => (
                    <li key={note} className="flex items-start gap-2">
                      <span className="text-[#0052CC] font-bold">·</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — DANGER MODE */}
      <section
        id="danger-mode"
        className="py-16 lg:py-24 bg-[#0B0F17] bg-road-grid-dark text-white border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header with Measured Crimson Accents */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-semibold text-red-400">
                <span>{DANGER_MODE_CONTENT.kicker}</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                {DANGER_MODE_CONTENT.title}
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {DANGER_MODE_CONTENT.subtitle}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-4 rounded-xl bg-red-950/35 border border-red-500/35 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-red-400 shrink-0" />
                <p className="text-xs text-red-100 leading-relaxed">
                  صُمم وضع الخطر لتأمين التسجيلات وإشعار جهات الطوارئ التي تحددها بنفسك داخل التطبيق، وفق الأذونات والاتصال المتاح.
                </p>
              </div>
            </div>
          </div>

          {/* Three Operational Pillars of Danger Mode */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DANGER_MODE_CONTENT.steps.map((item, idx) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#111622] border border-white/10 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      dir="ltr"
                      className="font-mono-tabular text-sm font-bold text-red-400"
                    >
                      {item.step}.
                    </span>
                    {idx === 0 && <FolderLock className="w-5 h-5 text-red-400" />}
                    {idx === 1 && <PhoneCall className="w-5 h-5 text-red-400" />}
                    {idx === 2 && <CloudUpload className="w-5 h-5 text-red-400" />}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs text-slate-400">
                  {idx === 0 && 'يعمل محليًا فور التفعيل داخل التطبيق'}
                  {idx === 1 && 'يتطلب تحديد جهات الاتصال مسبقًا ومنح الأذونات'}
                  {idx === 2 && 'يتطلب اتصالًا بالإنترنت وتفعيل الميزة بالحساب'}
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Scope & Limitations Box */}
          <div className="rounded-2xl bg-[#111622] border border-red-500/30 p-6 space-y-4">
            <div className="flex items-center gap-2.5 text-red-300 font-display font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
              <span>توضيح مهم حول حدود عمل وضع الخطر</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {DANGER_MODE_CONTENT.strictDisclaimers.map((disclaimer) => (
                <div
                  key={disclaimer}
                  className="p-4 rounded-xl bg-black/30 border border-white/10"
                >
                  {disclaimer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
