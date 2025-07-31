import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms and Conditions"
        description="Read ANC Davao's terms and conditions for using our website and services."
        keywords="terms and conditions, terms of service, legal, ANC Davao, website usage"
      />
      <PageHeader
        title="Terms and Conditions"
        subtitle="Please read carefully before using our services."
        backgroundImage="https://cdn.ancdavao.com/placeholder1.jpg=terms"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using the ANC Davao website and services, you
              agree to be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, you must not use our website
              or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Use of Website
            </h2>
            <p className="mb-4">
              This website is provided for informational and charitable
              purposes. You agree to use the website only for lawful purposes
              and in a way that does not infringe the rights of, restrict, or
              inhibit anyone else&apos;s use and enjoyment of the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. Donations
            </h2>
            <p className="mb-4">
              All donations made through the website are voluntary and
              non-refundable. We are grateful for your support and commit to
              using your donations responsibly to further our mission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              4. Intellectual Property
            </h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of ANC Davao or its content
              suppliers and is protected by intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              5. Limitation of Liability
            </h2>
            <p className="mb-4">
              ANC Davao will not be liable for any loss or damage arising from
              your use of this website or from any information contained on it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              6. Links to Third-Party Websites
            </h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. These links
              are provided for your convenience only, and we do not endorse the
              content of these sites. We are not responsible for the privacy
              practices or the content of such websites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              7. Changes to Terms and Conditions
            </h2>
            <p className="mb-4">
              We reserve the right to amend these Terms and Conditions at any
              time. Your continued use of the website after any such changes
              constitutes your acceptance of the new Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              8. Governing Law
            </h2>
            <p className="mb-4">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the Philippines.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              9. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us at info@ancdavao.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
