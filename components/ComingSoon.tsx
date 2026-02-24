
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-88px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel element to detect sticky state */}
      <div ref={sentinelRef} className="h-0 w-full" />
      <section 
        ref={sectionRef}
        className={`relative w-full overflow-x-hidden sticky z-[45] flex items-center transition-all duration-300 ${isSticky ? 'shadow-lg h-[110px] md:h-[70px]' : 'h-[200px]'}`}
        style={{
          top: '88px',
          background: 'linear-gradient(135deg, #d4a84b 0%, #c9973a 25%, #b8862e 50%, #d4a84b 75%, #e6bc5a 100%)',
          transform: 'translateZ(0)', /* iOS Safari sticky fix */
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
      {/* Subtle shine overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className={`w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 ${isSticky ? 'gap-2' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side - Text (hidden on mobile when sticky to save space) */}
          <div className={`text-center md:text-left ${isSticky ? 'hidden md:block flex-shrink-0' : ''}`}>
            <h3 className={`font-bold text-white font-heading transition-all duration-300 ${isSticky ? 'text-lg md:text-xl lg:text-2xl whitespace-nowrap' : 'text-base md:text-2xl lg:text-3xl'}`}>
              Don't miss the first pour, get one-time 50% OFF
            </h3>
          </div>

          {/* Right side - Email signup */}
          <div className={`w-full md:w-auto ${isSticky ? 'min-w-0 flex-1 md:flex-initial' : ''}`}>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 ${isSticky ? 'px-4 py-2' : 'px-6 py-4'}`}
              >
                <p className={`text-[#ec1c24] font-bold ${isSticky ? 'text-sm' : ''}`}>Cheers! Check your inbox for your discount code.</p>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className={`flex flex-row w-full md:w-auto transition-all duration-300 ${isSticky ? 'gap-2 min-w-0' : 'gap-3 flex-col sm:flex-row'}`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`flex-1 min-w-0 md:w-72 rounded-full bg-white/90 border-2 border-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all font-medium ${isSticky ? 'px-3 py-2 text-sm' : 'px-6 py-4'}`}
                />
                <button 
                  type="submit"
                  className={`bg-[#ec1c24] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap flex-shrink-0 ${isSticky ? 'px-4 py-2 text-sm' : 'px-8 py-4 text-base'}`}
                >
                  Get Voucher
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default ComingSoon;
