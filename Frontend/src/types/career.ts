export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
  slug: string;
}

export type JobCategory = 'engineering' | 'design' | 'management' | 'marketing' | 'hr';
