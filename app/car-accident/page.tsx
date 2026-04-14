import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "car-accident")!;

export const metadata: Metadata = {
  title: "Car Accident Lawyers — Free Case Evaluation",
  description:
    "Injured in a car accident? You may be entitled to compensation for medical bills, lost wages, and pain and suffering. Get a free case evaluation from an experienced car accident attorney.",
  openGraph: {
    title: "Car Accident Lawyers — Free Case Evaluation | Top Lawyer Resource",
    description:
      "Injured in a car accident? You may be entitled to compensation. Get a free case evaluation today.",
    url: "https://toplawyerresource.com/car-accident",
  },
};

const relatedArticles = [
  {
    slug: "jacksonville-dangerous-intersections",
    title: "Jacksonville's Most Dangerous Intersections: 2025 Data",
    readTime: "8 min",
  },
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida",
    readTime: "10 min",
  },
];

export default function CarAccidentPage() {
  const cityLinks = cities.map((c) => ({
    city: c.city,
    state: c.state,
    slug: c.slug,
    stateCode: c.stateCode,
  }));

  return (
    <PracticeAreaPage
      practiceSlug="car-accident"
      title={area.title}
      shortTitle={area.shortTitle}
      description={area.description}
      heroText={area.heroText}
      commonCauses={area.commonCauses}
      whatYouCanRecover={area.whatYouCanRecover}
      cities={cityLinks}
      relatedArticles={relatedArticles}
      heroImage="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=85&fit=crop"
      contentImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80&fit=crop"
    />
  );
}
