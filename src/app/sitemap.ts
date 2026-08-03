import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";
import { projects } from "@/data/projects";
import { team } from "@/data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/portfolio", "/team", "/pricing", "/contact"];
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE.url}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const teamRoutes: MetadataRoute.Sitemap = team.map((member) => ({
    url: `${SITE.url}/team/${member.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...projectRoutes, ...teamRoutes];
}
