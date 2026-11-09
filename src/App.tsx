/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './config/siteConfig';
import { ContactInquiryInput } from './utils/validation';
import { Navbar } from './components/Navbar';
import { HeroAndAboutSections } from './components/HeroAndAboutSections';
import { DashcamAndDangerSections } from './components/DashcamAndDangerSections';
import { ServicesAndWorkflowSections } from './components/ServicesAndWorkflowSections';
import { WhyFaqAndCtaSections } from './components/WhyFaqAndCtaSections';
import { SubPagesView } from './components/SubPagesView';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') as PageView | null;
      if (
        pageParam &&
        ['home', 'about', 'business', 'privacy', 'terms', 'support'].includes(
          pageParam
        )
      ) {
        return pageParam;
      }
    }
    return 'home';
  });

  const [downloadModalState, setDownloadModalState] = useState<{
    isOpen: boolean;
    appType: 'client' | 'business';
  }>({
    isOpen: false,
    appType: 'client',
  });

  const [selectedContactRole, setSelectedContactRole] =
    useState<ContactInquiryInput['roleType']>('driver');

  const handleNavigatePage = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (page === 'home') {
        url.searchParams.delete('page');
      } else {
        url.searchParams.set('page', page);
      }
      window.history.pushState({}, '', url.toString());
    }

    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = (params.get('page') as PageView) || 'home';
      setCurrentPage(pageParam);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleSelectProviderRegistration = (specialty?: string) => {
    const role = (specialty as ContactInquiryInput['roleType']) || 'business_winch';
    setSelectedContactRole(role);
    handleNavigatePage('home', 'contact');
  };

  return (
    <div dir="rtl" lang="ar" className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* SECTION 01 — STICKY NAVBAR */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenDownloadModal={(appType) =>
          setDownloadModalState({ isOpen: true, appType })
        }
      />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* SECTIONS 02, 03, 04: Hero, About RoadX, Safety Features */}
            <HeroAndAboutSections
              onOpenDownloadModal={(appType) =>
                setDownloadModalState({ isOpen: true, appType })
              }
            />

            {/* SECTIONS 05, 06: Dashcam Showcase, Danger Mode */}
            <DashcamAndDangerSections />

            {/* SECTIONS 07, 08, 09, 10: Roadside Services, How It Works, RoadX Business, Store & Offers */}
            <ServicesAndWorkflowSections
              onNavigatePage={handleNavigatePage}
              onSelectProviderRegistration={handleSelectProviderRegistration}
            />

            {/* SECTIONS 11, 12, Contact, 13, 14: Why RoadX, FAQ, Contact, Final CTA, Footer */}
            <WhyFaqAndCtaSections
              onOpenDownloadModal={(appType) =>
                setDownloadModalState({ isOpen: true, appType })
              }
              onNavigatePage={handleNavigatePage}
              initialRoleType={selectedContactRole}
            />
          </>
        ) : (
          <>
            <SubPagesView
              page={currentPage}
              onNavigatePage={handleNavigatePage}
              onOpenDownloadModal={(appType) =>
                setDownloadModalState({ isOpen: true, appType })
              }
            />
            <WhyFaqAndCtaSections
              onOpenDownloadModal={(appType) =>
                setDownloadModalState({ isOpen: true, appType })
              }
              onNavigatePage={handleNavigatePage}
              initialRoleType={selectedContactRole}
            />
          </>
        )}
      </main>

      {/* APP DOWNLOAD & STORE READINESS MODAL */}
      <DownloadModal
        isOpen={downloadModalState.isOpen}
        appType={downloadModalState.appType}
        onClose={() =>
          setDownloadModalState((prev) => ({ ...prev, isOpen: false }))
        }
        onSwitchAppType={(appType) =>
          setDownloadModalState((prev) => ({ ...prev, appType }))
        }
        onGoToContact={(role) => {
          setSelectedContactRole(role);
          handleNavigatePage('home', 'contact');
        }}
      />
    </div>
  );
}
