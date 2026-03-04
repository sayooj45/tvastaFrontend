import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AnimatedButton,
  FadeIn,
  SlideInLeft,
  SlideInRight,
} from "../../utils/animations.jsx";
import BrochureForm from "../BrochureForm.jsx";

const CallToAction = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  

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
    <section className="w-full bg-white md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-center">
        {/* Left Text Section */}
        <SlideInLeft delay={0.3}>
          <div className="w-full lg:w-[712px] flex flex-col gap-5 sm:gap-7 items-start">
            <FadeIn delay={0.5}>
              <div className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle text-[#0D192D] tracking-[-0.03em]">
                Ready to bring your next project to life with 3D Construction?
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="font-outfit font-medium text-card-mobile md:text-card text-[#1D3357] tracking-[-0.01em]">
                Whether you're building a home, a shelter, or a smart city
                facade, we have the tools to make it possible.
              </div>
            </FadeIn>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-7 mt-4">
              {/* Let's Talk Button */}
              <AnimatedButton
                className="flex items-center btn-primary font-outfit font-semibold text-card-mobile md:text-card px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 border-none gap-2 sm:gap-[10px] cursor-pointer whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-outfit font-semibold text-card-mobile md:text-card text-white">
                  Let's Talk
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-[#1D3357]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
              </AnimatedButton>

              {/* Download Button */}
              <AnimatedButton
                className="flex items-center btn-download font-outfit font-semibold text-card-mobile md:text-card px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-2 sm:gap-[10px] cursor-pointer whitespace-nowrap"
                onClick={() => setShowBrochureForm(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-outfit font-semibold text-card-mobile md:text-card text-white">
                  Download Tech Brochure
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-[#E63946]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                </div>
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
            </div>
          </div>
        </SlideInLeft>

        {/* Right Image Slider */}
        <SlideInRight
          delay={0.5}
          duration={0.8}
          className="flex-shrink-0 w-full lg:w-auto"
        >
          <div className="relative w-full sm:w-[400px] md:w-full lg:w-[508px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
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
      {showBrochureForm && (
        <BrochureForm onClose={() => setShowBrochureForm(false)} />
      )}
    </section>
  );
};

export default CallToAction;
