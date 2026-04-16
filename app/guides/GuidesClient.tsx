"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface GuideEntry {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  category: string;
  categorySlug: string;
  readTime: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  scope: "national" | "florida" | "jacksonville";
}

const TABS = [
  { label: "All", value: "all" },
  { label: "National", value: "national" },
  { label: "Florida", value: "florida" },
  { label: "Jacksonville", value: "jacksonville" },
] as const;

interface Props {
  guides: GuideEntry[];
  featuredSlugs: string[];
}

export default function GuidesClient({ guides, featuredSlugs }: Props) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const featured = featuredSlugs.flatMap((slug) => {
    const g = guides.find((g) => g.slug === slug);
    return g ? [g] : [];
  });

  const nonFeatured = guides.filter((g) => !featuredSlugs.includes(g.slug));
  const filtered =
    activeTab === "all"
      ? nonFeatured
      : nonFeatured.filter((g) => g.scope === activeTab);

  return (
    <>
      {/* Featured Guides — 2x2 grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card bg-white rounded-2xl border border-gray-200 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded bg-blue-600 text-white">
                    {guide.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <span>{guide.readTime}</span>
                  <span>&bull;</span>
                  <span>
                    Last Updated:{" "}
                    {new Date(guide.lastUpdated).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-3 group-hover:text-blue-700 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {guide.description}
                </p>
                <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                  Read Guide &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.value
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filtered Guide List */}
      <section className="mb-16">
        <div className="space-y-3">
          {filtered.length === 0 && (
            <p className="text-gray-400 text-sm py-8 text-center">
              No guides in this category yet.
            </p>
          )}
          {filtered.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="flex items-center justify-between gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {guide.category}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {guide.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 leading-snug group-hover:text-blue-700 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-1">
                  {guide.description}
                </p>
              </div>
              <span className="text-sm font-semibold text-blue-700 group-hover:text-blue-800 whitespace-nowrap flex-shrink-0 transition-colors">
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
