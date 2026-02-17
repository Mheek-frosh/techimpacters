"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Smartphone, Cpu, GraduationCap, Lightbulb } from "lucide-react";

const projects = [
  {
    title: "Code For Kids",
    category: "Digital Literacy",
    description: "A comprehensive program teaching basic programming to primary school students across 15 schools. We introduce young minds to computational thinking through fun, interactive Scratch and block-based coding sessions.",
    longDescription: "Code For Kids reaches over 2,000 primary school students annually. Our curriculum is designed by educators and industry experts to make coding accessible and exciting. Students build games, animations, and simple apps while developing problem-solving skills.",
    icon: <Code className="text-primary" size={28} />,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    stats: { schools: 15, students: "2,000+", duration: "Ongoing" },
  },
  {
    title: "Mobile Lab Initiative",
    category: "Infrastructure",
    description: "Deploying portable computer labs to rural schools that lack permanent tech facilities. Each lab includes 20 laptops, projectors, and solar-powered charging stations.",
    longDescription: "Our Mobile Lab Initiative brings technology directly to underserved communities. We've deployed 12 mobile labs that rotate between 40+ schools, ensuring students in remote areas get hands-on computer experience. Each lab is equipped with educational software and internet connectivity.",
    icon: <Smartphone className="text-primary" size={28} />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    stats: { schools: 40, students: "3,500+", duration: "Since 2020" },
  },
  {
    title: "STEM Workshops",
    category: "Innovation",
    description: "Interactive weekend workshops focusing on robotics, electronics, and engineering for high school students. Hands-on projects that spark curiosity and career interest.",
    longDescription: "Our STEM Workshops run every quarter, bringing together 200+ high school students for intensive 2-day sessions. Participants build robots, design circuits, and collaborate on real-world challenges. Many alumni have pursued STEM degrees at university.",
    icon: <Cpu className="text-primary" size={28} />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    stats: { schools: 25, students: "800+", duration: "Quarterly" },
  },
  {
    title: "Young Innovators Bootcamp",
    category: "Innovation",
    description: "A 2-week intensive summer program for secondary school students interested in tech entrepreneurship. Students develop app ideas and pitch to real investors.",
    longDescription: "The Young Innovators Bootcamp transforms students into budding entrepreneurs. Over two weeks, participants learn design thinking, prototype development, and business basics. The program culminates in a Demo Day where top teams present to angel investors.",
    icon: <Lightbulb className="text-primary" size={28} />,
    image: "https://images.unsplash.com/photo-1523240795612-9a0546980c83?w=800&q=80",
    stats: { schools: 10, students: "150", duration: "Annual" },
  },
  {
    title: "Teacher Tech Training",
    category: "Capacity Building",
    description: "Professional development programs for educators to integrate technology into their classrooms effectively. Certified trainers and ongoing support.",
    longDescription: "We believe teachers are the key to sustainable impact. Our training programs have upskilled 500+ educators in digital tools, coding pedagogy, and blended learning. Participants receive certification and join our community of tech-savvy educators.",
    icon: <GraduationCap className="text-primary" size={28} />,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    stats: { schools: 50, teachers: "500+", duration: "Ongoing" },
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a0546980c83?w=1920&q=20')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center text-primary font-semibold mb-8 hover:underline">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Driving innovation and impact through programs that empower young students with technology education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                <div className="flex-1 relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-primary rounded-full text-sm font-bold mb-4">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-6 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="bg-blue-50 px-4 py-2 rounded-xl">
                        <span className="font-bold text-primary">{String(value)}</span>
                        <span className="text-gray-600 text-sm ml-1 capitalize">{key}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl">
                    {project.icon}
                  </div>
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
