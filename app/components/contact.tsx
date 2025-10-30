// app/components/contact.tsx
"use client";

import { useState } from "react";
import { useLocale } from "@/lib/useLocale";
import DominoMotion from "@/app/components/ui/DominoMotion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
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
    <div className="flex flex-col items-center justify-center">
      {/* Heading */}
      <DominoMotion direction="left" delay={0} duration={0.6}>
        <h1 className="self-start text-4xl font-semibold mb-8">
          {t("email.title")}
        </h1>
      </DominoMotion>

      {/* Contact Info Section */}
      <DominoMotion direction="up" delay={0.1} duration={0.6}>
        <section className="w-full max-w-3xl bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10 shadow-sm">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <Linkedin className="w-5 h-5 me-2 text-gray-600" />
              <a
                href="https://www.linkedin.com/in/brianshiroe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/brianshiroe
              </a>
            </li>
            <li className="flex items-center">
              <Github className="w-5 h-5 me-2 text-gray-600" />
              <a
                href="https://github.com/BrianShiroe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/BrianShiroe
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 me-2 text-gray-600" />
              <a href="mailto:brianshiroe@gmail.com" className="hover:underline">
                brianshiroe@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 me-2 text-gray-600" />
              <a href="tel:+971503592133" className="hover:underline">
                +971 50 359 2133
              </a>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 me-2 text-gray-600" />
              <span>Al Wasl, Sheikh Zayed, Dubai - UAE</span>
            </li>
          </ul>
        </section>
      </DominoMotion>

      {/* Subtitle */}
      <DominoMotion direction="left" delay={0.2} duration={0.6}>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {t("email.subtitle")}
        </h2>
      </DominoMotion>

      {/* Description */}
      <DominoMotion direction="left" delay={0.3} duration={0.6}>
        <p className="text-lg text-gray-600 mb-8">{t("email.description")}</p>
      </DominoMotion>

      {/* Contact Form */}
      <form className="w-full max-w-3xl space-y-6" onSubmit={handleSubmit}>
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <DominoMotion direction="up" delay={0.4}>
            <input
              type="text"
              name="name"
              placeholder={t("email.placeholders.name")}
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </DominoMotion>
          <DominoMotion direction="up" delay={0.5}>
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
          <DominoMotion direction="up" delay={0.6}>
            <input
              type="text"
              name="company"
              placeholder={t("email.placeholders.company")}
              value={formData.company}
              onChange={handleChange}
              className={inputClass}
            />
          </DominoMotion>
          <DominoMotion direction="up" delay={0.7}>
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
        <DominoMotion direction="up" delay={0.8}>
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
        <DominoMotion direction="up" delay={0.9}>
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
  );
}
