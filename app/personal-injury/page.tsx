import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "personal-injury")!;

export const metadata: Metadata = {
  title: "Personal Injury Lawyers in Florida — Free Case Evaluation",
  description:
    "Were you hurt due to someone else's negligence in Florida? Personal injury attorneys can help you recover compensation for medical bills, lost wages, and more. Florida's 2-year statute of limitations means you must act quickly. Get a free case evaluation.",
  openGraph: {
    title: "Personal Injury Lawyers in Florida — Free Case Evaluation | Top Lawyer Resource",
    description:
      "Hurt by someone else's negligence in Florida? You may be entitled to significant compensation. Connect with a personal injury lawyer today — free consultation.",
    url: "https://toplawyerresource.com/personal-injury",
  },
  alternates: {
    canonical: "https://toplawyerresource.com/personal-injury",
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

const faqItems = [
  {
    question: "What is the statute of limitations for personal injury in Florida?",
    answer:
      "As of 2023, Florida's statute of limitations for most personal injury claims is 2 years from the date of injury (reduced from 4 years under HB 837). For wrongful death claims, you have 2 years from the date of death. Government entity claims may have shorter notice requirements — sometimes as little as 3 years with a 3-year notice requirement.",
  },
  {
    question: "What damages can I recover in a Florida personal injury case?",
    answer:
      "In a Florida personal injury case, you can recover economic damages (medical expenses, future medical care, lost wages, loss of earning capacity, property damage) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life, disfigurement). Under HB 837, non-economic damages caps apply in medical malpractice cases.",
  },
  {
    question: "What is Florida's modified comparative fault rule?",
    answer:
      "Under Florida's 2023 tort reform (HB 837), Florida moved to a modified comparative fault system. If you are found more than 50% at fault for your own injury, you are barred from recovering any damages. If you are 50% or less at fault, your recovery is reduced proportionally. Previously, Florida used a pure comparative fault system that allowed recovery even if you were 99% at fault.",
  },
  {
    question: "Do I need to hire a lawyer for a personal injury claim?",
    answer:
      "For any injury involving significant medical treatment, lost income, or permanent effects, hiring an attorney is strongly advisable. Studies consistently show injured claimants represented by attorneys recover 3–4 times more compensation than those without representation, even after attorney fees. Most personal injury attorneys work on contingency — no fees unless they win your case.",
  },
  {
    question: "How long does a Florida personal injury case take?",
    answer:
      "Most personal injury cases settle without going to trial. Minor cases may resolve in 3–6 months. Moderate to serious injury cases typically take 1–2 years when accounting for medical treatment completion, investigation, negotiation, and potential litigation. Cases that proceed to trial can take 2–4 years or longer.",
  },
];

const floridaContent = `Florida's personal injury landscape changed significantly in 2023 when Governor DeSantis signed HB 837 into law. The legislation reformed Florida's tort system in several ways that directly affect injury victims. Most critically, the statute of limitations for negligence-based personal injury claims was cut from 4 years to 2 years — meaning you have less time than ever to file your claim.

Florida's modified comparative fault rule (§ 768.81) now bars recovery entirely if you are more than 50% at fault for your own injury. This is a significant departure from the old "pure comparative fault" rule and makes early documentation and evidence preservation more important than ever. Insurance companies will use this rule aggressively to reduce or eliminate your recovery.

Florida also limits the introduction of certain medical expenses in personal injury cases. Under the "medical damages" provisions of HB 837, only the amount actually paid or owed for medical treatment — rather than the billed amount — may be introduced as evidence in some cases. An experienced Florida personal injury attorney understands these nuances and can structure your case for maximum recovery under the current law.`;

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
      heroImage="https://images.pexels.com/photos/6520104/pexels-photo-6520104.jpeg?auto=compress&cs=tinysrgb&w=1200"
      contentImage="https://images.pexels.com/photos/6519914/pexels-photo-6519914.jpeg?auto=compress&cs=tinysrgb&w=600"
      faqItems={faqItems}
      floridaContent={floridaContent}
    />
  );
}
