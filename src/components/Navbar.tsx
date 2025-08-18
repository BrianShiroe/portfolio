// src/components/Navbar.tsx
// Responsive navigation bar with smooth scrolling and theme toggle support.
// Includes mobile and desktop views with section links and icons.

import { useState, useRef, useEffect } from "react";
import type { Theme } from "../utils/theme";
import {
  HomeIcon,
  UserIcon,
  WrenchIcon,
  FolderOpenIcon,
  EnvelopeIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      setMaxHeight(mobileMenuOpen ? `${menuRef.current.scrollHeight}px` : "0px");
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const sections = [
    { name: "home", icon: <HomeIcon className="w-5 h-5 inline mr-1" /> },
    { name: "about", icon: <UserIcon className="w-5 h-5 inline mr-1" /> },
    { name: "skills", icon: <WrenchIcon className="w-5 h-5 inline mr-1" /> },
    {
      name: "projects-academic",
      icon: <FolderOpenIcon className="w-5 h-5 inline mr-1" />,
      label: "Project",
    },
    { name: "contact", icon: <EnvelopeIcon className="w-5 h-5 inline mr-1" /> },
  ];

  const renderLinkText = (section: { name: string; label?: string }) => {
    return section.label || section.name.charAt(0).toUpperCase() + section.name.slice(1);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-4 py-4 transition-colors duration-500 ${
        isScrolled || mobileMenuOpen ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          BS.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <a
              key={section.name}
              href={`#${section.name}`}
              onClick={(e) => handleSmoothScroll(e, section.name)}
              className="text-base sm:text-lg text-gray-900 dark:text-gray-100 hover:underline px-2 py-1 flex items-center transition-transform duration-200 hover:scale-105"
            >
              {section.icon}
              {renderLinkText(section)}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-base sm:text-lg px-3 py-1 text-gray-900 dark:text-gray-100 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center transition-transform duration-200 hover:scale-105"
          >
            {theme === "light" ? <MoonIcon className="w-5 h-5 mr-1" /> : <SunIcon className="w-5 h-5 mr-1" />}
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ maxHeight }}
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="flex flex-col gap-2 mt-2 px-4 py-2">
          {sections.map((section) => (
            <a
              key={section.name}
              href={`#${section.name}`}
              onClick={(e) => handleSmoothScroll(e, section.name)}
              className="text-gray-900 dark:text-gray-100 hover:underline py-2 flex items-center"
            >
              {section.icon}
              {renderLinkText(section)}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            aria-label="Toggle Theme"
            className="text-left text-gray-900 dark:text-gray-100 hover:underline py-2 flex items-center"
          >
            {theme === "light" ? <MoonIcon className="w-5 h-5 mr-1" /> : <SunIcon className="w-5 h-5 mr-1" />}
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
