import React from "react";
import FooterImg from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t-2 border-base-100 px-8 bg-[#0B1020] mt-12">
      <div className="flex justify-between text-center py-8">
        <div className="flex gap-2">
          <Image src={FooterImg} alt="Footer"></Image>
          <a className="btn-ghost text-xl">FITLOG</a>
        </div>

        <div><p className="text-gray-400">© 2026 FitLog — Workout Library. Train hard, log honest.</p></div>
      </div>
    </div>
  );
};

export default Footer;
