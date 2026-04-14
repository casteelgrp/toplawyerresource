import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0f2240" }} className="text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-3">
              Top Lawyer<br />
              <span style={{ color: "#d69e2e" }}>Resource</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Connecting injury victims with experienced attorneys since 2024. Free consultations, no upfront costs.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/personal-injury" className="hover:text-white transition-colors">Personal Injury</Link></li>
              <li><Link href="/car-accident" className="hover:text-white transition-colors">Car Accidents</Link></li>
              <li><Link href="/truck-accident" className="hover:text-white transition-colors">Truck Accidents</Link></li>
              <li><Link href="/workers-compensation" className="hover:text-white transition-colors">Workers&apos; Compensation</Link></li>
            </ul>
          </div>

          {/* Tools & Guides */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Tools & Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/case-evaluator" className="hover:text-white transition-colors">Case Evaluator</Link></li>
              <li><Link href="/tools/settlement-calculator" className="hover:text-white transition-colors">Settlement Calculator</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">Legal Guides</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Find a Lawyer</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-blue-800">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            <strong className="text-gray-400">Disclaimer:</strong> Top Lawyer Resource is not a law firm and does not provide legal advice.
            The information on this website is for general informational purposes only and should not be construed as legal advice.
            Use of this website does not create an attorney-client relationship. Please consult with a licensed attorney in your jurisdiction for advice specific to your situation.
          </p>
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Top Lawyer Resource. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
