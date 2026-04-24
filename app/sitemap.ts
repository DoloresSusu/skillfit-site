import type { MetadataRoute } from "next";
import { arenas, skills, useCases } from "@/data/content";
import { seoGuides } from "@/data/seoGuides";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get-skill-fit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/guides", "/use-cases", "/skills", "/arena", "/submit", "/about"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date()
    })
  );

  const useCaseRoutes = useCases.map((item) => ({
    url: `${baseUrl}/use-cases/${item.slug}`,
    lastModified: new Date()
  }));

  const skillRoutes = skills.map((item) => ({
    url: `${baseUrl}/skills/${item.slug}`,
    lastModified: new Date()
  }));

  const arenaRoutes = arenas.map((item) => ({
    url: `${baseUrl}/arena/${item.slug}`,
    lastModified: new Date()
  }));

  const guideRoutes = seoGuides.map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...useCaseRoutes, ...skillRoutes, ...arenaRoutes, ...guideRoutes];
}
