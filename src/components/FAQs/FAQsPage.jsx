import React from 'react';
import { PageTransition } from '../../utils/animations.jsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { 
  Hero, 
  FAQsSection, 
  ContactCTA 
} from './index';

const FAQsPage = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white overflow-x-hidden"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1'
      }}
    >
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        <Hero />
        
        <div className="flex flex-col items-center gap-[60px] md:gap-[80px] lg:gap-[120px] w-full py-0 mt-[26px]">
          <FAQsSection />
          <ContactCTA />
        </div>
        
        {/* Spacing before footer */}
        <div className="w-full h-[60px] md:h-[80px] lg:h-[120px]"></div>
      </div>
      
      <Footer />
    </PageTransition>
  );
};

export default FAQsPage;