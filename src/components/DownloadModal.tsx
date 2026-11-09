import React from 'react';
import { X, Smartphone, Briefcase, CheckCircle2, ArrowLeft } from 'lucide-react';
import { LAUNCH_CONFIG } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

interface DownloadModalProps {
  isOpen: boolean;
  appType: 'client' | 'business';
  onClose: () => void;
  onSwitchAppType: (type: 'client' | 'business') => void;
  onGoToContact: (role: 'driver' | 'business_winch') => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  appType,
  onClose,
  onSwitchAppType,
  onGoToContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <BrandLogo
            variant={appType === 'business' ? 'business' : 'default'}
            size="sm"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="w-9 h-9 rounded-lg text-slate-500 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Switcher between RoadX and RoadX Business */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => onSwitchAppType('client')}
            className={`py-2 px-3 rounded-lg text-xs font-semibold rx-transition cursor-pointer flex items-center justify-center gap-1.5 ${
              appType === 'client'
                ? 'bg-white text-[#0052CC] shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>تطبيق RoadX للعملاء</span>
          </button>
          <button
            type="button"
            onClick={() => onSwitchAppType('business')}
            className={`py-2 px-3 rounded-lg text-xs font-semibold rx-transition cursor-pointer flex items-center justify-center gap-1.5 ${
              appType === 'business'
                ? 'bg-white text-[#0052CC] shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>تطبيق RoadX Business</span>
          </button>
        </div>

        {appType === 'client' ? (
          <div className="space-y-4">
            <h2
              id="download-modal-title"
              className="font-display font-bold text-xl text-slate-950"
            >
              تحميل تطبيق RoadX للسائقين وأصحاب السيارات
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              يجمع التطبيق بين تسجيل الطريق (Dashcam)، تنبيهات النعاس بالذكاء الاصطناعي، وضع الخطر، والوصول إلى خدمات السيارات في مصر.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                <span>حالة روابط المتاجر الرسمية:</span>
              </div>
              <p>
                <strong>Android (Google Play):</strong> يتم ربط الزر برابط المتجر الرسمي فور اعتماده في إعدادات الإطلاق (`LAUNCH_CONFIG.googlePlayClientUrl`).
              </p>
              <p>
                <strong>iPhone (iOS):</strong> {LAUNCH_CONFIG.iosStatusText}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2
              id="download-modal-title"
              className="font-display font-bold text-xl text-slate-950"
            >
              تحميل تطبيق RoadX Business لمقدمي الخدمات
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              مخصص لأصحاب ومشغلي أوناش الإنقاذ، الميكانيكية، فنيي الكاوتش والإطارات، وكهربائية السيارات لاستقبال الطلبات المتاحة وإدارة العمل.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-[#0052CC]" />
                <span>حالة رابط RoadX Business:</span>
              </div>
              <p>
                يتم تفعيل رابط التحميل المباشر من المتجر فور إدراجه في (`LAUNCH_CONFIG.googlePlayBusinessUrl`)، ويمكنك الآن تسجيل بياناتك كمقدم خدمة للتواصل المباشر.
              </p>
            </div>
          </div>
        )}

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onGoToContact(
                appType === 'business' ? 'business_winch' : 'driver'
              );
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0052CC] hover:bg-[#0043A8] text-white font-semibold text-sm cursor-pointer"
          >
            <span>
              {appType === 'business'
                ? 'سجّل كمقدم خدمة في RoadX Business'
                : 'سجّل للحصول على رابط التحميل فور الإطلاق'}
            </span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
