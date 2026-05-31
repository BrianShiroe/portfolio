"use client";
import { motion, Transition, Variants } from "framer-motion";
import { useLocale } from "next-intl";

export function Hero() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const btnTransition: Transition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.15,
  };

  const focusItems = [
    t("Full Stack Dev", "تطوير ويب متكامل"),
    t("Agentic AI Workflows", "سير عمل الذكاء الاصطناعي"),
    t("Headless E-commerce", "تجارة إلكترونية متطورة"),
    t("Cloud Infrastructure", "البنية التحتية السحابية"),
    t("ERP Customization", "تخصيص أنظمة ERP"),
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full overflow-hidden bg-white selection:bg-[#00C950] selection:text-white flex flex-col justify-center py-20 lg:py-0 ${isAr ? "font-arabic" : "font-mono"}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-10 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-16">
          
          {/* LEFT SIDE: ACTIVE FOCUS */}
          <motion.div variants={itemVariants} className="hidden xl:flex flex-col gap-10 w-64">
            <div className="space-y-4">
              <span
                className={`text-[13px] font-black border-b-2 border-black w-full block pb-2 tracking-[0.15em] uppercase text-black ${isAr ? "text-right" : "text-left"}`}
              >
                {t("Current Focus", "التركيز الحالي")}
              </span>
              <div className="space-y-2.5 text-[13px] text-zinc-800 uppercase font-bold leading-tight">
                {focusItems.map((item) => (
                  <p key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00C950]" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CENTER: MAIN BRANDING */}
          <div className="relative flex flex-col items-center w-full lg:flex-1">
            <motion.div variants={itemVariants} className="relative w-full max-fit mx-auto text-center">
              <div
                className={`absolute -top-2 md:-top-6 w-3 h-3 md:w-5 md:h-5 border-t-2 md:border-t-[3px] border-black ${isAr ? "-right-2 md:-right-6 border-r-2 md:border-r-[3px]" : "-left-2 md:-left-6 border-l-2 md:border-l-[3px]"}`}
              />

              <div className="mb-6 inline-block bg-black px-4 py-1.5 rounded-full text-[9px] md:text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-white">
                {t("Web Developer", "مطور ويب")}
              </div>

              <h1
                className={`text-center font-black uppercase mb-4 ${isAr ? "text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]" : "text-[15vw] sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] md:leading-[0.8] tracking-tighter"}`}
              >
                {isAr ? (
                  <>
                    برايان <br /> <span className="text-[#00C950]">هاو</span>
                  </>
                ) : (
                  <>
                    Brian <br /> <span className="text-[#00C950]">Haw</span>
                  </>
                )}
              </h1>

              <div className="flex items-center justify-center gap-2 md:gap-3 mb-8">
                <div className="h-[1px] w-4 md:w-8 bg-black/20" />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black italic">
                  Full-Stack Engineer
                </span>
                <div className="h-[1px] w-4 md:w-8 bg-black/20" />
              </div>
            </motion.div>

            {/* CONTACT ROW */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 mb-10 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border-y border-black/5 py-5 w-full max-w-[320px] sm:max-w-none justify-center">
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="mailto:Brianshiroe@gmail.com"
                  className="flex items-center gap-2 text-[10px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-zinc-50 group-hover:bg-[#00C950]/10 transition-colors">
                    <img
                      src="https://img.icons8.com/windows/32/000000/address.png"
                      alt="mail"
                      className="w-4 h-4 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  <span dir="ltr">Brianshiroe@gmail.com</span>
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="tel:+971503592133"
                  className="flex items-center gap-2 text-[10px] md:text-[12px] font-black uppercase tracking-wider text-zinc-600 hover:text-[#00C950] transition-colors group cursor-pointer"
                >
                  <div className="p-1.5 rounded-lg bg-zinc-50 group-hover:bg-[#00C950]/10 transition-colors">
                    <img
                      src="https://img.icons8.com/windows/32/000000/phone.png"
                      alt="phone"
                      className="w-4 h-4 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  <span dir="ltr">+971 50 359 2133</span>
                </motion.a>
              </div>

              {/* SOCIALS */}
              <div className="flex gap-10">
                {["github", "linkedin"].map((platform) => (
                  <motion.a
                    key={platform}
                    href={
                      platform === "github"
                        ? "https://github.com/BrianShiroe"
                        : "https://www.linkedin.com/in/brianshiroe/"
                    }
                    target="_blank"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={btnTransition}
                    className="group cursor-pointer"
                  >
                    <img
                      src={`https://img.icons8.com/fluency/48/${platform}.png`}
                      alt={platform}
                      className="w-8 h-8 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ACTIONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-[260px] sm:max-w-md"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#00C950",
                  borderColor: "#00C950",
                }}
                whileTap={{ scale: 0.95 }}
                transition={btnTransition}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-black text-white py-4 px-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] cursor-pointer select-none"
              >
                {t("View Projects", "مشاهدة المشاريع")}
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  color: "#00C950",
                  borderColor: "#00C950",
                }}
                whileTap={{ scale: 0.95 }}
                transition={btnTransition}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full border-2 border-black bg-white py-4 px-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer select-none"
              >
                {t("Contact Me", "تواصل معي")}
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PROFILE PHOTO & LOCALIZATION BADGE */}
          <motion.div variants={itemVariants} className="flex flex-col items-center relative mt-4 lg:mt-0">
            {/* Added 'group' class here to handle nested image states during hover */}
            <div className="group bg-white border-2 md:border-4 border-black p-3 md:p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center overflow-hidden cursor-default">
              
              {/* Profile Image Wrapper */}
              <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] relative rounded-xl overflow-hidden border-2 border-black/10 bg-zinc-50 mb-4">
                
                {/* Default Image */}
                <img 
                  src="/images/profile.png" 
                  alt="Brian Haw" 
                  className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05]"
                />

                {/* Hover Image (Smooth Opacity Cross-Fade) */}
                <img 
                  src="/images/profile-2.png" 
                  alt="Brian Haw Focus" 
                  className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />

              </div>
              
              {/* Clean Location Badge */}
              <div className="w-full border-t-2 border-black/10 pt-4 mt-2 text-center flex items-center justify-center">
                <div className="flex items-center justify-center gap-2.5 scale-125 transform origin-center my-1">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C950]"></span>
                  </div>
                  <span className="text-[9px] font-black uppercase text-black tracking-[0.1em] whitespace-nowrap">
                    {t("Dubai, UAE", "دبي، الإمارات")}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}