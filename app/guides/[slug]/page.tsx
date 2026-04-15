import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import LeadCaptureBanner from "../../components/LeadCaptureBanner";

const GUIDE_IMAGES: Record<string, string> = {
  "jacksonville-dangerous-intersections":
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=85&fit=crop",
  "right-to-sue-letter":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85&fit=crop",
  "average-car-accident-settlement-florida":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=85&fit=crop",
};

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

interface Frontmatter {
  title: string;
  description: string;
  date: string;
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

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    openGraph: {
      title: guide.frontmatter.title,
      description: guide.frontmatter.description,
      url: `https://toplawyerresource.com/guides/${slug}`,
      type: "article",
      publishedTime: guide.frontmatter.date,
      authors: [guide.frontmatter.author],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Top Lawyer Resource",
      url: "https://toplawyerresource.com",
    },
    url: `https://toplawyerresource.com/guides/${slug}`,
  };

  const guideImage =
    GUIDE_IMAGES[slug] ||
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85&fit=crop";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
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
