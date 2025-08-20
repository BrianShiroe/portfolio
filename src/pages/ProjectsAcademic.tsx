// src/pages/ProjectsAcademic.tsx
// Displays categorized academic projects.
// Each project includes a title, icon, description, image, link, and hashtags.

import React, { useState } from "react";
import type { ReactNode } from "react";
import { FaRobot, FaGlobe, FaDesktop } from "react-icons/fa";

interface ExtraLink {
  href: string;
  text: string;
}

interface Project {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  imgSrc: string;
  link: string;
  linkText: string;
  disabled: boolean;
  btnStyle?: React.CSSProperties;
  extraLink?: ExtraLink;
  hashtags?: string[];
}

const projectsAcademic: Project[] = [
  {
    id: "pp7",
    title: "Luka",
    icon: <FaRobot />,
    description: `An accident and disaster detection CCTV monitoring system that offers real-time accident detection, 
      live CCTV streaming, incident playback and recording, intelligent analytics, and IoT camera integration. 
      The detection model was trained on 18k image data, with 100 epochs, 640 image size, 16 batch size, and 8 workers.`,
    imgSrc: "/images/project-images/project7.jpg",
    link: "https://github.com/LCbalsa/calbi-luka",
    linkText: "Github",
    disabled: false,
    hashtags: ["#machinelearning", "#python", "#iot", "#opencv", "#yolo"],
  },
  {
    id: "pp2",
    title: "Web-Based IT Inventory Monitoring System",
    icon: <FaGlobe />,
    description: `A web-based inventory monitoring system designed for the IT
     department of DPWH, enabling users to efficiently store, track, 
      and manage all computer hardware assets required by the organization.`,
    imgSrc: "/images/project-images/project10.png",
    link: "",
    linkText: "PRIVATE PROJECT!",
    disabled: true,
    btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    hashtags: ["#webdevelopment", "#xampp", "#mysql", "#php", "#apache", "#phpmyadmin"],
  },
  {
    id: "pp9",
    title: "TPP: A Web-Based Editorial Platform",
    icon: <FaGlobe />,
    description: `A web-based editorial platform developed for The Premier Post, 
      a school-affiliated organization dedicated to publishing campus news and updates.`,
    imgSrc: "/images/project-images/project9.png",
    link: "",
    linkText: "PRIVATE PROJECT!",
    disabled: true,
    btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    hashtags: ["#webdevelopment", "#xampp", "#mysql", "#php", "#apache", "#phpmyadmin"],
  },
  {
    id: "pp8",
    title: "Manaheartz Handicrafts Store Product Management System",
    icon: <FaDesktop />,
    description: `A Computer Based Management System used to store all
     the products of the Manaheartz Handicrafts Store.`,
    imgSrc: "/images/project-images/project8.1.png",
    link: "/assets/manaheartz-project.pdf",
    linkText: "PRIVATE PROJECT!",
    disabled: true,
    btnStyle: { backgroundColor: "red", color: "white", cursor: "not-allowed" },
    hashtags: ["#webdevelopment", "#xampp", "#mysql", "#php", "#apache", "#phpmyadmin"],
  },
];

const ProjectCard: React.FC<Project> = ({
  title,
  icon,
  description,
  imgSrc,
  link,
  linkText,
  disabled,
  btnStyle,
  extraLink,
  hashtags,
}) => {
  const baseBtnClasses = "inline-block px-4 py-2 rounded font-semibold transition-colors duration-300";

  const enabledClasses =
    "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-400 dark:hover:bg-indigo-500 cursor-pointer";

  const disabledClasses = "bg-red-600 text-white cursor-not-allowed";

  return (
    <div
      className="project border rounded shadow p-4 mb-6 flex flex-col gap-4 md:flex-row md:gap-6"
      role="region"
      aria-labelledby={`project-title-${title}`}
    >
      <img src={imgSrc} alt={title} className="w-full md:w-48 object-cover rounded" />
      <div className="content flex flex-col justify-between">
        <h2 id={`project-title-${title}`} className="text-2xl font-semibold flex items-center space-x-2 mb-2">
          {icon}
          <span>{title}</span>
        </h2>
        <p className="mb-4 text-justify">{description}</p>

        <div className="flex flex-wrap items-center justify-between">
          <div>
            <a
              href={disabled ? undefined : link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseBtnClasses} ${disabled ? disabledClasses : enabledClasses}`}
              style={btnStyle}
              aria-disabled={disabled}
              tabIndex={disabled ? -1 : 0}
              onClick={disabled ? (e) => e.preventDefault() : undefined}
            >
              {linkText}
            </a>

            {extraLink && (
              <a
                href={extraLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-block px-4 py-2 rounded text-white font-semibold ml-3 bg-blue-600 hover:bg-blue-700"
              >
                {extraLink.text}
              </a>
            )}
          </div>

          {hashtags && hashtags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {hashtags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-1 text-base font-mono rounded transition-all duration-200 transform
                          text-indigo-700 bg-indigo-100
                          dark:text-yellow-300 dark:bg-gray-800
                          hover:bg-blue-200
                          hover:text-blue-800 dark:hover:text-yellow-200
                          hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsAcademic: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Default to 3 visible projects

  const handleToggle = () => {
    setVisibleCount((prev) => (prev === projectsAcademic.length ? 3 : projectsAcademic.length));
  };

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">MAJOR PROJECTS</h1>
      <div className="projects-container academic overflow-hidden">
        {projectsAcademic.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {projectsAcademic.length > 2 && (
        <div className="text-center mt-4">
          <button
            onClick={handleToggle}
            className="px-6 py-2 rounded
              bg-gray-200 text-black hover:bg-gray-300
              dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
            aria-expanded={visibleCount === projectsAcademic.length}
          >
            {visibleCount === projectsAcademic.length ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsAcademic;
