import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <div className="mt-2">
            <a
                href="https://github.com/yourusername"
                className="mx-2 hover:text-blue-300"
            >
                GitHub
            </a>
            <a
                href="https://linkedin.com/in/yourusername"
                className="mx-2 hover:text-blue-300"
            >
                LinkedIn
            </a>
            <a
                href="https://twitter.com/yourusername"
                className="mx-2 hover:text-blue-300"
            >
                Twitter
            </a>
            </div>
        </div>
        </footer>
    );
    };

export default Footer;
