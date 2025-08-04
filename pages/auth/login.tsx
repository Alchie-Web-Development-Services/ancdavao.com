import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '@/components/LoginForm';

import { useAuth } from '@/context/AuthContext';

const LoginPage: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/my/account');
    }
  }, [user, loading, router]);

  if (loading || user) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      
      <LoginForm />
    </div>
  );
};

export default LoginPage;
