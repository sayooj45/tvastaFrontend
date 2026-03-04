import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PrivacyConsent = () => {
  const [visible, setVisible] = useState(
    sessionStorage.getItem("privacyAccepted") !== "true"
  );

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const acceptConsent = () => {
    if (!checked) {
      setError(true);
      return;
    }

    sessionStorage.setItem("privacyAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 px-4">
      <div className="bg-[#0D192D] rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        

        <div className="p-6 md:p-10 flex-1">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-3">
            Your privacy is important to us
          </h3>

          <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-4">
            We use cookies to improve your experience. By continuing, you agree to our privacy policy.
          </p>

          <div className="flex items-start gap-2 mb-5">
            <input type="checkbox" className="mt-1 scale-110" checked={checked} onChange={(e)=>{setChecked(e.target.checked)
                if (e.target.checked) setError(false)
            }}/>
            <span className="text-sm md:text-lg text-white">
              I accept the{" "}
              <Link to="#" className="underline">
                Privacy Policy*
              </Link>
            </span>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4">
                Please accept the Privacy Policy to continue.
            </p>
            )}

          <button
            onClick={acceptConsent}
            className="px-6 py-2 rounded-full bg-white text-[#1C1C1C] text-sm md:text-lg font-medium"
          >
            Submit
          </button>
        </div>


        <div className="bg-[#0D192D] flex items-center justify-center p-6 md:p-10 md:min-w-[260px]">
          <img
            src="/images/tvastanavlogo.png"
            alt="Tvasta Logo"
            className="h-12 md:h-16 lg:h-20 w-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default PrivacyConsent;