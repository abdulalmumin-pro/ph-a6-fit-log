
"use client";

import { FitContext } from "@/context/FitContext";
import { ILibrary } from "@/types/libraryType";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

type SortOption = "duration" | "calories" | "rating";
type ActiveTab = "plan" | "saved";

const MyPlan = () => {
  const fitContext = useContext(FitContext);

  const [activeTab, setActiveTab] = useState<ActiveTab>("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  if (!fitContext) {
    return null;
  }

  const { plan, setPlan, save, setSave } = fitContext;

  const currentRawList: ILibrary[] =
    activeTab === "plan" ? plan : save;

  const currentList = [...currentRawList].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(b.duration ?? 0) - Number(a.duration ?? 0);
    }

    if (sortBy === "calories") {
      return (
        Number(b.caloriesBurned ?? 0) -
        Number(a.caloriesBurned ?? 0)
      );
    }

    if (sortBy === "rating") {
      return Number(b.rating ?? 0) - Number(a.rating ?? 0);
    }

    return 0;
  });

  // Top Stats
  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (acc: number, item: ILibrary) =>
      acc + Number(item.duration ?? 0),
    0
  );

  const totalCalories = plan.reduce(
    (acc: number, item: ILibrary) =>
      acc + Number(item.caloriesBurned ?? 0),
    0
  );

  const handleRemove = (id: ILibrary["id"]) => {
    if (activeTab === "plan") {
      setPlan(plan.filter((item) => item.id !== id));
    } else {
      setSave(save.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d0f] text-white px-4 md:px-12 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-extrabold tracking-wider uppercase">
          MY PLAN
        </h1>

        <p className="text-zinc-400 text-sm mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Top Stats Banner */}
        <div className="mt-6 bg-[#12151c] rounded-2xl p-6 border border-zinc-800/80 grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center">
            <span className="text-zinc-400 text-xs font-medium">
              Exercises
            </span>

            <span className="text-3xl font-black text-[#ccff00] mt-1">
              {totalExercises}
            </span>
          </div>

          <div className="flex flex-col justify-center border-l border-zinc-800/80 pl-6 md:pl-10">
            <span className="text-zinc-400 text-xs font-medium">
              Minutes
            </span>

            <span className="text-3xl font-black text-white mt-1">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col justify-center border-l border-zinc-800/80 pl-6 md:pl-10">
            <span className="text-zinc-400 text-xs font-medium">
              Calories
            </span>

            <span className="text-3xl font-black text-white mt-1">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Tabs & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 gap-4">
          {/* Tabs */}
          <div className="bg-[#12151c] p-1 rounded-xl border border-zinc-800/80 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === "plan"
                  ? "bg-[#1d222e] text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#1d222e] text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span>Sort By</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortOption)
              }
              className="bg-[#12151c] border border-zinc-800 text-zinc-200 rounded-lg px-3 py-2 outline-none focus:border-zinc-700 cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Exercise List */}
        <div className="mt-6 space-y-3">
          {currentList.length > 0 ? (
            currentList.map((item: ILibrary) => (
              <div
                key={item.id}
                className="bg-[#12151c] border border-zinc-800/80 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-zinc-700/80 transition"
              >
                {/* Left Side */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-extrabold uppercase text-sm sm:text-base tracking-wide text-white">
                      {item.name}
                    </h3>

                    <p className="text-zinc-400 text-xs mt-0.5">
                      {item.equipment}
                    </p>

                    <div className="flex items-center gap-3 mt-2 text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1">
                        ⏱️ {item.duration} min
                      </span>

                      <span className="flex items-center gap-1">
                        🔥 {item.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1 text-zinc-300">
                        ⭐ {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-800/60">
                  <Link
                    href={`/details/${item.id}`}
                    className="px-4 py-2 rounded-full bg-[#161a23] border border-zinc-700/60 hover:bg-zinc-800 text-zinc-200 text-xs font-medium transition"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      className="px-4 py-2 rounded-full bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold transition flex items-center gap-1.5"
                    >
                      ✓ Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="p-2 text-zinc-500 hover:text-zinc-300 transition text-sm ml-1"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center py-20 px-4 bg-[#12151c]/50 border border-dashed border-zinc-800/80 rounded-2xl text-center">
              <h2 className="text-xl font-extrabold tracking-wider uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="text-zinc-500 text-xs mt-1 max-w-sm">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs py-2.5 px-6 rounded-full transition shadow-lg shadow-[#ccff00]/10"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;


