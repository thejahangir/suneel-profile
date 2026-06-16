import React, { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogArticles } from "../data/portfolioData";

export const Blog: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "Agentic AI", "Software Architecture", "Microservices", "Cloud Native"];

  const filteredArticles = selectedFilter === "All"
    ? blogArticles
    : blogArticles.filter(art => art.category === selectedFilter);

  return (
    <section id="blog" className="relative py-24 sm:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-brand-gray-900/60 bg-brand-black">
      
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-px w-8 bg-brand-orange" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Publications
            </span>
            <div className="h-px w-8 bg-brand-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
            Insights from the Architecture Desk
          </h2>
          <p className="text-brand-gray-300 font-normal text-base sm:text-lg leading-relaxed">
            Thought leadership, design patterns, and scaling strategies curated from Suneel's production deployments.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide border transition-all duration-300 ${
                selectedFilter === cat
                  ? "bg-brand-gray-950 text-brand-orange border-brand-orange/30 shadow-[0_4px_15px_rgba(251,97,7,0.08)]"
                  : "bg-transparent text-brand-gray-300 border-transparent hover:text-white hover:bg-brand-gray-950/45"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-brand-gray-850 hover:border-brand-orange/30 transition-all duration-350 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold font-mono tracking-wider uppercase text-brand-orange bg-brand-orange/5 border border-brand-orange/20 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  
                  <div className="flex items-center gap-4 text-[10px] text-brand-gray-200 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-brand-yellow transition-colors leading-snug mb-3">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-brand-gray-300 font-normal leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              {/* Read Link */}
              <div className="flex items-center gap-1 text-xs font-semibold text-brand-orange group-hover:text-brand-yellow transition-colors mt-auto self-start">
                <span>Read Case Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Blog;
