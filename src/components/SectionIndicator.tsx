import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Professional Experience' },
  { id: 'work',       label: 'Selected Projects' },
  { id: 'expertise',  label: 'Core Expertise' },
  { id: 'leadership', label: 'Leadership & Mentorship' },
  { id: 'writing',    label: 'Writing & Insights' },
  { id: 'contact',    label: 'Contact' },
]

export default function SectionIndicator() {
  const [activeLabel, setActiveLabel] = useState<string | null>(null)

  const updateActive = useCallback(() => {
    // Trigger line: 25% down from the top of the viewport
    const triggerY = window.innerHeight * 0.25

    let current: string | null = null

    for (const { id, label } of sections) {
      const el = document.getElementById(id)
      if (!el) continue

      const { top, bottom } = el.getBoundingClientRect()

      // Section "owns" the indicator when:
      // its top has passed the trigger line AND its bottom hasn't yet
      if (top <= triggerY && bottom > triggerY) {
        current = label
        break
      }
    }

    setActiveLabel(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive, { passive: true })
    // Run once on mount to catch any initial scroll position
    updateActive()
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [updateActive])

  return (
    <div
      className="fixed top-7 left-8 z-50"
      aria-live="polite"
      aria-atomic="true"
      aria-label="Current section"
    >
      <AnimatePresence mode="wait">
        {activeLabel && (
          <motion.div
            key={activeLabel}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.22 }}
              className="w-4 h-px bg-black origin-left"
              aria-hidden="true"
            />
            <span className="font-sans-ui text-[12px] uppercase tracking-[0.15em] text-black font-bold">
              {activeLabel}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
