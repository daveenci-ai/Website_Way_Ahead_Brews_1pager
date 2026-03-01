
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Page } from '../App.tsx';

interface NavLinkProps {
  active?: boolean;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ active, onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative text-lg font-semibold py-2 font-heading transition-colors outline-none focus:text-[#ec1c24] ${active ? 'text-[#ec1c24]' : 'text-white hover:text-[#ec1c24]'}`}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 w-full bg-[#ec1c24]"
        initial={{ scaleX: active ? 1 : 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </button>
  );
};

const Header: React.FC<{ currentPage: Page; onNavigate: (page: Page) => void }> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = ['story-section', 'process', 'contact'];
    const visibleSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }
        // Pick the first visible section in DOM order, or null if none visible
        const active = sectionIds.find((id) => visibleSections.has(id)) || null;
        setActiveSection(active);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [currentPage]);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const scrollToStory = () => {
    // Navigate to home first if not already there
    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for navigation then scroll
      setTimeout(() => {
        document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToProcess = () => {
    // Navigate to home first if not already there
    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for navigation then scroll
      setTimeout(() => {
        document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    // Navigate to home first if not already there
    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for navigation then scroll
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#005a31] border-b border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button 
              onClick={() => handleNav('home')} 
              className="flex items-center group outline-none -ml-1"
            >
              <img
                src="/images/logo/WayAhead-Symbol-WABRed.png"
                alt="Way Ahead Logo"
                width="60"
                height="60"
                /* @ts-ignore - fetchpriority is a valid experimental attribute */
                fetchpriority="high"
                decoding="async"
                className="h-[58px] md:h-[72px] w-auto"
              />
            </button>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              <NavLink active={activeSection === 'story-section'} onClick={scrollToStory}>Our Story</NavLink>
              <NavLink active={activeSection === 'process'} onClick={scrollToProcess}>Our Process</NavLink>
              <NavLink active={activeSection === 'contact'} onClick={scrollToContact}>Contact Us</NavLink>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Mobile Menu Toggle (Sandwich Bar) */}
              <button 
                className="md:hidden text-white p-2 hover:text-[#ec1c24] transition-colors outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-[#005a31] flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <nav className="flex flex-col gap-10 items-center text-center">
              <button 
                onClick={scrollToStory} 
                className="text-4xl font-bold tracking-tight text-white"
              >
                Our Story
              </button>
              <button 
                onClick={scrollToProcess} 
                className="text-4xl font-bold tracking-tight text-white"
              >
                Our Process
              </button>
              <button 
                onClick={scrollToContact} 
                className="text-4xl font-bold tracking-tight text-white"
              >
                Contact Us
              </button>
            </nav>
            
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-auto flex items-center justify-center">
                <img src="/images/logo/WayAhead-Symbol-WABRed.png" alt="Logo" className="h-full w-auto" />
              </div>
              <p className="text-slate-500 text-sm tracking-widest uppercase">Way Ahead Brews</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Header;
