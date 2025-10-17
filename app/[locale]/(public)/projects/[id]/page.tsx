// app/[locale]/(public)/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetailContent from "./ProjectDetailContent";
import Head from "next/head";

interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  href: string;
  image: string;
  githubLink?: string;
  itchLink?: string;
  demoLink?: string;
  tags?: string[];
}

interface ProjectSection {
  category: string;
  items: ProjectItem[];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

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
    <>
      <Head>
        <title>{`${project.title} | Brian Ong Haw Projects`}</title>
        <meta name="description" content={project.desc.slice(0, 160)} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`Brian Ong Haw, ${project.title}, Projects, Portfolio, ${project.id}`}
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${project.title} | Brian Ong Haw Projects`}
        />
        <meta property="og:description" content={project.desc.slice(0, 160)} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yourdomain.com/${locale}/projects/${project.id}`}
        />
        <meta property="og:image" content={project.image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.title} | Brian Ong Haw Projects`}
        />
        <meta name="twitter:description" content={project.desc.slice(0, 160)} />
        <meta name="twitter:image" content={project.image} />
      </Head>

      <ProjectDetailContent project={project} tags={project.tags || []} />
    </>
  );
}
