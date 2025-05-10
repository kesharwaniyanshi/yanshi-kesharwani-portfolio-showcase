
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-navy-dark">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact" />
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-slate-light block mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-navy-light border-slate-dark text-slate focus:border-teal"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-slate-light block mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-navy-light border-slate-dark text-slate focus:border-teal"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-slate-light block mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="h-32 bg-navy-light border-slate-dark text-slate focus:border-teal"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-teal text-navy-dark hover:bg-teal-dark hover:text-navy-dark font-medium w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:kesharwaniyanshi@gmail.com"
                    className="flex items-center text-slate hover:text-teal transition-colors"
                  >
                    <Mail className="mr-3" size={20} />
                    kesharwaniyanshi@gmail.com
                  </a>
                  
                  <a 
                    href="https://github.com/kesharwaniyanshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate hover:text-teal transition-colors"
                  >
                    <Github className="mr-3" size={20} />
                    github.com/kesharwaniyanshi
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/yanshi-kesharwani-57412624b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate hover:text-teal transition-colors"
                  >
                    <Linkedin className="mr-3" size={20} />
                    linkedin.com/in/yanshi-kesharwani
                  </a>
                  
                  <a 
                    href="https://leetcode.com/u/yanshi_yk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate hover:text-teal transition-colors"
                  >
                    <Code className="mr-3" size={20} />
                    leetcode.com/u/yanshi_yk
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Location</h3>
                <p className="text-slate">
                  Pune, Maharashtra, India
                </p>
                <p className="text-slate mt-2">
                  <a href="tel:+916392597598" className="hover:text-teal transition-colors">
                    +91 6392597598
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
