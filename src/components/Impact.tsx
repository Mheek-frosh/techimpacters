"use client";

import { motion } from "framer-motion";

const Impact = () => {
    const stats = [
        { label: "Schools Reached", value: "50+", suffix: "" },
        { label: "Students Trained", value: "5,000", suffix: "+" },
        { label: "Computers Donated", value: "250", suffix: "" },
        { label: "Teacher Workshops", value: "100", suffix: "+" },
    ];

    return (
        <section id="impact" className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative SVG Shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="10" cy="10" r="20" fill="white" />
                    <circle cx="90" cy="90" r="30" fill="white" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-blue-100 font-bold uppercase tracking-widest mb-4">Our Real-World Impact</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-16">Creating Sustainable Tech Ecosystems</h3>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-blue-600/30 backdrop-blur-sm rounded-3xl border border-white/10"
                        >
                            <div className="text-5xl md:text-6xl font-black text-white mb-2 leading-none">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-blue-100 font-bold text-lg uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
