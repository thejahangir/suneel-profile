import { BookOpen, Mail } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from './BrandIcons'

const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suneelkandali', icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/suneelkandali', icon: GitHubIcon },
  { label: 'Blog', href: 'https://suneelkandali.com/blog', icon: BookOpen },
  { label: 'Email', href: 'mailto:suneelkandali@gmail.com', icon: Mail },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-[#D9D9D9] bg-[#F8F8F8]"
      role="contentinfo"
    >
      <div className="max-w-editorial mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Identity */}
          <div>
            <p className="font-serif-display font-bold text-black text-lg tracking-tight">
              Suneel Kandali
            </p>
            <p className="editorial-label text-[#3A3A3A] mt-1">
              Principal Engineer &middot; Software Architect
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer social links">
            <ul className="flex items-center gap-5" role="list">
              {footerLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[#3A3A3A] hover:text-black transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="font-sans-ui text-xs text-[#3A3A3A]">
            &copy; {currentYear} Suneel Kandali
          </p>
        </div>
      </div>
    </footer>
  )
}
