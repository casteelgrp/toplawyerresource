import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import LeadCaptureBanner from "../../components/LeadCaptureBanner";

const px1200 = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const GUIDE_IMAGES: Record<string, string> = {
  "jacksonville-dangerous-intersections": px1200(15481199),
  "jacksonville-dangerous-roads": px1200(14209231),
  "jacksonville-crash-reports": px1200(7841466),
  "uber-lyft-accident-jacksonville": px1200(8954274),
  "hit-and-run-jacksonville": px1200(4212617),
  "tourist-injuries-jacksonville": px1200(31759850),
  "average-car-accident-settlement-jacksonville": px1200(9874011),
  "average-car-accident-settlement-florida": px1200(6520213),
  "serious-injury-florida-no-fault": px1200(30348333),
  "florida-no-fault-rideshare-accidents": px1200(35829957),
  "florida-no-fault-minor-accidents": px1200(11488877),
  "medical-bills-after-florida-car-accident": px1200(6129676),
  "workers-comp-claim-denied-florida": px1200(7876155),
  "right-to-sue-letter": px1200(7876314),
  "what-to-do-after-car-accident":
    "https://images.pexels.com/photos/35784044/pexels-photo-35784044.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "how-to-choose-personal-injury-lawyer":
    "https://images.pexels.com/photos/10854809/pexels-photo-10854809.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "understanding-contingency-fees":
    "https://images.pexels.com/photos/29776517/pexels-photo-29776517.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "what-is-negligence-personal-injury":
    "https://images.pexels.com/photos/8733397/pexels-photo-8733397.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "types-of-compensation-personal-injury":
    "https://images.pexels.com/photos/6520212/pexels-photo-6520212.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "how-long-personal-injury-case-takes":
    "https://images.pexels.com/photos/7785040/pexels-photo-7785040.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const DEFAULT_GUIDE_IMAGE = px1200(6519905);

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

interface Frontmatter {
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  author: string;
  practice_area?: string;
  city?: string;
  readTime?: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

function getAllSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function getGuide(slug: string): { frontmatter: Frontmatter; content: string } | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Frontmatter, content };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const guideImage = GUIDE_IMAGES[slug] || DEFAULT_GUIDE_IMAGE;

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    openGraph: {
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      url: `https://toplawyerresource.com/guides/${slug}`,
      type: "article",
      publishedTime: guide.frontmatter.date,
      modifiedTime: guide.frontmatter.lastUpdated || guide.frontmatter.date,
      authors: [guide.frontmatter.author],
      images: [{ url: guideImage, width: 1200, alt: guide.frontmatter.title }],
    },
    alternates: {
      canonical: `https://toplawyerresource.com/guides/${slug}`,
    },
  };
}

const relatedGuides = [
  {
    slug: "jacksonville-dangerous-intersections",
    title: "Jacksonville's Most Dangerous Intersections: 2025 Data",
    category: "Car Accidents",
  },
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Complete Guide",
    category: "Workers' Rights",
  },
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida",
    category: "Car Accidents",
  },
];

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const { frontmatter, content } = guide;
  const related = relatedGuides.filter((g) => g.slug !== slug).slice(0, 2);

  const guideImage = GUIDE_IMAGES[slug] || DEFAULT_GUIDE_IMAGE;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: guideImage,
    datePublished: frontmatter.date,
    dateModified: frontmatter.lastUpdated || frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Top Lawyer Resource",
      url: "https://toplawyerresource.com",
      logo: {
        "@type": "ImageObject",
        url: "https://toplawyerresource.com/logo-whitebg.webp",
      },
    },
    url: `https://toplawyerresource.com/guides/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://toplawyerresource.com/guides/${slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://toplawyerresource.com" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://toplawyerresource.com/guides" },
      { "@type": "ListItem", position: 3, name: frontmatter.title, item: `https://toplawyerresource.com/guides/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={guideImage}
          alt={frontmatter.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-4 pb-8">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-gray-200 line-clamp-1">{frontmatter.title}</span>
          </nav>
          {frontmatter.practice_area && (
            <Link
              href={`/${frontmatter.practice_area}`}
              className="inline-block text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded mb-3 bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 transition-colors"
            >
              {frontmatter.practice_area.replace(/-/g, " ")}
            </Link>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-gray-900">
              {frontmatter.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <span>
                By <strong className="text-gray-700">{frontmatter.author}</strong>
              </span>
              <span>&bull;</span>
              <span>
                Last Updated:{" "}
                {new Date(frontmatter.lastUpdated || frontmatter.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              {frontmatter.readTime && (
                <>
                  <span>&bull;</span>
                  <span>{frontmatter.readTime}</span>
                </>
              )}
            </div>

            {/* Article Body */}
            <div className="prose max-w-none">
              <MDXRemote source={content} />
            </div>

            {/* Lead Capture Banner after article */}
            <div className="mt-12">
              <LeadCaptureBanner
                title="Injured? Get a Free Case Evaluation"
                subtitle="No obligation. No upfront fees. Confidential consultation."
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Sticky CTA */}
            <div className="rounded-2xl p-6 mb-6 text-white sticky top-20" style={{ backgroundColor: "#1e40af" }}>
              <p className="text-sky-300 text-xs uppercase tracking-widest font-semibold mb-2">
                Free &bull; Confidential
              </p>
              <h3 className="font-bold text-xl mb-3 text-white">
                Injured? Find out if you have a case.
              </h3>
              <p className="text-blue-200 text-sm mb-5">
                Takes 5 minutes. No cost, no obligation. No fees unless you win.
              </p>
              <Link
                href="/tools/case-evaluator"
                className="btn btn-white w-full justify-center"
              >
                Evaluate My Case
              </Link>
              <Link
                href="/contact"
                className="block text-center border border-blue-400 text-blue-100 font-medium px-6 py-2 rounded-lg mt-3 hover:bg-blue-700 transition-colors text-sm"
              >
                Speak with an Attorney
              </Link>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                <div className="space-y-4">
                  {related.map((r) => (
                    <div key={r.slug} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <span className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                        {r.category}
                      </span>
                      <Link
                        href={`/guides/${r.slug}`}
                        className="block mt-2 text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors leading-snug"
                      >
                        {r.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Mobile sticky banner */}
      <LeadCaptureBanner variant="sticky" />
    </>
  );
}
