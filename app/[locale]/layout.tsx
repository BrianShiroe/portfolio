// app/[locale]/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app//components/ui/Navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js, TypeScript, and i18n",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col sm:flex-row min-h-screen`}>
        <Navbar />
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
