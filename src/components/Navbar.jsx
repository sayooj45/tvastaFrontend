import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatedButton } from "../utils/animations.jsx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isTechOpen, setIsTechOpen] = useState(false);

  // Helper function to check if a path is active
  const isActive = (path) => location.pathname === path;

  // Helper function to check if we're in the technology section
  const isTechnologyActive = () => {
    return location.pathname.startsWith("/our-technology");
  };

  // Helper function to check if we're in the projects section
  const isProjectsActive = () => {
    return location.pathname.startsWith("/projects");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-20 py-10 w-full h-[100px] bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] absolute top-0 left-0 z-50"
    >
      {/* Logo */}
      <Link to="/">
        <motion.div className="flex items-center">
          <img
            src="/images/tvastanavlogo.png"
            alt="Tvasta Logo"
            className="w-16 h-16 object-contain mix-blend-difference"
            onError={(e) => {
              console.error("Logo failed to load:", e.target.src);
              e.target.style.display = "none";
            }}
          />
        </motion.div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-10 bg-white rounded-full px-8 py-2">
        <Link to="/who-we-are">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className={`font-outfit text-[14px] ${
                isActive("/who-we-are")
                  ? "text-[#E63946] font-semibold"
                  : "text-[#0D192D] font-medium"
              }`}
              whileHover={{ color: "#E63946" }}
              transition={{ duration: 0.2 }}
            >
              Who We Are
            </motion.span>
          </motion.div>
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setIsTechOpen(true)}
          onMouseLeave={() => setIsTechOpen(false)}
        >
          <Link to="/our-technology">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className={`font-outfit text-[14px] ${
                  isTechnologyActive()
                    ? "text-[#E63946] font-semibold"
                    : "text-[#0D192D] font-medium"
                }`}
                whileHover={{ color: "#E63946" }}
                transition={{ duration: 0.2 }}
              >
                Our Technology
              </motion.span>
              <motion.svg
                className={`w-6 h-6 ${
                  isTechnologyActive() ? "text-[#E63946]" : "text-[#0D192D]"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ color: "#E63946" }}
                transition={{ duration: 0.2 }}
              >
                <path d="M7 10l5 5 5-5z" />
              </motion.svg>
            </motion.div>
          </Link>

          <AnimatePresence>
            {isTechOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.12 }}
                className="absolute left-0 top-full mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-50"
              >
                <div className="flex flex-col py-2">
                  <Link
                    to="/our-technology/printers"
                    onClick={() => setIsTechOpen(false)}
                    className="px-4 py-2 hover:bg-gray-50 text-[#0D192D] font-outfit text-sm"
                  >
                    3D Printers
                  </Link>
                  <Link
                    to="/our-technology/accessories"
                    onClick={() => setIsTechOpen(false)}
                    className="px-4 py-2 hover:bg-gray-50 text-[#0D192D] font-outfit text-sm"
                  >
                    Accessories & Turnkey Services
                  </Link>
                  {/* <Link
                    to="/products"
                    onClick={() => setIsTechOpen(false)}
                    className="px-4 py-2 hover:bg-gray-50 text-[#0D192D] font-outfit text-sm"
                  >
                    3D Printed Furniture
                  </Link> */}
                  <Link
                    to="/our-technology/software"
                    onClick={() => setIsTechOpen(false)}
                    className="px-4 py-2 hover:bg-gray-50 text-[#0D192D] font-outfit text-sm"
                  >
                    Software
                  </Link>
                  <Link
                    to="/our-technology/materials"
                    onClick={() => setIsTechOpen(false)}
                    className="px-4 py-2 hover:bg-gray-50 text-[#0D192D] font-outfit text-sm"
                  >
                    Sustainable Materials
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link to="/projects">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className={`font-outfit text-[14px] ${
                isProjectsActive()
                  ? "text-[#E63946] font-semibold"
                  : "text-[#0D192D] font-medium"
              }`}
              whileHover={{ color: "#E63946" }}
              transition={{ duration: 0.2 }}
            >
              Projects
            </motion.span>
          </motion.div>
        </Link>
        <Link to="/products">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className={`font-outfit text-[14px] ${
                isActive("/products")
                  ? "text-[#E63946] font-semibold"
                  : "text-[#0D192D] font-medium"
              }`}
              whileHover={{ color: "#E63946" }}
              transition={{ duration: 0.2 }}
            >
              Products
            </motion.span>
          </motion.div>
        </Link>
        <Link to="/tvasta-stories">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className={`font-outfit text-[14px] ${
                isActive("/tvasta-stories")
                  ? "text-[#E63946] font-semibold"
                  : "text-[#0D192D] font-medium"
              }`}
              whileHover={{ color: "#E63946" }}
              transition={{ duration: 0.2 }}
            >
              TVASTA Stories
            </motion.span>
          </motion.div>
        </Link>
        <Link to="/faqs">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className={`font-outfit text-[14px] ${
                isActive("/faqs")
                  ? "text-[#E63946] font-semibold"
                  : "text-[#0D192D] font-medium"
              }`}
              whileHover={{ color: "#E63946" }}
              transition={{ duration: 0.2 }}
            >
              FAQ's
            </motion.span>
          </motion.div>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <Link to="/contact-us">
          <AnimatedButton
            className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 btn-secondary whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-outfit font-medium text-sm">Contact Us</span>
            <svg
              className="w-5 h-5 btn-icon"
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
        </Link>
        <Link to="/careers">
          <AnimatedButton
            className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 btn-primary whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-outfit font-medium text-sm">
              Careers
            </span>
            <svg
              className="w-5 h-5 text-white btn-icon"
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
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <AnimatedButton
          className="text-[#0D192D]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </AnimatedButton>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.15)] z-40"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <Link to="/who-we-are" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-outfit text-base ${
                      isActive("/who-we-are")
                        ? "text-[#E63946] font-semibold"
                        : "text-[#0D192D] font-medium"
                    }`}
                  >
                    Who We Are
                  </span>
                </motion.div>
              </Link>

              <Link
                to="/our-technology"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-outfit text-base ${
                      isTechnologyActive()
                        ? "text-[#E63946] font-semibold"
                        : "text-[#0D192D] font-medium"
                    }`}
                  >
                    Our Technology
                  </span>
                  <svg
                    className={`w-5 h-5 ${
                      isTechnologyActive() ? "text-[#E63946]" : "text-[#0D192D]"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </motion.div>
              </Link>

              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-outfit text-base ${
                      isProjectsActive()
                        ? "text-[#E63946] font-semibold"
                        : "text-[#0D192D] font-medium"
                    }`}
                  >
                    Projects
                  </span>
                </motion.div>
              </Link>

              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-outfit text-base ${
                      isActive("/products")
                        ? "text-[#E63946] font-semibold"
                        : "text-[#0D192D] font-medium"
                    }`}
                  >
                    Products
                  </span>
                </motion.div>
              </Link>

              <Link
                to="/tvasta-stories"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-outfit text-base ${
                      isActive("/tvasta-stories")
                        ? "text-[#E63946] font-semibold"
                        : "text-[#0D192D] font-medium"
                    }`}
                  >
                    TVASTA Stories
                  </span>
                </motion.div>
              </Link>

              <Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    className={`font-outfit text-base ${
                      isActive("/faqs")
                        ? "text-[#E63946] font-semibold"
                        : "text-[#0D192D] font-medium"
                    }`}
                  >
                    FAQ's
                  </span>
                </motion.div>
              </Link>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  to="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <AnimatedButton
                    className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 btn-secondary w-full whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-outfit font-medium text-sm">
                      Contact Us
                    </span>
                    <svg
                      className="w-5 h-5 btn-icon"
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
                </Link>
                <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                  <AnimatedButton
                    className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 btn-primary w-full whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-white font-outfit font-medium text-sm">
                      Careers
                    </span>
                    <svg
                      className="w-5 h-5 text-white btn-icon"
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
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
