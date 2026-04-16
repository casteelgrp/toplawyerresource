import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/**
 * Generate redirect entries that match both with and without trailing slash.
 * Catch-all patterns (:path*) already handle both, so they get one entry.
 */
function r(source: string, destination: string) {
  if (source.includes(":path*")) {
    return [{ source, destination, permanent: true }];
  }
  const bare = source.replace(/\/+$/, "");
  return [
    { source: bare, destination, permanent: true as const },
    { source: `${bare}/`, destination, permanent: true as const },
  ];
}

const nextConfig: NextConfig = {
  trailingSlash: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https" as const, hostname: "images.unsplash.com" },
      { protocol: "https" as const, hostname: "images.pexels.com" },
    ],
  },
  async redirects() {
    return [
      // ── Old flat city URLs ──────────────────────────────────────
      ...r("/car-accident/jacksonville-fl", "/car-accident/fl/jacksonville"),
      ...r("/car-accident/miami-fl", "/car-accident/fl/miami"),
      ...r("/personal-injury/jacksonville-fl", "/personal-injury/fl/jacksonville"),
      ...r("/personal-injury/miami-fl", "/personal-injury/fl/miami"),
      ...r("/truck-accident/jacksonville-fl", "/truck-accident/fl/jacksonville"),
      ...r("/truck-accident/miami-fl", "/truck-accident/fl/miami"),
      ...r("/workers-compensation/jacksonville-fl", "/workers-compensation/fl/jacksonville"),
      ...r("/workers-compensation/miami-fl", "/workers-compensation/fl/miami"),

      // ── Florida cities: /best-*-lawyers-fl/ ─────────────────────
      ...r("/personal-injury/best-jacksonville-personal-injury-lawyers-fl", "/personal-injury/fl/jacksonville"),
      ...r("/personal-injury/best-miami-personal-injury-lawyers-fl", "/personal-injury/fl/miami"),
      ...r("/car-accident/best-jacksonville-car-accident-lawyers-fl", "/car-accident/fl/jacksonville"),
      ...r("/car-accident/best-miami-car-accident-lawyers-fl", "/car-accident/fl/miami"),
      ...r("/truck-accident/best-jacksonville-truck-accident-lawyers-fl", "/truck-accident/fl/jacksonville"),
      ...r("/truck-accident/best-miami-truck-accident-lawyers-fl", "/truck-accident/fl/miami"),
      ...r("/workers-compensation/best-jacksonville-workers-compensation-lawyers-fl", "/workers-compensation/fl/jacksonville"),
      ...r("/workers-compensation/best-miami-workers-compensation-lawyers-fl", "/workers-compensation/fl/miami"),

      // ── Jacksonville-adjacent cities ────────────────────────────
      ...r("/car-accident/best-orange-park-car-accident-lawyers", "/car-accident/fl/jacksonville"),
      ...r("/car-accident/best-st-johns-car-accident-lawyers", "/car-accident/fl/jacksonville"),
      ...r("/car-accident/best-st-augustine-car-accident-lawyers", "/car-accident/fl/jacksonville"),

      // ── Non-Florida removed cities ──────────────────────────────
      ...r("/personal-injury/best-cleveland-personal-injury-lawyers", "/personal-injury"),
      ...r("/personal-injury/best-cincinnati-personal-injury-lawyers", "/personal-injury"),
      ...r("/personal-injury/best-jersey-city-personal-injury-lawyers-nj", "/personal-injury"),
      ...r("/personal-injury/best-newark-personal-injury-lawyers-nj", "/personal-injury"),
      ...r("/personal-injury/best-paterson-personal-injury-lawyers-nj", "/personal-injury"),
      ...r("/car-accident/best-cleveland-car-accident-lawyers", "/car-accident"),
      ...r("/car-accident/best-cincinnati-car-accident-lawyers", "/car-accident"),
      ...r("/car-accident/best-jersey-city-car-accident-lawyers-nj", "/car-accident"),
      ...r("/car-accident/best-newark-car-accident-lawyers-nj", "/car-accident"),
      ...r("/car-accident/best-paterson-car-accident-lawyers-nj", "/car-accident"),
      ...r("/truck-accident/best-cleveland-truck-accident-lawyers", "/truck-accident"),
      ...r("/truck-accident/best-cincinnati-truck-accident-lawyers", "/truck-accident"),
      ...r("/truck-accident/best-jersey-city-truck-accident-lawyers-nj", "/truck-accident"),
      ...r("/truck-accident/best-newark-truck-accident-lawyers-nj", "/truck-accident"),
      ...r("/workers-compensation/best-jersey-city-workers-comp-lawyers-nj", "/workers-compensation"),
      ...r("/workers-compensation/best-newark-workers-comp-lawyers-nj", "/workers-compensation"),
      ...r("/workers-compensation/best-paterson-workers-comp-lawyers-nj", "/workers-compensation"),

      // ── Legacy article redirects ────────────────────────────────
      ...r("/personal-injury/2025-guide-jacksonvilles-25-most-dangerous-intersections", "/guides/jacksonville-dangerous-intersections"),
      ...r("/car-accident/understanding-jacksonvilles-most-dangerous-roads-for-motorists", "/guides/jacksonville-dangerous-roads"),
      ...r("/personal-injury/jacksonville-crash-reports-how-to-get-yours-step-by-step", "/guides/jacksonville-crash-reports"),
      ...r("/personal-injury/average-car-accident-settlement-in-jacksonville-with-examples", "/guides/average-car-accident-settlement-jacksonville"),
      ...r("/personal-injury/what-is-considered-a-serious-injury-under-floridas-no-fault-laws", "/guides/serious-injury-florida-no-fault"),
      ...r("/employment-law/what-is-a-right-to-sue-letter", "/guides/right-to-sue-letter"),
      ...r("/car-accident/what-if-i-was-injured-in-a-lyft-or-uber-accident-in-jacksonville-fl", "/guides/uber-lyft-accident-jacksonville"),
      ...r("/workers-compensation/what-should-i-do-if-my-workers-comp-claim-is-denied-in-tampa-fl", "/guides/workers-comp-claim-denied-florida"),
      ...r("/car-accident/how-floridas-no-fault-insurance-applies-to-rideshare-accidents", "/guides/florida-no-fault-rideshare-accidents"),
      ...r("/personal-injury/how-floridas-no-fault-insurance-works-in-minor-car-accidents", "/guides/florida-no-fault-minor-accidents"),
      ...r("/personal-injury/dealing-with-medical-bills-after-a-florida-car-accident-what-are-your-options", "/guides/medical-bills-after-florida-car-accident"),
      ...r("/personal-injury/tourist-injuries-in-jacksonville-what-non-residents-should-know", "/guides/tourist-injuries-jacksonville"),
      ...r("/personal-injury/what-to-do-if-youre-injured-in-a-hit-and-run-in-jacksonville", "/guides/hit-and-run-jacksonville"),
      ...r("/personal-injury/how-does-contingency-fee-basis-work-in-personal-injury-cases", "/guides/understanding-contingency-fees"),
      ...r("/personal-injury/signs-youre-being-lowballed-by-an-insurance-company-after-a-truck-accident", "/guides"),
      ...r("/personal-injury/how-electronic-health-records-ehr-impact-personal-injury-claims-and-settlements", "/personal-injury"),
      ...r("/personal-injury/understanding-new-yorks-no-fault-insurance-law-what-it-means-for-car-accident-victims", "/guides"),
      ...r("/personal-injury/personal-injury-claims-legal-terms-need-to-know", "/guides/what-is-negligence-personal-injury"),
      ...r("/criminal-law/refusing-a-breathalyzer-in-new-york-what-are-the-consequences", "/guides"),
      ...r("/employment-law/understanding-workers-compensation-for-construction-accidents", "/workers-compensation"),
      ...r("/family-law/divorce-and-community-property-laws-in-california-what-you-need-to-know", "/guides"),

      // ── Category redirects ──────────────────────────────────────
      ...r("/legal-guides", "/guides"),
      ...r("/topics/personal-injury", "/personal-injury"),
      ...r("/topics/criminal-law", "/guides"),
      ...r("/topics/employment-law", "/guides"),
      ...r("/topics/family-law", "/guides"),
      ...r("/topics/workers-compensation", "/workers-compensation"),

      // ── WordPress catch-alls ────────────────────────────────────
      ...r("/wp-content/:path*", "/"),
      ...r("/wp-admin/:path*", "/"),
      ...r("/feed/:path*", "/"),
      ...r("/tag/:path*", "/guides"),
      ...r("/topics/:path*", "/guides"),
    ];
  },
};

export default withMDX(nextConfig);
