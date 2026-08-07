import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    slug: "sandeep-pal",
    name: "Sandeep Pal",
    role: "Founder",
    specialty: "Product design & engineering",
    bio: "Sandeep founded Craftlab in 2023 after a decade across agencies and startups. He leads every engagement from discovery to delivery and still designs every Tuesday.",
    photo: "/images/team/m1.svg",
    experienceYears: 12,
    projects: 40,
    skills: ["Product Strategy", "Design Systems", "React", "Next.js"],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
    founder: true,
  },
  {
    slug: "abhishek-mankumbare",
    name: "Abhishek Mankumbare",
    role: "Founder",
    specialty: "UI/UX & brand identity",
    bio: "Abhishek turns messy problems into clean, usable interfaces. She's obsessed with typography, motion and making complex products feel simple.",
    photo: "/images/team/m2.svg",
    experienceYears: 8,
    projects: 30,
    skills: ["UI Design", "UX Research", "Figma", "Branding"],
    socials: {
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
    founder: true,
  },
  {
    slug: "shubham-maurya",
    name: "Shubham Maurya",
    role: "Developer",
    specialty: "Full-stack Developer and DevOps Engineer",
    bio: "shubham builds fast, accessible web apps that stay fast as they scale. He cares about the last millisecond as much as the first.",
    photo: "/images/team/m3.svg",
    experienceYears: 9,
    projects: 35,
    skills: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com/shubhamprogrammar",
    },
    founder: true,
  },
  // {
  //   slug: "sofia-ivanova",
  //   name: "Sofia Ivanova",
  //   role: "Designer",
  //   specialty: "Design systems & prototyping",
  //   bio: "Sofia keeps our work consistent at scale — building the systems, components and prototypes that make every other craft faster.",
  //   photo: "/images/team/m4.svg",
  //   experienceYears: 7,
  //   projects: 25,
  //   skills: ["Design Systems", "Prototyping", "Motion Design"],
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     dribbble: "https://dribbble.com",
  //   },
  // },
  // {
  //   slug: "tom-reyes",
  //   name: "Tom Reyes",
  //   role: "Writer",
  //   specialty: "Product & marketing copy",
  //   bio: "Tom writes copy that sounds like a smart friend, not a brochure. He leads our brand voice and content strategy work.",
  //   photo: "/images/team/m5.svg",
  //   experienceYears: 6,
  //   projects: 22,
  //   skills: ["Content Strategy", "SEO", "Brand Voice"],
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //     twitter: "https://twitter.com",
  //   },
  // },
  // {
  //   slug: "emma-chen",
  //   name: "Emma Chen",
  //   role: "Marketing",
  //   specialty: "Growth & performance",
  //   bio: "Emma runs growth sprints — paid, organic, lifecycle — and makes sure every project we ship has a measurable business outcome.",
  //   photo: "/images/team/m6.svg",
  //   experienceYears: 8,
  //   projects: 28,
  //   skills: ["Growth", "Performance Marketing", "Analytics"],
  //   socials: {
  //     linkedin: "https://linkedin.com",
  //   },
  // },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}
