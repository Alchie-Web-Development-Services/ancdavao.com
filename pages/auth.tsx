import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '@/components/AuthForm';
import AuthStatus from '@/components/AuthStatus';
import { useAuth } from '@/context/AuthContext';

const AuthPage: React.FC = () => {
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
      <h1 className="text-3xl font-bold text-center mb-8">Authentication</h1>
      <AuthStatus />
      <AuthForm />
    </div>
  );
};

export default AuthPage;
