import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { InquiryForm } from '../components/InquiryForm';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  defaultService?: 'nanny' | 'caregiver' | 'applicant';
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  defaultService = 'nanny',
}) => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded mb-4">
            <span>Client Consultation & Inquiries</span>
            <span>·</span>
            <span>Personal Placement Advisory</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-tight">
            Connect With Our Placement Team.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#292E2C]/80 leading-relaxed">
            Whether you are seeking in-home childcare, compassionate eldercare, or guidance on LMIA procedures, we are here to support your household.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Inquiry Form Component */}
          <div className="lg:col-span-7">
            <InquiryForm
              initialServiceType={defaultService}
              isEmbedded={true}
            />
          </div>

          {/* Right Column: Verified Office & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl overflow-hidden border border-[#292E2C]/10 h-48 bg-white shadow-xs">
              <img
                src="/images/family-care.jpg"
                alt="Nannies Inc. Canadian Office Support"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="bg-[#FAF8F3] p-8 rounded-2xl border border-[#174C4B]/15 space-y-6">
              <h3 className="font-serif text-2xl text-[#174C4B]">
                Direct Agency Contact
              </h3>
              
              <div className="space-y-4 text-sm text-[#292E2C]">
                <div>
                  <span className="text-xs font-semibold text-[#5F6864] uppercase tracking-wider block mb-1">
                    Telephone
                  </span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="font-serif text-xl text-[#174C4B] hover:text-[#0F3332] block"
                  >
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                  <span className="text-xs text-[#5F6864]">Monday – Friday: 9:00 AM – 6:00 PM EST</span>
                </div>

                <div className="pt-3 border-t border-[#292E2C]/8">
                  <span className="text-xs font-semibold text-[#5F6864] uppercase tracking-wider block mb-1">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="font-medium text-[#174C4B] hover:underline block"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                  <span className="text-xs text-[#5F6864]">Prompt responses within 1 business day</span>
                </div>

                <div className="pt-3 border-t border-[#292E2C]/8">
                  <span className="text-xs font-semibold text-[#5F6864] uppercase tracking-wider block mb-1">
                    Canadian Office Location
                  </span>
                  <p className="font-medium text-[#292E2C]">
                    {COMPANY_DETAILS.address}
                  </p>
                  <span className="text-xs text-[#5F6864]">Serving Ontario, Alberta & British Columbia</span>
                </div>
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/10 text-xs text-[#5F6864] space-y-2">
              <span className="font-semibold text-[#174C4B] block">Family Privacy & Discretion</span>
              <p className="leading-relaxed">
                We understand that home matters are personal. All details shared regarding your family, health needs, or schedule remain strictly confidential and will only be used to facilitate your care placement.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
