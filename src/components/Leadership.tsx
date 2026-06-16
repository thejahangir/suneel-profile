import React from "react";
import { Users, GraduationCap, FileSearch, Compass, Network, TrendingUp } from "lucide-react";
import { leadershipHighlights } from "../data/portfolioData";

export const Leadership: React.FC = () => {
  const getIcon = (idx: number, className: string) => {
    switch (idx) {
      case 0:
        return <Compass className={className} />;
      case 1:
        return <GraduationCap className={className} />;
      case 2:
        return <FileSearch className={className} />;
      case 3:
        return <Network className={className} />;
      case 4:
        return <Users className={className} />;
      default:
        return <TrendingUp className={className} />;
    }
  };

  const getBorderColor = (idx: number) => {
    if (idx % 3 === 0) return "hover:border-brand-orange/40";
    if (idx % 3 === 1) return "hover:border-brand-yellow/40";
    return "hover:border-brand-green/40";
  };

  return (
    <section id="leadership" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-black">
      
      {/* Background blurs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-green" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              Organizational Leadership
            </span>
            <div className="h-px w-8 bg-brand-green" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Beyond Engineering
          </h2>
          <p className="text-brand-gray-200 font-normal text-base sm:text-lg leading-relaxed">
            Leading teams, mentoring staff, guiding architecture boards, and delivering multi-million dollar annual savings through financial engineering.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {leadershipHighlights.map((highlight, idx) => (
            <div
              key={highlight.title}
              className={`glass-panel p-6 sm:p-8 rounded-2xl border border-brand-gray-900 text-left transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] shine-hover group ${getBorderColor(idx)}`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-brand-gray-950 border border-brand-gray-850 flex items-center justify-center text-brand-gray-200 group-hover:text-brand-orange transition-colors duration-300 mb-6">
                {getIcon(idx, "w-5 h-5")}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-brand-gray-200 font-normal leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Leadership;
