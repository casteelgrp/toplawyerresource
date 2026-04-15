import { MetadataRoute } from "next";
import cities from "../data/cities.json";

const PRACTICE_AREAS = ["personal-injury", "car-accident", "truck-accident", "workers-compensation"];
const GUIDE_SLUGS = [
  "jacksonville-dangerous-intersections",
  "right-to-sue-letter",
  "average-car-accident-settlement-florida",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://toplawyerresource.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/tools/case-evaluator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/settlement-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const practiceAreaPages: MetadataRoute.Sitemap = PRACTICE_AREAS.map((area) => ({
    url: `${base}/${area}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const stateHubPages: MetadataRoute.Sitemap = PRACTICE_AREAS.map((area) => ({
    url: `${base}/${area}/fl`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const cityPages: MetadataRoute.Sitemap = PRACTICE_AREAS.flatMap((area) =>
    cities.map((city) => ({
      url: `${base}/${area}/fl/${city.citySlug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const guidePages: MetadataRoute.Sitemap = GUIDE_SLUGS.map((slug) => ({
    url: `${base}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...practiceAreaPages, ...stateHubPages, ...cityPages, ...guidePages];
}
