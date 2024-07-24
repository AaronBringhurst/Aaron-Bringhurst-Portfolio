import React, { useEffect, useState } from "react";
import { CodeBracketIcon, ServerIcon } from "@heroicons/react/24/solid";

const IntroHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-white text-6xl font-bold flex flex-col items-center">
        <span className="mb-2">Hello,</span>
        <span className="mb-4">
          I'm{" "}
          <span className="text-orange-500 font-extrabold tracking-wider">
            Aaron Bringhurst
          </span>
        </span>
      </h1>
      <div
        className={`transform transition-all duration-1000 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-white text-4xl mt-8 flex items-center justify-center">
          A full stack developer
          <span className="ml-4 flex">
            <CodeBracketIcon className="h-8 w-8 text-orange-500" />
            <ServerIcon className="h-8 w-8 text-orange-500 ml-2" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default IntroHeader;
