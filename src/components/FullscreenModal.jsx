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

      <div className="flex-1 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1920}
          height={1080}
          className="w-full md:h-full md:w-auto transition-transform duration-150 ease-in-out"
        />
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto p-3 bg-black/60 border-t border-white/10">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt || ""}
            width={200}
            height={300}
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
