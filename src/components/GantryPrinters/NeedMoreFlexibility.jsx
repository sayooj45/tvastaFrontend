import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";
import { useNavigate } from "react-router-dom";

const NeedMoreFlexibility = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[1280px] mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-[24px] md:gap-[30px]">
          <SlideInLeft delay={0.2} duration={0.8}>
            <h2 className="text-title-mobile md:text-title font-semibold leading-[1.25] text-[#0D192D] tracking-[-0.02em]">
              Need More Design Flexibility?
            </h2>
          </SlideInLeft>

          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
              Explore our Robotic Arm Printers for complex, compact builds.
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.6} duration={0.8}>
            <button
              onClick={() => {
                navigate("/our-technology/printers/robotic-arm-based");
                window.scrollTo(0, 0);
              }}
              className="flex items-center justify-center gap-[8px] px-[24px] py-[12px] btn-primary w-fit group"
            >
              <span className="text-card-mobile md:text-card font-semibold text-white">
                View Robotic Arm Printers
              </span>
              <svg
                className="w-[16px] h-[16px] text-white btn-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </FadeIn>
        </div>

        {/* Right Image */}
        <SlideInRight delay={0.3} duration={0.8} className="w-full lg:w-1/2">
          <AnimatedCard
            className="relative w-full h-[250px] md:h-[500px] lg:h-[520px] rounded-[12px] overflow-hidden "
            whileHover={{
              y: -5,
              boxShadow: "0px_15px_35px_rgba(13,25,45,0.2)",
            }}
          >
            <Slider />
          </AnimatedCard>
        </SlideInRight>
      </div>
    </section>
  );
};

export default NeedMoreFlexibility;

const Slider = ({}) => {
  const images = [
    "/images/robotic.png",
    "/images/rp.png",
    "/images/rc.png",
    "/images/rt.png",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveSlide((s) => (s + 1) % images.length),
      4000
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeSlide === i ? 1 : 0,
            scale: activeSlide === i ? 1 : 1.05,
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

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === idx ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
