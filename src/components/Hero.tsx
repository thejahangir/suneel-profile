import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { personalInfo, rotatingTitles, statistics } from "../data/portfolioData";
import DpSuneel from '../assets/suneel-headshot.png';

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0">
        <div className="aurora-glow-orange top-1/4 left-1/4 animate-float" />
        <div className="aurora-glow-yellow bottom-1/3 right-1/4 animate-pulse-slow" style={{ animationDuration: '8s' }} />
        <div className="aurora-glow-green top-1/3 right-10 animate-float" style={{ animationDuration: '10s' }} />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20 relative">
        
        {/* Left Side: Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-gray-950/80 border border-brand-gray-800 rounded-full px-4 py-1.5 w-fit mb-6 shadow-[0_4px_20px_rgba(251,97,7,0.05)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="text-[11px] font-semibold text-brand-gray-300 uppercase tracking-widest">
              Principal Systems Architect
            </span>
          </motion.div>

          {/* Name & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-[3.5rem] sm:text-6xl lg:text-7xl font-extrabold font-display leading-[1.05] tracking-tight text-white mb-2">
              <span className="block text-brand-gray-200 font-medium text-2xl tracking-normal font-sans mb-3">
                {personalInfo.name}
              </span>
              Architecting Enterprise
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green animate-gradient-x py-1">
                Systems That Scale
              </span>
            </h1>
          </motion.div>

          {/* Dynamic Rotating Titles */}
          <div className="h-12 sm:h-16 flex items-center mb-6">
            <span className="text-xl sm:text-2xl text-brand-gray-200 mr-2 font-normal">I am a</span>
            <div className="overflow-hidden relative h-full flex-1 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="absolute text-xl sm:text-2xl font-bold font-display text-brand-yellow tracking-wide"
                >
                  {rotatingTitles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-gray-200 font-normal max-w-xl leading-relaxed mb-10"
          >
            {statistics[0].value} years building enterprise-scale distributed systems, cloud-native applications, AI-powered platforms, and mission-critical software solutions used by millions of users worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* Primary glow button */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-6 py-3.5 bg-gradient-to-r from-brand-orange to-brand-yellow hover:from-brand-yellow hover:to-brand-green text-black font-semibold rounded-full flex items-center gap-2 group transition-all duration-300 transform hover:scale-105 shadow-[0_4px_20px_rgba(251,97,7,0.3)] hover:shadow-[0_4px_30px_rgba(112,224,0,0.4)]"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resume || "/suneel-resume.pdf"}
              download="Suneel_Kandali_Resume.pdf"
              className="px-6 py-3.5 bg-brand-gray-950/80 hover:bg-brand-gray-900 border border-brand-gray-800 hover:border-brand-gray-700 text-white font-medium rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              <FileText className="w-4 h-4 text-brand-yellow" />
              View Resume
            </a>

            {/* Secondary CTA */}
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-gray-300 hover:text-white transition-colors duration-300 ml-2"
            >
              Explore My Work
            </button>
          </motion.div>

        </div>

        {/* Right Side: Professional Headshot */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group"
          >
            {/* Pulsing Backglow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green rounded-3xl opacity-20 blur-2xl group-hover:opacity-45 transition-opacity duration-700" />
            
            {/* Glowing animated border frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green rounded-3xl p-[1.5px] animate-spin-slow group-hover:animation-duration-6000 shadow-2xl">
              {/* Internal container to mask rotating gradient */}
              <div className="w-full h-full bg-black rounded-3xl" />
            </div>

            {/* Inner Glassmorphism Frame containing Image */}
            <div className="absolute inset-[3px] bg-brand-gray-950/90 rounded-3xl overflow-hidden glass-panel border border-brand-gray-800 shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center justify-center p-4">
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <img
                  src={DpSuneel}
                  alt="Suneel Kandali professional headshot"
                  className="w-full h-full object-cover object-center filter saturate-105 scale-102 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to internal assets path if needed
                    e.currentTarget.src = "/src/assets/suneel-headshot.png";
                  }}
                />
                
                {/* Visual Glass overlays inside the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60" />
                
                {/* Glowing border inside */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer animate-bounce">
        <button
          onClick={() => handleScrollTo("about")}
          aria-label="Scroll down to About Section"
          className="p-2 rounded-full border border-brand-gray-800 hover:border-brand-gray-600 bg-brand-gray-950/50 transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-brand-gray-200 hover:text-white" />
        </button>
      </div>

    </section>
  );
};
export default Hero;
