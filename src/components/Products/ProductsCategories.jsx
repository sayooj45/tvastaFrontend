import React from "react";
import {
  FadeIn,
  SlideInUp,
  StaggeredList,
  AnimatedCard,
} from "../../utils/animations.jsx";

const ProductsCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Sustainable Materials",
      description:
        "Printed using low-carbon concrete mixes, with options for recycled content",
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/tvastafur1.jpg",
      buttonText: "Sustainable Materials",
    },
    {
      id: 2,
      title: "Custom Fabrication",
      description:
        "Profiles, textures, and finishes can be tailored to fit project aesthetics",
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/prod3.jpg",
      buttonText: "Custom Fabrication",
    },
    {
      id: 3,
      title: "Ready for Urban Integration",
      description:
        "Ideal for smart city projects, institutional campuses, or contemporary commercial zones",
      image:
        "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Products/tvastafur3.jpg",
      buttonText: "Ready for Urban Integration",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-20">
      <div className="flex flex-col items-center gap-[60px] w-full max-w-[1280px]">
        {/* Section Title */}
        <div className="flex flex-col items-center gap-[10px] w-full">
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[1.4] text-center text-[#0D192D]">
              Why Choose Tvasta Furniture?
            </h2>
          </FadeIn>
        </div>

        {/* Categories Grid */}
        <StaggeredList
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] w-full"
          delay={0.4}
          staggerDelay={0.2}
        >
          {categories.map((category, index) => (
            <AnimatedCard
              key={category.id}
              className="flex flex-col justify-between items-start p-4 gap-[20px] w-full h-[350px] md:h-[400px] rounded-[24px] overflow-hidden relative group cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 600, damping: 10 }}
            >
              {/* Button */}
              <div className="flex justify-start items-center px-3 py-2 bg-white/95 backdrop-blur-md border border-white/15 rounded-full w-fit">
                <span className="text-card-mobile md:text-card font-semibold leading-[1.6] text-[#0D192D] text-left">
                  {category.buttonText}
                </span>
              </div>

              {/* Description */}
              <p className="text-card-mobile md:text-card font-semibold leading-[1.6] text-white text-start max-w-[90%] px-2">
                {category.description}
              </p>
            </AnimatedCard>
          ))}
        </StaggeredList>
      </div>
    </section>
  );
};

export default ProductsCategories;
