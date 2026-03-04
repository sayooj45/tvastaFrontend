import React from "react";
import { FadeIn, SlideInLeft, SlideInRight } from "../../utils/animations.jsx";
import {
  CogIcon,
  BoltIcon,
  PencilSquareIcon,
  BeakerIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const StandApart = () => {
  const features = [
    {
      id: 1,
      icon: CogIcon,
      title: "Plug & Print Ready",
      description:
        "Modular installation, minimal assembly time, field calibrated for India's terrain",
    },
    {
      id: 2,
      icon: BoltIcon,
      title: "Speed Without Compromise",
      description:
        "Up to 10x faster than traditional construction for comparable build sizes",
    },
    {
      id: 3,
      icon: PencilSquareIcon,
      title: "Design Led Flexibility",
      description:
        "Print straight walls or curved structures no formwork required",
    },
    {
      id: 4,
      icon: BeakerIcon,
      title: "Material Agility",
      description:
        "Compatible with custom eco concrete mixes and local aggregates",
    },
    {
      id: 5,
      icon: CommandLineIcon,
      title: "Real Time Automation",
      description:
        "Controlled through Tvasta's proprietary software stack with live monitoring & slicing",
    },
  ];

  return (
    <section className="relative w-full bg-[#0D192D] overflow-hidden py-[60px] md:py-[100px]">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[40px] md:gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-[16px]">
            <SlideInLeft delay={0.2} duration={0.8}>
              <div className="flex items-center gap-[8px] border-l-4 border-white pl-[16px]">
                <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[1.06] text-white tracking-[-0.02em]">
                  Why Tvasta Printers Stand Apart
                </h2>
              </div>
            </SlideInLeft>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-[32px]">
            {features.map((feature, index) => (
              <FadeIn key={feature.id} delay={0.3 + index * 0.1} duration={0.6}>
                <div className="flex items-start gap-[16px]">
                  <div className="flex-shrink-0 w-[32px] h-[32px] mt-[4px]">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-card-mobile md:text-card font-semibold leading-[1.4] text-white tracking-[-0.02em]">
                      {feature.title}
                    </h3>
                    <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-gray-300 tracking-[-0.02em]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <SlideInRight
          delay={0.4}
          duration={0.8}
          className="w-full lg:w-1/2 h-[400px] md:h-[750px] lg:h-[850px]"
        >
          <div className="relative w-full h-full rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)]">
            <img
              src="/images/standapart.png"
              alt="Tvasta 3D Printer"
              className="w-full h-full object-cover"
            />
          </div>
        </SlideInRight>
      </div>
    </section>
  );
};

export default StandApart;
