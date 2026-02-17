"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Megaphone } from "lucide-react";

const updates = [
  {
    title: "Young Innovators Bootcamp 2026",
    date: "March 2026",
    excerpt: "Registration is now open for our annual 2-week summer program. 150 spots available for secondary school students.",
    image: "https://images.unsplash.com/photo-1523240795612-9a0546980c83?w=600&q=80",
    tag: "New",
  },
  {
    title: "Mobile Lab Expands to 5 New States",
    date: "February 2026",
    excerpt: "Our Mobile Lab Initiative is reaching more rural communities. 12 new schools will receive rotating computer labs.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    tag: "Expansion",
  },
  {
    title: "Teacher Tech Certification Program",
    date: "January 2026",
    excerpt: "500+ educators certified in digital pedagogy. Our training program continues to grow across the region.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    tag: "Milestone",
  },
];

export default function Updates() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Megaphone size={20} /> What&apos;s New
            </h2>
            <h3 className="text-4xl font-bold text-gray-900">Latest Updates</h3>
          </div>
          <Link href="/contact" className="text-primary font-bold hover:underline flex items-center gap-2">
            Get involved <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.article
              key={update.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative h-48">
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {update.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white text-sm">
                  <Calendar size={16} />
                  <span>{update.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{update.title}</h4>
                <p className="text-gray-600">{update.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
