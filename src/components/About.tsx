import { Section, FadeIn, SectionHeading } from './Section'

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Heading column */}
        <div className="lg:col-span-4">
          <FadeIn>
            <SectionHeading id="about">About</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="editorial-label mt-4 text-[#3A3A3A]">
              Engineering Leader<br />
              Architect · Mentor · Builder
            </p>
          </FadeIn>
        </div>

        {/* Story column */}
        <div className="lg:col-span-8 space-y-6">
          <FadeIn delay={0.1}>
            <p
              className="font-serif-display italic text-black leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.6rem)' }}
            >
              "I build systems that outlast trends — distributed, resilient, and designed
              to scale at the pace of business."
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="section-rule" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-serif-body text-[#111111] leading-relaxed" style={{ fontSize: '1.05rem' }}>
              Over fifteen years, I have architected systems that manage millions of users, power
              enterprise operations across thousands of stores, and reduce cost at the scale of
              millions of dollars annually. My engineering philosophy is grounded in simplicity,
              composability, and long-term maintainability — the antidote to complexity for its own sake.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="font-serif-body text-[#111111] leading-relaxed" style={{ fontSize: '1.05rem' }}>
              At <strong className="text-black font-semibold">Oracle</strong>, I lead the architecture
              of cloud-native platforms that integrate Agentic AI and Generative AI into enterprise workflows,
              supporting 170,000+ endpoints and critical SaaS infrastructure. My work spans from
              low-level system design to executive-facing technical strategy — bridging the gap between
              what engineering can build and what the business needs to scale.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-serif-body text-[#111111] leading-relaxed" style={{ fontSize: '1.05rem' }}>
              Before Oracle, I spent years at <strong className="text-black font-semibold">Walmart</strong>{' '}
              designing systems that served millions of associates across 5,000+ retail locations.
              At <strong className="text-black font-semibold">Hyundai Motors America</strong>, I built
              the technical foundation for a company-wide digital transformation. At{' '}
              <strong className="text-black font-semibold">Dell EMC</strong>, I engineered enterprise
              middleware and API platforms trusted by Fortune 500 clients globally.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="font-serif-body text-[#111111] leading-relaxed" style={{ fontSize: '1.05rem' }}>
              Leadership, for me, is about multiplying capability across teams — not individual heroics.
              I mentor engineers, drive architecture reviews, establish engineering standards, and ensure
              that technical decisions align with business outcomes. I believe the best software is built
              by teams that understand <em>why</em> they are building, not just <em>what</em>.
            </p>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
