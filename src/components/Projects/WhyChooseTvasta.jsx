import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInFromLeft,
  staggerContainer,
} from "../../utils/animations";

const WhyChooseTvasta = () => {
  const features = [
    {
      icon: (
        <img
          src="/images/vector1.png"
          alt="Speed of Execution"
          className="w-5 h-5 object-contain filter brightness-0 invert"
        />
      ),
      title: "Speed of Execution",
      description: `Tvasta's 3D construction printing technology enables faster project completion compared to traditional methods.`,
    },
    {
      icon: (
        <img
          src="/images/vector2.png"
          alt="Cost Efficiency"
          className="w-5 h-5 object-contain filter brightness-0 invert"
        />
      ),
      title: "Design Flexibility",
      description:
        "From curves to cores,match architectural ambition with structural precision.",
    },
    {
      icon: (
        <img
          src="/images/vector3.png"
          alt="Sustainable Innovation"
          className="w-5 h-5 object-contain filter brightness-0 invert"
        />
      ),
      title: "Sustainable Innovation",
      description: "Less material, less waste, and up to 66% cement replaced.",
    },
  ];

  return (
    <section className="w-full bg-[#0D192D] py-[60px] sm:py-[70px] md:py-[80px]">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-start lg:items-start w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 gap-[40px] md:gap-[50px] lg:gap-[60px]"
      >
        {/* Left Content */}
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-col items-start gap-[30px] sm:gap-[35px] md:gap-[40px] w-full max-w-[632px] lg:flex-1"
        >
          {/* Title with border */}
          <div className="flex flex-col items-start gap-[0px] w-full border-l-[3px] sm:border-l-[4px] md:border-l-[5px] border-white pl-[20px] sm:pl-[30px] md:pl-[40px]">
            <motion.h2
              variants={fadeInUp}
              className="text-subtitle-mobile md:text-title font-bold leading-[125%] text-white w-full font-['Outfit']"
            >
              Why Choose Tvasta
            </motion.h2>
          </div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col items-start gap-[20px] sm:gap-[22px] md:gap-[24px] w-full"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className="flex flex-row items-start py-[6px] sm:py-[7px] md:py-[8px] pr-[20px] sm:pr-[30px] md:pr-[40px] lg:pr-[48px] pl-[16px] sm:pl-[24px] md:pl-[32px] gap-[12px] sm:gap-[14px] md:gap-[16px] w-full"
              >
                {/* Icon */}
                <div className="flex flex-col justify-center items-center w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] min-w-[20px] sm:min-w-[22px] md:min-w-[24px] mt-1">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col items-start gap-[12px] sm:gap-[14px] md:gap-[16px] flex-1">
                  <h3 className="text-card-mobile md:text-card font-bold leading-[27px] tracking-[0.02em] text-white font-['Outfit']">
                    {feature.title}
                  </h3>
                  <p className="text-card-mobile md:text-card font-medium leading-[25px] text-[#F0F0F0] opacity-70 font-['Outfit']">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start gap-[10px] w-full max-w-[240px] mt-[15px] sm:mt-[18px] md:mt-[20px]"
          >
            <button className="flex flex-row justify-center items-center py-[14px] sm:py-[15px] md:py-[16px] px-[24px] sm:px-[26px] md:px-[28px] gap-[8px] sm:gap-[9px] md:gap-[10px] w-full h-[48px] sm:h-[50px] md:h-[52px] btn-white group">
              <span className="text-card-mobile md:text-card font-semibold leading-[23px] text-[#0D192D] whitespace-nowrap font-['Outfit']">
                Let's Build Together
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path
                  d="M4.16669 15.8333L15.8334 4.16666M15.8334 4.16666H6.66669M15.8334 4.16666V13.3333"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={slideInFromLeft}
          custom={1}
          className="w-full  h-[300px] sm:h-[350px] md:h-[660px]  lg:flex-1 overflow-hidden rounded-[20px] sm:rounded-[22px] md:rounded-[24px]"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('/images/newwhychosetvasta.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseTvasta;
