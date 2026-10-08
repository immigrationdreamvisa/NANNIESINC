export type PageId =
  | 'home'
  | 'about'
  | 'nanny-services'
  | 'caregiver-services'
  | 'how-it-works'
  | 'locations'
  | 'contact'
  | 'careers';

export type ServiceType = 'nanny' | 'caregiver' | 'both';

export type ArrangementType = 'live-in' | 'live-out' | 'undecided';

export interface LocationInfo {
  city: string;
  province: string;
  region: 'Ontario' | 'Alberta' | 'British Columbia';
  description: string;
  popularServices: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'nanny' | 'caregiver' | 'process';
}

export interface InquiryFormData {
  serviceType: 'nanny' | 'caregiver' | 'applicant';
  fullName: string;
  email: string;
  phone: string;
  city: string;
  province: string;
  postalCode?: string;
  arrangement: ArrangementType;
  startDate: string;
  // Specific for nanny:
  childrenCount?: string;
  childrenAges?: string;
  // Specific for caregiver:
  recipientRelationship?: string;
  careNeeds?: string[];
  // For applicant:
  yearsExperience?: string;
  currentStatus?: string;
  // General:
  additionalNotes?: string;
  preferredContactMethod: 'phone' | 'email';
}
