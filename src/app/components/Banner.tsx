import Image from "next/image";
import React from "react";
import BannerLogo from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-base-100 rounded-md mx-8 mt-12 py-12 px-12">
      <div className="grid grid-cols-2 ml-8">
        {/* left side */}
        <div className="flex flex-col justify-center">
          <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
          <h1 className="text-5xl font-bold py-4">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="bg-[#C2F800] text-black text-sm rounded-lg w-[12rem] py-2 px-5 mt-8">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* right side */}

        <div className="flex justify-center">
          <Image src={BannerLogo} alt="Banner img"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
