import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Top Lawyer Resource privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#1a365d" }}>
        Privacy Policy
      </h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2025</p>

      <div className="prose max-w-none">
        <p>
          Top Lawyer Resource (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website toplawyerresource.com.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website and use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect information about you in a variety of ways, including:</p>
        <ul>
          <li>
            <strong>Information you provide directly:</strong> When you fill out our contact form,
            case evaluator, or any other form on our site, we collect the information you provide,
            including your name, email address, phone number, and details about your legal situation.
          </li>
          <li>
            <strong>Usage data:</strong> We may automatically collect certain information when you
            visit our site, including your IP address, browser type, pages visited, and time spent
            on pages, through cookies and similar tracking technologies.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Connect you with attorneys in our referral network who may be able to assist with your legal matter</li>
          <li>Respond to your inquiries and provide customer service</li>
          <li>Improve our website and services</li>
          <li>Send you information about our services, if you have consented to receive such communications</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We may share your information with attorneys and law firms in our referral network when
          you request a free case evaluation or attorney connection. By submitting your information
          through our forms, you consent to this sharing for the purpose of receiving legal assistance.
        </p>
        <p>
          We do not sell your personal information to third parties for marketing purposes. We may
          share your information with service providers who assist us in operating our website and
          conducting our business, subject to appropriate data protection agreements.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website and
          hold certain information. You can instruct your browser to refuse all cookies or to
          indicate when a cookie is being sent. However, if you do not accept cookies, you may
          not be able to use some portions of our site.
        </p>

        <h2>Third-Party Websites</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices or content of these websites. We encourage you to review the privacy
          policies of any third-party sites you visit.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information. However,
          no method of transmission over the internet or electronic storage is 100% secure. We
          cannot guarantee absolute security of your data.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access personal information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to opt out of marketing communications</li>
        </ul>
        <p>To exercise these rights, please contact us using the information below.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly
          collect personal information from children. If you believe we have inadvertently collected
          information from a minor, please contact us immediately.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes
          by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          Your continued use of our website after any changes constitutes your acceptance of the
          updated Privacy Policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          Top Lawyer Resource<br />
          Email: privacy@toplawyerresource.com<br />
          Website: toplawyerresource.com
        </p>
      </div>
    </div>
  );
}
