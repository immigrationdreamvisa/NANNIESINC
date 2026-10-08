import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

interface InquiryFormProps {
  initialServiceType?: 'nanny' | 'caregiver' | 'applicant';
  onSubmitted?: () => void;
  isEmbedded?: boolean;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialServiceType = 'nanny',
  onSubmitted,
  isEmbedded = false,
}) => {
  const [step, setStep] = useState<number>(1);
  const [serviceType, setServiceType] = useState<'nanny' | 'caregiver' | 'applicant'>(initialServiceType);
  
  const [formData, setFormData] = useState<InquiryFormData>({
    serviceType: initialServiceType,
    fullName: '',
    email: '',
    phone: '',
    city: '',
    province: 'Ontario',
    postalCode: '',
    arrangement: 'live-in',
    startDate: 'Within 1-3 months',
    childrenCount: '1-2 children',
    childrenAges: '',
    recipientRelationship: 'Parent / Relative',
    careNeeds: ['Companionship & Conversation', 'Meal Preparation'],
    yearsExperience: '2-5 years',
    currentStatus: 'Authorized to work in Canada',
    additionalNotes: '',
    preferredContactMethod: 'phone',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (field: keyof InquiryFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleCheckboxToggle = (need: string) => {
    const current = formData.careNeeds || [];
    if (current.includes(need)) {
      handleInputChange('careNeeds', current.filter((item) => item !== need));
    } else {
      handleInputChange('careNeeds', [...current, need]);
    }
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (serviceType === 'nanny') {
      if (!formData.childrenCount) errs.childrenCount = 'Please indicate the number of children.';
    } else if (serviceType === 'caregiver') {
      if (!formData.careNeeds || formData.careNeeds.length === 0) {
        errs.careNeeds = 'Please select at least one area of assistance.';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.city.trim()) errs.city = 'Please enter your city.';
    if (!formData.province) errs.province = 'Please select your province.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    const phoneRegex = /^[0-9\-\+\(\)\s.]{10,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid Canadian phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSubmitted) onSubmitted();
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 sm:p-10 border border-[#174C4B]/15 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#DDE8DD] text-[#174C4B] mx-auto flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#174C4B] mb-3">
          Inquiry Received With Care
        </h3>
        <p className="text-sm text-[#292E2C]/80 max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-[#174C4B]">{formData.fullName}</span>. An experienced placement coordinator from our Canadian office will review your household details and contact you via {formData.preferredContactMethod} within one business day.
        </p>

        <div className="bg-[#FAF8F3] p-4 rounded-lg text-left text-xs text-[#5F6864] space-y-1.5 max-w-sm mx-auto border border-[#292E2C]/5 mb-8">
          <p><strong className="text-[#292E2C]">Service:</strong> {serviceType === 'nanny' ? 'In-Home Childcare' : serviceType === 'caregiver' ? 'Elderly Caregiver' : 'Care Professional Application'}</p>
          <p><strong className="text-[#292E2C]">Location:</strong> {formData.city}, {formData.province}</p>
          <p><strong className="text-[#292E2C]">Arrangement:</strong> {formData.arrangement === 'live-in' ? 'Live-In' : formData.arrangement === 'live-out' ? 'Live-Out' : 'Flexible'}</p>
          <p><strong className="text-[#292E2C]">Direct Office Line:</strong> {COMPANY_DETAILS.phoneDisplay}</p>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
          }}
          className="text-xs font-medium text-[#174C4B] hover:underline cursor-pointer"
        >
          Submit another inquiry or update requirements
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl border border-[#292E2C]/10 shadow-sm ${isEmbedded ? 'p-6 sm:p-8' : 'p-6 sm:p-10'}`}>
      
      {/* Service Type Switcher / Segmented Selector */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#5F6864] mb-2">
          Select Your Inquiry Pathway
        </label>
        <div className="grid grid-cols-3 gap-1 bg-[#FAF8F3] p-1.5 rounded-lg border border-[#292E2C]/8">
          <button
            type="button"
            onClick={() => {
              setServiceType('nanny');
              handleInputChange('serviceType', 'nanny');
            }}
            className={`py-2 px-2 text-xs font-medium rounded transition-all cursor-pointer truncate ${
              serviceType === 'nanny'
                ? 'bg-[#174C4B] text-white shadow-sm'
                : 'text-[#292E2C] hover:text-[#174C4B]'
            }`}
          >
            I Need a Nanny
          </button>
          <button
            type="button"
            onClick={() => {
              setServiceType('caregiver');
              handleInputChange('serviceType', 'caregiver');
            }}
            className={`py-2 px-2 text-xs font-medium rounded transition-all cursor-pointer truncate ${
              serviceType === 'caregiver'
                ? 'bg-[#174C4B] text-white shadow-sm'
                : 'text-[#292E2C] hover:text-[#174C4B]'
            }`}
          >
            I Need a Caregiver
          </button>
          <button
            type="button"
            onClick={() => {
              setServiceType('applicant');
              handleInputChange('serviceType', 'applicant');
            }}
            className={`py-2 px-2 text-xs font-medium rounded transition-all cursor-pointer truncate ${
              serviceType === 'applicant'
                ? 'bg-[#174C4B] text-white shadow-sm'
                : 'text-[#292E2C] hover:text-[#174C4B]'
            }`}
          >
            Looking for Work
          </button>
        </div>
      </div>

      {/* Step Progress Tracker */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-[#5F6864] mb-2">
          <span>Step {step} of 3: {step === 1 ? 'Care Requirements' : step === 2 ? 'Location & Timing' : 'Contact Details'}</span>
          <span className="font-medium text-[#174C4B]">{Math.round((step / 3) * 100)}% Completed</span>
        </div>
        <div className="w-full bg-[#FAF8F3] h-1.5 rounded-full overflow-hidden border border-[#292E2C]/5">
          <div
            className="h-full bg-[#174C4B] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* STEP 1: CARE DETAILS */}
        {step === 1 && (
          <div className="space-y-5 animate-fadeIn">
            {serviceType === 'nanny' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                    How many children need care?
                  </label>
                  <select
                    value={formData.childrenCount}
                    onChange={(e) => handleInputChange('childrenCount', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] focus:ring-1 focus:ring-[#174C4B] outline-none"
                  >
                    <option value="1 child">1 Child</option>
                    <option value="2 children">2 Children</option>
                    <option value="3+ children">3 or more Children</option>
                    <option value="Expecting / Newborn">Expecting / Newborn Arrival</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                    Ages of children (approximate)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10 months and 3 years old"
                    value={formData.childrenAges || ''}
                    onChange={(e) => handleInputChange('childrenAges', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] focus:ring-1 focus:ring-[#174C4B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                    Preferred Arrangement
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${formData.arrangement === 'live-in' ? 'border-[#174C4B] bg-[#DDE8DD]/25' : 'border-[#292E2C]/15 hover:bg-[#FAF8F3]'}`}>
                      <input
                        type="radio"
                        name="arrangement"
                        checked={formData.arrangement === 'live-in'}
                        onChange={() => handleInputChange('arrangement', 'live-in')}
                        className="text-[#174C4B] focus:ring-[#174C4B]"
                      />
                      <div>
                        <span className="text-sm font-medium text-[#292E2C] block">Live-In</span>
                        <span className="text-[11px] text-[#5F6864]">Full-time coverage in your home</span>
                      </div>
                    </label>

                    <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${formData.arrangement === 'live-out' ? 'border-[#174C4B] bg-[#DDE8DD]/25' : 'border-[#292E2C]/15 hover:bg-[#FAF8F3]'}`}>
                      <input
                        type="radio"
                        name="arrangement"
                        checked={formData.arrangement === 'live-out'}
                        onChange={() => handleInputChange('arrangement', 'live-out')}
                        className="text-[#174C4B] focus:ring-[#174C4B]"
                      />
                      <div>
                        <span className="text-sm font-medium text-[#292E2C] block">Live-Out</span>
                        <span className="text-[11px] text-[#5F6864]">Daytime / scheduled hours</span>
                      </div>
                    </label>
                  </div>
                </div>
              </>
            )}

            {serviceType === 'caregiver' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                    Who will be receiving care?
                  </label>
                  <select
                    value={formData.recipientRelationship}
                    onChange={(e) => handleInputChange('recipientRelationship', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] focus:ring-1 focus:ring-[#174C4B] outline-none"
                  >
                    <option value="Aging Parent / In-Law">Aging Parent or In-Law</option>
                    <option value="Spouse / Partner">Spouse or Partner</option>
                    <option value="Myself">Myself</option>
                    <option value="Other Family Member">Other Family Member</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-2">
                    Primary Areas of Support Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Companionship & Conversation',
                      'Nutritious Meal Preparation',
                      'Morning & Evening Routines',
                      'Gentle Medication Reminders',
                      'Light Housekeeping & Laundry',
                      'Mobility & Walking Escort',
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-2.5 p-2 rounded border border-[#292E2C]/10 hover:bg-[#FAF8F3] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.careNeeds?.includes(item)}
                          onChange={() => handleCheckboxToggle(item)}
                          className="rounded text-[#174C4B] focus:ring-[#174C4B]"
                        />
                        <span className="text-[#292E2C]">{item}</span>
                      </label>
                    ))}
                  </div>
                  {errors.careNeeds && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.careNeeds}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                    Preferred Placement Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer ${formData.arrangement === 'live-in' ? 'border-[#174C4B] bg-[#DDE8DD]/25' : 'border-[#292E2C]/15'}`}>
                      <input
                        type="radio"
                        name="arrangement-caregiver"
                        checked={formData.arrangement === 'live-in'}
                        onChange={() => handleInputChange('arrangement', 'live-in')}
                        className="text-[#174C4B]"
                      />
                      <span className="text-xs font-medium text-[#292E2C]">Live-In Caregiver</span>
                    </label>
                    <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer ${formData.arrangement === 'live-out' ? 'border-[#174C4B] bg-[#DDE8DD]/25' : 'border-[#292E2C]/15'}`}>
                      <input
                        type="radio"
                        name="arrangement-caregiver"
                        checked={formData.arrangement === 'live-out'}
                        onChange={() => handleInputChange('arrangement', 'live-out')}
                        className="text-[#174C4B]"
                      />
                      <span className="text-xs font-medium text-[#292E2C]">Live-Out / Scheduled</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            {serviceType === 'applicant' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                    Years of Childcare or Caregiver Experience
                  </label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => handleInputChange('yearsExperience', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] outline-none"
                  >
                    <option value="1-2 years">1 to 2 Years</option>
                    <option value="2-5 years">2 to 5 Years</option>
                    <option value="5+ years">5+ Years Professional Experience</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                    Current Canadian Work Status
                  </label>
                  <select
                    value={formData.currentStatus}
                    onChange={(e) => handleInputChange('currentStatus', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] outline-none"
                  >
                    <option value="Canadian Citizen or Permanent Resident">Canadian Citizen or Permanent Resident</option>
                    <option value="Open Work Permit Holder">Valid Open Work Permit</option>
                    <option value="LMIA / Caregiver Program Applicant">Seeking LMIA / Employer Sponsorship</option>
                  </select>
                </div>
              </>
            )}

            <div className="pt-3">
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3 bg-[#174C4B] hover:bg-[#0F3332] text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                Continue to Location & Timing →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: LOCATION & TIMING */}
        {step === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                  City / Town <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toronto, Calgary, Vancouver"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:ring-1 outline-none ${
                    errors.city ? 'border-red-500 ring-red-500' : 'border-[#292E2C]/20 focus:border-[#174C4B] focus:ring-[#174C4B]'
                  }`}
                />
                {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                  Province <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] outline-none"
                >
                  <option value="Ontario">Ontario</option>
                  <option value="Alberta">Alberta</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Other Canadian Province">Other Canadian Province</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                When do you need care to begin?
              </label>
              <select
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] outline-none"
              >
                <option value="Immediately / As soon as possible">As soon as possible</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="Within 1-3 months">Within 1–3 months</option>
                <option value="Planning ahead (3-6 months)">Planning ahead (3–6 months)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#292E2C] mb-1.5">
                Additional Household Preferences or Questions (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share any special preferences, languages spoken, dietary considerations, or pet accommodations..."
                value={formData.additionalNotes || ''}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#292E2C]/20 bg-white focus:border-[#174C4B] outline-none resize-none"
              />
            </div>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-2.5 border border-[#292E2C]/20 hover:bg-[#FAF8F3] text-[#292E2C] font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-2/3 py-2.5 bg-[#174C4B] hover:bg-[#0F3332] text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                Continue to Contact Details →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT INFORMATION */}
        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-sm font-medium text-[#292E2C] mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Sarah Henderson"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white outline-none ${
                  errors.fullName ? 'border-red-500' : 'border-[#292E2C]/20 focus:border-[#174C4B]'
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#292E2C] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.ca"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white outline-none ${
                    errors.email ? 'border-red-500' : 'border-[#292E2C]/20 focus:border-[#174C4B]'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#292E2C] mb-1">
                  Canadian Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(416) 555-0192"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white outline-none ${
                    errors.phone ? 'border-red-500' : 'border-[#292E2C]/20 focus:border-[#174C4B]'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#5F6864] mb-1.5">
                Preferred method for our initial conversation:
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-xs text-[#292E2C] cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    checked={formData.preferredContactMethod === 'phone'}
                    onChange={() => handleInputChange('preferredContactMethod', 'phone')}
                    className="text-[#174C4B]"
                  />
                  <span>Phone call</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-[#292E2C] cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    checked={formData.preferredContactMethod === 'email'}
                    onChange={() => handleInputChange('preferredContactMethod', 'email')}
                    className="text-[#174C4B]"
                  />
                  <span>Email reply</span>
                </label>
              </div>
            </div>

            {/* Privacy notice */}
            <p className="text-[11px] text-[#5F6864] leading-relaxed pt-2">
              By submitting this inquiry, you agree to receive placement guidance from Nannies Inc. We treat all family information in strict confidence and never share details with unauthorized parties.
            </p>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 py-3 border border-[#292E2C]/20 hover:bg-[#FAF8F3] text-[#292E2C] font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 py-3 bg-[#174C4B] hover:bg-[#0F3332] text-white font-medium text-sm rounded-lg transition-colors shadow-sm cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting Details...' : 'Submit Placement Inquiry'}
              </button>
            </div>
          </div>
        )}
      </form>

    </div>
  );
};
