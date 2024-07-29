import React from "react";
import resume from "../assets/docs/resume.pdf";
import Skillz from "./skillz";

const Resume = () => {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-200">My Skills & Resume</h2>
      
      <Skillz />

      <div className="my-8 text-center">
        <a 
          href={resume} 
          download="resume.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Download Full Resume (PDF)
        </a>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Resume Preview
        </h3>
        <iframe
          src={resume}
          title="Resume Preview"
          width="100%"
          height="1100px"
          className="border-none rounded"
        />
      </div>
    </section>
  );
};

export default Resume;