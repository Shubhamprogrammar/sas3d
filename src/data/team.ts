import type { TeamMember } from "@/types";

export const team: TeamMember[] = [
  {
    slug: "sandeep-pal",
    name: "Sandeep Pal",
    role: "Founder",
    specialty: "Product design & engineering",
    bio: "Sandeep is a full-stack product engineer who builds scalable, high-performance applications from idea to production. With expertise in modern web technologies and cloud infrastructure, he focuses on delivering clean architecture, seamless user experiences, and business-driven solutions.",
    photo: "/images/team/sandeep_profile.png",
    experienceYears: 3,
    projects: 12,
    skills: ["Product Strategy", "Design Systems", "React", "Next.js", "Node.js", "AWS", "Docker", "CI/CD", "Kubernetes", "MongoDB", "REST APIs", "System Design"],
    socials: {
      linkedin: "https://www.linkedin.com/in/sandeep-pal-611a40260/",
      // twitter: "https://twitter.com",
      github: "https://github.com/pal606Sandeep",
    },
    founder: true,
  },
  {
    slug: "abhishek-mankumbare",
    name: "Abhishek Mankumbare",
    role: "Founder",
    specialty: "UI/UX & brand identity",
    bio: "Abhishek is a creative UI/UX designer who transforms complex ideas into intuitive and visually compelling digital experiences. He specializes in crafting user-centric designs, strong brand identities, and engaging interfaces that enhance usability and drive product success.",
    photo: "/images/team/abhishek.jpeg",
    experienceYears: 3,
    projects: 10,
    skills: ["UI Design", "UX Research", "Figma", "Branding", "Motion Design", "Prototyping", "Design Systems", "Accessibility", "User Testing"],
    socials: {
      linkedin: "https://www.linkedin.com/in/abhishek-mankumbare-326bb020a/",
      github: "https://github.com/Abhishek937288",
    },
    founder: true,
  },
  {
    slug: "shubham-maurya",
    name: "Shubham Maurya",
    role: "Developer",
    specialty: "Full-stack & performance",
    bio: "Shubham is a performance-focused full-stack developer who builds fast, scalable, and reliable web applications. He specializes in optimizing systems, improving load times, and ensuring applications remain efficient and responsive as they grow.",
    photo: "/images/team/shubham.jpeg",
    experienceYears: 3,
    projects: 15,
    skills: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "CI/CD","Kubernetes", "GraphQL", "REST APIs"],
    socials: {
      linkedin: "https://www.linkedin.com/in/shubham-maurya-9932a3268/",
      github: "https://github.com/Shubhamprogrammar",
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
