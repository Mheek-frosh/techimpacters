"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a0546980c83?w=1920&q=80",
    alt: "Students collaborating on a technology project",
    badge: "Empowering the Next Generation",
    headline: "Impacting Futures Through",
    highlight: "Technology in Schools",
    subtext: "Techimpacters brings high-quality tech education and resources to schools, bridging the digital divide for every student.",
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80",
    alt: "Students learning with laptops in classroom",
    badge: "Digital Literacy for All",
    headline: "Code For Kids &",
    highlight: "STEM Workshops",
    subtext: "From coding basics to robotics—we equip young minds with skills that open doors to the future.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    alt: "Team collaboration and innovation",
    badge: "50+ Schools Reached",
    headline: "Building Tech Ecosystems",
    highlight: "In Every Community",
    subtext: "Mobile labs, teacher training, and infrastructure—we reach urban and rural schools alike.",
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    alt: "Young student coding on laptop",
    badge: "5,000+ Students Trained",
    headline: "Transforming Education",
    highlight: "One Student at a Time",
    subtext: "Join us in making technology education accessible to every child, regardless of background.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) =>
                index === currentSlide ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30">
                      <Sparkles size={16} />
                      <span>{slide.badge}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                      {slide.headline}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                        {slide.highlight}
                      </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                      {slide.subtext}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        href="/projects"
                        className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/30 hover:bg-blue-600 transition-all transform hover:-translate-y-0.5"
                      >
                        <span>View Our Projects</span>
                        <ArrowRight size={20} />
                      </Link>
                      <Link
                        href="/about"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
