import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  trailingSlash: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async redirects() {
    return [
      // ═══════════════════════════════════════════════════════════════
      // Old flat city URLs: /:area/:city-fl → /:area/fl/:city
      // ═══════════════════════════════════════════════════════════════
      {
        source: "/car-accident/jacksonville-fl",
        destination: "/car-accident/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/car-accident/miami-fl",
        destination: "/car-accident/fl/miami",
        permanent: true,
      },
      {
        source: "/personal-injury/jacksonville-fl",
        destination: "/personal-injury/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/personal-injury/miami-fl",
        destination: "/personal-injury/fl/miami",
        permanent: true,
      },
      {
        source: "/truck-accident/jacksonville-fl",
        destination: "/truck-accident/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/truck-accident/miami-fl",
        destination: "/truck-accident/fl/miami",
        permanent: true,
      },
      {
        source: "/workers-compensation/jacksonville-fl",
        destination: "/workers-compensation/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/workers-compensation/miami-fl",
        destination: "/workers-compensation/fl/miami",
        permanent: true,
      },

      // ═══════════════════════════════════════════════════════════════
      // Florida cities: /best-*-lawyers-fl/ → /fl/:city
      // ═══════════════════════════════════════════════════════════════
      {
        source: "/personal-injury/best-jacksonville-personal-injury-lawyers-fl/",
        destination: "/personal-injury/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/personal-injury/best-miami-personal-injury-lawyers-fl/",
        destination: "/personal-injury/fl/miami",
        permanent: true,
      },
      {
        source: "/car-accident/best-jacksonville-car-accident-lawyers-fl/",
        destination: "/car-accident/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/car-accident/best-miami-car-accident-lawyers-fl/",
        destination: "/car-accident/fl/miami",
        permanent: true,
      },
      {
        source: "/truck-accident/best-jacksonville-truck-accident-lawyers-fl/",
        destination: "/truck-accident/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/truck-accident/best-miami-truck-accident-lawyers-fl/",
        destination: "/truck-accident/fl/miami",
        permanent: true,
      },
      {
        source: "/workers-compensation/best-jacksonville-workers-compensation-lawyers-fl/",
        destination: "/workers-compensation/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/workers-compensation/best-miami-workers-compensation-lawyers-fl/",
        destination: "/workers-compensation/fl/miami",
        permanent: true,
      },

      // ═══════════════════════════════════════════════════════════════
      // Jacksonville-adjacent cities → Jacksonville
      // ═══════════════════════════════════════════════════════════════
      {
        source: "/car-accident/best-orange-park-car-accident-lawyers/",
        destination: "/car-accident/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/car-accident/best-st-johns-car-accident-lawyers/",
        destination: "/car-accident/fl/jacksonville",
        permanent: true,
      },
      {
        source: "/car-accident/best-st-augustine-car-accident-lawyers/",
        destination: "/car-accident/fl/jacksonville",
        permanent: true,
      },

      // ═══════════════════════════════════════════════════════════════
      // Non-Florida removed cities → national practice area pages
      // ═══════════════════════════════════════════════════════════════
      {
        source: "/personal-injury/best-cleveland-personal-injury-lawyers/",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/personal-injury/best-cincinnati-personal-injury-lawyers/",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/personal-injury/best-jersey-city-personal-injury-lawyers-nj/",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/personal-injury/best-newark-personal-injury-lawyers-nj/",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/personal-injury/best-paterson-personal-injury-lawyers-nj/",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/car-accident/best-cleveland-car-accident-lawyers/",
        destination: "/car-accident",
        permanent: true,
      },
      {
        source: "/car-accident/best-cincinnati-car-accident-lawyers/",
        destination: "/car-accident",
        permanent: true,
      },
      {
        source: "/car-accident/best-jersey-city-car-accident-lawyers-nj/",
        destination: "/car-accident",
        permanent: true,
      },
      {
        source: "/car-accident/best-newark-car-accident-lawyers-nj/",
        destination: "/car-accident",
        permanent: true,
      },
      {
        source: "/car-accident/best-paterson-car-accident-lawyers-nj/",
        destination: "/car-accident",
        permanent: true,
      },
      {
        source: "/truck-accident/best-cleveland-truck-accident-lawyers/",
        destination: "/truck-accident",
        permanent: true,
      },
      {
        source: "/truck-accident/best-cincinnati-truck-accident-lawyers/",
        destination: "/truck-accident",
        permanent: true,
      },
      {
        source: "/truck-accident/best-jersey-city-truck-accident-lawyers-nj/",
        destination: "/truck-accident",
        permanent: true,
      },
      {
        source: "/truck-accident/best-newark-truck-accident-lawyers-nj/",
        destination: "/truck-accident",
        permanent: true,
      },
      {
        source: "/workers-compensation/best-jersey-city-workers-comp-lawyers-nj/",
        destination: "/workers-compensation",
        permanent: true,
      },
      {
        source: "/workers-compensation/best-newark-workers-comp-lawyers-nj/",
        destination: "/workers-compensation",
        permanent: true,
      },
      {
        source: "/workers-compensation/best-paterson-workers-comp-lawyers-nj/",
        destination: "/workers-compensation",
        permanent: true,
      },

      // ═══════════════════════════════════════════════════════════════
      // Legacy article redirects → /guides/:slug
      // ═══════════════════════════════════════════════════════════════
      {
        source: "/personal-injury/2025-guide-jacksonvilles-25-most-dangerous-intersections/",
        destination: "/guides/jacksonville-dangerous-intersections",
        permanent: true,
      },
      {
        source: "/car-accident/understanding-jacksonvilles-most-dangerous-roads-for-motorists/",
        destination: "/guides/jacksonville-dangerous-roads",
        permanent: true,
      },
      {
        source: "/personal-injury/jacksonville-crash-reports-how-to-get-yours-step-by-step/",
        destination: "/guides/jacksonville-crash-reports",
        permanent: true,
      },
      {
        source: "/personal-injury/average-car-accident-settlement-in-jacksonville-with-examples/",
        destination: "/guides/average-car-accident-settlement-jacksonville",
        permanent: true,
      },
      {
        source: "/personal-injury/what-is-considered-a-serious-injury-under-floridas-no-fault-laws/",
        destination: "/guides/serious-injury-florida-no-fault",
        permanent: true,
      },
      {
        source: "/employment-law/what-is-a-right-to-sue-letter/",
        destination: "/guides/right-to-sue-letter",
        permanent: true,
      },
      {
        source: "/car-accident/what-if-i-was-injured-in-a-lyft-or-uber-accident-in-jacksonville-fl/",
        destination: "/guides/uber-lyft-accident-jacksonville",
        permanent: true,
      },
      {
        source: "/workers-compensation/what-should-i-do-if-my-workers-comp-claim-is-denied-in-tampa-fl/",
        destination: "/guides/workers-comp-claim-denied-florida",
        permanent: true,
      },
      {
        source: "/car-accident/how-floridas-no-fault-insurance-applies-to-rideshare-accidents/",
        destination: "/guides/florida-no-fault-rideshare-accidents",
        permanent: true,
      },
      {
        source: "/personal-injury/how-floridas-no-fault-insurance-works-in-minor-car-accidents/",
        destination: "/guides/florida-no-fault-minor-accidents",
        permanent: true,
      },
      {
        source: "/personal-injury/dealing-with-medical-bills-after-a-florida-car-accident-what-are-your-options/",
        destination: "/guides/medical-bills-after-florida-car-accident",
        permanent: true,
      },
      {
        source: "/personal-injury/tourist-injuries-in-jacksonville-what-non-residents-should-know/",
        destination: "/guides/tourist-injuries-jacksonville",
        permanent: true,
      },
      {
        source: "/personal-injury/what-to-do-if-youre-injured-in-a-hit-and-run-in-jacksonville/",
        destination: "/guides/hit-and-run-jacksonville",
        permanent: true,
      },
      {
        source: "/personal-injury/how-does-contingency-fee-basis-work-in-personal-injury-cases/",
        destination: "/guides/understanding-contingency-fees",
        permanent: true,
      },
      {
        source: "/personal-injury/signs-youre-being-lowballed-by-an-insurance-company-after-a-truck-accident/",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/personal-injury/how-electronic-health-records-ehr-impact-personal-injury-claims-and-settlements/",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/personal-injury/understanding-new-yorks-no-fault-insurance-law-what-it-means-for-car-accident-victims/",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/personal-injury/personal-injury-claims-legal-terms-need-to-know/",
        destination: "/guides/what-is-negligence-personal-injury",
        permanent: true,
      },
      {
        source: "/criminal-law/refusing-a-breathalyzer-in-new-york-what-are-the-consequences/",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/employment-law/understanding-workers-compensation-for-construction-accidents/",
        destination: "/workers-compensation",
        permanent: true,
      },
      {
        source: "/family-law/divorce-and-community-property-laws-in-california-what-you-need-to-know/",
        destination: "/guides",
        permanent: true,
      },

      // ═══════════════════════════════════════════════════════════════
      // Category redirects
      // ═══════════════════════════════════════════════════════════════
      {
        source: "/legal-guides/",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/topics/personal-injury/",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/topics/criminal-law/",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/topics/employment-law/",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/topics/family-law/",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/topics/workers-compensation/",
        destination: "/workers-compensation",
        permanent: true,
      },

      // ═══════════════════════════════════════════════════════════════
      // WordPress catch-all redirects
      // ═══════════════════════════════════════════════════════════════
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/topics/:path*",
        destination: "/guides",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
