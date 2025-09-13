"use client";
import { useLocale } from "@/lib/useLocale";
import Link from "next/link";
import DominoMotion from "@/app/components/ui/DominoMotion";

export default function HomePage() {
  const { locale, t } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center lg:pt-20">
      {/* Greeting */}
      <DominoMotion direction="left" delay={0}>
        <p className="self-start text-4xl text-gray-600 mb-2">
          {t("home.greeting")}
        </p>
      </DominoMotion>

      {/* Name */}
      <DominoMotion direction="right" delay={0.1}>
        <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">
          {t("home.name")}
        </h1>
      </DominoMotion>

      {/* Handle */}
      <DominoMotion direction="left" delay={0.3}>
        <p className="text-4xl text-gray-800 mb-2">
          {t("home.handle")} <strong>{t("home.username")}</strong>
        </p>
      </DominoMotion>

      {/* Role */}
      <DominoMotion direction="right" delay={0.5}>
        <p className="text-2xl font-medium text-gray-900 mb-10">
          {t("home.role")}
        </p>
      </DominoMotion>

      {/* Buttons Section */}
      <DominoMotion direction="up" delay={0.7}>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Link
            href={`/${locale}/email`}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gray-900 text-white text-lg font-medium text-center transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"
          >
            {t("home.contactButton")}
          </Link>

          <a
            href="/Brian-Haw-CV.pdf"
            download="Brian-Haw-CV.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-gray-900 text-gray-900 text-lg font-medium text-center transition-all duration-200 hover:bg-gray-100 hover:shadow-lg"
          >
            {t("home.downloadCV")}
          </a>
        </div>
      </DominoMotion>
    </div>
  );
}
