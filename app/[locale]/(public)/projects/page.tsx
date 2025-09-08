// app/[locale]/(public)/home/page.tsx
"use client";
import { useLocale } from "@/lib/useLocale";
import Link from "next/link";
import Image from "next/image";

import { projects } from "@/data/projects";

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
              <Link key={proj.id} href={`/${locale}${proj.href}`}>
                <div className="group rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition p-3 sm:p-4 cursor-pointer">
                  {proj.image ? (
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={400}
                      height={200}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg sm:rounded-xl mb-2 sm:mb-3"
                    />
                  ) : (
                    <div className="w-full h-32 sm:h-40 bg-gray-200 rounded-lg sm:rounded-xl mb-2 sm:mb-3 flex items-center justify-center">
                      <span className="text-gray-500 text-sm sm:text-base">
                        Image
                      </span>
                    </div>
                  )}

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
