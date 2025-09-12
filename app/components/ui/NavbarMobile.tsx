// app/components/ui/NavbarMobile.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/useLocale";
import { useState, useEffect, useRef } from "react";
import { Home, User, Code, Folder, Mail } from "lucide-react";
import { ReactNode } from "react";

export interface NavLink {
  key: string;
  icon: ReactNode;
}

export const navLinks: NavLink[] = [
  { key: "home", icon: <Home className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
  { key: "about", icon: <User className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
  { key: "skills", icon: <Code className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
  {
    key: "projects",
    icon: <Folder className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" />,
  },
  { key: "email", icon: <Mail className="w-5 h-5 mr-1 rtl:ml-1 rtl:mr-0" /> },
];

export default function NavbarMobile() {
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
          if (currentScrollY - lastScrollY.current > 10) {
            setShowHeader(false);
          } else if (
            lastScrollY.current - currentScrollY > 10 ||
            currentScrollY < 50
          ) {
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

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          key="mobile-header"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden w-full min-w-[320px] text-gray-900 p-4 border-b border-gray-300 
            fixed top-0 z-50 bg-white"
        >
          <div className="flex items-center justify-between mb-3 w-full">
            <Link href={`/${locale}/home`}>
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            </Link>
            <div className="flex space-x-2 rtl:space-x-reverse flex-shrink-0">
              {["en", "ar"].map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}${
                    pathname.replace(/^\/(en|ar)/, "") || "/home"
                  }`}
                  className={clsx(
                    "px-2 py-1 rounded",
                    locale === lang
                      ? "bg-gray-200 font-semibold"
                      : "hover:bg-gray-100"
                  )}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Nav */}
          <nav className="flex w-full">
            {navLinks.map(({ key, icon }) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                <Link
                  href={`/${locale}/${key}`}
                  className={clsx(
                    "flex-1 flex flex-col items-center justify-center rounded hover:bg-gray-100 transition text-sm",
                    pathname === `/${locale}/${key}` &&
                      "bg-gray-100 font-semibold"
                  )}
                  style={{ padding: "clamp(0.25rem, 2vw, 0.75rem)" }}
                >
                  <span
                    className="flex items-center justify-center mb-1"
                    style={{
                      width: "clamp(1.5rem, 8vw, 2.5rem)",
                      height: "clamp(1.5rem, 8vw, 2.5rem)",
                    }}
                  >
                    {icon} {/* icon is shown above text */}
                  </span>
                  <span className="hidden">{t(`navbar.nav.${key}`)}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
