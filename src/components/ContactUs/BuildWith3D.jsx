import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';

const BuildWith3D = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center pt-[80px] md:pt-[120px] pb-[40px] md:pb-[60px] bg-white">
      <div className="flex flex-col items-center gap-0 w-full max-w-[1441px] mx-auto px-4 md:px-8">
        <FadeIn delay={0.2} duration={0.8}>
          <div className="flex flex-col justify-center items-center gap-[20px] w-full text-center">
            {/* Main Heading */}
            <SlideInUp delay={0.3} duration={0.6}>
              <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[125%] text-[#0D192D] max-w-[1281px]">
                Let's build with 3D.
              </h2>
            </SlideInUp>

            {/* Subheading */}
            <SlideInUp delay={0.4} duration={0.6}>
              <p className="text-card-mobile md:text-description font-medium leading-[125%] capitalize text-[#1D3357] max-w-[1035px]">
                Printers, Projects, Or Partnerships - We're Ready When You Are
              </p>
            </SlideInUp>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BuildWith3D;