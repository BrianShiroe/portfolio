"use client";
import Head from "next/head";
import { useLocale } from "@/lib/useLocale";
import Contact from "@/app/components/contact";

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <>
      <Head>
        <title>{`${t("email.title")} | Brian Ong Haw`}</title>
        <meta
          name="description"
          content="Get in touch with Brian Ong Haw, a Web Developer. Leave a message and start a conversation about your project."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Brian Ong Haw, Contact, Web Developer, Portfolio, Email"
        />

        {/* Open Graph */}
        <meta property="og:title" content={`${t("email.title")} | Brian Ong Haw`} />
        <meta property="og:description" content="Get in touch with Brian Ong Haw, a Web Developer. Leave a message and start a conversation about your project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brianshiroe.vercel.app/contact" />
        <meta property="og:image" content="/images/profile.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t("email.title")} | Brian Ong Haw`} />
        <meta name="twitter:description" content="Get in touch with Brian Ong Haw, a Web Developer. Leave a message and start a conversation about your project." />
        <meta name="twitter:image" content="/images/profile.png" />
      </Head>

      <Contact />
    </>
  );
}
