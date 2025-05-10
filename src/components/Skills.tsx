
import React from 'react';
import SectionHeading from './SectionHeading';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "HTML", "CSS", "SQL"]
    },
    {
      title: "Technologies",
      skills: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Redux", "Next.js", "TailwindCSS", "Bootstrap", "REST APIs"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker", "AWS", "Firebase", "Vercel", "Netlify"]
    },
    {
      title: "Interests",
      skills: ["Full Stack Development", "Competitive Programming", "Open Source", "Machine Learning", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="section bg-navy-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-navy-light p-6 rounded-lg shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-navy text-slate-light text-sm border border-slate-dark">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
