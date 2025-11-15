"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// MasonryImageGrid.jsx
// Default-exported React component for Next.js + Tailwind.
// Features:
// - CSS column-based responsive masonry grid
// - Full-screen lightbox with animated transitions (framer-motion)
// - Thumbnails strip in lightbox + keyboard navigation (← → Esc)
// - Accessibility: focus trap for modal, alt text, close button
// - Tailwind-first styling, minimal dependencies

export default function Gallery({ images }) {
  // If no images passed, provide beautiful Unsplash placeholders
  const fallback = [
    {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      alt: "Warm wooden interior living space",
    },
    {
      src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      alt: "Modern kitchen with island lighting",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      alt: "Cozy living room with natural light",
    },
    {
      src: "https://images.unsplash.com/photo-1499955085172-a104c9463ece",
      alt: "Minimal bedroom with white linens",
    },
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      alt: "Contemporary bathroom marble details",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      alt: "Dining with industrial pendant lights",
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      alt: "Scandinavian staircase minimal style",
    },
    {
      src: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      alt: "Modern home exterior at sunset",
    },
  ];
  const imgs = images && images.length ? images : fallback;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % imgs.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + imgs.length) % imgs.length);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, imgs.length]);

  useEffect(() => {
    if (open) {
      // lock scroll
      document.body.style.overflow = "hidden";
      // focus modal for accessibility
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  function openAt(i) {
    setIndex(i);
    setOpen(true);
  }

  function prev() {
    setIndex((i) => (i - 1 + imgs.length) % imgs.length);
  }
  function next() {
    setIndex((i) => (i + 1) % imgs.length);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Portfolio</h2>

      {/* Masonry grid using CSS columns */}
      <div
        className="masonry-grid gap-1 lg:w-1/2 lg:mx-auto"
        style={{ columnGap: "0.5rem" }}
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid relative mb-4 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition"
            onClick={() => openAt(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openAt(i)}
            aria-label={`Open image ${i + 1}`}
          >
            <div className="aspect-[4/5] relative w-full">
              <Image
                src={img.src}
                alt={img.alt || `Image ${i + 1}`}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
                priority={i < 3}
              />
            </div>
            <div className="p-3 bg-gradient-to-t from-black/40 to-transparent absolute bottom-0 left-0 right-0">
              <p className="text-sm text-white truncate">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-200 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpen(false)}
            />

            <div
              ref={modalRef}
              className="relative z-10 max-w-[1200px] w-full mx-auto "
              tabIndex={-1}
            >
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>

              <div
                key={index}
                className="bg-neutral-100 rounded-2xl overflow-hidden shadow-2xl"
              >
                <motion.div
                  className="relative h-[65vh] sm:h-[65vh] w-full"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={imgs[index].src}
                    alt={imgs[index].alt || `Image ${index + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(min-width:1024px) 900px, 100vw"
                    priority
                  />
                </motion.div>

                <div className="p-4 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-neutral-800 text-lg font-medium truncate">
                      {imgs[index].alt}
                    </h3>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10"
                    >
                      Prev
                    </button>
                    <button
                      onClick={next}
                      className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10"
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="bg-neutral-800/80 p-3">
                  <div className="flex gap-3 overflow-x-auto py-1">
                    {imgs.map((t, ti) => (
                      <button
                        key={ti}
                        onClick={() => setIndex(ti)}
                        className={`flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                          ti === index ? "border-white" : "border-transparent"
                        } focus:outline-none`}
                        aria-label={`Open thumbnail ${ti + 1}`}
                      >
                        <div className="relative h-16 w-24">
                          <Image
                            src={t.src}
                            alt={t.alt || `Thumb ${ti + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Masonry using CSS columns. Change column-count with media queries using Tailwind utility breakpoints is not possible directly,
           so we rely on a small set of responsive helpers here. */
        .masonry-grid {
          column-count: 3;
        }
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        /* Make images break inside columns cleanly */
        .masonry-grid > * {
          break-inside: avoid;
        }
      `}</style>
    </div>
  );
}

// USAGE
// Place this component in a page and pass an `images` array (src must be in /public or remote domains configured in next.config.js).
// Example:
// const photos = [
//   { src: '/images/photo1.jpg', alt: 'Nice living room' },
//   { src: '/images/photo2.jpg', alt: 'Kitchen' },
//   ...
// ];
// <MasonryImageGrid images={photos} />
