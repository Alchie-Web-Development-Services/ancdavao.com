import React from 'react';
import { useAuth } from '@/context/AuthContext';

const AuthStatus: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading authentication status...</div>;
  }

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default AuthStatus;
