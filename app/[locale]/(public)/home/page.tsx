// app/[locale]/(public)/home/page.tsx
"use client";
import { useLocale } from "@/lib/useLocale";
import Link from "next/link";

export default function HomePage() {
  const { t, locale } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white">
      <p className="self-start text-4xl text-gray-600 mb-2">Hello! I'm</p>
      <h1 className="text-8xl font-bold text-gray-900 mb-2">BRIAN ONG HAW</h1>
      <div className="text-start mt-8">
        <p className="text-4xl text-gray-500 mb-2">Handle | Brianshiroe</p>
        <p className="text-2xl font-medium text-gray-900 mb-10">
          Full-Stack Developer
        </p>
      </div>
      <div className="text-2xl flex flex-col sm:flex-row gap-4">
        <Link
          href={`/${locale}/email`}
          className="bg-gray-900 text-white px-12 py-4 rounded-4xl hover:bg-gray-700 transition text-center"
        >
          Contact Me
        </Link>
        <button className="border border-gray-900 text-gray-900 px-12 py-4 rounded-4xl hover:bg-gray-100 transition">
          Download CV
        </button>
      </div>
    </div>
  );
}
