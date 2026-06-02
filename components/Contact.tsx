"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { useLocale } from "next-intl";

export function Contact() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactData = [
    { label: t("PHONE", "الهاتف"), value: "+971 50 359 2133", type: "tel" },
    {
      label: t("EMAIL", "البريد الإلكتروني"),
      value: "Brianshiroe@gmail.com",
      type: "mailto",
    },
    {
      label: t("LOCATION", "الموقع"),
      value: t("Dubai, UAE", "دبي، الإمارات"),
      type: "map",
    },
  ];

  // --- Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setResult(t("Configuration Missing", "إعدادات API مفقودة"));
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult(t("Message Sent Successfully!", "تم إرسال الرسالة بنجاح!"));
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(
          t(
            data.message || "Error sending message",
            data.message || "حدث خطأ أثناء الإرسال",
          ),
        );
      }
    } catch (error) {
      setResult(
        t(
          "Network Error. Check Ad-blockers.",
          "خطأ في الشبكة. تحقق من مانع الإعلانات.",
        ),
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-zinc-50 py-16 md:py-24 px-4 md:px-6 font-mono overflow-hidden scroll-mt-20 selection:bg-[#00C950] selection:text-white"
      dir={isAr ? "rtl" : "ltr"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl relative"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVariants} className="mb-16 md:mb-24">
          {/* TOP INDICATOR: SYNCED WITH ABOUT SECTION STYLE */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[3px] w-12 bg-[#00C950] rounded-full shadow-[0_0_8px_#00C950]" />
            <span
              className={`text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.3em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Direct Communication", "اتصال مباشر")}
            </span>
          </div>

          {/* H2 HEADER: EXACT MATCH FOR NARRATIVE HEADLINES */}
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
                اتصل_<span className="text-[#00C950]">بنا</span>
              </>
            ) : (
              <>
                Reach_<span className="text-[#00C950]">Out</span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* --- LEFT: CONTACT DETAILS --- */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              {contactData.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className={`group relative flex flex-col gap-1 border-zinc-200 hover:border-[#00C950] transition-colors ${
                    isAr ? "border-r-4 pr-5 md:pr-6" : "border-l-4 pl-5 md:pl-6"
                  }`}
                >
                  <span className="text-[10px] md:text-xs font-black text-zinc-400 tracking-widest uppercase">
                    {item.label} // 0{i + 1}
                  </span>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <a
                      href={
                        item.type === "map" ? "#" : `${item.type}:${item.value}`
                      }
                      className="text-lg md:text-2xl font-black text-black uppercase hover:text-[#00C950] transition-colors break-all leading-tight"
                    >
                      {item.value}
                    </a>

                    {item.type !== "map" && (
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className={`text-[9px] md:text-[10px] font-black border-2 border-black px-2 md:px-3 py-1 uppercase bg-white hover:bg-black hover:text-[#00C950] transition-all active:scale-95 cursor-pointer shadow-black hover:shadow-none hover:-translate-y-0.5 ${
                          isAr
                            ? "shadow-[-3px_3px_0px_0px_#00C950] hover:-translate-x-0.5"
                            : "shadow-[3px_3px_0px_0px_#00C950] hover:translate-x-0.5"
                        }`}
                      >
                        {copied === item.label
                          ? t("Copied!", "تم النسخ!")
                          : t("Copy", "نسخ")}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* STATUS CARD */}
            <motion.div
              variants={itemVariants}
              className={`bg-white border-4 border-black p-5 md:p-6 rounded-2xl relative ${
                isAr
                  ? "shadow-[-8px_8px_0px_0px_#00C950]"
                  : "shadow-[8px_8px_0px_0px_#00C950]"
              }`}
            >
              <h3 className="text-[10px] md:text-xs font-black uppercase mb-4 tracking-widest border-b-2 border-black pb-2">
                {t("Availability Log", "سجل التوفر")}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] md:text-[12px] font-bold text-zinc-400 uppercase">
                    {t("Status:", "الحالة:")}
                  </span>
                  <span className="text-[11px] md:text-[12px] font-black text-[#00C950] uppercase flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#00C950] rounded-full animate-pulse shadow-[0_0_8px_#00C950]" />
                    {t(
                      "Post-Notice / May 2026",
                      "بعد فترة الإنذار / مايو ٢٠٢٦",
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] md:text-[12px] font-bold text-zinc-400 uppercase">
                    {t("Latency:", "وقت الرد:")}
                  </span>
                  <span className="text-[11px] md:text-[12px] font-black uppercase text-black">
                    {t("< 48 HOURS", "< ٤٨ ساعة")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: THE CONTACT FORM --- */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-1">
                    {t("Full Name", "الاسم الكامل")}
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder={t("Enter Name", "أدخل الاسم")}
                    className="w-full bg-white border-2 border-zinc-200 rounded-xl focus:border-[#00C950] focus:ring-0 p-4 text-[12px] font-bold uppercase tracking-wider outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-1">
                    {t("Email Address", "البريد الإلكتروني")}
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@email.com"
                    className="w-full bg-white border-2 border-zinc-200 rounded-xl focus:border-[#00C950] focus:ring-0 p-4 text-[12px] font-bold uppercase tracking-wider outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-1">
                  {t("Subject", "الموضوع")}
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder={t(
                    "What is this about?",
                    "عن ماذا يدور الموضوع؟",
                  )}
                  className="w-full bg-white border-2 border-zinc-200 rounded-xl focus:border-[#00C950] focus:ring-0 p-4 text-[12px] font-bold uppercase tracking-wider outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-1">
                  {t("Transmission", "الرسالة")}
                </label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder={t(
                    "Brief description of your query...",
                    "وصف موجز لاستفسارك...",
                  )}
                  className="w-full bg-white border-2 border-zinc-200 rounded-xl focus:border-[#00C950] focus:ring-0 p-4 text-[12px] font-bold uppercase tracking-wider outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black text-white py-5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:bg-[#00C950] hover:text-black ${
                  isAr
                    ? "shadow-[-6px_6px_0px_0px_rgba(0,0,0,0.2)]"
                    : "shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
                }`}
              >
                {isSubmitting
                  ? t("Transmitting...", "جاري الإرسال...")
                  : t("Send Message", "إرسال الرسالة")}
              </button>

              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-xl text-[10px] font-black uppercase text-center ${
                    result.includes("Error") || result.includes("خطأ")
                      ? "bg-red-50 text-red-500"
                      : "bg-[#00C950]/10 text-[#00C950]"
                  }`}
                >
                  {result}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* --- BOTTOM METADATA --- */}
        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-24 pt-8 border-t-2 border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30"
        >
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-zinc-900 text-center">
            {t("Network Node // Dubai_2026", "عقدة الشبكة // دبي_٢٠٢٦")}
          </p>
          <div className={`flex gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`h-4 w-[2px] bg-black ${i % 4 === 0 ? "h-6 bg-[#00C950]" : ""}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
