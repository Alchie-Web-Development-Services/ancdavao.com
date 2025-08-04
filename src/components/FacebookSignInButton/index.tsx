import React from 'react';
import { useRouter } from 'next/router';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { FaFacebook } from 'react-icons/fa';

interface FacebookSignInButtonProps {
  // eslint-disable-next-line no-unused-vars
  onError: (_message: string) => void;
}

const FacebookSignInButton: React.FC<FacebookSignInButtonProps> = ({ onError }) => {
  const router = useRouter();

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/my/account');
    } catch (err: any) {
      onError(err.message);
    }
  };

  return (
    <button
      onClick={handleFacebookLogin}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2 transition duration-200 mt-4"
    >
      <FaFacebook className="text-white" />
      <span>Sign in with Facebook</span>
    </button>
  );
};

export default FacebookSignInButton;
