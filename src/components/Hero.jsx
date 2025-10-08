"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero({title}) {
  const images = [
    "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661779632194-6cf32a9b5325?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Carousel container */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Images */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black  opacity-60"></div>
          </div>
        ))}

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          {title?
          <>
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          </>:
          <>

          <h1 className="text-4xl text-white font-extrabold sm:text-5xl lg:text-6xl"> Best in Interior <br /> <span className="text-white"> Designs.</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Design That Speaks Quietly but Beautifully.
          </p>

                    <div className="mt-8 flex flex-col items-center gap-4 justify-center space-x-4 lg-flex-row">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-500 text-gray-100 uppercase font-medium rounded hover:bg-primary-400 transition"
            >
              Book Your Consultation
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-white text-white uppercase font-medium rounded hover:bg-white hover:text-secondary-600 transition"
            >
              Learn More
            </Link>
          </div>
          
          </>}


        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
