import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import cognitoTechfestLogo from "@assets/Untitled design_1759044466581.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src={cognitoTechfestLogo} 
              alt="CTF Logo" 
              className="w-12 h-12 object-contain"
              data-testid="nav-logo"
            />
            <div className="hidden md:flex items-center space-x-3">
              <Shield className="w-6 h-6 text-primary" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-foreground tracking-tight leading-none">
                  CAPTURE THE FLAG
                </h1>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                  Cybersecurity Challenge
                </p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('event')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-event"
            >
              Event
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-link-contact"
            >
              Contact
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          data-testid="nav-mobile-menu"
        >
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="nav-mobile-link-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('event')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="nav-mobile-link-event"
            >
              Event
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="nav-mobile-link-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              data-testid="nav-mobile-link-contact"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
