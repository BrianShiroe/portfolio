// app/[locale]/(public)/home/page.tsx
"use client";
import { useLocale } from "@/lib/useLocale";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    category: "Web Projects",
    items: [
      {
        title: "ShiroeShop E-commerce",
        desc: "A modern online shopping platform.",
        href: "/projects/shiroeshop",
      },
      {
        title: "Rumahssekolah Educ",
        desc: "Educational platform for schools.",
        href: "/projects/rumahssekolah",
      },
      {
        title: "Luka AI CCTV System",
        desc: "AI-powered CCTV monitoring system.",
        href: "/projects/luka-ai",
      },
      {
        title: "Editorial Platform",
        desc: "Collaborative publishing system.",
        href: "/projects/editorial",
      },
      {
        title: "Web-Based Editorial Platform",
        desc: "Online editorial management tool.",
        href: "/projects/editorial-web",
      },
      {
        title: "CC Cafeteria Web Platform",
        desc: "Digital cafeteria management platform.",
        href: "/projects/cc-cafeteria",
      },
    ],
  },
  {
    category: "Machine Learning Projects",
    items: [
      {
        title: "Collective Detection",
        desc: "Smart detection for group behaviors.",
        href: "/projects/collective-detection",
      },
      {
        title: "Fire Detection",
        desc: "AI system to detect fires in real time.",
        href: "/projects/fire-detection",
      },
      {
        title: "Smoke Detection",
        desc: "ML-based smoke detection system.",
        href: "/projects/smoke-detection",
      },
      {
        title: "Flood Segmentation",
        desc: "Segmentation model for flood mapping.",
        href: "/projects/flood-segmentation",
      },
      {
        title: "Landslide Detection",
        desc: "AI model for landslide risk detection.",
        href: "/projects/landslide",
      },
    ],
  },
  {
    category: "Game Projects",
    items: [
      {
        title: "WOB and COB",
        desc: "A fun casual 2D game.",
        href: "/projects/wob-cob",
      },
      {
        title: "The Goddess' Trial",
        desc: "Fantasy RPG adventure.",
        href: "/projects/goddess-trial",
      },
      {
        title: "Shadow Monarch",
        desc: "Dark-themed action RPG.",
        href: "/projects/shadow-monarch",
      },
      {
        title: "Climb It Up!",
        desc: "Vertical climbing challenge game.",
        href: "/projects/climb-it-up",
      },
    ],
  },
];

export default function HomePage() {
  const { t, locale } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center px-3 sm:px-6">
      <h1 className="self-start text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">
        Projects
      </h1>

      {projects.map((section) => (
        <div key={section.category} className="w-full mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {section.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {section.items.map((proj) => (
              <Link key={proj.title} href={proj.href}>
                <div className="group rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition p-3 sm:p-4 cursor-pointer">
                  <div className="w-full h-32 sm:h-40 bg-gray-200 rounded-lg sm:rounded-xl mb-2 sm:mb-3 flex items-center justify-center">
                    <span className="text-gray-500 text-sm sm:text-base">
                      Image
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {proj.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
