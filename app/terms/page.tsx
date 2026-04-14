import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Top Lawyer Resource terms of use — the rules and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#1a365d" }}>
        Terms of Use
      </h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2025</p>

      <div className="prose max-w-none">
        <p>
          Welcome to Top Lawyer Resource. By accessing or using our website at toplawyerresource.com,
          you agree to be bound by these Terms of Use. Please read them carefully before using our services.
        </p>

        <h2>1. Not Legal Advice</h2>
        <p>
          <strong>Top Lawyer Resource is not a law firm and does not provide legal advice.</strong> The
          content on this website is provided for general informational and educational purposes only.
          It is not intended to be, and should not be construed as, legal advice for any specific
          situation. The information presented may not reflect the most current legal developments
          and may vary by jurisdiction.
        </p>
        <p>
          No attorney-client relationship is created by your use of this website or by submitting
          information through any form on this website. Only by retaining an attorney and having
          that attorney agree to represent you is an attorney-client relationship formed.
        </p>
        <p>
          You should always consult with a licensed attorney in your jurisdiction for advice specific
          to your legal situation before taking any legal action.
        </p>

        <h2>2. Attorney Referral Service</h2>
        <p>
          Top Lawyer Resource operates as an attorney referral service. When you submit information
          through our website, we may share that information with attorneys or law firms in our network
          who may be able to assist with your legal matter. We do not guarantee that any attorney will
          agree to represent you, or that you will achieve any particular outcome in your legal matter.
        </p>
        <p>
          Attorneys in our referral network are independent practitioners and are not employees or
          agents of Top Lawyer Resource. We do not supervise or control the legal services provided
          by these attorneys. Your relationship with any attorney you retain through our service is
          solely between you and that attorney.
        </p>

        <h2>3. Accuracy of Information</h2>
        <p>
          While we make reasonable efforts to provide accurate and up-to-date information, we make
          no warranties or representations about the accuracy, completeness, or reliability of any
          content on our website. Laws and legal standards change frequently, and information that
          was accurate when published may no longer be current.
        </p>

        <h2>4. Use of Our Tools</h2>
        <p>
          Our interactive tools, including the Case Evaluator and Settlement Calculator, are provided
          for general informational purposes only. Results from these tools are estimates based on
          general information and do not constitute legal advice or a guarantee of any outcome.
          Actual case values and legal assessments depend on many factors that these tools cannot
          fully evaluate.
        </p>

        <h2>5. Prohibited Uses</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our website for any unlawful purpose</li>
          <li>Submit false or misleading information</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Scrape, copy, or reproduce our content without permission</li>
          <li>Interfere with the operation of our website</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and software, is the property
          of Top Lawyer Resource or its content suppliers and is protected by applicable intellectual
          property laws. You may not reproduce, distribute, or create derivative works from our content
          without our express written permission.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Top Lawyer Resource, its officers, directors,
          employees, and agents shall not be liable for any indirect, incidental, special, consequential,
          or punitive damages arising from your use of this website or any information contained herein.
          This includes, without limitation, any loss of profit, loss of data, or personal injury.
        </p>

        <h2>8. Links to Third-Party Sites</h2>
        <p>
          Our website may contain links to third-party websites. These links are provided for your
          convenience only. We have no control over the content of those sites and accept no responsibility
          for them or for any loss or damage that may arise from your use of them.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance with the laws of the
          United States and the State of Florida, without regard to its conflict of law provisions.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Use at any time. Changes will be effective
          immediately upon posting to the website. Your continued use of the website after any changes
          constitutes your acceptance of the new Terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have questions about these Terms of Use, please contact us at:
        </p>
        <p>
          Top Lawyer Resource<br />
          Email: legal@toplawyerresource.com<br />
          Website: toplawyerresource.com
        </p>
      </div>
    </div>
  );
}
