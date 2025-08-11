import React from "react";

interface MapProps {
  title: string;
  src: string;
}

export const Map: React.FC<MapProps> = ({ title, src }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 h-64">
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};
