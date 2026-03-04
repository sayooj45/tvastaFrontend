import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideInUp,
  SlideInLeft,
  SlideInRight,
  AnimatedButton,
} from "../../utils/animations.jsx";

const MediaOrPressEnquiry = () => {
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
    <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-20">
      {/* Content Section */}
      <SlideInLeft
        delay={0.3}
        className="flex flex-col justify-center items-start gap-2.5 flex-1 w-full lg:w-[712px] h-full"
      >
        <FadeIn delay={0.5} className="flex flex-col items-start gap-7 w-full">
          {/* Title */}
          <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle leading-[130%] tracking-[-0.03em] text-[#0D192D]">
            Media or Press Inquiry?
          </h2>

          {/* Description */}
          <p className="font-outfit font-medium text-card-mobile md:text-card leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
            For media features or press info, get in touch with our
            communications team.
          </p>

          {/* Contact Us Button */}
          <SlideInUp delay={0.7}>
            <AnimatedButton
              className="flex items-center justify-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[10px] btn-primary whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
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
            </AnimatedButton>
          </SlideInUp>
        </FadeIn>
      </SlideInLeft>

      {/* Right Image Slider */}
      <SlideInRight
        delay={0.5}
        duration={0.8}
        className="flex-shrink-0 w-full lg:w-auto"
      >
        <div className="relative w-full sm:w-[400px] md:w-full lg:w-[508px] h-[300px] sm:h-[360px] md:h-[380px] lg:h-[400px] rounded-[24px] overflow-hidden">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Media Press ${index + 1}`}
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
  );
};

export default MediaOrPressEnquiry;
