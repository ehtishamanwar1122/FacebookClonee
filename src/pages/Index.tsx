
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import RightSidebar from '@/components/RightSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-facebook-grey">
      <Header />
      <div className="flex justify-center">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;
