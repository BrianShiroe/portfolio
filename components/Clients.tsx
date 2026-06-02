"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

export function Clients() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const logos = [
    {
      src: "/logos/500x250_logo_12.png",
      href: "https://zhel-gold-jewelry.vercel.app/",
      status: "live",
    },
    // Add more logos here as your network grows
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="clients"
      className="relative w-full bg-white py-24 px-4 md:px-6 font-mono overflow-hidden scroll-mt-20 selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-7xl relative"
      >
        {/* --- SECTION HEADER --- */}
        <motion.div variants={cardVariants} className="mb-16 md:mb-24">
          {/* TOP INDICATOR: MATCHES ABOUT SECTION STYLE */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span
              className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Production_Output", "مخرجات_الإنتاج")}
            </span>
          </div>

          {/* H2 HEADER: MATCHES ABOUT SECTION SIZING */}
          <h2
            className={`font-black uppercase tracking-tighter text-black 
      ${
        isAr
          ? "text-4xl md:text-5xl lg:text-6xl leading-[1.2]"
          : "text-4xl md:text-6xl lg:text-7xl leading-none"
      }`}
          >
            {isAr ? (
              <>
                قائمة_<span className="text-[#00C950]">العملاء</span>
              </>
            ) : (
              <>
                Client_<span className="text-[#00C950]">Index</span>
              </>
            )}
          </h2>
        </motion.div>

        {/* --- LOGO GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {logos.map((logo, i) => (
            <motion.a
              key={logo.src}
              href={logo.href}
              target={logo.status === "live" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              variants={cardVariants}
              whileTap={logo.status === "live" ? { scale: 0.95 } : {}}
              className={`group relative ${logo.status === "offline" ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              {/* Emerald Neobrutalist Shadow Layer */}
              <div
                className={`absolute inset-0 bg-[#00C950] rounded-2xl transition-all duration-300 translate-x-0 translate-y-0 group-hover:translate-y-2 ${
                  isAr
                    ? "group-hover:-translate-x-2"
                    : "group-hover:translate-x-2"
                }`}
              />

              {/* Main Content Card */}
              <div
                className={`relative flex items-center justify-center aspect-[500/250] border-[3px] border-black bg-white p-4 transition-all duration-300 rounded-2xl group-hover:-translate-y-1 overflow-hidden ${
                  isAr
                    ? "group-hover:translate-x-1"
                    : "group-hover:-translate-x-1"
                }`}
              >
                {/* Index Numbering */}
                <div
                  className={`absolute top-2 text-[9px] font-black text-zinc-400 uppercase group-hover:text-black transition-colors z-10 ${isAr ? "right-3" : "left-3"}`}
                >
                  {isAr ? `مرجع_0${i + 1}` : `REF_0${i + 1}`}
                </div>

                {/* Status Indicator */}
                <div
                  className={`absolute top-2 flex items-center gap-1.5 z-10 ${isAr ? "left-3" : "right-3"}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${logo.status === "live" ? "bg-[#00C950] animate-pulse" : "bg-zinc-300"}`}
                  />
                  <span className="text-[9px] font-black uppercase text-zinc-400 group-hover:text-black transition-colors">
                    {logo.status === "live"
                      ? t("live", "مباشر")
                      : t("offline", "غير متصل")}
                  </span>
                </div>

                {/* Logo Image with transition effects */}
                <div
                  className={`relative w-full h-full opacity-40 grayscale transition-all duration-500 scale-95 ${
                    logo.status === "live"
                      ? "group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                      : ""
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={`Project Logo ${i + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Scanline CRT Effect on Hover */}
                {logo.status === "live" && (
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.05] transition-opacity bg-[linear-gradient(rgba(0,201,80,0)_50%,rgba(0,201,80,0.1)_50%)] bg-[length:100%_4px]" />
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* --- BOTTOM METADATA --- */}
        <motion.div
          variants={cardVariants}
          className={`mt-20 pt-10 border-t-2 border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 ${isAr ? "md:flex-row-reverse" : ""}`}
        >
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-zinc-900 text-center">
            {t(
              "Active Development Network // DXB",
              "شبكة التطوير النشطة // دبي",
            )}
          </p>
          <div className={`flex gap-1.5 ${isAr ? "flex-row-reverse" : ""}`}>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`h-4 w-[2.5px] bg-black rounded-full ${i % 5 === 0 ? "h-6 bg-[#00C950]" : ""}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
