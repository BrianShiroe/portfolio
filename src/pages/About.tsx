// src/pages/About.tsx
// Displays personal background, education details, and academic achievements.

import {
  AcademicCapIcon,
  TrophyIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

// Reusable Highlight (HL) component for consistent styling
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
    {children}
  </span>
);

const About = () => {
  const achievements = [
    "Cum Laude Graduate",
    "Academic Scholar",
    "Dean's Lister",
    "Leadership Award",
    "Achievers Award",
    "Research Excellence Award",
    "Best Thesis Project Award",
    "Best Abstract and Best Oral Research Presenter - PAIR International Research Conference",
    "Top 20 Finalist - 2024 National AppCon Competition",
  ];

  const Certificates = [
    "CLP: JavaScript Essentials 2",
    "CNA: JavaScript Essentials 1",
    "CLP: Advanced Programming in C",
    "CLA: Programming Essentials in C",
    "CCNAv7: Introduction to Networking",
    "PCAP: Programming Essentials in Python",
    "CNA: Introduction to IoT",
  ];

  const educationDetails = [
    "Degree: Bachelor of Science in Computer Science",
    "Institution: Columban College, Inc., Philippines",
    "Attended: July 12, 2021",
    "Graduated: June 18, 2025",
  ];

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>

      <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-justify">
        I'm a <HL>Computer Science graduate</HL> with a passion for exploring
        the field — from <HL>full-stack development</HL> to problem-solving,
        data structures, and emerging technologies. I enjoy building functional
        applications and understanding how systems work to solve real-world
        challenges. I'm <HL>committed</HL> to continuous learning and applying my skills
        to create innovative and practical solutions.
      </p>

      {/* 3-column layout for Education, Achievements, Awards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Education */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-indigo-600 dark:text-indigo-400">
            <AcademicCapIcon className="w-8 h-8" />
            <span>Education</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {educationDetails.map((detail) => (
              <li key={detail} className="flex items-center space-x-2">
                <AcademicCapIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-green-600 dark:text-green-400">
            <TrophyIcon className="w-8 h-8" />
            <span>Achievements</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex items-center space-x-2">
                <TrophyIcon className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/*Certificates */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-yellow-600 dark:text-yellow-400">
            <CheckBadgeIcon className="w-8 h-8" />
            <span>Certificates</span>
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {Certificates.map((award) => (
              <li key={award} className="flex items-center space-x-2">
                <CheckBadgeIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
