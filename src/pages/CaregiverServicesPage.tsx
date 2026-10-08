import React from 'react';
import { PageId } from '../types';
import { EditorialVisual } from '../components/EditorialVisual';

interface CaregiverServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const CaregiverServicesPage: React.FC<CaregiverServicesPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded">
              <span>Elderly & Senior In-Home Support</span>
              <span>·</span>
              <span>Dignity & Comfort</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-tight">
              Compassionate In-Home Support for Aging Loved Ones.
            </h1>
            <p className="text-base sm:text-lg text-[#292E2C]/80 leading-relaxed max-w-xl">
              Preserving independence, familiar comforts, and personal dignity through dedicated daily companionship and attentive household assistance.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('caregiver')}
                className="px-6 py-3.5 bg-[#174C4B] hover:bg-[#0F3332] text-white text-sm font-medium rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                Inquire for Caregiver Support →
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 border border-[#174C4B]/25 hover:bg-white text-[#174C4B] text-sm font-medium rounded-lg transition-colors cursor-pointer"
              >
                Schedule Family Consultation
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-4 rounded-2xl border border-[#292E2C]/10 shadow-md">
              <EditorialVisual
                variant="senior-companion"
                imageSrc="/images/caregiver-pathway.jpg"
                imageAlt="Compassionate In-Home Eldercare Canada"
                className="rounded-xl min-h-[300px]"
                caption="Respectful companionship, routine guidance, and gentle household relief."
              />
            </div>
          </div>

        </div>
      </section>

      {/* Dignity & Autonomy Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] rounded-3xl p-8 sm:p-12 border border-[#174C4B]/15">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Care Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B]">
              Supporting Independence, Not Replacing It
            </h2>
            <p className="text-sm sm:text-base text-[#292E2C]/80 leading-relaxed">
              Most seniors wish to age gracefully within the warmth and memories of their own home. Our caregivers provide the steady hand and compassionate presence that make staying at home safe and sustainable, without diminishing individual autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/8 space-y-2">
              <h3 className="font-serif text-lg text-[#174C4B]">Preserving Familiar Routines</h3>
              <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
                Waking hours, favorite morning teas, quiet garden moments, and television preferences remain on the senior’s own terms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/8 space-y-2">
              <h3 className="font-serif text-lg text-[#174C4B]">Relieving Family Strain</h3>
              <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
                Adult children can focus on quality emotional connection with their parents rather than the physical fatigue of constant daily caregiving.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#292E2C]/8 space-y-2">
              <h3 className="font-serif text-lg text-[#174C4B]">Consistent Presence</h3>
              <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
                Having a trusted, familiar companion prevents isolation and provides immediate assistance if mobility challenges arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Caregiver Assistance */}
      <section className="bg-white py-16 border-y border-[#292E2C]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Everyday Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1.5 tracking-tight">
              How Caregivers Assist in the Home
            </h2>
            <p className="text-sm text-[#5F6864] mt-2">
              Our placements cover non-medical support, companionship, and household assistance tailored to your loved one’s specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Companionship & Active Conversation',
                desc: 'Reading, reminiscing, playing cards, accompaniment on gentle strolls, and stimulating social engagement.',
                image: '/images/caregiver-companionship.jpg',
              },
              {
                title: 'Nutritious Dietary Meals',
                desc: 'Cooking balanced meals according to specific dietary needs (low sodium, diabetic, heart-healthy, or pureed).',
                image: '/images/caregiver-meal-prep.jpg',
              },
              {
                title: 'Morning & Evening Routines',
                desc: 'Gentle support with dressing, grooming, bathing oversight, and safe transitions into and out of bed.',
                image: '/images/caregiver-routine.jpg',
              },
              {
                title: 'Attentive Communication',
                desc: 'Keeping family members informed, listening with patience, and maintaining a warm emotional atmosphere.',
                image: '/images/caregiver-communication.jpg',
              },
              {
                title: 'Light Housekeeping & Laundry',
                desc: 'Keeping walkways clear of trip hazards, fresh bed linens, kitchen sanitization, and laundry maintenance.',
                image: '/images/caregiver-housekeeping.jpg',
              },
              {
                title: 'Appointments & Respite Relief',
                desc: 'Accompaniment to local grocery stores, pharmacy pickups, family gatherings, and medical appointments.',
                image: '/images/family-care.jpg',
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] rounded-2xl border border-[#292E2C]/8 overflow-hidden group shadow-xs hover:border-[#174C4B]/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden bg-white">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-1.5">
                    <div className="text-[11px] font-semibold text-[#174C4B] uppercase tracking-wider">
                      Care Dimension {idx + 1}
                    </div>
                    <h3 className="font-serif text-lg text-[#174C4B]">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live-in vs Live-out Eldercare */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#174C4B]/20 shadow-xs space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-2.5 py-1 rounded">
              Comprehensive Support
            </span>
            <h3 className="font-serif text-2xl text-[#174C4B]">
              Live-In Senior Caregiver
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
              Provides constant reassurance and daily rhythm assistance throughout the day and overnight. Requires a private bedroom in the home. Ideal for seniors living alone or experiencing memory decline who require round-the-clock peace of mind.
            </p>
            <ul className="text-xs text-[#292E2C] space-y-1.5 pt-2">
              <li>✓ Overnight security and nighttime peace of mind</li>
              <li>✓ Ongoing meal preparation and companion presence</li>
              <li>✓ LMIA / Caregiver program eligible</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#174C4B]/20 shadow-xs space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-2.5 py-1 rounded">
              Scheduled Daily Hours
            </span>
            <h3 className="font-serif text-2xl text-[#174C4B]">
              Live-Out Senior Caregiver
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
              Provides dedicated assistance during regular daytime or afternoon hours. Caregivers commute daily to the residence. Ideal for independent seniors who need help with meals, errands, and afternoon companionship.
            </p>
            <ul className="text-xs text-[#292E2C] space-y-1.5 pt-2">
              <li>✓ Focused assistance during peak daily hours</li>
              <li>✓ No private bedroom required</li>
              <li>✓ Respite relief for family members working full-time</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center bg-[#FAF8F3] p-8 rounded-2xl border border-[#292E2C]/10">
          <h4 className="font-serif text-2xl text-[#174C4B] mb-2">
            Let's Discuss Your Loved One's Unique Needs
          </h4>
          <p className="text-xs sm:text-sm text-[#5F6864] max-w-lg mx-auto mb-6">
            We are here to answer your questions without pressure. Contact our team to explore options for your parent or family member.
          </p>
          <button
            onClick={() => onOpenInquiry('caregiver')}
            className="px-8 py-3.5 bg-[#174C4B] hover:bg-[#0F3332] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Start Caregiver Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
