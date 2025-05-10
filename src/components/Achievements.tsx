
import React from 'react';
import SectionHeading from './SectionHeading';
import { Award, Code, Trophy } from 'lucide-react';

interface AchievementItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start p-4 rounded-lg hover:bg-navy-light transition-colors duration-300">
      <div className="mr-4 text-teal mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-foreground mb-1">{title}</h3>
        <p className="text-slate">{description}</p>
      </div>
    </div>
  );
};

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      description: "Finalist in India's biggest hackathon, developed an innovative solution addressing real-world challenges.",
      icon: <Trophy size={24} />
    },
    {
      title: "GSSoC Contributor",
      description: "Active contributor to multiple open-source projects during Girl Script Summer of Code program.",
      icon: <Code size={24} />
    },
    {
      title: "LeetCode Master",
      description: "Solved 500+ problems across various difficulty levels, demonstrating strong algorithmic skills.",
      icon: <Award size={24} />
    },
    {
      title: "Competitive Programming",
      description: "Achieved high rankings on platforms like Codeforces, demonstrating strong problem-solving abilities.",
      icon: <Award size={24} />
    },
    {
      title: "Unstop & OptiGo Hackathons",
      description: "Winner in multiple hackathons, showcasing innovation and technical excellence.",
      icon: <Trophy size={24} />
    },
    {
      title: "Myntra Hackerramp",
      description: "Finalist in Myntra's prestigious hackathon, developed a fashion-tech solution.",
      icon: <Trophy size={24} />
    }
  ];

  return (
    <section id="achievements" className="section bg-navy-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Achievements" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementItem
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
