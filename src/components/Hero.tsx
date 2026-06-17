import { Mail, Phone, MapPin, BookOpen, ExternalLink } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './BrandIcons'
import { motion } from 'framer-motion'
import SuneelDp from "../assets/suneel-headshot.png";

const contactLinks = [
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/suneelkandali',
    href: 'https://www.linkedin.com/in/suneelkandali',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/suneelkandali',
    href: 'https://github.com/suneelkandali',
  },
  {
    icon: BookOpen,
    label: 'Blog',
    value: 'suneelkandali.com/blog',
    href: 'https://suneelkandali.com/blog',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'suneelkandali@gmail.com',
    href: 'mailto:suneelkandali@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (469) 335-8413',
    href: 'tel:+14693358413',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Austin, Texas, USA',
    href: null,
  },
]

const highlights = [
  '15+ Years Experience',
  'Principal Engineer at Oracle',
  '10+ Years in USA',
  'Cloud Native Expert',
  'Agentic AI & GenAI Architect',
  'Enterprise Scale Systems',
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-0 flex items-start"
      aria-label="Hero section"
    >
      <div className="w-full max-w-editorial mx-auto px-6 lg:px-12">
        {/* Top rule */}
        <div className="section-rule pt-12 pb-0" />

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 lg:items-start pt-0">

          {/* Left: Sticky Photo Column */}
          <div className="w-full lg:w-[38%] lg:sticky lg:top-8 pt-12 lg:pt-16 pb-8 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative"
            >
              {/* Photo frame — circle */}
              <div
                className="relative overflow-hidden rounded-full"
                style={{ width: '300px', height: '300px', maxWidth: '100%' }}
              >
                <img
                  src={SuneelDp}
                  alt="Suneel Kandali — Principal Engineer and Software Architect"
                  className="w-full h-full object-cover object-top photo-bw"
                  style={{ objectPosition: '50% 15%' }}
                  loading="eager"
                />
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-black/10 pointer-events-none" />
              </div>
              {/* Outer border ring (sits outside the circle) */}
              <div
                className="absolute rounded-full border border-[#D9D9D9]"
                style={{ width: '308px', height: '308px', top: '-4px', left: '-4px', maxWidth: 'none', pointerEvents: 'none' }}
                aria-hidden="true"
              />

              {/* Name below photo on mobile */}
              <div className="mt-6 lg:hidden">
                <p className="editorial-label mb-2">Principal Engineer</p>
                <h1 className="font-serif-display text-4xl font-bold text-black leading-tight">
                  Suneel<br />Kandali
                </h1>
              </div>
            </motion.div>

            {/* Contact block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 space-y-3"
              aria-label="Contact information"
            >
              <p className="editorial-label mb-4" style={{ color: '#111111' }}>Contact & Presence</p>
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={13} className="text-[#2A2A2A] mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-sans-ui text-[10px] uppercase tracking-widest text-[#111111] leading-none mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-sans-ui text-xs text-[#111111] hover:text-black transition-colors truncate block"
                        aria-label={`${label}: ${value}`}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-sans-ui text-xs text-[#111111]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Content Column */}
          <div className="flex-1 pt-0 lg:pt-16 pb-20 min-w-0">

            {/* Section label — desktop only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="hidden lg:flex items-center gap-4 mb-8"
            >
              <span className="editorial-label">Principal Engineer</span>
              <div className="flex-1 h-px bg-[#D9D9D9]" />
              <span className="editorial-label">CBS · Austin, TX</span>
            </motion.div>

            {/* Hero headline — desktop only */}
            <div className="hidden lg:block mb-10">
              <motion.h1
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-serif-display font-black text-black leading-none"
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', letterSpacing: '-0.035em' }}
              >
                Suneel
              </motion.h1>
              <motion.span
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-serif-display font-black text-black leading-none block"
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', letterSpacing: '-0.035em' }}
              >
                Kandali
              </motion.span>
            </div>

            {/* Roles */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 mb-8"
            >
              {['Software Architect', 'Cloud-Native Engineering Leader', 'Enterprise AI Platform Builder'].map((role, i) => (
                <p
                  key={i}
                  className="font-serif-display italic font-medium text-[#111111]"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                >
                  {role}
                </p>
              ))}
            </motion.div>

            {/* Rule */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-rule mb-8"
            />

            {/* Executive summary */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-serif-body text-[#111111] leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', maxWidth: '56ch' }}
            >
              Fifteen years of experience designing enterprise-scale distributed systems,
              cloud-native applications, AI-powered platforms, and microservices architectures
              across <strong className="text-black font-semibold">Oracle</strong>,{' '}
              <strong className="text-black font-semibold">Walmart</strong>,{' '}
              <strong className="text-black font-semibold">Hyundai Motors</strong>, and{' '}
              <strong className="text-black font-semibold">Dell EMC</strong>.
            </motion.p>

            {/* Key highlights */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2 mb-12"
              aria-label="Key highlights"
            >
              {highlights.map((h) => (
                <span key={h} className="metric-pill">{h}</span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:suneelkandali@gmail.com"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-sans-ui text-xs font-semibold tracking-widest uppercase hover:bg-[#222] transition-colors duration-200"
                aria-label="Send email to Suneel Kandali"
              >
                <Mail size={13} />
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/suneelkandali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#D9D9D9] text-[#111111] px-6 py-3 font-sans-ui text-xs font-semibold tracking-widest uppercase hover:border-black hover:text-black transition-all duration-200"
                aria-label="View LinkedIn profile"
              >
                <ExternalLink size={13} />
                LinkedIn
              </a>
            </motion.div>

            {/* Large rule at bottom */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-rule mt-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
