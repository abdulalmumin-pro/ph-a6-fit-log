import { ILibrary } from "@/types/libraryType";
import Image from "next/image";
import React from "react";

interface PropsType {
  library: ILibrary;
}

const LibraryCard = ({ library }: PropsType) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] shadow-sm">
      {/* Image */}
      <figure className="h-[265px] w-full overflow-hidden">
        <Image
          src={library.image}
          width={740}
          height={500}
          alt={library.name}
          className="h-full w-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="p-8">
        {/* Muscle groups */}
        <div className="mb-5 flex flex-wrap gap-3">
          {library.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise name */}
        <h2 className="text-2xl font-black uppercase tracking-wide text-white">
          {library.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-base text-gray-400">
          {library.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-gray-800" />

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
          {/* Duration */}
          <div className="flex items-center gap-2">
            <span className="text-lg">◷</span>
            <span>{library.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <span className="text-lg">♨</span>
            <span>{library.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-lg">☆</span>
            <span>{library.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;