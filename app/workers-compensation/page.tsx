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
    question: "What injuries are covered by workers' compensation?",
    answer:
      "Workers' compensation generally covers injuries and illnesses arising out of and in the course of employment. This includes acute on-the-job injuries (falls, equipment accidents, struck-by incidents), occupational illnesses caused by workplace exposures (chemical exposure, hearing loss, respiratory disease), and repetitive stress injuries (carpal tunnel syndrome, back injuries from repetitive lifting). Coverage rules vary by state, so it's important to consult an attorney in your jurisdiction if your claim is questioned.",
  },
  {
    question: "Can I sue my employer for a workplace injury?",
    answer:
      "In most states, workers' compensation is the 'exclusive remedy' for on-the-job injuries, meaning you generally cannot sue your employer in civil court. This trade-off gives workers guaranteed benefits without having to prove fault. However, important exceptions exist: if your employer intentionally injured you, if the employer failed to carry required workers' comp insurance, or if a third party (such as an equipment manufacturer or contractor) caused your injury, you may have additional legal options outside of workers' comp.",
  },
  {
    question: "What benefits does workers' compensation provide?",
    answer:
      "Workers' compensation typically provides medical treatment benefits covering all reasonable and necessary care related to the work injury. Wage replacement benefits compensate for lost income while you recover — usually around two-thirds of your average weekly wage. If you have a permanent impairment, you may receive permanent disability benefits. Vocational rehabilitation benefits help you return to work if your injury prevents you from returning to your former job. Dependents of workers killed on the job are entitled to death benefits.",
  },
  {
    question: "What if my workers' comp claim is denied?",
    answer:
      "A denial is not the end of the road. Most states have a formal appeals process for disputed workers' comp claims. The process generally involves filing a formal appeal or petition, attending mediation, and if unresolved, a hearing before a workers' compensation judge. Common denial reasons include late reporting, disputes over whether the injury occurred at work, and pre-existing condition arguments. An experienced workers' comp attorney can significantly improve your chances of a successful appeal.",
  },
  {
    question: "Do I need a lawyer for a workers' comp claim?",
    answer:
      "For straightforward claims with clear liability and minor injuries, you may be able to navigate the process on your own. However, legal representation is strongly advisable whenever your claim is denied, your employer disputes the cause of your injury, you suffer a serious or permanent injury, you are pressured to return to work too soon, or your employer retaliates against you for filing. Workers' comp attorneys typically work on contingency, taking a percentage of your settlement — so there's no upfront cost.",
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
        "right-to-sue-letter",
      ]}
      heroImage="https://images.pexels.com/photos/12911216/pexels-photo-12911216.jpeg?auto=compress&cs=tinysrgb&w=1200"
      contentImage="https://images.pexels.com/photos/4506206/pexels-photo-4506206.jpeg?auto=compress&cs=tinysrgb&w=600"
      faqItems={faqItems}
      floridaContent={undefined}
    />
  );
}
