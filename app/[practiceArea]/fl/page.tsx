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
  "car-accident":
    "https://images.pexels.com/photos/33603523/pexels-photo-33603523.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "personal-injury":
    "https://images.pexels.com/photos/31780184/pexels-photo-31780184.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "truck-accident":
    "https://images.pexels.com/photos/35996049/pexels-photo-35996049.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "workers-compensation":
    "https://images.pexels.com/photos/13538710/pexels-photo-13538710.jpeg?auto=compress&cs=tinysrgb&w=1920",
};

/* ─── Per-practice-area metadata ─── */
const META: Record<string, { title: string; description: string }> = {
  "car-accident": {
    title:
      "Florida Car Accident Lawyers \u2014 Free Case Evaluation",
    description:
      "Injured in a Florida car accident? Understand no-fault PIP rules and the 2-year filing deadline. Free case evaluation from experienced attorneys.",
  },
  "personal-injury": {
    title:
      "Florida Personal Injury Lawyers \u2014 Free Consultation",
    description:
      "Connect with Florida personal injury attorneys. Learn about the serious injury threshold and 2-year statute of limitations. Free consultation.",
  },
  "truck-accident": {
    title:
      "Florida Truck Accident Lawyers \u2014 Free Case Review",
    description:
      "Florida ranks top 5 for fatal truck crashes. Attorneys handle FMCSA violations, multi-party claims, and catastrophic injuries. Free review.",
  },
  "workers-compensation": {
    title:
      "Florida Workers\u2019 Comp Lawyers \u2014 Free Case Review",
    description:
      "Hurt at work in Florida? Understand Chapter 440 benefits, the 30-day reporting rule, and how to appeal a denied claim. Free consultation.",
  },
};

/* ─── Florida-specific content blocks ─── */
interface FloridaSection {
  heading: string;
  content: string;
}
interface FloridaFAQ {
  q: string;
  a: string;
}
interface OutboundLink {
  label: string;
  url: string;
}
interface GuideLink {
  slug: string;
  title: string;
}
interface FloridaData {
  heroSubtitle: string;
  intro: string;
  overview: string;
  sections: FloridaSection[];
  statLimitations: FloridaSection;
  whyUnique: FloridaSection;
  statistics: FloridaSection;
  faq: FloridaFAQ[];
  outboundLinks: OutboundLink[];
  guides: GuideLink[];
}

const FLORIDA_CONTENT: Record<string, FloridaData> = {
  /* ═══════════════ CAR ACCIDENT ═══════════════ */
  "car-accident": {
    heroSubtitle:
      "Florida\u2019s no-fault insurance system, the 14-day PIP rule, and 2023 tort reform create unique challenges for accident victims. Get the legal guidance you need \u2014 at no cost.",
    intro:
      "Florida\u2019s unique no-fault insurance system and 2023 tort reform make car accident claims more complex than in most other states.",
    overview: `If you have been injured in a car accident in Florida, you are navigating one of the most complex auto-insurance legal frameworks in the country. Florida is one of a shrinking number of no-fault states, which means your own Personal Injury Protection (PIP) policy pays your initial medical bills and a portion of your lost wages regardless of who caused the crash. While this system was designed to speed up payments and reduce litigation, the strict deadlines and coverage caps often leave accident victims financially exposed long before their treatment is complete. The state\u2019s 2023 tort reform legislation (HB 837) made things harder still: the statute of limitations was cut from four years to two, and Florida shifted from a pure comparative fault system to a modified comparative fault model that bars recovery entirely if you are more than 50\u202f% at fault. These sweeping changes mean that the strategies that worked for Florida accident victims just a few years ago may no longer apply. Whether you were rear-ended on I-95, involved in a multi-vehicle pileup on I-4, or hit by an uninsured driver on a local road, understanding how Florida\u2019s rules interact with your specific facts is critical to getting the compensation you deserve. An experienced Florida car accident attorney can guide you through PIP claims, negotiate with the at-fault driver\u2019s insurer, and \u2014 when necessary \u2014 file suit before the two-year deadline expires.`,
    sections: [
      {
        heading: "Florida No-Fault Insurance and PIP Coverage",
        content: `Florida is one of a small number of no-fault states, meaning that after a car accident your own Personal Injury Protection (PIP) insurance pays your initial medical bills and lost wages \u2014 regardless of who caused the crash. Under Florida Statute \u00a7\u202f627.736, all registered drivers must carry a minimum of $10,000 in PIP coverage. PIP covers 80\u202f% of reasonable and necessary medical expenses and 60\u202f% of lost wages up to the policy limit. Critically, you must seek initial medical treatment within 14 days of the accident to preserve your PIP benefits; a gap beyond that window allows the insurer to deny your claim entirely. While PIP provides fast access to funds without requiring a fault determination, the $10,000 limit is often exhausted quickly in moderate-to-serious accidents. Florida also requires a minimum of $10,000 in Property Damage Liability (PDL) coverage, but \u2014 notably \u2014 does not require drivers to carry Bodily Injury (BI) liability coverage, leaving many at-fault drivers effectively judgment-proof. Once PIP is exhausted \u2014 or if your injuries meet the serious injury threshold under \u00a7\u202f627.737 (permanent injury, significant scarring, or death) \u2014 you can pursue the at-fault driver\u2019s bodily injury liability coverage for the remainder of your damages. Given these coverage gaps, carrying Uninsured/Underinsured Motorist (UM/UIM) coverage on your own policy is strongly recommended.`,
      },
      {
        heading:
          "Modified Comparative Fault \u2014 Florida Statute \u00a7\u202f768.81",
        content: `Florida\u2019s 2023 tort reform (HB 837) fundamentally changed how fault is allocated in car accident lawsuits. Under the revised Florida Statute \u00a7\u202f768.81, Florida now applies a modified comparative fault standard: if you are found to be more than 50\u202f% responsible for causing the accident, you are completely barred from recovering any damages from the other driver. If you are 50\u202f% or less at fault, your total damages are reduced proportionally by your share of fault \u2014 for example, a jury finding you 30\u202f% responsible would reduce a $100,000 award to $70,000. This is a major departure from the old \u201cpure comparative fault\u201d rule, which allowed recovery even if a plaintiff was 99\u202f% at fault. Insurance adjusters and defense attorneys now aggressively scrutinize your actions before and during the crash \u2014 speeding slightly, a momentary distraction, or failing to signal \u2014 to push your fault percentage above the 50\u202f% cutoff and eliminate your recovery entirely. An experienced Florida car accident attorney will counter these tactics by gathering dashcam footage, witness statements, accident reconstruction analysis, and police reports to accurately document the other driver\u2019s negligence.`,
      },
    ],
    statLimitations: {
      heading:
        "Florida Car Accident Statute of Limitations \u2014 2 Years",
      content: `Florida\u2019s 2023 tort reform (HB 837) cut the statute of limitations for car accident personal injury claims in half \u2014 from four years to two years. Under Florida Statute \u00a7\u202f95.11(3)(a), you have exactly two years from the date of the accident to file a lawsuit against the at-fault driver. Missing this deadline is almost always fatal to your case: courts will dismiss it, and you permanently lose the right to any compensation no matter how serious your injuries. Property damage claims carry a separate four-year limitation period under \u00a7\u202f95.11(3)(k). Narrow exceptions exist \u2014 such as accidents involving minors (the clock may pause until they turn 18), cases where the defendant fraudulently concealed their identity, or claims against government entities (which involve shorter notice requirements). Do not rely on these exceptions without legal advice. Because two years passes quickly \u2014 especially when you are focused on medical treatment and recovery \u2014 it is essential to consult a Florida car accident attorney as soon as possible to preserve evidence, identify all liable parties, and meet every deadline.`,
    },
    whyUnique: {
      heading:
        "Why Florida Has Some of the Highest Accident Rates in the Nation",
      content: `Florida consistently ranks among the top five deadliest states for traffic fatalities, and the reasons are structural rather than coincidental. The state has one of the oldest driver populations in the country, with a large concentration of elderly drivers who may have slower reaction times and vision impairments. Florida attracts more than 130 million tourists annually, filling its roads with unfamiliar drivers who are navigating complex interchanges like I-4, I-95, and the Palmetto Expressway for the first time. The year-round warm climate encourages motorcycling, cycling, and pedestrian activity, adding more vulnerable road users to high-speed arterials that were not designed with them in mind. Distracted driving \u2014 particularly cell phone use \u2014 is cited in a disproportionate share of Florida crashes, and the state ranks near the top nationally for DUI-related fatalities. Florida\u2019s sprawling, car-dependent metro areas (Miami, Tampa, Orlando, Jacksonville) generate some of the nation\u2019s worst traffic congestion, creating the stop-and-go conditions where rear-end collisions are most common. These factors combine to make Florida one of the most challenging driving environments in the United States.`,
    },
    statistics: {
      heading: "Florida Car Accident Statistics",
      content: `According to the Florida Department of Highway Safety and Motor Vehicles (FLHSMV), Florida recorded over 3,500 traffic fatalities and more than 250,000 injury crashes in a recent reporting year. Miami-Dade, Broward, and Hillsborough counties consistently lead the state in total crash volume, while Duval County (Jacksonville) regularly ranks among the top five. Rear-end collisions account for roughly 30\u202f% of all reported crashes statewide, followed by angle collisions and sideswipe incidents. Alcohol- and drug-impaired driving contributes to approximately 5,000 injury crashes per year in Florida, with fatal DUI crashes concentrated on weekends and holidays. Pedestrian and bicycle fatalities in Florida are among the highest in the nation \u2014 the state accounted for roughly 12\u202f% of all U.S. pedestrian deaths despite having about 7\u202f% of the national population. Distracted driving was cited as a contributing factor in more than 50,000 crashes statewide in recent years. The economic cost of motor-vehicle crashes in Florida is estimated to exceed $16 billion annually when accounting for medical expenses, lost productivity, property damage, and emergency response. These numbers underscore why prompt legal action is so important after any Florida car accident.`,
    },
    faq: [
      {
        q: "Do I have to use my own insurance after a car accident in Florida even if the other driver was at fault?",
        a: "Yes. Florida\u2019s no-fault law requires you to first file a claim with your own PIP insurer regardless of who caused the crash. PIP covers 80\u202f% of your medical bills and 60\u202f% of your lost wages, up to the $10,000 policy minimum. Only after PIP is exhausted \u2014 or if your injuries meet the serious injury threshold under \u00a7\u202f627.737 \u2014 can you pursue the at-fault driver\u2019s bodily injury liability coverage for pain and suffering and additional economic losses.",
      },
      {
        q: "What qualifies as a \u2018serious injury\u2019 in Florida that allows me to sue the at-fault driver?",
        a: "Under Florida Statute \u00a7\u202f627.737, you can step outside the no-fault system and bring a lawsuit against the at-fault driver if you suffered: (1) significant and permanent loss of an important bodily function; (2) permanent injury within a reasonable degree of medical probability (other than scarring or disfigurement); (3) significant and permanent scarring or disfigurement; or (4) death. Soft tissue injuries that fully resolve with treatment typically do not meet this threshold, which is why thorough medical documentation is critical.",
      },
      {
        q: "How long do I have to file a car accident lawsuit in Florida?",
        a: "Florida\u2019s 2023 tort reform reduced the statute of limitations for personal injury claims \u2014 including car accidents \u2014 from four years to two years (Florida Statute \u00a7\u202f95.11(3)(a)). The clock starts on the date of the accident. Missing this deadline almost always results in your case being dismissed. Property damage claims retain a four-year limitation period. Contact a Florida car accident attorney promptly.",
      },
      {
        q: "Can I still recover damages if I was partially at fault for the accident in Florida?",
        a: "Yes, but only if you were 50\u202f% or less at fault. Under Florida\u2019s modified comparative fault rule (\u00a7\u202f768.81, amended in 2023), your total damages are reduced by your percentage of responsibility. For example, if you are 25\u202f% at fault and your damages total $80,000, you recover $60,000. However, if a jury determines you were more than 50\u202f% at fault, you recover nothing.",
      },
      {
        q: "What should I do immediately after a car accident in Florida?",
        a: "Call 911 if anyone is injured \u2014 Florida Statute \u00a7\u202f316.065 requires you to report crashes involving injury, death, or property damage exceeding $500. Seek medical attention within 14 days to preserve your PIP benefits. Document the scene with photos and video, collect the other driver\u2019s information, and gather witness contact details. Do not give a recorded statement to the other driver\u2019s insurer before consulting an attorney.",
      },
    ],
    outboundLinks: [
      {
        label: "Florida Statute \u00a7\u202f627.736 \u2014 PIP Coverage",
        url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html",
      },
      {
        label:
          "Florida Statute \u00a7\u202f768.81 \u2014 Comparative Fault",
        url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html",
      },
      {
        label: "Florida Highway Safety and Motor Vehicles (FLHSMV)",
        url: "https://www.flhsmv.gov/",
      },
    ],
    guides: [
      {
        slug: "serious-injury-florida-no-fault",
        title:
          "What Counts as a \u2018Serious Injury\u2019 Under Florida\u2019s No-Fault Insurance Laws?",
      },
      {
        slug: "medical-bills-after-florida-car-accident",
        title: "Dealing with Medical Bills After a Florida Car Accident",
      },
      {
        slug: "florida-no-fault-minor-accidents",
        title:
          "How Florida\u2019s No-Fault Insurance Works in Minor Car Accidents",
      },
      {
        slug: "jacksonville-dangerous-roads",
        title:
          "Jacksonville\u2019s Most Dangerous Roads for Motorists",
      },
    ],
  },

  /* ═══════════════ PERSONAL INJURY ═══════════════ */
  "personal-injury": {
    heroSubtitle:
      "Florida\u2019s 2023 tort reform slashed the filing deadline and changed fault rules. Whether you were injured in a slip and fall, boating accident, or premises liability incident, experienced Florida attorneys can protect your rights.",
    intro:
      "Florida\u2019s 2023 tort reform (HB 837) significantly changed the personal injury landscape \u2014 reducing the statute of limitations and shifting to a modified comparative fault system.",
    overview: `Florida is one of the most active states in the country for personal injury litigation, and for good reason. The state\u2019s unique combination of year-round tourism, outdoor recreation, diverse industries, and dense urban areas creates an environment where injuries happen at a rate that far exceeds the national average. From slip-and-fall incidents at resort hotels and theme parks to boating accidents on Florida\u2019s 1,350 miles of coastline, the range of personal injury scenarios in the Sunshine State is remarkably broad. Florida\u2019s 2023 tort reform legislation (HB 837) reshaped the personal injury landscape in ways that directly affect injury victims. The statute of limitations for negligence-based claims was reduced from four years to two years, giving you less time to act. The shift from pure comparative fault to a modified comparative fault system (\u00a7\u202f768.81) means you are now completely barred from recovery if found more than 50\u202f% at fault. Medical damages rules have also changed: in some cases, only amounts actually paid or owed \u2014 not the full billed amount \u2014 can be introduced as evidence. These reforms make it more important than ever to consult an experienced Florida personal injury attorney early, preserve evidence, and build a strong case from day one.`,
    sections: [
      {
        heading:
          "Florida\u2019s Serious Injury Threshold \u2014 Statute \u00a7\u202f627.737",
        content: `Because Florida is a no-fault auto insurance state, your ability to bring a personal injury lawsuit after a motor vehicle accident depends on whether your injuries meet the \u201cserious injury threshold\u201d defined in Florida Statute \u00a7\u202f627.737. The statute recognizes four categories of qualifying injuries: (1) significant and permanent loss of an important bodily function; (2) permanent injury within a reasonable degree of medical probability, other than scarring or disfigurement; (3) significant and permanent scarring or disfigurement; and (4) death. If your injuries do not meet at least one of these categories, you are generally limited to the benefits available under your own PIP policy. This threshold is particularly important for soft-tissue injuries such as whiplash or lower-back strains, which may cause real pain and disability but may not satisfy the \u201cpermanent\u201d standard without strong medical evidence. Insurance companies frequently argue that a claimant\u2019s injuries are temporary and do not cross this threshold. Thorough medical documentation \u2014 including diagnostic imaging, specialist evaluations, and long-term treatment records \u2014 is essential to proving permanency. An experienced Florida personal injury attorney will work closely with your medical providers to develop the evidence needed to meet this statutory threshold and unlock your right to full compensation.`,
      },
      {
        heading:
          "Modified Comparative Fault in Personal Injury Claims",
        content: `Under the revised Florida Statute \u00a7\u202f768.81, Florida applies a modified comparative fault standard to all negligence-based personal injury claims. If you are found more than 50\u202f% at fault for the incident that caused your injury, you are completely barred from recovering any damages. If your fault is 50\u202f% or less, your recovery is reduced by your percentage of responsibility. This rule applies to all types of personal injury cases in Florida, not just auto accidents \u2014 including slip-and-fall claims, premises liability, dog bites, and boating accidents. Defense attorneys and insurance companies now aggressively argue contributory negligence to push plaintiffs above the 50\u202f% threshold. For example, in a slip-and-fall case at a Florida hotel, the defense may argue that you were wearing inappropriate footwear, were distracted by your phone, or failed to notice posted warning signs. Countering these arguments requires immediate evidence preservation: security camera footage, incident reports, witness statements, and photographs taken at the scene. Florida personal injury attorneys experienced in post-reform litigation understand these defense tactics and build cases designed to withstand them.`,
      },
      {
        heading: "Common Personal Injury Cases in Florida",
        content: `Florida\u2019s tourism economy, outdoor lifestyle, and diverse industries generate a wide variety of personal injury claims. Slip-and-fall and premises liability cases are among the most common, particularly at hotels, resorts, restaurants, retail stores, and theme parks where property owners owe a duty of care to visitors. Florida\u2019s extensive coastline and waterways make boating accidents a significant source of injury claims \u2014 the state consistently leads the nation in registered recreational vessels and reported boating incidents. Dog bite claims are governed by Florida Statute \u00a7\u202f767.01, which imposes strict liability on dog owners regardless of whether the animal had a history of aggression. Nursing home abuse and neglect claims are unfortunately common given Florida\u2019s large elderly population and the number of assisted living and long-term care facilities in the state. Theme park injuries \u2014 while statistically rare \u2014 can result in catastrophic outcomes due to the nature of the rides and attractions involved. Swimming pool accidents, construction site injuries, medical malpractice, and product liability claims round out the landscape. Whatever the cause, Florida personal injury law provides a framework for holding negligent parties accountable and recovering damages for medical expenses, lost income, pain and suffering, and diminished quality of life.`,
      },
      {
        heading:
          "Damages Available in Florida Personal Injury Cases",
        content: `Florida personal injury law allows injured parties to recover three broad categories of damages. Economic damages include past and future medical expenses, lost wages and diminished earning capacity, property damage, and other quantifiable financial losses. Non-economic damages cover pain and suffering, emotional distress, loss of enjoyment of life, and loss of consortium. Under HB 837, the introduction of medical expense evidence is now more restrictive: in certain cases, only the amount actually paid or owed \u2014 not the original billed amount \u2014 may be presented to the jury. Punitive damages are available in cases involving intentional misconduct or gross negligence, but Florida Statute \u00a7\u202f768.72 requires a court to grant leave before a plaintiff can even add a punitive damages claim to a complaint. Punitive damages are generally capped at three times the compensatory damages or $500,000, whichever is greater \u2014 with exceptions for conduct motivated by unreasonable financial gain. Wrongful death claims under Florida Statute \u00a7\u202f768.19 allow surviving family members to recover funeral and burial expenses, lost support and services, lost companionship, and mental pain and suffering. An experienced Florida personal injury attorney can evaluate which categories of damages apply to your specific case and develop a strategy to maximize your total recovery.`,
      },
    ],
    statLimitations: {
      heading:
        "Florida Personal Injury Statute of Limitations \u2014 2 Years",
      content: `Under Florida Statute \u00a7\u202f95.11(3)(a), as amended by HB 837 in 2023, you have exactly two years from the date of your injury to file a personal injury lawsuit in Florida. This is a significant reduction from the previous four-year limitation period and represents one of the most impactful changes of the 2023 tort reform. The two-year clock begins on the date the injury occurred \u2014 or, in limited cases, the date the injury was discovered or should have been discovered through reasonable diligence (the \u201cdiscovery rule\u201d). Medical malpractice claims have their own specific limitation periods under \u00a7\u202f95.11(4)(b). Claims against government entities under the Florida Sovereign Immunity Act (\u00a7\u202f768.28) require a written notice of claim within three years but impose additional procedural hurdles. Claims involving minors may be tolled until the minor reaches age 18. Missing the applicable deadline almost always results in permanent dismissal of your claim. Because evidence degrades, witnesses\u2019 memories fade, and the defense benefits from delay, consulting a Florida personal injury attorney as early as possible gives you the strongest foundation for your case.`,
    },
    whyUnique: {
      heading:
        "Why Florida Sees More Personal Injury Claims Than Most States",
      content: `Several factors make Florida a uniquely active state for personal injury claims. Tourism is the most obvious: with more than 130 million visitors annually, Florida\u2019s hotels, theme parks, beaches, restaurants, and rental-car fleet create an enormous number of potential injury scenarios involving both residents and out-of-state visitors. The state\u2019s year-round warm climate encourages outdoor activities \u2014 boating, cycling, swimming, and motorcycling \u2014 that carry inherent physical risk. Florida\u2019s population skews older than the national average, and older individuals are both more likely to suffer serious injuries in falls and other incidents and more likely to require long-term medical care. The state\u2019s construction and agriculture industries are among the largest in the Southeast, generating workplace injuries that often cross into personal injury territory when third-party negligence is involved. Florida\u2019s high population density in South Florida, Central Florida, and the Tampa Bay corridor creates congested environments where car accidents, pedestrian injuries, and premises liability incidents occur at elevated rates. All of these factors combine to produce a personal injury caseload that is consistently among the highest in the nation.`,
    },
    statistics: {
      heading: "Florida Personal Injury Statistics",
      content: `Florida\u2019s personal injury claim volume reflects the state\u2019s size, population, and risk profile. The Florida Department of Highway Safety and Motor Vehicles reported over 400,000 total traffic crashes in a recent year, with more than 250,000 involving injuries. According to the Florida Department of Health, unintentional injuries are a leading cause of death and hospitalization in the state, with falls, motor vehicle crashes, and drownings among the top contributors. The Florida Fish and Wildlife Conservation Commission reported over 700 boating accidents in a recent year, with the state leading the nation in both total boating incidents and boating fatalities. Premises liability \u2014 including slip-and-fall incidents \u2014 accounts for a significant portion of Florida\u2019s personal injury filings, driven by the state\u2019s high commercial and tourist foot traffic. The Bureau of Labor Statistics reports that Florida\u2019s construction, healthcare, and agriculture sectors experience injury rates above the national average for their respective industries. Dog bite claims in Florida cost an estimated $110 million annually in homeowner insurance payouts. These statistics underscore the breadth and frequency of injury-producing incidents across the state.`,
    },
    faq: [
      {
        q: "How long do I have to file a personal injury lawsuit in Florida?",
        a: "Under Florida\u2019s 2023 tort reform (HB 837), you have two years from the date of your injury to file a lawsuit. This was reduced from four years. Missing this deadline almost always results in your case being permanently dismissed. Some narrow exceptions exist for minors and cases involving government entities, but you should consult an attorney immediately rather than relying on an exception.",
      },
      {
        q: "What is the \u2018serious injury threshold\u2019 in Florida?",
        a: "Florida Statute \u00a7\u202f627.737 defines four categories: (1) significant and permanent loss of an important bodily function; (2) permanent injury other than scarring; (3) significant and permanent scarring or disfigurement; and (4) death. If your injuries from a car accident do not meet one of these categories, you are generally limited to PIP benefits and cannot sue the at-fault driver for pain and suffering.",
      },
      {
        q: "Can I recover damages if I was partly at fault for my injury in Florida?",
        a: "Yes, but only if you were 50\u202f% or less at fault. Under the modified comparative fault rule (\u00a7\u202f768.81), your damages are reduced by your percentage of fault. If you are found more than 50\u202f% responsible, you recover nothing. Insurance companies will aggressively argue shared fault to reduce or eliminate your claim.",
      },
      {
        q: "What types of personal injury cases are most common in Florida?",
        a: "The most common include car accidents, slip-and-fall/premises liability, boating accidents, dog bites, nursing home abuse, construction injuries, and theme park injuries. Florida\u2019s tourism industry, outdoor lifestyle, aging population, and year-round warm climate all contribute to higher-than-average injury rates.",
      },
      {
        q: "Are punitive damages available in Florida personal injury cases?",
        a: "Yes, but they are tightly restricted. Under Florida Statute \u00a7\u202f768.72, you must obtain court permission before adding a punitive damages claim. Punitive damages require proof of intentional misconduct or gross negligence and are generally capped at three times compensatory damages or $500,000, whichever is greater.",
      },
    ],
    outboundLinks: [
      {
        label:
          "Florida Statute \u00a7\u202f627.737 \u2014 Serious Injury Threshold",
        url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.737.html",
      },
      {
        label:
          "Florida Statute \u00a7\u202f768.72 \u2014 Punitive Damages",
        url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.72.html",
      },
    ],
    guides: [
      {
        slug: "serious-injury-florida-no-fault",
        title:
          "What Counts as a \u2018Serious Injury\u2019 Under Florida\u2019s No-Fault Laws?",
      },
      {
        slug: "tourist-injuries-jacksonville",
        title:
          "Injured as a Tourist in Jacksonville? What Non-Residents Need to Know",
      },
      {
        slug: "medical-bills-after-florida-car-accident",
        title: "Dealing with Medical Bills After a Florida Car Accident",
      },
      {
        slug: "florida-no-fault-minor-accidents",
        title:
          "How Florida\u2019s No-Fault Insurance Works in Minor Accidents",
      },
    ],
  },

  /* ═══════════════ TRUCK ACCIDENT ═══════════════ */
  "truck-accident": {
    heroSubtitle:
      "Florida\u2019s busiest freight corridors \u2014 I-95, I-75, I-10, and I-4 \u2014 see thousands of commercial truck crashes every year. Our attorneys handle FMCSA violations, multi-party claims, and catastrophic injuries.",
    intro:
      "Florida\u2019s major interstates are among the busiest commercial freight corridors in the southeastern US \u2014 and the state ranks in the top five for fatal large-truck accidents.",
    overview: `Florida is a critical link in the national supply chain. The state\u2019s deepwater ports in Miami, Jacksonville, Tampa, and Port Everglades handle billions of dollars in cargo annually, and nearly every container that arrives by sea eventually leaves on a truck. Interstate 95, which runs the length of Florida\u2019s east coast, is one of the most heavily trafficked commercial corridors in the nation. Interstate 75 connects Florida\u2019s west coast to the Midwest, while Interstate 10 links Jacksonville to the rest of the Gulf Coast. Interstate 4, which connects Tampa to Daytona Beach through Orlando, is consistently rated among the deadliest highways in America \u2014 and commercial trucks are involved in a disproportionate share of its fatal crashes. When a fully loaded tractor-trailer weighing up to 80,000 pounds collides with a passenger vehicle, the results are almost always catastrophic. Truck accident claims in Florida involve a unique combination of state negligence law, federal FMCSA regulations, and complex multi-party liability \u2014 the trucking company, the driver, the cargo loader, the vehicle manufacturer, and third-party maintenance providers may all bear responsibility. Building a successful claim requires immediate evidence preservation, expert accident reconstruction, and an attorney who understands both the regulatory framework and the defense strategies that trucking companies deploy.`,
    sections: [
      {
        heading:
          "Federal FMCSA Regulations and Florida State Law",
        content: `Commercial truck accidents in Florida are governed by a dual regulatory framework: the Federal Motor Carrier Safety Administration (FMCSA) regulations and Florida state law. FMCSA rules \u2014 codified in 49 CFR Parts 350\u2013399 \u2014 set mandatory standards for hours of service (limiting drivers to 11 hours of driving within a 14-hour window after 10 consecutive hours off duty), driver qualification (CDL requirements, medical certification, drug and alcohol testing), vehicle maintenance and inspection (annual inspections, pre-trip and post-trip inspection requirements), and cargo securement. Florida\u2019s Department of Transportation enforces these federal regulations alongside state-specific requirements under Florida Statutes Chapter 316. When a trucking company or driver violates FMCSA regulations \u2014 falsifying logbooks, exceeding hours-of-service limits, skipping required inspections, or allowing an improperly maintained vehicle on the road \u2014 that violation can serve as powerful evidence of negligence in a personal injury lawsuit. Florida law also allows claims based on negligent hiring, training, and supervision: if a carrier hired a driver with a known history of violations or failed to properly train them, the carrier can be held directly liable for the resulting injuries. An attorney experienced in Florida truck accident litigation will know how to obtain and interpret FMCSA records, electronic logging device (ELD) data, driver qualification files, and inspection reports to build a comprehensive liability case.`,
      },
      {
        heading:
          "Common Causes of Truck Accidents in Florida",
        content: `Truck accidents on Florida\u2019s highways result from a combination of human error, mechanical failure, and environmental conditions. Driver fatigue is one of the most common causes \u2014 despite hours-of-service regulations, pressure from carriers to deliver loads on tight schedules pushes many drivers to drive beyond their legal limits or to falsify their electronic logs. Speeding is another frequent factor, particularly on long, straight stretches of I-95 and I-75 where the monotony of the road can lead to reduced vigilance. Improper cargo loading \u2014 overweight loads, unbalanced weight distribution, and insufficiently secured freight \u2014 can cause a truck to roll over, jackknife, or shed cargo onto the roadway. Mechanical failures including tire blowouts, brake failures, and steering malfunctions are often traceable to deferred maintenance or inadequate pre-trip inspections. Florida\u2019s weather presents additional hazards: sudden thunderstorms create hydroplaning risks, fog reduces visibility on rural highways, and the state\u2019s flat terrain offers no natural barriers to crosswinds that can destabilize high-profile trailers. Distracted driving \u2014 including cell phone use, eating, and GPS programming \u2014 is increasingly cited in truck accident investigations as well.`,
      },
      {
        heading:
          "Multiple Liable Parties in Florida Truck Accident Claims",
        content: `Unlike a typical car accident where liability usually rests with one or two drivers, truck accident claims in Florida often involve multiple potentially liable parties. The truck driver may be directly at fault for speeding, fatigue, distraction, or impairment. The motor carrier (trucking company) can be liable under the doctrine of respondeat superior for its employee-driver\u2019s negligence, and independently liable for negligent hiring, training, supervision, or maintenance. Freight brokers who arranged the shipment may bear liability if they selected an unqualified carrier or imposed unrealistic delivery schedules. The cargo loading company is liable when improper loading contributed to the crash. Vehicle and parts manufacturers face product liability claims when a defective component \u2014 such as a faulty brake system, tire, or coupling device \u2014 caused or contributed to the accident. Third-party maintenance companies may be liable for negligent repairs or inspections. Each of these parties typically carries separate insurance policies, and the total available coverage in a truck accident case can be substantially higher than in a passenger-vehicle case. Federal regulations require interstate commercial trucks to carry a minimum of $750,000 in liability insurance, and many carriers maintain policies of $1 million to $5 million or more. Identifying and pursuing every liable party is critical to maximizing your recovery.`,
      },
      {
        heading:
          "Catastrophic Injuries in Florida Truck Accidents",
        content: `The sheer size and weight disparity between commercial trucks and passenger vehicles means that truck accidents are far more likely to result in catastrophic or fatal injuries. Traumatic brain injuries (TBI) are among the most devastating outcomes, often causing permanent cognitive impairment, personality changes, and inability to work. Spinal cord injuries can result in partial or complete paralysis, requiring lifetime medical care, assistive devices, and home modifications. Multiple bone fractures, internal organ damage, severe burns, and crush injuries are common when a passenger vehicle is struck by or trapped beneath a commercial truck. Amputation \u2014 either traumatic or surgical \u2014 occurs at a significantly higher rate in truck accidents than in car-on-car collisions. Wrongful death is tragically common: according to the National Highway Traffic Safety Administration, occupants of passenger vehicles account for the vast majority of fatalities in large-truck crashes. The long-term costs associated with catastrophic truck accident injuries are staggering \u2014 lifetime medical care for a spinal cord injury can exceed $2 million, and a severe TBI may require $3 million or more in ongoing treatment and support. Florida truck accident attorneys work with life care planners, economists, and medical experts to accurately project these future costs and ensure that any settlement or verdict accounts for the full scope of your losses.`,
      },
    ],
    statLimitations: {
      heading:
        "Florida Truck Accident Statute of Limitations \u2014 Negligence Claims",
      content: `The statute of limitations for a Florida truck accident claim depends on the legal theory underlying the claim. General negligence claims are subject to a two-year limitation period under Florida Statute \u00a7\u202f95.11(3)(a), as amended by HB 837. However, if the claim is based on property damage or a theory of negligence that is not classified as a personal injury action, the four-year limitation period under \u00a7\u202f95.11(3)(k) may apply. Wrongful death claims must be filed within two years of the date of death under \u00a7\u202f95.11(4)(d). Claims against government entities (such as a state or county truck) involve additional notice requirements under the Florida Sovereign Immunity Act. Product liability claims against truck or parts manufacturers may be subject to different limitation periods depending on the theory (negligence vs. strict liability). Given the complexity of these overlapping deadlines, consulting an attorney immediately after a truck accident is critical. Trucking companies begin their own investigation within hours of a crash \u2014 dispatching their own investigators, securing vehicle data, and interviewing witnesses \u2014 and any delay on your part gives them an advantage in building their defense.`,
    },
    whyUnique: {
      heading:
        "Why Florida Is a High-Risk State for Truck Accidents",
      content: `Florida\u2019s position as a major freight hub, combined with its geography and demographics, creates elevated truck accident risk. The state\u2019s ports \u2014 particularly PortMiami (the largest container port in Florida) and JAXPORT in Jacksonville \u2014 generate enormous volumes of truck traffic on the surrounding highway network. Florida\u2019s flat terrain and long, straight highway stretches encourage higher speeds and can lead to driver inattention. The state\u2019s unpredictable weather, including sudden summer thunderstorms and morning fog, creates hazardous driving conditions that are amplified by the stopping distances and weight of commercial vehicles. Florida\u2019s growing population drives continuous construction activity, putting construction vehicles, detours, and lane closures in the path of fast-moving commercial trucks. The year-round tourist season fills Florida\u2019s highways with unfamiliar drivers whose unpredictable behavior creates additional collision risk for truck operators. Interstate 4 through Central Florida has been called the most dangerous highway in America, and truck traffic is a major component of its crash statistics. All of these factors combine to make Florida one of the highest-risk states in the nation for commercial truck accidents.`,
    },
    statistics: {
      heading: "Florida Truck Accident Statistics",
      content: `Florida consistently ranks among the top five states for fatal large-truck crashes. According to data from the Federal Motor Carrier Safety Administration, Florida recorded more than 300 fatal crashes and over 6,000 injury crashes involving large trucks in a recent reporting year. The National Highway Traffic Safety Administration reports that large trucks account for roughly 9\u202f% of all vehicles involved in fatal crashes nationally, and Florida\u2019s share exceeds the national average due to its freight volume. Interstate 95 through South Florida, Interstate 75 from Naples to the Georgia border, and Interstate 4 through Central Florida are the corridors with the highest concentration of truck-involved crashes. The majority of fatal truck crashes in Florida involve a single-unit truck or tractor-trailer striking a passenger vehicle, and occupants of the smaller vehicle account for approximately 70\u202f% of the fatalities. Rear-end collisions and angle crashes are the most common truck accident configurations. The FMCSA\u2019s Large Truck and Bus Crash Facts report estimates that the average cost of a fatal truck crash exceeds $7 million when accounting for medical expenses, lost productivity, and quality-of-life losses. Florida\u2019s continued population growth and expanding freight infrastructure suggest that truck traffic \u2014 and the associated accident risk \u2014 will continue to increase in the coming years.`,
    },
    faq: [
      {
        q: "Who can I sue after a truck accident in Florida?",
        a: "Truck accidents often involve multiple liable parties: the truck driver, the trucking company (motor carrier), the freight broker, the cargo loading company, the truck or parts manufacturer, and third-party maintenance providers. Each may carry separate insurance. An experienced attorney will investigate all potential defendants to maximize your recovery.",
      },
      {
        q: "How is a truck accident claim different from a regular car accident claim in Florida?",
        a: "Truck accident claims involve federal FMCSA regulations in addition to Florida state law, multiple potentially liable parties with separate insurance policies, higher available coverage ($750K\u2013$5M+), and more complex evidence including electronic logging device data, driver qualification files, and inspection records. The injuries are also typically more severe, requiring expert analysis of future medical costs.",
      },
      {
        q: "What is the statute of limitations for a truck accident lawsuit in Florida?",
        a: "Personal injury claims must be filed within two years of the accident under Florida\u2019s 2023 tort reform. Wrongful death claims also carry a two-year deadline from the date of death. Property damage claims have a four-year limitation period. Claims against government vehicles involve additional notice requirements. Because evidence can be lost quickly, consult an attorney immediately.",
      },
      {
        q: "How much insurance do commercial trucks carry in Florida?",
        a: "Federal FMCSA regulations require interstate commercial trucks to carry a minimum of $750,000 in liability insurance. Trucks carrying hazardous materials must carry $1 million to $5 million depending on the cargo. Many large carriers maintain policies well above the federal minimum. These higher policy limits mean that truck accident claims can result in significantly larger recoveries than car accident claims.",
      },
      {
        q: "What evidence is important in a Florida truck accident case?",
        a: "Critical evidence includes the truck\u2019s electronic logging device (ELD) data, the driver\u2019s qualification file and employment records, vehicle inspection and maintenance records, the truck\u2019s event data recorder (\u201cblack box\u201d), dashcam and security camera footage, police reports, witness statements, and the cargo loading documentation. Trucking companies may destroy or overwrite some of this evidence quickly, so sending a legal preservation letter is essential.",
      },
    ],
    outboundLinks: [
      {
        label: "Federal Motor Carrier Safety Administration (FMCSA)",
        url: "https://www.fmcsa.dot.gov/",
      },
      {
        label:
          "Florida Statute \u00a7\u202f768.81 \u2014 Comparative Fault",
        url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html",
      },
      {
        label: "FMCSA Large Truck and Bus Crash Facts",
        url: "https://www.fmcsa.dot.gov/safety/data-and-statistics/large-truck-and-bus-crash-facts",
      },
    ],
    guides: [
      {
        slug: "jacksonville-dangerous-roads",
        title:
          "Jacksonville\u2019s Most Dangerous Roads for Motorists",
      },
      {
        slug: "medical-bills-after-florida-car-accident",
        title: "Dealing with Medical Bills After a Florida Car Accident",
      },
      {
        slug: "serious-injury-florida-no-fault",
        title:
          "What Counts as a \u2018Serious Injury\u2019 Under Florida\u2019s No-Fault Laws?",
      },
    ],
  },

  /* ═══════════════ WORKERS COMPENSATION ═══════════════ */
  "workers-compensation": {
    heroSubtitle:
      "Florida\u2019s workers\u2019 comp system under Chapter 440 is known for strict procedural rules and employer-friendly limitations. Don\u2019t navigate it alone \u2014 get a free case review from experienced attorneys.",
    intro:
      "Florida\u2019s workers\u2019 comp system is governed by Chapter 440 and is known for being employer- and insurer-friendly \u2014 understanding your rights is essential.",
    overview: `If you have been injured on the job in Florida, you are entering one of the most complex and procedurally demanding workers\u2019 compensation systems in the country. Florida\u2019s workers\u2019 comp framework, governed by Chapter 440 of the Florida Statutes, is widely regarded as employer- and insurer-friendly, with strict reporting deadlines, benefit formulas that often fall short of an injured worker\u2019s actual losses, and a dispute-resolution process that can be difficult to navigate without legal representation. Unlike a personal injury lawsuit, workers\u2019 compensation in Florida is a no-fault system: you do not need to prove your employer was negligent to receive benefits, but in exchange you generally cannot sue your employer for pain and suffering or punitive damages. The trade-off sounds straightforward, but in practice the system is filled with traps for the unwary. You have just 30 days to report your injury to your employer or risk losing your benefits entirely. The insurer controls which doctors you see. The benefits you receive for lost wages are capped at a percentage of your average weekly wage and limited in duration. Maximum Medical Improvement (MMI) determinations and Impairment Ratings can dramatically reduce your long-term compensation. And if your claim is denied \u2014 which happens frequently \u2014 you must navigate the Petition for Benefits process before a Judge of Compensation Claims (JCC). An experienced Florida workers\u2019 comp attorney can protect your rights at every stage of this process.`,
    sections: [
      {
        heading:
          "Florida Workers\u2019 Comp Benefits Under Chapter 440",
        content: `Florida workers\u2019 compensation provides several categories of benefits to injured employees. Medical benefits cover all reasonable and necessary medical treatment related to your workplace injury, including doctor visits, surgery, hospitalization, prescription medications, physical therapy, and assistive devices. The employer/insurer directs your medical care by selecting the authorized treating physician, though you have limited rights to request a one-time change of physician. Temporary Total Disability (TTD) benefits are paid when your injury prevents you from working at all during your recovery period. TTD is calculated at 66\u2154\u202f% of your average weekly wage, subject to a statutory maximum that is adjusted annually (based on the statewide average weekly wage). TTD benefits are limited to 104 weeks. Temporary Partial Disability (TPD) benefits are available when you can return to work in a limited capacity but earn less than 80\u202f% of your pre-injury wages. TPD is calculated at 80\u202f% of the difference between 80\u202f% of your pre-injury average weekly wage and your post-injury earnings. Impairment benefits become payable after you reach Maximum Medical Improvement (MMI) and receive a Permanent Impairment Rating (PIR). These benefits are calculated using the AMA Guides to the Evaluation of Permanent Impairment and are paid at 75\u202f% of your TTD rate, multiplied by the impairment rating percentage, for a specified number of weeks. Death benefits are available to eligible dependents, including funeral expenses (up to $7,500) and ongoing wage-replacement benefits.`,
      },
      {
        heading:
          "Filing Deadlines: The 30-Day Rule and 2-Year Statute of Limitations",
        content: `Florida workers\u2019 comp law imposes strict deadlines that can extinguish your claim if missed. The most critical is the 30-day notice requirement under Florida Statute \u00a7\u202f440.185: you must report your workplace injury to your employer within 30 days of the date of the accident or the date you knew or should have known that the injury was related to your work. Failure to provide timely notice can result in a complete denial of your claim, unless you can demonstrate that your employer had actual knowledge of the injury or that the failure to report did not prejudice the employer. Beyond the 30-day notice, you have a two-year statute of limitations under \u00a7\u202f440.19 to file a claim for workers\u2019 compensation benefits, measured from the date of the accident or the date of last payment of benefits, whichever is later. For occupational diseases (conditions that develop over time due to workplace exposure, such as hearing loss or repetitive strain injuries), the clock starts when you knew or should have known that the condition was work-related. Missing either deadline can permanently bar your claim. Even if your employer\u2019s insurer voluntarily pays some initial benefits, you should not assume your claim is secure \u2014 insurers frequently accept claims initially and then deny or limit benefits later once they have conducted their own investigation.`,
      },
      {
        heading:
          "The Petition for Benefits Process",
        content: `When a workers\u2019 comp claim is denied or benefits are cut off, the formal dispute-resolution process begins with a Petition for Benefits (PFB) filed with the Florida Office of the Judges of Compensation Claims (OJCC). The petition must identify the specific benefits being sought, the date of the accident, and the basis for the claim. After a PFB is filed, a Judge of Compensation Claims (JCC) is assigned to the case. The process proceeds through mediation \u2014 a mandatory step before a formal hearing \u2014 where a neutral mediator attempts to facilitate a resolution between the injured worker and the employer/insurer. If mediation fails, the case proceeds to a final hearing before the JCC, which functions similarly to a trial but without a jury. Both sides present evidence, examine witnesses, and submit legal arguments. The JCC then issues a written order granting or denying benefits. Appeals from JCC orders go to the First District Court of Appeal in Tallahassee. The Petition for Benefits process is technical and adversarial, and the employer\u2019s insurer will be represented by experienced defense attorneys. Injured workers who navigate this process without their own attorney are at a significant disadvantage. Under Florida law, attorney\u2019s fees in workers\u2019 comp cases are paid by the employer/insurer when the claimant prevails, which means hiring an attorney should not cost you anything out of pocket if your claim is successful.`,
      },
      {
        heading:
          "Common Denial Reasons and How to Fight Back",
        content: `Florida workers\u2019 comp claims are denied for a variety of reasons, many of which can be challenged with the right evidence and legal strategy. Pre-existing conditions are one of the most common grounds for denial: the insurer argues that your injury or pain was caused by a condition that existed before the workplace accident, rather than by the accident itself. Florida law, however, recognizes that a workplace accident can aggravate or accelerate a pre-existing condition, and you are entitled to benefits for the aggravation even if the underlying condition predated your employment. Missed deadlines \u2014 failing to report within 30 days or file a claim within two years \u2014 are another frequent basis for denial and are more difficult to overcome. Employer disputes about whether the injury occurred at work or arose out of employment are common, particularly for injuries that develop over time. The insurer may also dispute the nature or extent of your injuries based on the findings of an Independent Medical Examination (IME), which is conducted by a doctor selected and paid by the insurer. IME opinions frequently minimize your injuries and prematurely conclude that you have reached Maximum Medical Improvement (MMI). An experienced Florida workers\u2019 comp attorney can obtain counter-opinions from your treating physicians, challenge IME findings, and present medical evidence that accurately reflects the severity and work-relatedness of your condition.`,
      },
      {
        heading:
          "Independent Medical Examinations and Maximum Medical Improvement",
        content: `Two concepts that profoundly affect Florida workers\u2019 comp claims are Independent Medical Examinations (IMEs) and Maximum Medical Improvement (MMI). An IME is an examination conducted by a physician selected and paid by the employer\u2019s insurance carrier. Despite the name, IMEs are not truly \u201cindependent\u201d \u2014 the examining doctor has a financial relationship with the insurer and frequently issues opinions that minimize the injured worker\u2019s condition. IME doctors may conclude that your injuries are less severe than your treating physician believes, that your condition is primarily attributable to pre-existing factors, or that you have already reached MMI. Maximum Medical Improvement is the point at which your treating physician determines that your condition has stabilized and is unlikely to improve further with medical treatment. Once you reach MMI, your Temporary Total Disability (TTD) or Temporary Partial Disability (TPD) benefits stop, and you transition to Permanent Impairment Benefits based on your impairment rating. Because the MMI determination directly controls when your wage-replacement benefits end, insurers have a strong incentive to push for an early MMI date. Your impairment rating \u2014 expressed as a percentage based on the AMA Guides \u2014 determines the amount and duration of your permanent benefits, and even a small change in the rating can mean thousands of dollars in additional or lost compensation.`,
      },
    ],
    statLimitations: {
      heading:
        "Florida Workers\u2019 Comp Filing Deadlines",
      content: `Florida imposes two critical deadlines on injured workers. First, you must provide written or verbal notice of your injury to your employer within 30 days under \u00a7\u202f440.185. This notice should include the date, time, place, and nature of the injury, as well as the name and address of the employee. Second, you must file a formal claim for benefits within two years of the date of the accident or the date of last payment of compensation, whichever is later, under \u00a7\u202f440.19. For occupational diseases, the two-year period begins when you knew or should have known that the condition was work-related. Special rules apply to first responders (police, firefighters, EMTs) who develop certain conditions such as PTSD, heart disease, or certain cancers that are presumed to be work-related under Florida law. Missing either the 30-day notice period or the two-year filing deadline can result in permanent loss of your right to benefits, so prompt action is essential.`,
    },
    whyUnique: {
      heading:
        "Why Florida Workers Face Elevated Injury Risks",
      content: `Florida\u2019s economy relies heavily on industries with above-average injury rates. Construction is one of the largest sectors in the state, driven by continuous residential and commercial development across South Florida, Central Florida, and the Tampa Bay corridor. Construction workers face hazards including falls from height, electrocution, struck-by incidents, and caught-in/between hazards \u2014 the \u201cFatal Four\u201d that account for the majority of construction fatalities nationwide. Florida\u2019s agriculture industry, including citrus farming, nurseries, and crop harvesting, exposes workers to heat-related illness, pesticide exposure, heavy machinery injuries, and repetitive-motion disorders. The hospitality and tourism sector \u2014 hotels, restaurants, theme parks, and cruise lines \u2014 employs hundreds of thousands of workers who face slip-and-fall hazards, burns, repetitive stress injuries, and lifting injuries. Healthcare workers in Florida\u2019s many hospitals, nursing homes, and assisted living facilities experience high rates of back injuries, needlestick injuries, and workplace violence. Florida\u2019s extreme heat and humidity add another layer of risk across all outdoor industries, with heat stroke and heat exhaustion representing serious and sometimes fatal workplace hazards.`,
    },
    statistics: {
      heading: "Florida Workers\u2019 Compensation Statistics",
      content: `Florida\u2019s workers\u2019 compensation system processes tens of thousands of claims each year. According to the Florida Division of Workers\u2019 Compensation, the state receives approximately 60,000\u201370,000 new lost-time injury claims annually. The Bureau of Labor Statistics reports that Florida\u2019s private-industry employers experience a nonfatal occupational injury and illness rate that tracks near the national average, but certain sectors \u2014 construction, agriculture, and healthcare \u2014 significantly exceed it. Falls, slips, and trips are the leading cause of nonfatal workplace injuries in Florida, followed by overexertion and bodily reaction (lifting, pushing, pulling). Contact with objects and equipment, transportation incidents, and exposure to harmful substances round out the top categories. The construction industry alone accounts for a disproportionate share of both fatal and nonfatal workplace injuries in the state. According to OSHA, Florida recorded over 300 workplace fatalities in a recent reporting year, with construction and transportation leading all industries. The average cost of a lost-time workers\u2019 comp claim in Florida exceeds $40,000 when accounting for medical expenses and wage-replacement benefits. Denied claims represent a significant portion of all filings, underscoring the importance of experienced legal representation in navigating the system.`,
    },
    faq: [
      {
        q: "How long do I have to report a workplace injury to my employer in Florida?",
        a: "You must report your injury to your employer within 30 days under Florida Statute \u00a7\u202f440.185. The notice should include the date, time, place, and nature of the injury. Failure to report within 30 days can result in denial of your claim unless you can show your employer had actual knowledge of the injury.",
      },
      {
        q: "Can I choose my own doctor for a Florida workers\u2019 comp claim?",
        a: "Generally, no. In Florida, the employer/insurer controls your medical care by selecting the authorized treating physician. However, you have the right to request a one-time change of physician under \u00a7\u202f440.13(2)(f). If the insurer denies authorized treatment that your doctor recommends, you can challenge that denial through the Petition for Benefits process.",
      },
      {
        q: "What benefits am I entitled to under Florida workers\u2019 comp?",
        a: "Florida workers\u2019 comp provides medical treatment for your work injury, Temporary Total Disability (TTD) at 66\u2154\u202f% of your average weekly wage (up to 104 weeks), Temporary Partial Disability (TPD), Permanent Impairment Benefits based on your impairment rating, and death benefits for eligible dependents. The insurer also covers mileage for medical appointments and may pay for vocational rehabilitation.",
      },
      {
        q: "What happens if my Florida workers\u2019 comp claim is denied?",
        a: "If your claim is denied, you can file a Petition for Benefits (PFB) with the Office of the Judges of Compensation Claims. The case will proceed through mandatory mediation and, if unresolved, to a formal hearing before a Judge of Compensation Claims (JCC). Under Florida law, the employer/insurer pays your attorney\u2019s fees if you prevail, so representation should not cost you out of pocket.",
      },
      {
        q: "Can I sue my employer for a workplace injury in Florida instead of filing a workers\u2019 comp claim?",
        a: "In most cases, no. Workers\u2019 compensation is the exclusive remedy against your employer under Florida law, meaning you cannot sue your employer for negligence. However, you may have a separate personal injury claim against a third party \u2014 such as a subcontractor, property owner, equipment manufacturer, or other non-employer party \u2014 whose negligence contributed to your injury.",
      },
    ],
    outboundLinks: [
      {
        label: "Florida Division of Workers\u2019 Compensation",
        url: "https://www.myfloridacfo.com/division/wc/",
      },
      {
        label:
          "Florida Statute Chapter 440 \u2014 Workers\u2019 Compensation",
        url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0440/0440.html",
      },
      {
        label: "OSHA \u2014 Occupational Safety and Health Administration",
        url: "https://www.osha.gov/",
      },
    ],
    guides: [
      {
        slug: "workers-comp-claim-denied-florida",
        title:
          "Workers\u2019 Comp Claim Denied in Florida? Here\u2019s What to Do Next",
      },
      {
        slug: "medical-bills-after-florida-car-accident",
        title: "Dealing with Medical Bills After a Florida Accident",
      },
      {
        slug: "serious-injury-florida-no-fault",
        title:
          "What Counts as a \u2018Serious Injury\u2019 Under Florida Law?",
      },
    ],
  },
};

/* ─── Helpers ─── */
const FAQ_HEADINGS: Record<string, string> = {
  "car-accident": "Frequently Asked Questions \u2014 Florida Car Accident Claims",
  "personal-injury":
    "Frequently Asked Questions \u2014 Florida Personal Injury Claims",
  "truck-accident":
    "Frequently Asked Questions \u2014 Florida Truck Accident Claims",
  "workers-compensation":
    "Frequently Asked Questions \u2014 Florida Workers\u2019 Compensation Claims",
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

  const meta = META[practiceArea];
  const heroImage = HERO_IMAGES[practiceArea];

  return {
    title: meta?.title ?? `${area.title} Lawyers in Florida \u2014 Free Case Evaluation`,
    description:
      meta?.description ??
      `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Free consultation, no upfront fees.`,
    openGraph: {
      title: meta?.title ?? `${area.title} Lawyers in Florida`,
      description:
        meta?.description ??
        `Connect with experienced Florida ${area.title.toLowerCase()} attorneys.`,
      url: `https://toplawyerresource.com/${practiceArea}/fl`,
      images: heroImage ? [{ url: heroImage, width: 1200, height: 630 }] : undefined,
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
  const fc = FLORIDA_CONTENT[practiceArea];

  /* ── Structured data ── */
  const legalServiceLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} Attorneys in Florida \u2014 Top Lawyer Resource`,
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

  const faqLd = fc?.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: fc.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  /* Prominent cities */
  const prominentCities = floridaCities.filter(
    (c) => c.citySlug === "jacksonville" || c.citySlug === "miami"
  );
  const otherCities = floridaCities.filter(
    (c) => c.citySlug !== "jacksonville" && c.citySlug !== "miami"
  );

  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      {/* ── Hero ── */}
      <section className="relative min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={`${area.title} attorney in Florida \u2014 free case evaluation`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-gray-900/30" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/${practiceArea}`}
              className="hover:text-white transition-colors"
            >
              {area.title}
            </Link>
            <span>/</span>
            <span className="text-gray-200">Florida</span>
          </nav>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Florida &bull; {area.title}
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            {area.title} Lawyers in Florida
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            {fc?.heroSubtitle ??
              `Connect with experienced Florida ${area.title.toLowerCase()} attorneys. Free consultation, no upfront fees.`}
          </p>
          <Link href="/tools/case-evaluator" className="btn btn-primary">
            Get My Free Case Evaluation
          </Link>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Overview */}
            {fc && (
              <section className="mb-14">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Florida {area.title} Law: What You Need to Know
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {fc.overview}
                </p>

                {/* Main legal sections */}
                <div className="space-y-8 mb-10">
                  {fc.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {section.heading}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Statute of Limitations */}
            {fc && (
              <section className="mb-14 bg-amber-50 border border-amber-200 rounded-2xl p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>&#9201;</span> {fc.statLimitations.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  {fc.statLimitations.content}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {practiceArea === "workers-compensation" ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        <strong>30 days</strong>&nbsp;to report your injury to
                        your employer
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        <strong>2 years</strong>&nbsp;to file a formal workers&apos;
                        comp claim
                      </li>
                    </>
                  ) : practiceArea === "truck-accident" ? (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        <strong>2 years</strong>&nbsp;for personal injury /
                        wrongful death claims
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        <strong>4 years</strong>&nbsp;for property damage claims
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        <strong>2 years</strong>&nbsp;to file a personal injury
                        lawsuit (reduced from 4 years under 2023 tort reform)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        <strong>4 years</strong>&nbsp;for property damage claims
                      </li>
                    </>
                  )}
                </ul>
              </section>
            )}

            {/* Why Florida Is Unique */}
            {fc && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {fc.whyUnique.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {fc.whyUnique.content}
                </p>
              </section>
            )}

            {/* Statistics */}
            {fc && (
              <section className="mb-14 bg-gray-50 border border-gray-200 rounded-2xl p-7">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {fc.statistics.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {fc.statistics.content}
                </p>
              </section>
            )}

            {/* Prominent City Links */}
            {prominentCities.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Top Florida Cities for {area.title} Claims
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {prominentCities.map((city) => (
                    <Link
                      key={city.citySlug}
                      href={`/${practiceArea}/fl/${city.citySlug}`}
                      className="flex items-center gap-4 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-150 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                        <span className="text-blue-600 text-xl">&#128205;</span>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">
                          {city.city}, FL
                        </div>
                        <div className="text-sm text-gray-500">
                          {city.county} &bull; Pop. {city.population}
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          Find {area.title.toLowerCase()}{" "}lawyers &rarr;
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* All Florida Cities Grid */}
            <section className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find a {area.shortTitle} Attorney by City
              </h2>
              <p className="text-gray-500 mb-6">
                Our network of experienced {area.title.toLowerCase()} attorneys
                serves the following Florida cities. Select your city for local
                attorney information, courthouse details, and city-specific legal
                resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {floridaCities.map((city) => (
                  <Link
                    key={city.citySlug}
                    href={`/${practiceArea}/fl/${city.citySlug}`}
                    className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-150 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <span className="text-blue-600 text-lg">&#128205;</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {city.city}, {city.state}
                      </div>
                      <div className="text-xs text-gray-400">
                        {city.county} &bull; Pop. {city.population}
                      </div>
                    </div>
                    <span className="ml-auto text-gray-300 group-hover:text-blue-400 transition-colors">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            {fc?.faq && fc.faq.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {FAQ_HEADINGS[practiceArea] ?? "Frequently Asked Questions"}
                </h2>
                <div className="space-y-5">
                  {fc.faq.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-5"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.q}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Florida Legal Guides */}
            {fc?.guides && fc.guides.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Florida Legal Guides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {fc.guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-150 group"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm leading-snug">
                        {guide.title}
                      </div>
                      <span className="text-xs text-blue-600 mt-2 inline-block">
                        Read guide &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Outbound Links */}
            {fc?.outboundLinks && fc.outboundLinks.length > 0 && (
              <div className="mb-10 bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm font-semibold text-blue-800 mb-2">
                  Authoritative Florida Resources
                </p>
                <ul className="space-y-1.5">
                  {fc.outboundLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-700 underline hover:text-blue-900"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Case Evaluator CTA */}
            <LeadCaptureBanner
              title={`Injured in Florida? Get a Free ${area.shortTitle} Case Evaluation`}
              subtitle="No obligation. No upfront fees. Confidential consultation."
            />
          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-1 space-y-6">
            <div
              className="rounded-2xl p-7 text-white"
              style={{ backgroundColor: "#1e40af" }}
            >
              <h3 className="font-bold text-xl mb-2 text-white">
                Free Case Evaluation
              </h3>
              <p className="text-blue-200 text-sm mb-5">
                Florida attorneys available. No cost, no obligation.
              </p>
              <Link
                href="/tools/case-evaluator"
                className="btn btn-white w-full justify-center"
              >
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
                    <span className="text-sky-500 text-xs">&#128205;</span>
                    {city.city}, {city.state}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">
                Other Florida Practice Areas
              </h3>
              <div className="space-y-2">
                {VALID_PRACTICE_AREAS.filter((pa) => pa !== practiceArea).map(
                  (pa) => {
                    const paData = practiceAreasData.find(
                      (a) => a.slug === pa
                    );
                    return (
                      <Link
                        key={pa}
                        href={`/${pa}/fl`}
                        className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                      >
                        {paData?.title} in Florida &rarr;
                      </Link>
                    );
                  }
                )}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">
                Florida Legal Resources
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href="https://www.floridabar.org/public/consumer/lawyerreferral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">
                    &rarr;
                  </span>
                  Florida Bar Lawyer Referral
                </a>
                <a
                  href="https://www.flhsmv.gov/safety-programs/motorist-safety-awareness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">
                    &rarr;
                  </span>
                  FL Highway Safety &amp; Motor Vehicles
                </a>
                <a
                  href="https://www.myfloridacfo.com/division/wc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">
                    &rarr;
                  </span>
                  FL Division of Workers&apos; Comp
                </a>
                <a
                  href="http://www.leg.state.fl.us/statutes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <span className="text-blue-500 flex-shrink-0 mt-0.5">
                    &rarr;
                  </span>
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
                  &#9989; Case Evaluator &rarr;
                </Link>
                <Link
                  href="/tools/settlement-calculator"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  &#129518; Settlement Calculator &rarr;
                </Link>
                <Link
                  href="/guides"
                  className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                >
                  &#128218; Legal Guides &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
