// app/components/ui/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Mail, Home, User, Code, Folder } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "home", icon: <Home className="w-5 h-5 mr-1" /> },
  { name: "About Me", href: "about", icon: <User className="w-5 h-5 mr-1" /> },
  { name: "Skills", href: "skills", icon: <Code className="w-5 h-5 mr-1" /> },
  {
    name: "Projects",
    href: "projects",
    icon: <Folder className="w-5 h-5 mr-1" />,
  },
  { name: "Email", href: "email", icon: <Mail className="w-5 h-5 mr-1" /> },
];

const projectCategories = {
  "Web Projects": [
    "ShiroeShop E-commerce",
    "Rumahssekolah Educ",
    "Luka AI CCTV System",
    "Editorial Platform",
    "Web-Based Editorial Platform",
    "CC Cafeteria Web Platform",
  ],
  "Machine Learning Projects": [
    "Collective Detection",
    "Fire Detection",
    "Smoke Detection",
    "Flood Segmentation",
    "Landslide Detection",
  ],
  "Game Projects": [
    "WOB and COB",
    "The Goddess' Trial",
    "Shadow Monarch",
    "Climb It Up!",
  ],
};

const contactLinks = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "Itch.io", href: "https://itch.io" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:flex w-72 text-gray-900 p-6 border-r border-gray-300 flex-col h-screen">
        <Link href="/home">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </Link>

        {/* Navigation */}
        <nav className="mb-6 border-b border-gray-300 pb-4">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={`/${href}`}
              className={clsx(
                "block px-3 py-2 rounded hover:bg-gray-100 transition text-sm",
                pathname === `/${href}` && "bg-gray-100 font-semibold"
              )}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Projects */}
        <section className="border-b border-gray-300 pb-4 mb-4 flex-1 overflow-y-auto">
          {Object.entries(projectCategories).map(([category, projects]) => (
            <div key={category} className="mb-4">
              <h3 className="text-xs uppercase text-gray-500 mb-2">
                {category}
              </h3>
              <ul className="space-y-1 pl-2">
                {projects.map((proj) => (
                  <li
                    key={proj}
                    className="text-sm text-gray-700 hover:text-black cursor-pointer"
                  >
                    {proj}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-xs uppercase text-gray-500 mb-2">Contact</h3>
          <ul className="space-y-1 pl-2">
            {contactLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-black"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      {/* Mobile Header */}
      <header className="sm:hidden w-full text-gray-900 p-4 border-b border-gray-300 flex items-center justify-between">
        <Link href="/home">
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
        </Link>
        <nav className="flex space-x-2">
          {navLinks.map(({ name, href, icon }) => (
            <Link
              key={name}
              href={`/${href}`}
              className={clsx(
                "flex items-center px-2 py-1 rounded hover:bg-gray-100 transition text-sm",
                pathname === `/${href}` && "bg-gray-100 font-semibold"
              )}
            >
              {icon}
              <span className="hidden">{name}</span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
