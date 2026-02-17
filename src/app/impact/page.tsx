"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, School, Laptop, Award } from "lucide-react";

const stats = [
  { label: "Schools Reached", value: "50+", icon: School },
  { label: "Students Trained", value: "5,000+", icon: Users },
  { label: "Computers Donated", value: "250", icon: Laptop },
  { label: "Teacher Workshops", value: "100+", icon: Award },
];

const impactStories = [
  {
    title: "From Zero to Code Champion",
    school: "Rural Primary School, Ogun State",
    excerpt: "When we first arrived, the school had no computers. Today, 12-year-old Amina has built 3 mobile apps and mentors her classmates.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    metric: "95% student engagement",
  },
  {
    title: "Teachers Become Tech Leaders",
    school: "Urban Secondary School, Lagos",
    excerpt: "Our Teacher Tech Training transformed 45 educators into digital champions. They now run coding clubs and integrate tech across subjects.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    metric: "45 certified educators",
  },
  {
    title: "Mobile Lab Reaches the Unreachable",
    school: "Remote Community, Niger Delta",
    excerpt: "The Mobile Lab Initiative brought computers to a school 3 hours from the nearest town. Students had their first coding experience at age 10.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    metric: "40 schools served",
  },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a0546980c83?w=1920&q=30"
            alt=""
            fill
            className="object-cover"
          />
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Our <span className="text-blue-200">Impact</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-blue-100">
              Real stories. Real change. See how we&apos;re transforming education and empowering the next generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-blue-50 rounded-3xl border border-blue-100"
              >
                <stat.icon className="mx-auto mb-4 text-primary" size={40} />
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Impact Stories</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Hear from the schools and students whose lives we&apos;ve transformed through technology education.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={story.image} alt={story.title} fill className="object-cover" sizes="400px" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {story.metric}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{story.school}</p>
                  <p className="text-gray-600">{story.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="mx-auto mb-6 text-white" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">Growing Every Year</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Our commitment to bridging the digital divide continues to expand. Join us in making technology education accessible to every child.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
