import React, { useState } from "react";
import { FadeIn, SlideInUp, AnimatedButton } from "../../utils/animations.jsx";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    whatsappNumber: "",
    jobRole: "",
    resume: null,
    message: "",
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [jobRoleDropdownOpen, setJobRoleDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const jobRoles = [
    "Design Engineer",
    "Software Engineer",
    "Mechanical Engineer",
    "Research Scientist",
    "Product Manager",
    "Marketing Specialist",
    "Business Development",
    "Quality Assurance",
  ];

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      // 2MB limit
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    } else {
      alert("File size should be less than 2MB");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <SlideInUp delay={0.2} duration={0.8}>
        <div className="w-full bg-[#0D192D] rounded-[24px] overflow-hidden shadow-2xl">
          {/* Form Container */}
          <div className="flex flex-col items-start p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 gap-12 md:gap-16 lg:gap-20 w-full">
            {/* Header */}
            <FadeIn delay={0.4} duration={0.6}>
              <div className="flex flex-row justify-center items-start w-full pb-8 border-b border-transparent">
                <h2 className="font-outfit font-medium text-card-mobile md:text-subtitle leading-[40px] tracking-[-0.04em] text-white text-center max-w-[800px]">
                  Fill out the form and our team will reach out shortly.
                </h2>
              </div>
            </FadeIn>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-start gap-8 md:gap-12 lg:gap-16 w-full max-w-[1000px] mx-auto"
            >
              {/* Full Name Field */}
              <div className="flex flex-col items-start gap-4 w-full">
                <label className="font-outfit font-medium text-card-mobile md:text-description leading-[130%] text-white">
                  Full Name
                </label>
                <div className="box-border flex flex-row justify-center items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 gap-[10px] w-full border-b border-white transition-all duration-300 hover:border-white/80">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Full Name"
                    className="w-full font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white bg-transparent outline-none placeholder-white/60 transition-all duration-300 focus:placeholder-white/80"
                    required
                  />
                </div>
              </div>

              {/* Work Email Field */}
              <div className="flex flex-col items-start gap-4 w-full">
                <label className="font-outfit font-medium text-card-mobile md:text-description leading-[130%] text-white">
                  Work Email
                </label>
                <div className="box-border flex flex-row justify-center items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 gap-[10px] w-full border-b border-white transition-all duration-300 hover:border-white/80">
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="Enter Your Work Email"
                    className="w-full font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white bg-transparent outline-none placeholder-white/60 transition-all duration-300 focus:placeholder-white/80"
                    required
                  />
                </div>
              </div>

              {/* WhatsApp Number Field */}
              <div className="flex flex-col items-start gap-4 w-full">
                <label className="font-outfit font-medium text-card-mobile md:text-description leading-[130%] text-white">
                  Whatsapp Number
                </label>
                <div className="box-border flex flex-row justify-center items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 gap-[10px] w-full border-b border-white transition-all duration-300 hover:border-white/80">
                  <div className="flex flex-row justify-between items-center gap-3 sm:gap-4 w-full">
                    {/* Country Code Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setCountryDropdownOpen(!countryDropdownOpen)
                        }
                        className="flex items-center gap-2 text-white font-outfit font-normal text-card-mobile md:text-card transition-all duration-300 hover:text-white/80"
                      >
                        {selectedCountryCode}
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </button>

                      {countryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-[#1D3357] border border-white/20 rounded-lg shadow-xl z-10 min-w-[140px] sm:min-w-[160px]">
                          {countryCodes.map((item, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setSelectedCountryCode(item.code);
                                setCountryDropdownOpen(false);
                              }}
                              className="w-full px-3 py-2 sm:px-4 sm:py-3 text-left text-white hover:bg-white/10 font-outfit text-card-mobile md:text-card transition-all duration-200"
                            >
                              {item.code} {item.country}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your number"
                      className="flex-1 font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white bg-transparent outline-none placeholder-white/60 transition-all duration-300 focus:placeholder-white/80"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Job Role Field */}
              <div className="flex flex-col items-start gap-4 w-full">
                <label className="font-outfit font-medium text-card-mobile md:text-description leading-[130%] text-white">
                  Your Job Role
                </label>
                <div className="box-border flex flex-row justify-center items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 gap-[10px] w-full border-b border-white relative transition-all duration-300 hover:border-white/80">
                  <button
                    type="button"
                    onClick={() => setJobRoleDropdownOpen(!jobRoleDropdownOpen)}
                    className="flex flex-row justify-between items-center w-full transition-all duration-300 hover:opacity-80"
                  >
                    <span className="font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white text-left flex-1">
                      {formData.jobRole || "Design Engineer"}
                    </span>
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transition-transform duration-300"
                      style={{
                        transform: jobRoleDropdownOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>

                  {jobRoleDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#1D3357] border border-white/20 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
                      {jobRoles.map((role, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, jobRole: role }));
                            setJobRoleDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 sm:px-5 sm:py-4 text-left text-white hover:bg-white/10 font-outfit text-card-mobile md:text-card border-b border-white/10 last:border-b-0 transition-all duration-200"
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Resume Upload Field */}
              <div className="flex flex-col items-start gap-4 w-full">
                <label className="font-outfit font-medium text-card-mobile md:text-description leading-[130%] text-white">
                  Resume Upload
                </label>
                <div className="box-border flex flex-col sm:flex-row justify-center items-start sm:items-center py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 gap-4 w-full border-b border-white transition-all duration-300 hover:border-white/80">
                  <span className="flex-1 font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white order-2 sm:order-1">
                    {formData.resume
                      ? formData.resume.name
                      : "Upload Your Resume (Max 2 MB File Size)"}
                  </span>

                  <label className="flex flex-row justify-center items-center py-2 sm:py-3 px-4 sm:px-5 gap-3 bg-white rounded-full cursor-pointer order-1 sm:order-2 transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      <path d="M12,11L16,15H13V19H11V15H8L12,11Z" />
                    </svg>
                    <span className="font-outfit font-medium text-card-mobile leading-[20px] text-[#0D192D]">
                      Upload Resume
                    </span>
                  </label>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col items-start gap-4 w-full">
                <label className="font-outfit font-medium text-card-mobile md:text-description leading-[130%] text-white">
                  Message
                </label>
                <div className="box-border flex flex-row justify-center items-start py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 gap-[10px] w-full border-b border-white transition-all duration-300 hover:border-white/80">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full font-outfit font-normal text-card-mobile md:text-card leading-[140%] text-white bg-transparent outline-none placeholder-white/60 transition-all duration-300 focus:placeholder-white/80 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <AnimatedButton>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-white rounded-full font-outfit font-medium text-card-mobile md:text-card text-[#0D192D] transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                >
                  Submit Application
                </button>
              </AnimatedButton>
            </form>
          </div>
        </div>
      </SlideInUp>
    </div>
  );
};

export default CareerForm;
