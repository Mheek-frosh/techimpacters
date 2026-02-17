import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Updates from "@/components/Updates";
import WatchOurStory from "@/components/WatchOurStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Impact />
      <Updates />
      <WatchOurStory />
      <Footer />
    </main>
  );
}
