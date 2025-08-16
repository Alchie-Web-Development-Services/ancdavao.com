import React from "react";
import Image from "next/image";
import { FaBook, FaHeartbeat, FaChurch, FaChild } from "react-icons/fa";

const MissionSection: React.FC = () => {
  const missions = [
    {
      icon: <FaChild size={40} />,
      title: "Rice for Life",
      description:
        "Through our flagship feeding program, we provide regular nutritious meals to undernourished children and vulnerable communities. Every meal is a step toward health, stability, and a chance to grow with dignity.",
    },
    {
      icon: <FaBook size={40} />,
      title: "Education",
      description:
        "We believe that education is a powerful path out of poverty. ANC supports children and families through values-based learning, skills development, and access to school resources—empowering them to build a brighter, self-sustaining future.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Health",
      description:
        "Health is foundational to human dignity. We promote wellness by offering basic medical care, hygiene support, and health education, especially for children and families in underserved communities.",
    },
    {
      icon: <FaChurch size={40} />,
      title: "Spiritual",
      description:
        "More than meeting physical needs, we care for the soul. Through faith-based formation, prayer, and spiritual guidance, we walk with individuals and families toward deeper purpose, healing, and a stronger relationship with God.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            <Image
              src="https://cdn.ancdavao.com/gp-1.jpg"
              alt="Volunteers working"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              What We Are Doing
            </h2>
            <p className="text-neutral-600 mb-8">
              At the Archdiocesan Nourishment Center, we are committed to ending
              the cycle of poverty in Davao City through holistic, faith-driven
              initiatives. Grounded in love and guided by compassion, our
              programs serve the body, mind, and spirit—nurturing dignity and
              hope in every life we touch.
            </p>
            <div className="grid xl:grid-cols-2 gap-8">
              {missions.map((mission, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-primary-600 bg-primary-50 p-4 rounded-full">
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                      {mission.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {mission.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
