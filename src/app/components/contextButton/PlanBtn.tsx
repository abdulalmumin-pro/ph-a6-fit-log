
"use client";

import { FitContext } from "@/context/FitContext";
import { ILibrary } from "@/types/libraryType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface PlanBtnProps {
  libraryDetails: ILibrary;
}

const PlanBtn: React.FC<PlanBtnProps> = ({ libraryDetails }) => {
  const fitContext = useContext(FitContext);

  if (!fitContext) {
    throw new Error("PlanBtn must be used within a FitContextProvider");
  }

  const { plan, setPlan } = fitContext;

  const handlePlan = () => {
    // Check if the exercise is already added
    const alreadyAdded = plan.some(
      (item) => item.id === libraryDetails.id
    );

    if (alreadyAdded) {
      toast.error("Already added to today's plan!");
      return;
    }

    // Add exercise to today's plan
    setPlan([...plan, libraryDetails]);

    toast.success(`Added ${libraryDetails.name} to today's plan!`);
  };

  return (
    <button
      onClick={handlePlan}
      className="w-full flex-1 bg-[#ccff00] text-black font-bold py-2.5 px-4 rounded-lg hover:bg-[#b8e600] transition flex items-center justify-center gap-2 text-xs"
    >
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
      </svg>

      Add to today's plan
    </button>
  );
};

export default PlanBtn;

