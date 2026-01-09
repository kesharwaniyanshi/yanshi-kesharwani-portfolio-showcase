
import React from 'react';
import SectionHeading from './SectionHeading';
import { Github, Linkedin, Mail, Code, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-navy-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact" />
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out through any of the channels below!
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Connect With Me */}
            <div className="bg-navy-light rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-5">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:kesharwaniyanshi@gmail.com"
                  className="flex items-center justify-center sm:justify-start text-slate hover:text-teal transition-colors"
                >
                  <Mail className="mr-3 flex-shrink-0" size={20} />
                  <span className="text-sm">kesharwaniyanshi@gmail.com</span>
                </a>
                
                <a 
                  href="https://github.com/kesharwaniyanshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start text-slate hover:text-teal transition-colors"
                >
                  <Github className="mr-3 flex-shrink-0" size={20} />
                  <span className="text-sm">github.com/kesharwaniyanshi</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/yanshi-kesharwani-57412624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start text-slate hover:text-teal transition-colors"
                >
                  <Linkedin className="mr-3 flex-shrink-0" size={20} />
                  <span className="text-sm">linkedin.com/in/yanshi-kesharwani</span>
                </a>
                
                <a 
                  href="https://leetcode.com/u/yanshi_yk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start text-slate hover:text-teal transition-colors"
                >
                  <Code className="mr-3 flex-shrink-0" size={20} />
                  <span className="text-sm">leetcode.com/u/yanshi_yk</span>
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-navy-light rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-5">Location</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center sm:justify-start text-slate">
                  <MapPin className="mr-3 flex-shrink-0" size={20} />
                  <span className="text-sm">Pune, Maharashtra, India</span>
                </div>
                
                <a 
                  href="tel:+916392597598" 
                  className="flex items-center justify-center sm:justify-start text-slate hover:text-teal transition-colors"
                >
                  <Phone className="mr-3 flex-shrink-0" size={20} />
                  <span className="text-sm">+91 6392597598</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
