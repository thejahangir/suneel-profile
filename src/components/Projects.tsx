import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Activity, AlertTriangle, Layers } from "lucide-react";
import { featuredProjects } from "../data/portfolioData";

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState(featuredProjects[0].id);

  const activeProject = featuredProjects.find((p) => p.id === activeTab) || featuredProjects[0];

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-brand-black">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-orange" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Case Studies
            </span>
            <div className="h-px w-8 bg-brand-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Featured Systems & Projects
          </h2>
          <p className="text-brand-gray-300 font-normal text-base sm:text-lg leading-relaxed">
            Detailed breakdowns of production platforms architected by Suneel. Select a tab below to analyze the problem, design patterns, scale, and business value.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {featuredProjects.map((project) => {
            const isActive = activeTab === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-brand-orange to-brand-yellow text-black border-transparent shadow-[0_4px_20px_rgba(251,97,7,0.25)] scale-105"
                    : "bg-brand-gray-950 text-brand-gray-200 border-brand-gray-850 hover:text-white hover:border-brand-gray-700"
                }`}
              >
                {project.title}
              </button>
            );
          })}
        </div>

        {/* Case Study Detailed View */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl border border-brand-gray-800 p-6 sm:p-8 lg:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.8)] relative"
            >
              {/* Internal ambient glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
              
              {/* Headline */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-brand-gray-850 pb-8 mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {activeProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold font-mono tracking-wider bg-brand-gray-950 text-brand-gray-300 border border-brand-gray-850 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-brand-gray-950/80 border border-brand-gray-850 rounded-2xl px-5 py-4 self-start lg:self-center">
                  <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-widest text-brand-gray-200 font-semibold">
                      Production Scale
                    </span>
                    <span className="text-sm font-bold text-white font-mono mt-0.5">
                      {activeProject.scale}
                    </span>
                  </div>
                </div>
              </div>

              {/* Layout Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left">
                
                {/* Left side column: Problem & Architecture */}
                <div className="space-y-8">
                  {/* Problem */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-brand-orange">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <h4 className="text-sm font-semibold uppercase tracking-wider font-display">
                        Business Problem
                      </h4>
                    </div>
                    <p className="text-sm text-brand-gray-200 font-normal leading-relaxed pl-7">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Technical Architecture */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-brand-yellow">
                      <Layers className="w-5 h-5 shrink-0" />
                      <h4 className="text-sm font-semibold uppercase tracking-wider font-display">
                        Technical Architecture
                      </h4>
                    </div>
                    <p className="text-sm text-brand-gray-200 font-normal leading-relaxed pl-7">
                      {activeProject.architecture}
                    </p>
                  </div>
                </div>

                {/* Right side column: Business Impact Highlight */}
                <div className="flex flex-col justify-between h-full bg-brand-gray-950/40 border border-brand-gray-850/60 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                  
                  {/* Gradient decoration */}
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-green/5 rounded-full blur-[50px] pointer-events-none" />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-2 text-brand-green">
                      <DollarSign className="w-5 h-5 shrink-0" />
                      <h4 className="text-sm font-semibold uppercase tracking-wider font-display">
                        Business Value & Impact
                      </h4>
                    </div>
                    
                    <p className="text-sm sm:text-base text-brand-gray-200 font-normal leading-relaxed">
                      {activeProject.impact}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-brand-gray-850/60 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green flex items-center justify-center text-black font-extrabold text-sm shadow-md">
                        ROI
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-gray-200 uppercase tracking-widest font-semibold block">
                          Savings / Value
                        </span>
                        <span className="text-sm font-bold text-brand-green font-mono">
                          Verified Enterprise Outcome
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] font-semibold text-brand-gray-200 bg-brand-gray-950 border border-brand-gray-800 px-3.5 py-2 rounded-xl">
                      Cloud Native Architecture
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
export default Projects;
