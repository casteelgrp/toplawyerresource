import Link from "next/link";

interface LeadCaptureBannerProps {
  variant?: "sticky" | "inline";
  title?: string;
  subtitle?: string;
}

export default function LeadCaptureBanner({
  variant = "inline",
  title = "Injured? Find out if you have a case.",
  subtitle = "Free & Confidential — No obligation, no upfront cost.",
}: LeadCaptureBannerProps) {
  if (variant === "sticky") {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-40 shadow-2xl md:hidden"
        style={{ backgroundColor: "#1a365d" }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-white font-semibold text-sm">{title}</p>
            <p className="text-blue-300 text-xs">{subtitle}</p>
          </div>
          <Link
            href="/tools/case-evaluator"
            style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
            className="font-bold px-4 py-2 rounded-md text-sm whitespace-nowrap ml-3"
          >
            Check My Case
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl p-8 my-10 text-center"
      style={{ backgroundColor: "#1a365d" }}
    >
      <p className="text-blue-200 text-sm uppercase tracking-wider font-medium mb-2">
        Free Legal Consultation
      </p>
      <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
      <p className="text-blue-200 mb-6">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/tools/case-evaluator"
          style={{ backgroundColor: "#d69e2e", color: "#1a365d" }}
          className="font-bold px-8 py-3 rounded-md hover:opacity-90 transition-opacity inline-block"
        >
          Evaluate My Case — Free
        </Link>
        <Link
          href="/contact"
          className="border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors inline-block"
        >
          Talk to an Attorney
        </Link>
      </div>
      <p className="text-blue-300 text-xs mt-4">
        No fees unless you win. Confidential and free consultation.
      </p>
    </div>
  );
}
