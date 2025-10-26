"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DominoMotion from "@/app/components/ui/DominoMotion";
import Head from "next/head";

// Import React Icon libraries
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as VscIcons from "react-icons/vsc";

export default function SkillsPage() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";

  const [skills, setSkills] = useState<
    { label: string; tools: { name: string; icon: string }[] }[] | null
  >(null);
  const [filter, setFilter] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await import(`@/locales/${locale}/skills.json`);
        setSkills(data.default);
        setCategories(data.default.map((s: any) => s.label));
      } catch (err) {
        console.error("Failed to load skills JSON:", err);
        setSkills([]);
      }
    };
    loadSkills();
  }, [locale]);

  // Utility to dynamically return the matching React Icon component
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

  // Flatten all tools into one list for easier filtering
  const allTools = skills.flatMap((section) =>
    section.tools.map((tool) => ({
      ...tool,
      category: section.label,
    }))
  );

  // Filtered tools
  const displayedTools =
    filter === "All"
      ? allTools
      : allTools.filter((tool) => tool.category === filter);

  return (
    <>
      <Head>
        <title>
          {locale === "ar"
            ? "المهارات | Brian Ong Haw"
            : "Skills | Brian Ong Haw"}
        </title>
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

      <div className="flex flex-col items-center justify-center px-3 sm:px-6">
        {/* Title */}
        <DominoMotion direction={locale === "ar" ? "right" : "left"} delay={0}>
          <h1 className="self-center sm:self-start text-3xl sm:text-4xl font-semibold mb-6 text-center sm:text-left">
            {locale === "ar" ? "المهارات" : "Skills"}
          </h1>
        </DominoMotion>

        {/* Category Filter Buttons */}
        {categories.length > 0 && (
          <div className="mb-6 w-full">
            {/* Dropdown for mobile */}
            <div className="sm:hidden mb-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              >
                {["All", ...categories].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons for desktop */}
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

        {/* Unified Box for All Skills */}
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
    </>
  );
}
