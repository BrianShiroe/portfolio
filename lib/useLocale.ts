// lib/useLocale.ts
"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

type Translations = typeof en;

const locales: Record<string, Translations> = { en, ar };

// Type-safe getNested function
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
      const value = getNested(locales[locale as "en" | "ar"], key);
      return typeof value === "string" ? value : key;
    };
  }, [locale]);

  return { locale, t };
};
