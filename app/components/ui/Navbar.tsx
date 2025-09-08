// app/components/ui/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Mail, Home, User, Code, Folder } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/useLocale";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  {
    key: "home",
    icon: <Home className="w-10 h-10 lg:w-5 lg:h-5 mr-1 rtl:ml-1 rtl:mr-0" />,
  },
  {
    key: "about",
    icon: <User className="w-10 h-10 lg:w-5 lg:h-5 mr-1 rtl:ml-1 rtl:mr-0" />,
  },
  {
    key: "skills",
    icon: <Code className="w-10 h-10 lg:w-5 lg:h-5 mr-1 rtl:ml-1 rtl:mr-0" />,
  },
  {
    key: "projects",
    icon: <Folder className="w-10 h-10 lg:w-5 lg:h-5 mr-1 rtl:ml-1 rtl:mr-0" />,
  },
  {
    key: "email",
    icon: <Mail className="w-10 h-10 lg:w-5 lg:h-5 mr-1 rtl:ml-1 rtl:mr-0" />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Only hide/show if scroll delta is significant
          if (currentScrollY - lastScrollY.current > 10) {
            // scrolling down
            setShowHeader(false);
          } else if (
            lastScrollY.current - currentScrollY > 10 ||
            currentScrollY < 50
          ) {
            // scrolling up or near top
            setShowHeader(true);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectCategories = [
    {
      title: t("projects.web"),
      items: [
        t("projects.list.shiroeshop"),
        t("projects.list.rumahsekolah"),
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
      <aside className="hidden lg:flex w-72 min-w-[240px] text-gray-900 p-6 border-r border-gray-300 flex-col h-screen sticky top-0">
        <div className="flex items-center justify-between mb-6">
          <Link href={`/${locale}/home`}>
            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          </Link>
          {/* Language Switch beside Logo */}
          <div className="flex space-x-2 rtl:space-x-reverse">
            <Link
              href={`/en${pathname.replace(/^\/(en|ar)/, "") || "/home"}`}
              className={clsx(
                "px-3 py-1 rounded",
                locale === "en"
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              )}
            >
              EN
            </Link>
            <Link
              href={`/ar${pathname.replace(/^\/(en|ar)/, "") || "/home"}`}
              className={clsx(
                "px-3 py-1 rounded",
                locale === "ar"
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              )}
            >
              AR
            </Link>
          </div>
        </div>

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
      <header
        className={`
        lg:hidden w-full min-w-[320px] text-gray-900 p-4 border-b border-gray-300 
        fixed top-0 z-50 bg-white transition-transform duration-500 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        {/* Row 1: Logo + Language Switch */}
        <div className="flex items-center justify-between mb-3 w-full">
          <div className="flex-shrink-0">
            <Link href={`/${locale}/home`}>
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            </Link>
          </div>
          <div className="flex space-x-2 rtl:space-x-reverse flex-shrink-0">
            <Link
              href={`/en${pathname.replace(/^\/(en|ar)/, "") || "/home"}`}
              className={clsx(
                "px-2 py-1 rounded",
                locale === "en"
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              )}
            >
              EN
            </Link>
            <Link
              href={`/ar${pathname.replace(/^\/(en|ar)/, "") || "/home"}`}
              className={clsx(
                "px-2 py-1 rounded",
                locale === "ar"
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              )}
            >
              AR
            </Link>
          </div>
        </div>

        {/* Row 2: Navigation */}
        <nav className="flex w-full">
          {navLinks.map(({ key, icon }) => (
            <Link
              key={key}
              href={`/${locale}/${key}`}
              className={clsx(
                "flex-1 flex items-center justify-center rounded hover:bg-gray-100 transition text-sm",
                pathname === `/${locale}/${key}` && "bg-gray-100 font-semibold"
              )}
              style={{
                padding: "clamp(0.25rem, 2vw, 0.75rem)",
              }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  width: "clamp(1.5rem, 8vw, 2.5rem)",
                  height: "clamp(1.5rem, 8vw, 2.5rem)",
                }}
              >
                {icon}
              </span>
              <span className="hidden">{t(`nav.${key}`)}</span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
