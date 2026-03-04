import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Ecosystem = () => {
  const navigate = useNavigate();

  const techImages = [
    "/images/robotimg.jpeg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/3decosystem2.jpg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/3decosystem.jpg",
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/3decosystem4.png",
    "/images/susmat.png",
  ];

  const ecosystemData = [
    {
      title: "3D Printers",
      description:
        "From industry-scale gantries to mobile robotic arms, our machines print faster and smarter.",
      image: techImages[0],
      path: "/our-technology/printers",
    },
    {
      title: "Accessories & Turnkey Services",
      description:
        "We offer more than machinery, from pumps to project execution, we're your build partner.",
      image: techImages[1],
      path: "/our-technology/accessories",
    },
    {
      title: "3D Printed Furniture",
      description:
        "Functional, sculptural, and built to last, our urban furniture blends aesthetic precision with print performance.",
      image: techImages[2],
      path: "/products",
    },
    {
      title: "Software",
      description:
        "From design to deployment, our in-house platform simplifies slicing, simulation, and print control.",
      image: techImages[3],
      path: "/our-technology/software",
    },
    {
      title: "Sustainable Materials",
      description:
        "From geopolymer blends to eco-concrete, our material portfolio supports sustainable, high-performance 3D printing across diverse applications.",
      image: techImages[4],
      path: "/our-technology/materials",
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-white md:pt-14 px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title text-[#0D192D]">
            Our 3D Construction Ecosystem
          </h2>
          <p className="font-outfit font-medium text-card-mobile md:text-description text-[#1D3357]">
            Where Innovation Becomes Infrastructure
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {ecosystemData.map((item, index) => (
            <div
              key={index}
              className={`${
                index === ecosystemData.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <motion.div
                onClick={() => handleCardClick(item.path)}
                className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${
                      item.image
                    }) center/${
                      index === 0 || index === ecosystemData.length - 1
                        ? "cover"
                        : "contain"
                    } no-repeat`,
                    backgroundColor:
                      index === 0 || index === ecosystemData.length - 1
                        ? "transparent"
                        : "#f5f5f5",
                  }}
                >
                  <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-2 font-outfit font-semibold text-card-mobile md:text-card text-[#0D192D] border border-white/15">
                    {item.title}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white font-outfit font-medium text-card-mobile md:text-card">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Ecosystem;
