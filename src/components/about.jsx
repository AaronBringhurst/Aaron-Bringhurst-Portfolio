import React from "react";
import AnimatedIntro from "./animatedIntro";
import selfImage from "../assets/images/self1.png";

const About = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="mx-24 flex flex-col md:flex-row items-center md:items-start gap-24">
        <div className="flex flex-col items-center">
          <div className="image-container rounded-full overflow-hidden">
            <img
              src={selfImage}
              alt="Self portrait"
              className="w-80 h-80 object-cover rounded-full shadow-lg mb-4"
            />
            <div className=""></div>
          </div>
          <AnimatedIntro />
        </div>
        <div className="mt-8 md:mt-0 flex-1 text-left md:w-1/2 lg:w-3/5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 mt-10 text-gray-300">
            About Me
          </h2>
          <div className="space-y-4 text-base md:text-lg text-gray-300">
            <p>
              With a dynamic 16-year tenure at{" "}
              <a
                href="https://en.wikipedia.org/wiki/Costco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Costco
              </a>
              , a Fortune 100 company, I honed my skills in leadership,
              operational efficiency, and strategic problem-solving. This
              experience laid a robust foundation for my transition into web
              development, where I apply the same dedication to excellence and
              innovative thinking.
            </p>
            <p>
              As a full-stack developer, I leverage my background in operational
              leadership and team development to create efficient, user-centric
              web applications. My proficiency spans React, JavaScript, and
              modern web technologies, allowing me to build responsive and
              intuitive interfaces backed by robust server-side logic.
            </p>
            <p>
              My journey in web development began with an intense bootcamp,
              followed by personal projects that showcased my ability to rapidly
              learn and apply new technologies. I approach coding challenges
              with the same work-ethic that placed me in the top 1% of productivity
              in my previous careers, ensuring clean, efficient, and
              well-documented code.
            </p>
            <p>
              Beyond coding, I'm an aviation enthusiast and the creator of{" "}
              <em>Vertical Mile Rally</em>, reflecting my passion for mechanical
              innovation and unique challenges. These interests fuel my approach
              to web development, where I constantly seek innovative solutions
              and push the boundaries of what's possible.
            </p>
            <p>
              As I embark on this new chapter in my career, I bring a unique
              blend of leadership experience, technical skills, and a relentless
              pursuit of excellence. I'm excited to contribute to projects that
              require both technical proficiency and strategic thinking, aiming
              to drive success and inspire teams in the dynamic world of web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
