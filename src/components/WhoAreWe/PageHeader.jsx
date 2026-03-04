import React from 'react';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const PageHeader = () => {
  return (
    <div className="relative w-full h-[660px] bg-white overflow-hidden">
      {/* Background Pattern - Using herobg.png as specified */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/herobg.png')" }}
      />
      
      {/* Blurred Background Ellipse */}
      <div 
        className="absolute w-[286px] h-[286px] left-1/2 transform -translate-x-1/2 -top-[143px] bg-[#ACACAC] rounded-full"
        style={{ filter: 'blur(250px)' }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'linear-gradient(178.77deg, rgba(255, 255, 255, 0) 1.05%, #FFFFFF 98.96%)'
        }}
      />
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 z-10">
        <FadeIn 
          className="flex flex-col items-center gap-[30px] w-full max-w-[1256px] h-[128px]"
          delay={0.2}
        >
          {/* Main Title */}
          <SlideInUp delay={0.3}>
            <h1 className="w-full max-w-[1256px] h-[57px] font-outfit font-semibold text-title-mobile md:text-title text-center tracking-[-0.02em] capitalize text-[#0D192D]">
              Who We Are
            </h1>
          </SlideInUp>
          
          {/* Subtitle */}
          <SlideInUp delay={0.5}>
            <p className="w-full max-w-[1086px] h-[41px] font-outfit font-semibold text-card-mobile md:text-description text-center tracking-[-0.02em] text-[#1D3357]">
              Automation-led 3D printing for the future of sustainable construction
            </p>
          </SlideInUp>
        </FadeIn>
      </div>
    </div>
  );
};

export default PageHeader;
