// src/App.tsx
// Root component managing layout, theming, and routing for all main sections.
// Implements light/dark mode, background transitions, and fixed Navbar.
// Sections include Home, About, Skills, Projects (Academic & Personal), and Contact.

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import ProjectsAcademic from "./pages/ProjectsAcademic";
import ProjectsPersonal from "./pages/ProjectsPersonal";
import Contact from "./pages/Contact";
import { getInitialTheme, applyTheme, toggleThemeValue } from "./utils/theme";
import type { Theme } from "./utils/theme";
import LoadingScreen from "./components/LoadingScreen";
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    // Simulate loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = toggleThemeValue(theme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const lightBgColors = ["bg-white", "bg-gray-50"];
  const darkBgColors = ["bg-gray-900", "bg-gray-800"];

  const getBgClass = (index: number) => (theme === "light" ? lightBgColors[index % 2] : darkBgColors[index % 2]);

  if (isLoading) {
    return <LoadingScreen theme={theme} />;
  }

  return (
    <div
      className={`${
        theme === "dark" ? "font-mono bg-gray-900" : "font-inter bg-white"
      } text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen flex flex-col`}
    >
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>

      <main className="pt-0">
        <section id="home" className={`${getBgClass(0)} min-h-[70vh] border-b border-gray-300 dark:border-gray-700`}>
          <Home />
        </section>
        <section
          id="about"
          className={`${getBgClass(1)} min-h-[70vh] border-b border-gray-300 dark:border-gray-700 pt-[5vh]`}
        >
          <About />
        </section>
        <section
          id="skills"
          className={`${getBgClass(2)} min-h-[70vh] border-b border-gray-300 dark:border-gray-700 pt-[5vh]`}
        >
          <Skills />
        </section>
        <section
          id="projects-academic"
          className={`${getBgClass(3)} min-h-[70vh] border-b border-gray-300 dark:border-gray-700 pt-[5vh]`}
        >
          <ProjectsAcademic />
        </section>
        <section
          id="projects-personal"
          className={`${getBgClass(4)} min-h-[70vh] border-b border-gray-300 dark:border-gray-700 pt-[5vh]`}
        >
          <ProjectsPersonal />
        </section>
        <section id="contact" className={`${getBgClass(5)} min-h-[70vh] pt-[5vh]`}>
          <Contact />
        </section>
      </main>
      <Footer theme={theme} />
      <SocialSidebar />
    </div>
  );
};

export default App;