import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { getUserProfile, createUserProfile } from '@/services/userService';
import { useRouter } from 'next/router';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  onboarded: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userProfile = await getUserProfile(currentUser.uid);
        if (userProfile) {
          setOnboarded(userProfile.onboarded || false);
          if (!userProfile.onboarded && router.pathname !== '/my/onboarding') {
            router.push('/my/onboarding');
          }
        } else {
          // Create a basic profile if it doesn't exist
          await createUserProfile(currentUser.uid, { email: currentUser.email || '', onboarded: false });
          setOnboarded(false);
          if (router.pathname !== '/my/onboarding') {
            router.push('/my/onboarding');
          }
        }
      } else {
        setUser(null);
        setOnboarded(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, loading, onboarded }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
