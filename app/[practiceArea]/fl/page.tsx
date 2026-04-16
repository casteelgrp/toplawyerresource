import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LeadCaptureBanner from "../../components/LeadCaptureBanner";
import citiesData from "../../../data/cities.json";
import practiceAreasData from "../../../data/practiceAreas.json";

const VALID_PRACTICE_AREAS = [
  "personal-injury",
  "car-accident",
  "truck-accident",
  "workers-compensation",
];

const HERO_IMAGES: Record<string, string> = {
  "personal-injury":
    "https://images.pexels.com/photos/6520104/pexels-photo-6520104.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "car-accident":
    "https://images.pexels.com/photos/35829957/pexels-photo-35829957.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "truck-accident":
    "https://images.pexels.com/photos/10963705/pexels-photo-10963705.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "workers-compensation":
    "https://images.pexels.com/photos/12911216/pexels-photo-12911216.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const FLORIDA_CONTENT: Record<string, {
  intro: string;
  paragraphs: string[];
  sections?: Array<{ heading: string; content: string }>;
  faq?: Array<{ q: string; a: string }>;
}> = {
  "car-accident": {
    intro: "Florida's unique no-fault insurance system and 2023 tort reform make car accident claims more complex than in most other states.",
    paragraphs: [],
    sections: [
      {
        heading: "Florida No-Fault Insurance and PIP Coverage",
        content: `Florida is one of a small number of no-fault states, meaning that after a car accident your own Personal Injury Protection (PIP) insurance pays your initial medical bills and lost wages — regardless of who caused the crash. Under Florida Statute § 627.736, all registered drivers must carry a minimum of $10,000 in PIP coverage. PIP covers 80% of reasonable and necessary medical expenses and 60% of lost wages up to the policy limit. Critically, you must seek initial medical treatment within 14 days of the accident to preserve your PIP benefits; a gap beyond that window allows the insurer to deny your claim entirely. While PIP provides fast access to funds without requiring a fault determination, the $10,000 limit is often exhausted quickly in moderate-to-serious accidents. Once PIP is exhausted — or if your injuries meet the serious injury threshold under § 627.737 (permanent injury, significant scarring, or death) — you can pursue the at-fault driver's bodily injury liability coverage for the remainder of your damages.`,
      },
      {
        heading: "Modified Comparative Fault — Florida Statute § 768.81",
        content: `Florida's 2023 tort reform (HB 837) fundamentally changed how fault is allocated in car accident lawsuits. Under the revised Florida Statute § 768.81, Florida now applies a modified comparative fault standard: if you are found to be more than 50% responsible for causing the accident, you are completely barred from recovering any damages from the other driver. If you are 50% or less at fault, your total damages are reduced proportionally by your share of fault — for example, a jury finding you 30% responsible would reduce a $100,000 award to $70,000. This is a major departure from the old "pure comparative fault" rule, which allowed recovery even if a plaintiff was 99% at fault. Insurance adjusters and defense attorneys now aggressively scrutinize your actions before and during the crash — speeding slightly, a momentary distraction, or failing to signal — to push your fault percentage above the 50% cutoff and eliminate your recovery entirely. An experienced Florida car accident attorney will counter these tactics by gathering dashcam footage, witness statements, accident reconstruction analysis, and police reports to accurately document the other driver's negligence.`,
      },
      {
        heading: "Florida Car Accident Statute of Limitations — 2 Years",
        content: `Florida's 2023 tort reform (HB 837) cut the statute of limitations for car accident personal injury claims in half — from four years to two years. Under Florida Statute § 95.11(3)(a), you have exactly two years from the date of the accident to file a lawsuit against the at-fault driver. Missing this deadline is almost always fatal to your case: courts will dismiss it, and you permanently lose the right to any compensation no matter how serious your injuries. Property damage claims carry a separate four-year limitation period under § 95.11(3)(k). Narrow exceptions exist — such as accidents involving minors (the clock may pause until they turn 18), cases where the defendant fraudulently concealed their identity, or claims against government entities (which involve shorter notice requirements, typically three years). Do not rely on these exceptions without legal advice. Because two years passes quickly — especially when you are focused on medical treatment and recovery — it is essential to consult a Florida car accident attorney as soon as possible to preserve evidence, identify all liable parties, and meet every deadline.`,
      },
      {
        heading: "Why Florida Has Some of the Highest Accident Rates in the Nation",
        content: `Florida consistently ranks among the top five deadliest states for traffic fatalities, and the reasons are structural rather than coincidental. The state has one of the oldest driver populations in the country, with a large concentration of elderly drivers who may have slower reaction times and vision impairments. Florida attracts more than 130 million tourists annually, filling its roads with unfamiliar drivers who are navigating complex interchanges like I-4, I-95, and the Palmetto Expressway for the first time. The year-round warm climate encourages motorcycling, cycling, and pedestrian activity, adding more vulnerable road users to high-speed arterials that were not designed with them in mind. Distracted driving — particularly cell phone use — is cited in a disproportionate share of Florida crashes, and the state ranks near the top nationally for DUI-related fatalities. Florida's sprawling, car-dependent metro areas (Miami, Tampa, Orlando, Jacksonville) generate some of the nation's worst traffic congestion, creating the stop-and-go conditions where rear-end collisions are most common. In 2022 alone, the Florida Department of Highway Safety and Motor Vehicles (FLHSMV) recorded over 3,500 traffic fatalities and more than 250,000 injury crashes statewide — underscoring why understanding your legal rights after an accident is so important.`,
      },
    ],
    faq: [
      {
        q: "Do I have to use my own insurance after a car accident in Florida even if the other driver was at fault?",
        a: "Yes. Florida's no-fault law requires you to first file a claim with your own PIP insurer regardless of who caused the crash. PIP covers 80% of your medical bills and 60% of your lost wages, up to the $10,000 policy minimum. Only after PIP is exhausted — or if your injuries meet the serious injury threshold under § 627.737 — can you pursue the at-fault driver's bodily injury liability coverage for pain and suffering and additional economic losses.",
      },
      {
        q: "What qualifies as a 'serious injury' in Florida that allows me to sue the at-fault driver?",
        a: "Under Florida Statute § 627.737, you can step outside the no-fault system and bring a lawsuit against the at-fault driver if you suffered: (1) significant and permanent loss of an important bodily function; (2) permanent injury within a reasonable degree of medical probability (other than scarring or disfigurement); (3) significant and permanent scarring or disfigurement; or (4) death. Soft tissue injuries that fully resolve with treatment typically do not meet this threshold, which is why thorough medical documentation is critical.",
      },
      {
        q: "How long do I have to file a car accident lawsuit in Florida?",
        a: "Florida's 2023 tort reform reduced the statute of limitations for personal injury claims — including car accidents — from four years to two years (Florida Statute § 95.11(3)(a)). The clock starts on the date of the accident. Missing this deadline almost always results in your case being dismissed and your right to compensation permanently extinguished. Property damage claims retain a four-year limitation period. Contact a Florida car accident attorney promptly — evidence fades and witnesses' memories dim quickly.",
      },
      {
        q: "Can I still recover damages if I was partially at fault for the accident in Florida?",
        a: "Yes, but only if you were 50% or less at fault. Under Florida's modified comparative fault rule (§ 768.81, amended in 2023), your total damages are reduced by your percentage of responsibility. For example, if you are found 25% at fault and your damages total $80,000, you recover $60,000. However, if a jury determines you were more than 50% at fault, you recover nothing. This is a significant change from Florida's old pure comparative fault rule, which allowed partial recovery even when a plaintiff was 99% responsible.",
      },
      {
        q: "What should I do immediately after a car accident in Florida?",
        a: "Call 911 if anyone is injured — Florida Statute § 316.065 requires you to report crashes involving injury, death, or property damage exceeding $500. Seek medical attention within 14 days of the accident to preserve your PIP benefits; failure to do so can result in a complete denial of your PIP claim. Document the scene with photos and video, collect the other driver's insurance and license information, and gather contact details from witnesses. Do not give a recorded statement to the other driver's insurer before consulting an attorney — adjusters are trained to use your own words to minimize your payout.",
      },
    ],
  },
  "personal-injury": {
    intro: "Florida's 2023 tort reform (HB 837) significantly changed the personal injury landscape — reducing the statute of limitations and shifting to a modified comparative fault system.",
    paragraphs: [],
    sections: [
      {
        heading: "Florida's Serious Injury Threshold — Statute § 627.737",
        content: `In Florida's no-fault insurance system, the serious injury threshold under Florida Statute § 627.737 determines whether an injured person can step outside the no-fault framework and sue the at-fault party for pain and suffering, mental anguish, and other non-economic damages. To clear the threshold, your injury must meet at least one of four criteria: (1) significant and permanent loss of an important bodily function; (2) permanent injury within a reasonable degree of medical probability, other than scarring or disfigurement; (3) significant and permanent scarring or disfigurement; or (4) death. Injuries that fully heal — even painful ones — generally do not satisfy the threshold, which is why continuous medical treatment, specialist evaluations, and detailed physician opinions on permanency are critical to any Florida personal injury claim. Insurance companies aggressively dispute permanency findings, often hiring their own independent medical examiners (IMEs) to challenge your treating physician's conclusions. An experienced Florida personal injury attorney works with your medical team to build the evidentiary record needed to satisfy § 627.737 and unlock your right to full compensation.`,
      },
      {
        heading: "Modified Comparative Fault — Florida Statute § 768.81",
        content: `Florida's 2023 tort reform (HB 837) replaced the state's longstanding pure comparative fault rule with a modified comparative fault standard codified in Florida Statute § 768.81. Under the new rule, a plaintiff who is found to be more than 50% at fault for their own injury is completely barred from recovering any damages — regardless of how seriously they were hurt or how negligent the defendant was. If you are 50% or less at fault, your damages are reduced proportionally: a $200,000 verdict where you are found 40% responsible yields a $120,000 recovery. This represents a dramatic shift from the old pure comparative fault system, under which Florida plaintiffs could recover even when found 99% responsible. Insurance adjusters now routinely construct fault narratives that push the plaintiff's share above 50%, often seizing on minor contributing factors — a wet-floor sign partially blocked, a distraction on a cell phone, failure to follow a posted warning. Preserving surveillance footage, witness statements, and incident reports immediately after an injury is essential to countering these tactics, as is retaining an attorney before the insurance company completes its own investigation.`,
      },
      {
        heading: "Common Florida Personal Injury Cases",
        content: `Florida's unique geography, tourism industry, and demographics produce a distinct mix of personal injury claims. Slip and fall and trip and fall accidents are among the most common, arising in grocery stores, retail chains, restaurants, parking lots, and public spaces — governed by Florida's premises liability statute (§ 768.0755), which requires proof that the business had actual or constructive knowledge of the dangerous condition. Florida's enormous hospitality sector — over 130 million annual visitors — means hotel and resort premises liability cases are especially prevalent, involving pool accidents, elevator injuries, inadequate security leading to assault, balcony collapses, and failure to warn of known hazards. Boating accidents are another Florida-specific category: with more registered vessels than any other state, Florida leads the nation in recreational boating accidents and fatalities governed by Chapter 327 of the Florida Statutes and federal maritime law. Theme park injuries at Walt Disney World, Universal Orlando, SeaWorld, and Busch Gardens raise specialized questions around assumption of risk, the federal Americans with Disabilities Act, and the challenge of litigating against large corporate defendants with dedicated legal teams. Pedestrian and bicycle accidents — particularly dangerous in Florida, which ranks first in the country for pedestrian fatalities — nursing home abuse and neglect cases under Chapter 400, and swimming pool drownings under Florida's Residential Swimming Pool Safety Act (§ 515) round out the most frequently litigated personal injury categories in the state.`,
      },
      {
        heading: "Florida Personal Injury Statute of Limitations — 2 Years",
        content: `Florida's 2023 tort reform (HB 837) cut the statute of limitations for negligence-based personal injury claims from four years to two years, effective March 24, 2023. Under Florida Statute § 95.11(3)(a), you have two years from the date of the injury-causing event to file a lawsuit in circuit court. Missing this deadline almost always results in permanent dismissal of your case — courts routinely reject late-filed claims regardless of the severity of the injuries or the clarity of the defendant's fault. The two-year clock applies to most common personal injury claims: slip and falls, boating accidents, dog bites, negligent security, and theme park injuries. Some claims carry different deadlines: medical malpractice claims have a two-year limit with a four-year statute of repose under § 95.11(4)(b); wrongful death actions must be filed within two years of death under § 95.11(4)(d); and claims against Florida government entities require a pre-suit notice within three years and follow separate procedural requirements under § 768.28. For minors, the statute of limitations is generally tolled until they reach age 18, though exceptions apply. Because key evidence — surveillance footage, incident reports, witness memories — begins to degrade immediately after an accident, waiting even several months to consult an attorney can compromise your case well before the legal deadline arrives.`,
      },
    ],
    faq: [
      {
        q: "How do I know if my injury qualifies for a personal injury lawsuit in Florida?",
        a: "Florida's no-fault insurance system limits who can sue for non-economic damages like pain and suffering. For most claims, your injury must meet the serious injury threshold under § 627.737 — meaning a permanent injury, significant permanent scarring or disfigurement, significant and permanent loss of an important bodily function, or death. For injuries outside the no-fault system (slip and falls, boating accidents, premises liability), there is no threshold — any provable injury caused by someone else's negligence can support a claim. A Florida personal injury attorney can evaluate your specific injuries and the applicable law to determine your options.",
      },
      {
        q: "What is Florida's modified comparative fault rule and how does it affect my case?",
        a: "Under Florida Statute § 768.81 (amended by HB 837 in 2023), if a jury finds you more than 50% at fault for causing your own injury, you recover nothing. If you are 50% or less at fault, your damages are reduced by your percentage of fault. For example, being found 30% responsible reduces a $100,000 award to $70,000. Insurance companies use this rule aggressively to assign as much fault to the plaintiff as possible — gathering strong evidence early and working with an attorney to document the defendant's negligence is essential.",
      },
      {
        q: "How long do I have to file a personal injury lawsuit in Florida?",
        a: "Two years from the date of your injury for most negligence-based claims, under Florida Statute § 95.11(3)(a) as amended by the 2023 tort reform. This is a hard deadline — missing it almost always results in permanent dismissal of your case. Some claims have different limits: medical malpractice is two years with a four-year repose period; wrongful death is two years from the date of death; claims against government entities require a three-year pre-suit notice. Consult a Florida attorney promptly — evidence preservation begins on day one.",
      },
      {
        q: "Can I sue a hotel, theme park, or resort if I was injured on their property in Florida?",
        a: "Yes. Property owners and occupiers in Florida owe a duty of reasonable care to lawful visitors (invitees) under the state's premises liability law. For slip and fall cases in commercial establishments, Florida Statute § 768.0755 requires you to prove the business had actual or constructive knowledge of the dangerous condition and failed to correct it. Theme parks, hotels, and resorts have additional obligations around pool safety, security, equipment maintenance, and adequate warnings. These defendants have experienced legal teams and risk management departments — retaining your own attorney quickly helps level the playing field and preserve critical evidence.",
      },
      {
        q: "What compensation can I recover in a Florida personal injury case?",
        a: "Florida personal injury plaintiffs can recover economic damages — including past and future medical expenses, lost wages, lost earning capacity, and out-of-pocket costs — and non-economic damages such as pain and suffering, mental anguish, loss of enjoyment of life, and disfigurement. Under HB 837's medical damages provisions, recoverable medical expenses are limited to amounts actually paid or owed rather than full billed charges in some contexts. Florida does not cap non-economic damages in most personal injury cases (caps in medical malpractice cases were struck down by the Florida Supreme Court). In cases involving intentional misconduct or gross negligence, punitive damages may also be available under § 768.72.",
      },
    ],
  },
  "truck-accident": {
    intro: "Florida's major interstates are among the busiest commercial freight corridors in the southeastern US — and the state ranks in the top five for fatal large truck accidents.",
    paragraphs: [
      `Florida's major interstates — I-95, I-75, I-4, and the Florida Turnpike — are among the busiest commercial freight corridors in the southeastern United States. The state's ports in Miami, Jacksonville, Tampa, and Port Everglades generate enormous volumes of truck traffic year-round. With this volume comes significant risk: Florida consistently ranks among the top five states for fatal large truck accidents.`,
      `Commercial trucking in Florida is governed by both state law (Florida Statutes Chapter 316) and federal FMCSA regulations. Florida requires commercial trucks to pass regular safety inspections, and the Florida Department of Transportation operates weigh stations and inspection sites throughout the state. When a truck driver or company violates these regulations, they can be held liable for any resulting injuries.`,
      `One of the most important steps after a Florida truck accident is to preserve evidence before it disappears. Federal regulations require trucking companies to retain certain records — including driver logs, inspection reports, and black box data — for specific periods. However, these companies often have legal teams working to minimize their liability immediately after an accident. An attorney can send a legal preservation letter and, if necessary, seek a court order to prevent spoliation of evidence.`,
    ],
  },
  "workers-compensation": {
    intro: "Florida's workers' comp system is governed by Chapter 440 and is known for being employer and insurer-friendly — understanding your rights is essential.",
    paragraphs: [
      `Florida's workers' compensation system is governed by Chapter 440 of the Florida Statutes. Unlike many states, Florida's system is known for being particularly employer and insurer-friendly, with strict procedural requirements and benefit limitations that can catch injured workers off guard. Understanding your rights under Florida law is essential to getting everything you're owed.`,
      `One of the most significant Florida-specific rules is the 30-day notice requirement: you must report your work injury to your employer within 30 days or you may lose your right to benefits. Once reported, your employer's insurer has the right to control your medical care — meaning you generally must treat with an authorized physician rather than your own doctor. Seeking unauthorized treatment can jeopardize your claim.`,
      `Florida workers' comp also has strict impairment rating schedules and maximum medical improvement (MMI) determinations that significantly affect your permanent benefits. Once your treating physician determines you've reached MMI, your temporary disability benefits stop and you receive a permanent impairment rating (PIR) using the AMA Guides. The resulting permanent impairment benefits are often much lower than what injured workers expect.`,
    ],
  },
};

interface Props {
  params: Promise<{ practiceArea: string }>;
}

export async function generateStaticParams() {
  return VALID_PRACTICE_AREAS.map((practiceArea) => ({ practiceArea }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { practiceArea } = await params;
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!area) return {};

  const title = `${area.title} Lawyers in Florida — Free Case Evaluation`;
  const description = `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Florida's statute of limitations is 2 years — act now. Free consultation, no upfront fees.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://toplawyerresource.com/${practiceArea}/fl`,
    },
    alternates: {
      canonical: `https://toplawyerresource.com/${practiceArea}/fl`,
    },
  };
}

const floridaCities = citiesData.filter((c) => c.stateCode === "fl");

export default async function FloridaHubPage({ params }: Props) {
  const { practiceArea } = await params;

  if (!VALID_PRACTICE_AREAS.includes(practiceArea)) notFound();

  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!area) notFound();

  const heroImage = HERO_IMAGES[practiceArea] || HERO_IMAGES["personal-injury"];
  const floridaContent = FLORIDA_CONTENT[practiceArea];

  const legalServiceLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} Attorneys in Florida — Top Lawyer Resource`,
    description: `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Free consultations, no upfront fees.`,
    url: `https://toplawyerresource.com/${practiceArea}/fl`,
    serviceType: area.title,
    areaServed: {
      "@type": "State",
      name: "Florida",
      sameAs: "https://en.wikipedia.org/wiki/Florida",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://toplawyerresource.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: area.title,
        item: `https://toplawyerresource.com/${practiceArea}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Florida",
        item: `https://toplawyerresource.com/${practiceArea}/fl`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[380px] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={`${area.title} attorney in Florida — free case evaluation`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-900/30" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${practiceArea}`} className="hover:text-white transition-colors">
              {area.title}
            </Link>
            <span>/</span>
            <span className="text-gray-200">Florida</span>
          </nav>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Florida &bull; {area.title}
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {area.title} Lawyers in Florida
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            {floridaContent?.intro ?? `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Free consultation, no upfront fees.`}
          </p>
          <Link href="/tools/case-evaluator" className="btn btn-primary">
            Get My Free Case Evaluation
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">

            {/* Florida-Specific Legal Content */}
            {floridaContent && (
              <section className="mb-14">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Florida {area.title} Law: What You Need to Know
                </h2>
                {floridaContent.paragraphs.length > 0 && (
                  <div className="space-y-4 mb-8">
                    {floridaContent.paragraphs.map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                )}
                {floridaContent.sections && floridaContent.sections.length > 0 && (
                  <div className="space-y-8 mb-8">
                    {floridaContent.sections.map((section, i) => (
                      <div key={i}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h3>
                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                {floridaContent.faq && floridaContent.faq.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Frequently Asked Questions — Florida {area.title} Claims
                    </h2>
                    <div className="space-y-5">
                      {floridaContent.faq.map((item, i) => (
                        <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                          <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <p className="text-sm text-blue-800">
                    <strong>Helpful Florida Resources:</strong>{" "}
                    <a
                      href="https://www.floridabar.org/public/consumer/lawyerreferral/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-900"
                    >
                      Florida Bar Lawyer Referral Service
                    </a>{" "}
                    &bull;{" "}
                    <a
                      href="http://www.leg.state.fl.us/statutes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-900"
                    >
                      Florida Statutes Online
                    </a>{" "}
                    &bull;{" "}
                    <a
                      href="https://www.myfloridacfo.com/division/wc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-900"
                    >
                      FL Division of Workers&apos; Comp
                    </a>
                  </p>
                </div>
              </section>
            )}

            {/* Florida Cities Grid */}
            <section className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find a {area.shortTitle} Attorney by City
              </h2>
              <p className="text-gray-500 mb-6">
                Our network of experienced {area.title.toLowerCase()} attorneys serves the following Florida cities. Select your city for local attorney information, courthouse details, and city-specific legal resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {floridaCities.map((city) => (
                  <Link
                    key={city.citySlug}
                    href={`/${practiceArea}/fl/${city.citySlug}`}
                    className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-150 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <span className="text-blue-600 text-lg">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {city.city}, {city.state}
                      </div>
                      <div className="text-xs text-gray-400">{city.county} &bull; Pop. {city.population}</div>
                    </div>
                    <span className="ml-auto text-gray-300 group-hover:text-blue-400 transition-colors">&rarr;</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Statute of Limitations callout */}
            <section className="mb-14 bg-amber-50 border border-amber-200 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>⏱</span> Florida Statute of Limitations — Act Quickly
              </h2>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>2 years</strong>&nbsp;to file a personal injury lawsuit (reduced from 4 years under 2023 tort reform)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>4 years</strong>&nbsp;to file a property damage claim
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <strong>30 days</strong>&nbsp;to report a workplace injury to your employer (workers&apos; comp)
                </li>
              </ul>
              <p className="text-gray-500 text-xs">
                Missing the statute of limitations deadline permanently bars your right to compensation. Consult a Florida attorney as soon as possible.
              </p>
            </section>

            <LeadCaptureBanner
              title={`Injured in Florida? Get a Free ${area.shortTitle} Case Evaluation`}
              subtitle="No obligation. No upfront fees. Confidential consultation."
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl p-7 text-white" style={{ backgroundColor: "#1e40af" }}>
              <h3 className="font-bold text-xl mb-2 text-white">Free Case Evaluation</h3>
              <p className="text-blue-200 text-sm mb-5">
                Florida attorneys available. No cost, no obligation.
              </p>
              <Link href="/tools/case-evaluator" className="btn btn-white w-full justify-center">
                Check My Case
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Florida Cities</h3>
              <div className="space-y-1.5">
                {floridaCities.map((city) => (
                  <Link
                    key={city.citySlug}
                    href={`/${practiceArea}/fl/${city.citySlug}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                  >
                    <span className="text-sky-500 text-xs">📍</span>
                    {city.city}, {city.state}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Other Florida Practice Areas</h3>
              <div className="space-y-2">
                {VALID_PRACTICE_AREAS.filter((pa) => pa !== practiceArea).map((pa) => {
                  const paData = practiceAreasData.find((a) => a.slug === pa);
                  return (
                    <Link
                      key={pa}
                      href={`/${pa}/fl`}
                      className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                    >
                      {paData?.title} in Florida &rarr;
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Florida Legal Resources</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="https://www.floridabar.org/public/consumer/lawyerreferral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  Florida Bar Lawyer Referral
                </a>
                <a
                  href="https://www.flhsmv.gov/safety-programs/motorist-safety-awareness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  FL Highway Safety &amp; Motor Vehicles
                </a>
                <a
                  href="https://www.myfloridacfo.com/division/wc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  FL Division of Workers&apos; Comp
                </a>
                <a
                  href="http://www.leg.state.fl.us/statutes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">↗</span>
                  Florida Statutes Online
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Free Legal Tools</h3>
              <div className="space-y-2">
                <Link
                  href="/tools/case-evaluator"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  ✅ Case Evaluator &rarr;
                </Link>
                <Link
                  href="/tools/settlement-calculator"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  🧮 Settlement Calculator &rarr;
                </Link>
                <Link
                  href="/guides"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  📚 Legal Guides &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
