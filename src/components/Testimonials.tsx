import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "../data/portfolioData";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-brand-black">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-green" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              Endorsements
            </span>
            <div className="h-px w-8 bg-brand-green" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Executive Endorsements
          </h2>
          <p className="text-brand-gray-300 font-normal text-base sm:text-lg leading-relaxed">
            Praise from corporate sponsors, engineering directors, and cross-functional leaders who have worked alongside Suneel Kandali.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {testimonials.map((test) => (
            <div
              key={test.name}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-brand-gray-900 flex flex-col justify-between hover:border-brand-orange/20 transition-all duration-300 relative shadow-[0_4px_30px_rgba(0,0,0,0.4)] group"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-brand-gray-900 group-hover:text-brand-orange/10 transition-colors">
                <Quote className="w-8 h-8 rotate-180" />
              </div>

              <div>
                <p className="text-xs sm:text-sm text-brand-gray-200 font-normal leading-relaxed mb-6 italic relative z-10">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-brand-gray-900 pt-4">
                {/* Avatar Icon */}
                <div className="w-9 h-9 rounded-xl bg-brand-gray-950 border border-brand-gray-850 flex items-center justify-center font-display font-bold text-xs text-brand-orange">
                  {test.avatar}
                </div>
                
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display">
                    {test.name}
                  </h3>
                  <p className="text-[10px] text-brand-gray-200 font-normal tracking-wide mt-0.5">
                    {test.role}, <strong className="text-brand-yellow font-normal">{test.company}</strong>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
