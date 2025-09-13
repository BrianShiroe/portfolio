// app/components/ui/NavbarDesktop.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/useLocale";
import { useEffect, useState } from "react";

interface ProjectItem {
  id: string;
  title: string;
  href: string;
}
interface ProjectCategory {
  category: string;
  items: ProjectItem[];
}

const navLinks = [
  { key: "home" },
  { key: "about" },
  { key: "skills" },
  { key: "projects" },
  { key: "email" },
];

export default function NavbarDesktop() {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const [localizedProjects, setLocalizedProjects] = useState<ProjectCategory[]>(
    []
  );
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await import(`@/locales/${locale}/projects.json`);
        setLocalizedProjects(data.projects);
        setOpenCategories(
          data.projects.map((cat: ProjectCategory) => cat.category)
        ); // <-- open all
      } catch {
        setLocalizedProjects([]);
      }
    };
    loadProjects();
  }, [locale]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const contactLinks = [
    {
      name: t("navbar.contact.linkedin"),
      href: "https://linkedin.com/in/brianshiroe/",
    },
    {
      name: t("navbar.contact.github"),
      href: "https://github.com/BrianShiroe/",
    },
    {
      name: t("navbar.contact.itchio"),
      href: "https://mun-development.itch.io/",
    },
  ];

  return (
    <aside className="hidden lg:flex w-72 min-w-[240px] text-gray-900 p-6 border-r border-gray-300 flex-col h-screen sticky top-0">
      {/* Logo + Lang Switch */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-6"
      >
        <Link href={`/${locale}/home`}>
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
        </Link>

        <div className="flex space-x-2 rtl:space-x-reverse">
          {["en", "ar"].map((lang) => (
            <Link
              key={lang}
              href={`/${lang}${pathname.replace(/^\/(en|ar)/, "") || "/home"}`}
              className={clsx(
                "px-3 py-1 rounded transition",
                locale === lang
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              )}
            >
              {lang.toUpperCase()}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="mb-6 border-b border-gray-300 pb-4"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {navLinks.map(({ key }) => (
          <motion.div
            key={key}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              href={`/${locale}/${key}`}
              className={clsx(
                "flex items-center px-3 py-2 rounded hover:bg-gray-100 transition text-sm",
                pathname === `/${locale}/${key}` && "bg-gray-100 font-semibold"
              )}
            >
              {t(`navbar.nav.${key}`)}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Projects */}
      <section className="border-b border-gray-300 pb-4 mb-4 flex-1 overflow-y-auto min-h-[100px]">
        <h3 className="text-xs uppercase text-gray-500 mb-2">
          {t("navbar.categories.projects")}
        </h3>
        <ul className="space-y-1 pl-2 rtl:pr-2">
          <AnimatePresence>
            {localizedProjects.map((category) => (
              <motion.li key={category.category}>
                {/* Category title */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full text-left rtl:text-right text-sm text-gray-500 hover:text-black cursor-pointer transition mb-1 pl-2 rtl:pr-2"
                >
                  {category.category}
                </button>

                {/* Category projects */}
                <AnimatePresence>
                  {openCategories.includes(category.category) && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 rtl:pr-4 space-y-1 relative overflow-hidden"
                    >
                      {/* Vertical line */}
                      <span className="absolute left-2 rtl:right-2 top-2 bottom-2 w-[1px] bg-gray-300"></span>

                      {category.items.map((proj) => (
                        <motion.li
                          key={proj.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="relative text-sm text-gray-700 hover:text-black cursor-pointer pl-2 rtl:pr-2"
                        >
                          <Link href={`/${locale}${proj.href}`}>
                            {proj.title}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xs uppercase text-gray-500 mb-2">
          {t("navbar.contact.title")}
        </h3>
        <ul className="space-y-1 pl-2">
          {contactLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-black transition"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </motion.section>
    </aside>
  );
}
