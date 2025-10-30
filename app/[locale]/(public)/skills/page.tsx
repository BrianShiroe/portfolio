// app/[locale]/(public)/skills/page.tsx
"use client";
import Head from "next/head";
import Skills from "@/app/components/skills";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Brian Ong Haw</title>
        <meta
          name="description"
          content="Explore the technical skills and tools mastered by Brian Ong Haw, a Web Developer, across frontend, backend, databases, DevOps, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Brian Ong Haw, Skills, Web Developer, Frontend, Backend, Databases, DevOps, Machine Learning, Game Development, Portfolio, WordPress"
        />
      </Head>

      <Skills />
    </>
  );
}
