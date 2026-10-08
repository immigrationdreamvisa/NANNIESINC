import React, { useState } from 'react';
import { PageId, LocationInfo } from '../types';
import { PROVINCE_LOCATIONS, COMPANY_DETAILS } from '../data/companyData';

interface LocationsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (serviceType?: 'nanny' | 'caregiver' | 'applicant') => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const [activeProvince, setActiveProvince] = useState<'Ontario' | 'Alberta' | 'British Columbia'>('Ontario');
  const [selectedCity, setSelectedCity] = useState<LocationInfo>(PROVINCE_LOCATIONS[0]);

  const currentLocations = PROVINCE_LOCATIONS.filter(
    (loc) => loc.region === activeProvince
  );

  return (
    <div className="py-12 sm:py-16 space-y-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C4B] bg-[#DDE8DD] px-3 py-1 rounded mb-4">
            <span>Canadian Coverage Directory</span>
            <span>·</span>
            <span>Coast-to-Coast Placements</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#174C4B] tracking-tight leading-tight">
            Connecting Households Across Ontario, Alberta & British Columbia.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#292E2C]/80 leading-relaxed">
            From our headquarters in Thornhill, Ontario to suburban households in Calgary and metropolitan homes in Vancouver, Nannies Inc. places trusted caregivers tailored to local family life.
          </p>
        </div>
      </section>

      {/* Interactive Province & City Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-10 border border-[#174C4B]/15">
          
          {/* Province Selector */}
          <div className="flex flex-wrap items-center justify-between pb-8 mb-8 border-b border-[#292E2C]/10 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
                Select Province
              </span>
              <h3 className="font-serif text-2xl text-[#174C4B] mt-0.5">
                Regional Placement Hubs
              </h3>
            </div>

            <div className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-[#292E2C]/10">
              {(['Ontario', 'Alberta', 'British Columbia'] as const).map((prov) => (
                <button
                  key={prov}
                  onClick={() => {
                    setActiveProvince(prov);
                    const firstInProv = PROVINCE_LOCATIONS.find((l) => l.region === prov);
                    if (firstInProv) setSelectedCity(firstInProv);
                  }}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeProvince === prov
                      ? 'bg-[#174C4B] text-white shadow-xs'
                      : 'text-[#292E2C] hover:text-[#174C4B]'
                  }`}
                >
                  {prov}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Cities & Spotlight Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* City list */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5F6864] block mb-2">
                Municipal Service Areas in {activeProvince}:
              </span>
              {currentLocations.map((loc) => {
                const isSelected = selectedCity.city === loc.city;
                return (
                  <button
                    key={loc.city}
                    onClick={() => setSelectedCity(loc)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-[#174C4B] shadow-xs ring-1 ring-[#174C4B]'
                        : 'bg-white/60 border-[#292E2C]/8 hover:bg-white'
                    }`}
                  >
                    <div>
                      <span className="font-serif text-base text-[#174C4B] font-semibold block">
                        {loc.city}
                      </span>
                      <span className="text-xs text-[#5F6864] truncate max-w-xs block">
                        {loc.popularServices.join(' · ')}
                      </span>
                    </div>
                    <span className="text-xs text-[#174C4B] font-bold">
                      {isSelected ? '→' : '+'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* City Spotlight Profile */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#174C4B]/20 shadow-xs space-y-5">
              <div className="flex items-center justify-between text-xs text-[#5F6864] pb-3 border-b border-[#292E2C]/8">
                <span className="font-semibold text-[#174C4B] uppercase tracking-wider">
                  Spotlight Service Area
                </span>
                <span>{selectedCity.province}, Canada</span>
              </div>

              <div className="h-40 w-full rounded-xl overflow-hidden bg-[#FAF8F3]">
                <img
                  src="/images/saf-family.webp"
                  alt="In-Home Care Placements Canada"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#174C4B]">
                {selectedCity.city} In-Home Care Services
              </h2>

              <p className="text-sm text-[#292E2C]/80 leading-relaxed">
                {selectedCity.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-[#174C4B] block uppercase tracking-wider">
                  Frequently Requested in {selectedCity.city}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCity.popularServices.map((srv) => (
                    <span
                      key={srv}
                      className="px-3 py-1 bg-[#DDE8DD]/60 text-[#174C4B] text-xs font-medium rounded-md border border-[#174C4B]/10"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF8F3] p-4 rounded-xl border border-[#292E2C]/8 text-xs text-[#5F6864] space-y-1 leading-relaxed">
                <p>
                  <strong>Provincial Standards:</strong> Placements in {selectedCity.province} comply with applicable provincial Employment Standards regulations, statutory holiday rules, and workplace safety insurance requirements.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenInquiry('nanny')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#174C4B] hover:bg-[#0F3332] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Inquire for Nanny in {selectedCity.city}
                </button>
                <button
                  onClick={() => onOpenInquiry('caregiver')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#DDE8DD] hover:bg-[#BACDBA] text-[#174C4B] text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Inquire for Caregiver in {selectedCity.city}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Head Office Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#292E2C]/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xl">📍</span>
            <h4 className="font-serif text-lg text-[#174C4B]">National Office</h4>
            <p className="text-xs text-[#5F6864]">{COMPANY_DETAILS.address}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xl">📞</span>
            <h4 className="font-serif text-lg text-[#174C4B]">Telephone</h4>
            <p className="text-xs text-[#5F6864]">{COMPANY_DETAILS.phoneDisplay}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xl">✉️</span>
            <h4 className="font-serif text-lg text-[#174C4B]">Direct Email</h4>
            <p className="text-xs text-[#5F6864]">{COMPANY_DETAILS.email}</p>
          </div>
        </div>
      </section>

    </div>
  );
};
