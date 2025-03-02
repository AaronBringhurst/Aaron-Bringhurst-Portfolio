import React from "react";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-300 text-2xl font-semibold font-poppins tracking-wide shadow-text">
          Aaron Bringhurst
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
