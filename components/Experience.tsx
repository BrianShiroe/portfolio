"use client";
import { motion, Variants } from "framer-motion";
import { useLocale } from "next-intl";
import { ExperienceCard } from "./ExperienceCard";

export interface ExperienceItem {
  period: string;
  company: string;
  location: string;
  role: string;
  status: string;
  stack: string;
  tasks: string[];
  color: string;
}

export function Experience() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const history: ExperienceItem[] = [
    {
      period: t("MAY 2025 – MAY 2026", "مايو ٢٠٢٥ – مايو ٢٠٢٦"),
      company: t("ITD INNOVATION", "آي تي دي للابتكار"),
      location: t("DUBAI, UAE", "دبي، الإمارات"),
      role: t("Full Stack Developer & IT Operations Specialist", "مطور فول ستاك وأخصائي عمليات تقنية"),
      status: t("COMPLETED", "مكتمل"),
      stack: "Next.js / Medusa.js / Cloudflare Workers / Odoo API / Agentic AI",
      tasks: [
        t(
          "Built fast, component-based, & headless websites for e-commerce, corporate, & landing pages",
          "بناء مواقع ويب سريعة ومكونة من أجزاء مستقلة (Headless) للتجارة الإلكترونية والشركات",
        ),
        t(
          "Developed backend functionality (Shopify, WordPress, WooCommerce) and Payment Gateways",
          "تطوير وظائف الخلفية البرمجية لبوابات الدفع وأنظمة شوبيفاي، ووردبريس، وووكومرس",
        ),
        t(
          "Managed deployments & domain infrastructure via AEserver, Cloudflare, and Hostinger",
          "إدارة عمليات النشر وبنية النطاقات التحتية عبر AEserver وCloudflare وHostinger",
        ),
        t(
          "Set up and customized Odoo ERP via custom APIs, automating cross-platform workflows",
          "إعداد وتخصيص نظام Odoo ERP بربط برمجيات مخصصة لأتمتة سير العمل عبر المنصات",
        ),
        t(
          "Agentic AI Automation deployment & configuration (Cline/Ollama)",
          "تطبيق وأتمتة تقنيات الذكاء الاصطناعي الوكيل (Cline/Ollama)",
        ),
        t(
          "Handled digital marketing infrastructure using Google Platform tools & tracking setup",
          "إدارة البنية التحتية للتسويق الرقمي وإعداد أدوات التتبع من منصة جوجل",
        ),
        t(
          "Managed general IT operations, secure password stores, and comprehensive client presentations",
          "إدارة العمليات التقنية العامة، مستودعات كلمات المرور الآمنة، وتقديم العروض للعملاء",
        ),
      ],
      color: "text-black",
    },
    {
      period: t("JUNE 2022 – JULY 2024", "يونيو ٢٠٢٢ – يوليو ٢٠٢٤"),
      company: "DPWH - PHILIPPINES",
      location: t("PHILIPPINES", "الفلبين"),
      role: t("Web Developer & IT Systems Administrator", "مطور ويب ومسؤول نظم تقنية"),
      status: t("COMPLETED", "مكتمل"),
      stack: "PostgreSQL / REST APIs / Technical SEO / RBAC / UI UX",
      tasks: [
        t(
          "Designed and developed a Physical Asset Management System with real-time tracking",
          "تصميم وتطوير نظام إدارة الأصول المادية مع ميزة التتبع الفوري",
        ),
        t(
          "Structured PostgreSQL schemas and synchronized reliable backend API endpoints",
          "هيكلة مخططات قواعد البيانات PostgreSQL ومزامنة نقاط اتصال برمجية API قوية",
        ),
        t(
          "Implemented Role-Based Access Control (RBAC) and data integrity protection protocols",
          "تطبيق نظام التحكم بالوصول القائم على الأدوار (RBAC) وبروتوكولات سلامة البيانات",
        ),
        t(
          "Handled setup, hardware maintenance, and active troubleshooting of office IT systems",
          "إدارة إعداد وصيانة الأجهزة وحل مشكلات أنظمة تقنية المعلومات المكتبية",
        ),
        t(
          "Maintained technical documentation, asset inventory tracking schedules, and reporting layouts",
          "إشراف وصيانة الوثائق التقنية، تتبع جداول جرد الأصول، وتقارير الأنظمة الميدانية",
        ),
        t(
          "Optimized web properties for technical SEO standards and semantic code layout rules",
          "تحسين خصائص الويب لتتوافق مع معايير السيو التقني وقواعد الكود الدلالي",
        ),
      ],
      color: "text-zinc-400",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="experience"
      className="relative w-full bg-white py-20 md:py-32 px-4 sm:px-6 overflow-hidden font-mono scroll-mt-20 selection:bg-[#00C950] selection:text-white border-t border-zinc-100"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl relative z-10"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-[0.3em]">
              {t("Professional History", "التاريخ المهني")}
            </span>
          </div>
          <h2 className={`font-black uppercase tracking-tighter text-black text-4xl md:text-6xl leading-none`}>
            {isAr ? (
              <>
                مسار_<span className="text-[#00C950]">العمل</span>
              </>
            ) : (
              <>
                Experience_<span className="text-[#00C950]">Path</span>
              </>
            )}
          </h2>
        </motion.div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative w-full space-y-12 md:space-y-0">
          {history.map((job, index) => (
            <ExperienceCard
              key={job.company}
              job={job}
              index={index}
              isAr={isAr}
              itemVariants={itemVariants}
            />
          ))}
        </div>

        {/* --- DECORATIVE FOOTER --- */}
        <motion.div
          variants={itemVariants}
          className="mt-20 md:mt-32 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40 select-none"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-zinc-500">
            {isAr ? "دبي // ٢٠٢٦" : "Dubai // 2026"}
          </span>
          <div className="flex gap-1">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`h-4 w-[1px] bg-zinc-400 ${i % 4 === 0 ? "h-6 bg-[#00C950] w-[1.5px]" : ""}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}