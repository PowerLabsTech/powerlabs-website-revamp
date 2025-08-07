'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from './routes';
import { useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  // State to manage which dropdown is open. We'll store the name of the path.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // State for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (pathName: string) => {
    const path = paths.find((p) => p.name === pathName);
    if (path && path.dropdown) {
      setOpenDropdown(pathName);
    } else {
      setOpenDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    // The onMouseLeave on the main container ensures the dropdown closes
    // when the user moves their mouse away from the entire navbar area.
    <div
      className="relative hover:bg-[#0F1114] text-white"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/PowerLogo.png"
            width={115}
            height={26}
            alt="Powerlabs_logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex grow max-w-2xl">
          <ul className="flex justify-between w-full items-center">
            {paths.map((path) => (
              <li
                key={path.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(path.name)}
              >
                <Link
                  href={path.path}
                  className={`p-2 hover:bg-white/10 hover:rounded-md transition-colors ${
                    (pathname.startsWith(path.path) && path.path !== '/') ||
                    pathname === path.path
                      ? 'border-b-2 border-b-blue-500'
                      : ''
                  }`}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded text-sm font-semibold transition-colors">
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
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
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16m-7 6h7'
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* --- DROPDOWN MENU --- */}
      {openDropdown && (
        <div className="hidden lg:block absolute top-full left-0 w-full bg-[#0F1114]  shadow-lg z-20">
          <div className="max-w-full mx-auto px-20 py-12">
            <div className="grid grid-row gap-8">
              {/* Column 1: Title */}
              <div className="col-span-1">
                <h3 className="text-[40px] font-medium  mb-4 metallic-text">
                  {openDropdown}
                </h3>
              </div>
              {/* Column 2: Links */}
              <div className="col-span-1">
                <ul className="space-y-4">
                  {paths
                    .find((p) => p.name === openDropdown)
                    ?.dropdown?.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className="text-gray-500 hover:text-white text-2xl"
                          onClick={() => setOpenDropdown(null)} // Close dropdown on click
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1114] px-6 pb-6">
          <ul className="flex flex-col space-y-4">
            {paths.map((path) => (
              <li key={path.name}>
                <Link
                  href={path.path}
                  className={`block p-2 text-center rounded-md ${
                    pathname === path.path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {path.name}
                </Link>
                {/* Optional: Show dropdown items in mobile menu */}
                {path.dropdown && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-700">
                    {path.dropdown.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className="text-gray-400 hover:text-white block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button className="w-full mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded text-sm font-semibold transition-colors">
                Book a Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
