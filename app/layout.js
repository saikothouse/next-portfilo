import './globals.css';
import { useState } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my projects and skills',
};

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
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          <nav className={`mt-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <a href="/" className="block md:inline-block mr-4 hover:text-gray-400">Home</a>
            <a href="/projects" className="block md:inline-block mr-4 hover:text-gray-400">Projects</a>
            <a href="/about" className="block md:inline-block mr-4 hover:text-gray-400">About Me</a>
            <a href="/contact" className="block md:inline-block hover:text-gray-400">Contact</a>
          </nav>
        </header>
        
        {/* Hero Section */}
        <section className="bg-gray-200 p-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome to My Portfolio</h2>
          <p className="text-lg">I'm [Your Name], a passionate Next.js Developer.</p>
          <div className="mt-4">
            <a href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View My Projects</a>
          </div>
        </section>

        <main className="p-4">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} My Portfolio</p>
          <div className="mt-2">
            <a href="https://github.com/yourusername" className="mr-4 hover:text-gray-400">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
