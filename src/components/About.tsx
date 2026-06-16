import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Users, ShieldAlert, Cpu } from "lucide-react";
import { statistics } from "../data/portfolioData";

// Helper component for animated numerical counters
const StatCounter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse the number and the suffix
    const numMatch = value.match(/^([\d.,]+)/);
    const suffixMatch = value.match(/([^\d.,]+)$/);

    if (!numMatch) {
      setCount(value);
      return;
    }

    const numStr = numMatch[1].replace(/,/g, '');
    const isFloat = numStr.includes('.');
    const endValue = isFloat ? parseFloat(numStr) : parseInt(numStr, 10);
    const suffix = suffixMatch ? suffixMatch[1] : "";

    let start = 0;
    const stepTime = 25; // 25ms steps
    const steps = (duration * 1000) / stepTime;
    const increment = endValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(timer);
        setCount(value);
      } else {
        const formatted = isFloat 
          ? start.toFixed(1) 
          : Math.floor(start).toLocaleString();
        setCount(`${formatted}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
      {count || "0"}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-black">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Storytelling */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-brand-orange" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                My Philosophy
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6 leading-tight">
              Engineering Leadership Through Innovation
            </h2>

            <div className="space-y-6 text-brand-gray-200 font-normal text-base sm:text-lg leading-relaxed">
              <p>
                As a <strong className="text-white font-medium">Principal Engineer at Oracle USA</strong>, my focus is at the intersection of enterprise complexity, cloud scalability, and cutting-edge artificial intelligence. With over 15 years in software architecture, I design and run systems that handle massive transactional throughput while reducing architectural overhead.
              </p>
              <p>
                I believe that architecture is not just about writing code; it is about building reliable, self-governing platforms. From launching <strong className="text-white font-medium">Employee PulseGuard</strong> across 170K+ enterprise devices to scaling Walmart's training systems for 1.6M associates, my approach revolves around decoupling systems, deploying event-driven architectures, and embedding agentic AI solutions to automate operational friction.
              </p>
              <p>
                In addition to system design, I dedicate significant effort to <strong className="text-white font-medium">mentoring and technical leadership</strong>. I conduct architecture reviews, guide technical roadmaps, align cross-functional initiatives, and foster high-velocity engineering cultures that deliver multi-million dollar annual savings.
              </p>
            </div>
          </div>

          {/* Right Side: Key Achievements Matrix */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {statistics.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`glass-panel p-6 rounded-2xl text-left border border-brand-gray-800 hover:border-brand-orange/40 hover:bg-brand-gray-950/80 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] shine-hover group ${
                    idx === 4 ? "col-span-2" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <StatCounter value={stat.value} />
                    {idx === 0 && <Award className="w-5 h-5 text-brand-orange/60 group-hover:text-brand-orange transition-colors" />}
                    {idx === 1 && <Briefcase className="w-5 h-5 text-brand-yellow/60 group-hover:text-brand-yellow transition-colors" />}
                    {idx === 2 && <Cpu className="w-5 h-5 text-brand-green/60 group-hover:text-brand-green transition-colors" />}
                    {idx === 3 && <Users className="w-5 h-5 text-brand-orange/60 group-hover:text-brand-orange transition-colors" />}
                    {idx === 4 && <ShieldAlert className="w-5 h-5 text-brand-yellow/60 group-hover:text-brand-yellow transition-colors" />}
                  </div>
                  
                  <h3 className="text-sm font-semibold font-display text-white mb-1 group-hover:text-brand-yellow transition-colors uppercase tracking-wider">
                    {stat.label}
                  </h3>
                  
                  <p className="text-xs text-brand-gray-300 font-normal leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote Panel */}
            <div className="mt-8 glass-panel p-6 rounded-2xl text-left border border-brand-gray-800 bg-brand-gray-950/20 relative">
              <div className="absolute top-4 right-6 text-6xl font-serif text-brand-orange/10 pointer-events-none">“</div>
              <p className="text-sm italic text-brand-gray-200 font-normal leading-relaxed relative z-10">
                &ldquo;The best architectures are invisible. They run autonomously, self-heal under load, and adapt to the needs of the business without manual operations.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="text-[11px] font-semibold tracking-wider text-brand-orange uppercase">Suneel Kandali</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default About;
