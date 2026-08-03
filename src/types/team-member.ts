export type TeamRole = "Designer" | "Developer" | "Writer" | "Marketing" | "Product" | "Founder";

export interface TeamMember {
  slug: string;
  name: string;
  role: TeamRole;
  specialty: string;
  bio: string;
  photo: string;
  experienceYears: number;
  projects: number;
  skills: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
  founder?: boolean;
}
