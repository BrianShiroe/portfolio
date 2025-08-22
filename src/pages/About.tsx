// src/pages/About.tsx
import { AcademicCapIcon, TrophyIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{children}</span>
);

const About = () => {
  const achievements = [
    { name: "Cum Laude Graduate", url: "/images/achievement-images/cum-laude-graduate-award.pdf" },
    { name: "Leadership Award", url: "/images/achievement-images/leadership-award.pdf" },
    { name: "Achievers Award", url: "/images/achievement-images/achievers-award.pdf" },
    { name: "Best Thesis Project Award", url: "/images/achievement-images/best-thesis-project-award.pdf" },
    {
      name: "Academic Scholar and Dean's Lister",
      url: "/images/achievement-images/academic-scholar-and-dean-lister-award.pdf",
    },
    {
      name: "Best Abstract and Best Oral Research Presenter - PAIR Conference",
      url: "/images/achievement-images/best-abstract-and-best-oral-research-presenter-award.pdf",
    },
    {
      name: "Top 20 Finalist - 2024 National AppCon Competition",
      url: "/images/achievement-images/top-20-finalist-award.pdf",
    },
  ];

  const Certificates = [
    {
      name: "CLP: JavaScript Essentials 2",
      url: "https://www.credly.com/badges/713bcc91-01f2-4c72-83f8-5a11eb28cb9c/public_url",
    },
    {
      name: "CNA: JavaScript Essentials 1",
      url: "https://www.credly.com/badges/32d2e399-499b-43c5-b7d8-c2a47c497a66/public_url",
    },
    {
      name: "CCNAv7: Introduction to Networking",
      url: "https://www.credly.com/badges/c0359efc-201e-4532-938c-3c5af7c52992/public_url",
    },
    { name: "PCAP: Programming Essentials in Python", url: "/images/Python-basic-certificate.pdf" },
    {
      name: "CNA: Introduction to IoT",
      url: "https://www.credly.com/badges/bc8bb2a9-4410-48f1-8454-cf5885b506e1/public_url",
    },
  ];

  const educationDetails = [
    {
      name: "Degree: Bachelor of Science in Computer Science",
      url: "https://www.linkedin.com/school/columban-college---olongapo-city/",
    },
    {
      name: "Institution: Columban College, Inc., Philippines",
      url: "https://www.linkedin.com/school/columban-college---olongapo-city/",
    },
    { name: "Attended: July 12, 2021", url: "https://www.linkedin.com/school/columban-college---olongapo-city/" },
    { name: "Graduated: June 18, 2025", url: "https://www.linkedin.com/school/columban-college---olongapo-city/" },
  ];

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>

      <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-justify">
        I'm a <HL>Computer Science graduate</HL> with a passion for exploring the field — from{" "}
        <HL>full-stack development</HL> to problem-solving, data structures, and emerging technologies. I enjoy building
        functional applications and understanding how systems work to solve real-world challenges. I'm{" "}
        <HL>committed</HL> to continuous learning and applying my skills to create innovative and practical solutions.
      </p>

      {/* Education Row */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-indigo-600 dark:text-indigo-400">
          <AcademicCapIcon className="w-8 h-8" />
          <span>Education</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {educationDetails.map((detail) => (
            <a
              key={detail.name}
              href={detail.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-md p-4 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg text-center hover:bg-indigo-50 dark:hover:bg-indigo-900"
            >
              {detail.name}
            </a>
          ))}
        </div>
      </section>

      {/* Achievements Row */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-green-600 dark:text-green-400">
          <TrophyIcon className="w-8 h-8" />
          <span>Achievements</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <a
              key={achievement.name}
              href={achievement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-4 flex flex-col justify-between overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-50 dark:hover:bg-green-900"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{achievement.name}</p>
              <span className="text-green-700 dark:text-green-300 underline">View Achievement</span>
            </a>
          ))}
        </div>
      </section>

      {/* Certificates Row */}
      <section>
        <h3 className="text-3xl font-semibold mb-6 flex items-center space-x-3 text-yellow-600 dark:text-yellow-400">
          <CheckBadgeIcon className="w-8 h-8" />
          <span>Certificates</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-md p-4 flex flex-col justify-between overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-yellow-50 dark:hover:bg-yellow-900"
            >
              <p className="font-semibold mb-2">{cert.name}</p>
              <span className="text-yellow-700 dark:text-yellow-500 underline">View Certificate</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
