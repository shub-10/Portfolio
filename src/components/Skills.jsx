import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
    },
    {
      category: "Backend & Architecture",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "REST APIs",
        "Authentication (JWT)",
        "WebSockets",
        "API Design",
      ],
    },
    {
      category: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "TailwindCSS"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "EC2", "Git", "GitHub", "Postman"],
    },
    {
      category: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "System Design",
        "SDLC",
        "Agile Methodology",
      ],
    },
  ];

  return (
    <section className="mb-24 sm:mb-32">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="group">
            <h3 className="text-2xl sm:text-3xl text-white mb-5 sm:mb-6 font-semibold group-hover:text-[#3b82f6] transition-colors duration-300">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 bg-[#1a1a1a] text-[#c0c0c0] rounded-lg text-base sm:text-lg font-medium hover:bg-[#252525] hover:text-white transition-all duration-300 cursor-default border border-[#2a2a2a] hover:border-[#3b82f6]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;