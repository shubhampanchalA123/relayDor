"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#0D5C91]">
          relayDor
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/vision" className="hover:text-blue-600">Vision</Link>
          <Link href="/community" className="hover:text-blue-600">Community</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/join" className="bg-[#0D5C91] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
            Join as Doctor
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-6 py-6 flex flex-col gap-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/vision" onClick={() => setOpen(false)}>Vision</Link>
            <Link href="/community" onClick={() => setOpen(false)}>Community</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/join" className="bg-[#0D5C91] text-white px-4 py-2 rounded-md hover:bg-opacity-90 text-center">
              Join as Doctor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
