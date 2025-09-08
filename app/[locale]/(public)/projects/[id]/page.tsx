import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: { id: string } }) {

  const {id} = await params;

  const project = projects.find(p => p.id === (id));

  if (!project) return notFound();

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">{project.content.title}</h1>
      <p className="text-gray-700 text-lg">{project.content.desc}</p>
    </div>
  );
}