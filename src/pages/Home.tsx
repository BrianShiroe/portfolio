// src/pages/Home.tsx
// Displays the homepage with a welcome message, profile picture, and user intro.
// Includes animated name banner and short professional description.

import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>brianshiroe | Full Stack Developer</title>
        <meta
          name="description"
          content="Welcome to the official portfolio of brian haw – Full Stack Developer, Machine Learning enthusiast, and Python expert."
        />
        <meta
          name="keywords"
          content="brianshiroe, Software Developer, Full Stack Developer, Python Developer, Machine Learning, Portfolio, React Developer"
        />
        <meta name="author" content="Brian O. Haw" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="brianshiroe Portfolio" />
        <meta
          property="og:description"
          content="Explore the work and projects of brianshiroe, a full stack and ML developer."
        />
        <meta property="og:image" content="/images/home-images/profile-picture.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <main className="p-6 md:p-12 flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <header aria-label="Welcome section" className="flex flex-col items-center space-y-3 px-4">
          <h2 className="mt-6 mb-6 text-3xl sm:text-4xl font-semibold inline-flex items-center justify-center space-x-3">
            <span>Welcome to My Portfolio</span>
          </h2>

          {/* Profile Picture - MOVED HERE */}
          <div
            className="w-56 h-56 sm:w-54 sm:h-54 rounded-full overflow-hidden shadow-2xl my-6 transition-transform duration-300 ease-in-out hover:scale-105"
            aria-label="Profile picture of brian haw"
          >
            <img
              src="/images/home-images/profile-square.png"
              alt="brianshiroe"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Name Section */}
          <h1 className="text-4xl sm:text-5xl font-bold inline-flex items-center justify-center space-x-3 text-green-700 dark:text-green-400 tracking-wide">
            <button
              onClick={scrollToAbout}
              aria-label="Scroll to About section"
              className="focus:outline-none"
              type="button"
            >
              <ChevronDoubleDownIcon className="w-10 h-10 sm:w-11 sm:h-11 animate-bounce" />
            </button>

            <span>BRIANSHIROE</span>

            <button
              onClick={scrollToAbout}
              aria-label="Scroll to About section"
              className="focus:outline-none"
              type="button"
            >
              <ChevronDoubleDownIcon className="w-10 h-10 sm:w-11 sm:h-11 animate-bounce" />
            </button>
          </h1>

          {/* Description Section */}
          <section
            aria-label="Professional description"
            className="mt-10 px-4 max-w-2xl text-lg sm:text-xl font-medium text-center"
          >
            <div className="inline-flex items-center justify-center space-x-2">
              <span>· Full Stack · Software ·</span>
            </div>

            <hr className="my-2 border-t border-black dark:border-white w-36 sm:w-60 mx-auto" />

            <div className="inline-flex items-center justify-center mt-1">
              <span>Developer</span>
            </div>
          </section>
        </header>
      </main>
    </>
  );
};

export default Home;
