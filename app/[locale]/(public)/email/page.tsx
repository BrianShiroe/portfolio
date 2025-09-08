// app/[locale]/(public)/email/page.tsx
"use client";
import { useState } from "react";

export default function EmailPage() {
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
        setStatus("Message sent!");
        setFormData(initialState); // Clear form
      } else {
        setStatus(data.message || "Error sending message");
      }
    } catch {
      setStatus("Error sending message");
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500";

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="self-start text-4xl font-semibold mb-8">Contact Me</h1>
      <h2 className="text-2xl font-semibold text-gray-900">Have a proposal?</h2>
      <p className="text-lg text-gray-600 mb-8">Leave me a message.</p>

      <form className="w-full max-w-3xl space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />

        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={isSending}
            className="border border-gray-900 text-gray-900 px-8 py-2 rounded-4xl hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
          {status && <p className="mt-2 text-gray-700">{status}</p>}
        </div>
      </form>
    </div>
  );
}
