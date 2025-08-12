// src/pages/Skills.tsx
// Skills section displaying categorized technical proficiencies.

const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "PHP", "GDScript", "C#"],
  "Web Development": ["HTML", "CSS", "Bootstrap", "Tailwind", "Flask", "React.js", "Next.js"],
  Services: ["Netlify", "Railway", "Supabase", "Firebase"],
  Databases: ["MySQL", "SQLite", "MongoDB", "PostgreSQL", "Firestore"],
  "Development and Machine Learning Tools": ["VSCode", "LLMs", "Git", "Jira", "Trello", "YOLO", "OpenCV"],
  "Game Development": ["Unity", "Unreal Engine", "Roblox Studio", "Godot"],
  Frontend: ["Component-based Architecture", "Virtual DOM", "props", "hooks", "useState", "useEffect", "skeleton loading"],
  Backend: [
    "HTTP",
    "RESTful API",
    "Authentication",
    "Authorization",
    "Error handling",
    "Security basics",
    "Testing",
    "debugging",
  ],
  "Version Control": [
    "git",
    "add",
    "commit",
    "push",
    "pull",
    "reset --soft",
    "reset --hard",
    "checkout",
    "checkout -b",
    "stash",
  ],
};

const Skills = () => (
  <div className="px-4 py-12 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold mb-12 text-center">Skills & Tools</h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skills).map(([category, items]) => (
        <div
          key={category}
          className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:scale-[1.01]"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{category}</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all duration-200 transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-800 dark:hover:text-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
