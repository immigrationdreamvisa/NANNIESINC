import React, { useState } from 'react';
import { PageId } from '../types';
import { EditorialVisual } from '../components/EditorialVisual';

interface NannyServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const NannyServicesPage: React.FC<NannyServicesPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'live-in' | 'live-out'>('live-in');

  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded">
              <span>In-Home Childcare Placement</span>
              <span>·</span>
              <span>Live-In & Live-Out</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-tight">
              Dedicated Childcare in the Comfort of Your Home.
            </h1>
            <p className="text-base sm:text-lg text-[#292E2C]/80 leading-relaxed max-w-xl">
              Nannies Inc. connects Canadian households with dependable, caring childcare professionals who understand your family's routines, values, and parenting philosophies.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('nanny')}
                className="px-6 py-3.5 bg-[#174C4B] hover:bg-[#0F3332] text-white text-sm font-medium rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                Find a Nanny for Your Family →
              </button>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="px-6 py-3.5 border border-[#174C4B]/25 hover:bg-white text-[#174C4B] text-sm font-medium rounded-lg transition-colors cursor-pointer"
              >
                Review Matching Steps
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-4 rounded-2xl border border-[#292E2C]/10 shadow-md">
              <EditorialVisual
                variant="nanny-care"
                imageSrc="/images/nanny-pathway.webp"
                imageAlt="Dedicated In-Home Childcare Canada"
                className="rounded-xl min-h-[300px]"
                caption="Experienced nannies tailored to infant, toddler, and school-age requirements."
              />
            </div>
          </div>

        </div>
      </section>

      {/* Live-in vs Live-out Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
            Arrangement Choices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1.5 tracking-tight">
            Live-In or Live-Out: Finding the Right Structure
          </h2>
          <p className="text-sm text-[#5F6864] mt-1">
            We guide you in determining which care model provides the most stability for your work hours and home environment.
          </p>
        </div>

        {/* Segmented Tab Bar */}
        <div className="flex gap-2 p-1.5 bg-[#DDE8DD]/50 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab('live-in')}
            className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'live-in'
                ? 'bg-[#174C4B] text-white shadow-xs'
                : 'text-[#292E2C] hover:text-[#174C4B]'
            }`}
          >
            Live-In Nanny Care
          </button>
          <button
            onClick={() => setActiveTab('live-out')}
            className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'live-out'
                ? 'bg-[#174C4B] text-white shadow-xs'
                : 'text-[#292E2C] hover:text-[#174C4B]'
            }`}
          >
            Live-Out Nanny Care
          </button>
        </div>

        {/* Tab Detail Cards */}
        {activeTab === 'live-in' ? (
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#174C4B]/20 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
                Full-Time Household Presence
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#174C4B]">
                Live-In Childcare Services
              </h3>
              <p className="text-sm text-[#292E2C]/80 leading-relaxed">
                A live-in nanny resides in a private room within your home and provides dependable, continuous childcare according to an agreed weekly schedule. This arrangement is ideal for households with demanding or non-standard work hours, early morning routines, or multiple young children.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#292E2C]">
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>Early morning routine flexibility</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>Reduced family commute stress</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>Requires private bedroom & accommodations</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>LMIA & Caregiver Program eligible</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#FAF8F3] p-6 rounded-xl text-center space-y-3 border border-[#292E2C]/8">
              <span className="text-xs text-[#5F6864] block">Ready to discuss live-in requirements?</span>
              <button
                onClick={() => onOpenInquiry('nanny')}
                className="w-full py-3 bg-[#174C4B] hover:bg-[#0F3332] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Inquire for Live-In Nanny →
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#174C4B]/20 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
                Scheduled Daytime Support
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#174C4B]">
                Live-Out Childcare Services
              </h3>
              <p className="text-sm text-[#292E2C]/80 leading-relaxed">
                A live-out nanny travels to your home each scheduled workday, offering dedicated childcare and routine management during set hours (e.g. 8:00 AM to 5:00 PM). This arrangement offers privacy in the evenings without requiring separate living quarters.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#292E2C]">
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>Structured business day coverage</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>No in-home bedroom requirement</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>Ideal for predictable weekly schedules</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAF8F3] p-2.5 rounded border border-[#292E2C]/5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>Local candidate availability</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#FAF8F3] p-6 rounded-xl text-center space-y-3 border border-[#292E2C]/8">
              <span className="text-xs text-[#5F6864] block">Need reliable daytime coverage?</span>
              <button
                onClick={() => onOpenInquiry('nanny')}
                className="w-full py-3 bg-[#174C4B] hover:bg-[#0F3332] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Inquire for Live-Out Nanny →
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Childcare Responsibilities */}
      <section className="bg-[#FAF8F3] py-16 border-y border-[#292E2C]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Scope of Responsibilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1.5 tracking-tight">
              What Does a Nanny Take Care Of?
            </h2>
            <p className="text-sm text-[#5F6864] mt-2">
              Every nanny position has an agreed scope of duties defined clearly in your placement agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-[#292E2C]/10 overflow-hidden space-y-3 group shadow-xs">
              <div className="h-44 w-full overflow-hidden bg-white">
                <img
                  src="/images/nanny-child-safety.jpg"
                  alt="Attentive Daily Child Care"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-serif text-lg text-[#174C4B] mb-1">Attentive Daily Care</h3>
                <p className="text-xs text-[#5F6864] leading-relaxed">
                  Supervision, naptime consistency, hygiene, safe diapering, and comforting emotional care.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#292E2C]/10 overflow-hidden space-y-3 group shadow-xs">
              <div className="h-44 w-full overflow-hidden bg-white">
                <img
                  src="/images/nanny-child-stimulation.jpg"
                  alt="Development & Enrichment"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-serif text-lg text-[#174C4B] mb-1">Development & Play</h3>
                <p className="text-xs text-[#5F6864] leading-relaxed">
                  Age-appropriate sensory play, reading books, songs, outdoor strolls, and creative engagement.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#292E2C]/10 overflow-hidden space-y-3 group shadow-xs">
              <div className="h-44 w-full overflow-hidden bg-white">
                <img
                  src="/images/nanny-meal-prep.jpg"
                  alt="Nutritious Meal Preparation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-serif text-lg text-[#174C4B] mb-1">Nutritious Meals</h3>
                <p className="text-xs text-[#5F6864] leading-relaxed">
                  Preparing balanced children’s breakfasts, school lunches, fruit snacks, and wholesome dinners.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#292E2C]/10 overflow-hidden space-y-3 group shadow-xs">
              <div className="h-44 w-full overflow-hidden bg-white">
                <img
                  src="/images/nanny-housekeeping.jpg"
                  alt="Child-Related Household Help"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 pt-1">
                <h3 className="font-serif text-lg text-[#174C4B] mb-1">Household Tidiness</h3>
                <p className="text-xs text-[#5F6864] leading-relaxed">
                  Children's laundry, tidying play areas, washing bottles and dishes, and nursery maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Screening Criteria */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#174C4B]/15">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Rigorous Vetting
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B]">
              How Candidates Are Evaluated
            </h2>
            <p className="text-sm text-[#292E2C]/80 leading-relaxed">
              We know that introducing someone to care for your children requires trust. Before presenting any candidate, Nannies Inc. conducts systematic screening:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#292E2C]/5">
              <span className="text-sm font-semibold text-[#174C4B] block mb-1">1. Personal Interview</span>
              <p className="text-xs text-[#5F6864]">In-depth discussion on childcare experience, personality, handling emergencies, and household manners.</p>
            </div>
            <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#292E2C]/5">
              <span className="text-sm font-semibold text-[#174C4B] block mb-1">2. Reference Verification</span>
              <p className="text-xs text-[#5F6864]">Direct phone verification with former employer families to confirm reliability, punctuality, and temperament.</p>
            </div>
            <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#292E2C]/5">
              <span className="text-sm font-semibold text-[#174C4B] block mb-1">3. CPR & First Aid</span>
              <p className="text-xs text-[#5F6864]">Verification of valid Canadian-recognized infant and child CPR and First Aid certifications.</p>
            </div>
            <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#292E2C]/5">
              <span className="text-sm font-semibold text-[#174C4B] block mb-1">4. Background Checks</span>
              <p className="text-xs text-[#5F6864]">Comprehensive criminal background screening and identification verification prior to introduction.</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#292E2C]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#5F6864]">
              Ready to meet experienced nannies matching your criteria?
            </p>
            <button
              onClick={() => onOpenInquiry('nanny')}
              className="px-6 py-3 bg-[#174C4B] hover:bg-[#0F3332] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Start Your Nanny Search
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
