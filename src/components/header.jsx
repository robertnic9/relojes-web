'use client';
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black z-20 sticky top-0 left-0 w-full">
      <nav className="relative">
        <ul className="content-space text-white md:flex text-lg items-center">
          {/* Desktop Links - Left Side */}
          <li className="m-10 my-auto hidden md:block">
            <a href="" className="hover:text-gray-300 transition-colors">
              Relojes
            </a>
          </li>
          <li className="m-10 my-auto hidden md:block">
            <a href="" className="hover:text-gray-300 transition-colors">
              Nuestra historia
            </a>
          </li>

          {/* Logo - Center */}
          <li className="flex-1">
            <a href="/">
              <img
                src="/media/marcalogo.png"
                className="h-[100px] md:mx-auto"
                alt="Logo"
              />
            </a>
          </li>

          {/* Mobile Menu Button */}
          <li className="md:hidden absolute right-4 top-8">
            <button
              onClick={toggleMenu}
              className="text-3xl hover:text-gray-300 transition-colors"
            >
              &#9776;
            </button>
          </li>

          {/* Desktop Links - Right Side */}
          <li className="m-10 my-auto hidden md:block">
            <a href="" className="hover:text-gray-300 transition-colors">
              Contáctanos
            </a>
          </li>
          <li className="m-10 my-auto hidden md:block">
            <a href="" className="hover:text-gray-300 transition-colors">
              Boutiques
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black">
            <ul className="text-white py-4">
              <li className="py-3 px-6">
                <a href="" className="block">
                  Relojes
                </a>
              </li>
              <li className="py-3 px-6">
                <a href="" className="block">
                  Nuestra historia
                </a>
              </li>
              <li className="py-3 px-6">
                <a href="" className="block">
                  Contáctanos
                </a>
              </li>
              <li className="py-3 px-6">
                <a href="" className="block">
                  Boutiques
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
