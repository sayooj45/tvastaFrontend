import { motion } from "framer-motion";
import {
  AnimatedButton,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
} from "../utils/animations.jsx";

const WhyChoose3D = () => {
  return (
    <div className="flex flex-col items-center gap-14 w-full max-w-[1240px] px-4 lg:px-0">
      {/* Section Header */}
      <FadeIn delay={0.2} duration={0.8}>
        <div className="flex flex-col items-center gap-[10px] w-full text-center">
          <h2 className="font-outfit font-semibold text-title-mobile md:text-title leading-[140%] text-[#0D192D] w-full">
            Why Choose 3D Construction
          </h2>
          <p className="max-w-[804px] font-outfit font-normal text-description-mobile md:text-description leading-[30px] text-[#1D3357]">
            Build faster, waste less, and design smarter with sustainable 3D
            construction
          </p>
        </div>
      </FadeIn>

      {/* Features Grid */}
      <div className="flex flex-col gap-8 w-full">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* Faster Time to Build */}
          <SlideInLeft delay={0.4} duration={0.8}>
            <motion.div className="flex flex-col items-start gap-5 w-full lg:w-[597px] cursor-pointer group">
    
              <div className="relative w-[calc(100%+8rem)] -mx-16 lg:w-full lg:mx-0 h-[250px] lg:h-[318px] rounded-[10px] overflow-hidden">
      
                <img
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whychose3d1.jpg"
                  alt="Faster Time to Build"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  
                  <p className="text-white font-outfit font-medium text-description-mobile md:text-description leading-[120%] text-center px-6 
                                -translate-y-10 group-hover:translate-y-0 
                                transition-transform duration-300">
                    Complete homes and infrastructure in days, not months. Ideal
                    for urgent or large-scale needs.
                  </p>

                </div>

              </div>

              <h3 className="font-outfit font-semibold text-description-mobile md:text-description leading-[120%] text-[#0D192D] w-full text-center lg:text-left">
                Faster Time to Build
              </h3>

            </motion.div>
          </SlideInLeft>

          {/* Design Without Limits */}
          <SlideInRight delay={0.6} duration={0.8}>
            <motion.div
              className="flex flex-col items-start gap-5 w-full lg:w-[597px] cursor-pointer group"
            >
              <div className="relative w-[calc(100%+8rem)] -mx-16 lg:w-full lg:mx-0 h-[250px] lg:h-[318px] rounded-[10px] overflow-hidden ">
                <img
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whychose3d2.jpg"
                  alt="Design Without Limits"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-outfit font-medium text-description-mobile md:text-description leading-[120%] text-center px-6
                  -translate-y-10 group-hover:translate-y-0
                  transition-transform duration-300">
                    Print complex, organic forms without formwork. Bring bold
                    architectural ideas to life.
                  </p>
                </div>
              </div>
              <h3 className="font-outfit font-semibold text-description-mobile md:text-description leading-[120%] text-[#0D192D] w-full">
                Design Without Limits
              </h3>
            </motion.div>
          </SlideInRight>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* Lower Material Waste */}
          <SlideInLeft delay={0.8} duration={0.8}>
            <motion.div
              className="flex flex-col items-start gap-5 w-full lg:w-[597px] cursor-pointer group"
            >
              <div className="relative w-[calc(100%-4rem)] mx-auto lg:w-full lg:mx-0 h-[250px] lg:h-[318px] rounded-[10px] overflow-hidden ">
                <img
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/sdsd.png"
                  alt="Lower Material Waste"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-outfit font-medium text-description-mobile md:text-description leading-[120%] text-center px-6
                  -translate-y-10 group-hover:translate-y-0
                  transition-transform duration-300">
                    Precision printing cuts down material use and reduces
                    construction waste upto 80%.
                  </p>
                </div>
              </div>
              <h3 className="font-outfit font-semibold text-description-mobile md:text-description leading-[120%] text-[#0D192D] w-full text-center lg:text-left">
                Lower Material Waste
              </h3>
            </motion.div>
          </SlideInLeft>

          {/* Built to Withstand */}
          <SlideInRight delay={1.0} duration={0.8}>
            <motion.div
              className="flex flex-col items-start gap-5 w-full lg:w-[597px] cursor-pointer group"
            >
              <div className="relative w-[calc(100%-4rem)] mx-auto lg:w-full lg:mx-0 h-[250px] lg:h-[318px] rounded-[10px] overflow-hidden">
                <img
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whychose3d4.png"
                  alt="Built to Withstand"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-outfit font-medium text-description-mobile md:text-description leading-[120%] text-center px-6
                  -translate-y-10 group-hover:translate-y-0
                  transition-transform duration-300">
                    Structures tested across diverse climates, built to last,
                    backed by real-world performance.
                  </p>
                </div>
              </div>
              <h3 className="font-outfit font-semibold text-description-mobile md:text-description leading-[120%] text-[#0D192D] w-full text-center lg:text-left">
                Built to Withstand
              </h3>
            </motion.div>
          </SlideInRight>
        </div>
      </div>

      {/* CTA Button */}
      {/* <SlideInUp delay={1.2} duration={0.6}>
        <AnimatedButton
          className="flex items-center justify-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[10px] btn-primary font-outfit font-semibold text-card-mobile md:text-card cursor-pointer whitespace-nowrap"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-outfit font-semibold text-card-mobile md:text-card leading-[23px] text-white">
            See How It Works
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
      </SlideInUp> */}
    </div>
  );
};

export default WhyChoose3D;
