import { Section, FadeIn, SectionHeading } from './Section'

interface ExpertiseCategory {
  title: string
  items: string[]
}

const categories: ExpertiseCategory[] = [
  {
    title: 'Architecture & Design',
    items: [
      'Software Architecture',
      'Distributed Systems Design',
      'Microservices Architecture',
      'Domain-Driven Design',
      'Event-Driven Architecture',
      'API Design & GraphQL',
      'System Design at Scale',
      'Enterprise Integration Patterns',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      'Oracle Cloud Infrastructure (OCI)',
      'Amazon Web Services (AWS)',
      'Microsoft Azure',
      'Kubernetes & Container Orchestration',
      'Docker & Containerization',
      'Terraform & Infrastructure as Code',
      'Cloud-Native Engineering',
      'Multi-Cloud Strategy',
    ],
  },
  {
    title: 'AI & Emerging Technology',
    items: [
      'Agentic AI Architecture',
      'Generative AI & LLMs',
      'LangChain & AI Orchestration',
      'Retrieval-Augmented Generation (RAG)',
      'AI-Powered Automation',
      'Prompt Engineering',
      'ML Pipeline Design',
      'AI Platform Engineering',
    ],
  },
  {
    title: 'Engineering & Platforms',
    items: [
      'Spring Boot & Spring Cloud',
      'Node.js & TypeScript',
      'Python',
      'React & Angular',
      'Apache Kafka',
      'Redis & Caching Strategy',
      'PostgreSQL & Oracle DB',
      'Elasticsearch',
    ],
  },
  {
    title: 'Leadership & Strategy',
    items: [
      'Technical Architecture Reviews',
      'Engineering Mentorship',
      'Cross-Functional Leadership',
      'Platform Thinking',
      'Engineering Standards',
      'Technical Roadmapping',
      'Agile & DevOps Culture',
      'Stakeholder Communication',
    ],
  },
]

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure Architect Associate',
    issuer: 'Oracle',
    year: '2024',
  },
  {
    name: 'Oracle Generative AI Professional',
    issuer: 'Oracle',
    year: '2024',
  },
  {
    name: 'Oracle Observability & Management Professional',
    issuer: 'Oracle',
    year: '2023',
  },
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2022',
  },
]

export default function Expertise() {
  return (
    <Section id="expertise" label="Core Expertise">
      <FadeIn>
        <SectionHeading id="expertise">Core<br />Expertise</SectionHeading>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="font-serif-body text-[#111111] mb-12 max-w-2xl" style={{ fontSize: '1.05rem' }}>
          A decade and a half of deep technical mastery, distilled into categories that reflect
          how I think about systems, platforms, and engineering leadership.
        </p>
      </FadeIn>

      {/* Expertise grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#D9D9D9]">
        {categories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 0.07}>
            <div
              className="border-b border-r border-[#D9D9D9] p-6 hover:bg-[#F8F8F8] transition-colors duration-200"
              aria-labelledby={`expertise-${i}`}
            >
              <p
                id={`expertise-${i}`}
                className="font-serif-display font-bold text-black mb-4 text-base"
              >
                {cat.title}
              </p>
              <ul className="space-y-1.5" role="list">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D9D9D9] flex-shrink-0" aria-hidden="true" />
                    <span className="font-serif-body text-[#111111] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <FadeIn>
          <p className="editorial-label mb-6">Certifications</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08}>
              <div
                className="border border-[#D9D9D9] p-5 hover:border-black transition-colors duration-200"
                role="article"
                aria-label={`Certification: ${cert.name}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-serif-display font-semibold text-black text-sm leading-snug mb-1">
                      {cert.name}
                    </p>
                    <p className="editorial-label text-[#3A3A3A]">{cert.issuer}</p>
                  </div>
                  <span className="font-sans-ui text-xs text-[#3A3A3A] flex-shrink-0 mt-0.5">
                    {cert.year}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  )
}
