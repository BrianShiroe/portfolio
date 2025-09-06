// lib/useLocale.ts
"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

type Translations = typeof en;

const locales: Record<string, Translations> = { en, ar };

const getNested = (obj: any, key: string) => {
  return key.split('.').reduce((acc, k) => acc?.[k], obj);
};

export const useLocale = () => {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";

  const t = useMemo(() => {
    return (key: string) => getNested(locales[locale as "en" | "ar"], key) || key;
  }, [locale]);

  return { locale, t };
};
