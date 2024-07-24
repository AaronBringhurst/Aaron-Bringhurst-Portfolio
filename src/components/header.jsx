import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "About Me" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/contact", label: "Contact" },
        { path: "/resume", label: "Resume" },
    ];

    return (
        <header className="bg-gray-800 text-white p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Your Name</h1>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`hover:text-blue-300 transition-colors duration-200 ${
                                        location.pathname === item.path
                                        ? "text-blue-500 font-semibold"
                                        : "text-gray-300"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;