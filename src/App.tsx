import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NannyServicesPage } from './pages/NannyServicesPage';
import { CaregiverServicesPage } from './pages/CaregiverServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<'nanny' | 'caregiver' | 'applicant'>('nanny');

  // Sync hash routing if user pastes or clicks anchor link
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (
        [
          'home',
          'about',
          'nanny-services',
          'caregiver-services',
          'how-it-works',
          'locations',
          'contact',
          'careers',
        ].includes(hash)
      ) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (serviceType: 'nanny' | 'caregiver' | 'applicant' = 'nanny') => {
    setModalService(serviceType);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#292E2C]">
      {/* Top Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentPage === 'nanny-services' && (
          <NannyServicesPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentPage === 'caregiver-services' && (
          <CaregiverServicesPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentPage === 'how-it-works' && (
          <HowItWorksPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentPage === 'locations' && (
          <LocationsPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            defaultService={modalService}
          />
        )}
        {currentPage === 'careers' && (
          <CareersPage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive Global Inquiry Wizard Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceType={modalService}
      />
    </div>
  );
}
