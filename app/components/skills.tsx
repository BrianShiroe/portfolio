// app/components/skills.tsx
"use client";

import { useState, useEffect } from "react";
import DominoMotion from "@/app/components/ui/DominoMotion";
import { FaChevronDown } from "react-icons/fa";

// React Icon libraries
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as VscIcons from "react-icons/vsc";

interface Tool {
  name: string;
  icon: string;
  category?: string;
}

interface SkillSection {
  label: string;
  tools: Tool[];
}

interface SkillsProps {
  locale?: string;
}

export default function Skills({ locale = "en" }: SkillsProps) {
  const [skills, setSkills] = useState<SkillSection[] | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await import(`@/locales/${locale}/skills.json`);
        setSkills(data.default);
        setCategories(data.default.map((s: SkillSection) => s.label));
      } catch (err) {
        console.error("Failed to load skills JSON:", err);
        setSkills([]);
      }
    };
    loadSkills();
  }, [locale]);

  const getIcon = (iconName: string) => {
    return (
      SiIcons[iconName as keyof typeof SiIcons] ||
      FaIcons[iconName as keyof typeof FaIcons] ||
      DiIcons[iconName as keyof typeof DiIcons] ||
      VscIcons[iconName as keyof typeof VscIcons] ||
      null
    );
  };

  if (!skills) return <div></div>;

  const allTools = skills.flatMap((section) =>
    section.tools.map((tool) => ({ ...tool, category: section.label }))
  );

  const displayedTools =
    filter === "All"
      ? allTools
      : allTools.filter((tool) => tool.category === filter);

  return (
    <div className="flex flex-col items-center justify-center px-3 sm:px-6">
      {/* Category Filter Buttons */}
      {categories.length > 0 && (
        <div className="mb-6 w-full">
          {/* Mobile Custom Dropdown */}
          <div className="sm:hidden mb-4 relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-200 rounded-xl shadow-sm text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              {filter}
              <FaChevronDown
                className={`ml-2 transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden">
                {["All", ...categories].map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        setFilter(cat);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 hover:bg-indigo-500 hover:text-white transition ${
                        filter === cat ? "bg-indigo-500 text-white" : "bg-white text-gray-800"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop buttons */}
          <div className="hidden sm:flex flex-wrap justify-start gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm sm:text-base transition ${
                  filter === cat
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Skills Grid */}
      <DominoMotion direction="up" delay={0.1} duration={0.5}>
        <div className="w-full max-w-6xl p-10 bg-gray-50 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedTools.map((tool, index) => {
              const IconComponent = getIcon(tool.icon);
              return (
                <DominoMotion
                  key={`${tool.name}-${index}`}
                  direction="up"
                  delay={0.05 * index}
                  duration={0.4}
                >
                  <div className="flex flex-col items-center sm:items-start gap-2 rounded-2xl shadow-md p-4 hover:scale-105 transition-transform bg-white">
                    <div className="flex items-center gap-3 w-full">
                      {IconComponent && (
                        <IconComponent className="text-4xl text-gray-700" />
                      )}
                      <div className="text-lg font-medium text-gray-800">
                        {tool.name}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {tool.category}
                    </span>
                  </div>
                </DominoMotion>
              );
            })}
          </div>
        </div>
      </DominoMotion>
    </div>
  );
}
