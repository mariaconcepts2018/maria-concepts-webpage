"use client"
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "./Icons";

export default function ContactForm({setOpen }) {
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    otp: "",
  });
  const [generatedOtp, setGeneratedOtp] = useState(null);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    // Simulate OTP generation
    const otp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp} (simulate SMS/email)`);
    setStep(2);
  };

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (parseInt(enteredOtp) === generatedOtp) {
      alert("OTP Verified Successfully!");
    setOpen(false)
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const progress = (step / 2) * 100;

  return (
    <>
   <div className="flex flex-row flex-nowrap items-center justify-between mb-6"> 
 <div className="w-full bg-neutral-300 rounded-full h-1">
          <motion.div
            className="bg-primary-600 h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

      <button onClick={() => setOpen(false)}>
  <Close className="text-neutral-300 w-10 h-10 ml-4" />
</button>

          </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            >
            {/* Step 1 - User Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Enter Your Details
                </h2>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                  />

                <button
                  onClick={handleNext}
                  disabled={!formData.name || !formData.phone || !formData.email}
                  className={`w-full py-2 rounded-lg transition ${
                    formData.name && formData.phone && formData.email
                      ? "bg-primary-600 text-neutral-800 hover:bg-primary-500  cursor-pointer"
                      : "bg-gray-300 text-neutral-600 cursor-not-allowed"
                  }`}
                >
                  Get OTP
                </button>
              </div>
            )}

            {/* Step 2 - OTP Verification */}
            {step === 2 && (
              <div className="space-y-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Verify OTP
                </h2>
                <p className="text-gray-600 text-sm">
                  Enter the 4-digit OTP sent to your phone.
                </p>


                <div className="flex justify-center gap-3">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="number"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      ref={(el) => (inputsRef.current[i] = el)}
                      className="w-10 h-10 text-center text-xl border border-gray-300 rounded-lg focus:ring focus:ring-primary-500 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  ))}
                </div>

                <button
                  onClick={handleVerify}
                  disabled={!otp.join("")}
                  className={`w-full py-2 rounded-lg transition ${
                    otp.join("").length === 4
                      ? "bg-primary-600 text-neutral-800 hover:bg-primary-500 cursor-pointer"
                      : "bg-gray-300 text-neutral-600 cursor-not-allowed"
                  }`}
                >
                  Verify OTP
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-500 underline mt-2 cursor-pointer"
                >
                  ← Edit Details
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Step Indicator */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Step {step} of 2
        </p>
    </>
  );
}
