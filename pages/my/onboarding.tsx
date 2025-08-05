import React from 'react';
import OnboardingForm from '@/components/OnboardingForm';
import { getPrivateLayout } from '@/components/PrivateLayout';
import { NextPageWithLayout } from 'pages/_app';

const Onboarding: NextPageWithLayout = () => {
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <OnboardingForm />
    </div>
  );
};

Onboarding.getLayout = getPrivateLayout;

export default Onboarding;
