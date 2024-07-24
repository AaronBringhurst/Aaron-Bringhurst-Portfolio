import React from "react";

const Resume = () => {
    return (
        <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Resume</h2>
        <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            </ul>
        </section>
        <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Experience</h3>
            <div className="mb-4">
            <h4 className="text-xl font-medium">Web Developer - Company Name</h4>
            <p className="text-gray-600">January 2020 - Present</p>
            <p>Brief description of your role and responsibilities.</p>
            </div>
        </section>
        <section>
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <div>
            <h4 className="text-xl font-medium">
                Bachelor's in Computer Science
            </h4>
            <p className="text-gray-600">University Name, Graduated 2019</p>
            </div>
        </section>
        </div>
    );
    };

export default Resume;
