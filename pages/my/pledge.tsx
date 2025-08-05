import React from 'react';
import MyAccountSidebar from '@/components/MyAccountSidebar';
import PledgeContent from '@/components/PledgeContent';

const MyPledgePage = () => {
  return (
    <MyAccountSidebar fullName="John Doe" email="john.doe@example.com">
      <PledgeContent />
    </MyAccountSidebar>
  );
};

export default MyPledgePage;