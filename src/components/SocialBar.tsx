import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './BrandIcons'

const links = [
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suneelkandali',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/suneelkandali',
  },
  {
    icon: BookOpen,
    label: 'Blog',
    href: 'https://suneelkandali.com/blog',
  },
]

export default function SocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 right-8 z-50 flex items-center"
      aria-label="Social links"
      role="navigation"
    >
      {/* Bordered group container */}
      <div className="flex items-stretch divide-x divide-[#D9D9D9] border border-[#D9D9D9] bg-white/90 backdrop-blur-sm">
        {links.map(({ icon: Icon, label, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
            className="group flex items-center gap-2 px-3.5 py-2 text-[#3A3A3A] hover:bg-black hover:text-white transition-all duration-200"
          >
            <Icon
              size={12}
              className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="font-sans-ui text-[10px] font-semibold uppercase tracking-[0.14em] leading-none whitespace-nowrap">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
