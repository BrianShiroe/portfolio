import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { TopProjects } from "@/components/TopProjects";
import { AllProjects } from "@/components/AllProjects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { TechTicker } from "@/components/TechTicker";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <Hero />

      {/* Divider */}
      <TechTicker />
      <About />

      <TopProjects />
      <AllProjects />

      <Skills />
      <Services />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}
