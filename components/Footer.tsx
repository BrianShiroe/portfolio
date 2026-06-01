"use client";
import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

export function Footer() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = locale || "en";

  const navLinks = [
    { name: t("Home", "الرئيسية"), href: "#home", type: "anchor" },
    { name: t("About Me", "من أنا"), href: "/about", type: "page" },
    { name: t("Projects / Work", "المشاريع"), href: "/projects", type: "page" },
    { name: t("Custom Tools", "الأدوات"), href: "/playground", type: "page" },
    { name: t("Contact", "تواصل معي"), href: "/contact", type: "page" },
  ];

  const resolveHref = (href: string, type: string) => {
    if (type === "page") {
      return `/${currentLocale}${href}`;
    }
    return href;
  };

  const handleScroll = (e: React.MouseEvent, href: string, type: string) => {
    e.preventDefault();
    const routeTarget = `/${currentLocale}${href}`;

    if (type === "page") {
      router.push(routeTarget);
      return;
    }

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (pathname !== `/${currentLocale}`) {
      router.push(routeTarget);
      return;
    }

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (elem) {
      const offset = 80; // should match Header offset
      const elementPosition = elem.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <footer className="w-full bg-white font-mono" dir={isAr ? "rtl" : "ltr"}>
      <div className="w-full border-t-[8px] md:border-t-[12px] border-black bg-black py-16 md:py-24 px-5 md:px-6 text-white">
        <motion.div
          className="mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20">
            
            {/* IDENTITY SECTION */}
            <motion.div variants={itemVariants} className="flex flex-col items-start w-full lg:w-1/3">
              <div className="flex flex-col">
                <span className="font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none">
                  BrianShiroe
                </span>
                <span className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mt-2">
                  {t("Web Developer", "مطور ويب")}
                </span>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 bg-[#00C950] rounded-full animate-pulse shadow-[0_0_10px_#00C950]" />
                  <span className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">
                    {t("Availability: Open for Projects", "الحالة: متاح للمشاريع")}
                  </span>
                </div>
                <a
                  href="mailto:Brianshiroe@gmail.com"
                  className="text-lg md:text-xl font-black text-[#00C950] hover:text-white transition-colors tracking-tight"
                >
                  Brianshiroe@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-10">
                {[
                  { id: "github-brands-solid-full", url: "https://github.com/BrianShiroe" },
                  { id: "linkedin-brands-solid-full", url: "https://www.linkedin.com/in/brianshiroe/" },
                ].map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4 }}
                    className="group bg-zinc-900 h-12 w-12 flex items-center justify-center rounded-xl border border-zinc-800 hover:border-[#00C950] transition-colors"
                  >
                    <div
                      className="h-5 w-5 bg-white group-hover:bg-[#00C950] transition-colors"
                      style={{
                        mask: `url(/icons/${social.id}.svg) no-repeat center / contain`,
                        WebkitMask: `url(/icons/${social.id}.svg) no-repeat center / contain`,
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* NAVIGATION GRID */}
            <motion.div variants={itemVariants} className="w-full lg:w-auto">
              <h4 className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.3em] mb-10 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-zinc-800" />
                {t("Sitemap", "خريطة الموقع")}
              </h4>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {navLinks.map((link) => {
                  const linkHref = resolveHref(link.href, link.type);
                  return (
                    <a
                      key={link.name}
                      href={linkHref}
                      onClick={(e) => handleScroll(e, link.href, link.type)}
                      className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-[#00C950] transition-all flex items-center gap-2 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00C950]">/</span>
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* ACTION SECTION */}
            <motion.div variants={itemVariants} className="flex flex-col items-start lg:items-end w-full lg:w-auto">
              <div className="space-y-6 w-full lg:w-auto">
                <p className={`text-zinc-500 text-xs font-bold uppercase tracking-widest ${isAr ? "text-right" : "text-left lg:text-right"}`}>
                  {t("Based in Dubai, UAE", "مقرنا في دبي، الإمارات")}
                </p>
                <motion.a
                  href="https://wa.me/971503592133"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4, y: 4, boxShadow: "none" }}
                  className="block text-center text-black bg-[#00C950] px-10 py-6 font-black uppercase tracking-tighter shadow-[6px_6px_0px_0px_white] transition-all text-sm md:text-base border-2 border-black"
                >
                  {t("Start a Conversation", "ابدأ محادثة الآن")}
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM BAR */}
          <motion.div
            variants={itemVariants}
            className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                © 2026 // BrianShiroe
              </span>
              <span className="text-[9px] font-bold text-zinc-700 uppercase">
                {t("Next.js // Odoo // SEO Specialist", "نكست جي إس // أودو // خبير سيو")}
              </span>
            </div>

            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-1.5 w-8 rounded-full ${i === 0 ? "bg-[#00C950]" : "bg-zinc-800"}`} />
              ))}
            </div>

            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest text-center md:text-right">
              {t("Crafted with Neural Logic", "صُنع بمنطق عصبي")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}