import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark'); // Default to dark as requested

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <NavLink to="/" className="logo">
                    NH<span className="dot">.</span>
                </NavLink>

                <div className="nav-controls">
                    {/* Mobile Menu Icon */}
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </div>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
                            Work
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => setIsOpen(false)}>
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item cta">
                        <NavLink to="/resume" className="btn-small" onClick={() => setIsOpen(false)}>Resume</NavLink>
                    </li>
                    <li className="nav-item theme-toggle-li">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                            {theme === 'dark' ? <FiSun /> : <FiMoon />}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
