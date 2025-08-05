import React from 'react';

interface MyAccountHeaderProps {
  onLogout: () => void;
}

const MyAccountHeader: React.FC<MyAccountHeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="flex items-center justify-between container mx-auto">
        <h1 className="text-xl font-semibold">My Account</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default MyAccountHeader;
