
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Droplets, Package, Beaker, Sparkles, ArrowRight } from 'lucide-react';

const processSteps = [
    { id: 1, title: "Blending", description: "Natural ingredients & premium hops blended with pure water", icon: Layers },
    { id: 2, title: "Carbonation", description: "Crisp CO2 infusion for that perfect fizz", icon: Droplets },
    { id: 3, title: "Canning", description: "Sealed fresh in eco-friendly aluminum", icon: Package },
    { id: 4, title: "Pasteurizing", description: "Shelf-stable perfection, ready to enjoy", icon: Beaker },
];

const Process: React.FC = () => {
    return (
        <section id="process" className="py-24 md:py-32 bg-[#fdf9eb] overflow-hidden scroll-mt-[180px]">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#005a31]/10 border border-[#005a31]/20 text-[#005a31] text-sm font-medium tracking-wider uppercase mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Revolutionary Process
                    </motion.div>
                    <motion.h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#005a31] tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The Molecular <span className="text-[#ec1c24]">Ritual</span>
                    </motion.h2>
                </div>

                {/* The Problem & Solution */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* The Old Way */}
                        <motion.div 
                            className="relative p-8 md:p-10 rounded-3xl bg-[#f8b0b2] border-2 border-[#ec1c24]/30"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div 
                                className="absolute -top-3 left-8 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#005a31]"
                                style={{ background: 'linear-gradient(135deg, #f5dd12 0%, #d4a84b 50%, #f5dd12 100%)' }}
                            >
                                The Old Way
                            </div>
                            <p className="text-[#005a31] leading-relaxed mt-4">
                                Traditional NA beers use <span className="text-[#005a31] font-semibold">heat extraction</span> or <span className="text-[#005a31] font-semibold">controlled fermentation</span> — processes that strip away flavor and limit shelf life.
                            </p>
                            <p className="text-[#ec1c24] font-semibold mt-4">
                                The result? Beer that doesn't taste like beer.
                            </p>
                        </motion.div>

                        {/* The Way Ahead */}
                        <motion.div 
                            className="relative p-8 md:p-10 rounded-3xl bg-[#005a31] border-2 border-[#005a31]"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div 
                                className="absolute -top-3 left-8 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#005a31]"
                                style={{ background: 'linear-gradient(135deg, #f5dd12 0%, #d4a84b 50%, #f5dd12 100%)' }}
                            >
                                The Way Ahead
                            </div>
                            <p className="text-[#fdf9eb] leading-relaxed mt-4">
                                Our <span className="text-[#fdf9eb] font-bold underline decoration-2">molecular mixing</span> process builds flavor from the ground up — no alcohol to remove, no taste to lose.
                            </p>
                            <p className="text-[#fdf9eb]/90 mt-4">
                                Simple as making a soda. Tastes like craft beer.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* 4-Step Process with Illustration */}
                <div className="max-w-6xl mx-auto mb-20">
                    <motion.h3 
                        className="text-2xl md:text-3xl font-bold text-center text-[#005a31] mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Four steps. Zero compromise.
                    </motion.h3>
                    
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Process Steps */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    className="group relative"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="aspect-square bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col justify-center items-center text-center shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300 border border-[#005a31]/10">
                                        <div className="w-10 h-10 md:w-14 md:h-14 bg-[#005a31]/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#005a31] group-hover:scale-110 transition-all">
                                            <step.icon className="w-5 h-5 md:w-7 md:h-7 text-[#005a31] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-xs text-[#ec1c24] font-bold mb-1">0{step.id}</span>
                                        <h4 className="text-sm md:text-lg font-bold text-[#005a31] mb-1 md:mb-2">{step.title}</h4>
                                        <p className="text-xs md:text-sm text-[#005a31]/70 leading-snug hidden md:block">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Molecular Process Illustration */}
                        <motion.div
                            className="hidden md:flex justify-center items-center"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <svg viewBox="0 0 300 600" className="w-full max-w-sm h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Top containers labels */}
                                <text x="45" y="25" fill="#ec1c24" fontSize="10" fontWeight="500" textAnchor="middle" letterSpacing="1">INGREDIENTS</text>
                                <text x="150" y="25" fill="#78aefd" fontSize="10" fontWeight="500" textAnchor="middle" letterSpacing="1">WATER</text>
                                <text x="255" y="25" fill="#6e80a6" fontSize="10" fontWeight="500" textAnchor="middle" letterSpacing="1">HOPS</text>
                                
                                {/* Container 1 - Ingredients (tubes) */}
                                <g>
                                    <rect x="20" y="35" width="16" height="80" rx="8" fill="#ec1c24" opacity="0.9"/>
                                    <rect x="40" y="45" width="16" height="70" rx="8" fill="#f8b0b2" opacity="0.9"/>
                                    <rect x="60" y="50" width="16" height="65" rx="8" fill="#005a31" opacity="0.9"/>
                                    {/* Connection nodes */}
                                    <circle cx="28" cy="125" r="4" fill="#ec1c24"/>
                                    <circle cx="48" cy="130" r="4" fill="#f8b0b2"/>
                                    <circle cx="68" cy="128" r="4" fill="#005a31"/>
                                </g>
                                
                                {/* Container 2 - Water (round vessel) */}
                                <g>
                                    <circle cx="150" cy="80" r="45" fill="none" stroke="#78aefd" strokeWidth="1.5"/>
                                    <ellipse cx="150" cy="95" rx="40" ry="25" fill="#78aefd" opacity="0.6"/>
                                    <ellipse cx="150" cy="90" rx="35" ry="8" fill="#78aefd" opacity="0.3"/>
                                    <circle cx="150" cy="135" r="4" fill="#78aefd"/>
                                </g>
                                
                                {/* Container 3 - Hops (tall cylinder) */}
                                <g>
                                    <rect x="230" y="35" width="50" height="90" rx="25" fill="none" stroke="#6e80a6" strokeWidth="1.5"/>
                                    <ellipse cx="255" cy="100" rx="20" ry="8" fill="#6e80a6" opacity="0.5"/>
                                    <ellipse cx="255" cy="80" rx="15" ry="6" fill="#6e80a6" opacity="0.3"/>
                                    <circle cx="255" cy="135" r="4" fill="#6e80a6"/>
                                </g>
                                
                                {/* Connector lines to mixing vessel */}
                                <path d="M28 129 Q28 180 100 220" stroke="#ec1c24" strokeWidth="1" fill="none" opacity="0.6"/>
                                <path d="M48 134 Q60 200 110 230" stroke="#f8b0b2" strokeWidth="1" fill="none" opacity="0.6"/>
                                <path d="M68 132 Q80 190 120 235" stroke="#005a31" strokeWidth="1" fill="none" opacity="0.6"/>
                                <path d="M150 139 L150 200" stroke="#78aefd" strokeWidth="1" fill="none" opacity="0.6"/>
                                <path d="M255 139 Q255 180 200 220" stroke="#6e80a6" strokeWidth="1" fill="none" opacity="0.6"/>
                                
                                {/* Mixing vessel */}
                                <g>
                                    <circle cx="150" cy="300" r="80" fill="none" stroke="#ec1c24" strokeWidth="1.5" opacity="0.8"/>
                                    {/* Liquid waves */}
                                    <path d="M75 320 Q100 310 125 320 Q150 330 175 320 Q200 310 225 320 L225 360 Q200 350 175 360 Q150 370 125 360 Q100 350 75 360 Z" fill="#ec1c24" opacity="0.4"/>
                                    <path d="M80 335 Q105 325 130 335 Q155 345 180 335 Q205 325 220 335" stroke="#ec1c24" strokeWidth="1" fill="none" opacity="0.3"/>
                                    {/* Sparkle marks */}
                                    <text x="110" y="270" fill="#6e80a6" fontSize="12" opacity="0.7">✦</text>
                                    <text x="180" y="280" fill="#78aefd" fontSize="10" opacity="0.7">✦</text>
                                    <text x="140" y="260" fill="#ec1c24" fontSize="8" opacity="0.7">✧</text>
                                    <text x="165" y="255" fill="#f8b0b2" fontSize="6" opacity="0.6">✧</text>
                                    {/* Small circles/bubbles */}
                                    <circle cx="120" cy="290" r="3" fill="#78aefd" opacity="0.6"/>
                                    <circle cx="145" cy="275" r="4" fill="#6e80a6" opacity="0.6"/>
                                    <circle cx="170" cy="295" r="3" fill="#f8b0b2" opacity="0.5"/>
                                </g>
                                
                                {/* Connection node from mixing vessel */}
                                <circle cx="150" cy="390" r="5" fill="#ec1c24"/>
                                <line x1="150" y1="395" x2="150" y2="430" stroke="#ec1c24" strokeWidth="1" opacity="0.6"/>
                                
                                {/* Beer glass at bottom */}
                                <g>
                                    <path d="M115 445 L110 530 Q110 555 130 560 L170 560 Q190 555 190 530 L185 445" stroke="#6e80a6" strokeWidth="1.5" fill="none" opacity="0.8"/>
                                    {/* Stem */}
                                    <line x1="150" y1="560" x2="150" y2="580" stroke="#6e80a6" strokeWidth="1.5" opacity="0.8"/>
                                    {/* Base */}
                                    <ellipse cx="150" cy="585" rx="25" ry="6" fill="none" stroke="#6e80a6" strokeWidth="1.5" opacity="0.8"/>
                                    {/* Liquid in glass */}
                                    <path d="M118 480 Q130 475 150 480 Q170 485 182 480 L180 525 Q175 545 150 550 Q125 545 120 525 Z" fill="#ec1c24" opacity="0.4"/>
                                    <path d="M120 490 Q135 485 150 490 Q165 495 180 490" stroke="#ec1c24" strokeWidth="1" fill="none" opacity="0.3"/>
                                    {/* Small icon in glass */}
                                    <circle cx="150" cy="465" r="8" fill="none" stroke="#6e80a6" strokeWidth="0.5" opacity="0.5"/>
                                    <circle cx="150" cy="465" r="2" fill="#6e80a6" opacity="0.5"/>
                                </g>
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* Science & Belgian Legacy */}
                <motion.div 
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 rounded-3xl bg-[#005a31] border border-[#005a31]">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Science & Belgian <span className="text-[#f8b0b2]">Legacy</span>
                            </h3>
                            <p className="text-white/90 leading-relaxed">
                                Molecular mixing was developed by Belgian company{' '}
                                <a 
                                    href="https://baron.bar" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-1 text-[#f8b0b2] font-bold hover:underline"
                                >
                                    Bar.on <ArrowRight className="w-4 h-4" />
                                </a>
                            </p>
                            <p className="text-white/90 leading-relaxed">
                                The technology is based on the research of <span className="text-white font-semibold">Miguel Roncoroni</span> and <span className="text-white font-semibold">Kevin Vestrepen</span> of the University of Leuven, as published in their book:
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="p-6 md:p-8 rounded-2xl bg-white/10 border border-white/20">
                                <p className="text-[#f8b0b2] text-2xl md:text-3xl font-bold italic font-heading">
                                    "Belgian Beer Tested and Tasted"
                                </p>
                            </div>
                            <a 
                                href="#shop-section"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ec1c24] text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#ec1c24]/30"
                            >
                                Experience the Result <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Process;
