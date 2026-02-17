"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-white text-xl">T</div>
                            <span className="text-xl font-bold tracking-tight">Tech<span className="text-primary">impacters</span></span>
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Empowering the next generation of innovators through technology education and school-based initiatives since 2014.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
                            <li><Link href="#impact" className="hover:text-primary transition-colors">Impact Stories</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Join as Volunteer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Our Impact Areas</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center space-x-2 underline decoration-gray-700 underline-offset-4">Digital Literacy</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-700 underline-offset-4">STEM Education</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-700 underline-offset-4">Teacher Training</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-700 underline-offset-4">Code Education</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-700 underline-offset-4">Infrastructure Dev</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Get in Touch</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                                <span>123 Innovation Drive, Tech City, NG</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+234 (0) 800 IMPACT</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>info@techimpacters.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Techimpacters NGO. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
