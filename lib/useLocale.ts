// lib/useLocale.ts
"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

// ---- English ----
import enGeneral from "../locales/en/general.json";
import enSkills from "../locales/en/skills.json";
import enProjects from "../locales/en/projects.json";
import enNavbar from "../locales/en/navbar.json";

// ---- Arabic ----
import arGeneral from "../locales/ar/general.json";
import arSkills from "../locales/ar/skills.json";
import arProjects from "../locales/ar/projects.json";
import arNavbar from "../locales/ar/navbar.json";

// Merge per-locale JSONs into one object
const en = {
  general: enGeneral,
  skills: enSkills,
  projects: enProjects,
  navbar: enNavbar,
};

const ar = {
  general: arGeneral,
  skills: arSkills,
  projects: arProjects,
  navbar: arNavbar,
};

type Translations = typeof en;

const locales: Record<string, Translations> = { en, ar };

// Utility to access nested keys like "navbar.home"
const getNested = (obj: unknown, key: string): unknown => {
  return key.split(".").reduce((acc, k) => {
    if (acc && typeof acc === "object" && k in acc) {
      return (acc as Record<string, unknown>)[k];
    }
    return undefined;
  }, obj as unknown);
};

export const useLocale = () => {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";

  const t = useMemo(() => {
    return (key: string): string => {
      const localeObj = locales[locale as "en" | "ar"];
      if (!localeObj) return key; // fallback if locale not found

      // First try general
      const generalValue = getNested(localeObj.general, key);
      if (typeof generalValue === "string") return generalValue;

      // Fallback to full locales object
      const value = getNested(localeObj, key);
      return typeof value === "string" ? value : key;
    };
  }, [locale]);

  return { locale, t };
};
