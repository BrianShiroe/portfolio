// app/components/ui/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Mail, Home, User, Code, Folder } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/useLocale";

const navLinks = [
  { key: "home", icon: <Home className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
  { key: "about", icon: <User className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
  { key: "skills", icon: <Code className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
  { key: "projects", icon: <Folder className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
  { key: "email", icon: <Mail className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const { locale, t } = useLocale();

  const projectCategories = [
    {
      title: t("projects.web"),
      items: [
        t("projects.list.shiroeshop"),
        t("projects.list.rumahssekolah"),
        t("projects.list.luka"),
        t("projects.list.editorial"),
        t("projects.list.web_editorial"),
        t("projects.list.cc_cafeteria"),
      ],
    },
    {
      title: t("projects.ml"),
      items: [
        t("projects.list.collective"),
        t("projects.list.fire"),
        t("projects.list.smoke"),
        t("projects.list.flood"),
        t("projects.list.landslide"),
      ],
    },
    {
      title: t("projects.game"),
      items: [
        t("projects.list.wob_cob"),
        t("projects.list.goddess"),
        t("projects.list.shadow"),
        t("projects.list.climb"),
      ],
    },
  ];

  const contactLinks = [
    { name: t("contact.linkedin"), href: "https://linkedin.com" },
    { name: t("contact.github"), href: "https://github.com" },
    { name: t("contact.itchio"), href: "https://itch.io" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden sm:flex w-72 text-gray-900 p-6 border-r border-gray-300 flex-col h-screen">
        <Link href={`/${locale}/home`}>
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </Link>

        {/* Navigation */}
        <nav className="mb-6 border-b border-gray-300 pb-4">
          {navLinks.map(({ key, icon }) => (
            <Link
              key={key}
              href={`/${locale}/${key}`}
              className={clsx(
                "flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-sm",
                pathname === `/${locale}/${key}` && "bg-gray-100 font-semibold"
              )}
            >
              {icon}
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>

        {/* Projects */}
        <section className="border-b border-gray-300 pb-4 mb-4 flex-1 overflow-y-auto min-h-[100px]">
          {projectCategories.map(({ title, items }) => (
            <div key={title} className="mb-4">
              <h3 className="text-xs uppercase text-gray-500 mb-2">{title}</h3>
              <ul className="space-y-1 pl-2">
                {items.map((proj) => (
                  <li
                    key={proj}
                    className="text-sm text-gray-700 hover:text-black cursor-pointer"
                  >
                    {proj}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-xs uppercase text-gray-500 mb-2">
            {t("contact.linkedin")}
          </h3>
          <ul className="space-y-1 pl-2">
            {contactLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-black"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      {/* Mobile Header */}
      <header className="sm:hidden w-full text-gray-900 p-4 border-b border-gray-300 flex items-center justify-between">
        <Link href={`/${locale}/home`}>
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
        </Link>
        <nav className="flex space-x-2">
          {navLinks.map(({ key, icon }) => (
            <Link
              key={key}
              href={`/${locale}/${key}`}
              className={clsx(
                "flex items-center px-2 py-1 rounded hover:bg-gray-100 transition text-sm",
                pathname === `/${locale}/${key}` && "bg-gray-100 font-semibold"
              )}
            >
              {icon}
              <span className="hidden">{t(`nav.${key}`)}</span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
