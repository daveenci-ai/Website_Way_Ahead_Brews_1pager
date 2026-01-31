
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
        <section id="process" className="py-24 md:py-32 bg-slate-950 overflow-hidden scroll-mt-[180px]">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ec1c24]/10 border border-[#ec1c24]/20 text-[#ec1c24] text-sm font-medium tracking-wider uppercase mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Revolutionary Process
                    </motion.div>
                    <motion.h2 
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The Brewing <span className="text-[#ec1c24]">Ritual</span>
                    </motion.h2>
                </div>

                {/* The Problem & Solution */}
                <div className="max-w-6xl mx-auto mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* The Old Way */}
                        <motion.div 
                            className="relative p-8 md:p-10 rounded-3xl bg-slate-800 border border-slate-700"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-3 left-8 px-4 py-1 bg-slate-600 rounded-full text-xs font-bold uppercase tracking-wider text-slate-200">
                                The Old Way
                            </div>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Traditional NA beers use <span className="text-white font-semibold">heat extraction</span> or <span className="text-white font-semibold">controlled fermentation</span> — processes that strip away flavor and limit shelf life.
                            </p>
                            <p className="text-[#ec1c24] font-semibold mt-4">
                                The result? Beer that doesn't taste like beer.
                            </p>
                        </motion.div>

                        {/* The Way Ahead */}
                        <motion.div 
                            className="relative p-8 md:p-10 rounded-3xl bg-[#ec1c24] border border-[#ec1c24]"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-3 left-8 px-4 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-wider text-[#ec1c24]">
                                The Way Ahead
                            </div>
                            <p className="text-white leading-relaxed mt-4">
                                Our <span className="text-white font-bold underline decoration-2">molecular mixing</span> process builds flavor from the ground up — no alcohol to remove, no taste to lose.
                            </p>
                            <p className="text-white/90 mt-4">
                                Simple as making a soda. Tastes like craft beer.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* 4-Step Process */}
                <div className="max-w-5xl mx-auto mb-20">
                    <motion.h3 
                        className="text-2xl md:text-3xl font-bold text-center text-white mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Four steps. Zero compromise.
                    </motion.h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="aspect-square bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col justify-center items-center text-center shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-[#ec1c24]/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#ec1c24] group-hover:scale-110 transition-all">
                                        <step.icon className="w-5 h-5 md:w-7 md:h-7 text-[#ec1c24] group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-xs text-[#ec1c24] font-bold mb-1">0{step.id}</span>
                                    <h4 className="text-sm md:text-lg font-bold text-slate-900 mb-1 md:mb-2">{step.title}</h4>
                                    <p className="text-xs md:text-sm text-slate-600 leading-snug hidden md:block">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Science & Belgian Legacy */}
                <motion.div 
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 rounded-3xl bg-slate-800 border border-slate-700">
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                Science & Belgian <span className="text-[#ec1c24]">Legacy</span>
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                Molecular mixing was developed by Belgian company{' '}
                                <a 
                                    href="https://baron.bar" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-1 text-[#ec1c24] font-bold hover:underline"
                                >
                                    Bar.on <ArrowRight className="w-4 h-4" />
                                </a>
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                The technology is based on the research of <span className="text-white font-semibold">Miguel Roncoroni</span> and <span className="text-white font-semibold">Kevin Vestrepen</span> of the University of Leuven, as published in their book:
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-600">
                                <p className="text-[#ec1c24] text-2xl md:text-3xl font-bold italic font-heading">
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
