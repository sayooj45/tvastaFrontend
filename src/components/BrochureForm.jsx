import React from "react";



const BrochureForm = ({onClose}) => {
 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    FullName: e.target.fullName.value,
    Email: e.target.email.value,
    Mobile: e.target.mobile.value,
    Company: e.target.company.value,
    Role: e.target.role.value,
    Date: new Date().toLocaleString(),
  };

  const url = "https://script.google.com/macros/s/AKfycbxmLx8E7mNHnALhZDnZxEpg4WSvAiD-H1K49VOBoE_T-tbAcMusBlldcn5HeX4Dd5_zwA/exec";

  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Form submitted successfully!");

    // Download dummy brochure
  const link = document.createElement("a");
  link.href = "/Tech_Brochure_Dummy.pdf"; 
  link.download = "Tech-Brochure.pdf";
  link.click();

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    onClick={onClose}>
      
      {/* Form Container */}
      <div className="relative bg-[#071A2F] w-full max-w-3xl rounded-xl  p-8 text-white"
      onClick={(e) => e.stopPropagation()}>

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
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#E53935] hover:bg-[#d32f2f] transition-all duration-300 px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              Submit And Download
              {/* <Download size={16} /> */}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BrochureForm;