import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideInUp,
  SlideInLeft,
  SlideInRight,
  AnimatedButton,
} from "../../utils/animations.jsx";

const StayAheadOfCurve = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && isChecked) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
        setIsChecked(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-20">
      {/* Image Section */}
      <SlideInLeft
        delay={0.3}
        className="w-full lg:w-[508px] h-[300px] md:h-[350px] lg:h-[400px] flex-shrink-0"
      >
        <div
          className="w-full h-full bg-[#D9D9D9] rounded-[24px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/stayaheadofcurve.jpg')`,
          }}
        />
      </SlideInLeft>

      {/* Content Section */}
      <SlideInRight
        delay={0.5}
        className="flex flex-col justify-center items-start gap-2.5 flex-1 w-full lg:w-[712px] h-full"
      >
        <FadeIn delay={0.7} className="flex flex-col items-start gap-7 w-full">
          {/* Title */}
          <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle leading-[130%] tracking-[-0.03em] text-[#0D192D]">
            Stay Ahead of the Curve
          </h2>

          {/* Description */}
          <p className="font-outfit font-medium text-card-mobile md:text-card leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
            Get the latest updates on 3D construction, new projects, and
            Tvasta's tech, straight to your inbox.
          </p>

          {/* Email Input Section */}
          <div className="flex flex-col items-start gap-4 w-full border-b border-[#CACACA] pb-8">
            <label className="font-outfit font-medium text-card-mobile md:text-description leading-[36px] text-[#0D192D]">
              Your Email
            </label>

            <form onSubmit={handleSubscribe} className="w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-transparent outline-none font-outfit font-medium text-card-mobile md:text-card text-[#0D192D] placeholder-[#999999] pb-2"
                required
              />
            </form>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7 w-full">
            {/* Checkbox and Terms */}
            <div className="flex items-center gap-2">
              <div className="flex items-start gap-2.5">
                <div className="flex items-start p-0.5 gap-2.5 w-6 h-7">
                  <div className="flex items-start gap-2.5 w-6 h-6">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="w-6 h-6 bg-[#E6E6E6] border border-[#B3B3B3] rounded cursor-pointer"
                    />
                  </div>
                </div>

                <label className="font-outfit font-medium text-card-mobile md:text-description leading-[20px] tracking-[-0.02em] text-[#0D192D] cursor-pointer">
                  I agree to terms & conditions
                </label>
              </div>
            </div>

            {/* Subscribe Button */}
            <div className="flex items-start gap-7">
              <AnimatedButton
                onClick={handleSubscribe}
                className={`flex justify-center items-center px-7 py-4 gap-2.5 rounded-[66px] transition-all duration-300 ${
                  isSubscribed
                    ? "bg-green-600 text-white animate-pulse"
                    : !email || !isChecked
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-[#0D192D] text-white hover:bg-[#1D3357]"
                }`}
                whileHover={
                  !email || !isChecked || isSubscribed ? {} : { scale: 1.05 }
                }
                whileTap={
                  !email || !isChecked || isSubscribed ? {} : { scale: 0.95 }
                }
                disabled={isSubscribed || !email || !isChecked}
              >
                <span className="font-outfit font-semibold text-card-mobile md:text-card leading-[20px]">
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </span>

                <motion.div
                  className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
                  animate={isSubscribed ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isSubscribed ? (
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 text-[#0D192D]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </motion.div>
              </AnimatedButton>
            </div>
          </div>
        </FadeIn>
      </SlideInRight>
    </div>
  );
};

export default StayAheadOfCurve;
