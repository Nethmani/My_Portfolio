"use client"

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Function to check if a link is active
  const isActive = (path) => {
    return pathname === path
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400 transition-colors";
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-100 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo or Brand */}
        <div className="flex-shrink-0">
          
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" prefetch={true} className={`text-md ${isActive('/')}`}>Home</Link>
          <Link href="/about" prefetch={true} className={`text-md ${isActive('/about')}`}>About</Link>
          <Link href="/education" prefetch={true} className={`text-md ${isActive('/education')}`}>Education</Link>
          <Link href="/projects" prefetch={true} className={`text-md ${isActive('/projects')}`}>Projects</Link>
          <Link href="/contact" prefetch={true} className={`text-md ${isActive('/contact')}`}>Contact</Link>
          <a href="https://github.com/Vidumini16" target="_blank" rel="noopener noreferrer" className="text-md text-gray-300 hover:text-white transition ml-4">
            GitHub Profile
          </a>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 pt-2 space-y-2">
          <Link href="/" className="block py-2 px-2 rounded hover:bg-gray-800 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2 px-2 rounded hover:bg-gray-800 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" className="block py-2 px-2 rounded hover:bg-gray-800 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/education" className="block py-2 px-2 rounded hover:bg-gray-800 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Education</Link>
          <Link href="/contact" className="block py-2 px-2 rounded hover:bg-gray-800 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}