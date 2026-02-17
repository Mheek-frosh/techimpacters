"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Target } from "lucide-react";

const About = () => {
    const cards = [
        {
            icon: <BookOpen className="text-blue-600" size={32} />,
            title: "Quality Curriculum",
            description: "Providing modern tech curriculum tailored for K-12 students.",
        },
        {
            icon: <Users className="text-blue-600" size={32} />,
            title: "Expert Mentors",
            description: "Connecting students with industry professionals and tech enthusiasts.",
        },
        {
            icon: <Globe className="text-blue-600" size={32} />,
            title: "Wide Reach",
            description: "Partnering with schools in both urban and underserved communities.",
        },
        {
            icon: <Target className="text-blue-600" size={32} />,
            title: "Impact Focused",
            description: "Dedicated to measurable growth in digital literacy and coding skills.",
        },
    ];

    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Who We Are</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            An Academic NGO on a Mission to <span className="text-primary">Transform Schools</span>
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Techimpacters was founded with a simple yet powerful goal: to ensure that every student, regardless of their background, has access to the tools and knowledge necessary to thrive in the digital age.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                                >
                                    <div className="mb-4">{card.icon}</div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h4>
                                    <p className="text-gray-600">{card.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-square bg-blue-100 rounded-[40px] relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Users size={120} className="text-blue-200" />
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl max-w-[240px] border border-blue-50">
                            <span className="text-5xl font-black text-primary">10+</span>
                            <p className="text-gray-600 font-medium mt-2">Years of Excellence in Tech Education</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
