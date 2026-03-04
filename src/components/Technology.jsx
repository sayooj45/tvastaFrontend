import { useState } from "react";
import {
  AnimatedButton,
  SlideInLeft,
  SlideInRight,
} from "../utils/animations.jsx";
import BrochureForm from "./BrochureForm.jsx";

const Technology = () => {

  const [showBrochureForm, setShowBrochureForm] = useState(false);

  return (
    <div className="w-full bg-[#0D192D] rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[106px] w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-20">
        {/* Left Content */}
        <SlideInLeft className="flex flex-col items-start gap-10 w-full lg:w-[710px]">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title leading-[60px] text-white">
              Explore the Technology Behind the Builds
            </h2>
            <p className="font-outfit font-normal text-card-mobile md:text-description leading-[30px] text-white/60">
              Get the full specs, materials, timelines, and real-world
              applications in one comprehensive guide.
            </p>
          </div>

          <AnimatedButton
            onClick={() => setShowBrochureForm(true)}
            className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[14px] btn-download w-fit whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 relative flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="font-outfit font-medium text-card-mobile md:text-card text-white">
              Download the Tech Brochure
            </span>
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
        </SlideInLeft>

        {/* Right Image */}
        <SlideInRight className="w-full lg:w-[424px] h-[500px] rounded-2xl overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/Rectangle.png')`,
            }}
          />
        </SlideInRight>
      </div>
      {showBrochureForm && (
        <BrochureForm onClose={() => setShowBrochureForm(false)} />
      )}
    </div>
  );
};

export default Technology;
