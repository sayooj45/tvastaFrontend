import React from "react";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const ChallengAndApproach = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px] bg-white">
      <div className="flex flex-col gap-[60px] md:gap-[80px] w-full max-w-[1320px] mx-auto">
        {/* Challenge Section */}
        <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[40px] lg:gap-[50px] w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-[20px] md:gap-[24px] w-full md:w-1/2">
            <SlideInLeft delay={0.2} duration={0.8}>
              <h2 className="text-title-mobile md:text-title font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
                Challenge
              </h2>
            </SlideInLeft>

            <FadeIn delay={0.3} duration={0.8}>
              <p className="text-card-mobile md:text-description font-normal leading-[1.7] text-[#4A4A4A] tracking-[-0.02em]">
                To build an aesthetically striking and environmentally conscious
                urban infrastructure unit within a short time frame, using
                sustainable materials and without compromising durability or
                design appeal.
              </p>
            </FadeIn>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <SlideInRight delay={0.3} duration={0.8}>
              <AnimatedCard
                className="relative w-full h-[280px] md:h-[320px] lg:h-[360px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
                whileHover={{
                  y: -5,
                  boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src="/images/challenge.jpg"
                  alt="Challenge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </AnimatedCard>
            </SlideInRight>
          </div>
        </div>

        {/* Tvasta's Approach Section */}
        <div className="flex flex-col gap-[30px] md:gap-[40px] w-full">
          {/* Heading */}
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-title-mobile md:text-title font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
              Tvasta's Approach
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-card-mobile md:text-description font-normal leading-[1.7] text-[#4A4A4A] tracking-[-0.02em]">
              Deployed modular 3D printing to fabricate India's first 3D-printed
              bus shelter using a concrete mix that included 30% Recycled
              Concrete Aggregates (RCA). The structure was designed with
              curvilinear geometry to maximize ergonomic comfort and
              architectural flexibility. It was also integrated with independent
              solar panels to support energy-efficient operation
            </p>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.4} duration={0.8}>
            <AnimatedCard
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
              whileHover={{
                y: -5,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="/images/approach.jpg"
                alt="Tvasta's Approach"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </AnimatedCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ChallengAndApproach;
