import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="Header_1" className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div id="Header_2" className="text-white font-bold text-2xl">Portfolio</div>
          
          {/* Hamburger Menu Button */}
          <button
            id="Header_3"
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div id="Header_4" className="hidden lg:flex space-x-8">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
              'text-white hover:text-yellow-300 transition-colors duration-300'
            }>Home</NavLink>
            <NavLink to="/portfoliopage" className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
              'text-white hover:text-yellow-300 transition-colors duration-300'
            }>Portfolio</NavLink>
            <NavLink to="/aboutpage" className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
              'text-white hover:text-yellow-300 transition-colors duration-300'
            }>About</NavLink>
            <NavLink to="/contactpage" className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
              'text-white hover:text-yellow-300 transition-colors duration-300'
            }>Contact</NavLink>
            <NavLink to="/adminpage" className={({ isActive }) =>
              isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
              'text-white hover:text-yellow-300 transition-colors duration-300'
            }>Admin</NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="Header_5" className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 mt-4">
            <NavLink to="/" 
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
                'text-white hover:text-yellow-300 transition-colors duration-300'
              }>Home</NavLink>
            <NavLink to="/portfoliopage" 
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
                'text-white hover:text-yellow-300 transition-colors duration-300'
              }>Portfolio</NavLink>
            <NavLink to="/aboutpage" 
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
                'text-white hover:text-yellow-300 transition-colors duration-300'
              }>About</NavLink>
            <NavLink to="/contactpage" 
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
                'text-white hover:text-yellow-300 transition-colors duration-300'
              }>Contact</NavLink>
            <NavLink to="/adminpage" 
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-bold transition-colors duration-300' :
                'text-white hover:text-yellow-300 transition-colors duration-300'
              }>Admin</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;