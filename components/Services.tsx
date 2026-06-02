"use client";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, Settings, Globe, Code2, Database, Layout, 
  Target, Zap, Anchor, Cpu 
} from "lucide-react";
import { useLocale } from "next-intl";

export function Services() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const services = [
    {
      id: "SV_01",
      title: t("E-Commerce", "تجارة إلكترونية"),
      description: t("High-conversion storefronts optimized for speed. Specialized in Shopify Liquid, custom Next.js heads, and headless commerce.", "واجهات متاجر عالية التحويل محسنة للسرعة. متخصص في Shopify Liquid، ورؤوس Next.js المخصصة، والتجارة بدون رأس."),
      features: ["Shopify", "WooCommerce", "Next.js"],
      icon: ShoppingCart,
      hoverIcon: Target,
      action: t("Merchant_Logic", "منطق_التاجر"),
    },
    {
      id: "SV_02",
      title: t("ERP & Odoo", "أنظمة ERP وأودو"),
      description: t("Enterprise-grade Odoo integration. Streamlining inventory, accounting, and custom module development for business automation.", "تكامل Odoo على مستوى المؤسسات. تبسيط المخزون والمحاسبة وتطوير الوحدات المخصصة لأتمتة الأعمال."),
      features: ["Odoo ERP", "Inventory", "Automation"],
      icon: Settings,
      hoverIcon: Zap,
      action: t("System_Integration", "تكامل_النظام"),
    },
    {
      id: "SV_03",
      title: t("Corporate Systems", "أنظمة الشركات"),
      description: t("Professional web systems for Dubai-based firms. Focused on SEO authority, lead generation, and scalable WordPress/React stacks.", "أنظمة ويب احترافية للشركات في دبي. تركز على قوة السيو، وجذب العملاء، وتقنيات WordPress/React القابلة للتوسع."),
      features: ["React", "WordPress", "SEO"],
      icon: Globe,
      hoverIcon: Anchor,
      action: t("Enterprise_Design", "تصميم_المؤسسات"),
    },
    {
      id: "SV_04",
      title: t("Custom Apps", "تطبيقات مخصصة"),
      description: t("Heavy-duty full-stack applications engineered with Next.js and Supabase. Robust architectural logic built for high-performance and complex business workflows.", "تبيقات فول ستاك شديدة التحمل مصممة بـ Next.js و Supabase. منطق معماري قوي مبني للأداء العالي وسير عمل الأعمال المعقد."),
      features: ["Supabase", "React 19", "PostgreSQL"],
      icon: Code2,
      hoverIcon: Cpu,
      action: t("Logic_Architecture", "هيكلة_المنطق"),
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    }),
  };

  return (
    <section id="services" className="relative w-full bg-white py-16 md:py-24 overflow-hidden font-mono selection:bg-[#00C950] selection:text-white" dir={isAr ? "rtl" : "ltr"}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)`, backgroundSize: "30px 30px" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-[6px] border-black pb-10">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-4 w-4 bg-[#00C950] rotate-45 border-2 border-black" />
              <span className="text-[11px] md:text-sm font-black text-zinc-400 uppercase tracking-[0.4em]">{t("Service_Deployments", "نشر_الخدمات")}</span>
            </div>
            <h2 className={`font-black uppercase tracking-tighter text-black ${isAr ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]" : "text-4xl md:text-6xl lg:text-7xl leading-none"}`}>
              {isAr ? <>الحلول_<span className="text-[#00C950]">الرقمية</span></> : <>Core_<span className="text-[#00C950]">Solutions</span></>}
            </h2>
          </div>
          <div className={`hidden md:block ${isAr ? "text-left" : "text-right"}`}>
            <p className="text-[12px] font-black text-black uppercase tracking-widest leading-tight">
              {t("React // Odoo // Shopify", "رياكت // أودو // شوبيفاي")} <br />
              <span className="text-[#00C950]">{t("Status: Ready", "الحالة: جاهز")}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const HoverIcon = service.hoverIcon;
            return (
              <motion.div key={service.id} custom={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative h-full">
                <div className={`absolute inset-0 bg-black rounded-xl transition-all duration-300 group-hover:translate-y-4 ${isAr ? "-translate-x-2 translate-y-2 group-hover:-translate-x-4" : "translate-x-2 translate-y-2 group-hover:translate-x-4"}`} />
                <div className="relative h-full border-[4px] border-black bg-white p-6 md:p-8 rounded-xl transition-all group-hover:-translate-y-2 flex flex-col">
                  
                  <div className="flex justify-between items-start mb-10">
                    <div className="h-16 w-16 bg-black flex items-center justify-center relative overflow-hidden transition-all group-hover:bg-[#00C950] group-hover:-rotate-6 shadow-[6px_6px_0px_0px_rgba(0,201,80,0.3)]">
                      <AnimatePresence mode="wait">
                        <motion.div key={service.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="absolute">
                          <Icon className="h-8 w-8 text-white group-hover:hidden transition-colors" />
                          <HoverIcon className="h-8 w-8 text-black hidden group-hover:block transition-colors" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <span className="font-black text-[12px] text-zinc-300 tracking-tighter">{service.id}</span>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#00C950] leading-none transition-colors">{service.title}</h3>
                    <p className="text-zinc-600 text-[13px] leading-relaxed font-bold mb-8 italic">{service.description}</p>
                  </div>

                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="text-[9px] font-black uppercase border-2 border-zinc-100 px-2 py-1 bg-zinc-50 group-hover:border-black transition-colors">{feature}</span>
                      ))}
                    </div>
                    <div className="pt-4 border-t-2 border-black/5 flex justify-between items-center">
                      <span className="text-[11px] font-black uppercase tracking-tighter bg-black text-white px-3 py-1 group-hover:bg-[#00C950] group-hover:text-black transition-all cursor-pointer">{service.action}</span>
                      <div className="flex gap-1"><div className="h-1 w-4 bg-black/10 group-hover:bg-[#00C950] transition-colors" /><div className="h-1 w-1 bg-black/10 group-hover:bg-[#00C950] transition-colors" /></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 py-8 border-y-2 border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2"><Layout size={14} /><span className="text-[10px] font-black uppercase tracking-widest">UI.Architecture</span></div>
            <div className="flex items-center gap-2"><Database size={14} /><span className="text-[10px] font-black uppercase tracking-widest">ERP.Systems</span></div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">{t("Dubai_Node_Active // 2026", "عقدة_دبي_نشطة // ٢٠٢٦")}</p>
        </div>
      </div>
    </section>
  );
}