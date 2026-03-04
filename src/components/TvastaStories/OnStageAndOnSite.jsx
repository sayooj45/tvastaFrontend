import React from "react";
import { motion } from "framer-motion";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";

const OnStageAndOnSite = () => {
  const stageItems = [
    {
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/spot1.jpg",
      title: "Industry panel participation",
    },
    {
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/spot2.jpg",
      title: "Academic sessions at IITs",
    },
    {
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/spot2.png",
      title: "Print demos at expos",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[60px] w-full max-w-[1441px] mx-auto px-4 md:px-8 lg:px-20">
      {/* Section Header */}
      <FadeIn className="flex flex-col justify-center items-center gap-5 w-full px-4 md:px-8 lg:px-20">
        <SlideInUp delay={0.2}>
          <h2 className="w-full font-outfit font-semibold text-subtitle-mobile md:text-title text-center text-[#0D192D] max-w-[1281px]">
            On Stage and On-Site
          </h2>
        </SlideInUp>

        <SlideInUp delay={0.4}>
          <p className="w-full max-w-[1035px] font-outfit font-medium text-card-mobile md:text-description text-center capitalize text-[#1D3357]">
            See where Tvasta's been live demos, keynotes, and smart city
            showcases.
          </p>
        </SlideInUp>
      </FadeIn>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-center gap-5 w-full max-w-[1280px]">
        {stageItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="flex-1 w-full lg:w-auto"
          >
            <AnimatedCard
              className="flex flex-col justify-end items-start p-3 gap-2.5 w-full h-[400px] md:h-[450px] lg:h-[500px] bg-[#606060] rounded-2xl overflow-hidden cursor-pointer"
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OnStageAndOnSite;
