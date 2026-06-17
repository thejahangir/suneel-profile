import { Section, FadeIn, SectionHeading } from './Section'
import { Users, Target, GitBranch, BookOpen, Lightbulb, Award } from 'lucide-react'

const pillars = [
  {
    icon: GitBranch,
    title: 'Architecture Reviews',
    body: 'Leading cross-team architecture reviews that challenge assumptions, surface tradeoffs, and align engineering decisions with long-term system health. Not gatekeeping — enabling.',
  },
  {
    icon: Target,
    title: 'Technical Strategy',
    body: 'Translating business objectives into multi-year engineering roadmaps. Working with product, executive, and engineering leadership to set the technical direction with confidence and clarity.',
  },
  {
    icon: Users,
    title: 'Engineering Mentorship',
    body: 'Investing in the career growth of engineers at all levels — from early-career developers to senior engineers pursuing staff and principal tracks. Mentorship that creates force multipliers.',
  },
  {
    icon: Lightbulb,
    title: 'Platform Thinking',
    body: 'Designing internal platforms and APIs that give engineering teams leverage — not bottlenecks. Building the foundations that make product development faster and more reliable across the organization.',
  },
  {
    icon: BookOpen,
    title: 'Engineering Standards',
    body: 'Establishing coding standards, API design principles, observability requirements, and security baselines that elevate team quality without stifling autonomy.',
  },
  {
    icon: Award,
    title: 'Cross-Functional Leadership',
    body: 'Bridging engineering, product, security, and business stakeholders. Translating complex technical realities into clear decisions. Leading without hierarchy when the work demands it.',
  },
]

const leadershipQuotes = [
  {
    quote: "The best engineers I have worked with do not just solve the problem in front of them — they design the solution that prevents the next five problems.",
    context: 'On Engineering Excellence',
  },
  {
    quote: "Mentorship is not about transferring knowledge. It is about creating the conditions where someone can discover their own engineering instincts.",
    context: 'On Mentorship',
  },
]

export default function Leadership() {
  return (
    <Section id="leadership" label="Leadership & Mentorship">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <FadeIn>
            <SectionHeading id="leadership">Leadership<br />& Mentorship</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-serif-body text-[#111111] mt-4" style={{ fontSize: '1rem' }}>
              Technical leadership at the Principal level is about expanding the capability
              of the teams and systems around you — not just shipping code.
            </p>
          </FadeIn>

          {/* Quotes */}
          <div className="mt-10 space-y-8">
            {leadershipQuotes.map((q, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1}>
                <blockquote className="border-l-2 border-black pl-4">
                  <p className="font-serif-display italic text-black text-sm leading-relaxed mb-2">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <p className="editorial-label text-[#3A3A3A]">{q.context}</p>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div
                  className="border border-[#D9D9D9] p-5 hover:border-black transition-colors duration-200 h-full"
                  role="article"
                  aria-labelledby={`leadership-pillar-${i}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 border border-[#D9D9D9] flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#111111]" aria-hidden="true" />
                    </div>
                    <h3
                      id={`leadership-pillar-${i}`}
                      className="font-serif-display font-semibold text-black text-sm"
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="font-serif-body text-[#111111] text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
