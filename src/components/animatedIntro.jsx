import React, { useState, useEffect } from "react";
import SvgAnimation from "./SvgAnimation";

const AnimatedIntro = () => {
  const [showName, setShowName] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [startSvgAnimation, setStartSvgAnimation] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const resetAnimation = () => {
      setShowName(false);
      setShowSvg(false);
      setShowTitle(false);
      setStartSvgAnimation(false);
      setKey((prevKey) => prevKey + 1);

      setTimeout(() => {
        setShowName(true);
        setStartSvgAnimation(true);
      }, 100);
      setTimeout(() => setShowSvg(true), 1100);
      setTimeout(() => setShowTitle(true), 2100);
    };

    resetAnimation();

    document.addEventListener("visibilitychange", resetAnimation);

    return () => {
      document.removeEventListener("visibilitychange", resetAnimation);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-left text-white">
      <div
        className={`transition-opacity duration-1000 ${
          showName ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hello, I'm
          <br />
          <span className="text-orange-500 font extrabold tracking-wider name-shadow-teal">
            Aaron Bringhurst
          </span>
        </h1>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showSvg ? "opacity-100" : "opacity-0"
        }`}
      >
        <SvgAnimation key={key} startAnimation={startSvgAnimation} />
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          showTitle ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl mt-4">A full stack developer</h2>
      </div>
    </div>
  );
};

export default AnimatedIntro;
