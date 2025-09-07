import { notFound } from "next/navigation";

const projects = {
  shiroeshop: {
    title: "ShiroeShop E-commerce",
    desc: "A modern online shopping platform with a sleek UI.",
  },
  rumahssekolah: {
    title: "Rumahssekolah Educ",
    desc: "Educational platform for schools.",
  },
  "luka-ai": {
    title: "Luka AI CCTV System",
    desc: "AI-powered CCTV monitoring system.",
  },
  editorial: {
    title: "Editorial Platform",
    desc: "Collaborative publishing system.",
  },
  "editorial-web": {
    title: "Web-Based Editorial Platform",
    desc: "Online editorial management tool.",
  },
  "cc-cafeteria": {
    title: "CC Cafeteria Web Platform",
    desc: "Digital cafeteria management platform.",
  },
  "collective-detection": {
    title: "Collective Detection",
    desc: "Smart detection for group behaviors.",
  },
  "fire-detection": {
    title: "Fire Detection",
    desc: "AI system to detect fires in real time.",
  },
  "smoke-detection": {
    title: "Smoke Detection",
    desc: "ML-based smoke detection system.",
  },
  "flood-segmentation": {
    title: "Flood Segmentation",
    desc: "Segmentation model for flood mapping.",
  },
  landslide: {
    title: "Landslide Detection",
    desc: "AI model for landslide risk detection.",
  },
  "wob-cob": {
    title: "WOB and COB",
    desc: "A fun casual 2D game.",
  },
  "goddess-trial": {
    title: "The Goddess' Trial",
    desc: "Fantasy RPG adventure.",
  },
  "shadow-monarch": {
    title: "Shadow Monarch",
    desc: "Dark-themed action RPG.",
  },
  "climb-it-up": {
    title: "Climb It Up!",
    desc: "Vertical climbing challenge game.",
  },
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id];

  if (!project) return notFound();

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg">{project.desc}</p>
    </div>
  );
}
