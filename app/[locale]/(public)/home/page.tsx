"use client";
import { useLocale } from "@/lib/useLocale";
import Link from "next/link";
import DominoMotion from "@/app/components/ui/DominoMotion";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  const { locale, t } = useLocale();

  return (
    <>
      <Head>
        <title>{`${t("home.name")} | ${t("home.role")}`}</title>
        <meta
          name="description"
          content={`Hi, I'm ${t("home.name")}, a ${t("home.role")}. ${t(
            "home.greeting"
          )}`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Web Developer, Portfolio, Brian Ong Haw, Web Developer, Software Engineer"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${t("home.name")} | ${t("home.role")}`}
        />
        <meta
          property="og:description"
          content={`Hi, I'm ${t("home.name")}, a ${t("home.role")}. ${t(
            "home.greeting"
          )}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourdomain.com/${locale}`} />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${t("home.name")} | ${t("home.role")}`}
        />
        <meta
          name="twitter:description"
          content={`Hi, I'm ${t("home.name")}, a ${t("home.role")}. ${t(
            "home.greeting"
          )}`}
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

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
              href={`/${locale}/contacts`}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gray-900 text-white text-lg font-medium text-center transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"
            >
              {t("home.contactButton")}
            </Link>

            {/* <a
              href="/Brian-Haw-CV.pdf"
              download="Brian-Haw-CV.pdf"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-gray-900 text-gray-900 text-lg font-medium text-center transition-all duration-200 hover:bg-gray-100 hover:shadow-lg"
            >
              {t("home.downloadCV")}
            </a> */}
            <a
              href="https://github.com/BrianShiroe/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 text-white text-lg font-medium text-center transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"
            >
              <FaGithub className="w-6 h-6" />
              Github
            </a>
          </div>
        </DominoMotion>

        {/* GitHub Link */}
        <DominoMotion direction="up" delay={0.9}>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-6">
            {/* <a
              href="https://github.com/BrianShiroe/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gray-900 text-white text-lg font-medium text-center transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"
            >
              <FaGithub className="w-6 h-6" />
              Github
            </a> */}
          </div>
        </DominoMotion>
      </div>
    </>
  );
}
