import React, { useState } from 'react';

interface CareAssessmentToolProps {
  onSelectOption: (type: 'nanny' | 'caregiver', arrangement: 'live-in' | 'live-out') => void;
}

export const CareAssessmentTool: React.FC<CareAssessmentToolProps> = ({ onSelectOption }) => {
  const [recipient, setRecipient] = useState<'child' | 'senior'>('child');
  const [hoursNeeded, setHoursNeeded] = useState<'daytime' | 'extended' | 'round-the-clock'>('extended');
  const [needLightHousekeeping, setNeedLightHousekeeping] = useState<boolean>(true);
  const [needMealPrep, setMealPrep] = useState<boolean>(true);

  const getRecommendation = () => {
    if (recipient === 'child') {
      if (hoursNeeded === 'round-the-clock' || hoursNeeded === 'extended') {
        return {
          title: 'Full-Time Live-In Nanny',
          description: 'Optimal for working parents, early morning routines, and comprehensive childcare consistency in your home.',
          keyBenefit: 'Seamless morning/evening flexibility & continuous household harmony',
          type: 'nanny' as const,
          arrangement: 'live-in' as const,
        };
      } else {
        return {
          title: 'Full-Time Live-Out Nanny',
          description: 'Ideal for standard workdays (e.g. 8:00 AM – 5:00 PM) where daily dedicated child supervision is needed.',
          keyBenefit: 'Structured daily hours without requiring dedicated live-in accommodations',
          type: 'nanny' as const,
          arrangement: 'live-out' as const,
        };
      }
    } else {
      if (hoursNeeded === 'round-the-clock') {
        return {
          title: 'Live-In Senior Caregiver',
          description: 'Best for seniors needing overnight security, regular daily companionship, medication tracking, and mobility reassurance.',
          keyBenefit: 'Peace of mind knowing an attentive caregiver is present throughout night and day',
          type: 'caregiver' as const,
          arrangement: 'live-in' as const,
        };
      } else {
        return {
          title: 'In-Home Companion & Daily Caregiver',
          description: 'Designed for independent seniors requiring assistance with daily routines, meal preparation, and stimulating social engagement.',
          keyBenefit: 'Preserves cherished home independence while relieving family caregiver strain',
          type: 'caregiver' as const,
          arrangement: 'live-out' as const,
        };
      }
    }
  };

  const rec = getRecommendation();

  return (
    <div className="bg-[#FAF8F3] border border-[#174C4B]/15 rounded-2xl p-6 sm:p-8">
      <div className="max-w-2xl mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#174C4B]">
          Interactive Needs Assessment
        </span>
        <h3 className="font-serif text-2xl text-[#174C4B] mt-1">
          Which Care Arrangement Fits Your Household?
        </h3>
        <p className="text-xs sm:text-sm text-[#5F6864] mt-1">
          Adjust the options below to see our recommended care pathway and typical duties.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#292E2C] mb-1.5">
              1. Who is the care for?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRecipient('child')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  recipient === 'child'
                    ? 'border-[#174C4B] bg-[#174C4B] text-white shadow-xs'
                    : 'border-[#292E2C]/15 bg-white text-[#292E2C] hover:bg-[#DDE8DD]/30'
                }`}
              >
                Children (Nanny)
              </button>
              <button
                type="button"
                onClick={() => setRecipient('senior')}
                className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  recipient === 'senior'
                    ? 'border-[#174C4B] bg-[#174C4B] text-white shadow-xs'
                    : 'border-[#292E2C]/15 bg-white text-[#292E2C] hover:bg-[#DDE8DD]/30'
                }`}
              >
                Senior / Adult (Caregiver)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#292E2C] mb-1.5">
              2. Coverage Hours Needed
            </label>
            <div className="space-y-1.5">
              {[
                { id: 'daytime', label: 'Standard Daytime (approx. 35-40 hrs/wk)' },
                { id: 'extended', label: 'Extended Hours & Early/Late Flexibility' },
                { id: 'round-the-clock', label: 'Comprehensive / Live-In Household Presence' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setHoursNeeded(item.id as any)}
                  className={`w-full text-left py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer flex items-center justify-between ${
                    hoursNeeded === item.id
                      ? 'border-[#174C4B] bg-white text-[#174C4B] ring-1 ring-[#174C4B]'
                      : 'border-[#292E2C]/10 bg-white/60 text-[#292E2C] hover:bg-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {hoursNeeded === item.id && <span className="text-[#174C4B] font-bold">✓</span>}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#292E2C] mb-1.5">
              3. Household Support Included
            </label>
            <div className="flex gap-4 text-xs text-[#292E2C]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needMealPrep}
                  onChange={(e) => setMealPrep(e.target.checked)}
                  className="rounded text-[#174C4B]"
                />
                <span>Meal Preparation</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needLightHousekeeping}
                  onChange={(e) => setNeedLightHousekeeping(e.target.checked)}
                  className="rounded text-[#174C4B]"
                />
                <span>Light Housekeeping</span>
              </label>
            </div>
          </div>
        </div>

        {/* Output card */}
        <div className="bg-white rounded-xl p-5 border border-[#174C4B]/20 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between text-[11px] text-[#5F6864] mb-2">
              <span className="uppercase tracking-wider font-semibold text-[#174C4B]">Recommended Direction</span>
              <span className="bg-[#DDE8DD] text-[#174C4B] px-2 py-0.5 rounded font-medium">Custom Match</span>
            </div>
            <h4 className="font-serif text-xl text-[#174C4B] mb-2">
              {rec.title}
            </h4>
            <p className="text-xs text-[#292E2C]/80 leading-relaxed mb-4">
              {rec.description}
            </p>
            <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#292E2C]/5 text-xs text-[#174C4B] font-medium mb-4">
              💡 {rec.keyBenefit}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectOption(rec.type, rec.arrangement)}
            className="w-full py-2.5 bg-[#174C4B] hover:bg-[#0F3332] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer text-center"
          >
            Inquire About {rec.title} →
          </button>
        </div>
      </div>
    </div>
  );
};
