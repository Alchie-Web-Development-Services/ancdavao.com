import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  overlayOpacity?: number;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "https://picsum.photos/1920/1080?random",
  overlayOpacity = 0.3,
  className = "",
}) => {
  return (
    <div
      className={`relative py-20 md:py-28 px-4 flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10"
        aria-hidden="true"
      />
    </div>
  );
};

export default PageHeader;
