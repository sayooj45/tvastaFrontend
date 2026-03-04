import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const PrintersOverview = () => {
  const navigate = useNavigate();

  const printerTypes = [
    {
      id: 1,
      type: "Gantry-Based 3D Printers",
      description:
        "Engineered for large-scale on-site and off-site construction. These printers are ideal for housing, shelters, and infrastructure projects with high volume and precision requirements.",
      image: "/images/po1.png",
      features: [
        "Large build envelope (up to G+2 structures)",
        "Modular & relocatable for field deployment",
        "Compatible with sustainable concrete mixes",
        "Designed for speed, durability, and scalability",
      ],
      buttonText: "Explore Series",
      isLeft: true,
      link: "/our-technology/printers/gantry-based",
    },
    {
      id: 2,
      type: "Robotic Arm-Based Printers",
      description:
        "Designed for complex geometries and smaller-footprint architectural builds. With 6-axis flexibility, these printers are optimized for design-driven structures.",
      image: "/images/po2.png",
      features: [
        "High-resolution finish for curved & parametric forms",
        "Compact footprint for indoor/campus settings",
        "Custom motion systems for design adaptability",
        "Ideal for pods, furniture, and façades",
      ],
      buttonText: "Explore Series",
      isLeft: false,
      link: "/our-technology/printers/robotic-arm-based",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 bg-white py-[60px] md:py-[100px]">
      <div className="flex flex-col items-center gap-[60px] md:gap-[100px] w-full max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[20px] w-full">
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[1.06] text-center text-[#0D192D] tracking-[-0.02em]">
              3D Printers Overview
            </h2>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-center text-[#1D3357] max-w-[800px] tracking-[-0.02em]">
              Two Printer Types. One Construction Revolution
            </p>
          </FadeIn>
        </div>

        {/* Printer Types */}
        {printerTypes.map((printer, index) => (
          <div
            key={printer.id}
            className={`flex flex-col ${
              printer.isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full`}
          >
            {/* Image Section */}
            {printer.isLeft ? (
              <SlideInLeft
                delay={0.3 + index * 0.2}
                duration={0.8}
                className="w-full lg:w-1/2"
              >
                <AnimatedCard
                  className="relative w-full h-[300px] md:h-[500px] lg:h-[550px]  overflow-hidden "
                  whileHover={{
                    y: -5,
                  }}
                >
                  <img
                    src={printer.image}
                    alt={printer.type}
                    className={`w-full h-full ${
                      printer.isLeft
                        ? "object-cover"
                        : "object-contain object-center"
                    }`}
                  />
                </AnimatedCard>
              </SlideInLeft>
            ) : (
              <SlideInRight
                delay={0.3 + index * 0.2}
                duration={0.8}
                className="w-full lg:w-1/2"
              >
                <AnimatedCard
                  className="relative w-full h-[300px] md:h-[500px] lg:h-[550px]  overflow-hidden "
                  whileHover={{
                    y: -5,
                    boxShadow: "0px_15px_35px_rgba(13,25,45,0.2)",
                  }}
                >
                  <img
                    src={printer.image}
                    alt={printer.type}
                    className={`w-full h-full ${
                      printer.isLeft
                        ? "object-cover"
                        : "object-contain object-center"
                    }`}
                  />
                </AnimatedCard>
              </SlideInRight>
            )}

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[24px] md:gap-[30px]">
              <FadeIn delay={0.4 + index * 0.2} duration={0.8}>
                <h3 className="text-card-mobile md:text-subtitle font-semibold leading-[1.25] text-[#0D192D] tracking-[-0.02em]">
                  {printer.type}
                </h3>
              </FadeIn>

              <FadeIn delay={0.5 + index * 0.2} duration={0.8}>
                <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
                  {printer.description}
                </p>
              </FadeIn>

              {/* Features List */}
              <div className="flex flex-col gap-[16px]">
                {printer.features.map((feature, idx) => (
                  <FadeIn
                    key={idx}
                    delay={0.6 + index * 0.2 + idx * 0.1}
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

              {/* CTA Button */}
              <FadeIn delay={0.9 + index * 0.2} duration={0.8}>
                <button
                  onClick={() => {
                    navigate(printer.link);
                    window.scrollTo(0, 0);
                  }}
                  className="flex items-center justify-center gap-[8px] px-[24px] py-[12px] btn-primary w-fit group"
                >
                  <span className="text-card-mobile md:text-card font-semibold text-white">
                    {printer.buttonText}
                  </span>
                  <svg
                    className="w-[16px] h-[16px] text-white btn-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
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

export default PrintersOverview;
