
import React, { useState } from 'react';
import { Github, Twitter, Instagram, Send } from 'lucide-react';
import { Page } from '../App.tsx';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [isContactSubmitted, setIsContactSubmitted] = useState(false);

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (contactForm.name && contactForm.email && contactForm.message) {
            console.log('Contact form submitted:', contactForm);
            setContactForm({ name: '', email: '', message: '' });
            setIsContactSubmitted(true);
        }
    };

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
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Brand Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
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

                    {/* Right Column - Contact Form */}
                    <div id="contact" className="flex flex-col items-center md:items-start scroll-mt-[120px]">
                        <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
                        
                        {isContactSubmitted ? (
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-full max-w-md text-center">
                                <span className="text-3xl mb-3 block">🍻</span>
                                <p className="text-white text-lg font-bold">Thank you for reaching out!</p>
                                <p className="text-white/70 text-sm mt-2">We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleContactSubmit} className="w-full max-w-md space-y-4">
                                <input
                                    type="text"
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                    placeholder="Your name"
                                    required
                                    className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                />
                                <input
                                    type="email"
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    placeholder="Your email"
                                    required
                                    className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                />
                                <textarea
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                    placeholder="Your message"
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#ec1c24] text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </button>
                            </form>
                        )}
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
