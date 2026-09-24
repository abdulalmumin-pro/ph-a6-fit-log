import React from "react";
import { ILibrary } from "@/types/libraryType";
import LibraryCard from "./LibraryCard";


const getLibraryData = async () => {
  try {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`
    // );
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
  console.log(libraryData, "library");

  return (
    <div className="mx-8 mt-12 mb-8">
      <h2 className="text-3xl font-bold">THE LIBRARY</h2>
      <p className="text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {
          libraryData.map((library:ILibrary, ind:number) => {
            return <LibraryCard key={ind} library={library}></LibraryCard>
          })
        }
      </div>
    </div>
  );
};

export default Library;