
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore and get in touch if you have any questions.",
      });
    }, 1500);
  }, [toast]);

  return (
    <motion.div 
      className="min-h-screen bg-navy text-slate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
