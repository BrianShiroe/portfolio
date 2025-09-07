"use client";
import { useLocale } from "@/lib/useLocale";
import Image from "next/image";
import { Calendar, Home, Cake } from "lucide-react";

export default function AboutPage() {
  const { t, locale } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-white text-gray-800">
      <h1 className="self-start text-4xl font-semibold mb-6">About Me</h1>

      {/* Profile + Intro */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-center w-full max-w-4xl">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
          priority
        />

        <div className="w-full border-t md:border-t-0 md:border-l border-gray-300 md:pl-10 pt-6 md:pt-0">
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
    </div>
  );
}
