import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "personal-injury")!;

export const metadata: Metadata = {
  title: "Personal Injury Lawyers — Free Case Evaluation",
  description:
    "Were you hurt due to someone else's negligence? Personal injury attorneys can help you recover compensation for medical bills, lost wages, and more. Get a free case evaluation.",
  openGraph: {
    title: "Personal Injury Lawyers — Free Case Evaluation | Top Lawyer Resource",
    description:
      "Hurt by someone else's negligence? You may be entitled to significant compensation. Connect with a personal injury lawyer today — free consultation.",
    url: "https://toplawyerresource.com/personal-injury",
  },
};

const relatedArticles = [
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    readTime: "6 min",
  },
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida",
    readTime: "10 min",
  },
];

export default function PersonalInjuryPage() {
  const cityLinks = cities.map((c) => ({
    city: c.city,
    state: c.state,
    slug: c.slug,
    stateCode: c.stateCode,
  }));

  return (
    <PracticeAreaPage
      practiceSlug="personal-injury"
      title={area.title}
      shortTitle={area.shortTitle}
      description={area.description}
      heroText={area.heroText}
      commonCauses={area.commonCauses}
      whatYouCanRecover={area.whatYouCanRecover}
      cities={cityLinks}
      relatedArticles={relatedArticles}
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85&fit=crop"
      contentImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&fit=crop"
    />
  );
}
