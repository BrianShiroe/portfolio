"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store/useStore"; // استخدام Zustand
import { ProjectItem } from "./ProjectItem";

export function TopProjects() {
  const { lang, t } = useAppStore();
  const isAr = lang === "ar";

  // 1. حارس الهدرجة: يمنع تعارض النصوص بين الخادم والعميل
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: "01",
      title: "AURAX",
      tag: t("LUXURY FOOTWEAR", "أحذية فاخرة"),
      tech: "React / Framer Motion / Tailwind",
      href: "https://aurax-luxury-footwear-landing-page.vercel.app/",
      github: "https://github.com/BrianShiroe/aurax-luxury-footwear-landing-page",
      image: "/images/aurax/thumbnail.png",
      isUnderDevelopment: false,
      description: t(
        "A high-end digital showroom for luxury footwear, featuring immersive scroll-based animations, architectural layouts, and a fluid user experience designed for premium retail storytelling.",
        "معرض رقمي متطور للأحذية الفاخرة، يتميز برسوم متحركة غامرة تعتمد على التمرير، وتنسيقات معمارية، وتجربة مستخدم سلسة مصممة لسرد قصص العلامات التجارية الراقية.",
      ),
    },
    {
      id: "02",
      title: "GameTree",
      tag: t("E-COMMERCE PLATFORM", "منصة تجارة إلكترونية"),
      tech: "Next.js / Supabase / Stripe",
      href: "https://gametree.vercel.app/",
      github: "https://github.com/BrianShiroe/gametree-next.js-supabase-stripe-ecommerce-website",
      image: "/images/gametree/thumbnail.png",
      isUnderDevelopment: false,
      description: t(
        "A comprehensive e-commerce ecosystem featuring dedicated workflows for visitors, customers, and admins. Includes integrated Stripe payments, dynamic shipping calculations, and a full administrative suite for product management.",
        "نظام متكامل للتجارة الإلكترونية يوفر مسارات عمل مخصصة للزوار والعملاء والمديرين. يتضمن عمليات دفع عبر Stripe، حساب تلقائي لرسوم الشحن، ولوحة تحكم شاملة لإدارة وتعديل المنتجات.",
      ),
    },
    {
      id: "03",
      title: "Noor Label",
      tag: t("FASHION ARCHIVE", "أرشيف الأزياء"),
      tech: "Next.js / Shopify / Headless Commerce",
      href: "https://noor-label.vercel.app/",
      github: "https://github.com/BrianShiroe/noor-label-next.js-shopify-ecommerce-website",
      image: "/images/noor-label/thumbnail.png",
      isUnderDevelopment: false,
      description: t(
        "A premium fashion portfolio showcasing architectural silhouettes and modest luxury. Focuses on high-end visual storytelling, scroll-based animations, and a minimalist aesthetic rooted in Dubai's design culture.",
        "بورتفوليو متميز للأزياء يعرض تصاميم معمارية وفخامة محتشمة. يركز على السرد البصري الراقي، وتفاعلات التمرير، وجمالية بسيطة مستوحاة من ثقافة التصميم في دبي.",
      ),
    },
  ];

  // 2. إذا لم يتم التحميل بعد على العميل، نرجع حاوية فارغة بنفس الأبعاد لتجنب قفز المحتوى
  if (!mounted) {
    return (
      <section id="projects" className="w-full bg-[#FAFAFA] py-32 px-6">
        <div className="mx-auto max-w-7xl h-[500px]" />
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="w-full bg-[#FAFAFA] py-32 px-6 font-mono relative overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span
              className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Personal Projects", "المشاريع الشخصية")}
            </span>
          </div>
          <h2
            className={`font-black uppercase tracking-tighter text-black ${isAr ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]" : "text-4xl md:text-6xl lg:text-7xl leading-none"}`}
          >
            {isAr ? (
              <>
                أبرز_<span className="text-[#00C950]">المشاريع</span>
              </>
            ) : (
              <>
                Top_<span className="text-[#00C950]">Projects</span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-48 md:gap-64">
          {projects.map((work, index) => (
            <ProjectItem key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
