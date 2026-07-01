import { JobListing, Inquiry, JobApplication } from './types';

export const JOB_LISTINGS: JobListing[] = [
  {
    id: 'csr-01',
    title: 'Customer Support Executive (Voice)',
    department: 'Customer Service Operations',
    type: 'Full-time',
    location: 'Kanpur, Uttar Pradesh (On-site)',
    experienceRequired: '0 - 2 years (Freshers with excellent communication are welcome)',
    salaryRange: '₹18,000 - ₹28,000 / month',
    description: 'We are seeking energetic individuals to join our inbound customer support division. You will serve as the primary contact point for international clients, handling queries, resolving issues, and delivering exceptional support.',
    requirements: [
      'Fluent verbal and written English communication skills.',
      'Active listening skills and ability to handle customer grievances calmly.',
      'Basic computer literacy and typing speed of at least 30 WPM.',
      'Ready to work in rotational shifts (including US night shifts).'
    ],
    benefits: [
      'Competitive salary with attractive night shift allowances.',
      'Performance-based monthly bonuses and incentives.',
      'Comprehensive on-the-job training program.',
      'Friendly and collaborative corporate workspace.'
    ]
  },
  {
    id: 'tel-02',
    title: 'Outbound Sales & Lead Generation Specialist',
    department: 'Telemarketing',
    type: 'Full-time',
    location: 'Kanpur, Uttar Pradesh (On-site)',
    experienceRequired: '1 - 3 years in International BPO/Telemarketing',
    salaryRange: '₹22,000 - ₹35,000 / month + High Commissions',
    description: 'Join our target-driven outbound campaigns. You will engage with prospective clients globally, present value propositions, and meet cost-per-acquisition metrics to drive successful outcomes for our outsourcing partners.',
    requirements: [
      'Proven track record in cold calling, lead generation, or outbound sales.',
      'High persuasive skills with a strong target-oriented mindset.',
      'Ability to articulate product value propositions clearly and concisely.',
      'Excellent objection-handling and negotiation skills.'
    ],
    benefits: [
      'Uncapped sales commission structures.',
      'Weekly performance recognitions and spot awards.',
      'Fast-track career growth paths to Team Leader and Manager roles.',
      'Free meals and complimentary cab facilities for night shifts.'
    ]
  },
  {
    id: 'tech-03',
    title: 'Technical Support Associate (Tier 1/2)',
    department: 'Helpdesk & Technical Operations',
    type: 'Night Shift',
    location: 'Kanpur, Uttar Pradesh (On-site)',
    experienceRequired: '1+ years in Technical Support / IT Service Desk',
    salaryRange: '₹25,000 - ₹38,000 / month',
    description: 'Looking for troubleshooting enthusiasts to provide technical hardware, software, and account access assistance to users of our global clients. You will log tickets and walk customers through self-resolution steps.',
    requirements: [
      'Undergraduate or Graduate in IT, CS, or related disciplines (BCA, B.Tech, etc. preferred).',
      'Strong knowledge of OS configurations, network fundamentals, and software troubleshooting.',
      'Outstanding customer service empathy paired with logical diagnostic thinking.',
      'Familiarity with ticketing systems like Zendesk, Jira, or ServiceNow.'
    ],
    benefits: [
      'Skill-based premium allowances and technical certifications support.',
      'Advanced technical exposure to modern enterprise IT networks.',
      'Medical insurance coverage for self and family.',
      'Structured annual appraisals.'
    ]
  }
];

export const SEED_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Sarah Jenkins',
    email: 'sjenkins@apexretail.io',
    company: 'Apex Retail Solutions LLC',
    phone: '+1 (555) 342-9081',
    campaignType: 'Inbound Customer Support',
    monthlyVolume: 12000,
    currentCpa: 4.5,
    targetCpa: 2.8,
    message: 'We are experiencing high seasonal volume for our e-commerce platform. We want to outsource our overnight and weekend email/chat customer support. Our current acquisition and support cost is too high, and we want to partner with NIS to optimize this.',
    status: 'new',
    submittedAt: '2026-06-27T10:15:00Z',
    notes: 'Interested in chat and email blended channels. Shift timings must cover US East/West Coasts.'
  },
  {
    id: 'inq-2',
    name: 'Rajesh Mehta',
    email: 'r.mehta@fintechflow.com',
    company: 'FinTech Flow Corp',
    phone: '+91 98765 43210',
    campaignType: 'Lead Generation',
    monthlyVolume: 8500,
    currentCpa: 12.0,
    targetCpa: 8.5,
    message: 'We require a professional outbound team to qualify B2B merchants for our payment terminal campaign. Need agent counts starting from 10 FTEs. Kanpur hub is preferred due to cost structures.',
    status: 'contacted',
    submittedAt: '2026-06-26T14:30:00Z',
    notes: 'Called on June 27th. Shared initial brochure. Scheduled a video proposal for Monday.'
  },
  {
    id: 'inq-3',
    name: 'David Vandervelde',
    email: 'david@securecloud.nl',
    company: 'SecureCloud Europe',
    phone: '+31 20 555 8821',
    campaignType: 'Technical Support',
    monthlyVolume: 4000,
    currentCpa: 18.0,
    targetCpa: 12.0,
    message: 'We are seeking Tier 1 support partners who can handle password resets, subscription setups, and standard account troubleshooting. Agents must have a solid tech aptitude.',
    status: 'archived',
    submittedAt: '2026-06-24T08:45:00Z',
    notes: 'Archived - Client decided to delay campaign launch until Q4.'
  }
];

export const SEED_APPLICATIONS: JobApplication[] = [
  {
    id: 'app-1',
    jobId: 'csr-01',
    jobTitle: 'Customer Support Executive (Voice)',
    fullName: 'Amit Sharma',
    email: 'amit.sharma99@gmail.com',
    phone: '+91 91234 56789',
    experience: 'Fresher (Recently graduated with B.Com from CSJM University)',
    skills: 'Excellent verbal English, Active Listening, Customer Care, MS Office',
    coverLetter: 'I recently finished my degree and have been praised for my spoken English skills. I am looking to start a career in customer support with NIS BPO because they are a respected, growing firm in Kanpur. I am fully ready to work in night shifts.',
    status: 'shortlisted',
    submittedAt: '2026-06-27T11:20:00Z',
    notes: 'Interview scheduled for Tuesday at 2 PM at Kanpur office.'
  },
  {
    id: 'app-2',
    jobId: 'tel-02',
    jobTitle: 'Outbound Sales & Lead Generation Specialist',
    fullName: 'Priya Verma',
    email: 'priya.v.leads@yahoo.com',
    phone: '+91 88776 55443',
    experience: '2 years as Sales Representative at Concentrix',
    skills: 'B2B Sales, Cold Calling, Lead Qualifying, Target Achieving, Salesforce',
    coverLetter: 'I have two years of intensive hands-on experience handling international lead gen campaigns. I am skilled at overcoming objections and meeting sales targets. I would love to bring my expertise to NIS BPO to help achieve high ROI for client campaigns.',
    status: 'reviewed',
    submittedAt: '2026-06-26T16:10:00Z',
    notes: 'Excellent candidate profile. Standard international BPO voice quality is there.'
  }
];
