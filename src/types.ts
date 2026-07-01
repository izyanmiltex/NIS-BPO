export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  campaignType: string;
  monthlyVolume: number;
  currentCpa: number;
  targetCpa: number;
  message: string;
  status: 'new' | 'contacted' | 'archived';
  submittedAt: string;
  notes?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
  submittedAt: string;
  notes?: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Night Shift';
  location: string;
  experienceRequired: string;
  salaryRange: string;
  description: string;
  requirements: string[];
  benefits: string[];
}
