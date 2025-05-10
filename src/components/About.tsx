
import React from 'react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-slate mb-4">
              Hello! I'm Yanshi, a third-year B.Tech Computer Science student at IIIT Pune with a CGPA of 8.51. 
              I am passionate about creating technology that solves real-world problems and enhances user experiences.
            </p>
            
            <p className="text-slate mb-4">
              As a <span className="highlight">web developer</span> and <span className="highlight">competitive programmer</span>, I enjoy the 
              challenges of both building functional applications and solving complex algorithmic problems. My interests 
              span across <span className="highlight">full-stack development</span>, <span className="highlight">open-source contributions</span>, 
              and creating innovative <span className="highlight">software solutions</span>.
            </p>
            
            <p className="text-slate mb-4">
              I'm currently pursuing my Bachelor of Technology in Computer Science and Engineering at the Indian Institute of 
              Information Technology, Pune (November 2022 - June 2026). Before that, I completed my Higher Secondary education 
              at Gorakhpur Public School with 93.8%.
            </p>
            
            <p className="text-slate">
              I'm always looking for new opportunities to collaborate, learn, and create impactful projects. Let's build 
              something amazing together!
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-md overflow-hidden relative group">
              <div className="absolute inset-0 bg-teal/20 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Yanshi Kesharwani" 
                className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 border-2 border-teal rounded-md translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
