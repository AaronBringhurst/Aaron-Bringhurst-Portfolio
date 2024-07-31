import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import signature from "../../src/assets/images/sig11.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto flex flex-col items-center mb-6">
        <img src={signature} alt="Signature" className="h-14 my-4" />
        <p className="mb-2">
          &copy; 2024 Aaron Bringhurst. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            className="text-white hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-white hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            className="text-white hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
