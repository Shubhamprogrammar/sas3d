import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { team } from "@/data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/portfolio",
    "/contact",
    "/about",
    "/team",
    "/pricing",
    "/terms-conditions",
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/terms-conditions" ? 0.3 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE.url}/services/${service.id}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE.url}/portfolio/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const teamRoutes: MetadataRoute.Sitemap = team.map((member) => ({
    url: `${SITE.url}/team/${member.slug}`,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...teamRoutes];
}
