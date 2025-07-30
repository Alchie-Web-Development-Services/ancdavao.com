import React from "react";
import { Link } from "react-router-dom";

const CauseCard: React.FC<{
  imgSrc: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
}> = ({ imgSrc, title, description, raised, goal }) => {
  const progress = (raised / goal) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
        <p className="text-neutral-600 text-sm mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium text-neutral-700 mb-1">
            <span>Raised: ${raised.toLocaleString()}</span>
            <span>Goal: ${goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2.5">
            <div
              className="bg-primary-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <Link
          to="/donate"
          className="w-full block text-center bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors duration-300"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

const CausesSection: React.FC = () => {
  const causes = [
    {
      imgSrc: "https://source.unsplash.com/random/800x600/?children,poor",
      title: "Support for Children",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
      raised: 25000,
      goal: 50000,
    },
    {
      imgSrc: "https://source.unsplash.com/random/800x600/?syria,children",
      title: "Food for Syrian",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
      raised: 37500,
      goal: 60000,
    },
    {
      imgSrc: "https://source.unsplash.com/random/800x600/?uganda,education",
      title: "Uganda Education",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
      raised: 42000,
      goal: 70000,
    },
    {
      imgSrc: "https://source.unsplash.com/random/800x600/?capetown,orphanage",
      title: "Capetown Orphanage",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
      raised: 15000,
      goal: 30000,
    },
    {
      imgSrc: "https://source.unsplash.com/random/800x600/?kids,playground",
      title: "Kids Playground",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
      raised: 60000,
      goal: 90000,
    },
    {
      imgSrc: "https://source.unsplash.com/random/800x600/?homeless",
      title: "Home for Homeless",
      description:
        "Her engrossed deficient northward and neglected favourite newspaper. But use peculiar produced concerns ten.",
      raised: 70000,
      goal: 100000,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Popular Causes
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
            Slide an hope of body. Any nay shyness article matters own removal
            nothing his forming. Gay own additions education satisfied the
            perpetual. If he cause manor happy. Without farther she exposed saw
            man led. Along on happy could cease green oh.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <CauseCard key={index} {...cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
