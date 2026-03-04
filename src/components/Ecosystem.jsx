import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FadeIn, SlideInUp, StaggeredList } from "../utils/animations.jsx";

const Ecosystem = () => {
  const routeMap = {
    "3D Printers": "/our-technology/printers",
    "Accessories & Turnkey Services": "/our-technology/accessories",
    Software: "/our-technology/software",
    "Sustainable Materials": "/our-technology/materials",
  };
  const navigate = useNavigate();
  const navigateTo = (tag) => {
    window.scrollTo(0, 0);
    navigate(routeMap[tag]);
  };
  const ecosystemItems = [
    {
      title: "3D Printers",
      description:
        "Precision gantries and robotic arms built for scalable, on-site construction.",
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/3d%20ecosystem.jpg",
      tag: "3D Printers",
    },
    {
      title: "Accessories & Turnkey Services",
      description:
        "End-to-end support from hardware to full project execution.",
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Accessories%20&%20Turnkey%20Services.png",
      tag: "Accessories & Turnkey Services",
    },
    {
      title: "Software",
      description:
        "Advanced tools for slicing, simulation, and real-time print control.",
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Software.png",
      tag: "Software",
    },
    {
      title: "Sustainable Materials",
      description:
        "Eco-friendly mixes engineered for strength, speed, and durability.",
      image: "/images/newsustain.jpeg",
      tag: "Sustainable Materials",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="flex flex-col items-start gap-16 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-20 py-14 ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 w-full">
          <FadeIn className="flex flex-col justify-center items-start lg:w-[40%]">
            <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle leading-8 lg:leading-[60px] text-[#0D192D]">
              The Complete 3D Construction Ecosystem
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:w-[60%]">
            <p className="font-outfit font-normal text-description-mobile md:text-description leading-[30px] text-[#1D3357]">
              From industrial-grade printers to automation-ready software.Tvasta
              delivers the full stack for next-gen construction.
            </p>
          </FadeIn>
        </div>

        {/* Ecosystem Cards */}
        <StaggeredList
          staggerDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-[380px] lg:h-[420px] rounded-[20px] overflow-hidden group cursor-pointer"
              onClick={() => navigateTo(item.tag)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigateTo(item.tag);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Go to ${item.tag}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 600, damping: 10 }}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-1.5 bg-white rounded-full z-10">
                  <span className="font-outfit font-medium text-card-mobile md:text-card text-[#0D192D]">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredList>
      </div>
    </div>
  );
};

export default Ecosystem;
