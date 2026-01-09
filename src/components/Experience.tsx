import React, { useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface ExperienceData {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const experiences: ExperienceData[] = [
    {
      title: "Software Development Engineer Intern",
      company: "Amazon",
      duration: "July 2025 - December 2025",
      location: "Bangalore, Karnataka",
      responsibilities: [
        "Engineered comprehensive unit and integration test suites using Jest and backend testing frameworks, improving code coverage from 18% to 100% and ensuring end-to-end API reliability.",
        "Developed backend services and an intermediate Backend-for-Frontend (BFF) layer to migrate a legacy Horizonte-based system to a modern React.js and AWS AppSync architecture.",
        "Onboarded and integrated 8 APIs using AWS API Gateway and ECS, enabling seamless communication between frontend and backend systems.",
        "Contributed to frontend feature integration in React.js as part of a legacy-to-modern architecture migration for a production-ready application.",
        "Upgraded AWS Glue jobs from v2 to v4 using Scala and dependency updates, enhancing system reliability, performance, and maintainability.",
        "Implemented fallback mechanisms, monitoring, and alerting for critical workflows to improve system observability and failure handling in production environments."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Billbox AI Innovations Private Limited",
      duration: "January 2025 - June 2025",
      location: "Remote",
      responsibilities: [
        "Designed high-quality web and communication assets using Figma and Canva, ensuring visual and brand consistency.",
        "Created and optimized WhatsApp user journeys and templates using Gupshup to streamline customer onboarding and transaction flows.",
        "Collaborated with product and design teams to develop visually engaging and conversion-focused communication tools.",
        "Applied real-world software development and problem-solving skills in a dynamic, collaborative environment.",
        "Assisted in creating and maintaining structured technical and design documentation to support team understanding and future scalability."
      ]
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC) 2024",
      duration: "May 2024 - August 2024",
      location: "Remote",
      responsibilities: [
        "Contributed to 3+ web applications with 9 successfully merged pull requests, improving user authentication, navigation, and overall usability.",
        "Enhanced UI/UX by implementing accessible design practices, robust input validation, and user-centric features such as FAQs and contextual help buttons.",
        "Collaborated with mentors and fellow contributors through code reviews and issue discussions to deliver clean, maintainable, and scalable solutions.",
        "Focused on building intuitive, user-friendly experiences by translating feature requirements into well-structured frontend implementations."
      ]
    },
    {
      title: "Event Management Associate, Digital Marketing Associate, Social Media Assistant",
      company: "E-Cell",
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Company Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-teal text-navy-dark'
                    : 'bg-navy-light text-slate hover:text-teal'
                }`}
              >
                {exp.company.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Experience Content */}
          <div className="relative bg-navy-light rounded-lg p-6 md:p-8 shadow-lg min-h-[400px]">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy hover:bg-teal/20 text-slate-light hover:text-teal transition-colors z-10"
              aria-label="Previous experience"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy hover:bg-teal/20 text-slate-light hover:text-teal transition-colors z-10"
              aria-label="Next experience"
            >
              <ChevronRight size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="px-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{experiences[activeIndex].title}</h3>
                    <h4 className="text-teal font-medium">{experiences[activeIndex].company}</h4>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-slate-light">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{experiences[activeIndex].duration}</span>
                  </div>
                </div>
                
                <p className="text-slate-light mb-4 text-sm">{experiences[activeIndex].location}</p>
                
                <ul className="space-y-3 mt-4">
                  {experiences[activeIndex].responsibilities.map((responsibility, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <span className="text-teal mr-3 mt-1 flex-shrink-0">▹</span>
                      <span className="text-slate">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-teal w-6' : 'bg-slate-light/30 hover:bg-slate-light/50'
                  }`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
