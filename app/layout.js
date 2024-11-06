"use client"; // Marking this component as a Client Component

import './globals.css';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing GitHub and LinkedIn icons
import { HiMenu, HiX } from 'react-icons/hi'; // Importing Menu and Close icons

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-gray-800 text-white p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <button className="md:hidden" onClick={toggleMenu}>
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
          <nav className={`mt-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <a href="/" className="block md:inline-block mr-4 hover:text-gray-400">Home</a>
            <a href="/projects" className="block md:inline-block mr-4 hover:text-gray-400">Projects</a>
            <a href="/about" className="block md:inline-block mr-4 hover:text-gray-400">About Me</a>
            <a href="/contact" className="block md:inline-block hover:text-gray-400">Contact</a>
          </nav>
        </header>
        
        <main className="p-4">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} My Portfolio</p>
          <div className="mt-2">
            <a href="https://github.com/yourusername" className="mr-4 hover:text-gray-400">
              <FaGithub className="inline-block w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">
              <FaLinkedin className="inline-block w-5 h-5" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
