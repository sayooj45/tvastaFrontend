import { AnimatedButton, FadeIn, SlideInUp } from "../../utils/animations.jsx";

const Hero = () => {
  const heroBg =
    "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/herobg.png";

  return (
    <section
      className="relative w-full h-[660px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full max-w-[1256px] mx-auto text-center pt-[120px] px-4">
        <FadeIn delay={0.2} duration={0.8}>
          <h1 className="font-outfit font-semibold text-title-mobile md:text-title text-[#0D192D] mb-[30px] tracking-[-0.02em] capitalize">
            Our Technology
          </h1>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.8}>
          <h2 className="font-outfit font-semibold text-card-mobile md:text-description text-[#1D3357] mb-[30px] tracking-[-0.02em]">
            Every layer is backed by in-house innovation and precision
            engineering
          </h2>
        </FadeIn>

        <SlideInUp delay={0.6} duration={0.6}>
          <AnimatedButton
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="flex items-center justify-center btn-primary font-outfit font-semibold text-card-mobile md:text-card px-7 py-4 border-none cursor-pointer mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </AnimatedButton>
        </SlideInUp>
      </div>
    </section>
  );
};

export default Hero;
