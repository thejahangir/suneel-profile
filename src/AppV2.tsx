import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

const sectionsList = ["home", "about", "skills", "experience", "projects", "certifications", "contact"];
const sectionAxes: Record<string, "x" | "y"> = {
  home: "x",
  about: "x",
  skills: "y",
  experience: "x",
  projects: "y",
  certifications: "x",
  contact: "y"
};

export const AppV2: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [axis, setAxis] = useState<"x" | "y">("x");

  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  const isLockedRef = useRef(false);
  const touchStartY = useRef(0);

  // Ref attached directly to the currently-visible scroll container
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Wheel delta accumulator – used to require intentional over-scroll to
  // advance to the next/previous section when the current one is scrollable.
  const wheelAccum = useRef(0);
  const accumResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const WHEEL_THRESHOLD = 200; // accumulated px needed when at boundary

  const handleSectionChange = useCallback((targetId: string) => {
    const currentIndex = sectionsList.indexOf(activeSectionRef.current);
    const targetIndex = sectionsList.indexOf(targetId);

    if (targetIndex === currentIndex || targetIndex === -1) return;
    if (isLockedRef.current) return;

    const dir = targetIndex > currentIndex ? "forward" : "backward";
    const targetAxis = sectionAxes[targetId] || "x";

    isLockedRef.current = true;
    wheelAccum.current = 0;

    setDirection(dir);
    setAxis(targetAxis);
    setActiveSection(targetId);

    // Unlock after animation completes
    setTimeout(() => {
      isLockedRef.current = false;
    }, 900);
  }, []);

  // ------------------------------------------------------------------
  // Core scroll-advance logic
  // Returns true if a section change was triggered
  // ------------------------------------------------------------------
  const tryAdvance = useCallback((deltaY: number): boolean => {
    if (isLockedRef.current) return false;

    const container = containerRef.current;
    const currentIndex = sectionsList.indexOf(activeSectionRef.current);

    if (deltaY > 0) {
      // Scrolling down → try to go to next section
      if (currentIndex >= sectionsList.length - 1) return false;

      const isAtBottom = container
        ? Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight - 2
        : true;

      if (!isAtBottom) {
        // Not at bottom yet – let natural scrolling happen
        wheelAccum.current = 0;
        return false;
      }

      // At bottom – accumulate intent delta
      wheelAccum.current += Math.abs(deltaY);
      if (wheelAccum.current >= WHEEL_THRESHOLD) {
        handleSectionChange(sectionsList[currentIndex + 1]);
        return true;
      }
    } else if (deltaY < 0) {
      // Scrolling up → try to go to previous section
      if (currentIndex <= 0) return false;

      const isAtTop = container ? container.scrollTop <= 2 : true;

      if (!isAtTop) {
        // Not at top yet – let natural scrolling happen
        wheelAccum.current = 0;
        return false;
      }

      // At top – accumulate intent delta
      wheelAccum.current += Math.abs(deltaY);
      if (wheelAccum.current >= WHEEL_THRESHOLD) {
        handleSectionChange(sectionsList[currentIndex - 1]);
        return true;
      }
    }

    return false;
  }, [handleSectionChange]);

  // Reset accumulator after a pause in scrolling
  const scheduleAccumReset = useCallback(() => {
    if (accumResetTimer.current) clearTimeout(accumResetTimer.current);
    accumResetTimer.current = setTimeout(() => {
      wheelAccum.current = 0;
    }, 300);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Filter very small trackpad drifts
      if (Math.abs(e.deltaY) < 5) return;

      scheduleAccumReset();
      tryAdvance(e.deltaY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const swipeDelta = touchStartY.current - touchEndY; // positive = swipe up = scroll down
      if (Math.abs(swipeDelta) < 30) return;
      wheelAccum.current = WHEEL_THRESHOLD; // touch swipe always counts as full intent
      tryAdvance(swipeDelta);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current;
      const currentIndex = sectionsList.indexOf(activeSectionRef.current);

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentIndex < sectionsList.length - 1) {
          const isAtBottom = container
            ? Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight - 2
            : true;
          if (!isAtBottom) return;
          e.preventDefault();
          handleSectionChange(sectionsList[currentIndex + 1]);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentIndex > 0) {
          const isAtTop = container ? container.scrollTop <= 2 : true;
          if (!isAtTop) return;
          e.preventDefault();
          handleSectionChange(sectionsList[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      if (accumResetTimer.current) clearTimeout(accumResetTimer.current);
    };
  }, [tryAdvance, handleSectionChange, scheduleAccumReset]);

  // Reset scroll position and accumulator whenever section changes
  useEffect(() => {
    wheelAccum.current = 0;
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return (
          <div className="flex flex-col justify-between min-h-full">
            <Contact />
            <Footer isV2={true} onSectionChangeV2={handleSectionChange} />
          </div>
        );
      default:
        return <Hero />;
    }
  };

  const animationVariants = {
    enter: () => {
      if (axis === "x") {
        return { x: direction === "forward" ? "100%" : "-100%", y: 0, opacity: 0, scale: 0.98 };
      } else {
        return { x: 0, y: direction === "forward" ? "100%" : "-100%", opacity: 0, scale: 0.98 };
      }
    },
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 120, damping: 18 },
        y: { type: "spring" as const, stiffness: 120, damping: 18 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: () => {
      if (axis === "x") {
        return { x: direction === "forward" ? "-100%" : "100%", y: 0, opacity: 0, scale: 0.98, transition: { duration: 0.45 } };
      } else {
        return { x: 0, y: direction === "forward" ? "-100%" : "100%", opacity: 0, scale: 0.98, transition: { duration: 0.45 } };
      }
    }
  };

  return (
    <div className="relative bg-black w-screen h-screen overflow-hidden text-white select-none">
      
      {/* Canvas particle background layer */}
      <ParticleBackground />

      {/* Main floating Navigation Header */}
      <Header 
        isV2={true} 
        activeSectionV2={activeSection} 
        onSectionChangeV2={handleSectionChange} 
      />

      {/* Viewport content deck */}
      <div className="w-full h-full relative z-20 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeSection}
            custom={{ direction, axis }}
            variants={animationVariants}
            initial="enter"
            animate="center"
            exit="exit"
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-y-auto pt-20 scroll-smooth"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.15) transparent" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll progress indicator dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {sectionsList.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionChange(section)}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 border border-white/30 ${
              activeSection === section
                ? "bg-white scale-150 shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]"
                : "bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default AppV2;
