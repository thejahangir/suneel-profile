import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, ChevronRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { experienceTimeline } from "../data/portfolioData";

export const Experience: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>("oracle");

  const toggleExpand = (id: string) => {
    if (expandedJob === id) {
      // Don't close if it is already open to ensure at least one remains open (great for user experience)
      return;
    }
    setExpandedJob(id);
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-black">
      
      {/* Background blurs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-green" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              Career History
            </span>
            <div className="h-px w-8 bg-brand-green" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Professional Experience Timeline
          </h2>
          <p className="text-brand-gray-300 font-normal text-base sm:text-lg leading-relaxed">
            Click on any corporate milestone to expand detailed project profiles, metrics, and business outcomes.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-brand-gray-850 ml-4 md:ml-6 space-y-12">
          {experienceTimeline.map((item) => {
            const isExpanded = expandedJob === item.id;
            
            return (
              <div key={item.id} className="relative pl-8 sm:pl-10 group">
                
                {/* Glowing Node Marker */}
                <div
                  className={`absolute -left-[11px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                    isExpanded
                      ? "bg-black border-brand-orange shadow-[0_0_12px_rgba(251,97,7,0.7)]"
                      : "bg-brand-gray-950 border-brand-gray-800 group-hover:border-brand-gray-600"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-transform duration-500 ${
                      isExpanded ? "bg-brand-orange scale-110" : "bg-brand-gray-800 group-hover:bg-brand-gray-400"
                    }`}
                  />
                </div>

                {/* Job Card */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`glass-panel p-6 sm:p-8 rounded-2xl border transition-all duration-350 cursor-pointer text-left shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:bg-brand-gray-950/40 relative overflow-hidden ${
                    isExpanded
                      ? "border-brand-orange/40 bg-brand-gray-950/60 shadow-[0_10px_40px_rgba(251,97,7,0.08)]"
                      : "border-brand-gray-850 hover:border-brand-gray-700"
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  {isExpanded && (
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green" />
                  )}

                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border border-brand-gray-800 bg-brand-gray-950 ${isExpanded ? "text-brand-orange border-brand-orange/20" : "text-brand-gray-400"}`}>
                        <Building2 className="w-5 h-5" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-orange transition-colors">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-semibold text-brand-yellow">{item.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-gray-300 bg-brand-gray-950 px-3 py-1.5 rounded-lg border border-brand-gray-850/80 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-brand-green" />
                      {item.period}
                    </div>
                  </div>

                  {/* Dropdown handle */}
                  <div className="absolute right-6 bottom-6 text-brand-gray-400 group-hover:text-white hidden sm:block">
                    {isExpanded ? <ChevronDown className="w-5 h-5 text-brand-orange" /> : <ChevronRight className="w-5 h-5" />}
                  </div>

                  {/* Expandable Project Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-brand-gray-850/80 space-y-8">
                          {item.projects.map((proj, pidx) => (
                            <div key={pidx} className="space-y-4">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                <h4 className="text-base font-bold font-display text-white tracking-wide">
                                  {proj.title}
                                </h4>
                              </div>
                              
                              <p className="text-sm text-brand-gray-300 font-normal leading-relaxed pl-3.5">
                                {proj.description}
                              </p>

                              {/* Achievements bullet list */}
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-3.5">
                                {proj.achievements.map((ach, aidx) => (
                                  <li key={aidx} className="flex items-start gap-2.5 text-xs text-brand-gray-200 font-normal leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                                    <span>{ach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Experience;
