"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/useLocale";
import { useState, useEffect, useRef, ReactNode } from "react";
import { Home, User, Code, Folder, Mail, Menu, X } from "lucide-react";

export interface NavLink {
  key: string;
  icon: ReactNode;
}

export const navLinks: NavLink[] = [
  { key: "home", icon: <Home className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" /> },
  { key: "about", icon: <User className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" /> },
  { key: "skills", icon: <Code className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" /> },
  { key: "projects", icon: <Folder className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" /> },
  { key: "contacts", icon: <Mail className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" /> },
];

export default function NavbarMobile() {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Hide navbar on scroll down, show on scroll up
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

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          key="mobile-header"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 p-4"
          role="banner"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link
              href={`/${locale}/home`}
              aria-label={t("navbar.logoAlt") || "Home"}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={120}
                priority
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </Link>

            {/* Language Switch + Burger */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {["en", "ar"].map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}${
                    pathname.replace(/^\/(en|ar)/, "") || "/home"
                  }`}
                  className={clsx(
                    "px-2 py-1 rounded text-sm",
                    locale === lang
                      ? "bg-gray-200 font-semibold"
                      : "hover:bg-gray-100"
                  )}
                  aria-current={locale === lang ? "page" : undefined}
                >
                  {lang.toUpperCase()}
                </Link>
              ))}

              {/* Burger Icon */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="p-2 rounded hover:bg-gray-100 transition"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Dropdown Menu (CSS transition instead of Framer Motion) */}
          <nav
            className={clsx(
              "flex flex-col mt-3 overflow-hidden border-t border-gray-200 transition-[max-height] duration-300",
              menuOpen ? "max-h-96" : "max-h-0"
            )}
          >
            {navLinks.map(({ key, icon }) => {
              const isActive =
                key === "home"
                  ? pathname === `/${locale}` || pathname === `/${locale}/home`
                  : pathname === `/${locale}/${key}`;
              return (
                <Link
                  key={key}
                  href={`/${locale}/${key}`}
                  className={clsx(
                    "flex items-center px-3 py-3 text-sm transition-colors",
                    isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {icon}
                  {t(`navbar.nav.${key}`)}
                </Link>
              );
            })}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
