import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const Hero = () => {
  const heroBg =
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/herobg.png";

  return (
    <section
      className="relative w-full h-[500px] sm:h-[560px] md:h-[620px] lg:h-[660px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background blur effect */}
      <div className="absolute top-[-143px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[286px] md:h-[286px] bg-gray-400 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-50"></div>

      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(178.77deg, rgba(255, 255, 255, 0) 1.05%, #FFFFFF 98.96%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-[20px] sm:gap-[25px] md:gap-[30px] max-w-[1256px] w-full text-center pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[100px]"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center bg-white border border-[#E0E0E0] rounded-[30px] px-[20px] py-[8px] shadow-sm"
          >
            <span className="text-card-mobile md:text-card font-medium text-[#0D192D] tracking-[-0.02em] font-['Outfit']">
              Project Case Study
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-title-mobile md:text-title font-semibold leading-[106.2%] text-[#0D192D] tracking-[-0.02em] capitalize max-w-[677px] px-2 font-['Outfit']"
          >
            Bus Shelters For Godrej
          </motion.h1>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
