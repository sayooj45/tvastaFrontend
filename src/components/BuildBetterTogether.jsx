import React from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn, SlideInUp, AnimatedButton } from "../utils/animations.jsx";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const BuildBetterTogether = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="relative w-full rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden"
        style={{
          backgroundImage: `url('/images/contactusbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-9 md:py-10">
          {/* Text Content */}
          <div className="flex flex-col gap-2 md:gap-3 text-center md:text-left">
            <FadeIn delay={0.2}>
              <h2 className="text-title-mobile md:text-title font-bold text-white leading-tight">
                Let's Build Better, Together
              </h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-description-mobile md:text-description font-normal text-white/90">
                Have a project in mind? Connect with us to bring your vision to
                life.
              </p>
            </FadeIn>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <AnimatedButton
              className="flex items-center justify-center gap-2 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 btn-white whitespace-nowrap shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
            >
              <span className="text-card-mobile md:text-card font-semibold text-[#0D192D]">
                Contact Us
              </span>
              <EnvelopeIcon className="w-5 h-5 text-[#0D192D]" />
              <svg
                className="w-5 h-5 text-[#0D192D] btn-icon"
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
      </div>
    </div>
  );
};

export default BuildBetterTogether;
