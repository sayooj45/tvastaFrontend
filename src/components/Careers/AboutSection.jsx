import React from 'react';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center gap-[25px] w-full max-w-[1280px] px-4 md:px-0">
      {/* Top Text Content */}
      <FadeIn delay={0.2} duration={0.8}>
        <div className="flex flex-col items-center gap-[10px] w-full">
          <p className="w-full max-w-[1200px] font-outfit font-normal text-card-mobile md:text-description text-center text-[#0D192D] mx-auto">
            At Tvasta, we're not just building structures; we're redefining how the world builds. As pioneers in 3D printing technology for construction, our work spans housing, infrastructure, disaster resilience, and sustainable innovation.
          </p>
        </div>
      </FadeIn>

      {/* Image Container */}
      <SlideInUp delay={0.4} duration={0.8}>
        <div className="relative w-full max-w-[1200px] mx-auto">
          <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-[12px] overflow-hidden shadow-lg">
            <img 
              src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/careers/careermain.jpg"
              alt="Tvasta team working on 3D construction technology"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                console.error('Career main image failed to load:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </SlideInUp>

      {/* Bottom Text Content */}
      <FadeIn delay={0.6} duration={0.8}>
        <div className="flex flex-col items-center gap-[10px] w-full">
          <p className="w-full max-w-[1200px] font-outfit font-normal text-card-mobile md:text-description text-center text-[#0D192D] mx-auto">
            Whether you're an engineer, designer, researcher, or creator, if you're driven by curiosity and a desire to make real-world impact, there's a place for you here.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutSection;