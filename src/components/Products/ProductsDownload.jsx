import React, { useState } from "react";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedButton,
  AnimatedCard,
} from "../../utils/animations.jsx";
import BrochureForm from "../BrochureForm.jsx";

const ProductsDownload = () => {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  return (
    <section className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] w-full max-w-[1280px] px-4 md:px-8">
      {/* Image */}
      <SlideInLeft
        delay={0.2}
        duration={0.8}
        className="w-full md:w-[508px] h-[250px] md:h-[350px] rounded-[24px] overflow-hidden order-2 md:order-1"
      >
        <AnimatedCard className="w-full h-full" whileHover={{ scale: 1.05 }}>
          <img
            src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/Rectangle%20133.png"
            alt="Technical Specifications"
            className="w-full h-full object-cover bg-[#D9D9D9] transition-transform duration-300"
          />
        </AnimatedCard>
      </SlideInLeft>

      {/* Content */}
      <SlideInRight
        delay={0.4}
        duration={0.8}
        className="flex flex-col justify-center items-start py-6 gap-[10px] w-full md:flex-1 order-1 md:order-2"
      >
        <div className="flex flex-col items-start gap-[28px] w-full">
          {/* Title */}
          <FadeIn delay={0.6} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[1.3] tracking-[-0.03em] text-[#0D192D] max-w-[601px]">
              Explore technical specs, design options, and past installations.
            </h2>
          </FadeIn>

          {/* Download Button */}
          <FadeIn delay={0.8} duration={0.8}>
            <AnimatedButton
              className="flex items-center justify-center px-7 py-4 gap-[10px] btn-download group"
              onClick={() => setShowBrochureForm(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-card-mobile md:text-card font-semibold text-white">
                Download Furniture Brochure
              </span>
              <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-[12px] h-[12px] text-[#E63946]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
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
          </FadeIn>
        </div>
      </SlideInRight>
      {showBrochureForm && (
        <BrochureForm onClose={() => setShowBrochureForm(false)} />
      )}
    </section>
  );
};

export default ProductsDownload;
