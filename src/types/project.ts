export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  role: string[];
  status: "live" | "case-study" | "confidential";
  /** Who the project was built for. Leave unset until the owner confirms it. */
  classification?: "Internal Project" | "Demonstration Project" | "Client Project";
  cover: string;
  gallery: string[];
  excerpt: string;
  problem: string;
  solution: string;
  approach: string[];
  results: Metric[];
  liveUrl?: string;
  tags: string[];
  featured?: boolean;
}
