"use client"
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "./Icons";

export default function ContactForm({setOpen }) {
  
  const formStepLocal = Number( 
    (typeof window !== 'undefined')?? 
      localStorage.getItem('form-step')
    )
  const [step, setStep] = useState(formStepLocal? formStepLocal : 1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    code: "",
  });

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const inputsRef = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission
          //send OTP  
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-otp`, { // Replace with your API route
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams({phone : formData.phone}),
            })
            
            if (!response.ok) {
              throw new Error('Failed to send OTP.')
            }
            
            const result = await response.json()
            localStorage.setItem('form-step', 2)
            setStep(2);
          console.log('OTP sent successful:', result)
          setMessage("An OTP has been sent to your mobile number.")
        } catch (error) {
          console.error('Error sending OTP:', error)
          // Handle error (e.g., show error message)
        }
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

  const handleVerify = async (e) => {
    e.preventDefault() // Prevent default form submission
          try {
            const code = otp.join("")
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-otp`, { // Replace with your API route
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams({ ...formData , code: code}),
            })

            if (!response.ok) {
              throw new Error('Failed to verify OTP.')
            }
            
            const result = await response.json()
    setFormData({ ...formData, isVerified: true });
            console.log('OTP verified successful:', result)
            setMessage("Your number has been verified successfully")

            setFormData({name: "",phone: "",email: ""})
            setOtp(["","","",""])

          } catch (error) {
            console.error('Error verifying OTP:', error)
            setError("Error verifying phone number")
            // Handle error (e.g., show error message)
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
      <button className="cursor-pointer" onClick={() => setOpen(false)}>
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
      <form method="post" onSubmit={handleSubmit}>
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
              type="submit"
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
        </form>

        {/* Step 2 - OTP Verification */}
<form method="post" onSubmit={handleVerify} >
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
              type="submit"
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
        </ form>
      </motion.div>
    </AnimatePresence>

    {/* Step Indicator */}
    <p className="text-sm text-gray-500 mt-4 text-center">
      Step {step} of 2
    </p>

    
          <div
          role="alert" className={`${message && 'hidden'} ${error? 'opacity-100' : 'opacity-0'} transition-all mt-3 relative flex w-full p-2 text-sm text-red-400 border border-red-400 rounded-md justify-between items-center`}
            >

        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg>
          {error}
            </div>
          <button className=" transition-all cursor-pointer" type="button" onClick={() => setError(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
            </div>

            {message && 
                      <div
          role="alert" className={`${message? 'opacity-100' : 'opacity-0'} transition-all mt-3 relative flex w-full p-2 text-sm text-neutral-800 border border-neutral-800 rounded-md justify-between items-center`}
            >
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg>
          {message}
            </div>
          <button className=" transition-all cursor-pointer" type="button" onClick={() => setMessage(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
            </div>
  
}
  
    </>
  );
}
