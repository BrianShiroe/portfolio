"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DominoMotion from "@/app/components/ui/DominoMotion";
import Head from "next/head";

// Import React Icon libraries
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";

export default function SkillsPage() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";

  const [skills, setSkills] = useState<
    { label: string; tools: { name: string; icon: string }[] }[] | null
  >(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await import(`@/locales/${locale}/skills.json`);
        setSkills(data.default);
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
      null
    );
  };

  if (!skills) return <div></div>;

  return (
    <>
      <Head>
        <title>
          {locale === "ar" ? "المهارات | Brian Ong Haw" : "Skills | Brian Ong Haw"}
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

        {/* Open Graph */}
        <meta
          property="og:title"
          content={locale === "ar" ? "المهارات | Brian Ong Haw" : "Skills | Brian Ong Haw"}
        />
        <meta
          property="og:description"
          content="Explore the technical skills and tools mastered by Brian Ong Haw, a Web Developer, across frontend, backend, databases, DevOps, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/${locale}/skills`} />
        <meta property="og:image" content="/images/profile.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={locale === "ar" ? "المهارات | Brian Ong Haw" : "Skills | Brian Ong Haw"}
        />
        <meta
          name="twitter:description"
          content="Explore the technical skills and tools mastered by Brian Ong Haw, a Web Developer, across frontend, backend, databases, DevOps, and more."
        />
        <meta name="twitter:image" content="/images/profile.png" />
      </Head>

      <div className="flex flex-col items-center justify-center">
        <h1 className="self-start text-4xl font-bold mb-10">
          <DominoMotion
            direction={locale === "ar" ? "right" : "left"}
            delay={0}
            duration={0.6}
          >
            <div>{locale === "ar" ? "المهارات" : "Skills"}</div>
          </DominoMotion>
        </h1>

        <section className="w-full max-w-5xl space-y-12">
          {skills.map((skill, index) => (
            <DominoMotion key={skill.label} direction="up" delay={0.5 * index}>
              <div className="p-12 bg-gray-50 rounded-2xl inset-shadow-gray-400 inset-shadow-sm text-2xl font-semibold mb-6">
                <h2 className="text-xl font-light text-gray-500 mb-10 pb-4 border-b border-gray-300">
                  {skill.label}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skill.tools.map((tool, toolIndex) => {
                    const IconComponent = getIcon(tool.icon);
                    return (
                      <DominoMotion
                        key={tool.name}
                        direction={locale === "ar" ? "right" : "left"}
                        delay={0.5 * index + 0.3 * toolIndex}
                        duration={0.5}
                      >
                        <div className="flex items-center gap-3 rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform bg-white">
                          {IconComponent && (
                            <IconComponent className="text-4xl text-gray-700" />
                          )}
                          <div className="text-lg font-medium text-gray-800">
                            {tool.name}
                          </div>
                        </div>
                      </DominoMotion>
                    );
                  })}
                </div>
              </div>
            </DominoMotion>
          ))}
        </section>
      </div>
    </>
  );
}
