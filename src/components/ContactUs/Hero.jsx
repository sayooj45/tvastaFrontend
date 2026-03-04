import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';

const Hero = () => {
  return (
    <section 
      className="relative w-full h-[660px] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/herobg.png')`,
      }}
    >
      {/* Background Ellipse Blur */}
      <div className="absolute top-[-143px] left-1/2 transform -translate-x-1/2 w-[286px] h-[286px] bg-[#ACACAC] rounded-full blur-[250px]" />
      
      {/* Background Overlay - Gradient */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(178.77deg, rgba(255, 255, 255, 0) 1.05%, #FFFFFF 98.96%)'
        }}
      />

      {/* Content Container - Perfectly Centered */}
      <div className="relative z-10 w-full max-w-[1256px] mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-[30px] text-center">
          {/* Main Title */}
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="text-title-mobile md:text-title font-semibold leading-[106.2%] text-[#0D192D] tracking-[-0.02em] capitalize">
              Contact Us
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-card-mobile md:text-description font-semibold leading-[170%] text-[#0D192D] tracking-[-0.02em] max-w-[1086px] mx-auto">
              Experience the Future of Construction
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;