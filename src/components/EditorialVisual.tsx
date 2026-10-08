import React, { useState } from 'react';

interface EditorialVisualProps {
  variant: 'hero-family' | 'nanny-care' | 'senior-companion' | 'everyday-routine' | 'consultation' | 'canada-flag';
  className?: string;
  caption?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const EditorialVisual: React.FC<EditorialVisualProps> = ({
  variant,
  className = '',
  caption,
  imageSrc,
  imageAlt = 'Nannies Inc. Caregiver & Nanny Placement',
}) => {
  const [imageError, setImageError] = useState(false);

  // If a real image is provided and hasn't failed to load:
  if (imageSrc && !imageError) {
    return (
      <figure className={`relative overflow-hidden group select-none ${className}`}>
        <div className="w-full h-full min-h-[260px] relative overflow-hidden rounded-xl bg-[#FAF8F3]">
          <img
            src={imageSrc}
            alt={imageAlt}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle contrast gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          
          {caption && (
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium drop-shadow-sm">
              {caption}
            </div>
          )}
        </div>
      </figure>
    );
  }

  return (
    <figure className={`relative overflow-hidden group select-none ${className}`}>
      {/* Background and Ambient Warmth */}
      <div className="w-full h-full min-h-[260px] relative bg-gradient-to-br from-[#F5EFE6] via-[#FAF8F3] to-[#DDE8DD] flex items-center justify-center p-6 border border-[#292E2C]/5 rounded-xl">
        
        {variant === 'hero-family' && (
          <div className="relative w-full h-full flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(#174C4B_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#174C4B] bg-white/80 px-2.5 py-1 rounded border border-[#174C4B]/15">
                Canadian In-Home Matching
              </span>
              <span className="text-xs text-[#5F6864] font-medium">Est. 2001 · Canada</span>
            </div>

            <div className="relative z-10 my-6 py-4 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-[#174C4B]/10 flex items-center justify-center mb-4 text-[#174C4B]">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" opacity="0.3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                </svg>
              </div>
              <h4 className="font-serif text-2xl text-[#174C4B] mb-2 leading-tight">
                Warmth, Routine & Peace of Mind
              </h4>
              <p className="text-xs text-[#5F6864] max-w-sm mx-auto leading-relaxed">
                A home where children flourish, routines run seamlessly, and elderly loved ones remain safe and respected.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#174C4B]/10 text-xs text-[#174C4B]">
              <span className="font-medium">Ontario · Alberta · British Columbia</span>
              <span className="text-[#E58C78] font-semibold">Personalized Placement</span>
            </div>
          </div>
        )}

        {variant === 'nanny-care' && (
          <div className="relative w-full h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs mb-4">
              <span className="text-[#174C4B] font-semibold tracking-wide uppercase text-[10px] bg-[#DDE8DD] px-2 py-0.5 rounded">
                Childcare in Your Home
              </span>
              <span className="text-[#5F6864]">Full-Time / Live-in & Live-out</span>
            </div>
            
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#174C4B] text-white flex items-center justify-center mb-3 shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-[#174C4B] mb-1">
                Attentive Nanny Care
              </h4>
              <p className="text-xs text-[#5F6864] max-w-xs leading-relaxed">
                Nutritious meal prep, developmental playtime, school routines, and loving supervision.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#292E2C] bg-white/70 p-2.5 rounded border border-[#174C4B]/10">
              <span className="w-2 h-2 rounded-full bg-[#174C4B]" />
              <span>CPR & First Aid verified · Reference checked · Personal interview</span>
            </div>
          </div>
        )}

        {variant === 'senior-companion' && (
          <div className="relative w-full h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs mb-4">
              <span className="text-[#174C4B] font-semibold tracking-wide uppercase text-[10px] bg-[#DDE8DD] px-2 py-0.5 rounded">
                Eldercare & Companionship
              </span>
              <span className="text-[#5F6864]">Dignity & Independence</span>
            </div>
            
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F3] border-2 border-[#174C4B] text-[#174C4B] flex items-center justify-center mb-3 shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-serif text-xl text-[#174C4B] mb-1">
                Dignified Senior Support
              </h4>
              <p className="text-xs text-[#5F6864] max-w-xs leading-relaxed">
                Respectful companionship, morning routines, medication reminders, and home support.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#292E2C] bg-white/70 p-2.5 rounded border border-[#174C4B]/10">
              <span className="w-2 h-2 rounded-full bg-[#E58C78]" />
              <span>Allowing loved ones to remain comfortable in familiar surroundings</span>
            </div>
          </div>
        )}

        {variant === 'everyday-routine' && (
          <div className="w-full flex flex-col items-center justify-center text-center py-6">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#174C4B] mb-3 shadow-sm border border-[#174C4B]/10">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h5 className="font-serif text-lg text-[#174C4B] mb-1">Daily Household Balance</h5>
            <p className="text-xs text-[#5F6864] max-w-xs">
              Tailored duties agreed in writing to meet your family's exact daily rhythm.
            </p>
          </div>
        )}

        {variant === 'consultation' && (
          <div className="w-full flex flex-col items-center justify-center text-center py-6">
            <div className="w-12 h-12 rounded-xl bg-[#174C4B] text-white flex items-center justify-center mb-3 shadow-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 11-18 0z" />
              </svg>
            </div>
            <h5 className="font-serif text-lg text-[#174C4B] mb-1">Structured 4-Step Matching</h5>
            <p className="text-xs text-[#5F6864] max-w-xs">
              Every placement follows a thorough interview, reference, and transition process.
            </p>
          </div>
        )}

        {variant === 'canada-flag' && (
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#E58C78]/20 text-[#E58C78] flex items-center justify-center">
              🍁
            </div>
            <span className="text-xs font-medium text-[#174C4B]">Serving Families Coast-to-Coast</span>
          </div>
        )}

      </div>

      {caption && (
        <figcaption className="mt-2 text-xs text-[#5F6864] font-medium tracking-tight">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
