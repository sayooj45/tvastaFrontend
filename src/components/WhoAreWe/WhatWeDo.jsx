import React, { useState } from "react";
import { FadeIn, SlideInUp } from "../../utils/animations.jsx";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center gap-[40px] w-full max-w-[1280px] px-4">
      {/* Title */}
      <FadeIn delay={0.2}>
        <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title leading-[58px] text-[#0D192D] text-center">
          What We Do
        </h2>
      </FadeIn>

      {/* Video Section */}
      <SlideInUp
        delay={0.4}
        className="relative w-full max-w-[1008px] h-[432px]"
      >
        <div className="relative w-full h-full bg-gray-900 rounded-[12px] overflow-hidden">
          {/* Video Background using whatwedo.png */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/wwd.png')",
              backgroundSize: "cover",
            }}
          />
        </div>
      </SlideInUp>

      {/* Description */}
      <FadeIn delay={0.6}>
        <p className="font-outfit font-normal text-card-mobile md:text-card text-center text-[#1D3357] w-full max-w-[900px]">
          We deliver first-principles-based, end-to-end 3D construction
          solutions that redefine building. Every structure we create, from
          shelters to smart pods, is high-quality, low-waste, and future-ready.
        </p>
      </FadeIn>
    </div>
  );
};

export default WhatWeDo;
