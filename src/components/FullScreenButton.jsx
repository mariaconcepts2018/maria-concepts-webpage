"use client";
import Image from "next/image";
import { useState } from "react";

export default function FullScreenButton({src, alt, className, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-0"
      >
        {children }

      </button>

      {/* Modal Background */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <Image className="z-100 h-full w-auto" width={1600} height={1200} src={src} alt={alt}/>
          
        </div>
      )}
    </div>
  );
}
