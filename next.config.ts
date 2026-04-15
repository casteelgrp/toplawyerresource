import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
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
        source: "/car-accident/understanding-jacksonvilles-most-dangerous-roads-for-motorists/",
        destination: "/guides/jacksonville-dangerous-roads",
        permanent: true,
      },
      {
        source: "/personal-injury/what-is-considered-a-serious-injury-under-floridas-no-fault-laws/",
        destination: "/guides/serious-injury-florida-no-fault",
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
        source: "/personal-injury/average-car-accident-settlement-in-jacksonville-with-examples/",
        destination: "/guides/average-car-accident-settlement-jacksonville",
        permanent: true,
      },
      {
        source: "/personal-injury/jacksonville-crash-reports-how-to-get-yours-step-by-step/",
        destination: "/guides/jacksonville-crash-reports",
        permanent: true,
      },
      {
        source: "/personal-injury/what-to-do-if-youre-injured-in-a-hit-and-run-in-jacksonville/",
        destination: "/guides/hit-and-run-jacksonville",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
