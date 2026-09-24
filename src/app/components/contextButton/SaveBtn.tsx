
"use client";

import { FitContext } from "@/context/FitContext";
import { ILibrary } from "@/types/libraryType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface SaveBtnProps {
  libraryDetails: ILibrary;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ libraryDetails }) => {
  const fitContext = useContext(FitContext);

  if (!fitContext) {
    throw new Error("SaveBtn must be used within a FitContextProvider");
  }

  const { save, setSave } = fitContext;

  const handleSave = () => {
    // Check if the exercise is already saved
    const alreadySaved = save.some(
      (item) => item.id === libraryDetails.id
    );

    if (alreadySaved) {
      toast.error("Already saved for later!");
      return;
    }

    // Save the exercise
    setSave([...save, libraryDetails]);

    toast.success(
      `You have saved ${libraryDetails.name} for later!`
    );
  };

  return (
    <button
      onClick={handleSave}
      className="w-full flex-1 bg-[#14171d] text-zinc-300 font-medium py-2.5 px-4 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition flex items-center justify-center gap-2 text-xs"
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>

      Save for later
    </button>
  );
};

export default SaveBtn;

