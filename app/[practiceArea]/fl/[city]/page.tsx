import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import RelatedGuides from "../../../components/RelatedGuides";
import CityLeadForm from "./CityLeadForm";
import citiesData from "../../../../data/cities.json";
import practiceAreasData from "../../../../data/practiceAreas.json";

const VALID_PRACTICE_AREAS = [
  "personal-injury",
  "car-accident",
  "truck-accident",
  "workers-compensation",
];

const CITY_IMAGES: Record<string, string> = {
  "personal-injury-jacksonville":
    "https://images.pexels.com/photos/30912707/pexels-photo-30912707.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "personal-injury-miami":
    "https://images.pexels.com/photos/30147234/pexels-photo-30147234.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "car-accident-jacksonville":
    "https://images.pexels.com/photos/12533698/pexels-photo-12533698.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "car-accident-miami":
    "https://images.pexels.com/photos/6520074/pexels-photo-6520074.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "truck-accident-jacksonville":
    "https://images.pexels.com/photos/16706765/pexels-photo-16706765.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "truck-accident-miami":
    "https://images.pexels.com/photos/27099095/pexels-photo-27099095.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "workers-compensation-jacksonville":
    "https://images.pexels.com/photos/13538710/pexels-photo-13538710.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "workers-compensation-miami":
    "https://images.pexels.com/photos/4506206/pexels-photo-4506206.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/6519905/pexels-photo-6519905.jpeg?auto=compress&cs=tinysrgb&w=1600";

/* ─── Types ─── */
interface CitySection {
  heading: string;
  content: string;
}
interface CityFAQ {
  q: string;
  a: string;
}
interface OutboundLink {
  label: string;
  url: string;
}
interface CityContent {
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string;
  sections: CitySection[];
  faq: CityFAQ[];
  outboundLinks: OutboundLink[];
  guideSlugs: string[];
  guideHeading: string;
}

/* ═══════════════════════════════════════════════════════════════════════
   JACKSONVILLE — CAR ACCIDENT
   ═══════════════════════════════════════════════════════════════════════ */
const JAX_CAR: CityContent = {
  metaTitle:
    "Jacksonville Car Accident Lawyer \u2014 Free Case Evaluation | Top Lawyer Resource",
  metaDescription:
    "Injured in a Jacksonville car accident? Duval County has among the highest crash rates in Florida. Understand your rights under no-fault PIP rules and the 2-year statute of limitations. Free consultation.",
  heroSubtitle:
    "Jacksonville\u2019s sprawling road network, military traffic from Naval Station Mayport, and high-speed corridors like I-95 and Beach Boulevard make it one of Florida\u2019s most dangerous cities for drivers. Get experienced legal help at no cost.",
  overview: `Jacksonville is the largest city by land area in the contiguous United States, and its sprawling, car-dependent layout generates an enormous volume of traffic \u2014 and an enormous number of crashes. Duval County consistently ranks among the top five Florida counties for total traffic crashes, with the Florida Department of Highway Safety and Motor Vehicles (FLHSMV) recording tens of thousands of collisions in the Jacksonville metro area each year. The city\u2019s road network spans more than 1,600 centerline miles, connecting dense urban neighborhoods, suburban sprawl, beach communities, and the rapidly growing areas of St. Johns County to the south. If you have been injured in a car accident anywhere in Duval County, you are navigating Florida\u2019s complex no-fault insurance system, the 2023 tort reform changes, and a two-year statute of limitations that gives you less time than ever to protect your rights. An experienced Jacksonville car accident attorney understands the local courts, Duval County jury tendencies, and the specific road hazards that contribute to crashes across the city.`,
  sections: [
    {
      heading:
        "Jacksonville\u2019s Most Dangerous Roads and Intersections",
      content: `Several Jacksonville corridors account for a disproportionate share of Duval County\u2019s crashes. Interstate 95, which runs through the heart of Jacksonville from the Georgia border to St. Johns County, is one of the most heavily trafficked and accident-prone highways in Florida. The I-95/I-295 interchange on the Westside and the I-95/Butler Boulevard junction in Southside are persistent crash hotspots due to high speeds, merging traffic, and congestion during peak hours. Beach Boulevard (US-90) stretches from downtown Jacksonville to Jacksonville Beach and is one of the deadliest arterial roads in the city \u2014 its six-lane divided design, high speed limits, and heavy commercial traffic create dangerous conditions for pedestrians, cyclists, and motorists alike. Blanding Boulevard on the Westside is another high-crash corridor, particularly between I-10 and Orange Park. Atlantic Boulevard through Arlington and the Beaches sees frequent rear-end and angle collisions due to its density of commercial driveways and signalized intersections. The Fuller Warren Bridge, which carries I-95 across the St. Johns River, is notorious for congestion-related fender-benders and more serious collisions when traffic suddenly slows. For a detailed look at crash data by location, see our guide to Jacksonville\u2019s most dangerous intersections.`,
    },
    {
      heading:
        "Military Traffic and Naval Station Mayport",
      content: `Jacksonville is one of the largest military communities in the United States. Naval Station Mayport, located at the mouth of the St. Johns River in the Mayport area, is the third-largest naval facility on the U.S. East Coast and home to dozens of ships and thousands of active-duty military personnel, civilian employees, and military families. Naval Air Station Jacksonville (NAS Jax) on the Westside adds another major military installation to the city\u2019s traffic picture. The daily commuting patterns of military personnel \u2014 often involving early-morning and late-evening shift changes \u2014 contribute to traffic volumes on routes like Wonderwood Connector, Atlantic Boulevard, Beach Boulevard, and the A1A corridor near the Beaches. Military personnel who are injured in off-base car accidents in Jacksonville are covered by Florida\u2019s civil liability and insurance laws just like civilian residents, although Tricare and other military insurance programs may add complexity to the medical billing and subrogation process. Servicemembers also have additional protections under the Servicemembers Civil Relief Act (SCRA) that can affect litigation timelines.`,
    },
    {
      heading:
        "JIA Airport Area Traffic and Rental Car Accidents",
      content: `Jacksonville International Airport (JIA) is located in the Northside area of Jacksonville, and the surrounding highway network \u2014 including I-95, Airport Road, and Pecan Park Road \u2014 sees heavy traffic volumes that mix commercial trucks, airport shuttles, rental cars, and commuters. Visitors unfamiliar with Jacksonville\u2019s roads are particularly vulnerable to accidents in the airport area, where highway ramps, lane changes, and construction zones can create confusion. Rental car accidents in Jacksonville are governed by Florida\u2019s Dangerous Instrumentality Doctrine and the specific terms of the rental agreement. If you were injured in a crash involving a rental vehicle \u2014 whether as the renter, a passenger, or another motorist \u2014 the insurance coverage analysis can be complex, involving the renter\u2019s personal auto policy, the rental company\u2019s liability coverage, and any supplemental insurance purchased at the counter. An experienced Jacksonville car accident attorney can untangle these overlapping policies and identify every available source of recovery.`,
    },
    {
      heading:
        "Jacksonville Car Accident Statistics",
      content: `According to FLHSMV data, Duval County records approximately 35,000\u201340,000 total traffic crashes annually, including more than 200 fatal crashes and over 20,000 injury crashes. Jacksonville\u2019s crash rate per capita exceeds the statewide average, driven by the city\u2019s car-dependent layout, high speed limits on arterial roads, and the sheer volume of daily vehicle miles traveled. Rear-end collisions are the most common crash type in Duval County, followed by angle collisions at signalized intersections and sideswipe incidents on multilane highways. Pedestrian and bicycle fatalities in Jacksonville have been rising \u2014 the city has been identified by national safety organizations as one of the most dangerous metro areas for pedestrians in the United States. Alcohol- and drug-impaired driving contributes to a significant percentage of fatal crashes in Duval County, with DUI arrests concentrated on weekend nights along Beach Boulevard, San Jose Boulevard, and the downtown entertainment district. Distracted driving \u2014 particularly cell phone use \u2014 is cited as a contributing factor in thousands of Duval County crashes each year.`,
    },
    {
      heading:
        "How Florida\u2019s No-Fault System Applies to Jacksonville Accidents",
      content: `As a no-fault state, Florida requires all registered drivers to carry a minimum of $10,000 in Personal Injury Protection (PIP) coverage. After a Jacksonville car accident, your own PIP policy pays 80% of your reasonable and necessary medical expenses and 60% of your lost wages, up to the $10,000 limit, regardless of who caused the crash. You must seek initial medical treatment within 14 days of the accident or your PIP insurer can deny your claim entirely. The $10,000 PIP limit is often exhausted quickly in any accident involving more than minor injuries \u2014 a single emergency room visit in Jacksonville can easily consume most or all of that coverage. Once PIP is exhausted, or if your injuries meet the serious injury threshold under Florida Statute \u00a7\u202f627.737 (permanent injury, significant scarring, or death), you can step outside the no-fault system and pursue the at-fault driver\u2019s bodily injury liability coverage for full compensation including pain and suffering. Under the modified comparative fault rule (\u00a7\u202f768.81), your recovery is reduced by your percentage of fault \u2014 and if you are more than 50% at fault, you recover nothing. The statute of limitations for car accident personal injury claims in Florida is two years from the date of the accident.`,
    },
  ],
  faq: [
    {
      q: "How do I get a copy of my Jacksonville car accident crash report?",
      a: "If the Jacksonville Sheriff\u2019s Office (JSO) responded to your accident, you can request your crash report through JSO\u2019s records division or online through the Florida Department of Highway Safety and Motor Vehicles (FLHSMV) at flhsmv.gov. Reports are typically available within 10 business days. If Florida Highway Patrol responded, request the report through FLHSMV directly. Your crash report contains critical information including the officer\u2019s fault determination, witness statements, and diagram of the accident scene.",
    },
    {
      q: "Which Jacksonville roads have the most car accidents?",
      a: "The highest-crash corridors in Jacksonville include Interstate 95 (particularly the I-95/I-295 and I-95/Butler Blvd interchanges), Beach Boulevard (US-90) from downtown to the Beaches, Blanding Boulevard on the Westside, Atlantic Boulevard through Arlington, and the Fuller Warren Bridge. These roads combine high speed limits, heavy traffic volumes, and complex intersections that produce a disproportionate share of Duval County\u2019s crashes.",
    },
    {
      q: "How long do I have to file a car accident lawsuit in Jacksonville?",
      a: "Florida\u2019s statute of limitations gives you two years from the date of the accident to file a personal injury lawsuit. This deadline was reduced from four years under the 2023 tort reform (HB 837). Property damage claims have a separate four-year limitation period. Missing the two-year deadline permanently bars your right to compensation, so consulting a Jacksonville car accident attorney promptly is essential.",
    },
    {
      q: "What should I do if I\u2019m in a car accident near Naval Station Mayport?",
      a: "If the accident occurred on a public road near Mayport (not on base), standard Florida traffic and insurance laws apply. Call 911, document the scene, seek medical treatment within 14 days to preserve your PIP benefits, and consult an attorney. Active-duty servicemembers have the same rights as civilians in off-base accidents, though military insurance (Tricare) may add complexity to the medical billing process. The Servicemembers Civil Relief Act may also provide additional protections.",
    },
    {
      q: "Where is the Duval County courthouse for car accident lawsuits?",
      a: "Car accident lawsuits in Jacksonville are filed at the Duval County Courthouse, located at 501 W Adams St, Jacksonville, FL 32202. The courthouse handles all civil cases including personal injury and property damage claims. The Duval County Clerk of Courts (duvalclerk.com) provides online access to case records, filing information, and court schedules.",
    },
  ],
  outboundLinks: [
    {
      label: "Jacksonville Sheriff\u2019s Office (JSO)",
      url: "https://www.jaxsheriff.org",
    },
    {
      label: "Duval County Clerk of Courts",
      url: "https://www.duvalclerk.com",
    },
    {
      label: "FLHSMV \u2014 Florida Crash Reports",
      url: "https://www.flhsmv.gov/traffic-crash-reports/",
    },
  ],
  guideSlugs: [
    "what-to-do-after-car-accident",
    "jacksonville-dangerous-intersections",
    "jacksonville-dangerous-roads",
    "jacksonville-crash-reports",
    "hit-and-run-jacksonville",
    "average-car-accident-settlement-jacksonville",
  ],
  guideHeading: "Jacksonville Car Accident Guides",
};

/* ═══════════════════════════════════════════════════════════════════════
   JACKSONVILLE — PERSONAL INJURY
   ═══════════════════════════════════════════════════════════════════════ */
const JAX_PI: CityContent = {
  metaTitle:
    "Jacksonville Personal Injury Lawyer \u2014 Free Consultation | Top Lawyer Resource",
  metaDescription:
    "Injured in Jacksonville due to someone else\u2019s negligence? Slip and falls, boating accidents, dog bites, and more. 2-year statute of limitations. Free case evaluation from Duval County attorneys.",
  heroSubtitle:
    "Jacksonville\u2019s size, tourism economy, and active outdoor lifestyle create a wide range of personal injury scenarios \u2014 from slip-and-fall incidents at Town Center to boating accidents on the St. Johns River.",
  overview: `Jacksonville\u2019s combination of urban density, suburban sprawl, waterfront recreation, and a large military community produces a personal injury caseload that spans virtually every category of negligence claim. The city\u2019s tourism attractions \u2014 Jacksonville Beach, the St. Johns Town Center shopping district, the Jacksonville Zoo, TIAA Bank Field, and the extensive park system \u2014 bring millions of visitors annually who may be injured on commercial property, in rental vehicles, or during recreational activities. Florida\u2019s 2023 tort reform (HB 837) applies fully to all Jacksonville personal injury claims: you have two years to file suit, and your recovery is barred entirely if you are more than 50% at fault under the modified comparative fault rule. Whether your injury occurred at a Riverside restaurant, a Southside retail store, or on the waterways of Duval County, an experienced Jacksonville personal injury attorney understands the local legal landscape and can protect your rights from the start.`,
  sections: [
    {
      heading: "Common Personal Injury Cases in Jacksonville",
      content: `Jacksonville\u2019s geography and economy generate a diverse range of personal injury claims. Slip-and-fall and premises liability cases are among the most frequent, particularly at hotels, retail stores, restaurants, and the St. Johns Town Center \u2014 one of the largest outdoor shopping centers in the Southeast. Property owners have a duty to maintain reasonably safe conditions, and failure to address wet floors, uneven surfaces, poor lighting, or inadequate security can give rise to liability. Boating accidents are common on the St. Johns River, the Intracoastal Waterway, and the offshore waters of Duval County \u2014 Florida leads the nation in registered recreational vessels and reported boating incidents. Dog bite claims are governed by Florida\u2019s strict liability statute (\u00a7\u202f767.01), which holds owners responsible regardless of the animal\u2019s prior behavior. Construction injuries affect Jacksonville\u2019s large workforce of residential and commercial builders. Medical malpractice claims arise from the city\u2019s extensive healthcare system, including Baptist Health, UF Health Jacksonville, and Mayo Clinic\u2019s Jacksonville campus. Nursing home abuse and neglect claims reflect the city\u2019s growing population of elderly residents in assisted living and long-term care facilities.`,
    },
    {
      heading: "The Serious Injury Threshold in Jacksonville Auto Cases",
      content: `Because Florida is a no-fault auto insurance state, your ability to bring a personal injury lawsuit after a Jacksonville motor vehicle accident depends on whether your injuries meet the serious injury threshold defined in Florida Statute \u00a7\u202f627.737. The statute recognizes four qualifying categories: significant and permanent loss of an important bodily function, permanent injury within a reasonable degree of medical probability, significant and permanent scarring or disfigurement, and death. Insurance companies routinely argue that a claimant\u2019s injuries do not meet this threshold, particularly for soft-tissue injuries like whiplash. Thorough documentation from Jacksonville-area medical providers \u2014 including diagnostic imaging, specialist evaluations, and treatment records showing permanency \u2014 is critical to establishing that your injuries cross this statutory line and unlock your right to full compensation beyond PIP.`,
    },
    {
      heading: "Duval County Courthouse and Local Court System",
      content: `Personal injury lawsuits in Jacksonville are filed in the Fourth Judicial Circuit Court at the Duval County Courthouse, located at 501 W Adams St, Jacksonville, FL 32202. The Duval County court system handles a high volume of civil cases, and local scheduling practices, judge assignments, and discovery timelines differ from other Florida circuits. Duval County juries tend to reflect the city\u2019s diverse demographics \u2014 a mix of military families, urban professionals, suburban residents, and retirees \u2014 which can influence jury attitudes toward personal injury plaintiffs. An attorney who regularly practices in the Fourth Circuit understands these local dynamics and can tailor trial strategy accordingly. The Duval County Clerk of Courts provides online access to case filings, hearing schedules, and court records.`,
    },
    {
      heading: "Jacksonville Personal Injury Statistics",
      content: `Duval County\u2019s personal injury claim volume reflects its status as the most populous city in Florida. Beyond traffic crashes (which generate tens of thousands of injury claims annually), the city sees substantial numbers of premises liability claims driven by its large retail, hospitality, and entertainment sectors. The St. Johns River and Intracoastal Waterway contribute boating accident injuries that are among the highest in the state. Workplace injuries in Jacksonville\u2019s construction, port, logistics, and healthcare industries generate both workers\u2019 compensation claims and third-party personal injury suits when someone other than the employer is at fault. The city\u2019s active outdoor culture \u2014 cycling, running, water sports, and beach recreation \u2014 produces additional injury scenarios that range from bicycle-vehicle collisions to swimming pool accidents. All of these claims are subject to the two-year statute of limitations and modified comparative fault rules imposed by Florida\u2019s 2023 tort reform.`,
    },
  ],
  faq: [
    {
      q: "How long do I have to file a personal injury lawsuit in Jacksonville?",
      a: "Under Florida\u2019s 2023 tort reform, you have two years from the date of your injury to file a lawsuit. This was reduced from four years. Missing the deadline permanently bars your claim. Claims against government entities may have shorter notice periods. Consult a Jacksonville personal injury attorney as soon as possible to preserve your rights.",
    },
    {
      q: "Where are personal injury cases filed in Jacksonville?",
      a: "Personal injury lawsuits in Jacksonville are filed at the Duval County Courthouse, 501 W Adams St, Jacksonville, FL 32202, in the Fourth Judicial Circuit Court. The Duval County Clerk of Courts (duvalclerk.com) provides online access to case records and filing information.",
    },
    {
      q: "Can I sue if I was injured at a Jacksonville business or hotel?",
      a: "Yes. Florida premises liability law requires property owners and businesses to maintain reasonably safe conditions for visitors. If you were injured due to a hazardous condition that the owner knew about or should have discovered through reasonable inspection \u2014 such as a wet floor, broken stairway, inadequate lighting, or deficient security \u2014 you may have a valid premises liability claim. Document the condition with photos and report the incident to the property manager immediately.",
    },
    {
      q: "What if I was partially at fault for my injury in Jacksonville?",
      a: "Under Florida\u2019s modified comparative fault rule (\u00a7\u202f768.81), your damages are reduced by your percentage of fault. If you are found more than 50% responsible for the incident, you recover nothing. Insurance companies aggressively argue shared fault to reduce or eliminate claims, so documenting the other party\u2019s negligence immediately is critical.",
    },
    {
      q: "Are boating accident injuries covered by personal injury law in Jacksonville?",
      a: "Yes. Boating accidents on the St. Johns River, Intracoastal Waterway, and offshore waters are governed by Florida personal injury law (and in some cases federal maritime law). Boat operators owe a duty of care to passengers and other vessels. Common causes include operator inattention, excessive speed, alcohol use, and failure to follow navigation rules. The Florida Fish and Wildlife Conservation Commission investigates boating accidents in Duval County.",
    },
  ],
  outboundLinks: [
    {
      label: "Duval County Clerk of Courts",
      url: "https://www.duvalclerk.com",
    },
    {
      label: "Jacksonville Sheriff\u2019s Office",
      url: "https://www.jaxsheriff.org",
    },
  ],
  guideSlugs: [
    "how-to-choose-personal-injury-lawyer",
    "types-of-compensation-personal-injury",
    "tourist-injuries-jacksonville",
    "serious-injury-florida-no-fault",
    "medical-bills-after-florida-car-accident",
  ],
  guideHeading: "Jacksonville Personal Injury Guides",
};

/* ═══════════════════════════════════════════════════════════════════════
   JACKSONVILLE — TRUCK ACCIDENT
   ═══════════════════════════════════════════════════════════════════════ */
const JAX_TRUCK: CityContent = {
  metaTitle:
    "Jacksonville Truck Accident Lawyer \u2014 Free Consultation | Top Lawyer Resource",
  metaDescription:
    "JAXPORT makes Jacksonville a major freight hub. Truck accidents on I-95, I-10, and I-295 cause catastrophic injuries. Free case review from experienced trucking litigation attorneys.",
  heroSubtitle:
    "JAXPORT is one of the busiest ports on the East Coast, and the truck traffic it generates on I-95, I-10, and I-295 makes Jacksonville one of Florida\u2019s highest-risk corridors for commercial vehicle crashes.",
  overview: `Jacksonville is a major logistics and freight hub, and commercial truck traffic is woven into the fabric of daily life. JAXPORT \u2014 the Jacksonville Port Authority \u2014 is one of the busiest container ports on the U.S. East Coast, handling millions of tons of cargo annually. Nearly every container that arrives by sea leaves on a truck, and the city\u2019s highway network bears the weight. Interstate 95, which runs north\u2013south through Jacksonville, is one of the most heavily trucked corridors in the nation. Interstate 10, which connects Jacksonville to the rest of the Gulf Coast and beyond, carries continuous streams of long-haul tractor-trailers. The I-295 beltway distributes freight traffic around the metro area, while local roads like Heckscher Drive, Zoo Parkway, and the port access roads see dense concentrations of heavy commercial vehicles. When a fully loaded truck weighing up to 80,000 pounds strikes a passenger vehicle, the injuries are almost always catastrophic. Jacksonville truck accident claims involve complex interactions between federal FMCSA regulations, Florida state law, and the multi-party liability that characterizes commercial trucking litigation.`,
  sections: [
    {
      heading: "Jacksonville\u2019s Freight Corridors and Truck Crash Hotspots",
      content: `The highways surrounding JAXPORT and the city\u2019s distribution centers generate the highest concentration of truck-involved crashes in Duval County. The I-95/I-295 interchange on the Northside is a persistent hotspot where merging freight traffic creates dangerous conditions. The I-10/I-95 interchange downtown \u2014 one of the most complex highway junctions in Northeast Florida \u2014 sees frequent truck-involved incidents. I-295 through the Westside, where numerous logistics and distribution facilities line the corridor, experiences heavy truck volumes throughout the day. Heckscher Drive and Zoo Parkway, which provide direct access to JAXPORT\u2019s marine terminals, carry a dense mix of container trucks, tankers, and flatbed trailers on roads that were not originally designed for such heavy commercial use. The Buckman Bridge (I-295 over the St. Johns River) and the Dames Point Bridge (I-295 East) are additional points where truck traffic congestion leads to rear-end and lane-change collisions. Construction zones on I-95 through downtown Jacksonville \u2014 a long-running infrastructure project \u2014 create additional hazards where sudden lane shifts and reduced speeds increase the risk of truck-involved crashes.`,
    },
    {
      heading: "Federal FMCSA Regulations and Jacksonville Truck Cases",
      content: `Commercial truck accidents in Jacksonville are governed by both Florida state law and federal FMCSA regulations. Hours-of-service rules limit truck drivers to 11 hours of driving within a 14-hour window after 10 consecutive hours off duty \u2014 but the pressure to move freight quickly through JAXPORT and Jacksonville\u2019s distribution network pushes many drivers to exceed these limits or falsify their electronic logging device (ELD) records. Driver qualification standards require CDL holders to pass medical certification, drug and alcohol testing, and background checks \u2014 and trucking companies that hire or retain unqualified drivers face direct liability for negligent hiring, training, and supervision. Vehicle maintenance requirements mandate pre-trip and post-trip inspections, annual certifications, and timely repair of known defects. The Florida Department of Transportation operates weigh stations and inspection sites along I-95 and I-10 near Jacksonville. When a FMCSA violation contributes to a crash, it serves as powerful evidence of negligence. An experienced Jacksonville truck accident attorney will know how to obtain and interpret ELD data, driver qualification files, maintenance records, and the truck\u2019s event data recorder to build a comprehensive liability case.`,
    },
    {
      heading: "Catastrophic Injuries and Multi-Party Liability",
      content: `The size and weight disparity between commercial trucks and passenger vehicles means that Jacksonville truck accidents frequently result in catastrophic injuries: traumatic brain injuries, spinal cord damage, multiple fractures, amputations, severe burns, and wrongful death. Lifetime medical costs for these injuries can exceed millions of dollars. Unlike a typical car accident, truck accident claims often involve multiple defendants: the driver, the motor carrier, the freight broker who arranged the shipment, the cargo loading company, the truck or parts manufacturer, and third-party maintenance providers. Each may carry separate insurance policies \u2014 federal regulations require interstate commercial trucks to carry a minimum of $750,000 in liability insurance, and many carriers maintain $1\u2013$5 million or more. Identifying every liable party and every applicable policy is critical to maximizing recovery in a Jacksonville truck accident case.`,
    },
    {
      heading: "Jacksonville Truck Accident Statistics",
      content: `Duval County records hundreds of large-truck-involved crashes each year, a figure driven by JAXPORT\u2019s freight volume and the city\u2019s position at the intersection of I-95 and I-10. The FMCSA\u2019s crash data shows that Florida ranks in the top five states nationally for fatal large-truck crashes, and the Jacksonville metro area accounts for a significant share of the state\u2019s total. The I-95 corridor through Jacksonville is one of the highest-volume trucking routes on the East Coast, with commercial vehicles representing a substantial percentage of total traffic. Rear-end collisions and lane-change incidents are the most common truck accident configurations on Jacksonville\u2019s interstates, while intersection crashes involving trucks are more common on the arterial roads near port facilities and distribution centers. Fatal truck crashes in Duval County disproportionately involve occupants of the smaller vehicle, underscoring the catastrophic risk these collisions pose to passenger-vehicle occupants.`,
    },
  ],
  faq: [
    {
      q: "Why are there so many truck accidents in Jacksonville?",
      a: "Jacksonville is a major freight hub. JAXPORT is one of the busiest container ports on the East Coast, and the truck traffic it generates flows through I-95, I-10, I-295, and local port access roads. The city\u2019s position at the intersection of two major interstate highways means long-haul trucks pass through Jacksonville continuously. This volume, combined with construction zones and merging traffic, creates elevated crash risk.",
    },
    {
      q: "Who can I sue after a truck accident in Jacksonville?",
      a: "Potentially multiple parties: the truck driver, the trucking company (motor carrier), the freight broker, the cargo loader, the vehicle or parts manufacturer, and third-party maintenance providers. Each may carry separate insurance. Federal regulations require commercial trucks to carry at least $750,000 in liability coverage, and many have much higher limits. An attorney will investigate all liable parties.",
    },
    {
      q: "How long do I have to file a truck accident lawsuit in Jacksonville?",
      a: "Personal injury and wrongful death claims must be filed within two years of the accident or date of death. Property damage claims have a four-year deadline. However, critical evidence \u2014 ELD data, dashcam footage, inspection records \u2014 can be overwritten or destroyed within weeks. Consult a truck accident attorney immediately so they can send a legal preservation letter.",
    },
    {
      q: "What evidence is important after a Jacksonville truck accident?",
      a: "Key evidence includes the truck\u2019s electronic logging device data, event data recorder (\u201cblack box\u201d), driver qualification file, maintenance and inspection records, cargo loading documents, dashcam footage, and the police crash report filed by JSO or FHP. Trucking companies begin their own investigation within hours, so acting quickly to preserve evidence is critical.",
    },
    {
      q: "Where are truck accident lawsuits filed in Jacksonville?",
      a: "Truck accident lawsuits in Duval County are filed at the Duval County Courthouse, 501 W Adams St, Jacksonville, FL 32202. Cases involving interstate carriers may also have federal jurisdiction options. An experienced attorney will determine the best venue for your specific case.",
    },
  ],
  outboundLinks: [
    {
      label: "Federal Motor Carrier Safety Administration (FMCSA)",
      url: "https://www.fmcsa.dot.gov/",
    },
    {
      label: "Duval County Clerk of Courts",
      url: "https://www.duvalclerk.com",
    },
    {
      label: "Jacksonville Sheriff\u2019s Office",
      url: "https://www.jaxsheriff.org",
    },
  ],
  guideSlugs: [
    "what-to-do-after-car-accident",
    "what-is-negligence-personal-injury",
    "jacksonville-dangerous-roads",
    "jacksonville-dangerous-intersections",
  ],
  guideHeading: "Jacksonville Truck Accident Guides",
};

/* ═══════════════════════════════════════════════════════════════════════
   JACKSONVILLE — WORKERS COMPENSATION
   ═══════════════════════════════════════════════════════════════════════ */
const JAX_WC: CityContent = {
  metaTitle:
    "Jacksonville Workers\u2019 Compensation Lawyer \u2014 Free Case Review | Top Lawyer Resource",
  metaDescription:
    "Injured on the job in Jacksonville? Florida\u2019s workers\u2019 comp system has strict 30-day reporting and insurer-controlled medical care. Free consultation with experienced Duval County attorneys.",
  heroSubtitle:
    "Jacksonville\u2019s port, construction, healthcare, and military-support industries employ hundreds of thousands of workers in high-risk occupations. If you were hurt on the job, you need an attorney who understands Florida\u2019s Chapter 440 system.",
  overview: `Jacksonville\u2019s economy is built on industries with above-average workplace injury rates. JAXPORT\u2019s marine terminals and the surrounding logistics corridor employ thousands of dockworkers, forklift operators, truck drivers, and warehouse staff who face daily hazards including heavy equipment, fall risks, and crush injuries. The city\u2019s booming construction sector \u2014 driven by continuous residential and commercial development across Duval, St. Johns, and Nassau counties \u2014 puts thousands of workers at risk of falls from height, electrocution, struck-by incidents, and other construction-site hazards. Jacksonville\u2019s major healthcare systems (Baptist Health, UF Health, Mayo Clinic, Memorial Hospital) employ large workforces who experience back injuries from patient lifting, needlestick injuries, and workplace violence. Military-support contractors, shipyard workers, and defense-industry employees face unique occupational hazards related to heavy industrial work. Florida\u2019s workers\u2019 compensation system under Chapter 440 provides benefits to injured workers regardless of fault, but the system is widely regarded as employer- and insurer-friendly, with strict deadlines, benefit caps, and insurer-controlled medical care that can leave injured workers feeling trapped.`,
  sections: [
    {
      heading: "High-Risk Industries in Jacksonville",
      content: `Construction is one of Jacksonville\u2019s largest and most dangerous employment sectors. The city\u2019s rapid growth has fueled a construction boom that employs tens of thousands of workers on residential subdivisions, commercial developments, road projects, and infrastructure upgrades. Construction workers face the \u201cFatal Four\u201d hazards \u2014 falls, struck-by incidents, electrocution, and caught-in/between accidents \u2014 that account for the majority of construction fatalities nationwide. Port and logistics workers at JAXPORT and the city\u2019s distribution centers face heavy equipment hazards, loading dock falls, and repetitive motion injuries from continuous lifting and sorting. Healthcare workers in Jacksonville\u2019s hospitals and nursing facilities experience high rates of back injuries from patient handling, needlestick injuries, and increasingly, workplace violence from patients and visitors. The hospitality sector \u2014 hotels, restaurants, and event venues \u2014 generates slip-and-fall injuries, burns, and repetitive stress conditions. Jacksonville\u2019s extreme summer heat adds another layer of risk across all outdoor industries, with heat-related illness representing a serious and sometimes fatal workplace hazard.`,
    },
    {
      heading: "Filing a Workers\u2019 Comp Claim in Jacksonville",
      content: `If you are injured on the job in Jacksonville, you must report your injury to your employer within 30 days under Florida Statute \u00a7\u202f440.185. Failure to provide timely notice can result in denial of your claim. Once reported, your employer\u2019s insurer controls your medical care by selecting the authorized treating physician \u2014 you generally cannot see your own doctor without risking your benefits. You have the right to request a one-time change of physician under \u00a7\u202f440.13(2)(f). If your claim is denied, you can file a Petition for Benefits with the Office of the Judges of Compensation Claims (OJCC). Jacksonville falls within the jurisdiction of the First District Court of Appeal for workers\u2019 comp appeals. The formal statute of limitations is two years from the date of accident or last benefit payment, whichever is later. Benefits include medical treatment, Temporary Total Disability (TTD) at 66\u2154% of your average weekly wage (up to 104 weeks), Temporary Partial Disability, Permanent Impairment Benefits, and death benefits for eligible dependents.`,
    },
    {
      heading: "Common Denial Reasons and IME Disputes in Duval County",
      content: `Jacksonville workers\u2019 comp claims are frequently denied or disputed. Pre-existing conditions are one of the most common grounds \u2014 the insurer argues your pain was caused by a prior condition rather than the workplace accident. Florida law recognizes that a work accident can aggravate a pre-existing condition, and you are entitled to benefits for the aggravation. Missed deadlines (failing to report within 30 days or file within two years) are another frequent basis for denial. Independent Medical Examinations (IMEs) conducted by insurer-selected doctors frequently minimize your injuries and push for an early Maximum Medical Improvement (MMI) determination, which cuts off your temporary disability benefits. An experienced Jacksonville workers\u2019 comp attorney can challenge IME opinions, obtain counter-opinions from your treating physicians, and present evidence that accurately reflects the work-relatedness and severity of your condition.`,
    },
    {
      heading: "Jacksonville Workplace Injury Statistics",
      content: `Duval County\u2019s workplace injury rate reflects its concentration of high-risk industries. The Bureau of Labor Statistics reports that Florida\u2019s construction sector experiences injury rates significantly above the statewide private-industry average, and Jacksonville\u2019s construction boom contributes a disproportionate share. Port and logistics operations generate injuries at rates that exceed most other employment sectors. According to OSHA, Florida recorded over 300 workplace fatalities in a recent reporting year, with construction and transportation leading all industries. The Florida Division of Workers\u2019 Compensation processes tens of thousands of new lost-time claims statewide each year, and Duval County\u2019s share reflects its status as the state\u2019s most populous city. Denied claims represent a significant portion of all filings, underscoring the importance of legal representation in navigating Jacksonville\u2019s workers\u2019 comp system.`,
    },
  ],
  faq: [
    {
      q: "How long do I have to report a work injury to my employer in Jacksonville?",
      a: "You must report your injury within 30 days under Florida Statute \u00a7\u202f440.185. The notice should include the date, time, place, and nature of the injury. Missing this deadline can result in complete denial of your workers\u2019 comp claim unless you can show your employer had actual knowledge of the injury.",
    },
    {
      q: "Can I choose my own doctor for a Jacksonville workers\u2019 comp claim?",
      a: "Generally no. Florida\u2019s system gives the employer/insurer the right to select your authorized treating physician. You can request a one-time change of doctor under \u00a7\u202f440.13(2)(f). If the insurer denies treatment your doctor recommends, you can challenge that denial through the Petition for Benefits process.",
    },
    {
      q: "What if my workers\u2019 comp claim is denied in Jacksonville?",
      a: "File a Petition for Benefits (PFB) with the Office of the Judges of Compensation Claims. The case proceeds through mandatory mediation and, if unresolved, a hearing before a Judge of Compensation Claims (JCC). Under Florida law, the employer/insurer pays your attorney\u2019s fees if you prevail, so representation should not cost you out of pocket.",
    },
    {
      q: "Which Jacksonville industries have the highest workplace injury rates?",
      a: "Construction, port/logistics operations (JAXPORT and distribution centers), healthcare (hospitals and nursing facilities), and manufacturing consistently report the highest workplace injury rates in Duval County. Florida\u2019s extreme heat also contributes to heat-related illness across all outdoor industries during the summer months.",
    },
    {
      q: "Can I sue my employer for a workplace injury in Jacksonville?",
      a: "In most cases, workers\u2019 compensation is the exclusive remedy against your employer under Florida law. However, you may have a separate personal injury claim against a third party \u2014 such as a subcontractor, property owner, equipment manufacturer, or other non-employer party \u2014 whose negligence contributed to your injury. These third-party claims can provide additional compensation beyond workers\u2019 comp benefits.",
    },
  ],
  outboundLinks: [
    {
      label: "Florida Division of Workers\u2019 Compensation",
      url: "https://www.myfloridacfo.com/division/wc/",
    },
    {
      label: "OSHA \u2014 Occupational Safety and Health Administration",
      url: "https://www.osha.gov/",
    },
    {
      label: "Duval County Clerk of Courts",
      url: "https://www.duvalclerk.com",
    },
  ],
  guideSlugs: [
    "workers-comp-claim-denied-florida",
    "types-of-compensation-personal-injury",
    "right-to-sue-letter",
  ],
  guideHeading: "Jacksonville Workers\u2019 Comp Guides",
};

/* ═══════════════════════════════════════════════════════════════════════
   MIAMI — CAR ACCIDENT
   ═══════════════════════════════════════════════════════════════════════ */
const MIAMI_CAR: CityContent = {
  metaTitle:
    "Miami Car Accident Lawyer \u2014 Free Case Evaluation | Top Lawyer Resource",
  metaDescription:
    "Car accident in Miami? Miami-Dade leads Florida in crash volume. High uninsured driver rates, tourist traffic, and aggressive driving make experienced legal help essential. Free consultation.",
  heroSubtitle:
    "Miami-Dade County leads Florida in total traffic crashes. Tourist congestion, one of the nation\u2019s highest uninsured driver rates, and aggressive driving on I-95 and the Palmetto Expressway make experienced legal help essential.",
  overview: `Miami-Dade County consistently records more traffic crashes than any other county in Florida \u2014 over 65,000 total collisions annually according to FLHSMV data. The county\u2019s unique combination of dense urban development, massive tourist volume, international drivers unfamiliar with local roads, and one of the highest uninsured motorist rates in the country creates a driving environment unlike anywhere else in the state. Miami\u2019s highway network \u2014 including I-95, the Palmetto Expressway (SR-826), the Dolphin Expressway (SR-836), US-1, and the heavily congested I-195 and MacArthur Causeway corridors connecting Miami Beach \u2014 generates some of the worst traffic congestion in the United States. If you have been injured in a car accident in Miami or anywhere in Miami-Dade County, Florida\u2019s no-fault PIP system, the 14-day treatment rule, and the two-year statute of limitations all apply. Miami\u2019s bilingual legal landscape adds another dimension: many accident victims are more comfortable communicating in Spanish, and working with an attorney who can handle your case in your preferred language is a significant advantage.`,
  sections: [
    {
      heading: "Miami\u2019s Most Dangerous Roads and Expressways",
      content: `Miami-Dade County\u2019s highway system is among the most congested and crash-prone in the nation. Interstate 95 through Miami is consistently ranked as one of America\u2019s deadliest highway corridors, with heavy volumes, aggressive driving, and frequent construction zones combining to produce hundreds of injury crashes each year. The Palmetto Expressway (SR-826), which forms a partial beltway around western Miami-Dade, experiences severe congestion during peak hours and is a frequent site of rear-end chain-reaction collisions. The Dolphin Expressway (SR-836), connecting downtown Miami to western suburbs and Miami International Airport, sees dense traffic volumes that mix commuters, commercial vehicles, and airport-bound travelers. US-1 (South Dixie Highway) through Coral Gables, South Miami, and Homestead carries heavy traffic on a surface arterial with numerous signalized intersections, driveways, and pedestrian crossings. The causeways connecting Miami to Miami Beach \u2014 I-195, the Julia Tuttle Causeway, and the MacArthur Causeway \u2014 are bottleneck points where stop-and-go congestion creates constant rear-end collision risk, particularly during evening hours when beachgoers, tourists, and nightlife traffic converge.`,
    },
    {
      heading: "Tourist Traffic and Seasonal Congestion",
      content: `Miami is one of the most visited cities in the world, attracting more than 26 million overnight visitors annually. This tourism volume translates directly into road congestion and accident risk. Visitors from other states and countries may be unfamiliar with Miami\u2019s aggressive driving culture, complex expressway system, and local traffic patterns. Rental car accidents are extremely common in Miami-Dade County \u2014 Miami International Airport is one of the busiest in the country, and the surrounding highways are filled with rental vehicles driven by tourists navigating unfamiliar routes. The \u201csnowbird\u201d season from November through April brings a seasonal surge of part-time residents \u2014 many of them older drivers \u2014 from the Northeast and Midwest, increasing traffic volumes and changing the demographic mix on Miami-Dade roads. South Beach, Brickell, Wynwood, and the Design District attract dense pedestrian and cyclist traffic that creates additional collision risk for motorists in these areas.`,
    },
    {
      heading: "Miami\u2019s High Uninsured Driver Rate",
      content: `Florida has one of the highest uninsured motorist rates in the United States, and Miami-Dade County is among the worst within the state. Because Florida does not require drivers to carry Bodily Injury (BI) liability insurance \u2014 only $10,000 in PIP and $10,000 in Property Damage Liability \u2014 many Miami drivers carry no coverage that would compensate you for serious injuries. If you are hit by an uninsured or underinsured driver in Miami, your own Uninsured/Underinsured Motorist (UM/UIM) coverage may be your primary source of recovery beyond PIP. Carrying UM/UIM coverage on your own policy is strongly recommended for anyone driving in Miami-Dade County. An experienced Miami car accident attorney can identify all available insurance coverage \u2014 including stacked UM policies, umbrella coverage, and any policies held by vehicle owners as opposed to drivers \u2014 to maximize your recovery.`,
    },
    {
      heading: "Miami-Dade Car Accident Statistics",
      content: `FLHSMV data shows that Miami-Dade County records approximately 65,000\u201370,000 total traffic crashes per year, far more than any other Florida county. The county regularly accounts for roughly 15% of all Florida traffic crashes despite representing about 12% of the state\u2019s population. Fatal crashes in Miami-Dade number in the hundreds annually, with pedestrian fatalities representing a disproportionate share \u2014 the county\u2019s dense urban environment and heavy foot traffic in neighborhoods like Brickell, South Beach, Little Havana, and downtown Miami make pedestrians particularly vulnerable. Alcohol-impaired driving crashes are concentrated on weekend nights in the South Beach entertainment district and along Biscayne Boulevard. Hit-and-run incidents are more common in Miami-Dade than in most Florida counties, a trend attributed in part to the high uninsured driver rate \u2014 drivers without insurance have a strong incentive to flee the scene.`,
    },
    {
      heading: "Bilingual Legal Needs in Miami",
      content: `Miami-Dade County is one of the most linguistically diverse areas in the United States, with more than 70% of residents speaking a language other than English at home \u2014 predominantly Spanish. After a car accident, communicating clearly with your attorney about the details of the crash, your injuries, and your treatment is essential to building a strong case. Working with a bilingual attorney or a firm with Spanish-speaking staff ensures that nothing is lost in translation during critical stages of your claim: the initial investigation, medical records review, insurance negotiations, and \u2014 if necessary \u2014 deposition and trial testimony. Many Miami car accident attorneys serve the community in both English and Spanish.`,
    },
  ],
  faq: [
    {
      q: "Where do I file a car accident lawsuit in Miami?",
      a: "Car accident lawsuits in Miami-Dade County are filed at the Miami-Dade County Courthouse, 73 W Flagler St, Miami, FL 33130. The Eleventh Judicial Circuit handles all civil cases including personal injury and property damage. The Miami-Dade County Clerk of Courts provides online access to case records and filing information.",
    },
    {
      q: "What if the other driver in my Miami accident was uninsured?",
      a: "Florida has one of the highest uninsured driver rates in the country, and Miami-Dade is among the worst. If you are hit by an uninsured driver, your own Uninsured Motorist (UM) coverage is your primary source of recovery beyond PIP. If you do not carry UM coverage, your options are more limited. An attorney can identify all available policies and coverage sources.",
    },
    {
      q: "How does tourist traffic affect car accident claims in Miami?",
      a: "Miami\u2019s 26+ million annual visitors fill the roads with rental cars and drivers unfamiliar with local traffic patterns. Rental car accidents involve complex insurance analysis \u2014 the renter\u2019s personal policy, the rental company\u2019s coverage, and any supplemental insurance purchased at the counter may all apply. An attorney experienced in Miami car accident claims can navigate these overlapping policies.",
    },
    {
      q: "How long do I have to file a car accident lawsuit in Miami?",
      a: "Florida\u2019s statute of limitations gives you two years from the date of the accident to file a personal injury lawsuit. Property damage claims have a four-year deadline. You must also seek medical treatment within 14 days of the accident to preserve your PIP benefits. Missing either deadline can significantly harm your claim.",
    },
    {
      q: "Can I find a Spanish-speaking car accident attorney in Miami?",
      a: "Yes. Miami\u2019s legal community reflects the city\u2019s bilingual population, and many car accident attorneys and their staff are fluent in Spanish. Working with an attorney who speaks your language ensures clear communication throughout the claims process \u2014 from the initial consultation through settlement negotiations or trial.",
    },
  ],
  outboundLinks: [
    {
      label: "Miami-Dade County Courts",
      url: "https://www.miamidade.gov/courts/",
    },
    {
      label: "Miami-Dade Police Department",
      url: "https://www.miamidade.gov/police/",
    },
    {
      label: "FLHSMV \u2014 Florida Crash Reports",
      url: "https://www.flhsmv.gov/traffic-crash-reports/",
    },
  ],
  guideSlugs: [
    "what-to-do-after-car-accident",
    "average-car-accident-settlement-florida",
    "serious-injury-florida-no-fault",
    "florida-no-fault-minor-accidents",
  ],
  guideHeading: "Miami Car Accident Guides",
};

/* ═══════════════════════════════════════════════════════════════════════
   MIAMI — PERSONAL INJURY
   ═══════════════════════════════════════════════════════════════════════ */
const MIAMI_PI: CityContent = {
  metaTitle:
    "Miami Personal Injury Lawyer \u2014 Free Consultation | Top Lawyer Resource",
  metaDescription:
    "Injured in Miami? Slip and falls at hotels, boating accidents, tourist injuries, and more. 2-year statute of limitations under 2023 reform. Free case evaluation from experienced Miami-Dade attorneys.",
  heroSubtitle:
    "Miami\u2019s tourism economy, dense urban environment, and active outdoor lifestyle produce one of the highest personal injury claim volumes in Florida. Get experienced legal help at no cost.",
  overview: `Miami is one of Florida\u2019s most active cities for personal injury litigation. The city\u2019s massive tourism industry \u2014 26+ million visitors annually \u2014 generates a constant stream of premises liability claims at hotels, resorts, restaurants, nightclubs, and shopping centers throughout Miami-Dade County. South Beach, Brickell, Wynwood, and the Design District see dense pedestrian traffic that creates elevated risk of vehicle-pedestrian collisions, trip-and-fall incidents, and other injury scenarios. Miami\u2019s waterfront lifestyle makes boating accidents a significant source of injury claims \u2014 Biscayne Bay, the Intracoastal Waterway, and offshore waters see heavy recreational and commercial vessel traffic year-round. The city\u2019s construction boom, driven by the continuous development of high-rise condominiums and commercial properties, exposes workers and passersby to construction-related hazards. Florida\u2019s 2023 tort reform applies to all Miami personal injury claims: a two-year statute of limitations, modified comparative fault with a 50% bar, and restrictions on medical damages evidence. An experienced Miami personal injury attorney understands the Eleventh Circuit\u2019s local procedures and Miami-Dade jury tendencies.`,
  sections: [
    {
      heading: "Common Personal Injury Cases in Miami",
      content: `Miami\u2019s economy and lifestyle produce a remarkably diverse personal injury caseload. Premises liability and slip-and-fall claims are among the most frequent, particularly at South Beach hotels, Brickell office towers, Wynwood entertainment venues, and the large shopping centers that attract both residents and tourists. Pedestrian and bicycle injuries are elevated in Miami\u2019s dense urban core, where vehicle traffic, e-scooters, cyclists, and pedestrians share crowded streets. Boating accident injuries on Biscayne Bay and the Intracoastal Waterway range from jet ski collisions to dock injuries to drowning incidents. Cruise ship injuries at PortMiami \u2014 the busiest cruise port in the world \u2014 involve complex jurisdictional issues under maritime law. Construction-site injuries affect the workers building Miami\u2019s ever-expanding skyline, and third-party negligence claims allow injured workers to pursue compensation beyond workers\u2019 comp. Dog bite claims, medical malpractice at Miami\u2019s major hospital systems (Jackson Memorial, Baptist Health, Mount Sinai), and nursing home abuse round out the landscape.`,
    },
    {
      heading: "Pedestrian and Cyclist Safety in Miami",
      content: `Miami-Dade County is one of the most dangerous metro areas in the nation for pedestrians and cyclists. The combination of wide, high-speed arterial roads, dense foot traffic in the urban core, aggressive driving behavior, and impaired driving (particularly in the South Beach entertainment district) creates extreme risk for vulnerable road users. Brickell Avenue, Biscayne Boulevard, Flagler Street, and the causeways connecting Miami to Miami Beach are particularly hazardous pedestrian corridors. E-scooter rentals have added another dimension to pedestrian injury risk, with riders frequently sharing sidewalks and crosswalks with foot traffic. Florida law requires drivers to exercise due care around pedestrians, and pedestrians injured by negligent drivers have the same right to pursue damages as other accident victims \u2014 subject to the modified comparative fault rules that can reduce or eliminate recovery if the pedestrian was more than 50% at fault.`,
    },
    {
      heading: "Miami-Dade Courthouse and Local Court System",
      content: `Personal injury lawsuits in Miami are filed in the Eleventh Judicial Circuit Court at the Miami-Dade County Courthouse, 73 W Flagler St, Miami, FL 33130. Miami-Dade\u2019s court system handles one of the highest civil caseloads in Florida, and scheduling, discovery practices, and trial timelines can differ significantly from smaller circuits. Miami-Dade juries are among the most diverse in the state, reflecting the county\u2019s multicultural population \u2014 this diversity can influence juror attitudes toward personal injury plaintiffs, damage awards, and corporate defendants. Many proceedings in Miami-Dade courts are conducted with bilingual staff and interpreters, and attorneys who practice regularly in the Eleventh Circuit understand how to navigate the local procedural landscape effectively.`,
    },
    {
      heading: "Snowbird Season and Seasonal Injury Risks",
      content: `From November through April, Miami-Dade\u2019s population swells as \u201csnowbird\u201d seasonal residents arrive from the Northeast and Midwest. This influx increases traffic volumes, creates additional congestion on already-strained roads, and changes the demographic mix of drivers on the road. Many seasonal residents are older and may have slower reaction times or unfamiliarity with road changes since their last visit. The snowbird season also coincides with peak tourism, meaning that Miami\u2019s roads, sidewalks, hotels, and recreational areas are at maximum capacity. Slip-and-fall incidents at hotels, condominiums, and commercial properties increase during the season, and traffic crash volumes rise correspondingly. Understanding these seasonal patterns is important context for any personal injury claim in Miami-Dade County.`,
    },
  ],
  faq: [
    {
      q: "How long do I have to file a personal injury lawsuit in Miami?",
      a: "Florida\u2019s 2023 tort reform gives you two years from the date of injury. This was reduced from four years. Claims against government entities may have shorter notice periods. Consult a Miami personal injury attorney promptly to preserve your rights and meet all applicable deadlines.",
    },
    {
      q: "Where are personal injury cases filed in Miami?",
      a: "Lawsuits are filed at the Miami-Dade County Courthouse, 73 W Flagler St, Miami, FL 33130, in the Eleventh Judicial Circuit Court. The clerk\u2019s office provides online case search and filing information at miamidade.gov/courts.",
    },
    {
      q: "Can I file a claim if I was injured as a tourist in Miami?",
      a: "Yes. Florida law applies to all injuries that occur within the state, regardless of where you live. Out-of-state visitors have the same right to pursue personal injury claims as Florida residents. However, there may be jurisdictional considerations and insurance coverage nuances \u2014 particularly regarding PIP coverage if you were in a rental car. An attorney experienced in Miami tourist injury claims can guide you.",
    },
    {
      q: "Are there Spanish-speaking personal injury lawyers in Miami?",
      a: "Yes. Miami\u2019s legal community reflects the county\u2019s bilingual population, and many personal injury attorneys and their staff are fluent in Spanish. Clear communication in your preferred language is important for accurately describing your injuries, understanding your legal options, and making informed decisions throughout the claims process.",
    },
    {
      q: "What types of personal injury cases are most common in Miami?",
      a: "The most common include car accidents, pedestrian injuries, slip-and-fall/premises liability at hotels and commercial properties, boating accidents on Biscayne Bay, cruise ship injuries at PortMiami, construction injuries, and medical malpractice. Miami\u2019s tourism economy and dense urban environment produce an exceptionally high volume of injury claims across all categories.",
    },
  ],
  outboundLinks: [
    {
      label: "Miami-Dade County Courts",
      url: "https://www.miamidade.gov/courts/",
    },
    {
      label: "Miami-Dade Police Department",
      url: "https://www.miamidade.gov/police/",
    },
  ],
  guideSlugs: [
    "how-to-choose-personal-injury-lawyer",
    "types-of-compensation-personal-injury",
    "serious-injury-florida-no-fault",
    "medical-bills-after-florida-car-accident",
  ],
  guideHeading: "Miami Personal Injury Guides",
};

/* ═══════════════════════════════════════════════════════════════════════
   MIAMI — TRUCK ACCIDENT
   ═══════════════════════════════════════════════════════════════════════ */
const MIAMI_TRUCK: CityContent = {
  metaTitle:
    "Miami Truck Accident Lawyer \u2014 Free Consultation | Top Lawyer Resource",
  metaDescription:
    "PortMiami and MIA generate massive truck traffic on I-95, the Palmetto, and the Dolphin Expressway. Catastrophic truck accident injuries require experienced attorneys. Free case review.",
  heroSubtitle:
    "PortMiami and Miami International Airport generate enormous freight truck traffic on I-95, the Palmetto Expressway, and the Dolphin Expressway. Truck accidents in Miami-Dade cause devastating injuries.",
  overview: `Miami-Dade County is a critical node in the global supply chain. PortMiami is the largest container port in Florida and one of the busiest in the nation, handling millions of tons of cargo annually \u2014 virtually all of which moves by truck to distribution centers, warehouses, and retail destinations across South Florida and beyond. Miami International Airport (MIA) is the largest air cargo hub in Latin America and generates continuous truck traffic between airport freight facilities and destinations throughout the region. This freight volume flows through Miami-Dade\u2019s already-congested highway system: I-95, the Palmetto Expressway (SR-826), the Dolphin Expressway (SR-836), US-1, and the network of surface streets connecting port and airport facilities. The result is an elevated risk of catastrophic truck accidents involving vehicles weighing up to 80,000 pounds sharing congested roads with passenger vehicles, pedestrians, and cyclists. Miami truck accident claims involve the same complex mix of federal FMCSA regulations, Florida state law, and multi-party liability that applies statewide \u2014 but the sheer density of commercial truck traffic in Miami-Dade makes these cases particularly common and consequential.`,
  sections: [
    {
      heading: "Miami\u2019s Freight Corridors and Truck Crash Risk",
      content: `The highway corridors surrounding PortMiami and Miami International Airport carry the highest concentration of commercial truck traffic in South Florida. I-95 through central Miami-Dade is one of the most dangerous truck corridors in the state, with freight traffic mixing with commuter congestion at high speeds. The Palmetto Expressway\u2019s western arc connects distribution centers and industrial parks, carrying a continuous flow of commercial vehicles. The Dolphin Expressway links downtown Miami, MIA, and the western suburbs, and its truck-heavy traffic creates dangerous conditions at merge points and exit ramps. NW 25th Street and NW 72nd Avenue near MIA\u2019s cargo facilities see dense truck movements on roads that also carry heavy passenger traffic. The port access roads connecting PortMiami to I-95 and I-395 route large container trucks through urban areas with pedestrian crossings and tight turning radii. This mix of heavy commercial vehicles on congested urban roads makes Miami-Dade one of the highest-risk areas in Florida for truck-involved crashes.`,
    },
    {
      heading: "Multiple Liable Parties in Miami Truck Crashes",
      content: `Miami truck accident claims frequently involve multiple potentially liable parties. The truck driver may be directly at fault for fatigue, distraction, speeding, or impairment. The motor carrier can be liable for negligent hiring, training, supervision, or maintenance. Freight brokers who arranged the shipment may bear liability if they selected an unqualified carrier or imposed unrealistic delivery schedules. Cargo loading companies are liable when improper loading contributed to the crash. Vehicle and parts manufacturers face product liability when defective components caused the accident. Third-party maintenance providers may be liable for negligent repairs. Each party typically carries separate insurance, and the total available coverage in a Miami truck accident case can be substantial \u2014 federal regulations require interstate trucks to carry at least $750,000, with many carriers maintaining $1\u2013$5 million or more. Identifying and pursuing every liable party is critical.`,
    },
    {
      heading: "Miami Truck Accident Statistics",
      content: `Miami-Dade County records hundreds of large-truck-involved crashes each year, driven by the freight volumes from PortMiami and MIA. The FMCSA data shows that Florida ranks in the top five states nationally for fatal large-truck crashes, and the Miami metro area contributes a significant share due to its role as an international trade gateway. I-95 through Miami-Dade is among the most truck-heavy corridors in the Southeast. Fatal truck crashes in the county disproportionately involve occupants of smaller vehicles \u2014 the physics of a collision between an 80,000-pound truck and a 4,000-pound car are devastating regardless of safety features. The economic cost of truck crashes in Miami-Dade reaches into the hundreds of millions annually when accounting for medical expenses, lost productivity, and property damage.`,
    },
  ],
  faq: [
    {
      q: "Why are truck accidents so common in Miami?",
      a: "PortMiami and Miami International Airport generate enormous freight truck traffic that flows through I-95, the Palmetto Expressway, the Dolphin Expressway, and surface streets. This commercial volume shares road space with one of the most congested passenger-vehicle networks in the country, creating elevated crash risk throughout Miami-Dade County.",
    },
    {
      q: "Who can I sue after a truck accident in Miami?",
      a: "Potentially multiple parties: the truck driver, trucking company, freight broker, cargo loader, vehicle manufacturer, and third-party maintenance providers. Each may carry separate insurance. An experienced truck accident attorney will investigate all liable parties to maximize your recovery.",
    },
    {
      q: "Where are truck accident lawsuits filed in Miami?",
      a: "Truck accident lawsuits in Miami-Dade County are filed at the Miami-Dade County Courthouse, 73 W Flagler St, Miami, FL 33130. Cases involving interstate carriers may also be eligible for federal court. An attorney will determine the best venue for your case.",
    },
    {
      q: "How long do I have to file a truck accident claim in Miami?",
      a: "Personal injury and wrongful death claims must be filed within two years. Property damage claims have a four-year deadline. Critical evidence like ELD data, dashcam footage, and maintenance records can be overwritten quickly, so consulting an attorney immediately is essential for evidence preservation.",
    },
    {
      q: "What makes truck accident cases different from car accident cases in Miami?",
      a: "Truck cases involve federal FMCSA regulations, multiple potentially liable parties, higher insurance policies ($750K\u2013$5M+), specialized evidence (ELD data, driver qualification files), and typically more severe injuries. The trucking company will have its own legal team working immediately after the crash, so retaining your own attorney quickly is critical.",
    },
  ],
  outboundLinks: [
    {
      label: "Federal Motor Carrier Safety Administration (FMCSA)",
      url: "https://www.fmcsa.dot.gov/",
    },
    {
      label: "Miami-Dade County Courts",
      url: "https://www.miamidade.gov/courts/",
    },
  ],
  guideSlugs: [
    "what-to-do-after-car-accident",
    "what-is-negligence-personal-injury",
    "types-of-compensation-personal-injury",
    "average-car-accident-settlement-florida",
  ],
  guideHeading: "Miami Truck Accident Guides",
};

/* ═══════════════════════════════════════════════════════════════════════
   MIAMI — WORKERS COMPENSATION
   ═══════════════════════════════════════════════════════════════════════ */
const MIAMI_WC: CityContent = {
  metaTitle:
    "Miami Workers\u2019 Compensation Lawyer \u2014 Free Case Review | Top Lawyer Resource",
  metaDescription:
    "Injured on the job in Miami? Florida\u2019s workers\u2019 comp system under Chapter 440 has strict deadlines and insurer-controlled medical care. Free consultation with experienced Miami-Dade attorneys.",
  heroSubtitle:
    "Miami-Dade\u2019s construction, hospitality, port, and healthcare industries employ hundreds of thousands in high-risk occupations. Florida\u2019s workers\u2019 comp system is employer-friendly \u2014 get an attorney on your side.",
  overview: `Miami-Dade County\u2019s economy is powered by industries with elevated workplace injury rates. The county\u2019s construction sector is one of the largest in Florida, fueled by the continuous development of high-rise condominiums, commercial properties, and infrastructure projects. Miami\u2019s hospitality industry \u2014 thousands of hotels, restaurants, nightclubs, and event venues \u2014 employs a massive workforce that faces slip-and-fall hazards, burns, repetitive stress injuries, and lifting injuries. PortMiami and the associated logistics operations expose dockworkers, forklift operators, and warehouse staff to heavy equipment hazards. Healthcare workers at Jackson Memorial Hospital (one of the largest public hospitals in the country), Baptist Health, and Mount Sinai Medical Center experience high rates of back injuries, needlestick incidents, and workplace violence. Florida\u2019s workers\u2019 compensation system under Chapter 440 provides benefits to injured workers regardless of fault, but the system\u2019s strict procedural requirements \u2014 30-day reporting deadline, insurer-controlled medical care, IME disputes, and benefit caps \u2014 make experienced legal representation essential for Miami-Dade workers.`,
  sections: [
    {
      heading: "High-Risk Industries in Miami-Dade",
      content: `Construction dominates Miami-Dade\u2019s workplace injury landscape. The county\u2019s building boom has been continuous for decades, and the construction workforce faces falls from height on high-rise projects, electrocution from the dense network of electrical systems in modern buildings, struck-by incidents from cranes and heavy equipment, and caught-in/between hazards at excavation sites. Hospitality workers in Miami\u2019s hotels and restaurants face slip-and-fall hazards from wet kitchen floors and pool areas, burns from commercial cooking equipment, and repetitive stress injuries from continuous physical labor. Port and logistics workers at PortMiami and the county\u2019s distribution centers face heavy machinery hazards, loading dock falls, and musculoskeletal injuries from repetitive lifting. Healthcare workers are particularly vulnerable \u2014 Jackson Memorial is one of the busiest trauma centers in the nation, and the physical demands of patient care combined with the stress of a high-volume emergency department contribute to elevated injury rates. Miami\u2019s year-round heat exposure adds risk across all outdoor industries.`,
    },
    {
      heading: "Filing a Workers\u2019 Comp Claim in Miami",
      content: `If you are injured at work in Miami-Dade County, report the injury to your employer within 30 days under Florida Statute \u00a7\u202f440.185. Your employer\u2019s insurer will direct your medical care through an authorized treating physician. You have the right to request a one-time change of physician. If your claim is denied or benefits are cut off, file a Petition for Benefits (PFB) with the Office of the Judges of Compensation Claims. Miami-Dade falls within the jurisdiction of the Third District Court of Appeal for workers\u2019 comp appeals. Benefits include medical treatment, Temporary Total Disability at 66\u2154% of your average weekly wage, Temporary Partial Disability, Permanent Impairment Benefits based on your impairment rating, and death benefits. Under Florida law, workers\u2019 comp attorney fees are paid by the employer/insurer when you prevail, meaning there is no out-of-pocket cost for legal representation.`,
    },
    {
      heading: "Common Claim Disputes in Miami Workers\u2019 Comp",
      content: `Miami workers\u2019 comp claims face the same denial patterns seen statewide, with some local variations. Pre-existing condition arguments are extremely common \u2014 the insurer claims your injury or pain predates the workplace accident. Missed deadlines remain a frequent basis for denial. Independent Medical Examinations (IMEs) by insurer-selected physicians often minimize injuries and push for premature Maximum Medical Improvement (MMI) determinations that cut off temporary disability benefits. In Miami-Dade, language barriers can compound these challenges: workers who are more comfortable communicating in Spanish may struggle to accurately describe their symptoms and limitations during IMEs conducted in English, potentially resulting in less favorable medical opinions. Working with a bilingual attorney who can ensure accurate communication with medical providers and legal decision-makers is particularly important in Miami\u2019s workers\u2019 comp system.`,
    },
    {
      heading: "Miami Workplace Injury Statistics",
      content: `Miami-Dade County\u2019s workplace injury volume reflects its large workforce and concentration of high-risk industries. The Bureau of Labor Statistics reports that Florida\u2019s construction sector experiences injury rates significantly above the statewide average, and Miami-Dade\u2019s construction activity contributes a major share. Hospitality-sector injuries in Miami-Dade are among the highest in the state, driven by the scale of the tourism industry. OSHA\u2019s data shows that Florida records over 300 workplace fatalities annually, with construction and transportation consistently leading. The Florida Division of Workers\u2019 Compensation processes tens of thousands of lost-time claims each year statewide, and Miami-Dade\u2019s share is proportional to its position as the county with the largest workforce in the state. Claim denial rates underscore the importance of legal representation.`,
    },
  ],
  faq: [
    {
      q: "How do I report a work injury in Miami?",
      a: "Report the injury to your employer within 30 days under Florida Statute \u00a7\u202f440.185, including the date, time, place, and nature of the injury. Missing this deadline can result in denial of your claim. If your employer fails to report to their insurer, you can file a claim directly with the Florida Division of Workers\u2019 Compensation.",
    },
    {
      q: "Can I see my own doctor for a Miami workers\u2019 comp injury?",
      a: "Generally no \u2014 the employer/insurer selects your authorized treating physician. You can request a one-time change of doctor under \u00a7\u202f440.13(2)(f). If the insurer denies recommended treatment, challenge it through a Petition for Benefits.",
    },
    {
      q: "What if my Miami workers\u2019 comp claim is denied?",
      a: "File a Petition for Benefits with the Office of the Judges of Compensation Claims. The case proceeds through mandatory mediation and, if unresolved, a formal hearing. Under Florida law, the employer/insurer pays your attorney\u2019s fees if you prevail. Many experienced Miami workers\u2019 comp attorneys offer services in both English and Spanish.",
    },
    {
      q: "Which Miami industries have the most workplace injuries?",
      a: "Construction (especially high-rise), hospitality (hotels, restaurants, nightclubs), port and logistics (PortMiami), healthcare (Jackson Memorial, Baptist Health), and agriculture in the southern part of the county consistently report the highest injury rates. Miami\u2019s year-round heat adds risk for all outdoor workers.",
    },
    {
      q: "Can I sue my employer for a workplace injury in Miami?",
      a: "In most cases, workers\u2019 comp is the exclusive remedy against your employer. However, you may have a separate personal injury claim against a third party \u2014 a subcontractor, equipment manufacturer, property owner, or other non-employer \u2014 whose negligence contributed to your injury. These third-party claims can provide additional compensation.",
    },
  ],
  outboundLinks: [
    {
      label: "Florida Division of Workers\u2019 Compensation",
      url: "https://www.myfloridacfo.com/division/wc/",
    },
    {
      label: "OSHA \u2014 Occupational Safety and Health Administration",
      url: "https://www.osha.gov/",
    },
    {
      label: "Miami-Dade County Courts",
      url: "https://www.miamidade.gov/courts/",
    },
  ],
  guideSlugs: [
    "workers-comp-claim-denied-florida",
    "types-of-compensation-personal-injury",
    "right-to-sue-letter",
  ],
  guideHeading: "Miami Workers\u2019 Comp Guides",
};

/* ─── Content lookup ─── */
const CITY_CONTENT: Record<string, CityContent> = {
  "car-accident-jacksonville": JAX_CAR,
  "personal-injury-jacksonville": JAX_PI,
  "truck-accident-jacksonville": JAX_TRUCK,
  "workers-compensation-jacksonville": JAX_WC,
  "car-accident-miami": MIAMI_CAR,
  "personal-injury-miami": MIAMI_PI,
  "truck-accident-miami": MIAMI_TRUCK,
  "workers-compensation-miami": MIAMI_WC,
};

/* ─── Props & generation ─── */
interface Props {
  params: Promise<{ practiceArea: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { practiceArea: string; city: string }[] = [];
  for (const practiceArea of VALID_PRACTICE_AREAS) {
    for (const city of citiesData) {
      params.push({ practiceArea, city: city.citySlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { practiceArea, city } = await params;
  const cityData = citiesData.find((c) => c.citySlug === city);
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!cityData || !area) return {};

  const cc = CITY_CONTENT[`${practiceArea}-${city}`];
  const imageKey = `${practiceArea}-${city}`;
  const ogImage = CITY_IMAGES[imageKey] || DEFAULT_IMAGE;

  const title =
    cc?.metaTitle ??
    `${area.title} Lawyer in ${cityData.city}, ${cityData.state} \u2014 Free Consultation`;
  const description =
    cc?.metaDescription ??
    `Injured in ${cityData.city}? Get a free ${area.title.toLowerCase()} case evaluation from an experienced attorney. No fees unless you win.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
      images: [
        {
          url: ogImage,
          width: 1600,
          alt: `${area.title} attorney in ${cityData.city}, FL`,
        },
      ],
    },
    alternates: {
      canonical: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
    },
  };
}

export default async function CityPracticeAreaPage({ params }: Props) {
  const { practiceArea, city } = await params;

  if (!VALID_PRACTICE_AREAS.includes(practiceArea)) notFound();

  const cityData = citiesData.find((c) => c.citySlug === city);
  const area = practiceAreasData.find((a) => a.slug === practiceArea);
  if (!cityData || !area) notFound();

  const cc = CITY_CONTENT[`${practiceArea}-${city}`];
  const imageKey = `${practiceArea}-${city}`;
  const cityImage = CITY_IMAGES[imageKey] || DEFAULT_IMAGE;

  /* ── Structured data ── */
  const legalServiceLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} Attorney in ${cityData.city}, ${cityData.state}`,
    description: `Free ${area.title.toLowerCase()} case evaluation in ${cityData.city}, ${cityData.state}. No fees unless you win.`,
    url: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
    serviceType: area.title,
    areaServed: {
      "@type": "City",
      name: cityData.city,
      containedInPlace: {
        "@type": "State",
        name: "Florida",
        sameAs: "https://en.wikipedia.org/wiki/Florida",
      },
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
      {
        "@type": "ListItem",
        position: 4,
        name: `${cityData.city}, ${cityData.state}`,
        item: `https://toplawyerresource.com/${practiceArea}/fl/${city}`,
      },
    ],
  };

  const faqLd = cc?.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: cc.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

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
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      {/* ── Hero ── */}
      <section className="relative min-h-[380px] flex items-end overflow-hidden">
        <Image
          src={cityImage}
          alt={`${area.title} attorney serving ${cityData.city}, ${cityData.state}`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-900/20" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/${practiceArea}`}
              className="hover:text-white transition-colors capitalize"
            >
              {area.title}
            </Link>
            <span>/</span>
            <Link
              href={`/${practiceArea}/fl`}
              className="hover:text-white transition-colors"
            >
              Florida
            </Link>
            <span>/</span>
            <span className="text-gray-200">{cityData.city}</span>
          </nav>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
            {cityData.city}, {cityData.state} &bull; {area.title}
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {area.title} Lawyer in {cityData.city}, {cityData.state}
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl">
            {cc?.heroSubtitle ??
              `Were you injured in ${cityData.city}? Our network of experienced attorneys serve ${cityData.county}. Get a free, confidential case evaluation today.`}
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
            {cc && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {area.title} Claims in {cityData.city}, {cityData.state}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {cc.overview}
                </p>
              </section>
            )}

            {/* Content Sections */}
            {cc?.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}

            {/* Statute of Limitations */}
            <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>&#9201;</span> Florida Statute of Limitations &mdash; Act
                Quickly
              </h2>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                {practiceArea === "workers-compensation" ? (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <strong>30 days</strong>&nbsp;to report your injury to
                      your employer
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <strong>2 years</strong>&nbsp;to file a formal
                      workers&apos; comp claim
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <strong>
                        {cityData.statutes.personalInjury} years
                      </strong>
                      &nbsp;to file a personal injury lawsuit (reduced from 4
                      years under 2023 tort reform)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <strong>
                        {cityData.statutes.propertyDamage} years
                      </strong>
                      &nbsp;to file a property damage claim
                    </li>
                    {(practiceArea === "car-accident" ||
                      practiceArea === "personal-injury") && (
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                        <strong>14 days</strong>&nbsp;to seek medical treatment
                        to preserve PIP benefits
                      </li>
                    )}
                  </>
                )}
              </ul>
              <p className="text-gray-500 text-xs">
                Missing the statute of limitations deadline permanently bars your
                right to compensation. Consult a {cityData.city} attorney as
                soon as possible.
              </p>
            </section>

            {/* FAQ Section */}
            {cc?.faq && cc.faq.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions &mdash; {cityData.city}{" "}
                  {area.title} Claims
                </h2>
                <div className="space-y-5">
                  {cc.faq.map((item, i) => (
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

            {/* Courthouse */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {cityData.county} Courthouse Information
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">
                  {cityData.courthouse.name}
                </h3>
                <p className="text-gray-500 text-sm mb-1 flex items-center gap-2">
                  <span>&#128205;</span> {cityData.courthouse.address}
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>&#128222;</span> {cityData.courthouse.phone}
                </p>
              </div>
            </section>

            {/* Outbound Links */}
            {cc?.outboundLinks && cc.outboundLinks.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {cityData.city} Legal Resources
                </h2>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <ul className="space-y-3">
                    {cc.outboundLinks.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                        >
                          <span className="text-blue-400">&rarr;</span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="http://www.leg.state.fl.us/statutes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        <span className="text-blue-400">&rarr;</span>
                        Florida Statutes Online
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            )}

            {/* Related Guides */}
            {cc?.guideSlugs && cc.guideSlugs.length > 0 && (
              <RelatedGuides
                slugs={cc.guideSlugs}
                heading={cc.guideHeading}
              />
            )}

            {/* Case Evaluator CTA */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get a Free Case Evaluation in {cityData.city}
              </h2>
              <CityLeadForm
                city={cityData.city}
                state={cityData.state}
                practiceArea={area.title}
              />
            </section>

          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-1 space-y-6">
            {/* CTA card hidden below lg to avoid duplicating the main-column CTA when sidebar stacks. */}
            <div
              className="hidden lg:block rounded-2xl p-7 text-white"
              style={{ backgroundColor: "#1e40af" }}
            >
              <h3 className="font-bold text-xl mb-2 text-white">
                Free Case Evaluation
              </h3>
              <p className="text-blue-200 text-sm mb-5">
                {cityData.city} attorneys available. No cost, no obligation.
              </p>
              <Link
                href="/tools/case-evaluator"
                className="btn btn-white w-full justify-center"
              >
                Check My Case
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">
                {cityData.city} Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                {(
                  [
                    ["County", cityData.county],
                    ["Population", cityData.population],
                    ["State", cityData.state],
                    [
                      "Injury SOL",
                      `${cityData.statutes.personalInjury} years`,
                    ],
                    [
                      "Property SOL",
                      `${cityData.statutes.propertyDamage} years`,
                    ],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">
                Other {cityData.city} Practice Areas
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
                        href={`/${pa}/fl/${city}`}
                        className="block text-sm text-gray-600 hover:text-blue-700 transition-colors py-1"
                      >
                        {paData?.title} in {cityData.city} &rarr;
                      </Link>
                    );
                  }
                )}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">
                Free Legal Tools
              </h3>
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

