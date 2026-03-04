import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInFromLeft,
  staggerContainer,
} from "../../utils/animations";

const BuildTogether = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleContactClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

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
    <section className="w-full py-[60px] sm:py-[70px] md:py-[80px] bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-[40px] md:gap-[50px] lg:gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16"
      >
        {/* Left Content */}
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-col justify-center items-start lg:items-start py-[20px] sm:py-[22px] md:py-[24px] gap-[24px] sm:gap-[26px] md:gap-[28px] w-full max-w-[712px] lg:flex-1 text-center lg:text-left"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-subtitle-mobile md:text-subtitle font-semibold leading-[130%] tracking-[-0.03em] text-[#0D192D] w-full font-['Outfit']"
          >
            Let's Build Something Together
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-card-mobile md:text-description font-normal leading-[30px] text-[#1D3357] w-full font-['Outfit']"
          >
            Have a project in mind? Connect with us to bring your vision to
            life.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUp}
            onClick={handleContactClick}
            className="flex flex-row justify-center items-center py-3 sm:py-3.5 md:py-4 px-5 sm:px-6 md:px-7 gap-[8px] sm:gap-[9px] md:gap-[10px] btn-primary group whitespace-nowrap"
          >
            <span className="text-card-mobile md:text-card font-medium leading-[130%] text-white font-['Outfit']">
              Contact Us
            </span>
            <svg
              className="w-5 h-5 text-white btn-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Image Slider */}
        <motion.div
          variants={slideInFromLeft}
          custom={1}
          className="flex-shrink-0 w-full lg:w-auto"
        >
          <div className="relative w-full sm:w-[400px] md:w-full lg:w-[508px] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeSlide === index ? 1 : 0,
                  scale: activeSlide === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.7 }}
              />
            ))}

            {/* Left / Right Navigation Buttons */}
            <button
              onClick={() =>
                setActiveSlide(
                  (activeSlide - 1 + images.length) % images.length
                )
              }
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => setActiveSlide((activeSlide + 1) % images.length)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BuildTogether;
