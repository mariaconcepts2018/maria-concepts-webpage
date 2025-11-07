'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";
import Logo from "./Logo";
import ContactModal from "./ContactModal";


export default function Navbar() {
      const [open, setOpen] = useState(false);      
      const [hidden, setHidden] = useState(false);
      const [lastScrollY, setLastScrollY] = useState(0);
      
      const pathname = usePathname();
      const handleClick = () => {
        setOpen(true)
      }

  useEffect(() => {
    const handleScroll = () => {
      if ( window.scrollY > 0) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
    <nav className={`absolute lg:fixed z-100 w-full transition ${
      hidden ? " lg:bg-white lg:text-neutral-700 lg:shadow-lg" : "bg-none text-white"
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition`}>
        <div className="flex justify-between h-24 items-center ">

          {/* Desktop Menu */}
          {/* Logo */}
          <Link href="/" className="px-2   ">

          <Logo className="w-24 xl:w-30 h-auto drop-shadow-4xl" />

          </Link>
          <div className="w-full scroll-none xl:relative hidden lg:flex lg:justify-end space-x-8 items-center text-md ">
            <Link href="/" className={` ${(pathname === '/') && 'border-b'} font-semibold uppercase transition`}>
              Home
            </Link>
            <Link href="/about" className={` ${(pathname === '/about') && 'border-b'} font-semibold uppercase transition`}>
              About
            </Link>
            <Link href="/services" className={` ${(pathname === '/services') && 'border-b'} font-semibold uppercase transition`}>
              Services
            </Link>
            <Link href="/gallery" className={` ${(pathname === '/gallery') && 'border-b'} font-semibold uppercase transition`}>
              Gallery
            </Link>
            <button onClick={handleClick} className={`bg-primary cursor-pointer text-neutral-700 py-2 px-4 shadow-lg rounded-full font-semibold hover:shadow-md hover:text-neutral-700 hover:border-primary-200 uppercase transition`}>
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>

      <ContactModal open={open} setOpen={setOpen} />

   </>
  );
}
