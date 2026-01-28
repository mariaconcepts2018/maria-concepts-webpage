import { Amaranth, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import PopupButtons from "@/components/PopupButtons";
import { GoogleTagManager } from "@next/third-parties/google";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const amaranth = Amaranth({
  variable: "--font-amaranth",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "Maria Concepts | Design Beyond Boundries | Interiors & Constructions",
  description:
    "Maria Concepts at Bengaluru offers premium interiors, construction and renovation services tailored to your vision and lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-17897988835" />

      <body
        className={`relative bg-white ${nunitoSans.variable} ${amaranth.variable} antialiased`}
      >
        <PopupButtons />
        <Navbar />
        {children}
        <Footer />
        <BottomNavbar />
      </body>
    </html>
  );
}
