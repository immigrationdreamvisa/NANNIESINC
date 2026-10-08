import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS, PROVINCE_LOCATIONS, COMPANY_FAQS } from '../data/companyData';
import { EditorialVisual } from '../components/EditorialVisual';
import { CareAssessmentTool } from '../components/CareAssessmentTool';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedRegion, setSelectedRegion] = useState<'Ontario' | 'Alberta' | 'British Columbia'>('Ontario');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredLocations = PROVINCE_LOCATIONS.filter(
    (loc) => loc.region === selectedRegion
  );

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* SECTION 2: EDITORIAL HERO */}
      <section className="pt-8 sm:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Ivory content area with DM Serif typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded">
                <span>Personalized care</span>
                <span aria-hidden="true">·</span>
                <span>Thoughtful matching</span>
                <span aria-hidden="true">·</span>
                <span>Serving Canada since 2001</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-[1.12] text-balance">
                Care That Fits Your Family.
              </h1>

              <p className="text-base sm:text-lg text-[#292E2C]/80 max-w-xl leading-relaxed">
                Find thoughtful, personalized support for your household, from experienced childcare professionals to compassionate in-home caregivers.
              </p>

              {/* Pathways CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onOpenInquiry('nanny')}
                  className="px-6 py-3.5 bg-[#174C4B] hover:bg-[#0F3332] text-white font-medium text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Find a Nanny</span>
                  <span>→</span>
                </button>
                <button
                  onClick={() => onOpenInquiry('caregiver')}
                  className="px-6 py-3.5 bg-white hover:bg-[#FAF8F3] text-[#174C4B] border border-[#174C4B]/25 font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Find a Caregiver</span>
                  <span>→</span>
                </button>
              </div>

              {/* Factual reassurance */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5F6864]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>In-Person Screening & Verification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>Live-In & Live-Out Arrangements</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#174C4B] font-bold">✓</span>
                  <span>LMIA & Caregiver Program Assistance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Lifestyle Composition */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#DDE8DD] rounded-2xl transform rotate-1 -z-10" />
                <div className="bg-white rounded-2xl p-3 shadow-md border border-[#292E2C]/10">
                  <EditorialVisual
                    variant="hero-family"
                    imageSrc="/images/hero-nanny-agency.webp"
                    imageAlt="Nannies Inc. Canadian Nanny and Caregiver Placement"
                    className="rounded-xl min-h-[360px]"
                    caption="Personalized in-home nanny & caregiver matching across Canada."
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CHOOSE THE CARE YOU NEED */}
      <section className="bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Care Pathways
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1.5 tracking-tight">
              Choose the Care You Need
            </h2>
            <p className="text-sm sm:text-base text-[#5F6864] mt-2">
              Every household has unique priorities. Select your area of interest to explore our dedicated matching criteria and placement support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card A: Nanny Services */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#292E2C]/10 shadow-xs flex flex-col justify-between hover:border-[#174C4B]/40 transition-all group">
              <div>
                <EditorialVisual
                  variant="nanny-care"
                  imageSrc="/images/nanny-pathway.webp"
                  imageAlt="In-Home Nanny Services Canada"
                  className="rounded-xl mb-6 min-h-[240px]"
                />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
                    Childcare Pathway
                  </span>
                  <span className="text-xs text-[#5F6864]">· Live-in or Live-out</span>
                </div>
                <h3 className="font-serif text-2xl text-[#174C4B] mb-3">
                  Nanny Services
                </h3>
                <p className="text-sm text-[#292E2C]/80 leading-relaxed mb-6">
                  In-home childcare tailored to a family's routines, preferences, and children's needs. From infant nourishment and preschool learning to after-school supervision and wholesome home cooking.
                </p>
                <ul className="space-y-2 text-xs text-[#5F6864] mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#174C4B] font-bold">✓</span>
                    <span>Daily routine management: morning readiness, nap schedules, and creative play</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#174C4B] font-bold">✓</span>
                    <span>Preparation of balanced meals and snacks for children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#174C4B] font-bold">✓</span>
                    <span>Tidying children's bedrooms, play areas, and child laundry</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#292E2C]/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('nanny-services')}
                  className="text-sm font-semibold text-[#174C4B] hover:text-[#0F3332] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Nanny Services</span>
                  <span>→</span>
                </button>
                <button
                  onClick={() => onOpenInquiry('nanny')}
                  className="text-xs font-medium bg-[#DDE8DD] hover:bg-[#BACDBA] text-[#174C4B] px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Request Nanny
                </button>
              </div>
            </div>

            {/* Card B: Caregiver Services */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#292E2C]/10 shadow-xs flex flex-col justify-between hover:border-[#174C4B]/40 transition-all group">
              <div>
                <EditorialVisual
                  variant="senior-companion"
                  imageSrc="/images/caregiver-pathway.jpg"
                  imageAlt="In-Home Caregiver Services Canada"
                  className="rounded-xl mb-6 min-h-[240px]"
                />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
                    Eldercare Pathway
                  </span>
                  <span className="text-xs text-[#5F6864]">· Companionship & Dignity</span>
                </div>
                <h3 className="font-serif text-2xl text-[#174C4B] mb-3">
                  Caregiver Services
                </h3>
                <p className="text-sm text-[#292E2C]/80 leading-relaxed mb-6">
                  Personalized in-home support and companionship for older adults who need help with everyday activities. Allowing parents and family members to enjoy dignity and independence in familiar surroundings.
                </p>
                <ul className="space-y-2 text-xs text-[#5F6864] mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#174C4B] font-bold">✓</span>
                    <span>Warm daily companionship, conversation, and mobility reassurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#174C4B] font-bold">✓</span>
                    <span>Assistance with morning routines, dressing, and gentle medication prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#174C4B] font-bold">✓</span>
                    <span>Nutritious dietary meal planning, light housekeeping, and grocery errands</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#292E2C]/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('caregiver-services')}
                  className="text-sm font-semibold text-[#174C4B] hover:text-[#0F3332] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Caregiver Services</span>
                  <span>→</span>
                </button>
                <button
                  onClick={() => onOpenInquiry('caregiver')}
                  className="text-xs font-medium bg-[#DDE8DD] hover:bg-[#BACDBA] text-[#174C4B] px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Request Caregiver
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: A MORE PERSONAL APPROACH */}
      <section className="bg-[#DDE8DD]/30 py-16 sm:py-20 border-y border-[#292E2C]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#292E2C]/10">
                <EditorialVisual
                  variant="hero-family"
                  imageSrc="/images/saf-family.webp"
                  imageAlt="Care decisions are personal"
                  className="rounded-xl min-h-[300px]"
                  caption="Inviting someone into your home requires complete confidence."
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
                Placement Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] tracking-tight">
                “Because Every Household Is Different.”
              </h2>
              <p className="text-sm sm:text-base text-[#292E2C]/80 leading-relaxed">
                Rather than relying on automated matchmaking algorithms, Nannies Inc. works closely with families to grasp your domestic rhythm, personal philosophies, and individual care expectations.
              </p>

              {/* Three Concise Principles */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 bg-white/70 p-4 rounded-xl border border-[#292E2C]/5">
                  <div className="w-8 h-8 rounded-full bg-[#174C4B] text-white flex items-center justify-center shrink-0 text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#174C4B]">Personalized Matching</h4>
                    <p className="text-xs text-[#5F6864] mt-0.5 leading-relaxed">
                      We listen to your specific schedule, values, and household requirements before presenting candidate profiles that align with your family life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/70 p-4 rounded-xl border border-[#292E2C]/5">
                  <div className="w-8 h-8 rounded-full bg-[#174C4B] text-white flex items-center justify-center shrink-0 text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#174C4B]">Careful Screening</h4>
                    <p className="text-xs text-[#5F6864] mt-0.5 leading-relaxed">
                      Every candidate undergoes personal interviews, reference checks with past employers, CPR/First Aid verification, and criminal background checks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white/70 p-4 rounded-xl border border-[#292E2C]/5">
                  <div className="w-8 h-8 rounded-full bg-[#174C4B] text-white flex items-center justify-center shrink-0 text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#174C4B]">Guided Support</h4>
                    <p className="text-xs text-[#5F6864] mt-0.5 leading-relaxed">
                      From candidate interviews to LMIA caregiver navigation, employment contracts, and transition guidance, we stand beside your family at every milestone.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: HOW THE MATCHING PROCESS WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
            Clear & Guided Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1.5 tracking-tight">
            How the Matching Process Works
          </h2>
          <p className="text-sm sm:text-base text-[#5F6864] mt-2">
            A structured, transparent pathway designed to make care decisions calm, informed, and manageable.
          </p>
        </div>

        {/* 4-Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'Tell Us About Your Needs',
              desc: 'Families explain the type of support needed, household schedule, children or eldercare requirements, and preferred live-in or live-out arrangement.',
            },
            {
              num: '02',
              title: 'Understand Your Options',
              desc: 'Our placement team reviews your criteria, outlines realistic timelines, and explains the placement and immigration/LMIA process if applicable.',
            },
            {
              num: '03',
              title: 'Meet Suitable Candidates',
              desc: 'We present vetted, experienced candidates. You conduct personal interviews and evaluate compatibility in a relaxed, guided environment.',
            },
            {
              num: '04',
              title: 'Find the Right Fit',
              desc: 'Once you select your caregiver, we assist with placement documentation, contracts, and settling-in guidance for a harmonious transition.',
            },
          ].map((step, idx) => (
            <div
              key={step.num}
              className="bg-white p-6 rounded-2xl border border-[#292E2C]/10 shadow-xs flex flex-col justify-between relative group hover:border-[#174C4B]/40 transition-colors"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#E58C78] block mb-3 font-semibold">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg text-[#174C4B] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#292E2C]/8 flex items-center gap-1.5 text-[11px] font-medium text-[#174C4B]">
                <span>Phase {idx + 1} of Placement</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#174C4B] hover:bg-[#0F3332] text-white font-medium text-sm rounded-lg transition-all shadow-sm cursor-pointer"
          >
            <span>Start Your Search</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* INTERACTIVE ASSESSMENT TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CareAssessmentTool
          onSelectOption={(type, arrangement) => {
            onOpenInquiry(type);
          }}
        />
      </section>

      {/* SECTION 6: CARE IN EVERYDAY LIFE */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#292E2C]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              Everyday Domestic Support
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1.5 tracking-tight">
              Care in Everyday Life
            </h2>
            <p className="text-sm sm:text-base text-[#5F6864] mt-2">
              Every home's needs are specific. Below are common ways in-home caregivers and nannies provide relief and stability to Canadian households.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Childcare & Morning Routines',
                description: 'Gentle waking, breakfast preparation, getting dressed, and stress-free preparation for school or daycare.',
                badge: 'Childcare',
                image: '/images/nanny-child-safety.jpg',
              },
              {
                title: 'Nutritious Meal Preparation',
                description: 'Wholesome snacks, balanced lunches, and nourishing dinners tailored to your family’s dietary preferences.',
                badge: 'Nutrition',
                image: '/images/nanny-meal-prep.jpg',
              },
              {
                title: 'Developmental Activities & Play',
                description: 'Outdoor park outings, reading together, sensory crafts, and screen-free developmental stimulation.',
                badge: 'Enrichment',
                image: '/images/nanny-child-stimulation.jpg',
              },
              {
                title: 'Household Support Related to Care',
                description: 'Children’s laundry, tidying playrooms, washing dishes, and keeping nursery spaces clean and organized.',
                badge: 'Household',
                image: '/images/nanny-housekeeping.jpg',
              },
              {
                title: 'Companionship for Older Adults',
                description: 'Meaningful conversation, shared hobbies, neighborhood walks, and heartfelt presence preventing loneliness.',
                badge: 'Eldercare',
                image: '/images/caregiver-companionship.jpg',
              },
              {
                title: 'Daily Living Support for Seniors',
                description: 'Assistance with morning routines, gentle medication prompts, light housekeeping, and grocery coordination.',
                badge: 'Independence',
                image: '/images/caregiver-meal-prep.jpg',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] rounded-2xl border border-[#292E2C]/8 hover:border-[#174C4B]/25 transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden bg-white relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-semibold text-[#174C4B] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-[#174C4B] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5F6864] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <p className="pt-3 border-t border-[#292E2C]/5 text-[11px] text-[#292E2C]/70 italic">
                    *Specific duties agreed in writing.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY FAMILIES CHOOSE A PERSONALIZED AGENCY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] rounded-3xl p-8 sm:p-12 border border-[#174C4B]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
                Established Canadian Placement Agency
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] tracking-tight">
                Why Canadian Families Choose Nannies Inc.
              </h2>
              <p className="text-sm sm:text-base text-[#292E2C]/80 leading-relaxed">
                Since 2001, we have assisted households across Ontario, Alberta, and British Columbia in securing qualified domestic care with dignity, legality, and peace of mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl border border-[#292E2C]/8">
                  <h4 className="font-serif text-base text-[#174C4B] mb-1">Serving Families Since 2001</h4>
                  <p className="text-xs text-[#5F6864]">Over 20 years of continuous placement experience in the Canadian domestic care landscape.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#292E2C]/8">
                  <h4 className="font-serif text-base text-[#174C4B] mb-1">In-House Immigration Specialist</h4>
                  <p className="text-xs text-[#5F6864]">Specialized guidance through LMIA regulations, ESDC compliance, and Caregiver Program pathways.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#292E2C]/8">
                  <h4 className="font-serif text-base text-[#174C4B] mb-1">In-Depth Candidate Screening</h4>
                  <p className="text-xs text-[#5F6864]">Personal interviews, verified work history, reference checks, and CPR certification auditing.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#292E2C]/8">
                  <h4 className="font-serif text-base text-[#174C4B] mb-1">Ongoing Post-Placement Care</h4>
                  <p className="text-xs text-[#5F6864]">Support continues through your candidate's initial transition and throughout the placement period.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#174C4B]/20 space-y-4 text-center overflow-hidden">
              <div className="h-44 w-full rounded-xl overflow-hidden mb-2">
                <img
                  src="/images/family-care.jpg"
                  alt="Canadian family care support"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-xl text-[#174C4B]">
                Canadian-Owned & Operated
              </h3>
              <p className="text-xs text-[#5F6864] leading-relaxed">
                Headquartered at 300 John St., Thornhill, ON, we work directly with Canadian households and adhere strictly to provincial labour and federal immigration standards.
              </p>
              <div className="pt-1 text-xs font-semibold text-[#174C4B]">
                Call our direct advisory line:{' '}
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="underline">
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE LOCATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
              National Coverage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1 tracking-tight">
              Service Locations
            </h2>
            <p className="text-sm text-[#5F6864] mt-1">
              Select a province below to explore our verified placement regions.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#DDE8DD]/60 rounded-xl">
            {(['Ontario', 'Alberta', 'British Columbia'] as const).map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedRegion === region
                    ? 'bg-[#174C4B] text-white shadow-xs'
                    : 'text-[#292E2C] hover:text-[#174C4B]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.city}
              className="bg-white p-6 rounded-2xl border border-[#292E2C]/10 shadow-xs hover:border-[#174C4B]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#5F6864] mb-2">
                  <span className="font-semibold text-[#174C4B]">{loc.province}</span>
                  <span>Active Region</span>
                </div>
                <h3 className="font-serif text-xl text-[#174C4B] mb-2">
                  {loc.city}
                </h3>
                <p className="text-xs text-[#5F6864] leading-relaxed mb-4">
                  {loc.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {loc.popularServices.map((srv) => (
                    <span
                      key={srv}
                      className="text-[11px] bg-[#FAF8F3] text-[#292E2C] px-2 py-0.5 rounded border border-[#292E2C]/8"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry()}
                className="w-full py-2 text-center text-xs font-medium text-[#174C4B] bg-[#DDE8DD]/40 hover:bg-[#DDE8DD] rounded-lg transition-colors cursor-pointer"
              >
                Inquire for {loc.city} →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('locations')}
            className="text-xs font-medium text-[#174C4B] hover:underline cursor-pointer"
          >
            View full provincial directory & placement guides →
          </button>
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
            Help & Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#174C4B] mt-1 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#5F6864] mt-2">
            Clear, honest answers about our screening process, placement types, and agency policies.
          </p>
        </div>

        <div className="space-y-3">
          {COMPANY_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#292E2C]/10 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#174C4B]">
                    {faq.question}
                  </span>
                  <span className={`text-[#174C4B] text-xl transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#292E2C]/80 leading-relaxed border-t border-[#292E2C]/5 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 10: FINAL CALL TO ACTION */}
      <section className="bg-[#174C4B] text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDE8DD]">
            Begin Your Placement Journey
          </span>
          
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight text-balance">
            “Let’s Find Care That Feels Right.”
          </h2>
          
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Tell us a little about your household and the support you are looking for. Our team is here to guide you with care and discretion.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('nanny')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#174C4B] hover:bg-[#FAF8F3] font-medium text-sm rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              I Need a Nanny
            </button>
            <button
              onClick={() => onOpenInquiry('caregiver')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#DDE8DD] text-[#174C4B] hover:bg-white font-medium text-sm rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              I Need a Caregiver
            </button>
          </div>

          <div className="pt-4 text-xs text-white/60">
            Prefer to speak directly? Call{' '}
            <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-[#DDE8DD] hover:underline font-semibold">
              {COMPANY_DETAILS.phoneDisplay}
            </a>{' '}
            (Monday – Friday, 9am – 6pm EST)
          </div>
        </div>
      </section>

    </div>
  );
};
