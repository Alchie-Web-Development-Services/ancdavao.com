import React from "react";

interface StatItem {
  number: string;
  label: string;
}

interface ImpactStatsProps {
  stats: StatItem[];
  className?: string;
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ stats, className = "" }) => {
  return (
    <section className={`py-16 bg-primary-700 text-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
