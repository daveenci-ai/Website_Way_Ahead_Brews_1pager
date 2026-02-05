
import React from 'react';
import { motion } from 'framer-motion';

interface WingStoryProps {
  onMoreClick: () => void;
}

const WingStory: React.FC<WingStoryProps> = ({ onMoreClick }) => {
  return (
    <section id="story" className="relative py-32 md:py-48 overflow-hidden bg-[#005a31]">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-8">
              A Legacy of <br/>
              Pure Intent.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-lg mb-10">
                There is a reason our non-alcoholic beers are called Way Ahead. It’s not just a brand name, but a philosophy. You are Way Ahead because you prioritize taste, freshness, and mental clarity.
            </p>
            <button
              onClick={onMoreClick}
              className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold transition-all uppercase tracking-widest text-sm"
            >
              Discover Our Story
            </button>
            <div className="mt-12 flex items-center gap-6 justify-center md:justify-start">
                 <div className="w-16 h-[1px] bg-white/30"></div>
                 <p className="text-white/60 uppercase tracking-widest text-sm">Est. 2024</p>
            </div>
          </motion.div>

          <div className="relative flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full"></div>
              <img 
                src="/images/logo/WayAhead-Logo-RGB-260115-v01ccr.png"
                alt="Way Ahead Logo"
                className="w-80 h-80 md:w-[480px] md:h-[480px] object-contain drop-shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WingStory;
