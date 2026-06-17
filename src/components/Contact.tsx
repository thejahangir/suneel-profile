import { Mail, BookOpen, ArrowUpRight } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './BrandIcons'
import { Section, FadeIn } from './Section'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'suneelkandali@gmail.com',
    href: 'mailto:suneelkandali@gmail.com',
  },
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
]

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="border-t border-[#000] pt-16 pb-8">
        <FadeIn>
          <h2
            className="font-serif-display font-black text-black leading-none mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
          >
            Let&rsquo;s Build<br />
            <span className="italic font-light">Scalable Systems</span><br />
            That Matter.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-serif-body text-[#111111] max-w-2xl mb-12" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            I&rsquo;m open to advisory engagements, architecture consulting, speaking opportunities,
            and conversations about complex distributed systems and AI platform engineering.
            Based in Austin, Texas. Available for remote collaboration globally.
          </p>
        </FadeIn>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactMethods.map(({ icon: Icon, label, value, href }, i) => (
            <FadeIn key={label} delay={i * 0.07}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block border border-[#D9D9D9] p-5 hover:border-black transition-colors duration-200"
                aria-label={`${label}: ${value}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon size={16} className="text-[#3A3A3A] group-hover:text-black transition-colors" />
                  <ArrowUpRight size={13} className="text-[#D9D9D9] group-hover:text-black transition-colors" />
                </div>
                <p className="editorial-label text-[#3A3A3A] mb-1">{label}</p>
                <p className="font-sans-ui text-xs text-black font-medium truncate">{value}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Primary CTA */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="mailto:suneelkandali@gmail.com"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-sans-ui text-xs font-semibold uppercase tracking-widest hover:bg-[#222] transition-colors duration-200"
              aria-label="Send email to Suneel Kandali"
            >
              <Mail size={14} />
              Send a Message
            </a>
            <a
              href="https://www.linkedin.com/in/suneelkandali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D9D9D9] text-[#111111] px-8 py-4 font-sans-ui text-xs font-semibold uppercase tracking-widest hover:border-black hover:text-black transition-all duration-200"
              aria-label="Connect on LinkedIn"
            >
              <LinkedInIcon size={14} className="text-current" />
              Connect on LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
