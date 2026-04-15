export interface GuideCardData {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
}

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const GUIDE_DATA: Record<string, GuideCardData> = {
  "serious-injury-florida-no-fault": {
    slug: "serious-injury-florida-no-fault",
    title: "What Counts as a 'Serious Injury' Under Florida's No-Fault Laws?",
    description:
      "Florida's no-fault system limits your right to sue unless injuries meet the serious injury threshold. Learn exactly what qualifies and how to prove it.",
    image: px(8112115),
    category: "Personal Injury",
    readTime: "10 min read",
  },
  "medical-bills-after-florida-car-accident": {
    slug: "medical-bills-after-florida-car-accident",
    title: "Dealing with Medical Bills After a Florida Car Accident",
    description:
      "PIP, health insurance, letters of protection, and medical liens explained — and how your settlement handles all unpaid medical bills.",
    image: px(8941926),
    category: "Personal Injury",
    readTime: "9 min read",
  },
  "tourist-injuries-jacksonville": {
    slug: "tourist-injuries-jacksonville",
    title: "Injured as a Tourist in Jacksonville? What Non-Residents Need to Know",
    description:
      "Florida law applies to out-of-state visitors. Learn how PIP, hotel liability, and rental car coverage work for tourists injured in Jacksonville.",
    image: px(30912707),
    category: "Personal Injury",
    readTime: "8 min read",
  },
  "average-car-accident-settlement-florida": {
    slug: "average-car-accident-settlement-florida",
    title: "Average Car Accident Settlement in Florida: What to Realistically Expect",
    description:
      "Florida settlements vary widely by injury severity and insurance limits. See realistic ranges by injury type and what drives settlement value.",
    image: px(6520213),
    category: "Car Accidents",
    readTime: "10 min read",
  },
  "jacksonville-dangerous-intersections": {
    slug: "jacksonville-dangerous-intersections",
    title: "Jacksonville's Most Dangerous Intersections: 2025 Data",
    description:
      "Crash data reveals the 10 most dangerous intersections in Jacksonville. Find out where accidents concentrate and what to do after a crash.",
    image: px(15481199),
    category: "Car Accidents",
    readTime: "8 min read",
  },
  "jacksonville-dangerous-roads": {
    slug: "jacksonville-dangerous-roads",
    title: "Jacksonville's Most Dangerous Roads for Motorists",
    description:
      "From Beach Boulevard to I-95, these corridors account for the highest crash rates in Duval County. Learn what makes them dangerous.",
    image: px(15481199),
    category: "Car Accidents",
    readTime: "9 min read",
  },
  "uber-lyft-accident-jacksonville": {
    slug: "uber-lyft-accident-jacksonville",
    title: "Injured in an Uber or Lyft Accident in Jacksonville?",
    description:
      "Rideshare accidents involve complex insurance tiers. Learn who pays, how Uber and Lyft's $1M policy works, and steps to protect your claim.",
    image: px(15481199),
    category: "Car Accidents",
    readTime: "9 min read",
  },
  "florida-no-fault-rideshare-accidents": {
    slug: "florida-no-fault-rideshare-accidents",
    title: "How Florida's No-Fault Insurance Applies to Rideshare Accidents",
    description:
      "Uber and Lyft accidents trigger complex interactions between PIP, personal auto insurance, and rideshare commercial policies.",
    image: px(15481199),
    category: "Car Accidents",
    readTime: "8 min read",
  },
  "florida-no-fault-minor-accidents": {
    slug: "florida-no-fault-minor-accidents",
    title: "How Florida's No-Fault Insurance Works in Minor Car Accidents",
    description:
      "Even minor accidents involve Florida's strict 14-day PIP deadline. Learn what PIP covers and when a small crash can still lead to a claim.",
    image: px(12533698),
    category: "Personal Injury",
    readTime: "8 min read",
  },
  "jacksonville-crash-reports": {
    slug: "jacksonville-crash-reports",
    title: "Jacksonville Crash Reports: How to Get Yours Step by Step",
    description:
      "Your crash report is critical evidence. Learn how to get your report from JSO or FLHSMV, what it contains, and how to handle errors.",
    image: px(15481199),
    category: "Car Accidents",
    readTime: "7 min read",
  },
  "hit-and-run-jacksonville": {
    slug: "hit-and-run-jacksonville",
    title: "Injured in a Hit-and-Run in Jacksonville? Your Rights and Next Steps",
    description:
      "A hit-and-run doesn't mean you're without options. Learn how UM coverage, JSO investigation, and Crime Victims' Compensation can help.",
    image: px(6520074),
    category: "Car Accidents",
    readTime: "8 min read",
  },
  "average-car-accident-settlement-jacksonville": {
    slug: "average-car-accident-settlement-jacksonville",
    title: "Average Car Accident Settlement in Jacksonville, FL",
    description:
      "Duval County jury trends, military demographics, and I-95 corridor factors all shape what Jacksonville car accident cases are worth.",
    image: px(6520213),
    category: "Car Accidents",
    readTime: "9 min read",
  },
  "workers-comp-claim-denied-florida": {
    slug: "workers-comp-claim-denied-florida",
    title: "Workers' Comp Claim Denied in Florida? Here's What to Do Next",
    description:
      "A denial isn't the end. Learn the common denial reasons, the Petition for Benefits process, and how an attorney can fight for your benefits.",
    image: px(8112115),
    category: "Workers' Comp",
    readTime: "9 min read",
  },
  "right-to-sue-letter": {
    slug: "right-to-sue-letter",
    title: "What Is a Right to Sue Letter? Your Complete Guide",
    description:
      "Before suing your employer for discrimination, you need a Right to Sue letter from the EEOC. Learn how to get one before your 90-day window closes.",
    image: px(8112115),
    category: "Workers' Rights",
    readTime: "6 min read",
  },
};

export function getGuideCards(slugs: string[]): GuideCardData[] {
  return slugs.flatMap((s) => {
    const g = GUIDE_DATA[s];
    return g ? [g] : [];
  });
}
