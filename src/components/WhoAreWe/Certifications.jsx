import { motion } from "framer-motion";
import { FadeIn, StaggeredList } from "../../utils/animations.jsx";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/image%2012.jpg",
      alt: "Certification 1",
    },
    {
      id: 2,
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Frame%202085660958.jpg",
      alt: "Certification 2",
    },
    {
      id: 3,
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/image%2011.jpg",
      alt: "Certification 3",
    },
    {
      id: 4,
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Frame%202085660957.jpg",
      alt: "Certification 4",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 ">
      {/* Title */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center gap-3 w-full max-w-[1280px] mx-auto">
          <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title text-center text-[#0D192D]">
            Certifications
          </h2>
        </div>
      </FadeIn>

      {/* Certifications Grid */}
      <StaggeredList
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-14 w-full max-w-[1000px] mx-auto"
        delay={0.4}
        staggerDelay={0.1}
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="w-full h-[120px] sm:h-[140px] md:h-[160px] bg-white rounded-[8px] flex items-center justify-center overflow-hidden border border-gray-200"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={cert.image}
              alt={cert.alt}
              className="w-full h-full object-contain p-2"
            />
          </motion.div>
        ))}
      </StaggeredList>
    </div>
  );
};

export default Certifications;
