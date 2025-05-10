
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = {
    title: "Events Team Lead",
    company: "E-Cell, IIIT Pune",
    duration: "September 2023 - Present",
    responsibilities: [
      "Led event management for entrepreneurship workshops and startup competitions",
      "Implemented digital marketing strategies resulting in 40% increase in event participation",
      "Managed social media content resulting in 30% growth in follower engagement",
      "Coordinated with external speakers and partners for collaborative initiatives",
      "Organized networking sessions connecting students with industry professionals"
    ]
  };

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" />
        
        <div className="max-w-3xl mx-auto bg-navy-light rounded-lg p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
              <h4 className="text-teal font-medium">{experience.company}</h4>
            </div>
            <div className="flex items-center mt-2 md:mt-0 text-slate-light">
              <Calendar size={16} className="mr-2" />
              <span className="text-sm">{experience.duration}</span>
            </div>
          </div>
          
          <ul className="space-y-3 mt-4">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal mr-3 mt-1">▹</span>
                <span className="text-slate">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
