import Link from "next/link";
import Image from "next/image";
import { getGuideCards } from "../lib/guideData";

interface Props {
  slugs: string[];
  heading?: string;
}

export default function RelatedGuides({ slugs, heading = "Related Legal Guides" }: Props) {
  const cards = getGuideCards(slugs);
  if (cards.length === 0) return null;

  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cards.map((card) => (
          <Link
            key={card.slug}
            href={`/guides/${card.slug}`}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded bg-blue-600 text-white">
                  {card.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-400 text-xs mb-1.5">{card.readTime}</p>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                {card.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                {card.description}
              </p>
              <span className="text-xs font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                Read Guide &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
