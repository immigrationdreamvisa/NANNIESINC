import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { EditorialVisual } from '../components/EditorialVisual';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded mb-4">
            <span>About Nannies Inc.</span>
            <span>·</span>
            <span>Established 2001</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-tight">
            Matching Families With Care Built on Trust.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#292E2C]/80 leading-relaxed">
            For more than two decades, Nannies Inc. has guided Canadian households through the delicate process of selecting trusted in-home childcare and eldercare providers.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl text-[#174C4B]">
              Our Story & Founding Vision
            </h2>
            <p className="text-sm sm:text-base text-[#292E2C]/80 leading-relaxed">
              Founded in 2001 in Thornhill, Ontario, Nannies Inc. was established to bring peace of mind to families balancing career responsibilities and family life. We recognized that finding domestic help is not simply a business transaction—it is an intimate decision that alters the daily rhythm of a home.
            </p>
            <p className="text-sm sm:text-base text-[#292E2C]/80 leading-relaxed">
              Over the years, our agency has grown into a trusted placement service across Ontario, Alberta, and British Columbia. We assist families with both live-in and live-out childcare, eldercare companions, and Canadian Caregiver Program navigation with dedicated in-house immigration specialists.
            </p>
            <div className="pt-2 border-l-2 border-[#174C4B] pl-4 italic text-sm text-[#5F6864]">
              “We believe every child deserves gentle, nurturing guidance, and every elder deserves independence and dignity in the comfort of home.”
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/10 shadow-sm space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#292E2C]/5">
                  <span className="font-serif text-3xl text-[#174C4B] block font-bold">2001</span>
                  <span className="text-xs text-[#5F6864]">Founded in Ontario</span>
                </div>
                <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#292E2C]/5">
                  <span className="font-serif text-3xl text-[#174C4B] block font-bold">3 Provinces</span>
                  <span className="text-xs text-[#5F6864]">ON · AB · BC</span>
                </div>
              </div>
              <EditorialVisual
                variant="consultation"
                imageSrc="/images/family-care.jpg"
                imageAlt="Nannies Inc. Canadian Headquarters"
                className="rounded-xl min-h-[220px]"
                caption="Headquartered at 300 John St., Thornhill, ON L3T 5W4"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#FAF8F3] py-16 border-y border-[#292E2C]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Agency Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1.5 tracking-tight">
              Values That Guide Every Placement
            </h2>
            <p className="text-sm sm:text-base text-[#5F6864] mt-2">
              Our placement coordinators adhere to four fundamental principles in every candidate review and client meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Personal Attention',
                desc: 'We never rush families into hasty commitments. We take time to understand household culture, temperament, and schedules.',
              },
              {
                title: 'Dignity & Respect',
                desc: 'We hold both families and caregivers in high regard, fostering mutually beneficial and respectful working relationships.',
              },
              {
                title: 'Screening Rigor',
                desc: 'In-person interviews, detailed reference cross-referencing, CPR/First Aid validation, and background verifications.',
              },
              {
                title: 'Regulatory Compliance',
                desc: 'Complete adherence to Canadian employment standards, provincial labour codes, and ESDC LMIA guidelines.',
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#292E2C]/10 shadow-xs space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#DDE8DD] text-[#174C4B] flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-lg text-[#174C4B]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory & Immigration Care Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#174C4B]/15 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Canadian Caregiver Program & LMIA Expertise
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#174C4B]">
              Navigating In-Home Care Legislation With Confidence
            </h2>
            <p className="text-sm text-[#292E2C]/80 leading-relaxed">
              When families need full-time live-in assistance and explore candidates through federal pathways, administrative requirements can seem daunting. Nannies Inc. works alongside an in-house immigration specialist to assist Canadian families with Labour Market Impact Assessment (LMIA) requirements, employment contracts, and ESDC documentation.
            </p>
            <p className="text-xs text-[#5F6864] leading-relaxed">
              *Please note: Nannies Inc. adheres to all ESDC, IRCC, and provincial statutory employment guidelines. We provide transparent advice and do not guarantee immigration outcomes or visa approvals.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenInquiry('nanny')}
              className="px-6 py-3 bg-[#174C4B] hover:bg-[#0F3332] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
            >
              Discuss Childcare Options
            </button>
            <button
              onClick={() => onOpenInquiry('caregiver')}
              className="px-6 py-3 bg-[#DDE8DD] hover:bg-[#BACDBA] text-[#174C4B] text-xs font-medium rounded-lg transition-colors cursor-pointer"
            >
              Discuss Eldercare Needs
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-[#292E2C]/15 text-[#292E2C] hover:bg-[#FAF8F3] text-xs font-medium rounded-lg transition-colors cursor-pointer"
            >
              Contact Our Ontario Office
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
