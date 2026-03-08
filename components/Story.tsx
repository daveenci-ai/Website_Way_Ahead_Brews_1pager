
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Beer data
const beers = [
  {
    name: 'Way Ahead Pilsner',
    img: '/images/logo/Pilsner wing.png',
    description: 'Our pilsner echoes the pilsners of our founder\'s native Denmark. The red hearts on the yellow crests are a nod to Denmark\'s coat of arms.',
    bgColor: '#005a31',
    textColor: 'text-white',
    emoji: '♥',
    emojiColor: '#c41e3a',
  },
  {
    name: 'Way Ahead Hazy IPA',
    img: '/images/logo/IPA wing.png',
    description: 'Our Hazy IPA was developed with New England style IPAs in mind. The stars are a reference to the American flag.',
    bgColor: '#6e80a6',
    textColor: 'text-white',
    emoji: '★',
    emojiColor: '#ffffff',
  },
  {
    name: 'Way Ahead Belgian White',
    img: '/images/logo/Belgian wing.png',
    description: 'The Belgian white beer style originated in Leuven. The stripe design reflects the city\'s coat of arms.',
    bgColor: '#78aefd',
    textColor: 'text-white',
    emoji: '🇧🇪',
    emojiColor: undefined,
  },
];

const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });

  // Background color - snaps at each third
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.32, 0.33, 0.65, 0.66, 1],
    [beers[0].bgColor, beers[0].bgColor, beers[1].bgColor, beers[1].bgColor, beers[2].bgColor, beers[2].bgColor]
  );

  // Opacity for each beer card
  const beer0Opacity = useTransform(scrollYProgress, [0, 0.27, 0.33, 0.38], [1, 1, 0, 0]);
  const beer1Opacity = useTransform(scrollYProgress, [0.28, 0.33, 0.6, 0.66], [0, 1, 1, 0]);
  const beer2Opacity = useTransform(scrollYProgress, [0.6, 0.66, 1], [0, 1, 1]);

  // Y position for each beer (slide up animation)
  const beer0Y = useTransform(scrollYProgress, [0, 0.27, 0.33], [0, 0, -50]);
  const beer1Y = useTransform(scrollYProgress, [0.28, 0.33, 0.6, 0.66], [50, 0, 0, -50]);
  const beer2Y = useTransform(scrollYProgress, [0.6, 0.66, 1], [50, 0, 0]);

  const beerOpacities = [beer0Opacity, beer1Opacity, beer2Opacity];
  const beerYs = [beer0Y, beer1Y, beer2Y];

  return (
    <section id="story-section" className="bg-white scroll-mt-[168px]">
      {/* Static Story Content */}
      <div className="container mx-auto px-6 pb-20 md:pb-28" style={{ paddingTop: '5cm' }}>
        
        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Way Ahead Story
            </motion.h2>
          </div>
          
          {/* First Row - Why Way Ahead */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="order-2 md:order-1">
              <div className="space-y-4 text-black leading-relaxed text-lg md:text-xl">
                <p>
                  It all started back in 2018. Researchers Miguel Roncoroni and Kevin Vestrepen of leading Belgian university KU Leuven published "Belgian Beer Tested and Tasted", an analysis of the molecular make-up of 250 Belgian beers. The underlying research linked beer taste profiles to specific molecules. Entrepreneur Dirk Standaert then founded <a href="https://baron.bar" target="_blank" rel="noopener noreferrer" className="text-[#ec1c24] underline hover:text-[#c4161d]">Bar.on</a> BV with a mission: Leverage that research to combine natural ingredients to produce "beer" without fermentation. Molecular mixing was born, a way to produce non-alcoholic "near beer" that closely replicates the taste of regular beer, without the hassle of fermentation.
                </p>
                <p>
                  <a href="https://baron.bar" target="_blank" rel="noopener noreferrer" className="text-[#ec1c24] underline hover:text-[#c4161d]">Bar.on</a> BV's molecular mixing technology is the "secret sauce" behind Way Ahead Brews' exceptionally tasting non-alcoholic beer-style beverages.
                </p>
                <p>
                  When the aim is to produce a high quality non-alcoholic beverage, why use a process like fermentation that naturally produces alcohol, and then try and modify it to eliminate the alcohol? We believe the better way is to blend selected natural ingredients to create the desired taste profile, from the ground up. A much simpler, straight-forward approach.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
                <img
                  src="/images/pictures/belgian-beer-book.webp"
                  alt="Belgian Beer Tested and Tasted book"
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Second Row - The Wings Story */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square bg-[#005a31] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
                <img 
                  src="/images/logo/WayAhead-Logo-RGB-260115-v01ccr.png"
                  alt="Way Ahead Wings Logo"
                  className="w-48 md:w-64 h-auto object-contain relative z-10 drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-6">
                The Crest Logos
              </h3>
              <div className="space-y-4 text-black leading-relaxed text-lg md:text-xl">
                <p>
                  Our crest logos are inspired by the family crest of our founder, Ove Haxthausen. While the Haxthausen family crest design goes back some 700 years, Way Ahead Brews took the same approach to logo development that we used for making our products: Just because things have been done a certain way for centuries, doesn't mean we can't do way better!
                </p>
                <p>
                  So, we changed the Haxthausen family crest to display hops instead of the family's "wagon gates" for the Way Ahead Brews logo. We then developed specific crests for each of our near-beer products. Each product crest reflects the legacy of that specific beer style. Because each of our products has its own distinct identity grounded in unique, exceptional taste, we believe it deserves its own heraldic crest that conveys that identity and makes it stand out from the crowd.
                </p>
                <p>
                  Our pilsner echoes the pilsners of our founder's native Denmark. The red hearts on the yellow crests are a nod to Denmark's coat of arms.
                </p>
                <p>
                  Our Hazy IPA was developed with New England style IPAs in mind. The stars are a reference to the American flag.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Sticky Beer Showcase - 4 screens tall for 4 beers */}
      <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
        <motion.div 
          className="sticky top-0 w-full h-screen overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          {/* Beer Cards - stacked absolutely, fade in/out */}
          {beers.map((beer, index) => (
            <motion.div
              key={beer.name}
              className="absolute inset-0 flex flex-col items-center justify-center p-8"
              style={{ 
                opacity: beerOpacities[index],
                y: beerYs[index]
              }}
            >
              <img
                src={beer.img}
                alt={beer.name}
                className="w-56 md:w-80 lg:w-96 h-auto object-contain mb-6 drop-shadow-2xl relative z-10"
              />
              <p className={`text-sm md:text-lg lg:text-xl leading-relaxed max-w-xl text-center relative z-10 ${beer.textColor} opacity-90`}>
                {beer.description}
              </p>
            </motion.div>
          ))}

          {/* Progress dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {beers.map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full border-2 border-white/60"
                style={{
                  backgroundColor: useTransform(
                    scrollYProgress,
                    [i * 0.33, i * 0.33 + 0.01, (i + 1) * 0.33 - 0.01, (i + 1) * 0.33],
                    ['rgba(255,255,255,0.2)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.2)']
                  )
                }}
              />
            ))}
          </div>

          {/* Scroll hint - only visible at start */}
          <motion.div 
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-sm z-20"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          >
            Scroll to explore all beers
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
