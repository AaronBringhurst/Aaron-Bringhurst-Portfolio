import React from "react";

const Portfolio = () => {
    const projects = [
      {
        id: 1,
        title: "Dystopi-Track",
        description:
          "DystopiTrack Systems is a command-line interface (CLI) application designed to manage employee data within corporate environment. The application offers a rich set of features allowing administrators to handle various aspects of employee, department, and role management efficiently, directly from the terminal.",
      },
      {
        id: 2,
        title: "Code Nest",
        description:
          "Code Nest is a dynamic web application designed to foster a community of developers and tech enthusiasts. It provides a platform for users to share, discuss, and collaborate on crypto-related topics. With features like user authentication, post creation, and commenting, Code Nest aims to be a hub for knowledge sharing in the tech world.",
      },
      {
        id: 3,
        title: "WebPack-Text-O-Tron",
        description:
          "WebPack-Text-O-Tron is a progressive web application that functions as a text editor. It allows users to create and edit text content with JavaScript syntax highlighting. The app works both online and offline, providing a seamless experience for developers who need a reliable text editor.",
      },
      {
        id: 4,
        title: "Aarons Blog",
        description:
          "a place for sharing and reading tales from various trails around the globe. This project encompasses a simple, responsive blog site designed for users to share their travel stories and experiences.",
      },
      {
        id: 5,
        title: "Game of Loans",
        description:
          "A dynamic budgeting application designed to help you manage your finances with ease and insight. Tailored for both financial novices and savvy savers, BudgetMaster offers an intuitive and responsive interface to make budgeting a straightforward and engaging process.",
      },
      {
        id: 6,
        title: "Trying to Sell",
        description:
          "The Trying to Sell project is a comprehensive website designed to facilitate the online selling of various products. This server-side application manages product inventories, categories, and tags through a RESTful API. It demonstrates the integration of Express.js with Sequelize ORM for database management using PostgreSQL.",
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
