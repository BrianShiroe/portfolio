"use client";
import Image from "next/image";
import { User, GraduationCap } from "lucide-react";
import { useLocale } from "@/lib/useLocale";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="self-start text-4xl font-semibold mb-6">
        {t("about.title")}
      </h1>

      {/* Profile + Intro */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-center w-full max-w-4xl my-10">
        <Image
          src="/images/profile.png"
          alt={t("about.title")}
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
          priority
        />

        <div className="w-full border-t lg:border-t-0 lg:border-l border-gray-300 lg:pl-10 pt-6 lg:pt-0">
          <p
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: t("about.intro.line1") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: t("about.intro.line2") }}
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Card 1: Basic Info */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-lg border-t-0">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-8 h-8 text-gray-800" />
            <h2 className="text-xl font-semibold">{t("about.cards.basicInfo.title")}</h2>
          </div>
          <p className="mb-2 text-sm text-gray-600">{t("about.cards.basicInfo.subtitle")}</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <strong>{t("about.cards.basicInfo.ageLabel")}:</strong> {t("about.cards.basicInfo.age")}
            </li>
            <li>
              <strong>{t("about.cards.basicInfo.birthLabel")}:</strong> {t("about.cards.basicInfo.birth")}
            </li>
            <li>
              <strong>{t("about.cards.basicInfo.residenceLabel")}:</strong> {t("about.cards.basicInfo.residence")}
            </li>
          </ul>
        </div>

        {/* Card 2: Education */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-lg border-t-0">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-gray-800" />
            <h2 className="text-xl font-semibold">{t("about.cards.education.title")}</h2>
          </div>
          <p className="mb-2 text-sm text-gray-600">{t("about.cards.education.subtitle")}</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <strong>{t("about.cards.education.attendedLabel")}:</strong> {t("about.cards.education.attended")}
            </li>
            <li>
              <strong>{t("about.cards.education.graduatedLabel")}:</strong> {t("about.cards.education.graduated")}
            </li>
            <li>
              <strong>{t("about.cards.education.institutionLabel")}:</strong> {t("about.cards.education.institution")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
