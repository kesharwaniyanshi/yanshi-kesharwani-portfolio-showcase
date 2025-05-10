
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
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
          <p className="text-teal font-mono mb-2 text-sm">Featured Project</p>
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
      description: "An innovative e-commerce platform integrating online and in-store shopping experiences. Features ML-based product recommendation system and seamless checkout process.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "TailwindCSS"],
      githubUrl: "https://github.com/yanshikesharwani/fusioncart",
      demoUrl: "https://fusioncart-demo.vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: "GetAWay",
      description: "A comprehensive hotel booking web application with JWT authentication, admin dashboard for property management, and a responsive user interface for easy booking.",
      technologies: ["Next.js", "MongoDB", "Express", "Node.js", "JWT", "Bootstrap"],
      githubUrl: "https://github.com/yanshikesharwani/getaway",
      demoUrl: "https://getaway-hotel.vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
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
            href="https://github.com/yanshikesharwani" 
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
