"use client";
import { useState } from "react";
import { useLocale } from "@/lib/useLocale";
import DominoMotion from "@/app/components/ui/DominoMotion";
import Head from "next/head";

export default function EmailPage() {
  const { t } = useLocale();

  const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus(t("email.success"));
        setFormData(initialState);
      } else {
        setStatus(data.message || t("email.error"));
      }
    } catch {
      setStatus(t("email.error"));
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500";

  return (
    <>
      <Head>
        <title>{`${t("email.title")} | Brian Ong Haw`}</title>
        <meta
          name="description"
          content="Get in touch with Brian Ong Haw, a Full-Stack Developer. Leave a message and start a conversation about your project."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Brian Ong Haw, Contact, Full-Stack Developer, Portfolio, Email"
        />

        {/* Open Graph */}
        <meta property="og:title" content={`${t("email.title")} | Brian Ong Haw`} />
        <meta property="og:description" content="Get in touch with Brian Ong Haw, a Full-Stack Developer. Leave a message and start a conversation about your project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/email" />
        <meta property="og:image" content="/images/profile.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t("email.title")} | Brian Ong Haw`} />
        <meta name="twitter:description" content="Get in touch with Brian Ong Haw, a Full-Stack Developer. Leave a message and start a conversation about your project." />
        <meta name="twitter:image" content="/images/profile.png" />
      </Head>

      <div className="flex flex-col items-center justify-center">
        {/* Heading */}
        <DominoMotion direction="left" delay={0} duration={0.6}>
          <h1 className="self-start text-4xl font-semibold mb-8">
            {t("email.title")}
          </h1>
        </DominoMotion>

        {/* Subtitle */}
        <DominoMotion direction="left" delay={0.1} duration={0.6}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {t("email.subtitle")}
          </h2>
        </DominoMotion>

        {/* Description */}
        <DominoMotion direction="left" delay={0.2} duration={0.6}>
          <p className="text-lg text-gray-600 mb-8">{t("email.description")}</p>
        </DominoMotion>

        {/* Form */}
        <form className="w-full max-w-3xl space-y-6" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <DominoMotion direction="up" delay={0.3}>
              <input
                type="text"
                name="name"
                placeholder={t("email.placeholders.name")}
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </DominoMotion>
            <DominoMotion direction="up" delay={0.4}>
              <input
                type="email"
                name="email"
                placeholder={t("email.placeholders.email")}
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </DominoMotion>
          </div>

          {/* Company & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <DominoMotion direction="up" delay={0.5}>
              <input
                type="text"
                name="company"
                placeholder={t("email.placeholders.company")}
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
              />
            </DominoMotion>
            <DominoMotion direction="up" delay={0.6}>
              <input
                type="tel"
                name="phone"
                placeholder={t("email.placeholders.phone")}
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </DominoMotion>
          </div>

          {/* Message */}
          <DominoMotion direction="up" delay={0.7}>
            <textarea
              name="message"
              placeholder={t("email.placeholders.message")}
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </DominoMotion>

          {/* Submit Button */}
          <DominoMotion direction="up" delay={0.8}>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={isSending}
                className="border border-gray-900 text-gray-900 px-8 py-2 rounded-4xl hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? t("email.sending") : t("email.submit")}
              </button>
              {status && <p className="mt-2 text-gray-700">{status}</p>}
            </div>
          </DominoMotion>
        </form>
      </div>
    </>
  );
}
