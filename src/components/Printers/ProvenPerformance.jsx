import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn, SlideInLeft, SlideInRight } from "../../utils/animations.jsx";

// SliderImages: auto-advancing 4-image slider using gantry images
const SliderImages = () => {
  const images = [
    "/images/zt.png",
    "/images/Rectangle 34625215.png",
    "/images/gantrybased3d.png",
    "/images/robotic.png",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
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
            scale: activeSlide === index ? 1 : 1.03,
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
    </>
  );
};
import { useNavigate } from "react-router-dom";

const ProvenPerformance = () => {
  const navigate = useNavigate();
  const stats = [
    {
      id: 1,
      number: "30+",
      label: "shelters built in days",
    },
    {
      id: 2,
      number: "20+",
      label: "urban modules printed",
    },
  ];

  const features = [
    "Build volume & print speed",
    "Site prep & installation guidelines",
    "Power, connectivity, and material input requirements",
    "Safety protocols & remote diagnostics",
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px] gap-[60px] md:gap-[80px]">
      {/* First Section - Proven Performance */}
      <div className="flex flex-col lg:flex-row items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[1280px] mx-auto  rounded-[12px] p-[30px] md:p-[40px] lg:p-[50px]">
        {/* Left Image */}
        <SlideInLeft delay={0.2} duration={0.8} className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)]">
            <img
              src="/images/proven1.jpg"
              alt="Proven Performance"
              className="w-full h-full object-cover"
            />
          </div>
        </SlideInLeft>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[30px]">
          <FadeIn delay={0.3} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
              Proven Performance Across India
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
              Deployed in diverse conditions - from Ladakh's cold to Chennai's
              coastal heat.
            </p>
          </FadeIn>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-[24px] md:gap-[40px]">
            {stats.map((stat, index) => (
              <FadeIn key={stat.id} delay={0.5 + index * 0.1} duration={0.6}>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
                    {stat.number}
                  </h3>
                  <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.7} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
              Calibrated for local terrain & codes
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.8} duration={0.8}>
            <button
              onClick={() => {
                navigate("/projects");
                window.scrollTo(0, 0);
              }}
              className="flex items-center justify-center gap-[8px] px-[24px] py-[12px] btn-primary w-fit group"
            >
              <span className="text-card-mobile md:text-card font-semibold text-white">
                View Projects
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
      </div>

      {/* Second Section - Download Tech Specs */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[1280px] mx-auto rounded-[12px] p-[30px] md:p-[40px] lg:p-[50px]">
        {/* Right Image (slider from gantry images) */}
        <SlideInRight delay={0.2} duration={0.8} className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] md:h-[450px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)]">
            <SliderImages />
          </div>
        </SlideInRight>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[30px]">
          <FadeIn delay={0.3} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
              Download Full Technical Specs
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
              Get in-depth access to:
            </p>
          </FadeIn>

          {/* Features List */}
          <div className="flex flex-col gap-[16px]">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0.5 + index * 0.1} duration={0.6}>
                <div className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 w-[16px] h-[16px] mt-[6px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        fill="white"
                        stroke="#0D192D"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
                    {feature}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Button */}
          <FadeIn delay={0.9} duration={0.8}>
            <button className="flex items-center justify-center gap-[8px] px-[24px] py-[12px] btn-download w-fit group">
              <span className="text-card-mobile md:text-card font-semibold text-white">
                Download Tech Specs PDF
              </span>
              <svg
                className="w-[16px] h-[16px] text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m0 0l-4-4m4 4l4-4"
                />
              </svg>
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
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProvenPerformance;
