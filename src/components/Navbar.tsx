import React, { useState } from 'react';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import { NAVBAR_LINKS, PageView } from '../config/siteConfig';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPage: PageView;
  onNavigatePage: (page: PageView, sectionId?: string) => void;
  onOpenDownloadModal: (appType: 'client' | 'business') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigatePage,
  onOpenDownloadModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    setMobileMenuOpen(false);
    onNavigatePage('home', sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Original Logo (One Line) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label="RoadX الصفحة الرئيسية"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0052CC] rounded-md whitespace-nowrap shrink-0"
        >
          <BrandLogo size="md" />
        </a>

        {/* Zone 2: Primary Single-Line Navigation Links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {NAVBAR_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="py-1 text-slate-600 hover:text-[#0052CC] border-b-2 border-transparent hover:border-[#0052CC] rx-transition whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0052CC]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action Button + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {currentPage !== 'home' ? (
            <button
              type="button"
              onClick={() => onNavigatePage('home', 'hero')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg rx-transition whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onOpenDownloadModal('client')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0052CC] hover:bg-[#0043A8] active:bg-[#00368A] rounded-lg rx-transition whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052CC]"
            >
              <Download className="w-4 h-4" />
              <span>حمّل RoadX</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#0052CC] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg"
        >
          <nav aria-label="قائمة الموبايل" className="flex flex-col space-y-1">
            {NAVBAR_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-[#0052CC] rx-transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex flex-wrap gap-2 text-xs text-slate-500 px-3 pb-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigatePage('about');
                }}
                className="hover:text-[#0052CC] underline cursor-pointer"
              >
                صفحة من نحن
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigatePage('business');
                }}
                className="hover:text-[#0052CC] underline cursor-pointer"
              >
                صفحة RoadX Business
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigatePage('support');
                }}
                className="hover:text-[#0052CC] underline cursor-pointer"
              >
                الدعم
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal('client');
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#0052CC] text-white font-semibold text-sm text-center hover:bg-[#0043A8] cursor-pointer"
            >
              حمّل تطبيق RoadX
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
