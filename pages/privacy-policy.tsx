import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy"
        description="Learn about ANC Davao's privacy policy regarding data collection, usage, and protection."
        keywords="privacy policy, data protection, data privacy, ANC Davao, personal information"
      />
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us."
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg=privacy"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              This Privacy Policy describes how ANC Davao collects, uses, and
              protects your personal information when you visit our website or
              interact with our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us when you make a donation, sign up for our newsletter,
              volunteer, or contact us. This information may include your name,
              email address, phone number, and mailing address.
            </p>
            <p className="mb-4">
              We also collect non-personal information automatically as you
              navigate through the site, such as your IP address, browser type,
              and operating system.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Process your donations and send you receipts.</li>
              <li>Send you newsletters and updates about our work.</li>
              <li>Respond to your inquiries and provide support.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted third-party
              service providers who assist us in operating our website,
              conducting our business, or serving our users, as long as those
              parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              5. Data Security
            </h2>
            <p className="mb-4">
              We implement a variety of security measures to maintain the safety
              of your personal information when you place a donation or enter,
              submit, or access your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              6. Your Rights
            </h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal
              information. You may also opt out of receiving communications from
              us at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              7. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              8. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at info@ancdavao.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
