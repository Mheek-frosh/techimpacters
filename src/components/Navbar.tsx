"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Impact", href: "/impact" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-3 flex justify-between items-center">
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src={logo}
                            alt="Techimpacters"
                            width={220}
                            height={56}
                            className="h-14 w-auto md:h-16"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary transition-colors font-medium text-[15px]"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-sm text-[15px]">
                            Get Involved
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-6"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block py-3.5 text-gray-700 hover:text-primary font-medium border-b border-gray-100 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="mt-4 block w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-center hover:bg-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
                        Get Involved
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
