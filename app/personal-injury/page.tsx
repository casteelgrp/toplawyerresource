import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "personal-injury")!;

export const metadata: Metadata = {
  title: "Personal Injury Lawyers \u2014 Free Case Evaluation",
  description:
    "Hurt due to someone else\u2019s negligence? Get a free case evaluation from experienced personal injury attorneys. No fees unless you win.",
  openGraph: {
    title: "Personal Injury Lawyers \u2014 Free Case Evaluation",
    description:
      "Hurt due to someone else\u2019s negligence? Get a free case evaluation from experienced personal injury attorneys. No fees unless you win.",
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
    question: "What qualifies as a personal injury case?",
    answer:
      "A personal injury case arises when someone is hurt due to another party's negligence, recklessness, or intentional wrongdoing. Common case types include car accidents, truck accidents, slip and falls, premises liability, medical malpractice, product liability, dog bites, and workplace injuries (outside of workers' comp). The key element is negligence — the at-fault party failed to exercise reasonable care, and that failure caused your injury and damages.",
  },
  {
    question: "How much does a personal injury lawyer cost?",
    answer:
      "Most personal injury attorneys work on a contingency fee basis, meaning you pay nothing upfront and the attorney's fee comes out of your settlement or verdict only if you win. Typical contingency fees range from 33% for pre-litigation settlements to 40% or more if the case goes to trial. This arrangement ensures injured victims can access legal representation regardless of their financial situation.",
  },
  {
    question: "How long does a personal injury case take?",
    answer:
      "The timeline varies widely depending on the complexity of the case, the severity of injuries, and whether the case settles or goes to trial. Minor cases may resolve in 3–6 months. Moderate to serious injury cases typically take 1–2 years due to medical treatment, investigation, and negotiations. Cases that proceed through trial can take 2–4 years or longer. Rushing a settlement before treatment is complete often results in leaving money on the table.",
  },
  {
    question: "What is the average personal injury settlement?",
    answer:
      "Settlement amounts vary enormously based on injury severity, medical expenses, lost income, and the strength of liability. Minor soft-tissue injury cases may settle for $10,000–$30,000. Moderate injuries such as fractures or herniated discs often settle in the $50,000–$200,000 range. Catastrophic injuries, permanent disability, or wrongful death cases can reach seven figures or more. An attorney can evaluate the factors specific to your case.",
  },
  {
    question: "Should I accept the insurance company's first offer?",
    answer:
      "Almost always no. Insurance companies routinely make low initial offers hoping claimants will accept before understanding the full value of their claim. A first offer typically does not account for future medical costs, long-term lost earning capacity, or full pain and suffering. Once you accept a settlement, you generally cannot go back for more — even if your injuries turn out to be worse than initially thought. Always consult an attorney before signing any release.",
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
    citySlug: c.citySlug,
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
      relatedGuides={[
        "how-to-choose-personal-injury-lawyer",
        "types-of-compensation-personal-injury",
        "how-long-personal-injury-case-takes",
        "understanding-contingency-fees",
      ]}
      heroImage="https://images.pexels.com/photos/6520104/pexels-photo-6520104.jpeg?auto=compress&cs=tinysrgb&w=1920"
      contentImage="https://images.pexels.com/photos/6519914/pexels-photo-6519914.jpeg?auto=compress&cs=tinysrgb&w=600"
      faqItems={faqItems}
      floridaContent={undefined}
    />
  );
}
