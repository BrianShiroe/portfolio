"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProjectsSkeleton from "@/app/components/projectsSkeleton";
import DominoMotion from "@/app/components/ui/DominoMotion";
import { FaGithub, FaExternalLinkAlt, FaItchIo } from "react-icons/fa";

type ProjectItem = {
  id: string;
  href: string;
  title: string;
  desc: string;
  image?: string;
  isNotVisible?: number;
  githubLink?: string;
  demoLink?: string;
  itchLink?: string;
  tags?: string[];
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

    const timeout = setTimeout(() => {
      loadProjects();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [locale]);

  return (
    <div className="flex flex-col items-center justify-center px-3 sm:px-6">
      <DominoMotion direction={locale === "ar" ? "right" : "left"} delay={0}>
        <h1 className="self-center sm:self-start text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 text-center sm:text-left">
          {locale === "ar" ? "المشاريع" : "Projects"}
        </h1>
      </DominoMotion>

      {!projects ? (
        <ProjectsSkeleton sections={2} itemsPerSection={3} />
      ) : (
        projects.map((section, sectionIndex) => (
          <div key={section.category} className="w-full mb-6 sm:mb-10">
            <DominoMotion
              direction="up"
              delay={0.2 * sectionIndex}
              duration={0.6}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center sm:text-left">
                {section.category}
              </h2>
            </DominoMotion>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {section.items
                .filter((proj) => proj.isNotVisible !== 1)
                .map((proj, projIndex) => (
                  <DominoMotion
                    key={proj.id}
                    direction="up"
                    delay={0.2 * sectionIndex + 0.1 * projIndex}
                    duration={0.5}
                  >
                    <div className="group border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition transform hover:scale-[1.02] bg-white">
                      <Link href={`/${locale}${proj.href}`} className="block">
                        {/* Image */}
                        <div className="relative w-full h-48 sm:h-56 bg-gray-100 overflow-hidden">
                          <Image
                            src={
                              proj.image ||
                              "/placeholders/image-placeholder.png"
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
                        <div className="p-4 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                          <h3 className="text-base sm:text-lg font-semibold mb-3 line-clamp-1">
                            {proj.title}
                          </h3>
                          <p
                            className={`text-gray-600 text-sm sm:text-base md:text-justify line-clamp-4 mb-4 ${
                              locale === "ar" ? "text-right" : "text-left"
                            }`}
                          >
                            {proj.desc}
                          </p>

                          {/* Tags */}
                          {proj.tags && proj.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                              {proj.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs sm:text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Buttons */}
                      {(proj.githubLink || proj.demoLink || proj.itchLink) && (
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 p-3 sm:p-4 border-t border-gray-200">
                          {proj.githubLink && (
                            <a
                              href={proj.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1 px-3 py-2 bg-black text-white rounded-full text-sm sm:text-base hover:bg-gray-800 transition w-full sm:w-auto"
                            >
                              <FaGithub /> GitHub
                            </a>
                          )}
                          {proj.itchLink && (
                            <a
                              href={proj.itchLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1 px-3 py-2 bg-black text-white rounded-full text-sm sm:text-base hover:bg-gray-800 transition w-full sm:w-auto"
                            >
                              <FaItchIo /> itch.io
                            </a>
                          )}
                          {proj.demoLink && (
                            <a
                              href={proj.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1 px-3 py-2 bg-black text-white rounded-full text-sm sm:text-base hover:bg-gray-800 transition w-full sm:w-auto"
                            >
                              <FaExternalLinkAlt /> Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </DominoMotion>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
