// app/[locale]/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/components/ui/Navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js and TypeScript",
};

export default async function RootLayout({
  children,
  params: awaitedParams,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await awaitedParams;
  const locale = params.locale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
     <body className="antialiased flex flex-col sm:flex-row min-h-screen font-sans">
        <Navbar />
        <main className="flex-1 p-20">{children}</main>
      </body>
    </html>
  );
}
