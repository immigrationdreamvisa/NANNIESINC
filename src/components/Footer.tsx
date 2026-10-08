import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS, PROVINCE_LOCATIONS } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#174C4B] text-[#FAF8F3] pt-16 pb-12 border-t border-[#123C3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none cursor-pointer block"
              aria-label="Nannies Inc. Homepage"
            >
              <img
                src="/images/logo.png"
                alt="Nannies Inc."
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </button>
            <p className="text-sm text-white/80 max-w-sm leading-relaxed">
              Personalized in-home nanny and elderly caregiver placements across Canada. Supporting families with thoughtful matching, screening, and guidance since 2001.
            </p>
            <div className="pt-2 text-xs text-white/70 space-y-1.5">
              <p className="flex items-center gap-2">
                <span className="text-[#E58C78]">📍</span>
                <span>{COMPANY_DETAILS.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#E58C78]">📞</span>
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#E58C78]">✉️</span>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DDE8DD]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-white transition-colors cursor-pointer text-left">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('locations')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Locations & Coverage
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-white transition-colors cursor-pointer text-left text-[#E58C78]">
                  Caregiver & Nanny Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DDE8DD]">
              Care Services
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button onClick={() => handleNav('nanny-services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  In-Home Nanny Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nanny-services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Live-In Childcare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('nanny-services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Live-Out Childcare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('caregiver-services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Senior Caregiver Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('caregiver-services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Companion & Respite Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-white transition-colors cursor-pointer text-left">
                  LMIA & Immigration Guidance
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DDE8DD]">
              Provinces Served
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <div>
                <span className="font-semibold text-white">Ontario:</span>
                <p className="text-white/60">Toronto, Vaughan, Mississauga, Ottawa, Markham, Oakville</p>
              </div>
              <div>
                <span className="font-semibold text-white">Alberta:</span>
                <p className="text-white/60">Calgary, Edmonton</p>
              </div>
              <div>
                <span className="font-semibold text-white">British Columbia:</span>
                <p className="text-white/60">Vancouver, Victoria, Surrey, Burnaby</p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleNav('locations')}
                  className="text-xs text-[#E58C78] hover:underline cursor-pointer"
                >
                  View all city service areas →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Nannies Inc. All rights reserved.</span>
            <span>·</span>
            <span>Canadian Owned & Operated Since 2001</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
              Our Agency Standards
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
              Privacy & Consent Notice
            </button>
            <a href="tel:4162760131" className="text-white/90 hover:text-white font-medium">
              Call (416) 276-0131
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
