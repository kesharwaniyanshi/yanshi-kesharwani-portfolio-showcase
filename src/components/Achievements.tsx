
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
      description: "Winner of the Smart India Hackathon 2024, selected as a finalist from 100+ teams. Worked in a team to develop a software solution, contributing to development, task planning, and integration.",
      icon: <Trophy size={24} />
    },
    {
      title: "GSSoC 2024 Contributor",
      description: "Contributed to open-source projects during GSSoC 2024 with 9 successfully merged pull requests.",
      icon: <Code size={24} />
    },
    {
      title: "Competitive Programming",
      description: "Solved over 500+ DSA questions on platforms including LeetCode (Highest Rating: 1667), Codeforces (Highest Rating: 1102), and CodeChef (Highest Rating: 1604).",
      icon: <Award size={24} />
    },
    {
      title: "OptiGo Inter-IIIT Contest",
      description: "Achieved 35th rank in the OptiGo Inter-IIIT coding contest out of 250 participants.",
      icon: <Trophy size={24} />
    },
    {
      title: "Unstop Talent Park Tech",
      description: "Ranked among the top 230 out of 68,000 participants in the Unstop Talent Park Tech competition.",
      icon: <Trophy size={24} />
    },
    {
      title: "Myntra Hackerramp",
      description: "Qualified for the Implementation Phase of the Myntra Hackerramp We-for-She Hackathon, selected among 30,000 participants and placed in the top 1,200 teams.",
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
