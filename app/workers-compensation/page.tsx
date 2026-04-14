import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "workers-compensation")!;

export const metadata: Metadata = {
  title: "Workers' Compensation Lawyers — Free Case Evaluation",
  description:
    "Injured on the job? Workers' compensation claims are frequently denied or undervalued. An experienced workers' comp attorney can protect your rights and maximize your benefits.",
  openGraph: {
    title: "Workers' Compensation Lawyers — Free Case Evaluation | Top Lawyer Resource",
    description:
      "Injured at work? Your employer's insurer isn't on your side. Get a free consultation with a workers' comp attorney today.",
    url: "https://toplawyerresource.com/workers-compensation",
  },
};

const relatedArticles = [
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    readTime: "6 min",
  },
];

export default function WorkersCompensationPage() {
  const cityLinks = cities.map((c) => ({
    city: c.city,
    state: c.state,
    slug: c.slug,
    stateCode: c.stateCode,
  }));

  return (
    <PracticeAreaPage
      practiceSlug="workers-compensation"
      title={area.title}
      shortTitle={area.shortTitle}
      description={area.description}
      heroText={area.heroText}
      commonCauses={area.commonCauses}
      whatYouCanRecover={area.whatYouCanRecover}
      cities={cityLinks}
      relatedArticles={relatedArticles}
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&fit=crop"
      contentImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&fit=crop"
    />
  );
}
