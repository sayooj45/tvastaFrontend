import React, { useEffect, useState } from "react";



const BrochureForm = ({onClose}) => {

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(""); 


const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("idle");

  const formData = new URLSearchParams();
  formData.append("FullName", e.target.fullName.value);
  formData.append("Email", e.target.email.value);
  formData.append("Mobile", e.target.mobile.value);
  formData.append("Company", e.target.company.value);
  formData.append("Role", e.target.role.value);
  formData.append("Date", new Date().toLocaleString());

  const url =
    "https://script.google.com/macros/s/AKfycbx2k2Y3b5jtgO_aeKi-ql68LLpVWR2N5IdITS3uXUDdaYwy6wU_IkZXxM32LRb0QDFbUQ/exec";

      try {
        await fetch(url, {
          method: "POST",
          body: formData,
        });

        setStatus("success");

        // Download brochure
        const link = document.createElement("a");
        link.href = "/Tech_Brochure_Dummy.pdf";
        link.download = "Tech-Brochure.pdf";
        link.click();

        setTimeout(() => {
          onClose();
        }, 2000);

      } catch (error) {
        setStatus("error");
      } finally {
        setLoading(false);
      }
  };


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
    onClick={onClose}>
      
      {/* Form Container */}
      <div className="relative bg-[#071A2F] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-8 text-white"
      onClick={(e) => e.stopPropagation()}>

        {/* close button  */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400 transition"
        >
          &times;
        </button>

        {/* Header */}
        <div className=" p-6 mb-8">
          <h2 className="text-3xl font-semibold mb-2">
            Download brochure
          </h2>
          <p className="text-sm text-gray-300">
            We ask for your professional details so our team can assist you better if you have questions.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="block text-sm mb-3">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none pb-2"
            />
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-sm mb-3">Work Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none pb-2"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm mb-3">Mobile Number</label>
            <div className="flex items-center border-b border-gray-500 pb-2">
              <select className="bg-transparent outline-none text-sm mr-3">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                name="mobile"
                maxLength="10"
                pattern="[0-9]{10}"
                inputMode="numeric"
                required
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm mb-3">Company Name</label>
            <input
              type="text"
              name="company"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none pb-2"
            />
          </div>

          {/* Job Role */}
          <div>
            <label className="block text-sm mb-3">Your Job Role</label>
            <input
              type="text"
              name="role"
              required
              className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none pb-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#E53935] hover:bg-[#d32f2f] transition-all duration-300 px-6 py-3 rounded-full font-semibold flex items-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              "Submit And Download"
            )}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-sm mt-3">
              Brochure download started successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">
              Submission failed. Please try again.
            </p>
          )}

        </form>
      </div>
    </div>
  );
};

export default BrochureForm;