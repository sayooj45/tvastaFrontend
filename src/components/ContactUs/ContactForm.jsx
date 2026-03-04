import React, { useState, useRef, useEffect } from "react";
import { components } from "react-select";

// Custom menu list that prevents wheel/touch propagation so the menu itself can scroll with mouse wheel / touch
const CustomMenuList = (props) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // allow the menu to handle vertical scrolling without the event bubbling to the page
      e.stopPropagation();
    };

    const onTouchMove = (e) => {
      e.stopPropagation();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return <components.MenuList {...props} innerRef={menuRef} />;
};
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideInUp,
  SlideInLeft,
  SlideInRight,
} from "../../utils/animations.jsx";

const countryOptions = [
  // Popular / important countries first (with dial codes)
  { value: "us", label: "United States", flag: "US", dialCode: "+1" },
  { value: "cn", label: "China", flag: "CN", dialCode: "+86" },
  { value: "in", label: "India", flag: "IN", dialCode: "+91" },
  { value: "gb", label: "United Kingdom", flag: "GB", dialCode: "+44" },
  { value: "de", label: "Germany", flag: "DE", dialCode: "+49" },
  { value: "fr", label: "France", flag: "FR", dialCode: "+33" },
  { value: "jp", label: "Japan", flag: "JP", dialCode: "+81" },
  { value: "ca", label: "Canada", flag: "CA", dialCode: "+1" },
  { value: "au", label: "Australia", flag: "AU", dialCode: "+61" },
  { value: "br", label: "Brazil", flag: "BR", dialCode: "+55" },
  { value: "za", label: "South Africa", flag: "ZA", dialCode: "+27" },
  { value: "kr", label: "South Korea", flag: "KR", dialCode: "+82" },
  { value: "mx", label: "Mexico", flag: "MX", dialCode: "+52" },
  { value: "es", label: "Spain", flag: "ES", dialCode: "+34" },
  { value: "it", label: "Italy", flag: "IT", dialCode: "+39" },
  { value: "nl", label: "Netherlands", flag: "NL", dialCode: "+31" },
  { value: "sa", label: "Saudi Arabia", flag: "SA", dialCode: "+966" },
  { value: "tr", label: "Turkey", flag: "TR", dialCode: "+90" },
  { value: "id", label: "Indonesia", flag: "ID", dialCode: "+62" },
  { value: "ar", label: "Argentina", flag: "AR", dialCode: "+54" },
  { value: "se", label: "Sweden", flag: "SE", dialCode: "+46" },
  { value: "ch", label: "Switzerland", flag: "CH", dialCode: "+41" },
  { value: "no", label: "Norway", flag: "NO", dialCode: "+47" },
  { value: "ae", label: "United Arab Emirates", flag: "AE", dialCode: "+971" },
  { value: "sg", label: "Singapore", flag: "SG", dialCode: "+65" },
  { value: "nz", label: "New Zealand", flag: "NZ", dialCode: "+64" },
  { value: "uy", label: "Uruguay", flag: "UY", dialCode: "+598" },
  { value: "pl", label: "Poland", flag: "PL", dialCode: "+48" },
  { value: "be", label: "Belgium", flag: "BE", dialCode: "+32" },
  { value: "pk", label: "Pakistan", flag: "PK", dialCode: "+92" },
  { value: "lk", label: "Sri Lanka", flag: "LK", dialCode: "+94" },
  { value: "np", label: "Nepal", flag: "NP", dialCode: "+977" },
  { value: "my", label: "Malaysia", flag: "MY", dialCode: "+60" },
  { value: "th", label: "Thailand", flag: "TH", dialCode: "+66" },
  { value: "vn", label: "Vietnam", flag: "VN", dialCode: "+84" },
  { value: "ph", label: "Philippines", flag: "PH", dialCode: "+63" },
  { value: "eg", label: "Egypt", flag: "EG", dialCode: "+20" },
  { value: "ng", label: "Nigeria", flag: "NG", dialCode: "+234" },
  { value: "ke", label: "Kenya", flag: "KE", dialCode: "+254" },
  { value: "ru", label: "Russia", flag: "RU", dialCode: "+7" },
  { value: "ua", label: "Ukraine", flag: "UA", dialCode: "+380" },
  { value: "pt", label: "Portugal", flag: "PT", dialCode: "+351" },
  { value: "ie", label: "Ireland", flag: "IE", dialCode: "+353" },
  { value: "fi", label: "Finland", flag: "FI", dialCode: "+358" },
  { value: "dk", label: "Denmark", flag: "DK", dialCode: "+45" },
  { value: "gr", label: "Greece", flag: "GR", dialCode: "+30" },
  { value: "cz", label: "Czech Republic", flag: "CZ", dialCode: "+420" },
  { value: "hu", label: "Hungary", flag: "HU", dialCode: "+36" },
  { value: "ro", label: "Romania", flag: "RO", dialCode: "+40" },
  { value: "bg", label: "Bulgaria", flag: "BG", dialCode: "+359" },
  { value: "cl", label: "Chile", flag: "CL", dialCode: "+56" },
  { value: "co", label: "Colombia", flag: "CO", dialCode: "+57" },
  { value: "pe", label: "Peru", flag: "PE", dialCode: "+51" },
  { value: "ve", label: "Venezuela", flag: "VE", dialCode: "+58" },
  // Other countries
  { value: "af", label: "Afghanistan", flag: "AF", dialCode: "+93" },
  { value: "ax", label: "Aland Islands", flag: "AX", dialCode: "+358" },
  { value: "al", label: "Albania", flag: "AL", dialCode: "+355" },
  { value: "dz", label: "Algeria", flag: "DZ", dialCode: "+213" },
  { value: "as", label: "American Samoa", flag: "AS", dialCode: "+1684" },
  { value: "ad", label: "Andorra", flag: "AD", dialCode: "+376" },
  { value: "ao", label: "Angola", flag: "AO", dialCode: "+244" },
  { value: "ai", label: "Anguilla", flag: "AI", dialCode: "+1264" },
  { value: "ag", label: "Antigua", flag: "AG", dialCode: "+1268" },
  { value: "am", label: "Armenia", flag: "AM", dialCode: "+374" },
  { value: "aw", label: "Aruba", flag: "AW", dialCode: "+297" },
  { value: "at", label: "Austria", flag: "AT", dialCode: "+43" },
  { value: "az", label: "Azerbaijan", flag: "AZ", dialCode: "+994" },
  { value: "bs", label: "Bahamas", flag: "BS", dialCode: "+1242" },
  { value: "bh", label: "Bahrain", flag: "BH", dialCode: "+973" },
  { value: "bd", label: "Bangladesh", flag: "BD", dialCode: "+880" },
  { value: "bb", label: "Barbados", flag: "BB", dialCode: "+1246" },
  { value: "by", label: "Belarus", flag: "BY", dialCode: "+375" },
  { value: "bz", label: "Belize", flag: "BZ", dialCode: "+501" },
  { value: "bj", label: "Benin", flag: "BJ", dialCode: "+229" },
];

// Create unique code options (dedupe by dial code so +1 only appears once)
const codeOptions = (() => {
  const seen = new Set();
  const res = [];
  countryOptions.forEach((c) => {
    if (!c.dialCode) return;
    if (!seen.has(c.dialCode)) {
      seen.add(c.dialCode);
      res.push({
        value: c.dialCode,
        label: c.dialCode,
        flag: c.flag,
      });
    }
  });
  return res;
})();

const ContactForm = () => {
  const [formData, setFormData] = useState({
    country: "",
    fullName: "",
    workEmail: "",
    whatsappNumber: "",
    whatsappCode: "+91",
    companyName: "",
    jobRole: "",
    city: "",
    message: "",
    acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="relative w-full bg-white pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16">
      {/* Contact Form Container */}
      <div className="w-full max-w-[1600px] mx-auto px-2 md:px-4 lg:px-6">
        <FadeIn delay={0.2} duration={0.8}>
          <div className="w-full max-w-[1200px] mx-auto bg-[#0D192D] rounded-[20px] md:rounded-[24px] p-4 md:p-6 lg:p-8 xl:p-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-8 md:mb-10 text-center lg:text-left">
              <SlideInUp delay={0.3} duration={0.6}>
                <h2 className="text-card-mobile md:text-subtitle font-semibold leading-tight text-white mb-2 lg:mb-0">
                  Get in Touch
                </h2>
              </SlideInUp>

              <SlideInUp delay={0.4} duration={0.6}>
                <p className="text-card-mobile font-normal leading-tight text-white/80 lg:whitespace-nowrap lg:text-right">
                  Fill out the form and our team will reach out shortly.
                </p>
              </SlideInUp>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 md:gap-7"
            >
              {/* Country Field */}
              <SlideInUp delay={0.5} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Country
                  </label>
                  <div className="relative">
                    <Select
                      name="country"
                      options={countryOptions}
                      value={
                        countryOptions.find(
                          (o) => o.value === formData.country
                        ) || null
                      }
                      onChange={(option) =>
                        setFormData((prev) => ({
                          ...prev,
                          country: option ? option.value : "",
                          whatsappCode:
                            option && option.dialCode
                              ? option.dialCode
                              : prev.whatsappCode,
                        }))
                      }
                      className="react-select-container w-full"
                      classNamePrefix="react-select"
                      formatOptionLabel={(option) => (
                        <div className="flex items-center gap-2">
                          {option.flag && (
                            <ReactCountryFlag
                              countryCode={option.flag}
                              svg
                              style={{ width: "1em", height: "1em" }}
                            />
                          )}
                          <span className="font-outfit font-normal text-card-mobile md:text-card">
                            {option.label}
                          </span>
                        </div>
                      )}
                      placeholder=""
                      isSearchable
                      required
                      components={{ MenuList: CustomMenuList }}
                      menuPlacement="auto"
                      menuShouldScrollIntoView={true}
                      menuPortalTarget={
                        typeof document !== "undefined" ? document.body : null
                      }
                      styles={{
                        control: (base) => ({
                          ...base,
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid rgba(255,255,255,0.3)",
                          boxShadow: "none",
                          borderRadius: 0,
                          alignItems: "center",
                          paddingTop: 6,
                          paddingBottom: 6,
                          minHeight: 36,
                        }),
                        singleValue: (base) => ({
                          ...base,
                          color: "#fff",
                          margin: 0,
                          lineHeight: "1.2",
                        }),
                        option: (base) => ({
                          ...base,
                          background: "#0a2036",
                          color: "#fff",
                        }),
                        menu: (base) => ({
                          ...base,
                          background: "#0a2036",
                          borderRadius: 0,
                        }),
                        menuList: (base) => ({
                          ...base,
                          maxHeight: "220px",
                          overflowY: "auto",
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      }}
                    />
                  </div>
                </div>
              </SlideInUp>

              {/* Full Name Field */}
              <SlideInUp delay={0.6} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* Work Email Field */}
              <SlideInUp delay={0.7} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* WhatsApp Number Field */}
              <SlideInUp delay={0.8} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Whatsapp Number
                  </label>
                  <div className="flex items-center border-b border-white/30">
                    <div className="w-[120px] mr-3 min-w-[90px]">
                      <Select
                        name="whatsappCode"
                        options={codeOptions}
                        value={
                          codeOptions.find(
                            (o) => o.value === formData.whatsappCode
                          ) || null
                        }
                        onChange={(option) =>
                          setFormData((prev) => ({
                            ...prev,
                            whatsappCode: option ? option.value : "",
                          }))
                        }
                        className="react-select-container react-select-code w-full"
                        classNamePrefix="react-select"
                        formatOptionLabel={(option) => (
                          <div className="flex items-center gap-2">
                            {option.flag && (
                              <ReactCountryFlag
                                countryCode={option.flag}
                                svg
                                style={{ width: "1em", height: "1em" }}
                              />
                            )}
                            <span className="font-outfit font-normal text-card-mobile md:text-card">
                              {option.label}
                            </span>
                          </div>
                        )}
                        isSearchable
                        components={{ MenuList: CustomMenuList }}
                        styles={{
                          control: (base) => ({
                            ...base,
                            background: "transparent",
                            border: "none",
                            boxShadow: "none",
                            minHeight: "36px",
                            borderRadius: 0,
                            alignItems: "center",
                            paddingTop: 6,
                            paddingBottom: 6,
                            borderBottom: "none", // remove small underline under code select (parent has main underline)
                          }),
                          singleValue: (base) => ({
                            ...base,
                            color: "#fff",
                            fontSize: "inherit",
                            margin: 0,
                            lineHeight: "1.2",
                          }),
                          option: (base) => ({
                            ...base,
                            background: "#0a2036",
                            color: "#fff",
                          }),
                          menu: (base) => ({
                            ...base,
                            background: "#0a2036",
                            borderRadius: 0,
                          }),
                        }}
                      />
                    </div>

                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="flex-1 bg-transparent py-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                      required
                    />
                  </div>
                </div>
              </SlideInUp>

              {/* Company Name Field */}
              <SlideInUp delay={0.9} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* Your Job Role Field */}
              <SlideInUp delay={1.0} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Your Job Role
                  </label>
                  <div className="relative">
                    <select
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white pb-3 text-card-mobile md:text-card text-white outline-none appearance-none cursor-pointer pr-8 job-role-select"
                      required
                    >
                      {/* Disabled empty placeholder shown initially, not selectable */}
                      <option
                        value=""
                        disabled
                        hidden
                        className="bg-[#1A2332] text-white"
                      >
                        &nbsp;
                      </option>
                      <option
                        value="Design Engineer"
                        className="bg-[#1A2332] text-white"
                      >
                        Design Engineer
                      </option>
                      <option
                        value="Project Manager"
                        className="bg-[#1A2332] text-white"
                      >
                        Project Manager
                      </option>
                      <option
                        value="Architect"
                        className="bg-[#1A2332] text-white"
                      >
                        Architect
                      </option>
                      <option
                        value="CEO/Founder"
                        className="bg-[#1A2332] text-white"
                      >
                        CEO/Founder
                      </option>
                      <option value="CTO" className="bg-[#1A2332] text-white">
                        CTO
                      </option>
                      <option
                        value="Engineer"
                        className="bg-[#1A2332] text-white"
                      >
                        Engineer
                      </option>
                      <option
                        value="Developer"
                        className="bg-[#1A2332] text-white"
                      >
                        Developer
                      </option>
                      <option
                        value="Student"
                        className="bg-[#1A2332] text-white"
                      >
                        Student
                      </option>
                      <option value="Other" className="bg-[#1A2332] text-white">
                        Other
                      </option>
                    </select>
                    <svg
                      className="absolute right-0 top-1 w-4 h-4 text-white pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </SlideInUp>

              {/* City Field */}
              <SlideInUp delay={1.1} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* Message Field */}
              <SlideInUp delay={1.2} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={1}
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none resize-none"
                  />
                </div>
              </SlideInUp>

              {/* Checkbox */}
              <SlideInUp delay={1.3} duration={0.6}>
                <div className="flex items-start gap-3 mt-2">
                  <div className="relative flex-shrink-0 w-4 h-4 mt-1">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="absolute w-4 h-4 opacity-0 cursor-pointer z-10"
                      required
                    />
                    <div
                      className={`absolute w-4 h-4 border border-white/60 rounded-sm ${
                        formData.acceptTerms ? "bg-white" : "bg-transparent"
                      } transition-colors duration-200`}
                    >
                      {formData.acceptTerms && (
                        <svg
                          className="w-3 h-3 text-[#1A2332] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-card-mobile font-normal leading-relaxed text-white/80 flex-1">
                    I accept the{" "}
                    <span className="underline cursor-pointer hover:text-white">
                      Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="underline cursor-pointer hover:text-white">
                      Privacy Policy
                    </span>
                    *
                  </p>
                </div>
              </SlideInUp>

              {/* Submit Button */}
              <SlideInUp delay={1.4} duration={0.6}>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-white hover:bg-gray-100 text-[#1A2332] font-medium text-card-mobile md:text-card px-8 py-3 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  disabled={!formData.acceptTerms}
                >
                  Submit Message
                </button>
              </SlideInUp>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactForm;
