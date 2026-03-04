import React from "react";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const RoboticModels = () => {
  const models = [
    {
      id: 1,
      name: "SIRA RP",
      description:
        "Engineered for the efficient production of structural panels and custom architectural modules.",
      keyFeatures: [
        "High payload capacity for heavy elements",
        "Simplified setup and maintenance",
        "Ideal for prefabs, facades, and design elements",
      ],
      image: "/images/rp.png",
      buttonText: "Download Brochure",
      isLeft: true,
    },
    {
      id: 2,
      name: "SIRA RC",
      description:
        "This field-deployable unit is designed for remote or rough terrains, offering flexible setup and robust operation.",
      keyFeatures: [
        "Hydraulic lift system for terrain adaptation",
        "Integrated pressure & laser sensors for real-time calibration",
        "Built for on-ground deployment, on-site calibration and positioning solutions",
      ],
      image: "/images/rc.png",
      buttonText: "Download Brochure",
      isLeft: false,
    },
    {
      id: 3,
      name: "SIRA RT",
      description:
        "Ideal for factory-floor setups, SIRA RT delivers high-speed, repeatable printing with minimal footprint.",
      keyFeatures: [
        "Rail-based mobility",
        "Low-footprint production printer that can print on either side of the rail",
        "Low-maintenance, high-throughput operation",
      ],
      image: "/images/rt.png",
      buttonText: "Download Brochure",
      isLeft: true,
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px]">
      <div className="flex flex-col items-center gap-[60px] md:gap-[80px] w-full max-w-[1280px] mx-auto">
        {models.map((model, index) => (
          <div
            key={model.id}
            className={`flex flex-col ${
              model.isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full`}
          >
            {/* Image Section */}
            {model.isLeft ? (
              <SlideInLeft
                delay={0.2 + index * 0.1}
                duration={0.8}
                className="w-full lg:w-1/2"
              >
                <AnimatedCard
                  className="relative w-full h-[350px] md:h-[420px] lg:h-[480px] rounded-[12px]  overflow-hidden "
                  whileHover={{
                    y: -5,
                    boxShadow: "0px_15px_35px_rgba(13,25,45,0.2)",
                  }}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-contain object-center"
                  />
                </AnimatedCard>
              </SlideInLeft>
            ) : (
              <SlideInRight
                delay={0.2 + index * 0.1}
                duration={0.8}
                className="w-full lg:w-1/2"
              >
                <AnimatedCard
                  className="relative w-full h-[350px] md:h-[550px] lg:h-[600px] rounded-[12px]  overflow-hidden "
                  whileHover={{
                    y: -5,
                    boxShadow: "0px_15px_35px_rgba(13,25,45,0.2)",
                  }}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatedCard>
              </SlideInRight>
            )}

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[24px] md:gap-[30px]">
              <FadeIn delay={0.3 + index * 0.1} duration={0.8}>
                <h2 className="text-title-mobile md:text-title font-semibold leading-[1.25] text-[#0D192D] tracking-[-0.02em]">
                  {model.name}
                </h2>
              </FadeIn>

              <FadeIn delay={0.4 + index * 0.1} duration={0.8}>
                <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
                  {model.description}
                </p>
              </FadeIn>

              {/* Key Features */}
              <div className="flex flex-col gap-[12px]">
                <FadeIn delay={0.5 + index * 0.1} duration={0.6}>
                  <h3 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[1.7] text-[#0D192D] tracking-[-0.02em]">
                    Key Features:
                  </h3>
                </FadeIn>

                <div className="flex flex-col gap-[12px]">
                  {model.keyFeatures.map((feature, idx) => (
                    <FadeIn
                      key={idx}
                      delay={0.6 + index * 0.1 + idx * 0.05}
                      duration={0.6}
                    >
                      <div className="flex items-start gap-[12px]">
                        <div className="flex-shrink-0 w-[16px] h-[16px] mt-[6px]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="6"
                              fill="white"
                              stroke="#0D192D"
                              strokeWidth="4"
                            />
                          </svg>
                        </div>
                        <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
                          {feature}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <FadeIn delay={0.8 + index * 0.1} duration={0.8}>
                <button className="flex items-center justify-center gap-[10px] px-[24px] py-[12px] btn-download w-fit group">
                  <span className="text-card-mobile md:text-card font-semibold text-white">
                    {model.buttonText}
                  </span>
                  <svg
                    className="w-[20px] h-[20px] text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                    />
                  </svg>
                </button>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoboticModels;
