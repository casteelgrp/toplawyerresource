import type { Metadata } from "next";
import PracticeAreaPage from "../components/PracticeAreaPage";
import cities from "../../data/cities.json";
import practiceAreas from "../../data/practiceAreas.json";

const area = practiceAreas.find((a) => a.slug === "workers-compensation")!;

export const metadata: Metadata = {
  title: "Workers' Compensation Lawyers — Find an Attorney Near You | Free Case Evaluation",
  description:
    "Injured on the job? Workers' comp claims are frequently denied or undervalued. Get a free case evaluation from an experienced workers' compensation attorney. No fees unless you win.",
  openGraph: {
    title: "Workers' Compensation Lawyers — Free Case Evaluation | Top Lawyer Resource",
    description:
      "Injured at work? Your employer's insurer isn't on your side. Get a free consultation with a workers' comp attorney today.",
    url: "https://toplawyerresource.com/workers-compensation",
  },
  alternates: {
    canonical: "https://toplawyerresource.com/workers-compensation",
  },
};

const relatedArticles = [
  {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    readTime: "6 min",
  },
];

const faqItems = [
  {
    question: "How do I file a workers' comp claim in Florida?",
    answer:
      "In Florida, you must report your workplace injury to your employer within 30 days of the injury or discovery of an occupational disease. Your employer must then notify their workers' comp insurance carrier. You should receive medical treatment through an authorized treating physician selected by the insurer. If your claim is denied, you can file a Petition for Benefits with the Florida Office of the Judges of Compensation Claims (OJCC).",
  },
  {
    question: "What benefits am I entitled to under Florida workers' comp?",
    answer:
      "Florida workers' comp provides: medical benefits (all reasonable and necessary medical treatment), temporary total disability (TTD) at 66 2/3% of your average weekly wage, temporary partial disability (TPD) if you can work in a limited capacity, permanent impairment benefits, and vocational rehabilitation if you cannot return to your former job. Death benefits are also available to dependents.",
  },
  {
    question: "Can I sue my employer directly for a workplace injury in Florida?",
    answer:
      "Generally, no. Florida's workers' compensation system is the 'exclusive remedy' for on-the-job injuries, meaning you typically cannot sue your employer in civil court. However, there are exceptions: if your employer intentionally injured you, if your employer failed to carry required workers' comp insurance, or if a third party (other than your employer) was responsible for your injury, you may have additional legal options.",
  },
  {
    question: "What if my workers' comp claim is denied in Florida?",
    answer:
      "If your claim is denied or disputed, you can file a Petition for Benefits (PFB) with the Florida OJCC. You have 2 years from the date of injury (or last payment of benefits) to file a PFB. The process involves mediation and, if not resolved, a hearing before a Judge of Compensation Claims. An experienced workers' comp attorney can significantly improve your chances at every stage.",
  },
  {
    question: "Does Florida workers' comp cover all employees?",
    answer:
      "Most Florida employers with 4 or more employees (1 or more in construction) are required to carry workers' compensation insurance. Agricultural employers with 6 or more regular employees or 12 or more seasonal workers are also covered. Independent contractors are generally not covered, but misclassification of employees as contractors is common — an attorney can help determine whether you are actually entitled to coverage.",
  },
];

const floridaContent = `Florida's workers' compensation system is governed by Chapter 440 of the Florida Statutes. Unlike many states, Florida's system is known for being particularly employer and insurer-friendly, with strict procedural requirements and benefit limitations that can catch injured workers off guard. Understanding your rights under Florida law is essential to getting everything you're owed.

One of the most significant Florida-specific rules is the 30-day notice requirement: you must report your work injury to your employer within 30 days or you may lose your right to benefits. Once reported, your employer's insurer has the right to control your medical care — meaning you generally must treat with an authorized physician rather than your own doctor. Seeking unauthorized treatment can jeopardize your claim.

Florida workers' comp also has strict impairment rating schedules and maximum medical improvement (MMI) determinations that significantly affect your permanent benefits. Once your treating physician determines you've reached MMI, your temporary disability benefits stop and you receive a permanent impairment rating (PIR) using the AMA Guides. The resulting permanent impairment benefits are often much lower than what injured workers expect. The Florida Division of Workers' Compensation (myfloridacfo.com/division/wc) provides resources for injured workers, but for complex claims, legal representation is strongly recommended.`;

export default function WorkersCompensationPage() {
  const cityLinks = cities.map((c) => ({
    city: c.city,
    state: c.state,
    slug: c.slug,
    citySlug: c.citySlug,
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
      relatedGuides={[
        "workers-comp-claim-denied-florida",
        "right-to-sue-letter",
      ]}
      heroImage="https://images.pexels.com/photos/12911216/pexels-photo-12911216.jpeg?auto=compress&cs=tinysrgb&w=1200"
      contentImage="https://images.pexels.com/photos/4506206/pexels-photo-4506206.jpeg?auto=compress&cs=tinysrgb&w=600"
      faqItems={faqItems}
      floridaContent={undefined}
    />
  );
}
