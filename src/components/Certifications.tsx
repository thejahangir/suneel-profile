import React from "react";
import { ShieldCheck, Check } from "lucide-react";
import { certifications } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-brand-black">
      
      {/* Background blurs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-yellow" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
              Credentials
            </span>
            <div className="h-px w-8 bg-brand-yellow" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Certifications & Badges
          </h2>
          <p className="text-brand-gray-300 font-normal text-base sm:text-lg leading-relaxed">
            Professional cloud, architecture, observability, and container orchestration certifications verified by industry standard organizations.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group relative rounded-2xl p-0.5 transition-all duration-500 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Animated gradient outer layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-40 transition-opacity duration-500`} />
              
              {/* Inner glassmorphism panel */}
              <div className="relative w-full h-full bg-brand-gray-950/95 rounded-2xl p-6 border border-brand-gray-900 group-hover:border-brand-gray-800 transition-colors flex flex-col items-center justify-between text-center min-h-[220px]">
                
                {/* Badge Icon */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center p-[1px] mb-4 shadow-lg`}>
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Badge Meta */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-sm font-bold font-display text-white tracking-wide mb-1 leading-snug group-hover:text-brand-yellow transition-colors">
                    {cert.name}
                  </h3>
                  
                  <span className="text-[10px] text-brand-gray-200 uppercase tracking-widest font-semibold mt-1">
                    {cert.issuer}
                  </span>
                </div>

                {/* Badge Footer */}
                <div className="mt-4 pt-3 border-t border-brand-gray-900 w-full flex items-center justify-between text-[10px] text-brand-gray-100 font-mono">
                  <div className="flex items-center gap-1 text-brand-green">
                    <Check className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                  <span>Issued: {cert.year}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Certifications;
