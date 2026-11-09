import React, { useState } from 'react';
import { BRAND_ASSETS } from '../config/siteConfig';

interface BrandLogoProps {
  variant?: 'default' | 'inverse' | 'business';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'default',
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  const imgDimensions =
    size === 'sm'
      ? 'w-8 h-8'
      : size === 'lg'
      ? 'w-11 h-11'
      : 'w-9 h-9';

  const textClasses =
    size === 'sm'
      ? 'text-lg'
      : size === 'lg'
      ? 'text-2xl'
      : 'text-xl';

  const isDarkSurface = variant === 'inverse';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none">
      <span
        className={`${imgDimensions} rounded-lg bg-white border ${
          isDarkSurface ? 'border-white/15' : 'border-slate-200/80'
        } p-0.5 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs`}
      >
        {!imgError ? (
          <img
            src={BRAND_ASSETS.logoSquare}
            alt="شعار RoadX الرسمي"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain aspect-square"
          />
        ) : (
          <span className="font-display font-extrabold text-sm tracking-tight text-[#0052CC]">
            RX
          </span>
        )}
      </span>
      <span
        dir="ltr"
        className={`font-display font-bold tracking-tight ${textClasses} ${
          isDarkSurface ? 'text-white' : 'text-slate-950'
        }`}
      >
        Road<span className="text-[#0066FF]">X</span>
        {variant === 'business' && (
          <span className="font-medium text-sm text-slate-400 ms-1.5">
            Business
          </span>
        )}
      </span>
    </span>
  );
};
