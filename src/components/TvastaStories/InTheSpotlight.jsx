import React from "react";
import { motion } from "framer-motion";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";
import { href } from "react-router-dom";

const InTheSpotlight = () => {
  const spotlightItems = [
    {
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/Frame%202085660916.png",
      title:
        "India's First 3D Printed House with Ministry of Housing & Urban Affairs",
      href: "https://www.designdekko.com/featured/iit-madras-start-up-builds-indias-first-3d-printed-house",
    },
    {
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/Frame%202085660917.png",
      title: "IIT Madras Collaboration Coverage",
      href: "https://www.ndtv.com/education/iit-madras-faculty-alumni-develop-indias-first-3d-printing-construction-technology-1938598",
    },
    {
      image: "/images/nationalawards.webp",
      title: "National Awards or Certifications",
      href: "https://www.dailyo.in/business/anand-mahindra-tvasta-twitter-35296",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8 py-[80px] md:py-[100px]">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        <FadeIn delay={0.2} duration={0.8}>
          <h2 className="text-subtitle-mobile md:text-title font-semibold text-center text-[#0D192D] max-w-[800px] font-['Outfit']">
            In the Spotlight
          </h2>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.8}>
          <p className="text-card-mobile md:text-description font-medium text-center text-[#1D3357] max-w-[900px] font-['Outfit']">
            Breakthroughs, launches, and landmark collaborations that define who
            we are and where we're going.
          </p>
        </FadeIn>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
        {spotlightItems.map((item, index) => (
          <SlideInUp
            key={index}
            delay={0.2 + index * 0.1}
            duration={0.8}
            threshold={0}
            className="flex-1 w-full lg:w-auto"
          >
            {/* wrap with anchor only if href exists; anchor uses 'group' for hover effects */}
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className="w-full group"
              >
                <AnimatedCard
                  className="relative flex flex-col justify-end items-start p-3 gap-2.5 w-full h-[400px] md:h-[450px] lg:h-[500px] bg-[#606060] rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 600, damping: 10 }}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Arrow link indicator (hidden until hover) */}
                  <div className="absolute top-3 right-3 opacity-0 transform translate-y-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-1">
                    <div className="bg-white/90 rounded-full p-2 shadow-md flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#0D192D]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex justify-center items-center p-2.5 gap-2.5 w-full bg-white rounded-[10px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-outfit font-medium text-card text-[#0D192D] text-center">
                      {item.title}
                    </p>
                  </motion.div>
                </AnimatedCard>
              </a>
            ) : (
              <div className="w-full">
                <AnimatedCard
                  className="relative flex flex-col justify-end items-start p-3 gap-2.5 w-full h-[400px] md:h-[450px] lg:h-[500px] bg-[#606060] rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 600, damping: 10 }}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Content Card */}
                  <motion.div
                    className="flex justify-center items-center p-2.5 gap-2.5 w-full bg-white rounded-[10px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-outfit font-medium text-card text-[#0D192D] text-center">
                      {item.title}
                    </p>
                  </motion.div>
                </AnimatedCard>
              </div>
            )}
          </SlideInUp>
        ))}
      </div>
    </section>
  );
};

export default InTheSpotlight;
