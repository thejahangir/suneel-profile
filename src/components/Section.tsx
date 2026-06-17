import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionProps {
  id: string
  label: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, label, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  // once: false — re-animates every time element enters the viewport
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`max-w-editorial mx-auto px-6 lg:px-12 py-20 lg:py-28 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10 section-rule pt-0">
          <span className="editorial-label pt-0 -mt-px whitespace-nowrap">{label}</span>
          <div className="flex-1" />
        </div>

        {children}
      </motion.div>
    </section>
  )
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  // once: false — fades in every time it scrolls into view
  // margin: '-4% 0px' — triggers slightly before fully in view for smooth feel
  const inView = useInView(ref, { once: false, margin: '-4% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={`${id}-heading`}
      className="font-serif-display font-bold text-black mb-8"
      style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}
    >
      {children}
    </h2>
  )
}
