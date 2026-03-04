import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mainLinks = [
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Our Technology", path: "/our-technology" },
    { name: "Projects", path: "/projects" },
    { name: "Products", path: "/products" },
    { name: "TVASTA Stories", path: "/tvasta-stories" },
    { name: "FAQs", path: "/faqs" },
  ];

  const technologyLinks = [
    { name: "3D Printers", path: "/our-technology/printers" },
    {
      name: "Accessories & Turnkey Services",
      path: "/our-technology/accessories",
    },
    { name: "3D Printed Furniture", path: "/products" },
    { name: "Software", path: "/our-technology/software" },
    { name: "Sustainable Materials", path: "/our-technology/materials" },
  ];

  const printerLinks = [
    {
      name: "Gantry-Based 3D Printers",
      path: "/our-technology/printers/gantry-based",
    },
    {
      name: "Robotic Arm-Based Printers",
      path: "/our-technology/printers/robotic-arm-based",
    },
  ];

  return (
    <footer className="relative w-full bg-[#0D192D] overflow-hidden">
      {/* Diagonal decorative shape - only at bottom section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[340px]  sm:h-[650px] bg-[#0a2046] pointer-events-none"
        style={{
          clipPath: "polygon(45% 100%, 44.5% 95%, 100% 56%, 100% 100%)",
        }}
      ></div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-12 pb-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 mb-12">
          {/* Left Column - Logo & Info */}
          <div className="flex flex-col gap-6 w-full lg:w-[380px] shrink-0">
            {/* Logo */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-2"
            >
              <img
                src="/images/tvastanavlogo.png"
                alt="Tvasta Logo"
                className="h-[64px] md:h-[72px] w-auto object-contain"
                style={{
                  filter:
                    "sepia(100) saturate(5.6) hue-rotate(30deg) brightness(5.08) contrast(5.08)",
                }}
              />
            </Link>

            {/* Tagline */}
            <h3 className="font-outfit font-semibold text-[16px] leading-[140%] text-white">
              India's 3D Construction Pioneers.
            </h3>

            {/* Description */}
            <p className="font-outfit font-normal text-[14px] leading-[160%] text-gray-300">
              Pushing the boundaries of how the world builds - with speed,
              precision, and sustainability.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                to="/contact-us"
                onClick={scrollToTop}
                className="px-5 py-2.5 rounded-full font-outfit font-semibold text-[16px] md:text-[16px] leading-[20px] bg-white text-[#0D192D] hover:bg-gray-100 transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/careers"
                onClick={scrollToTop}
                className="px-5 py-2.5 rounded-full font-outfit font-semibold text-[16px] md:text-[16px] leading-[20px] border border-white text-white bg-transparent hover:bg-white/5 transition-all duration-200"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-8 lg:gap-12 xl:gap-16">
            {/* Main Links */}
            <div className="flex flex-col gap-4 min-w-[140px]">
              <h4 className="font-outfit font-semibold text-[16px] text-white mb-2">
                Main Links
              </h4>
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className="font-outfit font-normal text-[14px] text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Our Technology */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <h4 className="font-outfit font-semibold text-[16px] text-white mb-2">
                Our Technology
              </h4>
              {technologyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className="font-outfit font-normal text-[14px] text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 3D Printers */}
            <div className="flex flex-col gap-4 min-w-[180px]">
              <h4 className="font-outfit font-semibold text-[16px] text-white mb-2">
                3D Printers
              </h4>
              {printerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className="font-outfit font-normal text-[14px] text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative flex flex-col sm:flex-row justify-between items-center pt-8 pb-4">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 py-4 sm:py-0">
            <span className="font-outfit font-normal text-[13px] text-gray-400">
              © 2025 TVASTA. All Rights Reserved.
            </span>

            <Link
              to="/privacy-policy"
              onClick={scrollToTop}
              className="font-outfit font-normal text-[13px] text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </Link>
        </div>

          {/* Social Icons - White filled circles with dark icons */}
          <div className="flex items-center gap-3 py-4 sm:py-0">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/tvastagroup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#0D192D] hover:bg-gray-200 transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tvasta3dp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#0D192D] hover:bg-gray-200 transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@tvasta3d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#0D192D] hover:bg-gray-200 transition-all duration-200"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* X (Streamline) */}
            <a
              href="https://x.com/Tvasta3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#0D192D] hover:bg-gray-200 transition-all duration-200"
              aria-label="X"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <desc>Twitter X Streamline Icon: https://streamlinehq.com</desc>
                <path
                  strokeWidth="1"
                  d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/tvasta/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#0D192D] hover:bg-gray-200 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H8.356V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433c-1.144 0-2.071-.929-2.071-2.075 0-1.146.927-2.075 2.071-2.075 1.146 0 2.075.929 2.075 2.075 0 1.146-.929 2.075-2.075 2.075zM7.115 20.452H3.559V9h3.556v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
