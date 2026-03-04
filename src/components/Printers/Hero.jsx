import React from "react";
import { FadeIn, SlideInUp } from "../../utils/animations.jsx";

const Hero = () => {
  return (
    <div className="relative w-full h-[660px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(178.77deg, rgba(255, 255, 255, 0) 1.05%, #FFFFFF 98.96%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/herobg.png')`,
        }}
      >
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>

        {/* Blur effect background */}
        <div className="absolute w-[286px] h-[286px] left-1/2 top-[-143px] transform -translate-x-1/2 bg-[#ACACAC] rounded-full filter blur-[250px]"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-[92px] pt-[100px]">
        <div className="flex flex-col items-center gap-[30px] w-full max-w-[1256px] text-center">
          {/* Main Heading */}
          <FadeIn delay={0.3} duration={0.8}>
            <h1 className="w-full font-outfit font-semibold text-title-mobile md:text-title leading-[106.2%] text-center tracking-[-0.02em] capitalize text-[#0D192D]">
              Tvasta's 3D Printers
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.6} duration={0.8}>
            <p className="max-w-[1086px] font-outfit font-semibold text-card-mobile md:text-description leading-[170%] text-center tracking-[-0.02em] text-[#0D192D]">
              Purpose-built for resilient, rapid, and scalable infrastructure
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
