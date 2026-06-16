import React from "react";
import { Layers, Presentation } from "lucide-react";

interface VersionSwitcherProps {
  currentVersion: "v1" | "v2";
  onSwitch: (version: "v1" | "v2") => void;
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ currentVersion, onSwitch }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <div className="glass-panel px-4 py-2.5 rounded-full border border-brand-gray-800 bg-brand-black/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3">
        <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gray-400 border-r border-brand-gray-800 pr-3">
          Layout
        </span>
        
        <button
          onClick={() => onSwitch("v1")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            currentVersion === "v1"
              ? "bg-gradient-to-r from-brand-orange to-brand-yellow text-black shadow-md scale-105 font-bold"
              : "text-brand-gray-300 hover:text-white"
          }`}
          aria-label="Switch to Scroll Mode (V1)"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Scroll</span>
        </button>

        <button
          onClick={() => onSwitch("v2")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            currentVersion === "v2"
              ? "bg-gradient-to-r from-brand-yellow to-brand-green text-black shadow-md scale-105 font-bold"
              : "text-brand-gray-300 hover:text-white"
          }`}
          aria-label="Switch to Slide Mode (V2)"
        >
          <Presentation className="w-3.5 h-3.5" />
          <span>Slide</span>
        </button>
      </div>
    </div>
  );
};

export default VersionSwitcher;
