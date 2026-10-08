import React from 'react';
import { InquiryForm } from './InquiryForm';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceType?: 'nanny' | 'caregiver' | 'applicant';
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialServiceType = 'nanny',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden border border-[#292E2C]/10 my-8">
        {/* Header bar */}
        <div className="bg-[#FAF8F3] px-6 py-4 border-b border-[#292E2C]/8 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl text-[#174C4B]">
              Care That Fits Your Household
            </h3>
            <p className="text-xs text-[#5F6864]">
              Start your placement conversation with Nannies Inc.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5F6864] hover:text-[#292E2C] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <InquiryForm
            initialServiceType={initialServiceType}
            onSubmitted={() => {
              // keep modal open with success message or allow user to close
            }}
          />
        </div>
      </div>
    </div>
  );
};
