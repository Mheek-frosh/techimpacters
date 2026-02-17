"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Code, Smartphone, Cpu } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Code For Kids",
      category: "Digital Literacy",
      description: "A comprehensive program teaching Scratch, Python, and web basics to primary school students across 15+ schools. Includes weekly sessions, hackathons, and parent showcases.",
      icon: <Code className="text-primary" size={24} />,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      color: "bg-blue-50",
    },
    {
      title: "Mobile Lab Initiative",
      category: "Infrastructure",
      description: "Deploying portable computer labs to rural schools that lack permanent tech facilities. Each lab rotates between 3–4 schools monthly, reaching thousands of students.",
      icon: <Smartphone className="text-primary" size={24} />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      color: "bg-blue-50",
    },
    {
      title: "STEM Workshops",
      category: "Innovation",
      description: "Interactive weekend workshops on robotics, electronics, and 3D printing for high school students. Partner schools host sessions; we provide kits and trained facilitators.",
      icon: <Cpu className="text-primary" size={24} />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      color: "bg-blue-50",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-wider mb-2">Our Projects</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Driving Change Through Innovation</h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-4">
            Explore our flagship initiatives designed to empower young students and educators with modern tools. From coding to robotics, we&apos;re making tech accessible to every child.
          </p>
          <p className="max-w-xl mx-auto text-gray-500">
            Each project is designed with scalability in mind—reaching urban and rural schools alike through mobile labs, teacher training, and hands-on curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                  {project.icon}
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  href="/projects"
                  className="flex items-center space-x-2 text-primary font-bold group/btn hover:underline"
                >
                  <span>See Full Details</span>
                  <ExternalLink size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
