import React from "react";

export const Header = () => {
  return (
    <header className="border-b border-gray-700 mb-4">
      <nav className="max-w-[60%] m-auto">
        <ul className="flex justify-around text-gray-500 [&>li]:py-2 [&>li]:w-full [&>li]:cursor-pointer">
          <li className="current">Day</li>
          <li>Week</li>
          <li>Month</li>
          <li>Year</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
