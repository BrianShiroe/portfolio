// app/[locale]/(public)/skills/page.tsx
"use client";

import { skills } from "@/data/skills";
import Image from "next/image";

export default function SkillsPage() {
  return (
    <div className="">
      <h1 className="self-start text-4xl font-bold mb-10">Skills</h1>

      <section className="w-full max-w-5xl space-y-12">
        {skills.map((skills) => (
          <div
            className="p-12 bg-gray-50 rounded-2xl inset-shadow-gray-400 inset-shadow-sm text-2xl font-semibold mb-6"
            key={skills.label}
          >
            <h2 className="text-xl font-light text-gray-500 mb-10 pb-4 border-b-1 border-gray-300">
              {skills.label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.tools.map((tools) => (
                <div
                  key={tools.name}
                  className="flex items-center rounded-2xl shadow-lg p-4 hover:scale-103 
                transition-transform bg-white w-2sm"
                >
                  {tools.icon && (
                    <Image
                      src={tools.icon}
                      height={40}
                      width={40}
                      alt=""
                      className="-translate-y-5 ltr:-translate-x-8 rtl:translate-x-8"
                    />
                  )}
                  <div className="text-lg font-medium text-gray-800">
                    {tools.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
