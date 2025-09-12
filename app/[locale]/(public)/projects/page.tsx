// app/[locale]/(public)/projects/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProjectsSkeleton from "@/app/components/projectsSkeleton";

type ProjectItem = {
  id: string;
  href: string;
  title: string;
  desc: string;
  image?: string;
};

type ProjectSection = {
  category: string;
  items: ProjectItem[];
};

export default function ProjectsPage() {
  const params = useParams();
  const locale = params?.locale || "en";
  const [projects, setProjects] = useState<ProjectSection[] | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await import(`@/locales/${locale}/projects.json`);
        setProjects(data.projects);
      } catch (err) {
        console.error("Failed to load projects JSON:", err);
        setProjects([]);
      }
    };

    // Optional: simulate API delay
    const timeout = setTimeout(() => {
      loadProjects();
    }, 1500);

    return () => clearTimeout(timeout);
  }, [locale]);

  return (
    <div className="flex flex-col items-center justify-center px-3 sm:px-6">
      <h1 className="self-start text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">
        {locale === "ar" ? "المشاريع" : "Projects"}
      </h1>

      {!projects ? (
        <ProjectsSkeleton sections={2} itemsPerSection={3} />
      ) : (
        projects.map((section) => (
          <div key={section.category} className="w-full mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {section.category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {section.items.map((proj: ProjectItem) => (
                <Link key={proj.id} href={`/${locale}${proj.href}`}>
                  <div className="group border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition transform hover:scale-[1.02] cursor-pointer bg-white">
                    {/* Image */}
                    <div className="relative w-full h-48 sm:h-56 bg-gray-100 overflow-hidden">
                      <Image
                        src={
                          proj.image || "/placeholders/image-placeholder.png"
                        }
                        alt={proj.title || "Placeholder"}
                        fill
                        className="object-cover object-top group-hover:scale-103 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw,
                              (max-width: 1024px) 50vw,
                              33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-semibold mb-1 line-clamp-1">
                        {proj.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                        {proj.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
