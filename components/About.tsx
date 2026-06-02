"use client";
import { motion, Variants } from "framer-motion";
import { useLocale } from "next-intl";

export function About() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const awards = [
    {
      title: t("Cum Laude", "امتياز مع مرتبة الشرف"),
      subtitle: t("Academic Excellence", "التميز الأكاديمي"),
      icon: "★",
    },
    {
      title: t("Best Thesis", "أفضل أطروحة"),
      subtitle: t("Research & Analysis", "البحث والتحليل"),
      icon: "◆",
    },
    {
      title: t("Top 20 AppCon", "أفضل ٢٠ في AppCon"),
      subtitle: t("Innovation Award", "جائزة الابتكار"),
      icon: "▲",
    },
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
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

  const awardItemVariants: Variants = {
    hidden: { x: isAr ? 20 : -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full bg-white py-16 md:py-24 px-4 md:px-6 overflow-hidden font-mono scroll-mt-20 selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* --- LEFT COLUMN: PROFESSIONAL DATA --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* Identity Card */}
            <motion.div
              variants={itemVariants}
              className={`relative border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                isAr ? "shadow-[-6px_6px_0px_0px_rgba(0,0,0,1)]" : ""
              }`}
            >
              <div className="flex items-center gap-3 border-b-2 border-black pb-4 mb-4">
                <div className="h-3 w-3 bg-[#00C950] rounded-full shadow-[0_0_10px_#00C950]" />
                <span className="text-[14px] font-black uppercase tracking-tight text-black">
                  {t("Professional Profile", "الملف المهني")}
                </span>
              </div>
              <ul className="space-y-3 text-[13px] md:text-[14px] uppercase font-bold">
                <li className="flex justify-between">
                  <span className="text-zinc-400">{t("Name:", "الاسم:")}</span>
                  <span className="text-black">{t("Brian Haw", "برايان هو")}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">{t("Role:", "الدور:")}</span>
                  <span className="text-black">{t("Full-Stack Dev", "مطور متكامل")}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-400">{t("Location:", "الموقع:")}</span>
                  <span className="text-black">{t("Dubai, UAE", "دبي، الإمارات")}</span>
                </li>
              </ul>
            </motion.div>

            {/* ACCOLADES BLOCK */}
            <motion.div
              variants={itemVariants}
              className={`bg-black text-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] ${
                isAr ? "shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.1)]" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] font-black tracking-widest text-white uppercase">
                  {t("Achievements", "الإنجازات")}
                </span>
                <span className="text-[12px] font-black text-zinc-500">
                  {t("RECOGNIZED", "معتمد")}
                </span>
              </div>

              <div className="space-y-6">
                {awards.map((award) => {
                  return (
                    <motion.div
                      key={award.title}
                      variants={awardItemVariants}
                      className="group flex items-center gap-4 cursor-default"
                    >
                      {/* Interactive Icon Box Container */}
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-zinc-700 bg-zinc-900 rounded-xl group-hover:border-[#00C950] transition-colors duration-300 group-hover:bg-zinc-800 overflow-hidden">
                        
                        {/* Base White Symbol */}
                        <span className="text-xl text-white transition-all duration-300 transform group-hover:opacity-0 group-hover:scale-50 absolute select-none">
                          {award.icon}
                        </span>

                        {/* Morphing Solid Filled Vectors */}
                        <div className="opacity-0 scale-50 rotate-45 transition-all duration-300 transform group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 absolute flex items-center justify-center w-full h-full text-white">
                          {award.title.includes("Cum Laude") && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3c1.706 0 3.199.813 4.155 2.054C12.798 3.813 14.29 3 15.997 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                          )}
                          {award.title.includes("Thesis") && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 3.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM8.5 11.5a1 1 0 100-2 1 1 0 000 2zm1 3.5a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                              <path d="M14.25 5.25a1.5 1.5 0 00-1.5-1.5H9v4.5h4.5v-1.5z" />
                            </svg>
                          )}
                          {award.title.includes("AppCon") && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.81 4.314a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V6.654l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" />
                            </svg>
                          )}
                        </div>

                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[14px] md:text-[15px] font-black uppercase tracking-tight transition-colors group-hover:text-zinc-100 leading-tight">
                          {award.title}
                        </span>
                        <span className="text-[10px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                          {award.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: THE NARRATIVE --- */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-[12px] md:text-[13px] font-black uppercase tracking-widest mb-4">
                {t("About Me", "عني")}
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className={`font-black uppercase tracking-tighter text-black 
                  ${
                    isAr
                      ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]"
                      : "text-4xl md:text-6xl lg:text-7xl leading-none"
                  }`}
              >
                {isAr ? (
                  <>
                    هندسة <br />{" "}
                    <span className="text-[#00C950]">الحلول_الرقمية</span>
                  </>
                ) : (
                  <>
                    Building <br />{" "}
                    <span className="text-[#00C950]">Modern_Web</span>
                  </>
                )}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className={`font-bold text-zinc-700 uppercase ${
                  isAr ? "text-base md:text-lg leading-relaxed" : "text-lg md:text-xl leading-relaxed"
                }`}
              >
                {t(
                  "Full-Stack Developer specializing in high-performance headless e-commerce and AI-accelerated workflows.",
                  "مطور ويب متكامل متخصص في التجارة الإلكترونية عالية الأداء وسير العمل المعزز بالذكاء الاصطناعي."
                )}
              </motion.p>

              {/* NEW ADDITION: HIGHLIGHT METRICS ROW */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 pb-4"
              >
                <div className="border-2 border-black p-3 rounded-xl bg-zinc-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-xl md:text-2xl font-black text-[#00C950]">30+</div>
                  <div className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-tight mt-0.5">
                    {t("Websites Built", "موقع تم إنجازه")}
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-xl bg-zinc-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-sm md:text-base font-black text-black uppercase tracking-tighter pt-1">100%</div>
                  <div className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-tight mt-1.5">
                    {t("Responsive", "متجاوب بالكامل")}
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-xl bg-zinc-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-sm md:text-base font-black text-black uppercase tracking-tighter pt-1">SEO</div>
                  <div className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-tight mt-1.5">
                    {t("Optimized", "محسن محركات البحث")}
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-xl bg-zinc-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-sm md:text-base font-black text-black uppercase tracking-tighter pt-1">Modular</div>
                  <div className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-tight mt-1.5">
                    {t("Component Based", "مبني على المكونات")}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={`space-y-6 text-zinc-500 italic ${
                  isAr
                    ? "border-r-4 border-l-0 pr-6 md:pr-8 text-sm md:text-base"
                    : "border-l-4 pr-0 pl-6 md:pl-8 text-base md:text-lg"
                } border-black font-medium`}
              >
                <p>
                  {t(
                    '"I bridge the gap between premium frontend design and scalable infrastructure. By leveraging Next.js, Cloudflare, and Agentic AI, I deliver robust e-commerce solutions that move the needle for businesses."',
                    '"أعمل على سد الفجوة بين التصميم المتميز والبنية التحتية القابلة للتوسع. من خلال الاستفادة من Next.js وCloudflare والذكاء الاصطناعي, أقدم حلولاً قوية للتجارة الإلكترونية تحقق نتائج ملموسة للأعمال."'
                  )}
                </p>
                <p>
                  {t(
                    '"My approach extends beyond the browser. I integrate custom Odoo ERP logic and serverless backend systems to automate operations, ensuring that the digital storefront is as efficient as it is beautiful."',
                    '"نهجي يتجاوز المتصفح. أقوم بدمج منطق Odoo ERP المخصص وأنظمة الخلفية البرمجية السحابية لأتمتة العمليات، مما يضمن أن يكون المتجر الرقمي فعالاً بقدر جماله."'
                  )}
                </p>
              </motion.div>

              {/* FOOTNOTE */}
              <motion.div
                variants={itemVariants}
                className={`mt-12 bg-white border-2 border-black p-6 md:p-8 rounded-2xl font-mono text-sm leading-relaxed shadow-[6px_6px_0px_0px_#00C950] ${
                  isAr ? "shadow-[-6px_6px_0px_0px_#00C950]" : ""
                }`}
              >
                <div className="flex gap-2 mb-4">
                  <span className="h-2 w-2 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
                  <span className="text-[12px] font-black uppercase text-black">
                    {t("Mission", "المهمة")}
                  </span>
                </div>
                <p className="text-zinc-800 font-bold uppercase text-[12px] md:text-[14px]">
                  {t(
                    "Focused on delivering lightning-fast, secure, and user-centric web applications. I combine 20+ projects of delivery experience with a deep understanding of modern DevOps to build the future of commerce.",
                    "أركز على تقديم تطبيقات ويب سريعة البرق وآمنة وتتمحور حول المستخدم. أجمع بين خبرة تسليم أكثر من ٢٠ مشروعاً وفهم عميق للعمليات السحابية الحديثة لبناء مستقبل التجارة."
                  )}
                </p>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className={`inline-block w-2 h-4 bg-[#00C950] translate-y-1 ${
                    isAr ? "mr-1" : "ml-1"
                  }`}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}