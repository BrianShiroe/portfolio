// src/pages/ProjectsPersonal.tsx
// Displays categorized personal projects.
// Each project includes a title, icon, description, image, link, and hashtags.

import React, { useState } from "react";
import type { ReactNode } from "react";
import { FaRobot, FaGamepad } from "react-icons/fa";

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

const projectsPersonal: Project[] = [
  {
    id: "pp3",
    title: "Collision, Fire, and Smoke Detection Model",
    icon: <FaRobot />,
    description: `A machine learning model capable of detecting car crashes
     from images, videos and live feed, trained on 15,000 image data.`,
    imgSrc: "/images/project-images/project3.2.png",
    link: "https://github.com/BrianShiroe/yolov11-collision-fire-smoke-detection.git",
    linkText: "Github",
    disabled: false,
    btnStyle: {},
    hashtags: ["#machinelearning", "#yolo", "#opencv", "#python"],
  },
  {
    id: "pp5",
    title: "Flood Segmentation Model",
    icon: <FaRobot />,
    description: `A machine learning model capable of segmenting floods
     from images, videos and live feed, trained on 2,000 image data.`,
    imgSrc: "/images/project-images/project5.1.jpg",
    link: "https://github.com/BrianShiroe/yolov11-flood-detection.git",
    linkText: "Github",
    disabled: false,
    btnStyle: {},
    hashtags: ["#machinelearning", "#yolo", "#segmentation", "#python"],
  },
  {
    id: "pp6",
    title: "Landslide Segmentation Model",
    icon: <FaRobot />,
    description: `A machine learning model capable of segmenting landslides
     from images, videos and live feed, trained on 500 image data.`,
    imgSrc: "/images/project-images/project6.1.png",
    link: "https://github.com/BrianShiroe/yolov11-landslide-detection.git",
    linkText: "Github",
    disabled: false,
    btnStyle: {},
    hashtags: ["#machinelearning", "#yolo", "#environment", "#python"],
  },
  {
    id: "pp1",
    title: "Shadow Monarch",
    icon: <FaGamepad />,
    description: `A 2D action adventure game made with Godot, using basic
     character functionalities, (e.g. movement, attack pattern, skills, etc.)
      and enemy ai logic (e.g. path finding, finite state machine, perception system, etc.).`,
    imgSrc: "/images/project-images/project1.png",
    link: "https://mun-development.itch.io/shadow-monarch-the-cats-adventure",
    linkText: "itch.io",
    disabled: false,
    btnStyle: {},
    hashtags: ["#godot", "#gamedev", "#2dgame", "#ai"],
  },
  {
    id: "pp2-2",
    title: "The Goddess' Trial",
    icon: <FaGamepad />,
    description: `A 2D speedrun platformer game made using the unity
     game engine, submitted for the 5th SpeedJam competition hosted in itch.io.`,
    imgSrc: "/images/project-images/project2.png",
    link: "https://mun-development.itch.io/the-goddess-trial",
    linkText: "itch.io",
    disabled: false,
    btnStyle: {},
    hashtags: ["#unity", "#speedjam", "#platformer", "#gamedev"],
  },
  {
    id: "pp11",
    title: "WOB and COB",
    icon: <FaGamepad />,
    description: `In this charming 2D platformer, teamwork is everything.
     Take control of two specialized robots—WoB, the strong and silent
      box-lifter, and CoB, the clever button-presser—and guide them
       through a series of puzzling levels to load all the boxes
        into the mysterious Dropbox Machine.`,
    imgSrc: "/images/project-images/project11.jpg",
    link: "https://mun-development.itch.io/wob-cob",
    linkText: "itch.io",
    disabled: false,
    btnStyle: {},
    hashtags: ["#unity", "#indiegame", "#2dgame", "#gamedev"],
  },
  {
    id: "pp12",
    title: "Climb It Up!",
    icon: <FaGamepad />,
    description: `Combining roblox, minecraft, and parkour, I present Climb it Up!, 
    a roblox game where you climb minecraft style obstacles with the goal of reaching the top.`,
    imgSrc: "/images/project-images/project12.png",
    link: "https://www.roblox.com/games/105682805148258/Climb-It-Up",
    linkText: "Roblox",
    disabled: false,
    btnStyle: {},
    hashtags: ["#roblox", "#indiegame", "#3dgame", "#gamedev"],
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
}) => (
  <div
    className="project animated bounce-in border rounded
   shadow p-4 mb-6 flex flex-col gap-4 md:flex-row md:gap-6"
  >
    <img src={imgSrc} alt={title} className="w-full md:w-48 object-cover rounded" />
    <div className="content flex flex-col justify-between">
      <h2 className="text-2xl font-semibold flex items-center space-x-2 mb-2">
        {icon}
        <span>{title}</span>
      </h2>
      <p className="mb-4 text-justify">{description}</p>

      <div className="flex flex-wrap items-center justify-between">
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn inline-block px-4 py-2 rounded font-semibold transition-colors duration-300 ${
              disabled
                ? "bg-red-600 text-white cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-400 dark:hover:bg-indigo-500"
            }`}
            style={btnStyle}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : undefined}
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

const ProjectsPersonal: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3); // <-- DEFAULT TO 3 VISIBLE PROJECTS

  const handleToggle = () => {
    setVisibleCount((prev) => (prev === projectsPersonal.length ? 3 : projectsPersonal.length));
  };

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="animated bounce-in text-4xl font-bold mb-6 text-center">PERSONAL PROJECTS</h1>
      <div className="projects-container personal">
        {projectsPersonal.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {projectsPersonal.length > 3 && (
        <div className="text-center mt-4">
          <button
            onClick={handleToggle}
            className="px-6 py-2 rounded
            bg-gray-200 text-black hover:bg-gray-300
            dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            {visibleCount === projectsPersonal.length ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPersonal;
