import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import { FaCheckCircle } from "react-icons/fa";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  howToJoin: string[];
}

const mockPrograms: Program[] = [
  {
    id: 1,
    title: "Feeding Program",
    description:
      "Providing nutritious meals to underprivileged children in Davao City to combat malnutrition and hunger.",
    image: "https://picsum.photos/1200/800?random=feeding",
    fullDescription: `
      <p class="mb-4">Our Feeding Program is at the heart of our mission to combat malnutrition among underprivileged children in Davao City. We believe that proper nutrition is fundamental for a child's physical and cognitive development, enabling them to learn, play, and grow.</p>
      <p class="mb-4">Through this program, we provide daily nutritious meals to hundreds of children in various communities and schools. Our meals are carefully planned to ensure they meet the dietary needs of growing children, providing essential vitamins and minerals.</p>
      <p>Beyond just providing food, the program also aims to educate parents and guardians on healthy eating habits and food preparation, fostering a sustainable approach to nutrition within families.</p>
    `,
    benefits: [
      "Improved physical health and growth",
      "Enhanced cognitive development and academic performance",
      "Reduced instances of illness and disease",
      "Increased school attendance and participation",
    ],
    howToJoin: [
      "Identify eligible children in target communities.",
      "Conduct health assessments to determine nutritional status.",
      "Enroll children in the daily feeding program.",
      "Monitor progress and provide ongoing support.",
    ],
  },
  {
    id: 2,
    title: "Education Support",
    description:
      "Scholarships, school supplies, and educational resources for children in need to ensure access to quality education.",
    image: "https://picsum.photos/1200/800?random=education",
    fullDescription: `
      <p class="mb-4">Our Education Support program is designed to break down barriers to learning for children from low-income families. We understand that education is a powerful catalyst for change, offering a pathway out of poverty and into a future filled with opportunities.</p>
      <p class="mb-4">We provide comprehensive support that includes scholarships to cover tuition fees, provision of essential school supplies, and access to learning resources. We also facilitate tutoring and mentorship programs to ensure academic success.</p>
      <p>Our goal is to empower children with the knowledge and skills they need to excel in school, pursue higher education, and ultimately achieve their full potential.</p>
    `,
    benefits: [
      "Access to quality education",
      "Reduced financial burden on families",
      "Improved academic performance",
      "Increased opportunities for higher education and employment",
    ],
    howToJoin: [
      "Apply for scholarship through our online portal or community centers.",
      "Submit required academic and financial documents.",
      "Participate in interviews and assessments.",
      "Receive ongoing academic and mentorship support.",
    ],
  },
  {
    id: 3,
    title: "Youth Development",
    description:
      "Programs focused on leadership, skills training, and character development for young people.",
    image: "https://picsum.photos/1200/800?random=youth",
    fullDescription: `
      <p class="mb-4">The Youth Development program focuses on nurturing the next generation of leaders and responsible citizens. We provide a safe and supportive environment where young people can develop essential life skills, explore their talents, and build strong character.</p>
      <p class="mb-4">Our initiatives include leadership workshops, vocational skills training, sports and arts programs, and community service opportunities. We aim to equip youth with the tools they need to make positive choices, overcome challenges, and contribute meaningfully to society.</p>
      <p>By investing in youth, we are fostering a generation that is resilient, compassionate, and ready to lead positive change in their communities.</p>
    `,
    benefits: [
      "Enhanced leadership and communication skills",
      "Development of vocational and life skills",
      "Improved self-esteem and confidence",
      "Increased civic engagement and social responsibility",
    ],
    howToJoin: [
      "Attend orientation sessions for interested youth.",
      "Participate in various workshops and training programs.",
      "Engage in community service projects.",
      "Join youth leadership councils and initiatives.",
    ],
  },
  {
    id: 4,
    title: "Healthcare Initiative",
    description:
      "Medical missions, health education, and access to healthcare services for underserved communities.",
    image: "https://picsum.photos/1200/800?random=healthcare",
    fullDescription: `
      <p class="mb-4">Our Healthcare Initiative is dedicated to providing essential medical services and health education to underserved communities. Many individuals in these areas lack access to basic healthcare, leading to preventable illnesses and complications.</p>
      <p class="mb-4">We organize regular medical missions, bringing volunteer doctors, nurses, and medical professionals directly to communities in need. Services include free medical check-ups, dental services, eye care, and distribution of essential medicines.</p>
      <p>Beyond immediate treatment, we also conduct health awareness campaigns to promote preventive care, hygiene, and healthy lifestyle choices, empowering communities to take charge of their own health.</p>
    `,
    benefits: [
      "Access to free medical and dental services",
      "Improved community health and well-being",
      "Increased awareness of preventive healthcare practices",
      "Early detection and treatment of common illnesses",
    ],
    howToJoin: [
      "Attend scheduled medical missions in your community.",
      "Participate in health education workshops.",
      "Utilize free medical consultations and screenings.",
      "Follow up on recommended treatments and referrals.",
    ],
  },
  {
    id: 5,
    title: "Community Development",
    description:
      "Projects focused on sustainable community development, infrastructure, and livelihood programs.",
    image: "https://picsum.photos/1200/800?random=community",
    fullDescription: `
      <p class="mb-4">Our Community Development program aims to empower communities to become self-sufficient and resilient. We work hand-in-hand with local residents to identify their needs and implement sustainable projects that improve their quality of life.</p>
      <p class="mb-4">This includes infrastructure development such as water systems and community centers, as well as livelihood programs that provide training and resources for income-generating activities. We believe in fostering local ownership and capacity-building to ensure long-term impact.</p>
      <p>By investing in community-led initiatives, we are not just building structures; we are building stronger, more vibrant communities where everyone has the opportunity to thrive.</p>
    `,
    benefits: [
      "Improved access to basic services and infrastructure",
      "Increased income and economic opportunities",
      "Enhanced community participation and leadership",
      "Sustainable solutions for local challenges",
    ],
    howToJoin: [
      "Participate in community needs assessments and planning sessions.",
      "Engage in livelihood training programs.",
      "Contribute to community projects and initiatives.",
      "Join community leadership and management committees.",
    ],
  },
];

interface ProgramDetailProps {
  program: Program;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ program }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Program Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={program.title}
        description={program.description}
        keywords={`${program.title.toLowerCase()}, ${program.description.toLowerCase().split(" ").slice(0, 5).join(", ")}, ANC Davao program, charity, community development`}
        ogImage={program.image}
      />
      <PageHeader
        title={program.title}
        subtitle="Learn more about this program and its impact."
        backgroundImage={program.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={program.image}
              alt={program.title}
              width={1200}
              height={675}
              className="w-full rounded-lg shadow-md mb-8"
            />

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {program.title}
            </h2>
            <p className="text-gray-700 text-lg mb-6">{program.description}</p>

            <div
              className="prose prose-primary max-w-none text-gray-700 mb-8"
              dangerouslySetInnerHTML={{ __html: program.fullDescription }}
            />

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Benefits of this Program:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="mr-2 mt-1 text-primary-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How to Join/Participate:
              </h3>
              <ul className="list-decimal list-inside space-y-2 text-gray-700">
                {program.howToJoin.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/programs-and-services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Back to All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockPrograms.map((program) => ({
    params: { id: program.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ProgramDetailProps> = async ({
  params,
}) => {
  const program = mockPrograms.find((p) => p.id.toString() === params?.id);

  if (!program) {
    return {
      notFound: true,
    };
  }

  return {
    props: { program },
  };
};

export default ProgramDetail;
