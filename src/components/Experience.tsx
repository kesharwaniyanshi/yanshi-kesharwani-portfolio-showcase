
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
  "title": "Software Development Engineer Intern",
  "company": "Amazon",
  "duration": "July 2025 - December 2025",
  "location": "Bangalore, Karnataka",
  "responsibilities": [
    "Engineered comprehensive unit and integration test suites using Jest and backend testing frameworks, improving code coverage from 18% to 100% and ensuring end-to-end API reliability.",
    "Developed backend services and an intermediate Backend-for-Frontend (BFF) layer to migrate a legacy Horizonte-based system to a modern React.js and AWS AppSync architecture.",
    "Onboarded and integrated 8 APIs using AWS API Gateway and ECS, enabling seamless communication between frontend and backend systems.",
    "Contributed to frontend feature integration in React.js as part of a legacy-to-modern architecture migration for a production-ready application.",
    "Upgraded AWS Glue jobs from v2 to v4 using Scala and dependency updates, enhancing system reliability, performance, and maintainability.",
    "Implemented fallback mechanisms, monitoring, and alerting for critical workflows to improve system observability and failure handling in production environments."
  ]
},
  {
    "title": "Software Development Intern",
    "company": "Billbox AI Innovations Private Limited",
    "duration": "January 2025 - June 2025",
    "location": "Remote",
    "responsibilities": [
      "Designed high-quality web and communication assets using Figma and Canva, ensuring visual and brand consistency.",
      "Created and optimized WhatsApp user journeys and templates using Gupshup to streamline customer onboarding and transaction flows.",
      "Collaborated with product and design teams to develop visually engaging and conversion-focused communication tools.",
      "Applied real-world software development and problem-solving skills in a dynamic, collaborative environment.",
      "Assisted in creating and maintaining structured technical and design documentation to support team understanding and future scalability."
      ]
    },
      {
  "title": "Open Source Contributor",
  "company": "GirlScript Summer of Code (GSSoC) 2024",
  "duration": "May 2024 - August 2024",
  "location": "Remote",
  "responsibilities": [
    "Contributed to 3+ web applications with 9 successfully merged pull requests, improving user authentication, navigation, and overall usability.",
    "Enhanced UI/UX by implementing accessible design practices, robust input validation, and user-centric features such as FAQs and contextual help buttons.",
    "Collaborated with mentors and fellow contributors through code reviews and issue discussions to deliver clean, maintainable, and scalable solutions.",
    "Focused on building intuitive, user-friendly experiences by translating feature requirements into well-structured frontend implementations."
  ]
},
    {
      title: "Event Management Associate, Digital Marketing Associate, Social Media Assistant",
      company: "E-Cell, IIIT Pune",
      duration: "March 2023 - May 2025",
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
