import React from "react";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";

const WhatWeProvide = () => {
  const services = [
    {
      id: 1,
      label: "On-Site Hardware",
      title:
        "Auxiliary, IoT sensors, and mixer units designed to operate seamlessly with all our printers.",
      image: "/images/wwp1.png",
    },
    {
      id: 2,
      label: "Deployment & Training",
      title:
        "End-to-end installation, calibration, and hands-on training to ensure seamless use on-site/factory.",
      image: "/images/wwp2.png",
    },
    {
      id: 3,
      label: "Execution Support",
      title:
        "Service team, qualified crew DLPs (Delivery Lifecycle Partners), and consultants to co-deliver required use.",
      image: "/images/wwp3.png",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px] bg-white">
      <div className="flex flex-col items-center gap-[40px] md:gap-[50px] w-full max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[1.2] text-center text-[#0D192D] tracking-[-0.02em]">
              What We Provide
            </h2>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] md:gap-[30px] w-full">
          {services.map((service, index) => (
            <SlideInUp
              key={service.id}
              delay={0.3 + index * 0.1}
              duration={0.8}
            >
              <AnimatedCard
                className="relative w-full h-[320px] md:h-[360px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,25,45,0.95)] via-[rgba(13,25,45,0.6)] to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col p-[24px] md:p-[28px]">
                  {/* Label Badge - Top Left */}
                  <div className="inline-flex items-center justify-center bg-white rounded-[30px] px-[12px] py-[6px] self-start mb-auto">
                    <span className="text-card-mobile md:text-card font-semibold text-[#0D192D] tracking-[-0.02em]">
                      {service.label}
                    </span>
                  </div>

                  {/* Title - Bottom */}
                  <h3 className="text-card-mobile md:text-card font-medium leading-[1.5] text-white tracking-[-0.02em]">
                    {service.title}
                  </h3>
                </div>
              </AnimatedCard>
            </SlideInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
