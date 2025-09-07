// app/[locale]/(public)/about/page.tsx
"use client";
import { useLocale } from "@/lib/useLocale";
import Image from "next/image";
import { User, GraduationCap } from "lucide-react";

export default function AboutPage() {
  const { t, locale } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="self-start text-4xl font-semibold mb-6">About Me</h1>

      {/* Profile + Intro */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-center w-full max-w-4xl my-10">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
          priority
        />

        <div className="w-full border-t lg:border-t-0 lg:border-l border-gray-300 lg:pl-10 pt-6 lg:pt-0">
          <p className="mb-4">
            Hi! I'm a <strong>Computer Science graduate</strong> with a passion
            for exploring the field — from{" "}
            <strong>full-stack development</strong> to problem-solving, data
            structures, and emerging technologies.
          </p>
          <p>
            I enjoy building functional applications and understanding how
            systems work to solve real-world challenges. I'm{" "}
            <strong>committed</strong> to continuous learning and applying my
            skills to create innovative and practical solutions.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Card 1: Basic Info */}
        <div className=" border border-gray-200 rounded-lg p-6 shadow-lg border-t-0">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-8 h-8 text-gray-800" />
            <h2 className="text-xl font-semibold">Basic Info</h2>
          </div>
          <p className="mb-2 text-sm text-gray-600">Academic background</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <strong>Age:</strong>23 Years Old
            </li>
            <li>
              <strong>Birth:</strong>January 17, 2002
            </li>
            <li>
              <strong>Residence:</strong>Al Wasl Area, Dubai
            </li>
          </ul>
        </div>

        {/* Card 2: Education */}
        <div className=" border border-gray-200 rounded-lg p-6 shadow-lg border-t-0">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-gray-800" />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          <p className="mb-2 text-sm text-gray-600">
            Bachelor of Science in Computer Science
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <strong>Attended:</strong>July 12, 2021
            </li>
            <li>
              <strong>Graduated:</strong>June 18, 2025
            </li>
            <li>
              <strong>Institution:</strong>Columban College, Inc. Philippines
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
