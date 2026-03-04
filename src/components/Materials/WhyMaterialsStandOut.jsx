import React from "react";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";

const WhyMaterialsStandOut = () => {
  const features = [
    {
      id: 1,
      title: "Geo-Engineered Mixes",
      description:
        "Go beyond traditional OPC. Our proprietary blends use geopolymers and mineral admixtures for superior durability.",
      image: "/images/ms01.png",
    },
    {
      id: 2,
      title: "Low-Carbon Alternatives",
      description:
        "Replace up to 66% cement with sustainable binders, lowering emissions without compromising strength.",
      image: "/images/ms02.png",
    },
    {
      id: 3,
      title: "Print-Optimized Flow",
      description:
        "Formulated for open-pot extrusion and inter-layer bonding. Pump-ready and layer-adhesive.",
      image: "/images/ms03.png",
    },
    {
      id: 4,
      title: "Tailored for Every Terrain",
      description:
        "Designed for India's toughest geographies - coastal spray, freezing ranges, and rapid climate variability.",
      image: "/images/ms04.png",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-2 md:px-3 lg:px-4 py-[30px] md:py-[40px]">
      <div className="flex flex-col items-center gap-[40px] md:gap-[50px] w-full max-w-[1320px] mx-auto bg-[#0D192D] rounded-[24px] p-[30px] md:p-[40px] lg:p-[50px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[1.2] text-center text-white tracking-[-0.02em]">
              Why Our Materials Stand Out
            </h2>
          </FadeIn>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[30px] w-full">
          {features.map((feature, index) => (
            <SlideInUp
              key={feature.id}
              delay={0.3 + index * 0.1}
              duration={0.8}
            >
              <AnimatedCard
                className="relative w-full h-[280px] md:h-[300px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,25,45,0.95)] via-[rgba(13,25,45,0.7)] to-[rgba(13,25,45,0.4)]"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-[20px] md:p-[24px]">
                  {/* Title */}
                  <h3 className="text-card-mobile md:text-card font-semibold leading-[1.4] text-white tracking-[-0.02em] mb-[12px]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-card-mobile md:text-card font-normal leading-[1.7] text-gray-200 tracking-[-0.02em]">
                    {feature.description}
                  </p>
                </div>
              </AnimatedCard>
            </SlideInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMaterialsStandOut;
