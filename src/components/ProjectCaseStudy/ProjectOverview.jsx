import React from "react";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

const ProjectOverview = () => {
  const projectDetails = [
    {
      id: 1,
      icon: <MapPinIcon className="w-6 h-6 text-[#E74C3C]" />,
      label: "Mumbai, Maharashtra",
      iconBg: "#E74C3C",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6 text-[#E74C3C]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          />
        </svg>
      ),
      label: "Area: 600 sq.ft",
      iconBg: "#E74C3C",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6 text-[#E74C3C]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Public Infrastructure",
      iconBg: "#E74C3C",
    },
    {
      id: 4,
      icon: <ClockIcon className="w-6 h-6 text-[#E74C3C]" />,
      label: "7 days",
      iconBg: "#E74C3C",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[40px] md:py-[50px] lg:py-[60px] bg-white">
      <div className="flex flex-col items-center w-full max-w-[1320px] mx-auto">
        {/* Container for image and details - keeps them aligned */}
        <div className="flex flex-col gap-[30px] md:gap-[40px] w-full">
          {/* Main Image */}
          <FadeIn delay={0.2} duration={0.8}>
            <AnimatedCard
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[16px] md:rounded-[20px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
              whileHover={{
                y: -5,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="/images/pcso.jpg"
                alt="Bus Shelters For Godrej"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </AnimatedCard>
          </FadeIn>

          {/* Project Details - flex layout with space-between */}
          <div className="flex flex-wrap justify-between gap-y-[20px] w-full">
            {projectDetails.map((detail, index) => (
              <SlideInUp
                key={detail.id}
                delay={0.3 + index * 0.1}
                duration={0.8}
              >
                <div className="flex items-center gap-[12px] md:gap-[16px]">
                  {/* Icon */}
                  <div className="flex-shrink-0">{detail.icon}</div>

                  {/* Label */}
                  <p className="text-card-mobile md:text-card font-medium leading-[1.5] text-[#0D192D] tracking-[-0.02em] whitespace-nowrap">
                    {detail.label}
                  </p>
                </div>
              </SlideInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
