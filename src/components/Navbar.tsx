"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Impact", href: "/impact" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass py-2 shadow-sm" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white text-2xl">T</div>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">Tech<span className="text-primary">impacters</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-md">
                            Get Involved
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass absolute top-full left-0 w-full py-4 px-6 border-t"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block py-3 text-gray-700 hover:text-primary font-medium border-b border-gray-100 last:border-none"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold block text-center">
                        Get Involved
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
