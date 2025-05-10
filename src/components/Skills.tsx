
import React from 'react';
import SectionHeading from './SectionHeading';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C/C++", "Java", "Python", "JavaScript", "HTML5", "CSS"]
    },
    {
      title: "Technologies",
      skills: ["Bootstrap", "ReactJS", "NodeJS", "ExpressJS", "REST API", "MongoDB", "MySQL", "NextJS", "Salesforce(CRM)", "Git", "Github"]
    },
    {
      title: "Tools",
      skills: ["Adobe Photoshop", "Postman", "Figma", "Canva", "draw.io", "Windows", "Unix/Linux"]
    },
    {
      title: "Skills & Interests",
      skills: ["Data Structures", "Algorithms", "API Integration", "Full-Stack Web Development", "Web Development", "Competitive Programming", "Open Source Contributions"]
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
