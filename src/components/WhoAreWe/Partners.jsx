import { FadeIn, ScaleUp, StaggeredList } from '../../utils/animations.jsx';

const Partners = () => {
  const logos = [
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo1.png", alt: "Partner 1", width: "150px", height: "80px" },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo4.png", alt: "Partner 2", width: "200px", height: "80px" },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/navam.png", alt: "Partner 3", width: "219px", height: "56px" },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/habitat.png", alt: "Partner 4", width: "120px", height: "40px" },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo3.png", alt: "Partner 5", width: "150px", height: "80px" },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo2.png", alt: "Partner 6", width: "150px", height: "80px" }
  ];

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-10 my-6 sm:my-16 md:my-10">
      {/* Section Title */}
      <FadeIn delay={0.2}>
        <h2 className="font-outfit font-medium text-description-mobile md:text-description leading-[140%] text-center text-[#0D192D]">
          Pioneers since 2016
        </h2>
      </FadeIn>

      {/* Partners Logos */}
      <StaggeredList
        staggerDelay={0.15}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 md:gap-10 w-full max-w-[1200px]"
      >
        {logos.map((logo, index) => (
          <ScaleUp
            key={index}
            delay={index * 0.1}
            className="flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-[70px] sm:max-h-[80px] md:max-h-[90px] object-contain w-full"
              style={{ width: logo.width, height: logo.height }}
            />
          </ScaleUp>
        ))}
      </StaggeredList>
    </div>
  );
};

export default Partners;
