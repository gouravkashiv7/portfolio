import type { MetadataRoute } from "next";
import { caseStudies } from "@/app/_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gouravkashiv.com";
  // Update when page content changes; a build-time date would claim every
  // deploy modified every page.
  const lastModified = new Date("2026-11-11");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudies.map((p) => ({
      url: `${baseUrl}/work/${p.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
