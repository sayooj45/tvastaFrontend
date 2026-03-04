import React from "react";
import { FadeIn, SlideInUp, AnimatedCard } from "../../utils/animations.jsx";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const FeaturedInsights = () => {
  const insights = [
    {
      id: 1,
      image: "/images/lk1.jpg",
      title:
        "Behind this 3D-printed accented wall is a parametric design system that defines toolpaths, curvature, and material flow in real time. Subtle variations in depth are intentionally programmed to enhance light interaction, acoustic diffusion, and structural stiffness.The wall demonstrates how digital fabrication can replace complex formwork and allow architects to create mathematically driven surfaces with remarkable precision.This is more than aesthetic detailing, its a shift toward a computational construction language where material, geometry, and innovation converge.",
      link: "https://www.linkedin.com/posts/tvasta_behind-this-3d-printed-accented-wall-is-a-activity-7396212546904547328-SIS_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhawwB-P5yTFMaTvMW12AAsjmxZ2fIVpQ",
    },
    {
      id: 2,
      image: "/images/lk2.jpg",
      title:
        "Where Design Meets Precision—India’s First 3D Printed VillaCorners that catch the light just right.Curves that flow seamlessly into structure.Edges that define space with bold clarity.Every angle of this architectural marvel is a testament to innovation—crafted with Tvasta’s advanced 3D printing technology, in partnership with Godrej Properties Limited. This villa is more than just a structure; it’s a vision brought to life, redefining the future of construction. Because architecture isnt just about shelter—its about creating spaces that inspire.",
      link: "https://www.linkedin.com/posts/tvasta_tvasta-3dprinting-constructiontech-activity-7302684874312691712-UvGA/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhawwB-P5yTFMaTvMW12AAsjmxZ2fIVpQ",
    },
    {
      id: 3,
      image: "/images/lk3.jpg",
      title:
        "More than just walls and windows, this 3D-printed rest house reflects a thoughtful design philosophy—one that anticipates need, enhances usability, and adapts to its environment. From structural integrity to everyday functionality, every layer was printed to serve, support, and simplify.",
      link: "https://www.linkedin.com/posts/tvasta_tvasta-3d-3dprinting-activity-7338550286690488321-7ACz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhawwB-P5yTFMaTvMW12AAsjmxZ2fIVpQ",
    },
  ];

  const [expanded, setExpanded] = React.useState([false, false, false]);
  const WORD_LIMIT = 35;

  const handleToggle = (idx) => {
    setExpanded((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <div className="flex flex-col items-center gap-[60px] w-full max-w-[1441px] mx-auto px-4 md:px-8 lg:px-20">
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <FadeIn>
            <h2 className="text-title-mobile md:text-title font-semibold text-[#0D192D] leading-tight">
              Latest from LinkedIn
            </h2>
          </FadeIn>

          <SlideInUp delay={0.2}>
            <button
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 btn-primary whitespace-nowrap"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/tvasta/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span className="text-card-mobile md:text-card font-semibold text-white">
                Visit LinkedIn
              </span>
              <ArrowUpRightIcon className="w-4 h-4 text-white" />
            </button>
          </SlideInUp>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {insights.map((insight, index) => (
            <SlideInUp key={insight.id} delay={0.1 * index}>
              <AnimatedCard
                className="group relative flex flex-col gap-4 bg-white overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 600, damping: 10 }}
              >
                {/* Image Container */}
                <div
                  className="relative w-full h-[340px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-[20px] cursor-pointer"
                  onClick={() =>
                    window.open(insight.link, "_blank", "noopener,noreferrer")
                  }
                  role="button"
                  tabIndex={0}
                  aria-label="Open LinkedIn post"
                >
                  <img
                    src={insight.image}
                    alt={`Insight ${insight.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 "
                  />

                  {/* Black Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRightIcon className="w-5 h-5 text-[#0D192D]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <p className="text-description-mobile md:text-description font-normal text-[#0D192D] leading-relaxed">
                    {expanded[index]
                      ? insight.title
                      : insight.title
                          .split(" ")
                          .slice(0, WORD_LIMIT)
                          .join(" ") +
                        (insight.title.split(" ").length > WORD_LIMIT
                          ? "..."
                          : "")}{" "}
                    <span
                      className="text-card-mobile md:text-card font-semibold text-[#FF0000] hover:text-[#CC0000] transition-colors duration-300 cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      {expanded[index] ? "Read less" : "Read more..."}
                    </span>
                  </p>
                </div>
              </AnimatedCard>
            </SlideInUp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
