
import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedBrewsProps {
  onShopClick?: () => void;
}

const CANS = [
  {
    id: 'ipa',
    name: 'Hazy IPA',
    image: '/images/cans/IPA.png',
    wing: '/images/logo/IPA wing.png',
    color: '#6e80a6',
    body: 'Classic New England IPA style. Hazy with tropical fruit and citrus notes balancing non-bitter hops.',
    abv: '< 0.5% ABV',
  },
  {
    id: 'pilsner',
    name: 'Pilsner',
    image: '/images/cans/Pilsner.png',
    wing: '/images/logo/Pilsner wing.png',
    color: '#2a7a3f',
    body: 'Danish pils style with sweet malt notes and a mild noble hops finish.',
    abv: '< 0.5% ABV',
  },
  {
    id: 'white',
    name: 'Belgian White',
    image: '/images/cans/Belgian.png',
    wing: '/images/logo/Belgian wing.png',
    color: '#78aefd',
    body: 'Traditional Belgian witbier style. Hazy, pale and refreshing, with orange and coriander notes, and a creamy texture.',
    abv: '< 0.5% ABV',
  },
];

const FeaturedBrews: React.FC<FeaturedBrewsProps> = ({ onShopClick }) => {
  return (
    <section
      id="featured"
      className="relative bg-white overflow-visible flex flex-col items-center py-24 md:py-32"
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mb-4"
          >
            Everybody who has ever tasted our three non-alcoholic beer-style beverages agree: They taste exceptionally good! But don't take their word for it: Pick one or have them all, either way you're
          </motion.p>
          <img
            src="/images/wordmark/WayAhead-Wordmark-WA-RGB-Red-260115-v01ccr.png"
            alt="Way Ahead"
            className="h-14 md:h-18 lg:h-20"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Cans */}
        <div className="flex justify-center items-end gap-2 md:gap-6 w-full max-w-4xl" style={{ marginTop: '1.5cm', marginBottom: '2cm' }}>
          {CANS.map((can, index) => (
            <motion.div
              key={can.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="relative flex flex-col items-center group"
              aria-label={`${can.name}: ${can.body} ${can.abv}`}
            >
              <div className="relative">
                <img
                  src={can.image}
                  alt={can.name}
                  className="w-[1576px] md:w-[1768px] aspect-square object-contain scale-[1.4] transition-transform duration-300 group-hover:scale-[1.45]"
                  loading="lazy"
                />
                {/* Hover overlay — masked to can silhouette */}
                <div
                  className="absolute inset-0 scale-[1.4] group-hover:scale-[1.45] flex flex-col items-center justify-start text-center px-[26%] pt-[18%] pb-[20%] opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    backgroundColor: can.color,
                    boxShadow: 'inset 0 0 24px rgba(0,0,0,0.4)',
                    WebkitMaskImage: `url(${can.image}), linear-gradient(to bottom, transparent 5%, black 9%, black 87%, transparent 93%)`,
                    maskImage: `url(${can.image}), linear-gradient(to bottom, transparent 5%, black 9%, black 87%, transparent 93%)`,
                    WebkitMaskSize: 'contain, 100% 100%',
                    maskSize: 'contain, 100% 100%',
                    WebkitMaskRepeat: 'no-repeat, no-repeat',
                    maskRepeat: 'no-repeat, no-repeat',
                    WebkitMaskPosition: 'center, center',
                    maskPosition: 'center, center',
                    WebkitMaskComposite: 'source-in',
                    maskComposite: 'intersect',
                  }}
                >
                  {/* Condensation texture */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-30"
                    style={{
                      backgroundImage: 'url(/images/textures/condensation.png)',
                      mixBlendMode: 'soft-light',
                    }}
                  />
                  {/* Wing logo + text */}
                  <img
                    src="/images/logo/WayAhead-Symbol-White.svg"
                    alt={can.name}
                    className="relative w-[55%] mb-1.5 object-contain"
                  />
                  <p className="relative text-[7px] md:text-[10px] text-white/90 leading-snug mb-2 mx-2 md:mx-3">
                    {can.body}
                  </p>
                  <p className="relative inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[6px] md:text-[8px] font-medium text-white">
                    {can.abv}
                  </p>
                </div>
              </div>
              <span className="sr-only">{can.name}: {can.body} {can.abv}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrews;
