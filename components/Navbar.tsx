import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border border-200 rounded-lg flex items-center justify-between py-5 relative z-30" style={{ backgroundColor: '#ffffff' }}>
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" width={50} height={29} className="mr-4" />
        <div
          style={{
            height: '32px', // Adjust as needed
            width: '2px',   // Thin line
            backgroundColor: '#E1E2E2',
            marginRight: '16px', // Space between separator and menu
          }}
        />
      </div>

      <ul className="hidden lg:flex gap-7">
        <li>
          <Link href="#">
            Why Us
          </Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <li>
          <Link href="#">FAQ</Link>
        </li>
      </ul>

      <div className="flex gap-4 ml-auto" style={{ color: '#1D4ED8' }}>
        <button className="underline bg-white text-black px-4 py-2 rounded">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 btn-round">Register</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="block lg:hidden p-2 rounded" aria-label="Open menu">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
