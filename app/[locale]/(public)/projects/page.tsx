"use client";
import Head from "next/head";
import Projects from "@/app/components/projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Brian Ong Haw</title>
        <meta
          name="description"
          content="Browse through Brian Ong Haw's projects. Explore demos, GitHub repositories, and other creative works."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Projects />
    </>
  );
}
