import React from 'react';
import { PageId } from '../types';
import { InquiryForm } from '../components/InquiryForm';
import { COMPANY_DETAILS } from '../data/companyData';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded mb-4">
              <span>Caregiver & Nanny Careers</span>
              <span>·</span>
              <span>Join Our Network</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-tight">
              Rewarding In-Home Placements With Canadian Families.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#292E2C]/80 leading-relaxed">
              Are you an experienced, compassionate childcare provider or eldercare companion? Nannies Inc. works to connect qualified caregivers with respectful, supportive households across Canada.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xs border border-[#292E2C]/10 h-64 bg-white">
              <img
                src="/images/caregiver-communication.jpg"
                alt="Canadian Caregiver Professional"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Benefits & Requirements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/10 space-y-3">
            <span className="text-2xl">🌱</span>
            <h3 className="font-serif text-lg text-[#174C4B]">Respectful Placements</h3>
            <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
              We match you with vetted families whose household needs, expectations, and compensation match your skills and experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/10 space-y-3">
            <span className="text-2xl">⚖️</span>
            <h3 className="font-serif text-lg text-[#174C4B]">Fair Labour Standards</h3>
            <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
              All placements follow written employment agreements adhering strictly to Canadian provincial Employment Standards and minimum wage legislation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/10 space-y-3">
            <span className="text-2xl">🤝</span>
            <h3 className="font-serif text-lg text-[#174C4B]">In-House Support</h3>
            <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
              Our placement coordinators and immigration specialists provide continuous guidance throughout your candidate application and transition.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
            Candidate Application
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#174C4B] mt-1">
            Submit Your Candidate Profile
          </h2>
          <p className="text-xs sm:text-sm text-[#5F6864] mt-1">
            Tell us about your caregiving experience and Canadian work status.
          </p>
        </div>

        <InquiryForm
          initialServiceType="applicant"
          isEmbedded={true}
        />
      </section>

    </div>
  );
};
