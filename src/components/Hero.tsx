
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <motion.p 
            className="text-teal mb-6 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Yanshi Kesharwani.
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aspiring Software Engineer.
          </motion.h2>
          
          <motion.p 
            className="text-slate text-lg md:text-xl max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm a passionate <span className="highlight">web developer</span> and <span className="highlight">competitive programmer </span> 
            with a keen interest in building exceptional digital experiences and solving complex problems.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://github.com/kesharwaniyanshi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yanshi-kesharwani-57412624b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:kesharwaniyanshi@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://leetcode.com/u/yanshi_yk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Leetcode"
            >
              <Code size={24} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#contact" className="btn">Get In Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
