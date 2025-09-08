// app/[locale]/(public)/projects/[id]/page.tsx
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Flatten all items across categories
  const allProjects = projects.flatMap((section) => section.items);

  const project = allProjects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
        />
      )}

      <p className="text-gray-700 text-lg">{project.desc}</p>
    </div>
  );
}
