import { FadeIn } from "../../utils/animations.jsx";

const KeyCollaborations = () => {
  const logos = [
    { src: "/images/pioneers/Frame-1.png", alt: "Partner 1" },
    { src: "/images/pioneers/Frame.png", alt: "Partner 2" },
    { src: "/images/pioneers/image 12.png", alt: "Partner 3" },
    { src: "/images/pioneers/Rectangle 34625219.png", alt: "Partner 4" },
    { src: "/images/pioneers/Rectangle 34625222.png", alt: "Partner 5" },
    { src: "/images/pioneers/Rectangle 34625224.png", alt: "Partner 6" },
    { src: "/images/pioneers/Rectangle 34625225.png", alt: "Partner 7" },
    { src: "/images/pioneers/Rectangle 34625226.png", alt: "Partner 8" },
    { src: "/images/pioneers/Rectangle 34625229.png", alt: "Partner 9" },
    { src: "/images/pioneers/Rectangle 34625230.png", alt: "Partner 10" },
  ];

  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-10  overflow-hidden">
      {/* Section Title */}
      <FadeIn delay={0.2}>
        <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title text-center text-[#0D192D]">
          Key Collaborations
        </h2>
      </FadeIn>

      {/* Infinite Scrolling Logos (same as Partners) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-12 md:gap-16 lg:gap-20"
          style={{
            animation: "scroll-logos 20s linear infinite",
            width: "max-content",
          }}
        >
          {doubledLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 w-[120px] h-[60px] sm:w-[140px] sm:h-[70px] md:w-[160px] md:h-[80px] lg:w-[180px] lg:h-[90px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyCollaborations;
