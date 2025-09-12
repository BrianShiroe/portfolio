// app/[locale]/(public)/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetailContent from "./ProjectDetailContent";

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

  return <ProjectDetailContent project={project} />;
}
