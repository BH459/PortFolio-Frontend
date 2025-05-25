import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavLink = ({ isActive }) => ({
        color: isActive ? "#2563EB" : "#64748B",
        borderBottom: isActive ? "2px solid #2563EB" : "none",
        paddingBottom: "2px",
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gradient-to-r from-white via-blue-50 to-white text-slate-800 shadow-2xl border-b border-blue-200/50">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
                {/* Logo */}
                <div>
                    <p className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl h-16 w-16 flex items-center justify-center font-black rounded-2xl shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer">
                        B
                    </p>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex w-[50rem] h-16 justify-between items-center bg-white/80 backdrop-blur-md px-8 py-3 rounded-2xl shadow-xl border border-blue-200/50">
                    <NavLink to="/" style={handleNavLink} className="text-lg font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 relative">Home</NavLink>
                    <NavLink to="/skills" style={handleNavLink} className="text-lg font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 relative">Skills</NavLink>
                    <NavLink to="/project" style={handleNavLink} className="text-lg font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 relative">Project</NavLink>
                    <NavLink to="/contact" style={handleNavLink} className="text-lg font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 relative">Contact</NavLink>
                </nav>

                {/* Hamburger Menu Button */}
                <button
                    className="md:hidden focus:outline-none p-3 rounded-xl bg-white/80 backdrop-blur-md border border-blue-200/50 transition-all duration-300 hover:bg-blue-50 hover:scale-110 active:scale-95"
                    onClick={toggleMenu}
                >
                    {isOpen ? <IoCloseCircle size={28} /> : <LuSquareMenu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col items-center bg-gradient-to-b from-white/95 to-blue-50/95 backdrop-blur-md px-6 py-6 space-y-2 border-t border-blue-200/50">
                    <NavLink to="/" style={handleNavLink} className="w-full text-center text-xl font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 transform" onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/skills" style={handleNavLink} className="w-full text-center text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 transform" onClick={toggleMenu}>Skills</NavLink>
                    <NavLink to="/project" style={handleNavLink} className="w-full text-center text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 transform" onClick={toggleMenu}>Project</NavLink>
                    <NavLink to="/contact" style={handleNavLink} className="w-full text-center text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 transform" onClick={toggleMenu}>Contact</NavLink>
                </nav>
            </div>
        </header>
    );
};