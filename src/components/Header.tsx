import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, X, ChevronRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import LogoSuneel from "../assets/logo-suneel.png";

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

const BlogIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
    <path d="M13 14h3" />
  </svg>
);

interface NavItem {
  label: string;
  shortLabel: string;
  href: string;
  num: string;
  colorClass: string;
  colorHex: string;
  desc: string;
}

interface HeaderProps {
  isV2?: boolean;
  activeSectionV2?: string;
  onSectionChangeV2?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ isV2 = false, activeSectionV2 = "home", onSectionChangeV2 }) => {
  const [isScrolled, setIsScrolled] = useState(isV2);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSectionState, setActiveSectionState] = useState("home");
  const activeSection = isV2 ? activeSectionV2 : activeSectionState;

  const navItems: NavItem[] = [
    { label: "Home", shortLabel: "Home", href: "#home", num: "01", colorClass: "text-brand-orange", colorHex: "#FB6107", desc: "Executive Statement" },
    { label: "About", shortLabel: "About", href: "#about", num: "02", colorClass: "text-brand-yellow", colorHex: "#F3DE2C", desc: "Engineering Philosophy" },
    { label: "Skills", shortLabel: "Skills", href: "#skills", num: "03", colorClass: "text-brand-green", colorHex: "#70E000", desc: "Technology Matrix" },
    { label: "Experience", shortLabel: "Experience", href: "#experience", num: "04", colorClass: "text-brand-orange", colorHex: "#FB6107", desc: "Professional Career" },
    { label: "Projects", shortLabel: "Projects", href: "#projects", num: "05", colorClass: "text-brand-yellow", colorHex: "#F3DE2C", desc: "Architectural Work" },
    { label: "Certifications", shortLabel: "Certs", href: "#certifications", num: "06", colorClass: "text-brand-orange", colorHex: "#FB6107", desc: "Credentials & Badges" },
    { label: "Contact", shortLabel: "Contact", href: "#contact", num: "07", colorClass: "text-brand-yellow", colorHex: "#F3DE2C", desc: "Meeting Scheduler" }
  ];

  useEffect(() => {
    if (isV2) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = navItems.map(item => item.href.slice(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            currentSection = section;
          }
        }
      }
      setActiveSectionState(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isV2]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetId = href.slice(1);
    if (isV2 && onSectionChangeV2) {
      onSectionChangeV2(targetId);
    } else {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };


  return (
    <>
      {/* Floating Capsule Header Dock */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 py-4 flex justify-center">
        <div
          className={`glass-panel bg-brand-black/75 rounded-full flex items-center justify-between transition-all duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.85)] border-brand-gray-800/80 px-4 py-2 gap-3 sm:gap-4 max-w-full ${
            isScrolled ? "scale-95 border-brand-gray-800" : "scale-100"
          }`}
        >
          {/* Left: Branding Logo & Text */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer flex-shrink-0 pl-0.5"
          >
            {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green flex items-center justify-center font-display font-bold text-black text-lg transition-transform duration-300 group-hover:rotate-12">
              S
            </div> */}
            <img src={LogoSuneel} alt="logo" className="w-20 h-20" />
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-white text-sm tracking-wide leading-none group-hover:text-brand-orange transition-colors">
                Suneel Kandali
              </span>
              <span className="text-[9px] text-brand-gray-200 font-sans tracking-wider leading-none mt-1 uppercase">
                Principal Architect
              </span>
            </div>
          </a>

          {/* Vertical Separator 1 */}
          <div className="w-[1px] h-6 bg-brand-gray-850 flex-shrink-0" />

          {/* Center: Social Icons Group (Always visible across all screens) */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-brand-gray-400 hover:text-brand-orange transition-colors rounded-full hover:bg-brand-gray-900/50 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <LinkedIn className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-brand-gray-400 hover:text-brand-orange transition-colors rounded-full hover:bg-brand-gray-900/50 flex items-center justify-center"
              aria-label="GitHub"
            >
              <GitHub className="w-4 h-4" />
            </a>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(e, "#blog");
              }}
              className="p-1.5 text-brand-gray-400 hover:text-brand-orange transition-colors rounded-full hover:bg-brand-gray-900/50 flex items-center justify-center"
              aria-label="Blog"
            >
              <BlogIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Vertical Separator 2 */}
          <div className="w-[1px] h-6 bg-brand-gray-850 flex-shrink-0" />

          {/* Right: Square Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="w-9 h-9 rounded-xl bg-brand-gray-950/60 text-brand-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 group flex-shrink-0"
            aria-label="Open Site Navigation HUD"
          >
            <LayoutGrid className="w-4.5 h-4.5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </header>

      {/* Holographic Fullscreen HUD Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12 overflow-y-auto select-none"
          >
            {/* HUD Header */}
            <div className="flex justify-between items-center w-full max-w-5xl mx-auto border-b border-brand-gray-900 pb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green flex items-center justify-center font-display font-bold text-black text-sm">
                  S
                </div>
                <span className="text-[10px] text-brand-gray-200 font-mono uppercase tracking-widest font-semibold">
                  Enterprise Command HUD
                </span>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-10 h-10 rounded-full bg-brand-gray-955 border border-brand-gray-800 flex items-center justify-center text-brand-gray-400 hover:text-white hover:border-brand-orange/40 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* HUD Central Grid Menu */}
            <div className="my-auto py-10 w-full max-w-5xl mx-auto">
              <p className="text-[10px] text-brand-orange font-mono tracking-widest uppercase mb-6 text-center md:text-left">
                Select Destination Node
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <div
                      key={item.label}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group relative flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-brand-gray-900/60 border-brand-orange/40 text-brand-orange shadow-[0_4px_20px_rgba(251,97,7,0.1)]"
                          : "bg-brand-gray-950/40 border-brand-gray-900/80 text-brand-gray-300 hover:bg-brand-gray-900/20 hover:border-brand-gray-700/50 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                          isActive 
                            ? "border-brand-orange bg-brand-orange/10"
                            : "border-brand-gray-800 bg-brand-gray-950 group-hover:border-brand-gray-700"
                        }`}>
                          {item.num}
                        </span>
                        <div className="flex flex-col text-left">
                          <span className={`text-sm font-bold font-display tracking-wider uppercase transition-colors ${
                            isActive ? "text-white" : "text-brand-gray-200 group-hover:text-white"
                          }`}>
                            {item.label}
                          </span>
                          <span className="text-[10px] text-brand-gray-200 font-sans tracking-wide mt-0.5">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                        isActive 
                          ? "text-brand-orange translate-x-1" 
                          : "text-brand-gray-400 group-hover:text-white group-hover:translate-x-1"
                      }`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* HUD Footer Contacts */}
            <div className="w-full max-w-5xl mx-auto border-t border-brand-gray-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-gray-200 text-xs">
              <div className="flex gap-6">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-orange transition-colors">
                  {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-brand-orange transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                  LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                  GitHub
                </a>
                <a href="#blog" onClick={(e) => handleNavClick(e, "#blog")} className="hover:text-brand-orange transition-colors">
                  Tech Blog
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
