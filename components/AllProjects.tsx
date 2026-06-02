"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/useStore";

interface EnterpriseItem {
  title: string;
  category: string;
  href: string;
  tags: string[]; // Custom tech-stack strings attached to each directory entry
}

export function AllProjects() {
  const { lang, t } = useAppStore();
  const isAr = lang === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const enterpriseList: EnterpriseItem[] = [
    // --- Premium Main Collection & Luxury Projects (Top Projects) ---
    {
      title: "GameTree",
      category: t("E-COMMERCE PLATFORM", "منصة تجارة إلكترونية"),
      href: "https://gametree.vercel.app/",
      tags: ["Next.js", "Supabase", "Stripe"],
    },
    {
      title: "AURAX",
      category: t("LUXURY FOOTWEAR", "أحذية فاخرة"),
      href: "https://aurax-luxury-footwear-landing-page.vercel.app/",
      tags: ["React", "Framer Motion"],
    },
    {
      title: "Samurai",
      category: t("AGENCY BRANDING", "هوية الوكالة"),
      href: "https://samurai-theme-web-design-agency-landing-page.brianshiroe.workers.dev/",
      tags: ["Next.JS", "Framer Motion", "Lenis Scroll"],
    },
    {
      title: "Noor Label",
      category: t("FASHION ARCHIVE", "أرشيف الأزياء"),
      href: "https://noor-label.vercel.app/",
      tags: ["Next.js", "Shopify", "Lenis Scroll"],
    },
    {
      title: "Zhel Jewelry",
      category: t("DIGITAL CATALOG", "كتالوج رقمي"),
      href: "https://zhel-gold-jewelry.vercel.app/",
      tags: ["Next.js"],
    },
    {
      title: "Blackscale",
      category: t("MODERN REAL ESTATE", "عقارات عصرية"),
      href: "https://greyscale-real-estate.vercel.app/",
      tags: ["Next.js"],
    },
    {
      title: "Awards Portfolio",
      category: t("CREATIVE PORTFOLIO", "ملف أعمال إبداعي"),
      href: "https://award-winning-website-9d6.pages.dev/",
      tags: ["Astro", "GSAP", "SCSS"],
    },
    {
      title: "Zorene's Portfolio",
      category: t("CREATIVE PORTFOLIO", "ملف أعمال إبداعي"),
      href: "https://maria-zorene.vercel.app/",
      tags: ["Next.js"],
    },

    // --- Enterprise Systems, Custom APIs & Platform Ecosystem ---
    {
      title: "iDesigns Art",
      category: t("CREATIVE PORTFOLIO", "أرشيف إبداعي"),
      href: "https://idesignsart.com/",
      tags: ["WordPress", "Elementor"],
    },
    {
      title: "iDesigns Tech",
      category: t("TECH PORTAL", "بوابة تقنية"),
      href: "https://idesignstech.com/",
      tags: ["Wordpress", "Elementor"],
    },
    {
      title: "KBH Real Estate",
      category: t("PROPERTY PORTAL", "بوابة عقارية"),
      href: "https://www.kbhrealestate.ae/",
      tags: ["Odoo ERP", "Multilingual"],
    },
    {
      title: "Munem",
      category: t("BUSINESS PLATFORM", "منصة أعمال"),
      href: "https://munem.ae/",
      tags: ["Wordpress", "Elementor", "Multilingual"],
    },
    {
      title: "DGC Group",
      category: t("ENTERPRISE HUB", "مجموعة تجارية"),
      href: "https://dgcgroup.ae/",
      tags: ["WordPress", "Elementor"],
    },
    {
      title: "Sofia Water Sudan",
      category: t("E-COMMERCE SYSTEM", "نظام تجارة إلكترونية"),
      href: "https://sofiawatersudan.com/",
      tags: ["WordPress", "Elementor", "Multilingual"],
    },
    {
      title: "Wazeen Law",
      category: t("LEGAL SYSTEM", "منصة قانونية"),
      href: "https://wazeenlaw.sa/",
      tags: ["WordPress", "Arabic"],
    },
    {
      title: "Al Nibras",
      category: t("EDUCATIONAL GROUP", "مجموعة تعليمية"),
      href: "https://www.alnibras.ae/ar",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "J2oud",
      category: t("PERFUME LUXURY", "عطور فاخرة"),
      href: "https://j2oud.ae/ar/",
      tags: ["WordPress", "WooCommerce", "Custom Code"],
    },
    {
      title: "BareFox",
      category: t("KINETIC FOOTWEAR", "أحذية حركية هندسية"),
      href: "https://barefox.vercel.app/",
      tags: ["Next.js"],
    },
    {
      title: "Al Noblaa Group",
      category: t("HOLDING SITE", "الموقع الرئيسي للمجموعة"),
      href: "https://www.alnoblaa.com/",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "Al Noblaa Advanced",
      category: t("SUBSIDIARY DIVISION", "قطاع متقدم"),
      href: "https://advanced.alnoblaa.com/",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "Al Noblaa Transport",
      category: t("LOGISTICS PLATFORM", "منصة لوجستية والنقل"),
      href: "https://transport.alnoblaa.com/",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "Al Noblaa Petroleum",
      category: t("ENERGY UTILITIES", "قطاع النفط والطاقة"),
      href: "https://petroleum.alnoblaa.com/",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "Al Noblaa Mining",
      category: t("RESOURCES SECTOR", "قطاع التعدين"),
      href: "https://mining.alnoblaa.com/",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "Al Noblaa MultiActivities",
      category: t("COMMERCIAL SECTOR", "تعدد الأنشطة التجارية"),
      href: "https://multiactivities.alnoblaa.com/",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "Al Noblaa Jedian",
      category: t("SUBSIDIARY DIVISION", "قطاع جديان"),
      href: "https://jedian.alnoblaa.com/",
      tags: ["WordPress", "Multilingual"],
    },
    {
      title: "Sanco Group",
      category: t("HOLDING SITE", "الموقع الرئيسي لمجموعة سانكو"),
      href: "https://darkgoldenrod-gerbil-256214.hostingersite.com/",
      tags: ["WordPress"],
    },
    {
      title: "Sanco Environmental Services",
      category: t("ENVIRONMENTAL SERVICES", "الخدمات البيئية"),
      href: "https://aquamarine-wasp-418509.hostingersite.com/",
      tags: ["WordPress"],
    },
    {
      title: "Sanco Electromechanical Services",
      category: t("ELECTROMECHANICAL SERVICES", "خدمات كهروميكانيكية"),
      href: "https://blueviolet-chicken-805048.hostingersite.com/",
      tags: ["WordPress"],
    },
    {
      title: "Sanco Facility Management",
      category: t("FACILITY MANAGEMENT", "إدارة المرافق"),
      href: "https://linen-jay-143391.hostingersite.com/",
      tags: ["WordPress"],
    },
    {
      title: "WoB & CoB",
      category: t("CO-OP PUZZLE PLATFORMER", "لعبة منصات وألغاز تعاونية"),
      href: "https://mun-development.itch.io/wob-cob",
      tags: ["Unity", "C#", "2d"],
    },
    {
      title: "The Goddess' Trial",
      category: t("SPEEDJAM PLATFORMER", "لعبة منصات وتحدي سريع"),
      href: "https://mun-development.itch.io/the-goddess-trial",
      tags: ["Unity", "GDScript", "2d"],
    },
    {
      title: "Shadow Monarch: The Cat's Adventure",
      category: t("2D ACTION ROGUELIKE", "لعبة أكشن ومغامرات ثنائية الأبعاد"),
      href: "https://mun-development.itch.io/shadow-monarch-the-cats-adventure",
      tags: ["Unity", "GDScript", "2d"],
    },
  ];

  if (!mounted) {
    return (
      <section
        id="enterprise-projects"
        className="w-full bg-[#0A0A0A] py-16 md:py-32 px-6 text-white border-t border-zinc-900"
      >
        <div className="mx-auto max-w-7xl h-[400px]" />
      </section>
    );
  }

  const textAlignmentClass = isAr ? "text-right" : "text-left";
  const reverseTextAlignmentClass = isAr ? "text-left" : "text-right";

  return (
    <section
      id="enterprise-projects"
      className="w-full bg-[#0A0A0A] py-16 md:py-32 px-4 sm:px-6 font-mono relative overflow-hidden border-t border-zinc-900"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* HUD Background Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16 space-y-3 md:space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span
              className={`text-[10px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Production Directory", "سجل المشاريع الحية والمؤسسية")}
            </span>
          </div>
          <h2
            className={`font-black uppercase tracking-tighter text-white ${isAr ? "text-2xl md:text-4xl lg:text-5xl leading-[1.2]" : "text-2xl md:text-5xl lg:text-6xl leading-none"}`}
          >
            {isAr ? (
              <>
                جميع_<span className="text-[#00C950]">المشاريع</span>
              </>
            ) : (
              <>
                All_<span className="text-[#00C950]">Projects</span>
              </>
            )}
          </h2>
        </motion.div>

        {/* Two-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-x-8 lg:gap-y-0 w-full">
          {enterpriseList.map((item, index) => {
            const halfLength = Math.ceil(enterpriseList.length / 2);

            const desktopOrder = index < halfLength ? index * 2 : (index - halfLength) * 2 + 1;

            return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: isAr ? -4 : 4 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ order: typeof window !== "undefined" && window.innerWidth >= 1024 ? desktopOrder : index }}
                className="flex items-center justify-between p-4 md:px-6 md:py-5 border border-zinc-900 lg:border-x-0 lg:border-t-0 lg:border-b border-b-zinc-800/40 bg-zinc-950/20 lg:bg-transparent hover:bg-zinc-900/60 transition-colors duration-200 group rounded-sm lg:rounded-none cursor-pointer"
              >
                {/* Project ID and Core Title + Dynamic Framework Badges */}
                <div className={`flex items-start gap-3 w-3/4 ${textAlignmentClass}`}>
                  <span className="text-zinc-600 font-bold text-xs pt-0.5 select-none">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  <div className="flex flex-col gap-1 w-full">
                    <span className="text-white font-black tracking-tight text-sm md:text-base group-hover:text-[#00C950] transition-colors truncate max-w-[180px] sm:max-w-xs md:max-w-sm">
                      {item.title}
                    </span>

                    <div className="flex flex-wrap items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold text-zinc-500 tracking-wider uppercase whitespace-nowrap">
                        {item.category}
                      </span>
                      {item.tags.length > 0 && (
                        <>
                          <span className="text-zinc-800 text-[10px] select-none">|</span>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-black uppercase rounded bg-zinc-900 text-zinc-400 tracking-wide border border-zinc-800 group-hover:border-zinc-700/60 group-hover:text-zinc-300 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Secure Launch Status Indicators */}
                <div className={`w-1/4 ${reverseTextAlignmentClass}`}>
                  <div className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[#00C950] transition-colors duration-200">
                    <span className="hidden sm:inline">{t("LAUNCH //", "زيارة الموقع //")}</span>
                    <span className="inline sm:hidden">{t("OPEN //", "فتح //")}</span>
                    <svg
                      className={`w-3 h-3 transform transition-transform duration-300 ${
                        isAr
                          ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-y-1"
                          : "group-hover:translate-x-1 group-hover:-translate-y-1"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
