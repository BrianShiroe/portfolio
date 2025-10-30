"use client";
import Head from "next/head";
import HomeSectionOne from "@/app/components/home-section-one";
import { useLocale } from "@/lib/useLocale";

export default function HomePage() {
  const { locale, t } = useLocale();

  return (
    <>
      <Head>
        <title>{`${t("home.name")} | ${t("home.role")}`}</title>
        <meta
          name="description"
          content={`Hi, I'm ${t("home.name")}, a ${t("home.role")}. ${t("home.greeting")}`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Web Developer, Portfolio, Brian Ong Haw, Web Developer, Software Engineer"
        />
        <meta property="og:title" content={`${t("home.name")} | ${t("home.role")}`} />
        <meta
          property="og:description"
          content={`Hi, I'm ${t("home.name")}, a ${t("home.role")}. ${t("home.greeting")}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://brianshiroe.vercel.app/${locale}`} />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${t("home.name")} | ${t("home.role")}`}
        />
        <meta
          name="twitter:description"
          content={`Hi, I'm ${t("home.name")}, a ${t("home.role")}. ${t("home.greeting")}`}
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <HomeSectionOne />
    </>
  );
}
