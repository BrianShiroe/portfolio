"use client";

import DominoMotion from "@/app/components/ui/DominoMotion";
import Image from "next/image";
import { FaGithub, FaItchIo, FaExternalLinkAlt } from "react-icons/fa";
import Head from "next/head";

interface ProjectItem {
  title: string;
  desc: string;
  image: string;
  githubLink?: string;
  itchLink?: string;
  demoLink?: string;
}

interface Props {
  project: ProjectItem;
  projectUrl?: string; // full URL of the project page
}

export default function ProjectDetailContent({ project, projectUrl }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.desc,
    "image": project.image,
    "url": projectUrl || "",
    "applicationCategory": "Portfolio Project",
    "offers": project.demoLink
      ? {
          "@type": "Offer",
          "url": project.demoLink,
        }
      : undefined,
    "sameAs": [project.githubLink, project.itchLink].filter(Boolean),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="max-w-3xl mx-auto px-3 sm:px-6">
        {/* Title */}
        <DominoMotion direction="left" delay={0} duration={0.6}>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        </DominoMotion>

        {/* Image */}
        <DominoMotion direction="up" delay={0.1} duration={0.6}>
          <Image
            src={project.image || "/placeholders/image-placeholder.png"}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-auto max-h-[800px] object-cover rounded-xl mb-8 shadow-lg"
          />
        </DominoMotion>

        {/* Description */}
        <DominoMotion direction="up" delay={0.2} duration={0.6}>
          <p className="text-gray-700 text-lg mb-6">{project.desc}</p>
        </DominoMotion>

        {/* Links */}
        <DominoMotion direction="up" delay={0.3} duration={0.6}>
          <div className="flex flex-wrap gap-4 justify-center">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 w-48 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaGithub /> GitHub
              </a>
            )}

            {project.itchLink && (
              <a
                href={project.itchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 w-48 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaItchIo /> itch.io
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 w-48 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </DominoMotion>
      </div>
    </>
  );
}
