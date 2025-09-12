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
        <h1 className="text-8xl font-bold text-gray-900 mb-2">
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
      <div className="flex flex-col sm:flex-row gap-10 lg:gap-5 center items-center w-full max-w-md justify-center">
        <DominoMotion direction="left" delay={0.7}>
          <Link
            href={`/${locale}/email`}
            className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-4xl hover:bg-gray-700 transition text-center"
          >
            {t("home.contactButton")}
          </Link>
        </DominoMotion>
        <DominoMotion direction="right" delay={0.9}>
          <a
            href="/Brian-Haw-CV.pdf"
            download="Brian-Haw-CV.pdf"
            className="flex-1 border border-gray-900 text-gray-900 px-8 py-4 rounded-4xl hover:bg-gray-100 transition text-center cursor-pointer"
          >
            {t("home.downloadCV")}
          </a>
        </DominoMotion>
      </div>
    </div>
  );
}
