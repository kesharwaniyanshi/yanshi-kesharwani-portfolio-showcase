
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
  timeline: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  details,
  githubUrl,
  demoUrl,
  imageUrl,
  timeline,
  reverse = false
}) => {
  return (
    <div className={`relative md:grid md:grid-cols-12 gap-4 mb-20 ${reverse ? '' : ''}`}>
      {/* Project Image */}
      <div className={`col-span-7 ${reverse ? 'md:col-start-6' : 'md:col-start-1'}`}>
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative block w-full h-full overflow-hidden rounded-lg"
        >
          <div className="absolute inset-0 bg-navy-dark/80 group-hover:bg-navy-dark/30 transition-all duration-300 z-10"></div>
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      </div>
      
      {/* Project Info */}
      <div className={`col-span-6 ${reverse ? 'md:col-start-1 md:text-right' : 'md:col-start-7'} z-20`}>
        <div className="bg-navy-light p-6 rounded-lg shadow-lg md:absolute md:top-1/2 md:-translate-y-1/2">
          <div className="flex justify-between items-center mb-2">
            <p className="text-teal font-mono text-sm">Featured Project</p>
            <p className="text-slate-light text-sm font-mono">{timeline}</p>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors"
            >
              {title}
            </a>
          </h3>
          <div className="mb-4">
            <p className="text-slate">{description}</p>
          </div>
          <ul className="space-y-2 mb-4">
            {details.map((detail, index) => (
              <li key={index} className={`flex items-start ${reverse ? 'justify-end' : ''}`}>
                <span className="text-teal mr-2">▹</span>
                <span className="text-slate text-sm">{detail}</span>
              </li>
            ))}
          </ul>
          <ul className={`flex flex-wrap gap-2 mb-6 text-sm text-slate-light ${reverse ? 'justify-end' : ''}`}>
            {technologies.map((tech) => (
              <li key={tech} className="font-mono">{tech}</li>
            ))}
          </ul>
          <div className={`flex gap-4 ${reverse ? 'justify-end' : ''}`}>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={`${title} GitHub repository`}
            >
              <Github size={20} />
            </a>
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={`${title} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FusionCart",
      description: "Web Application Connecting Online and In-Store Shopping",
      details: [
        "Engineered a full-stack e-commerce platform handling 800 products across 16 categories using React.js, Redux, Node.js, Express.js, MongoDB, optimizing UX and performance through efficient database queries and state management.",
        "Implemented features like product search, real-time product details, stock updates, and recommendation logic, used web scraping scripts to extract 800 images for an enhanced product catalog",
        "Integrated Machine Learning model for enhanced product recommendations and personalized user experience."
      ],
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/kesharwaniyanshi/fusioncart",
      demoUrl: "https://fusioncart-demo.vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      timeline: "September 2024 - November 2024"
    },
    {
      title: "GetAWay",
      description: "Full-Stack Hotel Booking Web Application",
      details: [
        "Built a full-stack app using MongoDB, Express.js, React.js, Node.js, implementing JWT-based authentication and an admin panel to manage 50 users.",
        "Developed database driven features like hotel listings, managing collection of 10 hotels and a user feedback system to enhance engagement.",
        "Created a responsive UI ensuring 100% cross-device compatibility and seamless integration."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      githubUrl: "https://github.com/kesharwaniyanshi/getaway",
      demoUrl: "https://getaway-hotel.vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      timeline: "April 2024 - June 2024",
      reverse: true,
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" />
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              {...project}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-slate mb-6">Interested in more of my projects?</p>
          <a 
            href="https://github.com/kesharwaniyanshi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
              View More on GitHub
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
