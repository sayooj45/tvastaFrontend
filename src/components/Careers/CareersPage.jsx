import React from 'react';
import { PageTransition } from '../../utils/animations.jsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Hero, AboutSection, WhyJoinTvasta, CareerForm, NotFindRole } from './index';

const CareersPage = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Hero />
        
        <div className="flex flex-col items-center gap-[120px] w-full py-[60px]">
          <AboutSection />
          <WhyJoinTvasta />
          <CareerForm />
          <NotFindRole />
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default CareersPage;