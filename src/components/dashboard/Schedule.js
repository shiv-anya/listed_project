import React from "react";

const Schedule = () => {
  return (
    <div className="bg-white rounded-2xl w-auto ml-10 mt-5 py-5 px-10">
      <div className="flex justify-between">
        <h2>Today's Schedule</h2>
        <p className="text-xs">See All {">"}</p>
      </div>
      <div>
        <div className="border-l-4 border-l-green-300 mb-2">
          <p className="text-sm ml-4">Meeting with suppliers from Kuta Bali</p>
          <p className="text-xs ml-4">14:00-15:00</p>
          <p className="text-xs ml-4">at Sunset Road, Kuta Bali</p>
        </div>
        <div className="border-l-4 border-l-purple-300">
          <p className="text-sm ml-4">Check operation at Giga Factory</p>
          <p className="text-xs ml-4">18:00-20:00</p>
          <p className="text-xs ml-4">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
