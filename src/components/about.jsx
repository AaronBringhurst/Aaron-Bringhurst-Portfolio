import React from "react";
import AnimatedIntro from "./animatedIntro";
import selfImage from "../assets/images/self1.png";

const About = () => {
    return (
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-white text-6xl font-bold">
              <div className="App">
                <div className="mb-6 relative">
                  <img
                    src={selfImage}
                    alt="Self portrait"
                    className="w-full max-w-md mx-auto rounded-lg relative z-10 image-blend"
                  />
                </div>
                <AnimatedIntro />
              </div>
            </h1>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
            <p className="mb-4 text-lg">
              Hello! I'm [Your Name], a passionate web developer based in [Your
              Location]. With a keen eye for design and a love for clean,
              efficient code, I specialize in creating responsive and
              user-friendly web applications using React, JavaScript, and modern
              web technologies.
            </p>
            <p className="mb-4 text-lg">
              My journey in web development began [brief background, e.g.,
              "during my computer science studies" or "when I built my first
              website for a local business"]. Since then, I've had the
              opportunity to work on diverse projects, from [example of project
              type] to [another example].
            </p>
            <p className="mb-4 text-lg">
              When I'm not coding, you can find me [list 2-3 hobbies or
              interests, e.g., "exploring hiking trails", "experimenting with
              new recipes in the kitchen", or "contributing to open-source
              projects"].
            </p>
            <p className="text-lg">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Feel free to explore my portfolio and get in
              touch if you'd like to work together!
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;
