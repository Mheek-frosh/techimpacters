"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HandHeart, Building2, GraduationCap, ArrowRight } from "lucide-react";

const WorkWithUs = () => {
  const opportunities = [
    {
      icon: <HandHeart className="text-primary" size={28} />,
      title: "Volunteer",
      description: "Share your tech skills with students. Mentor, teach workshops, or help with our mobile labs. Every hour counts.",
      cta: "Join as Volunteer",
      href: "/contact",
    },
    {
      icon: <Building2 className="text-primary" size={28} />,
      title: "Partner With Us",
      description: "Schools, corporates, and NGOs—partner with Techimpacters to bring tech education to more communities.",
      cta: "Explore Partnerships",
      href: "/contact",
    },
    {
      icon: <GraduationCap className="text-primary" size={28} />,
      title: "Sponsor a School",
      description: "Fund computers, teacher training, or a full program. Your support directly impacts students in need.",
      cta: "Make an Impact",
      href: "/contact",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-wider mb-2">Get Involved</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work With <span className="text-primary">Us</span>
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Whether you want to volunteer your time, partner your organization, or sponsor a school—there are many ways to join our mission of bridging the digital divide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                {item.cta}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Have a different idea? We&apos;re always open to new collaborations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
