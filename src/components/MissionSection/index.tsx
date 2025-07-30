import React from "react";
import { FaBook, FaHandsHelping, FaHeartbeat, FaTint } from "react-icons/fa";

const MissionSection: React.FC = () => {
  const missions = [
    {
      icon: <FaBook size={40} />,
      title: "Education",
      description:
        "Continual say suspicion provision you neglected sir curiously smiling simplicity and therefore increasing led day sympathy yet.",
    },
    {
      icon: <FaHandsHelping size={40} />,
      title: "Rice for Life",
      description:
        "Preference imprudence connected to remarkably in on. Taken now you him trees tears any. Her object giving and sister except oppose.",
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Health",
      description:
        "Common indeed garden you his ladies out yet. Preference imprudence connected to on. Taken now you him trees tears any.",
    },
    {
      icon: <FaTint size={40} />,
      title: "Water",
      description:
        "Pianoforte to reasonably is on. Taken now you him trees tears any. Her object giving.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://source.unsplash.com/random/800x600/?volunteer,community"
              alt="Volunteers working"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              What We Are Doing
            </h2>
            <p className="text-neutral-600 mb-8">
              Continual say suspicion provision you neglected sir curiously
              smiling simplicity and therefore increasing led day sympathies
              yet. General windows effects not are drawing man garrets. Common
              indeed garden you his ladies out yet. Preference imprudence
              contrasted to remarkably in on. Taken now you him trees tears any.
              Her object giving and sister except oppose.
            </p>
            <div className="grid grid-cols-2 gap-8">
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
