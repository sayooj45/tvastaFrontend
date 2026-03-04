import React from "react";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";
import {
  CpuChipIcon,
  ChartBarIcon,
  CubeIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const SoftwareStack = () => {
  const features = [
    {
      id: 1,
      icon: CpuChipIcon,
      title: "Smart Slicer Engine",
      description:
        "Custom slicing algorithms for efficient pathing, layer height, and material usage.",
    },
    {
      id: 2,
      icon: ChartBarIcon,
      title: "Real-Time Monitoring Dashboard",
      description:
        "Live visualization of print progress, nozzle activity, temperature, and more.",
    },
    {
      id: 3,
      icon: CubeIcon,
      title: "Print Simulator & Estimator",
      description:
        "Preview builds, estimate timelines, and material estimation, and print feasibility.",
    },
    {
      id: 4,
      icon: ArrowPathIcon,
      title: "Performance Analytics & Recalibration",
      description:
        "Automated diagnostics and error handling for consistent output.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0D192D] overflow-hidden py-[60px] md:py-[100px]">
      <div className="flex flex-col lg:flex-row items-stretch gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[40px] md:gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-[20px]">
            <SlideInLeft delay={0.2} duration={0.8}>
              <div className="flex items-center gap-[8px] border-l-4 border-white pl-[16px]">
                <h2 className="text-title-mobile md:text-title font-semibold leading-[1.06] text-white tracking-[-0.02em]">
                  Our Software Stack
                </h2>
              </div>
            </SlideInLeft>
            <FadeIn delay={0.3} duration={0.8}>
              <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-gray-300 tracking-[-0.02em]">
                Tvasta's software suite translates complex designs into
                optimized, print-ready paths, ensuring speed, precision, and
                control across every project.
              </p>
            </FadeIn>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-[32px]">
            {features.map((feature, index) => (
              <FadeIn key={feature.id} delay={0.4 + index * 0.1} duration={0.6}>
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
          className="w-full lg:w-1/2 lg:flex-1"
        >
          <AnimatedCard
            className="relative w-full h-full min-h-[320px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)]"
            whileHover={{ y: -5, boxShadow: "0px 15px 35px rgba(0,0,0,0.4)" }}
          >
            <img
              src="/images/softwarestack.png"
              alt="Tvasta Software Stack"
              className="w-full h-full object-cover object-right-top"
            />
          </AnimatedCard>
        </SlideInRight>
      </div>
    </section>
  );
};

export default SoftwareStack;
