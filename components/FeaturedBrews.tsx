
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FeaturedBrewsProps {
  onShopClick?: () => void;
}

const CANS = [
  { 
    id: 'pilsner', 
    name: 'Pilsner', 
    delay: 0,
    rotate: -6,
    image: '/images/cans/Pilsner.png'
  },
  { 
    id: 'ipa', 
    name: 'Hazy IPA', 
    delay: 0.2,
    rotate: -3,
    image: '/images/cans/IPA.png'
  },
  { 
    id: 'white', 
    name: 'Belgian White', 
    delay: 0.4,
    rotate: 3,
    image: '/images/cans/Belgian.png'
  },
  { 
    id: 'strawberry', 
    name: 'Strawberry', 
    delay: 0.6,
    rotate: 6,
    image: '/images/cans/Strawberry.png'
  },
];

const FeaturedBrews: React.FC<FeaturedBrewsProps> = ({ onShopClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effect for section - moves faster than hero
  const sectionY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <motion.section
      id="featured"
      ref={sectionRef}
      className="relative bg-white overflow-visible flex flex-col items-center"
      style={{ 
        y: sectionY,
        paddingTop: 'calc(6rem + 1cm)',
        paddingBottom: 'calc(2rem + 2cm)'
      }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center" style={{ marginBottom: 'calc(4rem - 3cm)' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 mb-6"
          >
            What are we brewing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 text-center flex items-center gap-2 flex-wrap justify-center max-w-3xl"
          >
            <span>Pick one or have them all, either way you're</span>
            <img 
              src="/images/wordmark/WayAhead-Wordmark-WA-RGB-Red-260115-v01ccr.png"
              alt="Way Ahead"
              className="h-14 md:h-18 lg:h-20 inline-block"
              loading="lazy"
              decoding="async"
            />
          </motion.p>
        </div>
        {/* The Can Squad */}
        <div className="relative w-full max-w-6xl h-[720px] md:h-[820px] [perspective:1000px] flex justify-center items-start gap-0 overflow-visible" style={{ marginTop: '-2cm', paddingBottom: '2cm' }}>
          {CANS.map((can, index) => {
            // Center cans (index 1, 2) should be in front of outer ones
            const zIndexBase = (index === 1 || index === 2) ? 30 : 10;
            // Apply negative margin for overlapping (except first can)
            const negativeMargin = index > 0 ? '-ml-32 md:-ml-52' : '';

            // Parallax effect
            const parallaxY = useTransform(
              scrollYProgress,
              [0, 1],
              [18 * (index - 1.5), -18 * (index - 1.5)],
            );
            
            return (
            <motion.div
              key={can.id}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                damping: 14, 
                stiffness: 100, 
                delay: 0.1 + (index * 0.1) 
              }}
              className={`relative group cursor-pointer ${negativeMargin}`}
              style={{ zIndex: zIndexBase, y: parallaxY }}
            >
              <button onClick={onShopClick} className="appearance-none block">
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ 
                    duration: 5 + index, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: index * 0.5 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -40, 
                    rotate: 0,
                    zIndex: 50,
                    transition: { duration: 0.3 } 
                  }}
                  className="relative w-80 md:w-[576px] aspect-[1/2]"
                  style={{ rotate: can.rotate }}
                >
                  {/* Can Image - Transparent background */}
                  <img 
                    src={can.image}
                    alt={can.name}
                    className="w-full h-full object-contain"
                    style={{ 
                      mixBlendMode: 'normal',
                      imageRendering: 'auto'
                    }}
                    loading="lazy"
                  />
                </motion.div>
                
                {/* Floor Shadow */}
                <motion.div 
                   animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.1, 0.3, 0.1] }}
                   transition={{ duration: 5 + index, repeat: Infinity, delay: index * 0.5 }}
                   className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/60 blur-xl rounded-[100%]" 
                />
              </button>
            </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedBrews;
