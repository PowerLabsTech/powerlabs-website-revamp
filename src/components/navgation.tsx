'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from '../app/routes';
import { useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track the hovered category within the dropdown (e.g., "Food & Beverage")
  const [activeCategory, setActiveCategory] = useState<string | null>(
    paths.find((p) => p.dropdown)?.dropdown?.[0]?.category || null
  );

  const handleMouseEnter = (pathName: string) => {
    const path = paths.find((p) => p.name === pathName);
    if (path && path.dropdown) {
      setOpenDropdown(pathName);
      // Set the default active category when dropdown opens
      setActiveCategory(path.dropdown[0]?.category || null);
    } else {
      setOpenDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const activeDropdownData = paths.find(
    (p) => p.name === openDropdown
  )?.dropdown;
  const activeCategoryData = activeDropdownData?.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <div
      className="relative hover:bg-[#0F1114] text-white z-50"
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

        {/* Mobile Menu Button */}
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
      {/* --- ANIMATED BACKDROP --- */}
      <div
        className={`
                absolute top-full inset-x-0 h-screen bg-black/30 backdrop-blur-sm
                transition-opacity duration-500 ease-out
                ${
                  openDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }
              `}
        onMouseEnter={handleMouseLeave}
      />
      {/* --- MEGA MENU DROPDOWN --- */}
      <div
        className={`
                hidden lg:block absolute top-full left-0 w-full bg-[#0F1114] shadow-lg z-40 
                transition-all duration-300 ease-out
                ${
                  openDropdown && activeDropdownData
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                }
              `}
      >
        <div className="max-w-7xl  px-20 py-12 grid grid-cols-12 gap-8">
          {/* Column 1: Main Categories */}
          <div className="col-span-3">
            <div className="mb-[51px]">
              <h2 className="metallic-text font-medium text-4xl">
                {openDropdown}
              </h2>
            </div>
            <ul className="space-y-2">
              {activeDropdownData?.map((cat) => (
                <li key={cat.category}>
                  <Link
                    onMouseEnter={() => setActiveCategory(cat.category)}
                    className={`w-full text-left p-2 rounded-md text-2xl font-medium ${
                      activeCategory === cat.category
                        ? 'text-white'
                        : 'text-gray-500 hover:text-white'
                    }`}
                    href={cat?.path ? cat.path : '#'}
                  >
                    {cat.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 & 3: Sub-links based on active category */}
          {activeCategoryData && (
            <>
              <div className="col-span-3 pt-[102px]">
                {activeCategoryData.subLinks &&
                activeCategoryData?.subLinks?.length > 0 ? (
                  <>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                      Discover
                    </h4>
                  </>
                ) : (
                  <></>
                )}
                <ul className="space-y-4">
                  {activeCategoryData.subLinks?.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-white hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  {/* {activeCategoryData.discover?.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.path}
                          className="flex items-center gap-3 text-white hover:underline"
                        >
                          {link.icon}
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))} */}
                </ul>
              </div>
              {/* <div className="col-span-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                    Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {activeCategoryData.capabilities?.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.path}
                          className="text-white hover:underline"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}
            </>
          )}
        </div>
      </div>
      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1114] px-6 pb-6">
          {/* Mobile menu implementation remains the same */}
        </div>
      )}
    </div>
  );
}
