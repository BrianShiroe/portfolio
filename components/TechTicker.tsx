"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export function TechTicker() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const techStack = [
    { name: "Next.js", accent: "//" },
    { name: "React.js", accent: "//" },
    { name: "Shopify", accent: "//" },
    { name: "Odoo ERP", accent: "//" },
    { name: "TypeScript", accent: "//" },
    { name: "Supabase", accent: "//" },
  ];

  // Doubling the array to ensure no gaps during the infinite loop
  const displayStack = [...techStack, ...techStack];

  return (
    <div 
      className="w-full border-y-4 border-black bg-white py-3 overflow-hidden flex items-center h-14 md:h-16 selection:bg-[#00C950] selection:text-black"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        animate={{ 
          x: isAr ? ["0%", "50%"] : ["0%", "-50%"] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 25, 
          ease: "linear" 
        }}
        className="flex gap-10 md:gap-16 text-[11px] md:text-sm font-black uppercase text-black whitespace-nowrap items-center font-mono"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 md:gap-16">
            {displayStack.map((tech, idx) => (
              <span key={`${i}-${idx}`} className="flex items-center gap-10 md:gap-16">
                <span className="hover:text-[#00C950] transition-colors cursor-default">
                  {tech.name}
                </span>
                <span className="text-[#00C950] font-bold">{tech.accent}</span>
              </span>
            ))}
            <div className="flex items-center gap-4 bg-black text-white px-4 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-[#00C950] animate-pulse" />
              <span className="italic tracking-widest text-[10px] md:text-xs">
                {t("UAE_CORE_SYSTEMS", "أنظمة_الإمارات_الأساسية")}
              </span>
            </div>
            <span className="text-[#00C950] font-bold">//</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}