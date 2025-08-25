'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from '../app/routes';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from './ui';

export function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    paths.find((p) => p.dropdown)?.dropdown?.[0]?.category || null
  );
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );

  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (pathName: string) => {
    const path = paths.find((p) => p.name === pathName);
    if (path && path.dropdown) {
      setOpenDropdown(pathName);
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

  const isAmbassadorPath = pathname.startsWith('/community/ambassadors');

  const handleNavPathColor = (path: string) => {
    if (path === '/community' && isAmbassadorPath) {
      return 'border-b-2 border-b-amber-600';
    } else if (
      pathname === path ||
      (pathname.startsWith(path) && path !== '/')
    ) {
      return 'border-b-2 border-b-blue-500';
    }
    return '';
  };

  const toggleMobileSubMenu = (name: string) => {
    setOpenMobileSubMenu((prev) => (prev === name ? null : name));
  };

  return (
    <div
      className="relative hover:bg-[#0F1114] text-white z-50"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/PowerLogo.png"
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
                  onClick={(e) => {
                    if (path.dropdown && path.dropdown.length > 0) {
                      e.preventDefault();
                    }
                  }}
                  className={`p-2 hover:bg-white/10 hover:rounded-md transition-colors ${handleNavPathColor(
                    path.path
                  )}`}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            className={`py-2 px-4 ${
              isAmbassadorPath
                ? 'bg-amber-600 hover:bg-amber-700'
                : 'bg-blue-500 hover:bg-blue-600'
            }   rounded text-sm font-semibold transition-colors`}
          >
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
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden bg-[#0F1114] text-white absolute top-full left-0 w-full z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-4">
            <ul className="flex flex-col space-y-2">
              {paths.map((path) => (
                <li key={path.name}>
                  {path.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubMenu(path.name)}
                        className="w-full flex justify-between items-center py-2 text-lg"
                      >
                        <span>{path.name}</span>
                        <ChevronDownIcon
                          className={
                            openMobileSubMenu === path.name ? 'rotate-180' : ''
                          }
                        />
                      </button>
                      <div
                        className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                          openMobileSubMenu === path.name
                            ? 'max-h-96'
                            : 'max-h-0'
                        }`}
                      >
                        <ul className="pt-2 space-y-2">
                          {path.dropdown.map((category) => (
                            <li key={category.category}>
                              <Link
                                href={category.path ?? ''}
                                className="font-semibold text-gray-400 pt-2"
                              >
                                {category.category}
                              </Link>
                              <ul className="pl-2 pt-2 space-y-2">
                                {category?.subLinks?.map((subLink) => (
                                  <li key={subLink.name}>
                                    <Link
                                      href={subLink.path}
                                      className="block py-1 text-gray-300 hover:text-white"
                                    >
                                      {subLink.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link href={path.path} className="block py-2 text-lg">
                      {path.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
