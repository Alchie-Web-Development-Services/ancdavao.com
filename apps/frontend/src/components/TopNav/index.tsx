import React from "react";

const TopNav: React.FC = () => {
  return (
    <div className="bg-red-700 text-white text-sm py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-1"></i>
            <span>California, TX 70240</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope mr-1"></i>
            <span>Info@Gmail.Com</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone-alt mr-1"></i>
            <span>+123 456 7890</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300" aria-label="facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="dribbble">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="pinterest">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
