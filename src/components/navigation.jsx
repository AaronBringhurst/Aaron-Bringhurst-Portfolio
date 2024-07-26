import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "About Me" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/contact", label: "Contact" },
        { path: "/resume", label: "Resume" },
    ];

    return (
        <nav>
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
    );
};

export default Navigation;