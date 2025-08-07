import React from "react";
import Link from "next/link";

const OurStorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              The Archdiocesan Nourishment Center (ANC) was established in 2015
              as a response to the growing hunger and poverty in Davao City. As
              a project of ACLAIM of The Roman Catholic Bishop of Davao, Inc.,
              ANC began with a simple mission: to provide daily meals to
              undernourished children in the city’s most vulnerable communities.
            </p>
            <p className="mb-6">
              From a humble feeding program, ANC has evolved into a holistic,
              faith-rooted initiative addressing not just physical hunger, but
              also education, health, and spiritual needs. With the guidance of
              the ANC Board of Trustees, and the generous support of volunteers,
              donors, and partner organizations, we continue to serve with
              compassion and integrity.
            </p>
            <p className="mb-6">
              Today, ANC remains committed to its mission—nourishing lives,
              restoring dignity, and walking with the poor toward a future of
              hope.
            </p>
            <div className="flex gap-4 justify-center mt-8 items-center flex-wrap">
              <Link
                href="/history"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Read More About Our History
              </Link>

              <Link
                href="/programs-and-services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Programs and Services
              </Link>

              <Link
                href="/our-centers"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Our Centers
              </Link>

              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Our Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
