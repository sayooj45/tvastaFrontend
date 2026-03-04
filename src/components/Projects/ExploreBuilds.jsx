import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInFromLeft,
} from "../../utils/animations";

const ExploreBuilds = () => {
  const [activeCategory, setActiveCategory] = useState("Housing");

  const categories = [
    "Housing",
    "Public Infrastructure",
    "R&D and Institutional",
  ];

  const projectData = {
    Housing: [
      {
        id: 1,
        category: "Housing",
        title: "IITM house",
        description: "Complete homes and infrastructure in days, not months.",
        image:
          "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta1.jpg",
      },
      {
        id: 2,
        category: "Housing",
        title: "Indian Airforce Guest House",
        description: "Sustainable housing solutions with innovative design.",
        image:
          "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectshouse2.jpg",
      },
      {
        id: 3,
        category: "Housing",
        title: "GPL Villa",
        description: "Modern residential construction using 3D printing.",
        image:
          "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectshouse3.jpg",
      },
    ],
    "Public Infrastructure": [
      {
        id: 4,
        category: "Public Infrastructure",
        title: "GCC Bus Shelter",
        description: "Infrastructure projects built for communities.",
        image:
          "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectspublic1.jpg",
      },
      {
        id: 5,
        category: "Public Infrastructure",
        title: "Haslat Shelter",
        description: "Large-scale public construction initiatives.",
        image:
          "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectspublic2.jpg",
      },
      {
        id: 6,
        category: "Public Infrastructure",
        title: "Chepauk Boundary wall",
        description: "Public facilities designed for sustainability.",
        image:
          "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectspublic3.jpg",
      },
    ],
    "R&D and Institutional": [
      {
        id: 7,
        category: "R&D and Institutional",
        title: "IITM booth",
        description: "Research and institutional development projects.",
        image:
          "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/projectsrd.png",
      },
    ],
  };

  // Get current projects based on active category
  const currentProjects = projectData[activeCategory] || [];

  return (
    <section className="w-full py-[80px] bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-[60px] w-full max-w-[1440px] mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center items-center gap-[15px] sm:gap-[20px] w-full px-4 md:px-8 lg:px-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-subtitle-mobile md:text-title font-semibold leading-[125%] text-[#0D192D] text-center font-['Outfit']"
          >
            Explore Our Builds
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-card-mobile md:text-description font-medium leading-[125%] text-[#1D3357] text-center capitalize max-w-[1200px] mx-auto px-4 font-['Outfit']"
          >
            Projects Powered By Tvasta's Technology Across Terrains, Timelines,
            And Typologies.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center items-center w-full px-4 md:px-8 lg:px-16"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center py-[8px] sm:py-[10px] md:py-[11px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[60px] gap-[12px] sm:gap-[20px] md:gap-[30px] lg:gap-[50px] xl:gap-[62px] bg-[#F1FAEE] rounded-[200px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-[16px] sm:px-[18px] md:px-[20px] lg:px-[24px] xl:px-[28px] py-[6px] sm:py-[7px] md:py-[8px] lg:py-[10px] xl:py-[12px] rounded-[58px] text-card-mobile md:text-card leading-[120%] tracking-[-0.02em] capitalize transition-all duration-300 whitespace-nowrap font-['Outfit']
                           ${
                             activeCategory === category
                               ? "bg-white text-[#0D192D] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] border border-[#DDDDDD]"
                               : "text-[#0D192D] hover:bg-white/50"
                           }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="w-full px-4 md:px-8 lg:px-16 max-w-[1280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {currentProjects.length === 1 ? (
                // Single project layout for R&D and Institutional
                <div className="flex justify-center items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 600, damping: 10 }}
                    className="flex flex-col justify-between items-start p-[12px] sm:p-[14px] md:p-[16px] gap-[140px] sm:gap-[160px] md:gap-[180px] lg:gap-[200px] xl:gap-[222px] w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[400px] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden relative group cursor-pointer"
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('${currentProjects[0].image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backdropFilter: "blur(24px)",
                    }}
                  >
                    {/* Project Tag */}
                    <div className="flex flex-row justify-center items-center py-[6px] sm:py-[7px] md:py-[8px] px-[10px] sm:px-[11px] md:px-[12px] bg-white/90 backdrop-blur-[24px] border border-white/15 rounded-[9999px]">
                      <span className="text-card-mobile md:text-card font-semibold leading-[160%] text-[#0D192D] font-['Outfit']">
                        {currentProjects[0].title}
                      </span>
                    </div>

                    {/* Project Description */}
                    <div className="w-full">
                      <p className="text-card-mobile md:text-card font-semibold leading-[160%] text-white w-full font-['Outfit']">
                        {currentProjects[0].description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              ) : (
                // Multiple projects layout
                <>
                  {/* First Row */}
                  <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[40px] w-full mb-[30px] sm:mb-[35px] md:mb-[40px]">
                    {currentProjects.slice(0, 3).map((project, index) => (
                      <motion.div
                        key={`${activeCategory}-${project.id}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 600,
                          damping: 10,
                        }}
                        className="flex flex-col justify-between items-start p-[12px] sm:p-[14px] md:p-[16px] gap-[140px] sm:gap-[160px] md:gap-[180px] lg:gap-[200px] xl:gap-[222px] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[400px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[400px] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden relative group cursor-pointer"
                        style={{
                          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('${project.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backdropFilter: "blur(24px)",
                        }}
                      >
                        {/* Project Tag */}
                        <div className="flex flex-row justify-center items-center py-[6px] sm:py-[7px] md:py-[8px] px-[10px] sm:px-[11px] md:px-[12px] bg-white/90 backdrop-blur-[24px] border border-white/15 rounded-[9999px]">
                          <span className="text-card-mobile md:text-card font-semibold leading-[160%] text-[#0D192D] font-['Outfit']">
                            {project.title}
                          </span>
                        </div>

                        {/* Project Description */}
                        <div className="w-full">
                          <p className="text-card-mobile md:text-card font-semibold leading-[160%] text-white w-full font-['Outfit']">
                            {project.description}
                          </p>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Second Row - if more than 3 projects */}
                  {currentProjects.length > 3 && (
                    <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[40px] w-full">
                      {currentProjects.slice(3).map((project, index) => (
                        <motion.div
                          key={`${activeCategory}-${project.id}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 10,
                          }}
                          className="flex flex-col justify-between items-start p-[12px] sm:p-[14px] md:p-[16px] gap-[140px] sm:gap-[160px] md:gap-[180px] lg:gap-[200px] xl:gap-[222px] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] xl:max-w-[400px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[400px] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden relative group cursor-pointer"
                          style={{
                            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('${project.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backdropFilter: "blur(24px)",
                          }}
                        >
                          {/* Project Tag */}
                          <div className="flex flex-row justify-center items-center py-[6px] sm:py-[7px] md:py-[8px] px-[10px] sm:px-[11px] md:px-[12px] bg-white/90 backdrop-blur-[24px] border border-white/15 rounded-[9999px]">
                            <span className="text-card-mobile md:text-card font-semibold leading-[160%] text-[#0D192D] font-['Outfit']">
                              Project Name
                            </span>
                          </div>

                          {/* Project Description */}
                          <div className="w-full">
                            <p className="text-card-mobile md:text-card font-semibold leading-[160%] text-white w-full font-['Outfit']">
                              {project.description}
                            </p>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ExploreBuilds;
