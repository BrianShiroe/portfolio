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
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const groups = [
    {
      title: t("Web & Ecommerce Development", "تطوير الويب والتجارة الإلكترونية"),
      accent: "bg-[#00C950]",
      items: [
        "WordPress (Custom Themes/Plugins)",
        "Next.js",
        "React",
        "TypeScript",
        "PHP",
        "Node.js",
        "WooCommerce",
        "Shopify",
      ],
    },
    {
      title: t("AI & Automation", "الذكاء الاصطناعي والأتمتة"),
      accent: "bg-black",
      items: [
        "LLM Integration (Google AI Studio API, Gemini, Claude)",
        "Prompt Engineering",
        "AI-Driven Development",
        "Workflow Automation (Zapier)",
        "Agentic Programming",
      ],
    },
    {
      title: t("Web & Infrastructure", "الويب والبنية التحتية"),
      accent: "bg-zinc-800",
      items: ["Cloudflare", "Hostinger", "Server", "DNS", "Domain Management"],
    },
    {
      title: t("Operations & Admin", "العمليات والإدارة"),
      accent: "bg-[#00C950]",
      items: [
        "Odoo ERP (Sales, Accounting, Inventory, Marketing)",
        "Microsoft 365",
        "Google Workspace",
        "Technical Documentation",
      ],
    },
    {
      title: t("Digital Marketing", "التسويق الرقمي"),
      accent: "bg-black",
      items: ["SEO", "Social Media", "Google Ads", "Analytics", "Search Console", "Merchant"],
    },
    {
      title: t("Design & Content", "التصميم والمحتوى"),
      accent: "bg-zinc-400",
      items: ["Figma (UI/UX)", "Canva (Graphics Design)", "CapCut (Video Editing)", "Photography"],
    },
    {
      title: t("Communication & CRM", "الاتصال وإدارة علاقات العملاء"),
      accent: "bg-[#00C950]",
      items: [
        "Client Relationship Building",
        "Pitching & Presentations",
        "Account Operations",
        "Email & Schedule Management",
      ],
    },
    {
      title: t("Finance & Data", "المالية والبيانات"),
      accent: "bg-black",
      items: ["Bookkeeping", "Payment Gateways (Stripe)", "PostgreSQL", "Spreadsheets"],
    },
    {
      title: t("IT Support", "الدعم الفني لتكنولوجيا المعلومات"),
      accent: "bg-zinc-500",
      items: ["Hardware/Software Troubleshooting", "LAN Configuration", "Printer & Device Setup"],
    },
    {
      title: t("Languages", "اللغات"),
      accent: "bg-[#00C950]",
      items: ["English (Professional)", "Filipino (Native)"],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!mounted) return;

    let ctx: gsap.Context;

    const ctxTimeout = setTimeout(() => {
      if (!containerRef.current) return;

      ctx = gsap.context(() => {
        // Track which card is in view to update the pinned active sidebar index
        itemsRef.current.forEach((panel, index) => {
          if (!panel) return;
          ScrollTrigger.create({
            trigger: panel,
            start: "top center+=100",
            end: "bottom center+=100",
            onToggle: (self) => {
              if (self.isActive) {
                setActiveIdx(index);
              }
            },
          });
        });
      }, containerRef);
    }, 100);

    return () => {
      clearTimeout(ctxTimeout);
      if (ctx) ctx.revert();
    };
  }, [mounted]);

  if (!mounted) return <section className="h-screen bg-white" />;

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full min-h-screen bg-white selection:bg-[#00C950] selection:text-white py-20 lg:py-32"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* BACKGROUND DECOR */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
      />

      <div className="mx-auto max-w-7xl w-full px-6 md:px-12 relative z-10">
        {/* --- HEADER --- */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-12 bg-[#00C950]" />
            <span className="text-[11px] font-black text-black uppercase tracking-[0.5em]">
              {t("Neural_Protocol", "البروتوكول_العصبي")}
            </span>
          </div>
          <h2
            className={`font-black uppercase tracking-tighter text-black ${
              isAr ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]" : "text-4xl md:text-6xl lg:text-7xl leading-none"
            }`}
          >
            {isAr ? (
              <>
                ترسانة_<span className="text-[#00C950]">الخبرات</span>
              </>
            ) : (
              <>
                Skill_<span className="text-[#00C950]">Set</span>
              </>
            )}
          </h2>
        </div>

        {/* --- MAIN SPLIT LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDEBAR - Pinned/Sticky on desktop layout */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-auto max-h-[70vh] overflow-y-auto no-scrollbar lg:pr-4">
            <div className="space-y-4 relative">
              {/* Vertical connecting accent strip line */}
              <div className={`absolute top-0 bottom-0 w-[2px] bg-zinc-100 ${isAr ? "right-[11px]" : "left-[11px]"}`} />
              
              {groups.map((group, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      itemsRef.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className="w-full flex items-center gap-4 text-start group/nav focus:outline-none transition-all relative z-10"
                  >
                    {/* Status Dot Ring */}
                    <div
                      className={`h-6 w-6 rounded-full border-2 bg-white flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive ? "border-[#00C950] scale-110" : "border-zinc-200 group-hover/nav:border-black"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          isActive ? "bg-[#00C950] scale-120" : "bg-transparent"
                        }`}
                      />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span
                        className={`text-[10px] font-black tracking-wider transition-colors ${
                          isActive ? "text-[#00C950]" : "text-zinc-400"
                        }`}
                      >
                        [{String(idx + 1).padStart(2, "0")}]
                      </span>
                      <span
                        className={`text-base font-black uppercase tracking-tight truncate transition-colors duration-300 ${
                          isActive ? "text-black text-bold" : "text-zinc-400 group-hover/nav:text-zinc-700"
                        }`}
                      >
                        {group.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT - Dynamic Vertical Scroll Stack */}
          <div className="w-full lg:w-2/3 space-y-20 lg:space-y-32">
            {groups.map((group, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) itemsRef.current[idx] = el;
                }}
                className="scroll-mt-32 border border-zinc-100 rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between min-h-[350px]"
              >
                <div>
                  <div className="relative mb-8 pt-5">
                    <div className={`absolute top-0 ${isAr ? "right-0" : "left-0"} flex items-center gap-2`}>
                      <span className="text-[12px] font-black text-[#00C950]">[{String(idx + 1).padStart(2, "0")}]</span>
                      <div className={`h-1 w-8 ${group.accent}`} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-black italic tracking-tighter break-words">
                      {group.title}
                    </h3>
                  </div>

                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 border-black ${
                      isAr ? "border-r-4 pr-4 sm:pr-6 pl-0" : "border-l-4 pl-4 sm:pl-6 pr-0"
                    }`}
                  >
                    {group.items.map((item, i) => (
                      <div
                        key={i}
                        className="group/item flex items-center justify-between py-3 border-b border-zinc-100 hover:border-[#00C950] transition-all gap-4"
                      >
                        <span className="text-base font-bold text-zinc-500 group-hover/item:text-black transition-colors uppercase tracking-tight break-words">
                          {item}
                        </span>
                        <div className="h-2 w-2 bg-zinc-200 group-hover/item:bg-[#00C950] group-hover/item:scale-150 transition-all rotate-45 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Asymmetric Polygon Accent */}
                <div
                  className={`mt-8 h-8 w-full ${group.accent} opacity-10`}
                  style={{
                    clipPath: isAr
                      ? "polygon(0 0, 100% 0, 100% 100%, 6% 100%)"
                      : "polygon(0 0, 100% 0, 94% 100%, 0% 100%)",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}