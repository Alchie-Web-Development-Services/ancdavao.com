import React from 'react';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface GoogleSignInButtonProps {
  // eslint-disable-next-line no-unused-vars
  onError: (message: string) => void;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onError }) => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/my/account');
    } catch (err: any) {
      onError(err.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
