"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppStore } from "@/store/useStore"; // استخدام Zustand

interface ProjectItemProps {
  work: any;
  index: number;
}

export function ProjectItem({ work, index }: ProjectItemProps) {
  const { lang, t } = useAppStore();
  const isAr = lang === "ar";
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawX = useTransform(scrollYProgress, [0, 0.4], [isEven ? -200 : 200, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const x = useSpring(rawX, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 25 });

  return (
    <motion.div
      ref={containerRef}
      style={{ x, opacity }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-24 items-center`}
    >
      {/* Image Side */}
      <div className="w-full md:w-[65%] group relative">
        {work.isUnderDevelopment && (
          <div className="absolute -top-4 -right-4 z-20 bg-black text-white text-[10px] font-black px-4 py-2 border-[2px] border-[#00C950] shadow-[4px_4px_0px_0px_#00C950] uppercase tracking-widest rotate-3">
            {t("Under Development", "قيد التطوير")}
          </div>
        )}

        <Link href={work.href} target="_blank">
          <div className="relative aspect-[1.92/1] bg-white border-[3px] border-black rounded-[15px] overflow-hidden shadow-[15px_15px_0px_0px_#000] group-hover:shadow-[10px_10px_0px_0px_#00C950] group-hover:-translate-y-2 transition-all duration-500">
            {work.image ? (
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                quality={95}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 65vw"
              />
            ) : (
              <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-12 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-6 text-[#00C950]">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <p className="text-white font-black text-xs uppercase tracking-widest">
                  {t("Source Code Secure", "الكود المصدري مؤمن")}
                </p>
              </div>
            )}
          </div>
        </Link>
      </div>

      {/* Text Side */}
      <div className={`w-full md:w-[35%] ${isEven ? "text-left" : "md:text-right"} space-y-8`}>
        <div className="space-y-4">
          <div className={`flex items-center gap-3 ${isEven ? "justify-start" : "md:justify-end"}`}>
            <span className="text-xs font-black text-white bg-black px-2 py-1 rounded-[4px]">{work.id}</span>
            <span className="text-[10px] font-black text-[#00C950] tracking-[0.3em] uppercase">{work.tag}</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
            {work.title}
          </h3>
          <p className={`text-sm font-medium text-zinc-500 leading-relaxed max-w-sm ${isEven ? "ml-0 mr-auto" : "md:ml-auto md:mr-0"}`}>
            {work.description}
          </p>
        </div>

        <div className="pt-4 flex flex-col gap-6">
          <p className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase">{work.tech}</p>
          <div className={`flex items-center gap-4 ${isEven ? "justify-start" : "md:justify-end"}`}>
            
            {/* Live Preview Button - Only shown if link is not a GitHub repo (unless it's an AI project) */}
            {!work.href.includes("github.com") && (
              <Link href={work.href} target="_blank" className="group/btn relative inline-flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-tight group-hover:text-[#00C950] transition-colors">
                  {t("Live Demo", "معاينة")}
                </span>
                <div className="h-10 w-10 bg-black text-white rounded-[10px] flex items-center justify-center group-hover/btn:bg-[#00C950] group-hover/btn:text-black transition-all shadow-lg group-hover/btn:rotate-12">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d={isAr ? "M17 7L7 17M7 17h10M7 17V7" : "M7 17L17 7M17 7H7M17 7V17"} />
                  </svg>
                </div>
              </Link>
            )}

            {/* GitHub Button */}
            {work.github && (
              <Link href={work.github} target="_blank" className="group/git relative inline-flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-tight group-hover:text-[#00C950] transition-colors">
                  {t("Code", "الكود")}
                </span>
                <div className="h-10 w-10 border-2 border-black rounded-[10px] flex items-center justify-center group-hover/git:bg-black group-hover/git:text-[#00C950] transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}