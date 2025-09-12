// app/[locale]/(public)/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaItchIo, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  href: string;
  image: string;
  githubLink?: string;
  itchLink?: string;
  demoLink?: string;
}

interface ProjectSection {
  category: string;
  items: ProjectItem[];
}

export default async function ProjectPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { locale, id } = params;

  let allProjects: ProjectItem[] = [];

  try {
    const data: { projects: ProjectSection[] } = await import(
      `@/locales/${locale}/projects.json`
    );
    allProjects = data.projects.flatMap((section) => section.items);
  } catch (err) {
    console.error("Failed to load projects JSON:", err);
    return notFound();
  }

  const project = allProjects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <Image
        src={project.image || "/placeholders/image-placeholder.png"}
        alt={project.title}
        width={1200}
        height={675}
        className="w-full h-auto max-h-[800px] object-cover rounded-xl mb-8 shadow-lg"
      />

      <p className="text-gray-700 text-lg mb-6">{project.desc}</p>

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
    </div>
  );
}
