"use client";

import Link from "next/link";
import { WhatsAppIcon } from "./Icons";

export default function WhatsApp() {

  return (
      <div className="fixed bottom-0 right-0 p-4 md:p-8 z-100">

      <Link href="https://wa.me/+917026252255?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" className="w-full h-auto cursor-pointer">
      
      <WhatsAppIcon className="drop-shadow-xl w-12"/>
      </Link>
      </div>
  );
}