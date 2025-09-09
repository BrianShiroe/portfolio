// app/[locale]/(public)/projects/[id]/page.tsx
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaGithub, FaItchIo, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Flatten all items across categories
  const allProjects = projects.flatMap((section) => section.items);

  const project = allProjects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <Image
        src={project.image || "/placeholders/image-placeholder.png"}
        alt={project.title}
        width={800}
        height={400}
        className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
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
