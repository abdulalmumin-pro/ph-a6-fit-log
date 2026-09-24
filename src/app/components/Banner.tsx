import Image from "next/image";
import React from "react";
import BannerLogo from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-base-100 rounded-md mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mt-8 md:mt-12 py-8 sm:py-10 md:py-12 px-5 sm:px-8 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        
        {/* Left side */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-[#C2F800] text-sm sm:text-base font-medium">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold py-3 sm:py-4 leading-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="bg-[#C2F800] text-black text-sm font-medium rounded-lg w-full sm:w-[12rem] py-2.5 px-5 mt-6 sm:mt-8 mx-auto md:mx-0 hover:bg-[#b5e800] transition-colors">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right side */}
        <div className="flex justify-center items-center">
          <Image
            src={BannerLogo}
            alt="Workout banner"
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;