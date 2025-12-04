"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image, { getImageProps } from "next/image";

export default function Hero({ title, imgSmall, imgLarge }) {
  // common option
  const common = {
    alt: "hero image",
    priority: "high",
    fetchPriority: "high",

    className: "w-full h-full object-cover",
  };

  // Pass common as an argument with src in getImageProps and destructure the output.
  const {
    props: { srcSet: srcLarge },
  } = getImageProps({ ...common, src: imgSmall, width: 1920, height: 1080 });
  const {
    props: { srcSet: srcSmall, ...rest },
  } = getImageProps({ ...common, src: imgLarge, width: 2160, height: 3840 });

  return (
    <AnimatePresence mode="wait">
      <section className="relative overflow-hidden select-none">
        <div className="relative md:h-screen h-screen w-full overflow-hidden">
          <picture>
            <source media="(min-width: 1280px)" srcSet={srcSmall} />
            <source media="(min-width: 1536px)" srcSet={srcLarge} />
            <img {...rest} />
          </picture>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <motion.h1
              className="text-4xl lg:text-6xl text-white text-shadow-lg text-shadow-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {title ? (
                title
              ) : (
                <>
                  Best in <span className="text-primary"> Interiors.</span>
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
              )}
            </motion.h1>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
