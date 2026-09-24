import React from "react";
import { ILibrary } from "@/types/libraryType";
import LibraryCard from "./LibraryCard";

const getLibraryData = async () => {
  try {
    const response = await fetch("http://localhost:3000/data.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching library data:", error);
    return [];
  }
};

const Library = async () => {
  const libraryData = await getLibraryData();

  return (
    <section className="mx-auto my-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 w-full max-w-[1920px]">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold sm:text-3xl">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {libraryData.map((library: ILibrary, ind: number) => (
          <LibraryCard
            key={library.id ?? ind}
            library={library}
          />
        ))}
      </div>
    </section>
  );
};

export default Library;