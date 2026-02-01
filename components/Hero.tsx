
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

interface HeroProps {
  onStoryClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStoryClick }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        width: '100vw',
        height: 'calc(100vh + 2cm)',
        minHeight: 'calc(100vh + 2cm)',
        maxHeight: 'calc(100vh + 2cm)',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        paddingTop: '80px',
        paddingBottom: '0px'
      }}
    >
      {/* Background Video - Full Bleed */}
      <motion.div 
        className="absolute z-0 pointer-events-none overflow-hidden"
        style={{
          width: '100vw',
          height: 'calc(100vh + 2cm)',
          minHeight: 'calc(100vh + 2cm)',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          y: backgroundY
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
        >
          <source src="/images/videos/replicate-prediction-q5pgarrqx5rmt0cw2k1rb05jvc.mp4" type="video/mp4" />
        </video>
      </motion.div>
      {/* Black Overlay - 10% Transparency */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          width: '100vw',
          height: 'calc(100vh + 2cm)',
          top: 0,
          left: 0,
          right: 0
        }}
      />
      {/* Background Gradient Overlay - Minimal Vignette */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.2) 50%, rgba(2, 6, 23, 0.4) 100%)',
          width: '100vw',
          height: 'calc(100vh + 2cm)',
          top: 0,
          left: 0,
          right: 0
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
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center w-full" style={{ marginTop: '-1cm' }}>
        
        {/* --- 0% ALCOHOL BADGE --- */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
          className="absolute top-[-20px] right-2 md:right-[5%] md:top-10 z-20"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-[#ec1c24] rounded-full text-white font-bold shadow-lg shadow-[#ec1c24]/50">
            <div className="absolute inset-0 border-2 border-dashed border-white/50 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="flex flex-col items-center leading-none">
              <span className="text-2xl md:text-4xl font-heading">0%</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest mt-1">Alcohol</span>
              <span className="text-[8px] md:text-[10px] opacity-80">100% Taste</span>
            </div>
          </div>
        </motion.div>

        {/* --- TEXT CONTENT --- */}
        <motion.div style={{ opacity: opacityText, y: yText }} className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border-2 border-[#b8862e] text-[#005a31] text-base md:text-lg font-medium tracking-wider uppercase shadow-lg shadow-black/20"
            style={{ marginTop: 'calc(-2rem - 3cm)', marginBottom: 'calc(1rem + 1cm)', background: 'linear-gradient(135deg, #d4a84b 0%, #c9973a 25%, #b8862e 50%, #d4a84b 75%, #e6bc5a 100%)' }}
          >
            <Star className="w-5 h-5 fill-[#ec1c24] text-[#ec1c24]" />
            The Molecular Carbonation Standard
          </motion.div>

          {/* --- BIG HEADLINE --- */}
          <div className="flex flex-col items-center">
            {/* Line 1 - Static Text */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block text-white text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight"
            >
              WE ARE BREWING
            </motion.span>
            {/* Line 2 - Wordmark */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="block"
              style={{ marginTop: '-1.5cm' }}
            >
              <img 
                src="/images/wordmark/WayAhead-Wordmark-WA-RGB-Red-260115-v01ccr.png"
                alt="Way Ahead"
                className="h-40 md:h-64 lg:h-80 xl:h-96 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>

          {/* --- EMAIL SIGNUP --- */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4 justify-center items-center relative z-30 w-full max-w-xl mx-auto"
            style={{ marginTop: '-1cm' }}
          >
            {isSubmitted ? (
              /* Success Message */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30"
              >
                <span className="text-3xl">🍻</span>
                <p className="text-white text-lg md:text-xl font-bold text-center">
                  Cheers! Check your inbox for your discount code.
                </p>
              </motion.div>
            ) : (
              <div className="backdrop-blur-sm rounded-3xl p-6 md:p-8">
                {/* Signup Text */}
                <p className="text-white text-base md:text-lg lg:text-xl font-bold text-center mb-6 md:whitespace-nowrap drop-shadow-lg">
                  Be the first to taste the future. Sign up now for 50% off your first order.
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
            
            {/* Read our story link */}
            <button 
              onClick={onStoryClick}
              className="text-white hover:text-[#f5dd12] font-bold text-lg border-b-2 border-white/50 hover:border-[#f5dd12] transition-colors mt-4"
            >
              Read our story
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
