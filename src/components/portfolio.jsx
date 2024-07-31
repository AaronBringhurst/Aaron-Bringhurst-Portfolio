import React from "react";
import dystopitTrackImage from "../assets/images/projects/Dystopi-Track.png";
import codeNestImage from "../assets/images/projects/codeNest.png";
import webPackImage from "../assets/images/projects/WebPack.png";
import blogImage from "../assets/images/projects/blog.png";
import gameOfLoansImage from "../assets/images/projects/GameOfLoans.png";
import tryToSellImage from "../assets/images/projects/trytosell.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Dystopi-Track",
      description:
        "DystopiTrack Systems is a command-line interface (CLI) application designed to manage employee data within corporate environment. The application offers a rich set of features allowing administrators to handle various aspects of employee, department, and role management efficiently, directly from the terminal.",
      image: dystopitTrackImage,
      github: "https://github.com/AaronBringhurst/Dystopi-Track-software",
    },
    {
      id: 2,
      title: "Code Nest",
      description:
        "Code Nest is a dynamic web application designed to foster a community of developers and tech enthusiasts. It provides a platform for users to share, discuss, and collaborate on crypto-related topics. With features like user authentication, post creation, and commenting, Code Nest aims to be a hub for knowledge sharing in the tech world.",
      image: codeNestImage,
      github: "https://github.com/AaronBringhurst/Code-Nest",
    },
    {
      id: 3,
      title: "WebPack-Text-O-Tron",
      description:
        "WebPack-Text-O-Tron is a progressive web application that functions as a text editor. It allows users to create and edit text content with JavaScript syntax highlighting. The app works both online and offline, providing a seamless experience for developers who need a reliable text editor.",
      image: webPackImage,
      github: "https://github.com/AaronBringhurst/webPack-text-o-tron",
    },
    {
      id: 4,
      title: "Aarons Blog",
      description:
        "A place for sharing and reading tales from various trails around the globe. This project encompasses a simple, responsive blog site designed for users to share their travel stories and experiences.",
      image: blogImage,
      github: "https://github.com/AaronBringhurst/a-rons-blog",
    },
    {
      id: 5,
      title: "Game of Loans",
      description:
        "A dynamic budgeting application designed to help you manage your finances with ease and insight. Tailored for both financial novices and savvy savers, BudgetMaster offers an intuitive and responsive interface to make budgeting a straightforward and engaging process.",
      image: gameOfLoansImage,
      github: "https://github.com/JToton/GameOfLoans",
    },
    {
      id: 6,
      title: "Trying to Sell",
      description:
        "The Trying to Sell project is a comprehensive website designed to facilitate the online selling of various products. This server-side application manages product inventories, categories, and tags through a RESTful API. It demonstrates the integration of Express.js with Sequelize ORM for database management using PostgreSQL.",
      image: tryToSellImage,
      github: "https://github.com/Ownerman123/Trying-to-sell",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-gray-300 font-bold mb-8 text-center">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl text-gray-300 font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
