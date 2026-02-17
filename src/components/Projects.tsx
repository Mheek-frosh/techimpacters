"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Smartphone, Cpu } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Code For Kids",
            category: "Digital Literacy",
            description: "A comprehensive program teaching basic programming to primary school students across 15 schools.",
            icon: <Code className="text-primary" size={24} />,
            color: "bg-blue-50",
        },
        {
            title: "Mobile Lab Initiative",
            category: "Infrastructure",
            description: "Deploying portable computer labs to rural schools that lack permanent tech facilities.",
            icon: <Smartphone className="text-primary" size={24} />,
            color: "bg-blue-50",
        },
        {
            title: "STEM Workshops",
            category: "Innovation",
            description: "Interactive weekend workshops focusing on robotics and electronics for high school students.",
            icon: <Cpu className="text-primary" size={24} />,
            color: "bg-blue-50",
        },
    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-wider mb-2">Our Projects</h2>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">Driving Change Through Innovation</h3>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Explore our flagship initiatives designed to empower students and educators with modern tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className={`w-14 h-14 ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {project.icon}
                            </div>
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                                {project.category}
                            </span>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <button className="flex items-center space-x-2 text-primary font-bold group/btn">
                                <span>See Impact</span>
                                <ExternalLink size={18} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
