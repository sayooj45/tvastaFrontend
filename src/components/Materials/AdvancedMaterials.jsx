import React from "react";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const AdvancedMaterials = () => {
  const labs = [
    {
      id: 1,
      title: "Cement Lab",
      description:
        "Physical & chemical analysis, SCM calcination, and binder formulation at lab scale.",
      image: "/images/cl.png",
      isLeft: false,
    },
    {
      id: 2,
      title: "Concrete Lab",
      description:
        "Mix design for self-compacting, pumpable, and geopolymer concretes. Equipped with compression testers (up to 1000 kN), flow table, L-box, and more.",
      image: "/images/cnl.png",
      isLeft: true,
    },
    {
      id: 3,
      title: "Durability & Shrinkage Lab",
      description:
        "RCPT, chloride migration, water permeability, sorptivity, and shrinkage studies in controlled conditions.",
      image: "/images/dfl.png",
      isLeft: false,
    },
    {
      id: 4,
      title: "Forensics Lab",
      description:
        "Diagnostic testing for ageing or disputed structures. Includes rebound hammer, pH meter, muffle furnace, and profiling tools.",
      image: "/images/fl.png",
      isLeft: true,
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="flex flex-col items-center gap-[50px] md:gap-[60px] w-full max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[900px] mx-auto">
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-title-mobile md:text-title font-semibold leading-[1.2] text-center text-[#0D192D] tracking-[-0.02em]">
              Advanced Materials, Backed by R&D
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-center text-[#4A4A4A] tracking-[-0.02em]">
              Our Centre For Advanced Construction Materials (CACM) Powers
              Innovation In Printable Concrete. Every Mix Is Lab-Validated For
              Reliability In Real-World Conditions.
            </p>
          </FadeIn>
        </div>

        {/* Labs Grid */}
        <div className="flex flex-col gap-[40px] md:gap-[50px] w-full">
          {labs.map((lab, index) => (
            <div
              key={lab.id}
              className={`flex flex-col ${
                lab.isLeft ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-[30px] md:gap-[40px] lg:gap-[50px] w-full`}
            >
              {/* Image */}
              {lab.isLeft ? (
                <SlideInRight delay={0.3 + index * 0.1} duration={0.8}>
                  <AnimatedCard
                    className="relative w-full md:w-[480px] lg:w-[550px] h-[280px] md:h-[320px] lg:h-[360px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer flex-shrink-0"
                    whileHover={{
                      y: -5,
                      boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
                    }}
                  >
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </AnimatedCard>
                </SlideInRight>
              ) : (
                <SlideInLeft delay={0.3 + index * 0.1} duration={0.8}>
                  <AnimatedCard
                    className="relative w-full md:w-[480px] lg:w-[550px] h-[280px] md:h-[320px] lg:h-[360px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer flex-shrink-0"
                    whileHover={{
                      y: -5,
                      boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
                    }}
                  >
                    <img
                      src={lab.image}
                      alt={lab.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </AnimatedCard>
                </SlideInLeft>
              )}

              {/* Content */}
              <div className="flex flex-col gap-[16px] md:gap-[20px] w-full md:flex-1">
                <FadeIn delay={0.4 + index * 0.1} duration={0.8}>
                  <h3 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[1.3] text-[#0D192D] tracking-[-0.02em]">
                    {lab.title}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.5 + index * 0.1} duration={0.8}>
                  <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#4A4A4A] tracking-[-0.02em]">
                    {lab.description}
                  </p>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedMaterials;
