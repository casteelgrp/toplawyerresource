import { MetadataRoute } from "next";
import cities from "../data/cities.json";

const PRACTICE_AREAS = [
  "personal-injury",
  "car-accident",
  "truck-accident",
  "workers-compensation",
];

const GUIDE_SLUGS = [
  // National guides
  "what-to-do-after-car-accident",
  "how-to-choose-personal-injury-lawyer",
  "understanding-contingency-fees",
  "what-is-negligence-personal-injury",
  "types-of-compensation-personal-injury",
  "how-long-personal-injury-case-takes",
  // Florida guides
  "serious-injury-florida-no-fault",
  "average-car-accident-settlement-florida",
  "medical-bills-after-florida-car-accident",
  "florida-no-fault-minor-accidents",
  "florida-no-fault-rideshare-accidents",
  "workers-comp-claim-denied-florida",
  "right-to-sue-letter",
  // Jacksonville guides
  "jacksonville-dangerous-intersections",
  "jacksonville-dangerous-roads",
  "jacksonville-crash-reports",
  "uber-lyft-accident-jacksonville",
  "hit-and-run-jacksonville",
  "average-car-accident-settlement-jacksonville",
  "tourist-injuries-jacksonville",
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
    { url: `${base}/thank-you`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
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

  return [
    ...staticPages,
    ...practiceAreaPages,
    ...stateHubPages,
    ...cityPages,
    ...guidePages,
  ];
}
