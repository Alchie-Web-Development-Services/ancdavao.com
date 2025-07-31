import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import SEO from "@/components/SEO";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
  excerpt: string;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Impact of Education on Child Development",
    author: "Jane Doe",
    date: "July 25, 2025",
    image: "https://cdn.ancdavao.com/placeholder1.jpg?random=1",
    excerpt:
      "Explore how access to quality education shapes the future of children in underserved communities.",
    content: `
      <p class="mb-4">Education is a fundamental human right and a powerful tool for personal and societal development. For children, access to quality education can be a game-changer, breaking cycles of poverty and opening doors to a brighter future.</p>
      <p class="mb-4">In underserved communities, where resources are often scarce, the impact of educational initiatives is even more profound. It provides children with the knowledge, skills, and confidence they need to thrive, not just academically but in all aspects of life.</p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Key Benefits of Education:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Improved cognitive development and critical thinking skills.</li>
        <li>Enhanced social and emotional well-being.</li>
        <li>Increased opportunities for future employment and economic stability.</li>
        <li>Greater civic engagement and community participation.</li>
        <li>Reduced vulnerability to exploitation and abuse.</li>
      </ul>
      <p>At ANC Davao, we believe that every child deserves the chance to learn and grow. Our education programs are designed to provide comprehensive support, from scholarships and school supplies to mentorship and extracurricular activities. By investing in education, we are investing in the future of our communities.</p>
    `,
  },
  {
    id: 2,
    title: "Volunteering: A Path to Personal Growth and Community Impact",
    author: "John Smith",
    date: "July 20, 2025",
    image: "https://cdn.ancdavao.com/placeholder1.jpg?random=2",
    excerpt:
      "Discover the rewarding experiences of our volunteers and how they contribute to our mission.",
    content: `
      <p class="mb-4">Volunteering is a two-way street: it benefits the community, but it also offers immense personal rewards for the volunteer. Many of our volunteers at ANC Davao share stories of how their experiences have enriched their lives, broadened their perspectives, and fostered a deeper sense of purpose.</p>
      <p class="mb-4">Whether it's tutoring children, assisting in feeding programs, or helping with administrative tasks, every contribution makes a tangible difference. Beyond the immediate impact, volunteering builds character, develops new skills, and creates lasting connections.</p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Benefits for Volunteers:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Develop new skills and gain valuable experience.</li>
        <li>Expand your professional and personal network.</li>
        <li>Boost your self-confidence and sense of accomplishment.</li>
        <li>Improve mental and physical health.</li>
        <li>Become an active participant in creating positive change.</li>
      </ul>
      <p>We invite you to explore our volunteer opportunities and become a part of the ANC Davao family. Your time and dedication can transform lives, including your own.</p>
    `,
  },
  {
    id: 3,
    title: "Sustainable Solutions for Clean Water Access",
    author: "Emily White",
    date: "July 15, 2025",
    image: "https://cdn.ancdavao.com/placeholder1.jpg?random=3",
    excerpt:
      "Learn about our initiatives to provide clean and safe drinking water to remote villages.",
    content: `
      <p class="mb-4">Access to clean and safe drinking water is a basic necessity, yet millions around the world still lack it. In many remote villages, water sources are contaminated, leading to widespread health issues and hindering community development.</p>
      <p class="mb-4">ANC Davao is committed to implementing sustainable solutions for clean water access. Our initiatives range from installing water filtration systems and constructing deep wells to educating communities on water sanitation and hygiene practices.</p>
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Approach:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Community-led assessments to identify specific needs.</li>
        <li>Implementation of appropriate and sustainable water technologies.</li>
        <li>Training local community members for maintenance and management.</li>
        <li>Promoting hygiene education to maximize health benefits.</li>
        <li>Partnerships with local government and other NGOs for broader reach.</li>
      </ul>
      <p>By providing clean water, we are not just improving health; we are empowering communities, enabling children to attend school more regularly, and fostering economic growth. Join us in bringing this life-changing resource to those who need it most.</p>
    `,
  },
];

interface BlogPostDetailProps {
  post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Blog Post Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.title.toLowerCase()}, ${post.author.toLowerCase()}, ${post.date.split(",")[1].trim()}, ANC Davao blog, ${post.excerpt.toLowerCase().split(" ").slice(0, 5).join(", ")}`}
        ogImage={post.image}
      />
      <PageHeader
        title={post.title}
        subtitle={`By ${post.author} on ${post.date}`}
        backgroundImage={post.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full rounded-lg shadow-md mb-8"
            />

            <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
              <span className="flex items-center">
                <FaUser className="mr-2 text-primary-600" />
                {post.author}
              </span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2 text-primary-600" />
                {post.date}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h2>
            <div
              className="prose prose-primary max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Back to All Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mockBlogPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPostDetailProps> = async ({
  params,
}) => {
  const post = mockBlogPosts.find((p) => p.id.toString() === params?.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export default BlogPostDetail;
