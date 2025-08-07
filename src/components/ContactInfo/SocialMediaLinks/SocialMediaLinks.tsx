import React from "react";

interface SocialLink {
  icon: React.ReactNode;
  name: string;
  url: string;
}

interface SocialMediaLinksProps {
  socialLinks: SocialLink[];
}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  socialLinks,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-200 transition-colors"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
