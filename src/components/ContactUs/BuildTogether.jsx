import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideInUp,
  SlideInLeft,
  SlideInRight,
} from "../../utils/animations.jsx";

const BuildTogether = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom1.png",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom2.jpg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom3.png",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Let's build with 3D Section */}
      <section className="relative w-full flex flex-col justify-center items-center py-[80px] md:py-[120px] bg-white">
        <div className="flex flex-col items-center gap-0 w-full max-w-[1441px] mx-auto px-4 md:px-8">
          <FadeIn delay={0.2} duration={0.8}>
            <div className="flex flex-col justify-center items-center gap-[20px] w-full text-center">
              {/* Main Heading */}
              <SlideInUp delay={0.3} duration={0.6}>
                <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[125%] text-[#0D192D] max-w-[1281px]">
                  Let's build with 3D.
                </h2>
              </SlideInUp>

              {/* Subheading */}
              <SlideInUp delay={0.4} duration={0.6}>
                <p className="text-card-mobile md:text-description font-medium leading-[125%] capitalize text-[#1D3357] max-w-[1035px]">
                  Printers, Projects, Or Partnerships - We're Ready When You Are
                </p>
              </SlideInUp>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Let's Build Smarter, Together Section */}
      <section className="relative w-full bg-white py-[80px] md:py-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8">
          {/* Text Content */}
          <SlideInLeft delay={0.5} duration={0.8}>
            <div className="flex flex-col justify-center items-start w-full lg:w-[712px]">
              <div className="flex flex-col items-start gap-[20px] lg:gap-[28px] w-full">
                {/* Main Heading */}
                <h3 className="text-subtitle-mobile md:text-subtitle font-bold leading-[130%] tracking-[-0.03em] text-[#0D192D] w-full">
                  Got More Questions?
                </h3>

                {/* Description */}
                <p className="text-card-mobile md:text-card font-medium leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
                  We're Just a Call away
                </p>

                {/* Contact Us Button */}
                <motion.button
                  className="flex items-center justify-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[10px] btn-primary font-outfit font-semibold text-card-mobile md:text-card cursor-pointer whitespace-nowrap mt-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-outfit font-semibold text-card-mobile md:text-card leading-[23px] text-white">
                    Contact Us
                  </span>
                  <svg
                    className="w-5 h-5 text-white btn-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </SlideInLeft>

          {/* Right Image Slider */}
          <SlideInRight
            delay={0.6}
            duration={0.8}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div className="relative w-full sm:w-[400px] md:w-full lg:w-[508px] h-[300px] sm:h-[360px] md:h-[380px] lg:h-[400px] rounded-[24px] overflow-hidden">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Contact Us ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeSlide === index ? 1 : 0,
                    scale: activeSlide === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.7 }}
                />
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === index ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </section>
    </>
  );
};

export default BuildTogether;
