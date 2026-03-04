import React from "react";
import { AnimatedButton, FadeIn, SlideInUp } from "../utils/animations.jsx";
import { useNavigate } from "react-router-dom";

const Hero = React.memo(() => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[818px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
          }}
        >
          {/* https://tvasta.blr1.cdn.digitaloceanspaces.com/media/herovideo.mp4 */}
          {/* https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Tvasta%20Website%20video_2%20(2).mp4 */}
          {/* https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Tvasta%20Website%20video_2%20(2).mp4 */}
          {/* https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Tvasta%20Hero%20section.mp4 */}
          <source
            src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Tvasta%20Hero%20section.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-[92px] pt-[100px]">
        <div className="flex flex-col items-center gap-10 w-full max-w-[1256px] text-center">
          {/* Main Content */}
          <div className="flex flex-col items-center gap-[30px] w-full filter drop-shadow-[0px_0px_24.9px_rgba(0,0,0,0.59)]">
            {/* Main Heading */}
            <FadeIn delay={0.3} duration={0.8}>
              <h1 className="w-full max-w-[1256px] font-outfit font-semibold text-title-mobile md:text-title leading-[106.2%] text-center tracking-[-0.02em] capitalize text-white">
                Pioneering India's 3D Construction Revolution
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.6} duration={0.8}>
              <p className="max-w-[857px] font-outfit font-semibold text-description-mobile md:text-description leading-[170%] text-center tracking-[-0.02em] text-white">
                Trusted by innovators. Ready to deploy
              </p>
            </FadeIn>
          </div>

          {/* CTA Button */}
          <SlideInUp delay={0.9} duration={0.6}>
            <div className="flex items-start gap-10">
              <AnimatedButton
                onClick={() => {
                  navigate("/our-technology/printers");
                  window.scrollTo(0, 0);
                }}
                className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[10px] btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-outfit font-semibold text-card-mobile md:text-card leading-[18px] text-white">
                  Explore Printers
                </span>
                <svg
                  className="w-5 h-5 text-white flex-shrink-0 btn-icon"
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
            </div>
          </SlideInUp>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
