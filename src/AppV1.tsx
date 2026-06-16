import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Leadership from "./components/Leadership";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export const AppV1: React.FC = () => {
  return (
    <div className="relative bg-black min-h-screen text-white select-none">
      
      {/* Canvas particle background layer */}
      <ParticleBackground />

      {/* Main floating Navigation Header */}
      <Header />

      {/* Main layout contents displayed vertically */}
      <main className="relative z-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Leadership />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      {/* Signature Footer */}
      <Footer />

    </div>
  );
};

export default AppV1;
