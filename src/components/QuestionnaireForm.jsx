"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionnaireForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    address: "",
    bhkType: "",
    area: "",
    floors: "",
  });

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const progress = (step / totalSteps) * 100;

  return (
    
      <div className="w-full p-6">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
          <motion.div
            className="bg-primary-500 h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Your Site Address</h2>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter full address"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Type of BHK</h2>
                <select
                  name="bhkType"
                  value={formData.bhkType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
                >
                  <option value="">Select BHK type</option>
                  <option value="1BHK">1 BHK</option>
                  <option value="2BHK">2 BHK</option>
                  <option value="3BHK">3 BHK</option>
                  <option value="Duplex">Duplex</option>
                </select>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Area of Site (in sq.ft)</h2>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g., 2400"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-primary-500 outline-none"
                />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Number of Floors</h2>
                <input
                  type="number"
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  placeholder="e.g., 2"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-yellow-500 outline-none"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!formData[Object.keys(formData)[step - 1]]}
              className={`transition inline-flex items-center justify-center rounded px-4 py-2 text-secondary-800 uppercase shadow-md disabled:opacity-60 ${
                formData[Object.keys(formData)[step - 1]]
                  ? "bg-primary-500 hover:bg-primary-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => alert("Form submitted!")}
              className="transition inline-flex items-center justify-center rounded px-4 py-2 bg-primary-500 text-secondary-800 uppercase shadow-md hover:bg-primary-400 disabled:opacity-60"
            >
              SUBMIT
            </button>
          )}
        </div>

        {/* Step Indicator */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Step {step} of {totalSteps}
        </p>
      </div>
  );
}
