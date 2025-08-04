import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '@/components/RegisterForm';

import { useAuth } from '@/context/AuthContext';

const RegisterPage: React.FC = () => {
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
      <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
      
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
