import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#111827" }} className="text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg p-2 inline-block">
                <Image
                  src="/logo-whitebg.webp"
                  alt="Top Lawyer Resource"
                  width={140}
                  height={44}
                  className="h-11 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Connecting injury victims with experienced attorneys since 2024. Free consultations, no upfront costs.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/personal-injury" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link href="/car-accident" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Car Accidents
                </Link>
              </li>
              <li>
                <Link href="/truck-accident" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Truck Accidents
                </Link>
              </li>
              <li>
                <Link href="/workers-compensation" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Workers&apos; Compensation
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Guides */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Tools &amp; Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tools/case-evaluator" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Case Evaluator
                </Link>
              </li>
              <li>
                <Link href="/tools/settlement-calculator" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Settlement Calculator
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Legal Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Find a Lawyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-150">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-600 leading-relaxed mb-4 max-w-4xl">
            <strong className="text-gray-500">Disclaimer:</strong> Top Lawyer Resource is not a law firm and does not
            provide legal advice. The information on this website is for general informational purposes only and should
            not be construed as legal advice. Use of this website does not create an attorney-client relationship.
            Please consult with a licensed attorney in your jurisdiction for advice specific to your situation.
          </p>
          <p className="text-xs text-gray-700">
            &copy; {currentYear} Top Lawyer Resource. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
