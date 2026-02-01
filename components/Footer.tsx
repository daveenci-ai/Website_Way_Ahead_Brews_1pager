
import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';
import { Page } from '../App.tsx';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer className="bg-[#005a31] border-t border-white/10 relative overflow-hidden">
            {/* Condensation Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: 'url(/images/textures/condensation.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                mixBlendMode: 'overlay'
              }}
            />
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <button onClick={() => onNavigate('home')} className="flex items-center mb-6 group outline-none">
                        <img 
                          src="/images/logo/WayAhead-Logo-RGB-260115-v01ccr.png" 
                          alt="Way Ahead Logo" 
                          width="240"
                          height="64"
                          loading="lazy"
                          decoding="async"
                          className="h-16 md:h-20 w-auto transition-transform group-hover:scale-105" 
                        />
                    </button>
                    <p className="max-w-md text-white leading-relaxed mb-8">
                        The future of flavor is here. No compromises, no headaches, just pure excellence in every can.
                    </p>
                    <nav className="flex gap-8 mb-10">
                      <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-white hover:text-white/70 transition-colors">Our Story</button>
                      <button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-white hover:text-white/70 transition-colors">Our Process</button>
                    </nav>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white hover:text-white/70 transition-colors"><Twitter /></a>
                        <a href="#" className="text-white hover:text-white/70 transition-colors"><Instagram /></a>
                        <a href="#" className="text-white hover:text-white/70 transition-colors"><Github /></a>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} Way Ahead Brews. Precision Effervescence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
