import Link from "next/link";
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
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{heading}</h2>
      <div className="border-t border-gray-200 mt-4">
        {cards.map((card) => (
          <Link
            key={card.slug}
            href={`/guides/${card.slug}`}
            className="group flex items-center justify-between gap-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors -mx-2 px-2 rounded"
          >
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">
                {card.title}
              </p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed line-clamp-1">
                {card.description}
              </p>
            </div>
            <span className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 text-base leading-none">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
