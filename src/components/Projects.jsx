import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  AnimatedButton,
  FadeIn,
  ScaleUp,
  SlideInUp,
} from "../utils/animations.jsx";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Housing");

  const tabs = ["Housing", "Public Infrastructure", "R&D and Institutional"];

  const projectData = {
    Housing: [
      {
        src: "/images/Group%2085.png",
        alt: "Housing Project 1",
      },
      {
        src: "/images/Group%2086.png",
        alt: "Housing Project 2",
      },
      {
        src: "/images/Group%2087.png",
        alt: "Housing Project 3",
      },
    ],
    "Public Infrastructure": [
      {
        src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectspublic1.jpg",
        alt: "Public Infrastructure Project 1",
      },
      {
        src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectspublic2.jpg",
        alt: "Public Infrastructure Project 2",
      },
      {
        src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectspublic3.jpg",
        alt: "Public Infrastructure Project 3",
      },
    ],
    "R&D and Institutional": [
      {
        src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectsrd.png",
        alt: "R&D and Institutional Project 1",
      },
    ],
  };

  const currentProjects = projectData[activeTab] || [];

  return (
    <section className="flex flex-col items-center gap-[60px] md:gap-[80px] w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-8">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[30px] md:gap-[41px] w-full">
        <FadeIn>
          <h2 className="font-outfit font-semibold text-title-mobile md:text-title text-center leading-[120%] tracking-[-0.02em] text-[#0D192D] capitalize">
            Explore Our Projects
          </h2>
        </FadeIn>

        {/* Tab Navigation */}
        <SlideInUp delay={0.2}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center py-[12px] gap-6 lg:gap-8 xl:gap-12 w-full max-w-[800px] bg-[#F1FAEE] rounded-[200px] px-6">
            {tabs.map((tab, index) => (
              <AnimatedButton
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-outfit font-normal text-card-mobile lg:text-card xl:text-card leading-[120%] tracking-[-0.02em] px-6 lg:px-8 py-3 rounded-[58px] transition-all duration-300 text-center capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white border border-[#B5D4AA] shadow-[0px_4px_4px_rgba(181,212,170,0.3)] text-[#000000]"
                    : "text-[#000000] hover:bg-white hover:bg-opacity-50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {tab}
              </AnimatedButton>
            ))}
          </div>

          {/* Mobile & Tablet Navigation */}
          <div className="md:hidden w-full max-w-[500px] bg-[#F1FAEE] rounded-[20px] p-4">
            <div className="flex flex-col gap-3">
              {tabs.map((tab, index) => (
                <AnimatedButton
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-outfit font-normal text-subtitle-mobile leading-[120%] tracking-[-0.02em] px-4 py-3 rounded-[20px] transition-all duration-300 text-center capitalize ${
                    activeTab === tab
                      ? "bg-white border border-[#B5D4AA] shadow-[0px_2px_4px_rgba(181,212,170,0.3)] text-[#000000]"
                      : "text-[#000000] hover:bg-white hover:bg-opacity-50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {tab}
                </AnimatedButton>
              ))}
            </div>
          </div>
        </SlideInUp>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-[1280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {currentProjects.length === 1 ? (
                // Single image layout for R&D
                <div className="flex justify-center">
                  <ScaleUp delay={0}>
                    <motion.img
                      src={currentProjects[0].src}
                      alt={currentProjects[0].alt}
                      className="w-[400px] h-[500px] object-cover rounded-[12px]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </ScaleUp>
                </div>
              ) : (
                // Three images layout for Housing and Public Infrastructure
                <div className="flex justify-center gap-8">
                  {currentProjects.map((project, index) => (
                    <ScaleUp key={index} delay={index * 0.1}>
                      <motion.img
                        src={project.src}
                        alt={project.alt}
                        className="w-[400px] h-[500px] object-cover rounded-[12px]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </ScaleUp>
                  ))}
                </div>
              )}
            </div>

            {/* Tablet Layout */}
            <div className="hidden sm:block lg:hidden">
              {currentProjects.length === 1 ? (
                // Single image layout for R&D
                <div className="flex justify-center">
                  <ScaleUp delay={0}>
                    <motion.img
                      src={currentProjects[0].src}
                      alt={currentProjects[0].alt}
                      className="w-full max-w-[500px] h-[420px] object-cover rounded-[12px]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </ScaleUp>
                </div>
              ) : (
                // Grid layout for multiple images
                <div className="grid grid-cols-2 gap-4">
                  {currentProjects.map((project, index) => (
                    <ScaleUp
                      key={index}
                      delay={index * 0.1}
                      className={
                        index === 2 ? "col-span-2 flex justify-center" : ""
                      }
                    >
                      <motion.img
                        src={project.src}
                        alt={project.alt}
                        className={`${
                          index === 2 ? "w-full max-w-[350px]" : "w-full"
                        } h-[380px] object-cover rounded-[12px]`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </ScaleUp>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Layout */}
            <div className="block sm:hidden">
              <div className="flex flex-col gap-4">
                {currentProjects.map((project, index) => (
                  <ScaleUp key={index} delay={index * 0.1}>
                    <motion.img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-[320px] object-cover rounded-[12px]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </ScaleUp>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;