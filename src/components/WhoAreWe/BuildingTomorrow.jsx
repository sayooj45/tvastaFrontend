import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  AnimatedButton,
  SlideInLeft,
  SlideInRight,
} from "../../utils/animations.jsx";

const BuildingTomorrow = () => {
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
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 my-3 sm:my-16 md:my-10">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start gap-[28px] w-full flex-grow">
          <SlideInLeft delay={0.2}>
            <div className="flex flex-col items-start gap-[28px] w-full">
              <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle tracking-[-0.03em] text-[#0D192D]">
                Building tomorrow's infrastructure takes more than concrete.
              </h2>
              <p className="font-outfit font-medium text-card-mobile md:text-card tracking-[-0.01em] text-[#1D3357] w-full">
                It takes conviction, code, and collaboration.
              </p>
            </div>
          </SlideInLeft>

          <SlideInLeft delay={0.4}>
            <AnimatedButton
              className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[10px] btn-primary whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-outfit font-semibold text-card-mobile md:text-card text-white">
                Work With Us
              </span>
              <motion.div
                className="w-[24px] h-[24px] flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M4 8L12 12L20 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </AnimatedButton>
          </SlideInLeft>
        </div>

        {/* Right Image Slider */}
        <SlideInRight delay={0.3} className="flex-shrink-0 w-full lg:w-auto">
          <div className="relative w-full sm:w-[400px] md:w-full lg:w-[450px] h-[300px] sm:h-[360px] md:h-[380px] lg:h-[400px] rounded-[24px] overflow-hidden">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Building Tomorrow ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
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
        </SlideInRight>
      </div>
    </div>
  );
};

export default BuildingTomorrow;
