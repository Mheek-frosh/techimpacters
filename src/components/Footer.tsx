"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-100 text-gray-900 pt-20 pb-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center mb-6">
                            <Image
                                src={logo}
                                alt="Techimpacters"
                                width={160}
                                height={42}
                                className="h-9 w-auto"
                            />
                        </Link>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Empowering the next generation of innovators through technology education and school-based initiatives since 2014.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Twitter" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-700">
                                <Twitter size={20} />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-700">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-700">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-300 pb-2">Quick Links</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Our Projects</Link></li>
                            <li><Link href="/impact" className="hover:text-primary transition-colors">Impact Stories</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Join as Volunteer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-300 pb-2">Our Impact Areas</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center space-x-2 underline decoration-gray-400 underline-offset-4">Digital Literacy</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-400 underline-offset-4">STEM Education</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-400 underline-offset-4">Teacher Training</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-400 underline-offset-4">Code Education</li>
                            <li className="flex items-center space-x-2 underline decoration-gray-400 underline-offset-4">Infrastructure Dev</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-300 pb-2">Get in Touch</h4>
                        <ul className="space-y-4 text-gray-600">
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

                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Techimpacters NGO. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
