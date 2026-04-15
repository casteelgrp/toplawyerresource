import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "car-accident")!;

export const metadata: Metadata = {
  title: "Car Accident Lawyers in Florida — Free Case Evaluation",
  description:
    "Injured in a Florida car accident? You may be entitled to compensation for medical bills, lost wages, and pain and suffering. Florida's no-fault laws are complex — get a free case evaluation from an experienced attorney today.",
  openGraph: {
    title: "Car Accident Lawyers in Florida — Free Case Evaluation | Top Lawyer Resource",
    description:
      "Injured in a Florida car accident? You may be entitled to compensation. Get a free case evaluation today.",
    url: "https://toplawyerresource.com/car-accident",
  },
  alternates: {
    canonical: "https://toplawyerresource.com/car-accident",
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

const faqItems = [
  {
    question: "How long do I have to file a car accident lawsuit in Florida?",
    answer:
      "Florida's statute of limitations for car accident personal injury claims is 2 years from the date of the accident. For property damage claims, you have 4 years. Missing this deadline permanently bars your right to compensation, so it's critical to consult an attorney as soon as possible.",
  },
  {
    question: "What is Florida's no-fault insurance law?",
    answer:
      "Florida is a no-fault state, meaning your own Personal Injury Protection (PIP) insurance pays your medical bills up to $10,000 regardless of who caused the accident. However, you can step outside the no-fault system and sue the at-fault driver if your injuries meet the 'serious injury' threshold — including significant and permanent injury, permanent scarring, or death.",
  },
  {
    question: "What if the other driver was uninsured in Florida?",
    answer:
      "Florida has one of the highest rates of uninsured drivers in the country. If you were hit by an uninsured or underinsured motorist, you can file a claim under your own UM/UIM coverage. An experienced attorney can also explore other avenues for recovery, including third-party liability claims.",
  },
  {
    question: "How much is my Florida car accident case worth?",
    answer:
      "Settlement values depend on the severity of your injuries, your medical bills, lost income, permanent disability or scarring, and the insurance policy limits involved. Minor injury cases might settle for $10,000–$50,000, while serious injury cases involving surgery, long-term disability, or wrongful death can reach six or seven figures. Use our free Settlement Calculator for a rough estimate.",
  },
  {
    question: "Do I need a lawyer for a car accident claim in Florida?",
    answer:
      "While you can handle a minor fender-bender on your own, any case involving significant injuries, disputed liability, or an insurance company acting in bad faith warrants legal representation. Attorneys typically recover 3–4x more than unrepresented claimants, and most work on contingency — no fee unless you win.",
  },
];

const floridaContent = `Florida's unique no-fault insurance system makes car accident claims more complex than in most other states. Under Florida Statute § 627.736, all registered drivers must carry at least $10,000 in Personal Injury Protection (PIP) coverage, which pays 80% of your medical bills and 60% of lost wages regardless of fault — but only up to that $10,000 limit. For serious injuries, you'll need to pursue the at-fault driver directly.

To "step outside" no-fault in Florida, your injuries must meet the serious injury threshold defined in § 627.737: permanent injury within a reasonable degree of medical probability, significant and permanent scarring or disfigurement, or death. If you meet this threshold, you can sue the at-fault driver for pain and suffering, emotional distress, and full compensation beyond what PIP covers.

Florida's comparative fault system (§ 768.81) also plays a critical role. Under the 2023 reform, Florida moved from pure comparative fault to a modified comparative fault system — if you are found more than 50% at fault for the accident, you cannot recover any damages. This makes it essential to work with an attorney who can accurately document the other driver's negligence.`;

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
      relatedGuides={[
        "jacksonville-dangerous-intersections",
        "jacksonville-dangerous-roads",
        "uber-lyft-accident-jacksonville",
        "florida-no-fault-rideshare-accidents",
        "florida-no-fault-minor-accidents",
        "average-car-accident-settlement-florida",
      ]}
      heroImage="https://images.pexels.com/photos/35829957/pexels-photo-35829957.jpeg?auto=compress&cs=tinysrgb&w=1200"
      contentImage="https://images.pexels.com/photos/35162427/pexels-photo-35162427.jpeg?auto=compress&cs=tinysrgb&w=600"
      faqItems={faqItems}
      floridaContent={floridaContent}
    />
  );
}
