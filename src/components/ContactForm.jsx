"use client"
import { useState } from "react";
import OtpForm from "./OtpForm";

export default function ContactForm({ isOpenContact , setIsOpenContact}) {
  
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "", service:"" });
  const [contactForm, setContactForm] = useState(true);
  const [errors, setErrors] = useState({});
  const [otpForm, setOtpForm] = useState(false);
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

    function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    // if (!form.email.trim()) e.email = "Email is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    else if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
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

    console.log("submitting form")

      setForm({ name: "", email: "", message: "" });
      setOtpForm(true)
      setStatus({ loading: false, ok: true, msg: data?.message || "Message sent!" });
    // } catch (err) {
    //   setStatus({ loading: false, ok: false, msg: err.message || "Failed to send" });
    // }
  }

  return (
    <>
    <div className={`flex justify-center p-2 transition transition-duration-300 ${isOpenContact? 'scale-100' : ' scale-0'} fixed inset-0 overflow-y-scroll overflow-x-hidden w-screen z-500 xl:inset-x-auto`}>

<div className="w-full rounded shadow-lg md:w-1/2 xl:w-1/3 bg-neutral-100 border border-neutral-300 mx-auto my-auto mb-auto py-3 px-4 md:py-6 md:px-8">

{otpForm ?

  <OtpForm setOtpForm={setOtpForm} setContactForm={setContactForm} setIsOpenContact={setIsOpenContact}/>

:
<>
{contactForm ?
  
  <form onSubmit={handleSubmit} className="mx-auto my-auto">
      <h2 className="text-center md:text-left text-2xl ml-2 my-2 text-secondary-500">Get In Touch</h2>

      <div className="">


      <label className="block mb-1 w-full basis-full xl:basis-1/2 p-2">
        <span className="text-sm">Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`mt-1 block w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring ${
            errors.name ? "border-red-500 focus:ring-red-200" : "border-neutral-300 focus:ring-neutral-600"
          }`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </label>

            <label className="block mb-1 w-full basis-full xl:basis-1/2 p-2">
        <span className="text-sm">Phone Number</span>
        <input
          type="phone"
          name="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={`mt-1 block w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring ${
            errors.phone ? "border-red-500 focus:ring-red-200" : "border-neutral-300 focus:ring-neutral-600"
          }`}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </label>

      <label className="block mb-1 w-full basis-full xl:basis-1/2 p-2">
        <span className="text-sm">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`mt-1 block w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring ${
            errors.email ? "border-red-500 focus:ring-red-200" : "border-neutral-300 focus:ring-neutral-600"
          }`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          />

        {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </label>


          </div>
      <div className="flex flex-col md:flex-row items-center gap-y-6 p-2 mt-6">
        <button
          type="submit"
          disabled={status.loading}
          className="transition inline-flex items-center justify-center rounded px-4 py-2 bg-primary-500 text-secondary-800 uppercase font-medium shadow-md hover:bg-primary-400 disabled:opacity-60"
          >
          {status.loading ? "Submitting..." : "Get a free quote"}
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
 :
<>
</>
}
</>
}
</div>
</div>
    </>
  );
}
