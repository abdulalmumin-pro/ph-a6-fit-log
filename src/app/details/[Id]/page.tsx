import { ILibrary } from '@/types/libraryType';
import Image from 'next/image';
import React from 'react';

interface ParamType {
  params: Promise<{
    id?: string;
    Id?: string;
  }>;
}

const getLibraryData = async (): Promise<ILibrary[]> => {
  try {
    const response = await fetch("http://localhost:3000/data.json", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data: ILibrary[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching library data:", error);
    return [];
  }
};

const Slug = async ({ params }: ParamType) => {
  const resolvedParams = await params;
  const currentId = resolvedParams.id || resolvedParams.Id;

  const libraryData = await getLibraryData();

  const libraryDetails = libraryData.find(
    (library: ILibrary) => String(library.id).trim() === String(currentId).trim()
  );

  if (!libraryDetails) {
    return (
      <div className="min-h-screen bg-[#0d0f12] flex items-center justify-center text-white">
        <p className="text-zinc-400">Exercise not found.</p>
      </div>
    );
  }

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = libraryDetails;

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white py-6 px-4 md:px-12 lg:px-24 flex justify-center items-center">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Image */}
        <div className="flex justify-center items-center w-full">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Right Side: Compact Height Content */}
        <div className="flex flex-col space-y-3.5 justify-center">
          
          {/* Header & Description */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide leading-tight">
              {name}
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 leading-snug">
              {description}
            </p>
          </div>

          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-1.5">
            {muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black font-semibold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs List - Compact Padding & Font */}
          <div className="bg-[#14171d] rounded-xl p-3.5 border border-zinc-800/50 space-y-2 text-xs">
            <div className="flex justify-between items-center pb-1 border-b border-zinc-800/50">
              <span className="text-zinc-500 font-medium uppercase text-[11px]">Equipment</span>
              <span className="font-semibold text-zinc-200">{equipment}</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-zinc-800/50">
              <span className="text-zinc-500 font-medium uppercase text-[11px]">Difficulty</span>
              <span className="font-semibold text-zinc-200">{difficulty}</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-zinc-800/50">
              <span className="text-zinc-500 font-medium uppercase text-[11px]">Sets</span>
              <span className="font-semibold text-zinc-200">{sets}</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-zinc-800/50">
              <span className="text-zinc-500 font-medium uppercase text-[11px]">Reps</span>
              <span className="font-semibold text-zinc-200">{reps}</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-zinc-800/50">
              <span className="text-zinc-500 font-medium uppercase text-[11px]">Duration</span>
              <span className="font-semibold text-zinc-200">{duration} min</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-zinc-800/50">
              <span className="text-zinc-500 font-medium uppercase text-[11px]">Calories</span>
              <span className="font-semibold text-zinc-200">{caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between items-center pt-0.5">
              <span className="text-zinc-500 font-medium uppercase text-[11px]">Rating</span>
              <span className="font-semibold text-zinc-200">{rating}</span>
            </div>
          </div>

          {/* Instructions List - Compact Spacing */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wide text-zinc-300">
              Instructions
            </h2>
            <ol className="space-y-1 text-zinc-300 text-xs">
              {instructions?.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-zinc-500 font-medium">{index + 1}.</span>
                  <span className="leading-tight">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons - Compact Height */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <button className="flex-1 bg-[#ccff00] text-black font-bold py-2.5 px-4 rounded-lg hover:bg-[#b8e600] transition flex items-center justify-center gap-2 text-xs">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
              </svg>
              Add to today's plan
            </button>
            <button className="flex-1 bg-[#14171d] text-zinc-300 font-medium py-2.5 px-4 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition flex items-center justify-center gap-2 text-xs">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Save for later
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slug;