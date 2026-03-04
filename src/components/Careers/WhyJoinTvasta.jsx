import React from "react";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";

const WhyJoinTvasta = () => {
  const reasons = [
    {
      icon: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/careers/icon1.png",
      title: "Work on cutting-edge 3D construction technology",
    },
    {
      icon: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/careers/icon2.png",
      title: "Collaborate with top minds from engineering, design, and R&D",
    },
    {
      icon: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/careers/icon3.png",
      title: "Contribute to projects that change lives and cities",
    },
    {
      icon: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/careers/icon4.png",
      title: "Thrive in a culture of innovation, speed, and sustainability",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-start gap-[40px] sm:gap-[50px] lg:gap-[60px] w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-0">
      {/* Section Header */}
      <FadeIn delay={0.2} duration={0.8}>
        <div className="flex flex-col justify-center items-center gap-[20px] w-full px-0 sm:px-4 lg:px-12 xl:px-[80px]">
          <h2 className="w-full font-outfit font-semibold text-subtitle-mobile md:text-title text-center text-[#0D192D]">
            Why Join Tvasta?
          </h2>
        </div>
      </FadeIn>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[20px] w-full justify-items-center">
        {reasons.map((reason, index) => (
          <SlideInUp key={index} delay={0.4 + index * 0.1} duration={0.6}>
            <AnimatedCard
              className="box-border w-full max-w-[320px] sm:w-full sm:max-w-[280px] lg:max-w-[300px] xl:w-[305px] h-[360px] sm:h-[380px] lg:h-[400px] bg-white border border-black/10 backdrop-blur-[24px] rounded-[24px] flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6 cursor-pointer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 600, damping: 10 }}
            >
              {/* Icon Container */}
              <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[125px] lg:h-[125px] mb-6 sm:mb-7 lg:mb-8 flex items-center justify-center">
                <img
                  src={reason.icon}
                  alt={`Icon ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <div className="w-full max-w-[271px] min-h-[58px] flex items-center justify-center px-2">
                <p className="font-outfit font-semibold text-card text-center text-[#0D192D]">
                  {reason.title}
                </p>
              </div>
            </AnimatedCard>
          </SlideInUp>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinTvasta;
