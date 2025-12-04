"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function FullscreenModal({
  images,
  setFullscreen,
  setCurrentIndex,
  currentIndex,
}) {
  const activeRef = useRef();

  useEffect(() => {
    const scrollToElement = () => {
      activeRef.current?.scrollIntoView({ block: "center", inline: "center" });
    };
    scrollToElement();
  }, [currentIndex]);
  const closeFullscreen = () => {
    setFullscreen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-90 z-[9999] flex flex-col animate-fadeIn">
      <div className="flex justify-evenly items-center p-4 text-white">
        <div className="flex gap-2">
          <button
            title="previous"
            onClick={() =>
              setCurrentIndex((i) => (i - 1 + images.length) % images.length)
            }
            className="bg-primary-600 hover:bg-primary-500 text-neutral-800 px-3 py-1 rounded"
          >
            <ArrowLeft />
          </button>
          <button
            title="next"
            onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
            className="bg-primary-600 hover:bg-primary-500 text-neutral-800 px-3 py-1 rounded"
          >
            <ArrowRight />
          </button>
          <button
            title="close fullscreen"
            onClick={closeFullscreen}
            className="bg-primary-600 hover:bg-primary-500 text-neutral-800 px-3 py-1 rounded"
          >
            <X />
          </button>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={900}
          height={600}
          className="w-full md:h-full md:w-auto transition-transform duration-150 ease-in-out"
        />
        <p className="absolute bottom-1/2 p-1  px-4 font-light bg-white rounded-full text-black opacity-20">
          &copy; mariaconcepts
        </p>
      </div>

      <div className="flex justify-start gap-2 overflow-x-auto p-3 bg-black/60 border-t border-white/10">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt || ""}
            width={150}
            height={100}
            ref={i === currentIndex ? activeRef : null}
            onClick={() => setCurrentIndex(i)}
            className={`h-16 w-auto rounded-md cursor-pointer object-cover ${
              i === currentIndex ? "ring-2 ring-white" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
