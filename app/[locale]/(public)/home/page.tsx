"use client";
import { useLocale } from "@/lib/useLocale";
import Link from "next/link";

export default function HomePage() {
  const { locale, t } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center lg:pt-20">
      {/* Greeting */}
      <p className="self-start text-4xl text-gray-600 mb-2">
        {t("home.greeting")}
      </p>

      {/* Name */}
      <h1 className="text-8xl font-bold text-gray-900 mb-2">
        {t("home.name")}
      </h1>

      {/* Handle */}
      <p className="text-4xl text-gray-800 mb-2">
        {t("home.handle")} <strong>{t("home.username")}</strong>
      </p>

      {/* Role */}
      <p className="text-2xl font-medium text-gray-900 mb-10">
        {t("home.role")}
      </p>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
        <Link
          href={`/${locale}/email`}
          className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-4xl hover:bg-gray-700 transition text-center"
        >
          {t("home.contactButton")}
        </Link>
        <a
          href="/Brian-Haw-CV.pdf"
          download="Brian-Haw-CV.pdf"
          className="flex-1 border border-gray-900 text-gray-900 px-8 py-4 rounded-4xl hover:bg-gray-100 transition text-center cursor-pointer"
        >
          {t("home.downloadCV")}
        </a>
      </div>
    </div>
  );
}
