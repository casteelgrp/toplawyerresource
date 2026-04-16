import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "car-accident")!;

export const metadata: Metadata = {
  title: "Car Accident Lawyers \u2014 Free Case Evaluation",
  description:
    "Injured in a car accident? Get a free case evaluation from an experienced attorney. Compensation for medical bills, lost wages, and pain and suffering.",
  openGraph: {
    title: "Car Accident Lawyers \u2014 Free Case Evaluation | TLR",
    description:
      "Injured in a car accident? Get a free case evaluation. Compensation for medical bills, lost wages, and pain and suffering.",
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
    question: "How long do I have to file a car accident lawsuit?",
    answer:
      "Statutes of limitations for car accident claims vary by state — most fall between 2 and 4 years from the date of the accident. Some states have shorter windows for claims against government entities. Missing your state's deadline permanently bars your right to compensation, so it's critical to consult an attorney as soon as possible to confirm the specific deadline in your jurisdiction.",
  },
  {
    question: "What should I do immediately after a car accident?",
    answer:
      "First, ensure your safety and the safety of others — move to the side of the road if possible. Call 911 to report the accident and request medical assistance. Document the scene thoroughly with photos and video. Exchange insurance and contact information with the other driver. Seek medical attention even if you feel fine, as many injuries don't present symptoms immediately. Finally, contact an experienced car accident attorney before speaking with insurance adjusters.",
  },
  {
    question: "What compensation can I get after a car accident?",
    answer:
      "Depending on the facts of your case and the laws in your state, you may be entitled to compensation for medical bills (past and future), lost wages and loss of earning capacity, pain and suffering, emotional distress, property damage, and loss of enjoyment of life. The amount varies significantly based on injury severity, liability, and available insurance coverage. An attorney can evaluate the full value of your claim.",
  },
  {
    question: "Do I need a lawyer for a car accident claim?",
    answer:
      "For minor fender-benders with no injuries and clear liability, you may be able to handle the claim yourself. However, for any case involving significant injuries, disputed fault, an uninsured driver, or an insurer acting in bad faith, legal representation is strongly advisable. Personal injury attorneys typically work on contingency — no fees unless they win — and studies consistently show represented claimants recover substantially more than those without counsel.",
  },
  {
    question: "What if the other driver was uninsured?",
    answer:
      "If you were hit by an uninsured or underinsured motorist, you may be able to file a claim under your own Uninsured/Underinsured Motorist (UM/UIM) coverage if you carry it. UM/UIM requirements and minimums vary significantly by state — some states require it, others make it optional. An attorney can help you identify all available sources of recovery and navigate the UM/UIM claim process.",
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
    citySlug: c.citySlug,
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
        "what-to-do-after-car-accident",
        "what-is-negligence-personal-injury",
      ]}
      heroImage="https://images.pexels.com/photos/35829957/pexels-photo-35829957.jpeg?auto=compress&cs=tinysrgb&w=1200"
      contentImage="https://images.pexels.com/photos/35162427/pexels-photo-35162427.jpeg?auto=compress&cs=tinysrgb&w=600"
      faqItems={faqItems}
      floridaContent={undefined}
    />
  );
}
