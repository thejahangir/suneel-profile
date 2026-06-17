import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Section, FadeIn, SectionHeading } from './Section'

interface Achievement {
  text: string
  metric?: string
}

interface Role {
  company: string
  companyShort: string
  role: string
  period: string
  location: string
  summary: string
  achievements: Achievement[]
  technologies: string[]
  current?: boolean
}

const roles: Role[] = [
  {
    company: 'Oracle Corporation',
    companyShort: 'Oracle',
    role: 'Principal Engineer / Software Architect',
    period: 'Apr 2023 – Present',
    location: 'Austin, TX',
    current: true,
    summary:
      'Leading the architecture and engineering of cloud-native, AI-powered IT operations platforms that manage enterprise infrastructure at massive scale.',
    achievements: [
      { text: 'Architected AI-driven IT operations system managing', metric: '170K+ endpoints' },
      { text: 'Built Agentic AI service desk reducing tickets by', metric: '60%' },
      { text: 'Delivered Zoom Rooms Autopilot cutting manual operations by', metric: '80%' },
      { text: 'Designed multi-tenant SaaS microservices platform on Oracle Cloud Infrastructure' },
      { text: 'Integrated GenAI capabilities with OCI Generative AI and LangChain agents' },
      { text: 'Established enterprise architecture standards and cross-team technical governance' },
    ],
    technologies: ['OCI', 'Kubernetes', 'Spring Boot', 'Node.js', 'Python', 'LangChain', 'Oracle DB', 'Kafka', 'Redis', 'GraphQL'],
  },
  {
    company: 'Walmart Inc.',
    companyShort: 'Walmart',
    role: 'Staff Software Engineer / Senior Architect',
    period: 'Jan 2019 – Apr 2023',
    location: 'Bentonville, AR → Remote',
    summary:
      'Designed and delivered enterprise-scale digital learning and workforce enablement platforms serving millions of Walmart associates across the US.',
    achievements: [
      { text: 'Built Walmart Academy LMS serving', metric: '1.6M+ associates' },
      { text: 'Scaled platform to support', metric: '5,000+ stores' },
      { text: 'Reduced infrastructure costs by', metric: '$2M/year' },
      { text: 'Architected event-driven microservices on Azure with Kafka and Cosmos DB' },
      { text: 'Led a team of 20+ engineers across distributed squads' },
      { text: 'Implemented real-time analytics pipeline processing 50M+ events daily' },
    ],
    technologies: ['Azure', 'Kafka', 'Cosmos DB', 'Spring Boot', 'React', 'GraphQL', 'Kubernetes', 'Terraform'],
  },
  {
    company: 'Hyundai Motors America',
    companyShort: 'Hyundai',
    role: 'Lead Software Architect',
    period: 'Jun 2016 – Jan 2019',
    location: 'Fountain Valley, CA',
    summary:
      'Spearheaded digital transformation initiatives, architecting enterprise integration platforms and dealer management systems across North America.',
    achievements: [
      { text: 'Designed enterprise API gateway handling', metric: '200M+ calls/month' },
      { text: 'Reduced system integration costs by', metric: '$4M over 3 years' },
      { text: 'Led migration of legacy monolithic dealer systems to microservices' },
      { text: 'Built real-time vehicle inventory and CRM integration platform' },
      { text: 'Established DevOps culture with CI/CD pipeline across 15+ teams' },
    ],
    technologies: ['AWS', 'Spring Cloud', 'Mulesoft', 'Oracle DB', 'Angular', 'Docker', 'Jenkins', 'Elasticsearch'],
  },
  {
    company: 'Dell EMC',
    companyShort: 'Dell EMC',
    role: 'Senior Software Engineer',
    period: 'Aug 2013 – Jun 2016',
    location: 'Round Rock, TX',
    summary:
      'Engineered enterprise middleware, API management platforms, and cloud storage integration solutions for Fortune 500 clients globally.',
    achievements: [
      { text: 'Built enterprise API management platform used by', metric: '200+ clients' },
      { text: 'Delivered cloud storage integration reducing data migration time by', metric: '70%' },
      { text: 'Architected RESTful microservices layer on top of legacy EMC storage APIs' },
      { text: 'Contributed to open-source Java SDK with 3,000+ GitHub stars' },
    ],
    technologies: ['Java EE', 'Spring Framework', 'REST APIs', 'Oracle DB', 'VMware', 'Jenkins', 'Swagger'],
  },
]

function TimelineEntry({ role, index }: { role: Role; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: '-8% 0px' })

  return (
    <div
      ref={ref}
      className="relative pl-6 pb-16 last:pb-0"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.8s ${index * 0.06}s cubic-bezier(0.16,1,0.3,1), transform 0.8s ${index * 0.06}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* Timeline dot & line */}
      <div className="absolute left-0 top-1.5">
        <div className={`w-2 h-2 rounded-full ${role.current ? 'bg-black' : 'bg-[#D9D9D9] border border-[#111111]'}`} />
      </div>
      {index < roles.length - 1 && (
        <div className="absolute left-[3px] top-5 bottom-0 w-px bg-[#E8E8E8]" />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        {/* Left meta */}
        <div className="lg:col-span-3">
          <p className="editorial-label text-[#3A3A3A] mb-1">{role.period}</p>
          <p className="font-serif-display font-bold text-black text-xl leading-tight mb-1">
            {role.companyShort}
          </p>
          <p className="font-sans-ui text-xs text-[#3A3A3A]">{role.location}</p>

          {role.current && (
            <span className="inline-flex items-center gap-1 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span className="font-sans-ui text-[10px] uppercase tracking-widest text-black font-semibold">
                Current
              </span>
            </span>
          )}
        </div>

        {/* Right content */}
        <div className="lg:col-span-9">
          <p className="font-serif-display font-semibold text-black mb-1" style={{ fontSize: '1.15rem' }}>
            {role.role}
          </p>
          <p className="font-serif-body text-[#111111] text-sm mb-5 leading-relaxed">
            {role.summary}
          </p>

          {/* Achievements */}
          <ul className="space-y-2 mb-5" aria-label="Key achievements">
            {role.achievements.map((a, i) => (
              <li key={i} className="flex items-baseline gap-2">
                <span className="text-[#D9D9D9] text-xs mt-0.5 flex-shrink-0">—</span>
                <span className="font-serif-body text-[#111111] text-sm leading-snug">
                  {a.text}{' '}
                  {a.metric && (
                    <strong className="font-semibold text-black">{a.metric}</strong>
                  )}
                </span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {role.technologies.map((tech) => (
              <span
                key={tech}
                className="font-sans-ui text-[10px] uppercase tracking-wider text-[#3A3A3A] border border-[#E8E8E8] px-2.5 py-0.5 bg-[#FAFAFA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" label="Professional Experience">
      <div className="lg:col-span-12">
        <FadeIn>
          <SectionHeading id="experience">Professional<br />Experience</SectionHeading>
        </FadeIn>

        {/* Impact bar */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 mb-12 border-y border-[#D9D9D9]">
            {[
              { value: '15+', label: 'Years of Engineering' },
              { value: '170K+', label: 'Endpoints Managed' },
              { value: '$6M+', label: 'Cost Savings Delivered' },
              { value: '1.6M+', label: 'Users Served' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="font-serif-display font-bold text-black leading-none mb-1"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
                >
                  {value}
                </p>
                <p className="editorial-label text-[#3A3A3A]">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="mt-4">
          {roles.map((role, i) => (
            <TimelineEntry key={role.company} role={role} index={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}
