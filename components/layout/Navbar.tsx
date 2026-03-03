// components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteData } from "@/data/site"; // Import the data file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <Link href="/" className="flex items-center h-full">
              <Image 
                src="/logo.png" 
                alt={`${siteData.company.name} Logo`} 
                width={200} 
                height={200} 
                className="h-12 md:h-16 w-auto object-contain" 
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {siteData.navigation.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-gray-600 hover:text-bricket-gold font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link 
              href="#contact"
              className="px-7 py-3 bg-bricket-dark text-white font-semibold rounded-md hover:bg-bricket-gold hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-bricket-dark focus:outline-none p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {siteData.navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-bricket-gold hover:bg-bricket-light"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact"
              className="block mt-4 px-4 py-3 bg-bricket-dark text-white text-center font-semibold rounded-md hover:bg-bricket-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}