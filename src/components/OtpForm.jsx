"use client"
import { useState } from "react";

const OtpForm = ({ setOtpForm, setContactForm, setIsOpenContact}) => {
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  
  function validate() {
    const e = {};
    if (!otp.trim()) e.name = "Please enter the valid OTP.";
    return e;
  }
  
  async function handleSubmit(ev) {
    ev.preventDefault();
    setErrors({});
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    
    setStatus({ loading: true, ok: null, msg: "" });
    
    // try {
      //   const res = await fetch("/api/contact", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(form),
        //   });
        
        //   const data = await res.json();
        //   if (!res.ok) throw new Error(data?.error || "Something went wrong");
        
        console.log("submitting otp")
        
        setOtp('');
        setOtpForm(false)
        setContactForm(false)
        setStatus({ loading: false, ok: true, msg: data?.message || "OTP verified!" });
        // } catch (err) {
          //   setStatus({ loading: false, ok: false, msg: err.message || "Failed to send" });
          // }
        }
        
        
        
        return(
          <form onSubmit={handleSubmit} className="mx-auto my-auto">
      <h2 className="text-center md:text-left text-2xl ml-2 my-2 text-secondary-500">Enter your OTP</h2>

      <div className="">
      <label className="block mb-1 w-full basis-full xl:basis-1/2 p-2">
        <span className="text-sm">One Time Password</span>
        <input
          type="number"
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className={`mt-1 block w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring ${
            errors.name ? "border-red-500 focus:ring-red-200" : "border-neutral-300 focus:ring-neutral-600"
          }`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        {status.ok === false && <p className="text-sm text-red-600">{status.msg}</p>}

      </label>


          </div>
      <div className="flex flex-row justify-center md:flex-row items-center gap-3 p-2 mt-6">
        <button
          type="submit"
          disabled={status.loading}
          className="transition inline-flex items-center justify-center rounded px-4 py-2 bg-primary-500 text-secondary-800 uppercase font-medium shadow-md hover:bg-primary-400 disabled:opacity-60"
          >
          {status.loading ? "Verifying..." : "Verify"}
        </button>

                <button
          type="button"
          onClick={() => setIsOpenContact(false)}
          className="cursor-pointer transition inline-flex items-center justify-center rounded px-4 py-2 border border-neutral-300 text-secondary-700 uppercase font-medium shadow-md hover:bg-secondary-100 hover:text-secondary-800 disabled:opacity-60"
          >
            Close
        </button>


        {status.ok === true && <p className="text-sm text-green-700">{status.msg}</p>}
        {status.ok === false && <p className="text-sm text-red-600">{status.msg}</p>}
      </div>
    </form>
  )
}

export default OtpForm;