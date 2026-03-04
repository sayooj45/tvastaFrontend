import React from "react";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const Outcome = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px] bg-white">
      <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[40px] lg:gap-[50px] w-full max-w-[1320px] mx-auto">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <SlideInLeft delay={0.2} duration={0.8}>
            <AnimatedCard
              className="relative w-full h-[280px] md:h-[320px] lg:h-[360px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
              whileHover={{
                y: -5,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="/images/outcome.jpg"
                alt="Outcome"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </AnimatedCard>
          </SlideInLeft>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-[20px] md:gap-[24px] w-full md:w-1/2">
          <SlideInRight delay={0.3} duration={0.8}>
            <h2 className="text-title-mobile md:text-title font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
              Outcome
            </h2>
          </SlideInRight>

          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-card-mobile md:text-description font-normal leading-[1.7] text-[#4A4A4A] tracking-[-0.02em]">
              Completed design, printing, and on-site assembly in just 7 days.
              The project demonstrated the scalability of 3D printing for smart
              urban infrastructure, while setting a precedent for circular
              construction and design-led public utilities.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Outcome;
