
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-teal font-semibold text-2xl">
          YK
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex items-center">
            {navItems.map((item, index) => (
              <a 
                key={item.href}
                href={item.href} 
                className="nav-link"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="/yanshi_kesharwani.pdf" target="_blank" rel="noopener noreferrer" className="ml-5">
            <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">Resume</Button>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light px-4 py-5 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-slate hover:text-teal transition-colors px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
           <a
  href="/yanshi_kesharwani.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn inline-block text-center mt-3"
  onClick={() => setMobileMenuOpen(false)}
>
  Resume
</a>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
