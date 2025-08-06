import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface GoogleSignInButtonProps {
  onError: (_message: string) => void;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onError }) => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/my/account');
    } catch (err: unknown) {
      onError((err as Error).message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2 transition duration-200"
    >
      <FaGoogle className="text-white" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default GoogleSignInButton;
