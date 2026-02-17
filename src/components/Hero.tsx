"use client";

import { motion } from "framer-motion";
import { ArrowRight, Laptop, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100"
                    >
                        <Sparkles size={16} />
                        <span>Empowering the Next Generation</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-none mb-6"
                    >
                        Impacting Futures Through <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Technology in Schools
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-2xl mx-auto text-xl text-gray-600 mb-10"
                    >
                        Techimpacters is an academic NGO dedicated to bridging the digital divide by bringing high-quality tech education and resources to schools across the region.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg flex items-center space-x-2 shadow-xl shadow-blue-200 hover:bg-blue-600 transition-all transform hover:-translate-y-1">
                            <span>View Our Projects</span>
                            <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Hero Image Mockup Area */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 relative"
                >
                    <div className="relative mx-auto max-w-5xl bg-gradient-to-tr from-blue-600 to-primary rounded-3xl p-1 shadow-2xl">
                        <div className="bg-white rounded-[22px] overflow-hidden aspect-[16/9] relative">
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                                <Laptop size={100} className="text-blue-100" />
                                <span className="absolute bottom-10 text-gray-400 font-medium">Digital Impact Showcase</span>
                            </div>
                            {/* Replace with actual high-quality image later */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
