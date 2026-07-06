export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
