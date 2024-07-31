import React, { useState, useEffect } from "react";
import frame1 from "../assets/images/1.svg";
import frame2 from "../assets/images/2.svg";
import frame3 from "../assets/images/3.svg";
import frame4 from "../assets/images/4.svg";
import frame5 from "../assets/images/5.svg";
import frame6 from "../assets/images/6.svg";
import frame7 from "../assets/images/7.svg";

const SvgAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

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
