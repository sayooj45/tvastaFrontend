import React from "react";
import { FadeIn, SlideInUp } from "../../utils/animations.jsx";

const RoboticDescription = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px]">
      <div className="flex flex-col items-center gap-[40px] w-full max-w-[1280px] mx-auto">
        {/* Image Section */}
        <SlideInUp delay={0.2} duration={0.8}>
          <div className="relative w-full md:w-[1200px] h-[300px] md:h-[450px] lg:h-[500px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)]">
            <img
              src="/images/robotic.png"
              alt="Robotic-based 3D Printer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </SlideInUp>

        {/* Description Text */}
        <FadeIn delay={0.4} duration={0.8}>
          <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-center text-[#1D3357] tracking-[-0.02em] max-w-[1180px]">
            Tvasta’s robotic arm-based 3D printers bring freedom of movement,
            exceptional control, and architectural precision to every build.
            Designed for versatility, these systems are ideal for compact
            setups, organic forms, and intricate surface detailing.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default RoboticDescription;
