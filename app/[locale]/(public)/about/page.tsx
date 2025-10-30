// app/[locale]/(public)/about/page.tsx
"use client";
import Head from "next/head";
import About from "@/app/components/about";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Brian Ong Haw</title>
        <meta
          name="description"
          content="Learn more about Brian Ong Haw, a Web Developer, his background, education, and experience."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Brian Ong Haw, Web Developer, Portfolio, About Me, Computer Science"
        />

        {/* Open Graph */}
        <meta property="og:title" content="About | Brian Ong Haw" />
        <meta
          property="og:description"
          content="Learn more about Brian Ong Haw, a Web Developer, his background, education, and experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="/images/profile.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Brian Ong Haw" />
        <meta
          name="twitter:description"
          content="Learn more about Brian Ong Haw, a Web Developer, his background, education, and experience."
        />
        <meta name="twitter:image" content="/images/profile.png" />
      </Head>

      <About />
    </>
  );
}
