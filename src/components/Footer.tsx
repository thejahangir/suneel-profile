import React from "react";
import { BookOpen } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// Inline SVG components replacing deprecated Lucide brand icons
const LinkedIn: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHub: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface FooterProps {
  isV2?: boolean;
  onSectionChangeV2?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ isV2 = false, onSectionChangeV2 }) => {
  const handleScrollTo = (id: string) => {
    if (isV2 && onSectionChangeV2) {
      onSectionChangeV2(id);
      return;
    }
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
    <footer className="bg-black border-t border-brand-gray-900/60 py-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Left column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-orange to-brand-green flex items-center justify-center font-display font-extrabold text-black text-xs">
              S
            </div>
            <span className="font-display font-bold text-white text-sm uppercase tracking-wide">
              Suneel Kandali
            </span>
          </div>

          <p className="text-xs text-brand-gray-200 font-normal leading-relaxed max-w-sm">
            "Suneel Kandali — Architecting Scalable Digital Futures"
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-12">
          {/* Quick links */}
          <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider text-brand-gray-300">
            <button onClick={() => handleScrollTo("home")} className="hover:text-brand-orange transition-colors">
              Home
            </button>
            <button onClick={() => handleScrollTo("about")} className="hover:text-brand-orange transition-colors">
              About
            </button>
            <button onClick={() => handleScrollTo("projects")} className="hover:text-brand-orange transition-colors">
              Projects
            </button>
            <button onClick={() => handleScrollTo("contact")} className="hover:text-brand-orange transition-colors">
              Contact
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-gray-400 hover:text-brand-orange transition-colors rounded-full border border-brand-gray-900 bg-brand-gray-950/40"
              aria-label="LinkedIn Profile"
            >
              <LinkedIn className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-gray-400 hover:text-brand-orange transition-colors rounded-full border border-brand-gray-900 bg-brand-gray-950/40"
              aria-label="GitHub Profile"
            >
              <GitHub className="w-4 h-4" />
            </a>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("blog");
              }}
              className="p-2 text-brand-gray-400 hover:text-brand-orange transition-colors rounded-full border border-brand-gray-900 bg-brand-gray-950/40"
              aria-label="Architecture Blog"
            >
              <BookOpen className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-gray-900 flex flex-col sm:flex-row justify-between text-xs text-brand-gray-200 font-mono gap-4">
        <span>&copy; {new Date().getFullYear()} Suneel Kandali. All Rights Reserved.</span>
        <span>Premium Enterprise Technology Portfolio Architecture</span>
      </div>
    </footer>
  );
};
export default Footer;
