import React, { useState } from "react";

const PINCODE_REGEX = /^[1-9][0-9]{5}$/;

function AddressModal({ onSave }) {
  const [step,     setStep]     = useState(1); // 1 = form, 2 = confirm
  const [flat,     setFlat]     = useState("");
  const [street,   setStreet]   = useState("");
  const [city,     setCity]     = useState("");
  const [pincode,  setPincode]  = useState("");
  const [error,    setError]    = useState("");

  const validate = () => {
    if (!flat.trim())              return "Please enter your flat / house number.";
    if (!street.trim())            return "Please enter your street / area.";
    if (!city.trim())              return "Please enter your city.";
    if (!PINCODE_REGEX.test(pincode.trim())) return "Please enter a valid 6-digit pincode.";
    return "";
  };

  const handleConfirm = () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setStep(2);
  };

  const handleSave = () => {
    const address = `${flat.trim()}, ${street.trim()}, ${city.trim()} - ${pincode.trim()}`;
    const email = localStorage.getItem("email");
    if (email) localStorage.setItem(`deliveryAddress_${email}`, address);
    onSave(address);
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* header */}
        <div className="bg-gradient-to-r from-[#013f21] to-[#025c30] px-8 py-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
              <i className="ri-map-pin-2-line text-white text-xl"></i>
            </div>
            <h2 className="text-white text-xl font-bold">Delivery Address</h2>
          </div>
          <p className="text-green-200 text-sm">
            {step === 1 ? "Where should we deliver your fresh groceries?" : "Please confirm your address"}
          </p>
        </div>

        <div className="px-8 py-6">
          {step === 1 ? (
            <>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Flat / House No.</label>
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-3 focus-within:border-green-500 transition">
                    <i className="ri-home-4-line text-gray-400"></i>
                    <input
                      type="text"
                      placeholder="e.g. 49/1, Block A"
                      value={flat}
                      onChange={e => { setFlat(e.target.value); setError(""); }}
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Street / Area</label>
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-3 focus-within:border-green-500 transition">
                    <i className="ri-road-map-line text-gray-400"></i>
                    <input
                      type="text"
                      placeholder="e.g. New Gandhipuram"
                      value={street}
                      onChange={e => { setStreet(e.target.value); setError(""); }}
                      className="flex-1 outline-none text-sm text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">City</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-3 focus-within:border-green-500 transition">
                      <i className="ri-building-2-line text-gray-400"></i>
                      <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={e => { setCity(e.target.value); setError(""); }}
                        className="flex-1 outline-none text-sm text-gray-700 w-0 min-w-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Pincode</label>
                    <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 gap-3 focus-within:border-green-500 transition">
                      <i className="ri-pin-distance-line text-gray-400"></i>
                      <input
                        type="text"
                        placeholder="6-digit"
                        maxLength={6}
                        value={pincode}
                        onChange={e => { setPincode(e.target.value.replace(/\D/g, "")); setError(""); }}
                        className="flex-1 outline-none text-sm text-gray-700 w-0 min-w-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mt-3 flex items-center gap-2 text-red-500 text-sm bg-red-50 px-4 py-2.5 rounded-xl">
                  <i className="ri-error-warning-line"></i>
                  {error}
                </div>
              )}

              <button
                onClick={handleConfirm}
                className="mt-5 w-full bg-gradient-to-r from-green-700 to-green-900 text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Confirm Address <i className="ri-arrow-right-line"></i>
              </button>
              <button
                onClick={() => onSave(null)}
                className="mt-3 w-full text-gray-400 hover:text-gray-600 text-sm text-center py-1 transition"
              >
                Skip for now, I'll add later
              </button>
            </>
          ) : (
            <>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-map-pin-line text-white text-lg"></i>
                  </div>
                  <div>
                    <p className="text-xs text-green-700 font-bold uppercase tracking-wider mb-1">Delivering To</p>
                    <p className="text-gray-800 font-semibold text-sm">{flat}, {street}</p>
                    <p className="text-gray-600 text-sm">{city} - {pincode}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition text-sm"
                >
                  <i className="ri-edit-line mr-1"></i> Edit
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 bg-gradient-to-r from-green-700 to-green-900 text-white py-3 rounded-xl font-bold hover:opacity-90 transition text-sm flex items-center justify-center gap-2"
                >
                  <i className="ri-check-line"></i> Save & Deliver Here
                </button>
              </div>
              <button
                onClick={() => onSave(null)}
                className="mt-3 w-full text-gray-400 hover:text-gray-600 text-sm text-center py-1 transition"
              >
                Skip for now, I'll add later
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
