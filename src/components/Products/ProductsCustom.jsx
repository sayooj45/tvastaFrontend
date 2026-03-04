import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedButton,
} from "../../utils/animations.jsx";

const ProductsCustom = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleContactClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

  const images = [
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/Rectangle%20133%20(1).jpg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/Rectangle%20134%20(1).jpg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/Rectangle%20135%20(1).jpg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/Rectangle%20136%20(1).jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] w-full max-w-[1280px] px-4 md:px-8">
      {/* Content */}
      <SlideInLeft
        delay={0.2}
        duration={0.8}
        className="flex flex-col justify-center items-start py-6 gap-[10px] w-full md:flex-1 order-2 md:order-1"
      >
        <div className="flex flex-col items-start gap-[28px] w-full">
          {/* Title */}
          <FadeIn delay={0.4} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-subtitle font-semibold tracking-[-0.03em] text-[#0D192D] w-full">
              Want Something Custom?
            </h2>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.6} duration={0.8}>
            <p className="text-card-mobile md:text-description font-normal text-[#1D3357] w-full">
              Get in touch for bespoke furniture solutions or to integrate
              Tvasta products into your next public or private project.
            </p>
          </FadeIn>

          {/* Contact Button */}
          <FadeIn delay={0.8} duration={0.8}>
            <AnimatedButton
              onClick={handleContactClick}
              className="flex items-center justify-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[10px] btn-primary group whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-outfit font-semibold text-card-mobile md:text-card text-white">
                Contact Us
              </span>
              {/* <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg
                  className="w-[12px] h-[12px] text-[#1D3357]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div> */}
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
            </AnimatedButton>
          </FadeIn>
        </div>
      </SlideInLeft>

      {/* Image Slider */}
      <SlideInRight
        delay={0.4}
        duration={0.8}
        className="flex-shrink-0 w-full lg:w-auto order-1 md:order-2"
      >
        <div className="relative w-full sm:w-[400px] md:w-full lg:w-[508px] h-[250px] md:h-[350px] rounded-[24px] overflow-hidden">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Custom Product ${index + 1}`}
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
    </section>
  );
};

export default ProductsCustom;
