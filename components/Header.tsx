"use client";
import React, { useEffect, useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useAppStore } from "@/store/useStore";

const navItems = [
  { en: "Home", ar: "الرئيسية", href: "#home" },
  { en: "About", ar: "من أنا", href: "#about" },
  { en: "Projects", ar: "المشاريع", href: "#projects" },
  { en: "Skills", ar: "المهارات", href: "#skills" },
  { en: "Services", ar: "الخدمات", href: "#services" },
  { en: "Contact", ar: "اتصل بنا", href: "#contact" },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const { lang, setLang, t, activeSection, setActiveSection } = useAppStore();
  const isAr = lang === "ar";

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Standard Intersection Observer + GSAP Pinning Fallback Validation Engine
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Normal vertical sections work fine here
          if (entry.isIntersecting && entry.target.id !== "skills") {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: 0.1 },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    // Fallback Scroll Validation explicitly handling GSAP pinned horizontal layouts
    const handleScrollTracking = () => {
      const skillsElement = document.getElementById("skills");
      if (!skillsElement) return;

      const rect = skillsElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the pinned skills layout occupies the viewport center frame, force override state
      if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3) {
        if (activeSection !== "skills") {
          setActiveSection("skills");
        }
      }
    };

    window.addEventListener("scroll", handleScrollTracking, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTracking);
    };
  }, [setActiveSection, mounted, activeSection]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    window.history.pushState(null, "", href);
  };

  const switchLocale = () => {
    const nextLocale = lang === "en" ? "ar" : "en";
    const pathnameWithoutLocale = pathname === `/${lang}` ? "" : pathname.replace(new RegExp(`^/${lang}`), "");
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    setIsOpen(false);
    
    // Use transition to synchronize both the store update and router push
    startTransition(() => {
      setLang(nextLocale);
      router.push(`/${nextLocale}${pathnameWithoutLocale}${hash}`);
    });
  };

  if (!mounted) {
    return <header className="sticky top-0 z-[100] w-full h-[65px] md:h-[81px] bg-white border-b border-zinc-100" />;
  }

  return (
    <header
      className="sticky top-0 z-[100] w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl font-mono"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="z-[110] group flex items-center gap-2.5">
          {/* Increased size layout array to h-10 w-10 and detached the zinc border layout constraint */}
          <div className="h-18 w-18 rounded-full flex items-center justify-center shrink-0 overflow-hidden relative">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs md:text-lg font-black uppercase tracking-tighter text-black leading-none">
              BrianShiroe
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
              {t("Web Developer", "مطور ويب")}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/50 p-1 rounded-full border border-zinc-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.en}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`relative px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-black"
                }`}
              >
                <span className="relative z-10">{t(item.en, item.ar)}</span>
                {isActive && (
                  <motion.div
                    layoutId="liquidNav"
                    className="absolute inset-0 bg-black rounded-full shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={switchLocale}
            className="z-[110] h-10 px-4 rounded-full border-2 border-black text-[10px] font-black transition-all hover:bg-black hover:text-[#00C950] active:scale-95 flex items-center justify-center leading-none cursor-pointer"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[110] h-10 w-10 bg-black rounded-full flex flex-col gap-1 items-center justify-center active:scale-95 transition-transform cursor-pointer"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-4.5 bg-white rounded-full origin-center"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-[1.5px] w-4.5 bg-white rounded-full"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-4.5 bg-white rounded-full origin-center"
            />
          </button>
        </div>

        {/* Dubai Indicator */}
        <div className="hidden xl:block">
          <div className="flex items-center gap-2.5 px-3 py-1.5 border border-zinc-100 rounded-full">
            <span className="text-[10px] font-black uppercase text-zinc-400">{t("Dubai, UAE", "دبي، الإمارات")}</span>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: isAr ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isAr ? 100 : -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-[100] flex flex-col p-6 pt-24"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.en}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`flex items-center justify-between px-6 py-5 rounded-2xl border-2 transition-all ${
                      isActive ? "bg-black text-white border-black" : "bg-zinc-50 border-zinc-100 text-zinc-500"
                    }`}
                  >
                    <span className="text-sm font-black uppercase">{t(item.en, item.ar)}</span>
                    <div className={`h-2 w-2 rounded-full ${isActive ? "bg-[#00C950]" : "bg-zinc-200"}`} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}