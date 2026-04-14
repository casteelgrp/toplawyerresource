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
        style={{ backgroundColor: "#1e40af" }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-white font-semibold text-sm">{title}</p>
            <p className="text-blue-200 text-xs">{subtitle}</p>
          </div>
          <Link
            href="/tools/case-evaluator"
            className="btn btn-white text-sm px-4 py-2 ml-3 whitespace-nowrap"
          >
            Check My Case
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-10 my-10 text-center relative overflow-hidden"
      style={{ backgroundColor: "#1e40af" }}
    >
      {/* Decorative accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 translate-x-16 -translate-y-16"
        style={{ backgroundColor: "#0ea5e9" }}
      />
      <div className="relative z-10">
        <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">
          Free Legal Consultation
        </p>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-200 mb-7">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/tools/case-evaluator" className="btn btn-white">
            Evaluate My Case &mdash; Free
          </Link>
          <Link
            href="/contact"
            className="btn border-2 border-white text-white font-bold hover:bg-white hover:text-blue-700 transition-colors duration-200"
          >
            Talk to an Attorney
          </Link>
        </div>
        <p className="text-blue-300 text-xs mt-5">
          No fees unless you win &bull; Confidential &bull; Free consultation
        </p>
      </div>
    </div>
  );
}
