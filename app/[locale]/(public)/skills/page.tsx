// app/[locale]/(public)/skills/page.tsx
"use client";

export default function SkillsPage() {
  const skills = {
    "Frontend Development": [
      "Next.js",
      "React.js",
      "Tailwind",
      "Bootstrap",
      "CSS",
      "HTML",
      "Shadcn",
    ],
    "Backend Development": ["Flask", "Node.js", "PHP", "Stripe"],
    "Programming Languages": [
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      "GDScript",
    ],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firestore"],
    "DevOps & Cloud Services": [
      "Docker",
      "Firebase",
      "Supabase",
      "Railway",
      "Netlify",
    ],
    "Developer Tools": ["Git", "VSCode", "Jira", "Trello", "Clickup", "Figma"],
    "Machine Learning & AI": ["YOLO", "OpenCV", "LLMs"],
    "Game Development": ["Unity", "Unreal Engine", "Godot", "Roblox Studio"],
  };

  return (
    <div className="">
      <h1 className="self-start text-4xl font-bold mb-10">Skills</h1>

      <section className="w-full max-w-5xl space-y-12">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-100 p-12 rounded-4xl inset-shadow"
          >
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center rounded-2xl shadow-lg p-4 hover:scale-103 transition-transform bg-white"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
