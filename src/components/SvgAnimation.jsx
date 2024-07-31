import React, { useState, useEffect } from "react";

const SvgAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    "/src/assets/images/1.svg",
    "/src/assets/images/2.svg",
    "/src/assets/images/3.svg",
    "/src/assets/images/4.svg",
    "/src/assets/images/5.svg",
    "/src/assets/images/6.svg",
    "/src/assets/images/7.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        if (prevFrame < frames.length - 1) {
          return prevFrame + 1;
        } else {
          clearInterval(interval);
          return prevFrame;
        }
      });
    }, 269);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-69 h-20">
      <img
        src={frames[currentFrame]}
        alt="SVG Animation"
        className="w-full h-full"
      />
    </div>
  );
};

export default SvgAnimation;
