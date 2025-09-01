import React from "react";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const ThankYou: React.FC = () => {
  return (
    <div>
      <SEO
        title="Thank You for Your Donation"
        description="Thank you for your donation to ANC Davao. Your support helps transform lives in Davao."
        keywords="donate, ANC Davao, charity, support, make a difference, online donation, humanitarian, Philippines"
      />
      <PageHeader
        title="Thank You for Your Donation"
        subtitle="You are restoring dignity and planting seeds of hope."
        backgroundImage="https://cdn.ancdavao.com/page-header.jpg"
      />

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-20 w-full my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Thank You for Sharing Christ’s Love!
        </h2>

        <p className="mb-4">
          Your generous gift to the Archdiocesan Nourishment Center (ANC) is
          more than a donation — it is a meal for a hungry child, a step toward
          healing, and a sign of hope for families in our most vulnerable
          communities.
        </p>

        <p className="mb-4">
          Since 2014, ANC has worked to nourish lives, restore dignity, and walk
          with the poor, guided by our mission to serve with compassion and
          faith. Your support strengthens this mission and helps us care not
          only for the body but also for the mind and spirit.
        </p>

        <p className="mb-4">
          &quot;For I was hungry and you gave me food, I was thirsty and you
          gave me drink, I was a stranger and you welcomed me.&quot; – Matthew
          25:35
        </p>

        <p className="mb-4">
          We are deeply grateful for your generosity. Be assured that you and
          your loved ones will be remembered in our prayers and in the Holy
          Masses celebrated for our benefactors.
        </p>

        <p className="mb-4">
          May the Lord bless you abundantly for being His instrument of mercy
          and love.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/about"
            className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300 text-lg mt-4"
          >
            Learn More About Our Mission
          </Link>
          <Link
            href="/donate"
            className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300 text-lg mt-4"
          >
            Make Another Donation
          </Link>
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default ThankYou;
