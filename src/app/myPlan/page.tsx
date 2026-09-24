import React from "react";

const MyPlan = () => {
  return (
    <div className="mx-8 my-8">
      <h2 className="text-3xl font-bold">MY PLAN</h2>
      <p className="text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 bg-base-100 rounded-sm py-6 px-4 border border-gray-700 grid grid-cols-3">
        <div>
          <p>Exercises</p>
        </div>
        <div className="border-l-2 pl-8 border-gray-700">
          <p>Minutes</p>
        </div>
        <div className="border-l-2 pl-8 border-gray-700">
          <p>Calories</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-8 bg-base-100 rounded-sm py-16 border border-gray-700">
         <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>
         <p className="text-gray-400">Browse the library and add a lift to get today moving.</p>
         <button className="text-xs text-black rounded-2xl bg-[#C2F800] py-2 px-5 mt-4">Go to workouts</button>
      </div>
    </div>
  );
};

export default MyPlan;
