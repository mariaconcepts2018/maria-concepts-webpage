'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useEffect } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

    const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <nav className={`fixed bg-none z-100 w-full`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition
        ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }
        `}>
        <div className="flex justify-between h-24 items-center ">

          {/* Desktop Menu */}
          {/* Logo */}
          <Link href="/" className="p-2">

          <Image src="/logo.png" alt="logo" width={120} height={180} className="w-24 md:w-32 h-auto md:py-2 drop-shadow-4xl" />
            {/* <span className="logo text-2xl md-text-4xl text-center">MARIA</span>
            <small className="text-sm text-center logo-2">
            CONCEPTS
            </small> */}
          </Link>
          <div className="fixed scroll-none md:relative hidden md:flex space-x-8">
            <Link href="/" className={`text-white ${(pathname === '/') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              Home
            </Link>
            <Link href="/about" className={`text-white ${(pathname === '/about') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              About
            </Link>
            <Link href="/services" className={`text-white ${(pathname === '/services') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              Services
            </Link>
            <Link href="/gallery" className={`text-white ${(pathname === '/gallery') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              Gallery
            </Link>
            <Link href="/contact" className={`text-white ${(pathname === '/contact') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-100 hover:text-primary-600 focus:outline-none"
            onClick={() => {setIsOpen(!isOpen)

              setHidden(true)
            }}
          >
  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
        
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden px-4 py-8 md:hidden bg-black/50">
          <div className="flex flex-col space-y-6 p-4 bg-secondary-100 w-full mx-auto pb-12">
                      <button
            className="md:hidden focus:outline-none"
            onClick={() => {setIsOpen(false)
setHidden(false)
            }}
          >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
                </button>
                <h1 className="text-center">Navigate</h1>
            <Link href="/" onClick={() => 
              {
                setIsOpen(false)
                setHidden(false)
                }} className={`${(pathname === '/') ? 'text-gray-400': 'text-gray-700'} text-center hover:text-primary-600 font-semibold`}>
              Home
            </Link>
            <Link href="/about" onClick={() => 
              {
                setIsOpen(false)
                setHidden(false)
                }} className={`${(pathname === '/about') ? 'text-gray-400': 'text-gray-700'} text-center hover:text-primary-600 font-semibold`}>
              About
            </Link>
            <Link href="/services" onClick={() => 
              {
                setIsOpen(false)
                setHidden(false)
                }} className={`${(pathname === '/services') ? 'text-gray-400': 'text-gray-700'} text-center hover:text-primary-600 font-semibold`}>
              Services
            </Link>            
            <Link href="/gallery" onClick={() => 
              {
                setIsOpen(false)
                setHidden(false)
                }} className={`${(pathname === '/gallery') ? 'text-gray-400': 'text-gray-700'} text-center hover:text-primary-600 font-semibold`}>
              Gallery
            </Link>
            <Link href="/contact" onClick={() => 
              {
                setIsOpen(false)
                setHidden(false)
                }} className={`${(pathname === '/contact') ? 'text-gray-400': 'text-gray-700'} text-center hover:text-primary-600 font-semibold`}>
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
