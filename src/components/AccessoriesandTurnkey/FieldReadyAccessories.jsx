import React, { useState, useRef, useEffect } from "react";
import { FadeIn, AnimatedCard } from "../../utils/animations.jsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const FieldReadyAccessories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);

  const accessories = [
    {
      id: 1,
      label: "Smart Pumps",
      title:
        "High-throughput, aggregate-compatible pumps for uninterrupted printing.",
      image: "/images/fra1.png",
    },
    {
      id: 2,
      label: "Pan Mixers",
      title: "Ideal for batch-wise material prep with consistent mix quality.",
      image: "/images/wwp2.png",
    },
    {
      id: 3,
      label: "Silos & Batching Plant",
      title:
        "Automated systems for continuous mix production, best for large-scale and onsite builds",
      image: "/images/fra2.png",
    },
    {
      id: 4,
      label: "Custom Nozzles",
      title:
        "Tailored heads for varying design profiles, flow rates and build scales",
      image: "/images/fra3.png",
    },
    {
      id: 5,
      label: "Tvasta 3D Materials",
      title:
        "Plug-and-print dry mix and propreitary additives optimized for structural integrity and printability",
      image: "/images/fra4.png",
    },
    {
      id: 6,
      label: "Movable Pallets",
      title:
        "Dual sets for efficient module transfer within microfactory setups",
      image: "/images/fra5.png",
    },
  ];

  const handlePrev = () => {
    const prev = currentIndex === 0 ? accessories.length - 1 : currentIndex - 1;
    slidesRef.current[prev]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setCurrentIndex(prev);
  };

  const handleNext = () => {
    const next = currentIndex === accessories.length - 1 ? 0 : currentIndex + 1;
    slidesRef.current[next]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setCurrentIndex(next);
  };

  // update currentIndex on manual scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        let nearest = 0;
        let minDist = Infinity;
        slidesRef.current.forEach((slide, i) => {
          if (!slide) return;
          const r = slide.getBoundingClientRect();
          const slideCenter = r.left + r.width / 2;
          const dist = Math.abs(containerCenter - slideCenter);
          if (dist < minDist) {
            minDist = dist;
            nearest = i;
          }
        });
        setCurrentIndex(nearest);
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    // initialize
    onScroll();
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [accessories.length]);

  return (
    <section>
      <div className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px] bg-white">
        <div className="flex flex-col items-center gap-[40px] md:gap-[50px] w-full max-w-[1320px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-[16px] w-full">
            <FadeIn delay={0.2} duration={0.8}>
              <h2 className="text-title-mobile md:text-title font-semibold leading-[1.2] text-center text-[#0D192D] tracking-[-0.02em]">
                Field-Ready Accessories
              </h2>
            </FadeIn>
            <FadeIn delay={0.3} duration={0.8}>
              <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-center text-[#4A4A4A] tracking-[-0.02em]">
                Engineered To Ensure Consistent Quality, Reduced Downtime, And
                Faster Delivery.
              </p>
            </FadeIn>
          </div>{" "}
          {/* Carousel */}
        </div>
      </div>
      <div className="relative w-full bg-white">
        {/* Carousel Container (scroll-snap based for swipe & auto-sized slides) */}
        <div className="relative w-screen left-1/2 -translate-x-1/2">
          <div
            ref={containerRef}
            className="flex gap-5 md:gap-[30px] overflow-x-auto scroll-smooth py-2 px-2 md:px-4 snap-x snap-mandatory no-scrollbar md:ms-20"
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {accessories.map((accessory, index) => (
              <div
                key={accessory.id}
                ref={(el) => (slidesRef.current[index] = el)}
                className="snap-center flex-shrink-0 basis-full md:basis-[70%] lg:basis-[65%] w-full max-w-full"
                style={{ minWidth: 0 }}
              >
                <AnimatedCard className="relative w-full max-w-full h-[320px] md:h-[400px] lg:h-[450px] rounded-[12px] overflow-hidden bg-white group cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={accessory.image}
                      alt={accessory.label}
                      className="w-full h-full max-w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ display: "block" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col p-[24px] md:p-[28px]">
                    {/* Label Badge - Top Left */}
                    <div className="inline-flex items-center justify-center bg-white rounded-[30px] px-[12px] py-[6px] self-start mb-auto">
                      <span className="text-card-mobile md:text-card font-semibold text-[#0D192D] tracking-[-0.02em]">
                        {accessory.label}
                      </span>
                    </div>

                    {/* Title - Bottom */}
                    <h3 className="text-card-mobile md:text-card font-medium leading-[1.5] text-white tracking-[-0.02em]">
                      {accessory.title}
                    </h3>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>

          {/* Prev / Next controls (optional) */}
          {/* <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hidden md:flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-5 h-5 text-[#0D192D]" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 hidden md:flex items-center justify-center"
          >
            <ChevronRightIcon className="w-5 h-5 text-[#0D192D]" />
          </button> */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {accessories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                slidesRef.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#0D192D] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldReadyAccessories;
