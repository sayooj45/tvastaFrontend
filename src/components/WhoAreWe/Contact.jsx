import React, { useState } from "react";
import { FadeIn, SlideInUp, AnimatedButton } from "../../utils/animations.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="flex flex-col items-start w-full h-[501px] bg-[#1D3357] px-[64px] py-[75px] gap-[75px]">
      {/* Header */}
      <FadeIn delay={0.2}>
        <div className="flex justify-between items-start w-full max-w-[1312px] gap-[831px]">
          <div className="flex items-center justify-center">
            <h2 className="font-outfit font-medium text-description-mobile md:text-description leading-[130%] text-white">
              CONTACT
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <h3 className="font-outfit font-medium text-description-mobile md:text-description leading-[130%] text-white">
              Start Your 3D Construction Journey
            </h3>
          </div>
        </div>
      </FadeIn>

      {/* Form */}
      <div className="flex flex-col items-end gap-[36px] w-full max-w-[1312px]">
        <SlideInUp delay={0.4}>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-[36px] w-full"
          >
            {/* Name Field */}
            <div className="flex flex-col items-start gap-[16px] w-[413.33px]">
              <label className="font-outfit font-medium text-description-mobile md:text-description leading-[130%] text-white">
                Name
              </label>
              <div className="flex justify-center items-center px-[16px] py-[24px] gap-[10px] w-full h-[60px] border-b border-white">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white placeholder-white/70 outline-none"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col items-start gap-[16px] w-[413.33px]">
              <label className="font-outfit font-medium text-description-mobile md:text-description leading-[130%] text-white">
                Email
              </label>
              <div className="flex justify-center items-center px-[16px] py-[24px] gap-[10px] w-full h-[60px] border-b border-white">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white placeholder-white/70 outline-none"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col items-start gap-[16px] w-[413.33px]">
              <label className="font-outfit font-medium text-description-mobile md:text-description leading-[130%] text-white">
                Message
              </label>
              <div className="flex justify-center items-center px-[16px] py-[24px] gap-[10px] w-full h-[60px] border-b border-white">
                <input
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white placeholder-white/70 outline-none"
                />
              </div>
            </div>
          </form>
        </SlideInUp>

        {/* Submit Button */}
        <SlideInUp delay={0.6}>
          <AnimatedButton
            onClick={handleSubmit}
            className="flex justify-center items-center px-[24px] py-[20px] gap-[10px] w-[201px] h-[57px] btn-white"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-outfit font-medium text-description-mobile md:text-description leading-[130%] text-[#1D3357]">
              Send Message
            </span>
            <svg
              className="w-5 h-5 text-[#1D3357] btn-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </AnimatedButton>
        </SlideInUp>
      </div>
    </div>
  );
};

export default Contact;
