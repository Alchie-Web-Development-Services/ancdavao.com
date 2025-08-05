import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import { useAuth } from '@/context/AuthContext';
import Loading from '@/components/Loading';

const ForgotPasswordPage: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/my/account');
    }
  }, [user, loading, router]);

  if (loading && !user) {
    return <Loading />;
  }

  return (
    <div className="min-h-fit flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <ForgotPasswordForm />
        <div className="text-center">
          <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
