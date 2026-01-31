
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
      { threshold: 0, rootMargin: '-96px 0px 0px 0px' }
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
        className={`relative w-full overflow-hidden sticky z-40 transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}
        style={{
          minHeight: isSticky ? '70px' : '200px',
          top: '96px',
          background: 'linear-gradient(135deg, #d4a84b 0%, #c9973a 25%, #b8862e 50%, #d4a84b 75%, #e6bc5a 100%)',
        }}
      >
      {/* Subtle shine overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />
      
      <div className={`container mx-auto px-6 flex items-center relative z-10 transition-all duration-300 ${isSticky ? 'py-2 md:py-0 md:h-[70px]' : 'py-12 md:py-0 md:h-[200px]'}`}>
        <motion.div 
          className="w-full flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side - Text */}
          <div className="text-center md:text-left">
            <p className={`uppercase tracking-[0.2em] font-bold text-white/70 transition-all duration-300 ${isSticky ? 'text-[10px] mb-1' : 'text-xs mb-2'}`}>
              Coming Soon
            </p>
            <h3 className={`font-bold text-white font-heading transition-all duration-300 ${isSticky ? 'text-lg md:text-xl lg:text-2xl' : 'text-2xl md:text-3xl lg:text-4xl'}`}>
              Don't miss the first pour
            </h3>
          </div>

          {/* Right side - Email signup */}
          <div className="w-full md:w-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 ${isSticky ? 'px-4 py-2' : 'px-6 py-4'}`}
              >
                <span className={isSticky ? 'text-xl' : 'text-2xl'}>🍻</span>
                <p className={`text-white font-bold ${isSticky ? 'text-sm' : ''}`}>You're on the list!</p>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className={`flex flex-col sm:flex-row w-full md:w-auto transition-all duration-300 ${isSticky ? 'gap-2' : 'gap-3'}`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`flex-1 md:w-72 rounded-full bg-white/90 border-2 border-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all font-medium ${isSticky ? 'px-4 py-2 text-sm' : 'px-6 py-4'}`}
                />
                <button 
                  type="submit"
                  className={`bg-[#ec1c24] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap ${isSticky ? 'px-6 py-2 text-sm' : 'px-8 py-4 text-base'}`}
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
