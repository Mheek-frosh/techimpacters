"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Users, Globe, Target, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: <BookOpen className="text-primary" size={32} />,
    title: "Quality Curriculum",
    description: "Providing modern tech curriculum tailored for K-12 students.",
  },
  {
    icon: <Users className="text-primary" size={32} />,
    title: "Expert Mentors",
    description: "Connecting students with industry professionals and tech enthusiasts.",
  },
  {
    icon: <Globe className="text-primary" size={32} />,
    title: "Wide Reach",
    description: "Partnering with schools in both urban and underserved communities.",
  },
  {
    icon: <Target className="text-primary" size={32} />,
    title: "Impact Focused",
    description: "Dedicated to measurable growth in digital literacy and coding skills.",
  },
];

const team = [
  { name: "Our Mission", image: "https://images.unsplash.com/photo-1523240795612-9a0546980c83?w=400&q=80", role: "Bridging the digital divide" },
  { name: "Our Vision", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80", role: "Tech for every child" },
  { name: "Our Impact", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80", role: "10+ years of excellence" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a0546980c83?w=1920&q=40"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-blue-100 font-semibold mb-8 hover:text-white transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Sparkles size={18} /> About Techimpacters
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Our <span className="text-blue-200">Story</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-blue-100">
              An academic NGO on a mission to transform schools through technology education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-6">
                Techimpacters was founded with a simple yet powerful goal: to ensure that every student, regardless of their background, has access to the tools and knowledge necessary to thrive in the digital age.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Since 2014, we&apos;ve been working with schools across the region to bring high-quality tech education to young learners. From coding workshops to mobile computer labs, we&apos;re building bridges that connect students to the future.
              </p>
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl">
                <Heart className="text-primary shrink-0" size={40} />
                <div>
                  <p className="font-bold text-gray-900">10+ Years of Excellence</p>
                  <p className="text-gray-600">In tech education and school-based initiatives</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                alt="Students learning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What We Stand For</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our core values guide everything we do in bringing technology education to schools.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="400px" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-primary font-semibold">{item.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
