import React from 'react';
import { PageTransition } from '../../utils/animations.jsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Hero, ExploreBuilds, WhyChooseTvasta, BuildTogether } from './index';

const ProjectsPage = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Hero />
        
        <div className="flex flex-col items-center gap-[80px] sm:gap-[90px] md:gap-[100px] lg:gap-[110px] xl:gap-[120px] w-full py-0">
          <ExploreBuilds />
          <WhyChooseTvasta />
          <BuildTogether />
        </div>
        
        {/* Spacing before footer */}
        <div className="w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px]"></div>
      </div>
      
      <Footer />
    </PageTransition>
  );
};

export default ProjectsPage;
