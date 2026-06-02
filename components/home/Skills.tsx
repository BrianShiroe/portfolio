"use client";
import React, { useRef, useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Skills() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const groups = [
    {
      title: t("Frontend", "الواجهة الأمامية"),
      accent: "bg-[#00C950]",
      items: ["JavaScript (ES6+)", "TypeScript", "Next.js 14/15", "React", "Tailwind CSS"],
    },
    {
      title: t("Backend & Logic", "الخلفية والمنطق"),
      accent: "bg-black",
      items: ["Node.js", "Python (Flask)", "PHP", "RESTful APIs", "Webhooks"],
    },
    {
      title: t("Infrastructure", "البنية التحتية"),
      accent: "bg-zinc-100",
      items: ["Git/GitHub", "Cloudflare (DNS/Workers)", "Vercel", "Railway", "CI/CD Pipelines"],
    },
    {
      title: t("Database Architecture", "بنية قواعد البيانات"),
      accent: "bg-[#00C950]",
      items: ["PostgreSQL", "Supabase", "Redis", "Schema Design", "Auth & RLS"],
    },
    {
      title: t("AI & Automation", "الذكاء الاصطناعي"),
      accent: "bg-black",
      items: ["Computer Vision", "YOLOv11", "Object Detection", "Neural Protocol", "Prompt Engineering"],
    },
    {
      title: t("Platforms & ERP", "المنصات والأنظمة"),
      accent: "bg-zinc-100",
      items: ["Odoo ERP", "Shopify Liquid", "WordPress CMS", "Headless Commerce"],
    },
    {
      title: t("SEO & Analytics", "السيو والتحليلات"),
      accent: "bg-[#00C950]",
      items: ["Search Console", "GA4", "Google Ads", "Merchant Center", "Schema Markup"],
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) return;

    let ctx: gsap.Context;

    // Timeout ensures DOM elements are completely painted before calculating dimensions
    const ctxTimeout = setTimeout(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // Scoping GSAP explicitly to the section wrapper prevents parent node unmounting mismatch crashes
      ctx = gsap.context(() => {
        const getXDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => (isAr ? getXDistance() : -getXDistance()),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${track.scrollWidth + window.innerWidth}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }, sectionRef); // Scopes selectors inside this container element safely
    }, 100);

    return () => {
      clearTimeout(ctxTimeout);
      if (ctx) {
        ctx.revert(); // Reverts DOM layout mutations safely without dropping unattached elements
      }
    };
  }, [mounted, isAr]);

  if (!mounted) return <section className="h-screen bg-white" />;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full h-screen overflow-hidden bg-white selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* BACKGROUND DECOR */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="h-full flex flex-col justify-center">
        {/* --- HEADER --- */}
        <div className="mx-auto max-w-7xl w-full px-6 md:px-12 mb-12 md:mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-12 bg-[#00C950]" />
            <span className="text-[11px] font-black text-black uppercase tracking-[0.5em]">
              {t("Neural_Protocol", "البروتوكول_العصبي")}
            </span>
          </div>

          <h2 className={`font-black uppercase tracking-tighter text-black ${isAr ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]" : "text-4xl md:text-6xl lg:text-7xl leading-none"}`}>
            {isAr ? (
              <>ترسانة_<span className="text-[#00C950]">الخبرات</span></>
            ) : (
              <>Skill_<span className="text-[#00C950]">Set</span></>
            )}
          </h2>
        </div>

        {/* --- TRACK --- */}
        <div
          ref={trackRef}
          className="flex gap-12 md:gap-16 px-6 md:px-12 lg:px-24 w-max items-start will-change-transform"
        >
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="flex flex-col min-w-[320px] md:min-w-[450px] shrink-0 group/card"
            >
              <div className="relative mb-10">
                <div className={`absolute -top-4 ${isAr ? "right-0" : "left-0"} flex items-center gap-2`}>
                  <span className="text-[12px] font-black text-[#00C950]">[{String(idx + 1).padStart(2, '0')}]</span>
                  <div className={`h-1 w-8 ${group.accent}`} />
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase text-black italic tracking-tighter">
                  {group.title}
                </h3>
              </div>

              <div className={`grid grid-cols-1 gap-1 border-black ${isAr ? "border-r-4 pr-6 pl-0" : "border-l-4 pl-6 pr-0"}`}>
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="group/item flex items-center justify-between py-2 border-b border-zinc-100 hover:border-[#00C950] transition-all"
                  >
                    <span className="text-lg md:text-xl font-bold text-zinc-400 group-hover/item:text-black transition-colors uppercase tracking-tight">
                      {item}
                    </span>
                    <div className="h-2 w-2 bg-zinc-200 group-hover/item:bg-[#00C950] group-hover/item:scale-150 transition-all rotate-45" />
                  </div>
                ))}
              </div>
              
              <div className={`mt-8 h-20 w-full ${group.accent} opacity-10 group-hover/card:opacity-100 transition-opacity duration-500`} 
                   style={{ clipPath: isAr ? 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' : 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }} />
            </div>
          ))}
          
          <div className="w-[20vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}