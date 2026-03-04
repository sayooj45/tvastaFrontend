import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideInLeft, SlideInRight } from "../utils/animations.jsx";

const WhyTvasta = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#F8F9FA] rounded-2xl">
      <div className="flex flex-col items-start gap-12 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-16 w-full">
          <SlideInLeft className="flex flex-col justify-center items-start md:w-[40%]">
            <p className="font-outfit font-semibold text-description-mobile md:text-description text-[#E63946] mb-2">
              Why Tvasta
            </p>
            <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle text-[#0D192D]">
              Built on Research. Proven in Concrete
            </h2>
          </SlideInLeft>

          <SlideInRight className="md:w-[60%]">
            <p className="font-outfit font-normal text-card-mobile md:text-card text-[#1D3357]">
              Founded at IIT Madras in 2016, Tvasta is redefining construction
              with scalable, sustainable 3D printing technology. Our mission:
              build intelligently, sustainably, and accessibly.
              <br />
              <span
                onClick={() => {
                  navigate("/who-we-are");
                  window.scrollTo(0, 0);
                }}
                className="text-[#E63946] underline cursor-pointer hover:no-underline transition-all"
              >
                Know More…
              </span>
            </p>
          </SlideInRight>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
          <motion.div
            className="relative w-full md:w-[360px] h-[320px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 600, damping: 10 }}
          >
            <div className="w-full h-full relative">
              <img
                src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta1.jpg"
                alt="25,000+ Sq. Ft. 3D Printed"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

              <div className="absolute bottom-6 left-4 right-4 z-20 flex flex-col gap-2">
                <h3 className="font-outfit font-semibold text-lg md:text-card leading-tight text-white max-w-full md:max-w-[332px]">
                  25,000+
                  <br /> Sq. Ft. 3D Printed
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full md:w-[360px] h-[320px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 600, damping: 10 }}
          >
            <div className="w-full h-full relative">
              <img
                src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta2.png"
                alt="66% Cement Replaced in Mixes"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

              <div className="absolute bottom-6 left-4 right-4 z-20 flex flex-col gap-2">
                <h3 className="font-outfit font-semibold text-lg md:text-card leading-tight text-white max-w-full md:max-w-[332px]">
                  66% <br /> Cement Replaced in Mixes
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full md:w-[360px] h-[320px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 600, damping: 10 }}
          >
            <div className="w-full h-full relative">
              <img
                src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta3.jpg"
                alt="Global Footprint"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

              <div className="absolute bottom-6 left-4 right-4 z-20 flex flex-col gap-2">
                <h3 className="font-outfit font-semibold text-lg md:text-card leading-tight text-white max-w-full md:max-w-[332px]">
                  Global Footprint
                  <br />
                  <span className="text-lg md:text-card">
                    Asia Pacific - Middle East - USA
                  </span>
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyTvasta;
