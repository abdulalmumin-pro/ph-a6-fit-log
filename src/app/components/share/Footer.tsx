import React from "react";
import FooterImg from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t-2 border-base-100 bg-[#0B1020] mt-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 sm:py-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={FooterImg}
            alt="FitLog logo"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />

          <a className="text-lg sm:text-xl font-semibold text-white">
            FITLOG
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs sm:text-sm text-center md:text-right leading-relaxed">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;