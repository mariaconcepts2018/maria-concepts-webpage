"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero({title}) {
  const images = [
    // "/kitchen-16_9.jpg",
    "/livingroom-tv-16_9.png",
    // "/wallpanel-16_9.png",
  ];

  const [isMobile, setIsMobile] = useState(true);
  // Auto-slide every 5 seconds
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 600px)").matches)
  }, []);

  return (
    
                  <AnimatePresence mode="wait">

  
    <section className="relative overflow-hidden select-none">
      {/* Carousel container */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Images */}
        {/* {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          > */}
            <img
              // src={src}
              src={`https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761220154/hero_gqdsnr.avif`}
              alt={`Slide ${ 1}`}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* </div> */}
        {/* ))} */}

        {/* Hero content */}
                  <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
            >

            


          <motion.h1 className="text-4xl lg:text-6xl text-white text-shadow-lg text-shadow-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, }}
            transition={{ duration: 1 }}
          >
           { title?
             title 
             :
             <>Best in <span className="text-primary"> Interiors.</span>
              <motion.p 
                className="mt-6 text-2xl lg:text-3xl italic text-shadow-lg text-shadow-black/30 max-w-2xl mx-auto"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                >

                Design beyond boundaries.
                </motion.p>
             </>
           }

          </motion.h1>


    </div>   
      </div>
    </section>
            </AnimatePresence>
  );
}
