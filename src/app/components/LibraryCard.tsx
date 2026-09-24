
import { ILibrary } from "@/types/libraryType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropsType {
  library: ILibrary;
}

const LibraryCard = ({ library }: PropsType) => {
  return (
    <Link href={`/details/${library.id}`}>
      <div
        className="
        group
        w-full
        h-full
        overflow-hidden
        rounded-2xl
        border border-gray-800
        bg-[#15171c]
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:border-lime-400/40
        hover:shadow-xl
        hover:shadow-lime-400/10
      "
      >
        {/* Image */}
        <figure className="h-[220px] w-full overflow-hidden sm:h-[240px] md:h-[265px]">
          <Image
            src={library.image}
            width={740}
            height={500}
            alt={library.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-105
            "
          />
        </figure>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 min-h-[220px] sm:min-h-[230px] md:min-h-[235px]">
          {/* Muscle Groups */}
          <div className="mb-2 flex min-h-[32px] flex-wrap gap-2 sm:gap-3">
            {library.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="
                rounded-full
                bg-lime-400
                px-3
                py-1
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-black
                transition-transform
                duration-300
                group-hover:scale-105
                sm:px-4
                sm:text-sm
              "
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2
            className="
            min-h-[28px]
            text-xl
            font-black
            uppercase
            tracking-wide
            text-white
            transition-colors
            duration-300
            group-hover:text-lime-400
            sm:min-h-[32px]
            sm:text-2xl
          "
          >
            {library.name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 min-h-[24px] text-sm text-gray-400 sm:text-base">
            {library.equipment}
          </p>

          {/* Divider */}
          <div className="my-3 border-t border-gray-800" />

          {/* Stats */}
          <div
            className="
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            text-xs
            text-gray-400
            sm:gap-6
            sm:text-sm
          "
          >
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg">◷</span>
              <span>{library.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg">♨</span>
              <span>{library.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg">☆</span>
              <span>{library.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;

