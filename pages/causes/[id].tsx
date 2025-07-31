import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";

interface Cause {
  id: number;
  title: string;
  description: string;
  raised: number;
  goal: number;
  image: string;
  fullDescription: string;
}

const mockCauses: Cause[] = [
  {
    id: 1,
    title: "Education for All",
    description:
      "Providing access to quality education for underprivileged children.",
    raised: 75000,
    goal: 100000,
    image: "https://picsum.photos/1200/800?random=1",
    fullDescription: `
      <p class="mb-4">Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future. Our 'Education for All' program focuses on providing underprivileged children with access to quality education, from early childhood to higher learning.</p>
      <p class="mb-4">We believe that every child deserves the opportunity to learn and grow, regardless of their socioeconomic background. Our initiatives include:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Scholarship programs for deserving students.</li>
        <li>Provision of school supplies and learning materials.</li>
        <li>Support for after-school tutoring and mentorship programs.</li>
        <li>Development of safe and conducive learning environments.</li>
      </ul>
      <p>By investing in education, we are not just teaching children; we are nurturing their potential, fostering their dreams, and equipping them with the tools they need to succeed in life and contribute positively to their communities.</p>
    `,
  },
  {
    id: 2,
    title: "Healthcare Access",
    description: "Ensuring basic healthcare services are available to all.",
    raised: 50000,
    goal: 80000,
    image: "https://picsum.photos/1200/800?random=2",
    fullDescription: `
      <p class="mb-4">Access to basic healthcare is a fundamental human right. Our 'Healthcare Access' program aims to provide essential medical services to underserved communities, where healthcare facilities are often scarce or inaccessible.</p>
      <p class="mb-4">We organize regular medical missions, health awareness campaigns, and provide support for medical treatments. Our services include:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Free medical check-ups and consultations.</li>
        <li>Distribution of essential medicines.</li>
        <li>Dental and optical services.</li>
        <li>Health education workshops on hygiene, nutrition, and disease prevention.</li>
      </ul>
      <p>Through these efforts, we strive to improve the overall health and well-being of individuals and families, ensuring that preventable diseases are addressed and that everyone has the chance to live a healthy life.</p>
    `,
  },
  {
    id: 3,
    title: "Food Security",
    description: "Working towards a future where no one goes hungry.",
    raised: 90000,
    goal: 120000,
    image: "https://picsum.photos/1200/800?random=3",
    fullDescription: `
      <p class="mb-4">Food insecurity is a pressing issue in many communities, affecting the most vulnerable populations, especially children. Our 'Food Security' program is dedicated to ensuring that no one in our target communities goes hungry.</p>
      <p class="mb-4">We implement various initiatives to achieve this, including:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Regular feeding programs for children in schools and communities.</li>
        <li>Distribution of food packs to needy families.</li>
        <li>Support for sustainable livelihood projects that promote food production.</li>
        <li>Education on proper nutrition and healthy eating habits.</li>
      </ul>
      <p>By addressing food insecurity, we are not only providing immediate relief but also working towards long-term solutions that empower communities to achieve self-sufficiency and ensure a healthier future for all.</p>
    `,
  },
  {
    id: 4,
    title: "Clean Water Initiative",
    description:
      "Providing clean and safe drinking water to rural communities.",
    raised: 60000,
    goal: 75000,
    image: "https://picsum.photos/1200/800?random=4",
    fullDescription: `
      <p class="mb-4">Access to clean and safe drinking water is crucial for public health and community development. In many rural areas, communities rely on unsafe water sources, leading to waterborne diseases and other health complications.</p>
      <p class="mb-4">Our 'Clean Water Initiative' focuses on providing sustainable access to potable water. Our projects include:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Installation of deep wells and water filtration systems.</li>
        <li>Rehabilitation of existing water sources.</li>
        <li>Training local communities on water source maintenance and sanitation.</li>
        <li>Promoting hygiene practices to prevent waterborne illnesses.</li>
      </ul>
      <p>By ensuring access to clean water, we are significantly improving the health, sanitation, and overall quality of life for thousands of individuals in remote communities.</p>
    `,
  },
];

interface CauseDetailProps {
  cause: Cause;
}

const CauseDetail: React.FC<CauseDetailProps> = ({ cause }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!cause) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Cause Not Found</h1>
      </div>
    );
  }

  const progress = (cause.raised / cause.goal) * 100;

  return (
    <div className="min-h-screen">
      <SEO
        title={cause.title}
        description={cause.description}
        keywords={`${cause.title.toLowerCase()}, ${cause.description.toLowerCase().split(" ").slice(0, 5).join(", ")}, ANC Davao cause, donation, charity`}
        ogImage={cause.image}
      />
      <PageHeader
        title={cause.title}
        subtitle="Learn more about this cause and how you can help."
        backgroundImage={cause.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={cause.image}
              alt={cause.title}
              width={1200}
              height={675}
              className="w-full rounded-lg shadow-md mb-8"
            />

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {cause.title}
            </h2>
            <p className="text-gray-700 text-lg mb-6">{cause.description}</p>

            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
                <span>Raised: ${cause.raised.toLocaleString()}</span>
                <span>Goal: ${cause.goal.toLocaleString()}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div
              className="prose prose-indigo max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: cause.fullDescription }}
            />

            <div className="mt-8 text-center">
              <Link
                href="/causes"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Back to All Causes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockCauses.map((cause) => ({
    params: { id: cause.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CauseDetailProps> = async ({
  params,
}) => {
  const cause = mockCauses.find((c) => c.id.toString() === params?.id);

  if (!cause) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cause },
  };
};

export default CauseDetail;
