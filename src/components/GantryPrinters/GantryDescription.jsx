import React from "react";
import { FadeIn, SlideInUp } from "../../utils/animations.jsx";

const GantryDescription = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px]">
      <div className="flex flex-col items-center gap-[40px] w-full max-w-[1280px] mx-auto">
        {/* Image Section */}
        <SlideInUp delay={0.2} duration={0.8}>
          <div className="relative w-full md:w-[1200px] h-[300px] md:h-[400px] lg:h-[450px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)]">
            <img
              src="/images/Rectangle 34625215.png"
              alt="Gantry-based 3D Printer"
              className="w-full h-full object-cover"
            />
          </div>
        </SlideInUp>

        {/* Description Text */}
        <FadeIn delay={0.4} duration={0.8}>
          <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-center text-[#1D3357] tracking-[-0.02em] max-w-[1150px]">
            Tvasta's gantry-based 3D printers are engineered for everything from
            R&D trials to full-scale onsite construction. With modular
            configurations and flexible print envelopes, these systems adapt to
            the demands of housing, infrastructure, and rapid-deployment
            scenarios.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default GantryDescription;
