import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

// Right-side slider used inside ReadyToBuildSmarter
const SliderContent = () => {
  const images = [
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom1.png",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom2.jpg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom3.png",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/buildingtom4.png",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % images.length),
      4000
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <>
      {images.map((img, idx) => (
        <div
          key={idx}
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-700"
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: active === idx ? 1 : 0,
            transform: active === idx ? "scale(1)" : "scale(1.05)",
          }}
        />
      ))}
      {/* Left / Right Navigation Buttons */}
      <button
        onClick={() =>
          setActive((s) => (s - 1 + images.length) % images.length)
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
        onClick={() => setActive((s) => (s + 1) % images.length)}
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
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === i ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
};

const ReadyToBuildSmarter = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px] ">
      <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[50px] lg:gap-[60px] w-full max-w-[1320px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-[24px] md:gap-[30px] w-full md:w-1/2">
          <SlideInLeft delay={0.2} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
              Ready to Build Smarter?
            </h2>
          </SlideInLeft>

          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#4A4A4A] tracking-[-0.02em]">
              We're here to help you assess, execute, and excel on your terms.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} duration={0.8}>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-[8px] btn-primary px-[24px] py-[12px] text-card-mobile md:text-card font-semibold tracking-[-0.02em] self-start shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
            >
              Contact Us
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 btn-icon"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </FadeIn>
        </div>

        {/* Right Image Slider (replaces static image) */}
        <div className="w-full md:w-1/2">
          <SlideInRight delay={0.3} duration={0.8}>
            <AnimatedCard className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer">
              {/* Slider images (absolute stacked, fade between them) */}
              {/** Images list **/}
              <SliderContent />
            </AnimatedCard>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuildSmarter;
