import React from 'react';
import { PageId } from '../types';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded mb-4">
              <span>Placement Process</span>
              <span>·</span>
              <span>Step-by-Step Transparency</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-tight">
              How Nannies Inc. Matches Families & Caregivers.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#292E2C]/80 leading-relaxed">
              Finding in-home care is a thoughtful process. Here is what you can anticipate from our initial conversation to your caregiver's first day in your home.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#292E2C]/10 h-64 bg-white">
              <img
                src="/images/hero-nanny-agency.webp"
                alt="Canadian Caregiver Placement Steps"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Checklist for Families */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] p-8 sm:p-10 rounded-3xl border border-[#174C4B]/15">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
            Before You Begin
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#174C4B] mt-1 mb-4">
            Family Preparation Checklist
          </h2>
          <p className="text-sm text-[#5F6864] mb-8 max-w-2xl leading-relaxed">
            To ensure the smoothest search, having clear household answers to the following questions will help us zero in on ideal candidates:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-[#292E2C]/8 space-y-2">
              <span className="text-sm font-semibold text-[#174C4B] block">1. Schedule & Routine</span>
              <p className="text-xs text-[#5F6864]">What are your essential morning and evening hours? Will you require weekend flexibility or travel support?</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#292E2C]/8 space-y-2">
              <span className="text-sm font-semibold text-[#174C4B] block">2. Living Accommodations</span>
              <p className="text-xs text-[#5F6864]">If seeking a live-in candidate, is a private, furnished bedroom with window and bathroom access prepared?</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#292E2C]/8 space-y-2">
              <span className="text-sm font-semibold text-[#174C4B] block">3. Primary Care Duties</span>
              <p className="text-xs text-[#5F6864]">What are the core daily responsibilities (e.g. newborn care, elder mobility, specialized cooking)?</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#292E2C]/8 space-y-2">
              <span className="text-sm font-semibold text-[#174C4B] block">4. Household Environment</span>
              <p className="text-xs text-[#5F6864]">Do you have family pets? Are there dietary restrictions, cultural preferences, or specific language requirements?</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#292E2C]/8 space-y-2">
              <span className="text-sm font-semibold text-[#174C4B] block">5. Driving & Transport</span>
              <p className="text-xs text-[#5F6864]">Will the caregiver need a valid driver's license for school drop-offs or senior medical appointments?</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-[#292E2C]/8 space-y-2">
              <span className="text-sm font-semibold text-[#174C4B] block">6. Target Start Date</span>
              <p className="text-xs text-[#5F6864]">When is care required? (Immediate local placement vs. planning ahead for parental leave return or LMIA).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed 5-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
            Placement Roadmap
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1 tracking-tight">
            The 5-Stage Placement Journey
          </h2>
          <p className="text-sm text-[#5F6864] mt-2">
            Every step is managed with attention to detail and adherence to Canadian standards.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              step: 'Stage 01',
              title: 'Personal Household Consultation',
              description: 'We begin with an in-depth phone or video discussion to review your household needs, care priorities, preferences, and timeline. We outline the placement fee structure and realistic timelines transparently.',
              outcome: 'Clear, documented household profile and job specification.',
            },
            {
              step: 'Stage 02',
              title: 'Candidate Pre-Screening & Document Review',
              description: 'Our team combs through our network of experienced childcare and eldercare providers. We verify past references, CPR certifications, background verifications, and Canadian work authorization.',
              outcome: 'A curated shortlist of qualified candidates aligned with your household criteria.',
            },
            {
              step: 'Stage 03',
              title: 'Family Interviews & Selection',
              description: 'You conduct private video or in-person interviews with your preferred candidates. We provide structured interview guidelines to help you evaluate chemistry, temperament, and practical experience.',
              outcome: 'You choose the candidate that feels like the right fit for your family.',
            },
            {
              step: 'Stage 04',
              title: 'Placement Agreement & Regulatory Guidance',
              description: 'We draft a comprehensive domestic employment agreement outlining working hours, duties, compensation, room and board parameters (if live-in), and statutory holidays. If hiring through federal caregiver streams, our in-house specialist guides your LMIA and ESDC paperwork.',
              outcome: 'Formal placement finalized with legal clarity and peace of mind.',
            },
            {
              step: 'Stage 05',
              title: 'Settling-In & Ongoing Support',
              description: 'We stay in contact during the first days and weeks to ensure the transition is smooth for both your household and the caregiver. We remain available for ongoing questions throughout the placement period.',
              outcome: 'A harmonious, long-lasting household care partnership.',
            },
          ].map((item, idx) => (
            <div
              key={item.step}
              className="bg-white p-8 rounded-2xl border border-[#292E2C]/10 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E58C78] block">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#174C4B] mt-1">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-6 text-sm text-[#292E2C]/80 leading-relaxed">
                {item.description}
              </div>
              <div className="md:col-span-3 bg-[#FAF8F3] p-4 rounded-xl border border-[#292E2C]/8 text-xs text-[#174C4B]">
                <strong className="block text-[#292E2C] mb-1">Key Milestone:</strong>
                {item.outcome}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Placement Expectations Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#174C4B] text-white p-8 sm:p-12 rounded-3xl space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DDE8DD]">
              Integrity & Realistic Expectations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Transparent Timelines & Thoughtful Matching
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              We never promise instant, overnight placements or unrealistic shortcuts. Because quality domestic care involves real people and sensitive family decisions, matching requires careful candidate verification and family consideration. Local placements generally proceed within several weeks, while federal LMIA and work permit pathways operate according to official government processing times.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenInquiry('nanny')}
              className="px-6 py-3.5 bg-white text-[#174C4B] hover:bg-[#FAF8F3] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Start Nanny Search
            </button>
            <button
              onClick={() => onOpenInquiry('caregiver')}
              className="px-6 py-3.5 bg-[#DDE8DD] text-[#174C4B] hover:bg-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Start Caregiver Search
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
