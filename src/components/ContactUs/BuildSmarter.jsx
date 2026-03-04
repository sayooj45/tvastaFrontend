import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn, SlideInLeft, SlideInRight } from "../../utils/animations.jsx";

const BuildSmarter = () => {
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
    <section className="relative w-full bg-white py-[80px] md:py-[120px]">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Text Content */}
        <SlideInLeft delay={0.5} duration={0.8}>
          <div className="flex flex-col justify-center items-start w-full lg:w-[712px]">
            <div className="flex flex-col items-start gap-[20px] lg:gap-[28px] w-full">
              {/* Main Heading */}
              <h3 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[130%] tracking-[-0.03em] text-[#0D192D] w-full">
                Let's Build Smarter, Together
              </h3>

              {/* Description */}
              <p className="text-card-mobile md:text-card font-medium leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
                We're redefining construction - bringing precision,
                sustainability, and innovation to every project.
              </p>
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
                alt={`Build Smarter ${index + 1}`}
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
                setActiveSlide((s) => (s - 1 + images.length) % images.length)
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
              onClick={() => setActiveSlide((s) => (s + 1) % images.length)}
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
    </section>
  );
};

export default BuildSmarter;
