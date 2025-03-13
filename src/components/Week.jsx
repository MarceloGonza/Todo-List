import React from "react";

const Week = () => {
  return (
    <section className="p-4">
      <div className="border border-black rounded bg-gray-900 p-2 text-left mb-2 flex justify-between gap-2">
        <div className="bg-gray-700 p-1 rounded min-w-[78px] text-center h-fit">
          <span>Domingo</span>
          <div className="flex justify-center items-center">
            <span className="text-4xl">30</span>
            <span
              style={{ writingMode: "vertical-lr" }}
              className="text-xs font-medium"
            >
              JUL
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 justify-end">
          <span className="border border-black px-2 rounded bg-gray-700 inline-block h-fit">
            task one
          </span>
          <span className="border border-black px-2 rounded bg-gray-700 inline-block h-fit">
            task two
          </span>
          <span className="border border-black px-2 rounded bg-gray-700 inline-block h-fit">
            task three
          </span>
        </div>
      </div>
    </section>
  );
};

export default Week;
