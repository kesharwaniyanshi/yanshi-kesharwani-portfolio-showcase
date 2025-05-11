
import React, { useRef } from 'react';
import SectionHeading from './SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({ title, company, duration, location, responsibilities }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto bg-navy-light rounded-lg p-6 shadow-lg mb-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <h4 className="text-teal font-medium">{company}</h4>
        </div>
        <div className="flex items-center mt-2 md:mt-0 text-slate-light">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
      </div>
      
      <p className="text-slate-light mb-4 text-sm">{location}</p>
      
      <motion.ul 
        className="space-y-3 mt-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {responsibilities.map((responsibility, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }
            }}
          >
            <span className="text-teal mr-3 mt-1">▹</span>
            <span className="text-slate">{responsibility}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Communication & UI/UX Designer Intern",
      company: "Billboxa.ai",
      duration: "January 2025 - March 2025",
      location: "Bengaluru, Karnataka",
      responsibilities: [
        "Designed high-quality web graphics using Figma, ensuring visual consistency across brand assets.",
        "Created WhatsApp user journeys and templates using Gupshup, streamlining customer communication flows.",
        "Developed branded email templates with Canva for customer onboarding and promotions.",
        "Collaborated with product teams to deliver conversion-optimized, visually appealing communication tools."
      ]
    },
    {
      title: "Event Management Associate, Digital Marketing Associate, Social Media Assistant",
      company: "E-Cell, IIIT Pune",
      duration: "March 2023 - Present",
      location: "Pune, Maharashtra",
      responsibilities: [
        "Managed event planning, on-site activities, and post-event evaluations to enhance future events.",
        "Adapted to algorithm changes, driving 15% growth in social media engagement by refining content strategies.",
        "Designed Instagram posts, optimizing content to boost engagement for E-Cell initiatives."
      ]
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index}
              {...experience}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
