import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "truck-accident")!;

export const metadata: Metadata = {
  title: "Truck Accident Lawyers — Free Case Evaluation",
  description:
    "18-wheeler and commercial truck accidents cause catastrophic injuries. These complex cases involve multiple liable parties. Get a free case evaluation from an experienced truck accident attorney.",
  openGraph: {
    title: "Truck Accident Lawyers — Free Case Evaluation | Top Lawyer Resource",
    description:
      "Truck accident cases are complex and high-value. Don't settle for less. Get a free case evaluation from a trucking accident specialist.",
    url: "https://toplawyerresource.com/truck-accident",
  },
};

const relatedArticles = [
  {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida",
    readTime: "10 min",
  },
];

export default function TruckAccidentPage() {
  const cityLinks = cities.map((c) => ({
    city: c.city,
    state: c.state,
    slug: c.slug,
    stateCode: c.stateCode,
  }));

  return (
    <PracticeAreaPage
      practiceSlug="truck-accident"
      title={area.title}
      shortTitle={area.shortTitle}
      description={area.description}
      heroText={area.heroText}
      commonCauses={area.commonCauses}
      whatYouCanRecover={area.whatYouCanRecover}
      cities={cityLinks}
      relatedArticles={relatedArticles}
      heroImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=85&fit=crop"
      contentImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop"
    />
  );
}
