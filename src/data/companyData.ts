import { FAQItem, LocationInfo } from '../types';

export const COMPANY_DETAILS = {
  name: 'Nannies Inc.',
  establishedYear: 2001,
  tagline: 'Care That Fits Your Family',
  phone: '416.276.0131',
  phoneDisplay: '(416) 276-0131',
  email: 'info@nanniesinc.ca',
  address: '300 John St., Thornhill, ON L3T 5W4, Canada',
  operatingHours: 'Monday – Friday: 9:00 AM – 6:00 PM EST',
  provinces: ['Ontario', 'Alberta', 'British Columbia'] as const,
};

export const PROVINCE_LOCATIONS: LocationInfo[] = [
  // Ontario
  {
    city: 'Toronto',
    province: 'Ontario',
    region: 'Ontario',
    description: 'Providing tailored live-in and live-out nanny placements and senior care companions across the Greater Toronto Area.',
    popularServices: ['Full-time Nanny', 'Senior Companionship', 'Live-in Care'],
  },
  {
    city: 'Mississauga',
    province: 'Ontario',
    region: 'Ontario',
    description: 'Matching suburban Peel households with dependable, screened childcare and senior care professionals.',
    popularServices: ['Infant Care', 'Live-out Nanny', 'Elderly Assistance'],
  },
  {
    city: 'Vaughan & Thornhill',
    province: 'Ontario',
    region: 'Ontario',
    description: 'Home to our Canadian headquarters, serving York Region families with dedicated domestic matching.',
    popularServices: ['Full-time Live-in Nanny', 'Bilingual Caregivers', 'Senior Companion'],
  },
  {
    city: 'Ottawa',
    province: 'Ontario',
    region: 'Ontario',
    description: 'Supporting busy families and seniors across the National Capital Region with customized care arrangements.',
    popularServices: ['School-age Nanny', 'Live-in Elderly Care', 'Household Support'],
  },
  {
    city: 'Oakville & Burlington',
    province: 'Ontario',
    region: 'Ontario',
    description: 'Trusted in-home childcare and dignified elderly caregiver placements across Halton Region.',
    popularServices: ['Newborn Specialist', 'Full-time Live-out', 'Elderly Care'],
  },
  {
    city: 'Richmond Hill & Markham',
    province: 'Ontario',
    region: 'Ontario',
    description: 'Comprehensive family care placements tailored to multi-generational households and active family routines.',
    popularServices: ['Live-in Nanny', 'Caregiver for Parents', 'Meal Preparation'],
  },
  // Alberta
  {
    city: 'Calgary',
    province: 'Alberta',
    region: 'Alberta',
    description: 'Dedicated caregiver and childcare placements for Calgary families navigating demanding work schedules.',
    popularServices: ['Full-time Nanny', 'Senior Respite Care', 'Live-in Placements'],
  },
  {
    city: 'Edmonton',
    province: 'Alberta',
    region: 'Alberta',
    description: 'Connecting Capital Region families with experienced, carefully vetted in-home caregivers and nannies.',
    popularServices: ['Infant & Toddler Nanny', 'In-Home Senior Support', 'Live-in Care'],
  },
  // British Columbia
  {
    city: 'Vancouver',
    province: 'British Columbia',
    region: 'British Columbia',
    description: 'Matching West Coast households with compassionate caregivers and warm, reliable childcare professionals.',
    popularServices: ['Live-out Nanny', 'Active Childcare', 'Senior Companion Care'],
  },
  {
    city: 'Victoria',
    province: 'British Columbia',
    region: 'British Columbia',
    description: 'Providing thoughtful eldercare companions and attentive nannies for families throughout Greater Victoria.',
    popularServices: ['Gentle Senior Care', 'Live-in Companion', 'Part-time Childcare'],
  },
  {
    city: 'Surrey & Burnaby',
    province: 'British Columbia',
    region: 'British Columbia',
    description: 'Serving growing families across the Lower Mainland with personalized caregiver placement and support.',
    popularServices: ['Full-time Live-in', 'Child Routine Management', 'Senior Daily Assistance'],
  },
];

export const COMPANY_FAQS: FAQItem[] = [
  {
    question: 'What is the difference between nanny and caregiver services?',
    answer: 'Nanny services focus primarily on in-home childcare—nurturing daily routines, educational play, safe supervision, children\'s meals, and child-related light housekeeping. Caregiver services are dedicated to older adults or individuals requiring daily living support, companionship, meal preparation, mobility assistance, and gentle oversight.',
    category: 'general',
  },
  {
    question: 'Can our family request a live-in or live-out arrangement?',
    answer: 'Yes. We assist families in arranging both live-in and live-out placements. Live-in arrangements are particularly helpful for families needing comprehensive daily coverage, early morning or evening routines, or those participating in Canadian caregiver immigration pathways. Live-out arrangements accommodate regular daytime schedules.',
    category: 'general',
  },
  {
    question: 'How does Nannies Inc. screen and vet candidates?',
    answer: 'Every candidate undergoes a multi-step screening process: comprehensive personal interviews, verification of childcare or elderly care experience, detailed reference checks with previous employers, CPR/First Aid certification verification, and background checks. We also review temperament and household suitability.',
    category: 'process',
  },
  {
    question: 'How does the candidate interview and matching process work?',
    answer: 'We begin by conducting an in-depth consultation to understand your family\'s schedules, lifestyle, values, and specific care expectations. Next, we present pre-screened candidate profiles that closely match your criteria. You conduct personal interviews with selected candidates, and we guide you through the trial period and formal placement agreement.',
    category: 'process',
  },
  {
    question: 'Do you help with LMIA applications and immigration procedures?',
    answer: 'Yes. Nannies Inc. has an in-house immigration specialist experienced in navigating Employment and Social Development Canada (ESDC) requirements, including Labour Market Impact Assessment (LMIA) applications and work permit processing for qualified overseas or in-Canada caregivers.',
    category: 'process',
  },
  {
    question: 'What responsibilities are typically expected of a nanny?',
    answer: 'A nanny\'s primary duty is the attentive, loving care of your children—including meals, hygiene, nap schedules, homework guidance, and creative play. Secondary duties typically include light housekeeping directly related to the children, such as children\'s laundry, sanitizing toy areas, and tidying children\'s bedrooms.',
    category: 'nanny',
  },
  {
    question: 'What level of support does an elderly caregiver provide?',
    answer: 'Our caregivers provide non-medical personal assistance, warm companionship, assistance with morning and evening routines, meal planning and preparation, light housekeeping, grocery shopping accompaniment, and gentle medication reminders to help seniors live comfortably with dignity at home.',
    category: 'caregiver',
  },
  {
    question: 'Which Canadian provinces and cities do you currently serve?',
    answer: 'We place nannies and caregivers with families throughout Ontario (including Toronto, Mississauga, Vaughan, Markham, Ottawa, and surrounding areas), Alberta (Calgary and Edmonton), and British Columbia (Vancouver, Victoria, Surrey, and Burnaby).',
    category: 'general',
  },
];

export const SERVICE_HIGHLIGHTS = [
  {
    id: 'nanny',
    title: 'In-Home Childcare',
    subtitle: 'Nurturing routines tailored to your family',
    description: 'From newborn care to school-age development, our nannies foster a safe, stimulating, and warm environment directly within your home.',
    duties: [
      'Age-appropriate developmental activities and play',
      'Nutritious meal preparation for children',
      'Morning, naptime, and bedtime routine management',
      'Safe school drop-offs and activity coordination',
      'Children\'s laundry and play area organization',
    ],
  },
  {
    id: 'caregiver',
    title: 'Elderly & Companion Care',
    subtitle: 'Dignity, comfort, and independent living',
    description: 'Empowering seniors to remain comfortably in their cherished homes through compassionate daily companionship and attentive household assistance.',
    duties: [
      'Warm companionship and active conversation',
      'Assistance with daily dressing and grooming routines',
      'Wholesome, dietary-conscious meal preparation',
      'Medication reminders and schedule tracking',
      'Light housekeeping, laundry, and errands',
    ],
  },
];
