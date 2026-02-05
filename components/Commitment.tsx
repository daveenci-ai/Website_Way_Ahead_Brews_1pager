
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Award } from 'lucide-react';

const Commitment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const ySymbol = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacitySymbol = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.1, 0.1, 0]);

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Molecular Precision",
      desc: "We don't just brew; we engineer perfection. Every batch is analyzed at a molecular level to ensure the crispness you expect."
    },
    {
      icon: Zap,
      title: "Clarity of Mind",
      desc: "Way Ahead isn't just about what's missing (the alcohol); it's about what's gained: the freedom to stay focused and vibrant."
    },
    {
      icon: Award,
      title: "Uncompromising Taste",
      desc: "We refuse to settle for 'good for NA.' Our brews are designed to beat the competition, regardless of alcohol content."
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 bg-slate-950 overflow-hidden"
    >
      {/* Parallax Symbol Watermark */}
      <motion.div 
        style={{ y: ySymbol, opacity: opacitySymbol }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <img 
          src="/logos/WayAhead-Symbol-260115-v01ccr.svg" 
          alt="" 
          loading="lazy"
          decoding="async"
          className="w-[120%] max-w-none invert brightness-200"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ec1c24]/10 border border-[#ec1c24]/20 text-[#ec1c24] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Heart className="w-3 h-3 fill-current" />
            Our Promise to You
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none mb-8"
          >
            Committed to the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec1c24] to-rose-400">Future of Brewing.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 font-light leading-relaxed"
          >
            We believe that enjoying a world-class beer shouldn't come with a compromise. 
            Our commitment is to push the boundaries of science and craft to keep you way ahead.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="group p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ec1c24] to-rose-600 flex items-center justify-center mb-8 shadow-lg shadow-[#ec1c24]/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <pillar.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#ec1c24] transition-colors">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full border border-[#ec1c24] flex items-center justify-center p-2">
                <img 
                  src="/logos/WayAhead-Symbol-260115-v01ccr.svg" 
                  alt="" 
                  loading="lazy"
                  className="w-full h-full invert" 
                />
             </div>
             <div>
                <p className="text-white font-bold uppercase tracking-widest text-sm">Certified Way Ahead</p>
                <p className="text-slate-500 text-xs">Standard of Excellence № 260115</p>
             </div>
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-tight italic">
              "We don't look back because the view from the front is so much better."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
