import { FadeIn, SlideInLeft, SlideInRight } from "../../utils/animations.jsx";

const StressTested = () => {
  const stressTestedImage = "/images/stresstested.png";

  return (
    <section className="w-full bg-white md:pt-14 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full">
          {/* Image */}
          <SlideInLeft delay={0.3}>
            <div
              className="w-full h-[250px] md:h-[600px] rounded-[16px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${stressTestedImage})`,
                aspectRatio: "4/5", // keeps proper height ratio
              }}
            />
          </SlideInLeft>

          {/* Text Content */}
          <SlideInRight delay={0.5}>
            <div className="flex flex-col gap-5 py-6 w-full lg:w-[710px]">
              {/* Heading & Description */}
              <div className="flex flex-col gap-6">
                <FadeIn delay={0.7}>
                  <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title leading-[50px] text-[#0D192D]">
                    Stress-Tested and Certified for Performance
                  </h2>
                </FadeIn>
                <FadeIn delay={0.9}>
                  <p className="font-outfit font-normal text-card-mobile md:text-description leading-relaxed text-[#1D3357]">
                    Our systems are made in India, stress-tested across its most
                    demanding terrains, from sub-zero regions to coastal flood
                    zones. Every product complies with national standards like
                    BMTPC PACS and is built for global application.
                  </p>
                </FadeIn>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                <FadeIn delay={1.1}>
                  <div className="flex flex-col gap-2">
                    <div className="font-outfit font-medium text-subtitle-mobile md:text-subtitle text-[#1D3357]">
                      20+
                    </div>
                    <div className="font-outfit font-medium text-card-mobile md:text-card text-[#0D192D]">
                      projects across 10 cities
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={1.3}>
                  <div className="flex flex-col gap-2">
                    <div className="font-outfit font-medium text-subtitle-mobile md:text-subtitle text-[#1D3357]">
                      10m
                    </div>
                    <div className="font-outfit font-medium text-card-mobile md:text-card text-[#0D192D]">
                      Print Height
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={1.5}>
                  <div className="flex flex-col gap-2">
                    <div className="font-outfit font-medium text-card-mobile md:text-card text-[#1D3357]">
                      BMTPC-PACS
                    </div>
                    <div className="font-outfit font-medium text-card-mobile md:text-card text-[#0D192D]">
                      certified machines
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={1.7}>
                  <div className="flex flex-col gap-2">
                    <div className="font-outfit font-medium text-card-mobile md:text-card text-[#1D3357]">
                      India's first
                    </div>
                    <div className="font-outfit font-medium text-card-mobile md:text-card text-[#0D192D]">
                      3D printed house
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default StressTested;
