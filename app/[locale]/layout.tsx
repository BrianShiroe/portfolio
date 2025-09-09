// app/[locale]/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Brianshiroe",
  description:
    "Brian Shiroe's Portfolio built with Next.js and TypeScript. Complete with dynamic routing, english and arabic language, responsive design.",
};

export default async function RootLayout({
  children,
  params: awaitedParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await awaitedParams;
  // const locale = params.locale;
  const locale = params.locale || "en"; // default to "en"
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="antialiased flex flex-col lg:flex-row min-h-screen font-sans">
        <Navbar />
        <main className="flex-1 flex justify-center">
          <div className="max-w-[1200] min-w-[320px] p-6 pt-50 lg:pt-20">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
