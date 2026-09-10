export interface Product {
  id: string;
  name: string;
  category: 'Powder Coating Machines' | 'Powder Coating Powder' | 'furniture manufacturing';
  subcategory: string;
  description: string;
  image: string;
  svgImage?: string;
  specs: Record<string, string>;
  materials?: string[];
  finishes?: string[];
  code?: string; // especially for Advanced Coating Solutions
  featured?: boolean;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  productInterestedIn: string;
  message: string;
  timestamp: string;
  status: 'pending' | 'reviewed';
}

export interface DealerRegistration {
  id: string;
  firmName: string;
  contactPerson: string;
  email: string;
  phone: string;
  gstNumber?: string;
  address: string;
  state: string;
  experienceYears: number;
  message?: string;
  timestamp: string;
}

export interface CareerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resumeUrl?: string; // simulation
  coverLetter?: string;
  timestamp: string;
}
