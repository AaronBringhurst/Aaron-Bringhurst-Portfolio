import React from "react";

const Portfolio = () => {
    const projects = [
      {
        id: 1,
        title: "Project 1",
        description: "A brief description of project 1",
      },
      {
        id: 2,
        title: "Project 2",
        description: "A brief description of project 2",
      },
      {
        id: 3,
        title: "Project 3",
        description: "A brief description of project 3",
      },
      {
        id: 4,
        title: "Project 4",
        description: "A brief description of project 3",
      },
      {
        id: 5,
        title: "Project 5",
        description: "A brief description of project 3",
      },
      {
        id: 6,
        title: "Project 6",
        description: "A brief description of project 3",
      },
    ];

    return (
      <div>
        <h2 className="text-3xl text-gray-300 font-bold mb-4">My Portfolio</h2>
        <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Portfolio;
