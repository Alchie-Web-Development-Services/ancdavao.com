import React from "react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <svg
          className="h-12 w-12 text-primary-400"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
        </svg>
      </div>
      <blockquote className="mb-6">
        <p className="text-lg text-gray-700">&quot;{quote}&quot;</p>
      </blockquote>
      <div className="flex items-center">
        {avatar && (
          <div className="mr-4">
            <Image
              className="h-12 w-12 rounded-full"
              src={avatar}
              alt={author}
              width={100}
              height={100}
            />
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
