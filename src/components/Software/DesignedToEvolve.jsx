import React from "react";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";

const DesignedToEvolve = () => {
  const features = [
    {
      id: 1,
      tag: "Cross-Compatible",
      title: "Works seamlessly with all Tvasta's printer types",
      image: "/images/compatible.png",
    },
    {
      id: 2,
      tag: "Custom-Tunable",
      title: "With third-party inputs & advanced controls",
      image: "/images/tunable.png",
    },
    {
      id: 3,
      tag: "Continuously Upgraded",
      title: "With evolving algorithms and AI-ready tools",
      image: "/images/upgraded.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px]">
      <div className="flex flex-col items-center gap-[40px] md:gap-[60px] w-full max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-title-mobile md:text-title font-semibold leading-[1.2] text-center text-[#0D192D] tracking-[-0.02em]">
              Designed to Evolve
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-center text-[#1D3357] tracking-[-0.02em] max-w-full">
              From architects to engineers, Tvasta's software adapts to your
              design, terrain, and technology needs
            </p>
          </FadeIn>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[30px] w-full">
          {features.map((feature, index) => (
            <SlideInUp
              key={feature.id}
              delay={0.4 + index * 0.1}
              duration={0.8}
            >
              <AnimatedCard
                className="relative w-full h-[280px] md:h-[320px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)] group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.tag}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,25,45,0.9)] via-[rgba(13,25,45,0.6)] to-[rgba(13,25,45,0.3)]"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-[20px] md:p-[24px]">
                  {/* Tag */}
                  <div className="flex items-start">
                    <span className="px-[12px] py-[6px] bg-white rounded-[20px] text-card-mobile md:text-card font-semibold text-[#0D192D] tracking-[-0.02em]">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-card-mobile md:text-card font-semibold leading-[1.4] text-white tracking-[-0.02em]">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </AnimatedCard>
            </SlideInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignedToEvolve;
