import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Server, Monitor, Cloud, Terminal, BrainCircuit } from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].id);

  // Return icons based on category ID
  const getCategoryIcon = (id: string, className: string) => {
    switch (id) {
      case "architecture":
        return <Layers className={className} />;
      case "backend":
        return <Server className={className} />;
      case "frontend":
        return <Monitor className={className} />;
      case "cloud":
        return <Cloud className={className} />;
      case "devops":
        return <Terminal className={className} />;
      case "ai":
        return <BrainCircuit className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  // Assign custom colors based on index or ID
  const getColorClasses = (id: string) => {
    switch (id) {
      case "architecture":
      case "ai":
        return {
          glow: "group-hover:border-brand-orange/40 group-hover:shadow-[0_0_20px_rgba(251,97,7,0.15)]",
          text: "text-brand-orange",
          bg: "bg-brand-orange/5"
        };
      case "backend":
      case "cloud":
        return {
          glow: "group-hover:border-brand-yellow/40 group-hover:shadow-[0_0_20px_rgba(243,222,44,0.15)]",
          text: "text-brand-yellow",
          bg: "bg-brand-yellow/5"
        };
      default:
        return {
          glow: "group-hover:border-brand-green/40 group-hover:shadow-[0_0_20px_rgba(112,224,0,0.15)]",
          text: "text-brand-green",
          bg: "bg-brand-green/5"
        };
    }
  };

  const activeCategoryData = skillCategories.find((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-brand-black">
      
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-yellow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              Expertise Matrix
            </span>
            <div className="h-px w-8 bg-brand-yellow" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Interactive Skill Visualization
          </h2>
          <p className="text-brand-gray-300 font-normal text-base sm:text-lg leading-relaxed">
            Click on any category to explore the cloud-native, distributed architecture, and AI models Suneel leverages to build enterprise solutions.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Categories Menu */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar">
            {skillCategories.map((category) => {
              const active = selectedCategory === category.id;
              const colorInfo = getColorClasses(category.id);
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left border transition-all duration-300 w-full whitespace-nowrap lg:whitespace-normal group ${
                    active
                      ? "bg-brand-gray-950/80 border-brand-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                      : "bg-transparent border-transparent hover:border-brand-gray-900 hover:bg-brand-gray-950/30"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                    active ? colorInfo.bg : "bg-brand-gray-950 border border-brand-gray-800"
                  }`}>
                    {getCategoryIcon(
                      category.id,
                      `w-5 h-5 transition-colors ${active ? colorInfo.text : "text-brand-gray-400 group-hover:text-white"}`
                    )}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className={`text-sm font-semibold tracking-wide font-display ${
                      active ? "text-white" : "text-brand-gray-300 group-hover:text-white"
                    }`}>
                      {category.title}
                    </span>
                    <span className="text-[10px] text-brand-gray-200 font-normal tracking-wide mt-0.5">
                      {category.skills.length} Technical Proficiencies
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Skills Display Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-gray-800/80 h-full flex flex-col justify-center min-h-[300px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                >
                  {activeCategoryData?.skills.map((skill, index) => {
                    const colorInfo = getColorClasses(selectedCategory);
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`group border border-brand-gray-850 bg-brand-gray-950/20 p-5 rounded-2xl flex flex-col justify-between items-start transition-all duration-300 ${colorInfo.glow}`}
                      >
                        <div className="flex justify-between items-center w-full mb-3">
                          <span className="font-display font-semibold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-gray-300">
                            {skill}
                          </span>
                          
                          <span className={`text-[10px] font-semibold font-mono tracking-widest uppercase py-0.5 px-2 rounded-full border border-brand-gray-800 ${colorInfo.bg} ${colorInfo.text}`}>
                            Expert
                          </span>
                        </div>

                        {/* Interactive glow progress indicator */}
                        <div className="w-full bg-brand-gray-900 h-1.5 rounded-full overflow-hidden relative">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${
                              selectedCategory === "architecture" || selectedCategory === "ai"
                                ? "from-brand-orange to-brand-yellow animate-pulse-slow"
                                : selectedCategory === "backend" || selectedCategory === "cloud"
                                ? "from-brand-yellow to-brand-green"
                                : "from-brand-green to-brand-orange"
                            }`}
                            style={{ width: "95%" }} // Since Suneel is a Principal Architect, skills are expert-level (95%+)
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Skills;
