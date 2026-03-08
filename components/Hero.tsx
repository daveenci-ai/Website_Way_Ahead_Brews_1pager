
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onStoryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStoryClick }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showStickyForm, setShowStickyForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky form when scrolled past the hero section (approx 90% of viewport height)
      setShowStickyForm(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
      setIsSubmitted(true);
    }
  };
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  // Parallax effect for background - moves slower
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={targetRef}
      className="relative flex flex-col items-center justify-start w-screen pt-28 md:pt-32"
      style={{
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        height: 'calc(100dvh + 1.5cm)',
        minHeight: 'calc(100dvh + 1.5cm)'
      }}
    >
      {/* Background Video - Full Bleed */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden w-screen"
        style={{ y: backgroundY, height: 'calc(100dvh + 1.5cm)' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
        >
          <source src="/images/videos/replicate-prediction-q5pgarrqx5rmt0cw2k1rb05jvc.mp4" type="video/mp4" />
        </video>
      </motion.div>
      {/* Background Gradient Overlay - Very Light Vignette */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none w-screen"
        style={{
          height: 'calc(100dvh + 1.5cm)',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.05) 60%, rgba(2, 6, 23, 0.15) 100%)'
        }}
      />
      {/* Smooth Transition Gradient at Bottom */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.8) 100%)',
          width: '100vw',
          height: '200px',
          bottom: 0,
          left: 0,
          right: 0
        }}
      />

      {/* Content Container - Centered with max-width */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center w-full pt-4 md:pt-8">
        
        {/* --- TEXT CONTENT (fades on scroll) --- */}
        <motion.div style={{ opacity: opacityText, y: yText }} className="max-w-6xl mx-auto space-y-2 md:space-y-4">
          
          {/* --- BIG HEADLINE --- */}
          <div className="flex flex-col items-center">
            {/* Line 1 - Static Text */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block text-[#005a31] text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4"
            >
              COMING SOON
            </motion.span>
            {/* Line 2 - Logo */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="block"
            >
              <img 
                src="/images/logo/WayAhead-Logo-RGB-260115-v01ccr.png"
                alt="Way Ahead Brews Logo"
                className="h-[211px] md:h-[282px] lg:h-[352px] w-auto object-contain"
                loading="eager"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* --- EMAIL SIGNUP (in hero) --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-4 justify-center items-center w-full max-w-xl mx-auto mt-8 md:mt-10 z-30"
        >
          {isSubmitted ? (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30"
            >
              <p className="text-[#ec1c24] text-lg md:text-xl font-bold text-center">
                Cheers! Check your inbox for your discount code.
              </p>
            </motion.div>
          ) : (
            <div className="backdrop-blur-sm rounded-3xl" style={{ padding: '5px' }}>
              {/* Signup Text */}
              <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center mb-4 md:whitespace-nowrap drop-shadow-lg">
                Taste our product! Sign up now for 50% off your first six-packs.
              </p>
              
              {/* Email Form */}
              <form 
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-3 w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-4 focus:ring-[#f5dd12]/50 transition-all text-base shadow-lg"
                />
                <button 
                  type="submit"
                  className="px-10 py-4 bg-[#ec1c24] text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Get My Voucher
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>

      {/* --- FIXED EMAIL SIGNUP (shows when scrolling) --- */}
      {showStickyForm && !isSubmitted && (
        <div className="fixed top-[88px] left-0 right-0 z-40 flex justify-center px-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="backdrop-blur-md bg-[#005a31]/95 rounded-2xl shadow-xl py-3 px-4 md:px-6 max-w-2xl w-full"
          >
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-2 md:gap-3 items-center"
            >
              <p className="text-white text-sm md:text-base font-bold whitespace-nowrap hidden lg:block">
                50% off your first order
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-full bg-white text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#f5dd12]/50 transition-all text-sm shadow-lg w-full md:w-auto"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-[#ec1c24] text-white font-bold text-sm rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
              >
                Get My Voucher
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Hero;
