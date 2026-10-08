import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'nanny-services', label: 'Nanny Services' },
    { id: 'caregiver-services', label: 'Caregiver Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'locations', label: 'Locations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#292E2C]/8 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Official Logo (Teal version for light background) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer py-1"
            aria-label="Nannies Inc. Homepage"
          >
            <img
              src="/images/logo-dark.png"
              alt="Nannies Inc. Canada"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </button>

          {/* Zone 2: Navigation Links (Clean text links, single-line) */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[15px] font-medium tracking-normal transition-colors py-1 relative whitespace-nowrap cursor-pointer ${
                  currentPage === item.id
                    ? 'text-[#174C4B] font-semibold'
                    : 'text-[#292E2C]/80 hover:text-[#174C4B]'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#174C4B] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('careers')}
              className="text-xs font-medium text-[#5F6864] hover:text-[#174C4B] transition-colors whitespace-nowrap cursor-pointer px-2 py-1"
            >
              Looking for Work?
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#174C4B] rounded-md hover:bg-[#0F3332] active:scale-[0.98] transition-all shadow-sm whitespace-nowrap cursor-pointer"
            >
              Find Care
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenInquiry()}
              className="sm:hidden px-3 py-1.5 text-xs font-medium text-white bg-[#174C4B] rounded-md hover:bg-[#0F3332]"
            >
              Find Care
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-[#174C4B] hover:bg-[#DDE8DD]/40 focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F3] border-b border-[#292E2C]/10 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-2.5 px-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                currentPage === item.id
                  ? 'bg-[#DDE8DD] text-[#174C4B] font-semibold'
                  : 'text-[#292E2C] hover:bg-[#FAF8F3]/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#292E2C]/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-sm font-medium text-white bg-[#174C4B] rounded-md shadow-sm"
            >
              Find Care for Your Family
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className="w-full py-2.5 text-center text-sm font-medium text-[#174C4B] border border-[#174C4B]/20 rounded-md hover:bg-white"
            >
              Looking for Work as a Nanny or Caregiver?
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
