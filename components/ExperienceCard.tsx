"use client";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// You must define the interface for the props to resolve the TypeScript error
interface ExperienceCardProps {
  job: {
    period: string;
    company: string;
    location: string;
    role: string;
    status: string;
    stack: string;
    tasks: string[];
    color: string;
  };
  index: number;
  isAr: boolean;
  itemVariants: Variants;
}

export function ExperienceCard({ job, index, isAr, itemVariants }: ExperienceCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative grid grid-cols-1 md:grid-cols-[200px_auto_1fr] gap-6 md:gap-12 w-full group"
    >
      {/* 1. TIMELINE PERIOD */}
      <div className={`flex flex-col md:pt-6 ${isAr ? "md:text-left" : "md:text-right"}`}>
        <span className="text-xs font-black text-zinc-500 tracking-[0.25em] uppercase">
          {job.period}
        </span>
      </div>

      {/* 2. GLITCH NODE */}
      <div className="hidden md:flex flex-col items-center relative px-2">
        <div className="h-5 w-5 rounded-full border-[4px] border-black bg-white group-hover:bg-[#00C950] transition-colors mt-6" />
        <div className="absolute top-10 bottom-0 w-[3px] bg-black/5" />
      </div>

      {/* 3. MAIN CONTENT BOX */}
      <div className="relative pb-20">
        <div className="absolute -inset-1 bg-[#00C950] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
        
        <div className="relative border-[4px] border-black bg-white p-8 md:p-10 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] transition-all group-hover:-translate-y-1">
          {/* Company Title Header */}
          <div className="flex items-center gap-2 mb-8 border-b-4 border-black pb-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-black">
              {job.company}
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-zinc-900 mb-8 group-hover:italic transition-all leading-tight">
            {job.role}
          </h3>

          {/* Task List */}
          <div className="space-y-5 mb-10">
            {job.tasks.map((task, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 text-[14px] font-bold text-zinc-700 leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00C950] shrink-0 mt-0.5" />
                <span>{task}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Bar */}
          <div className="flex flex-wrap gap-3 pt-6 border-t-2 border-dashed border-black/20">
            {job.stack.split(" / ").map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-black uppercase tracking-widest text-zinc-900 bg-zinc-100 border-2 border-zinc-200 px-4 py-2 rounded-sm hover:bg-[#00C950] hover:text-white hover:border-[#00C950] transition-all cursor-default"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}