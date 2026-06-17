import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Section, FadeIn, SectionHeading } from './Section'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  subtitle: string
  year: string
  employer: string
  challenge: string
  approach: string
  impact: string
  metrics: string[]
  stack: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Employee PulseGuard',
    subtitle: 'Agentic AI IT Operations Platform',
    year: '2024',
    employer: 'Oracle',
    challenge:
      'Enterprise IT teams were overwhelmed managing 170,000+ endpoints across distributed global infrastructure, with reactive incident management and limited observability.',
    approach:
      'Designed a multi-agent AI system using LangChain and OCI Generative AI, capable of autonomous endpoint monitoring, anomaly detection, and self-healing workflows. Integrated with ITSM tools via GraphQL APIs.',
    impact:
      'Reduced manual IT operations by 60%, enabling proactive remediation before user impact. The platform now manages over 170,000 endpoints across Oracle\'s global enterprise infrastructure.',
    metrics: ['170K+ endpoints', '60% ticket reduction', 'Sub-60s anomaly detection'],
    stack: ['OCI GenAI', 'LangChain', 'Python', 'Kubernetes', 'Spring Boot', 'Oracle DB', 'Kafka', 'GraphQL'],
  },
  {
    title: 'Zoom Rooms Autopilot',
    subtitle: 'Intelligent Conference Room Management',
    year: '2023',
    employer: 'Oracle',
    challenge:
      'Oracle\'s global conference room infrastructure — thousands of Zoom Rooms — required constant manual intervention for room health, device maintenance, and issue resolution.',
    approach:
      'Architected an autonomous operations platform using event-driven microservices and AI-driven decision engines. Built real-time telemetry pipelines and automated remediation workflows integrated with Zoom APIs.',
    impact:
      'Achieved 80% reduction in manual operations, ensuring 99.9% room availability across global offices. Eliminated overnight on-call escalations for room infrastructure.',
    metrics: ['80% ops reduction', '99.9% availability', 'Global scale deployment'],
    stack: ['Node.js', 'Zoom API', 'Kafka', 'Redis', 'OCI', 'Docker', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'IT AI Service Desk',
    subtitle: 'GenAI-Powered Enterprise Support',
    year: '2024',
    employer: 'Oracle',
    challenge:
      'Enterprise IT support was bottlenecked by high ticket volume, repetitive L1 issues, and slow resolution times, impacting workforce productivity.',
    approach:
      'Built an Agentic AI service desk powered by Oracle\'s LLM stack, with intent classification, knowledge base retrieval (RAG), and autonomous ticket resolution for common IT issues.',
    impact:
      'Resolved 60% of tickets autonomously without human intervention. Reduced average resolution time from hours to minutes. Improved IT satisfaction scores significantly.',
    metrics: ['60% autonomous resolution', '10x faster MTTR', '$1.2M annual savings'],
    stack: ['OCI GenAI', 'LangChain', 'Python', 'RAG', 'ServiceNow API', 'Oracle DB', 'React', 'Node.js'],
  },
  {
    title: 'Enterprise Meeting Scheduler',
    subtitle: 'Intelligent Calendar Optimization Platform',
    year: '2023',
    employer: 'Oracle',
    challenge:
      'Scheduling enterprise meetings across global time zones, room systems, and calendar platforms created massive coordination overhead for executive assistants and distributed teams.',
    approach:
      'Designed an intelligent scheduling microservice with AI-driven time slot optimization, room availability integration, and multi-platform calendar sync (Google, Outlook, Zoom). Built as a composable API platform.',
    impact:
      'Reduced scheduling time by 75%, eliminated double-booking incidents, and improved room utilization by 40%. Deployed to 50,000+ Oracle employees globally.',
    metrics: ['75% scheduling time saved', '50K+ users', '40% better room utilization'],
    stack: ['Spring Boot', 'Google Calendar API', 'MS Graph API', 'Zoom API', 'Kubernetes', 'PostgreSQL', 'React'],
  },
  {
    title: 'Walmart Academy LMS',
    subtitle: 'Enterprise Learning Platform for 1.6M Associates',
    year: '2020–2022',
    employer: 'Walmart',
    challenge:
      'Walmart needed to train and upskill 1.6 million associates across 5,000+ stores simultaneously, with a legacy LMS that couldn\'t scale or deliver a consistent learning experience.',
    approach:
      'Architected a cloud-native learning management system on Azure, using event-driven microservices, real-time progress tracking, and personalized learning paths powered by machine learning models.',
    impact:
      'Successfully scaled to 1.6M concurrent users across 5,000+ stores, reducing infrastructure costs by $2M annually. Became the foundation for Walmart\'s global workforce development strategy.',
    metrics: ['1.6M+ associates', '5,000+ stores', '$2M cost savings/year'],
    stack: ['Azure', 'Spring Boot', 'Kafka', 'Cosmos DB', 'React', 'GraphQL', 'Terraform', 'Kubernetes'],
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, margin: '-6% 0px' })

  return (
    <article
      ref={ref}
      className="border border-[#D9D9D9] bg-white hover:border-[#999] transition-colors duration-300 group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.8s ${index * 0.06}s cubic-bezier(0.16,1,0.3,1), transform 0.8s ${index * 0.06}s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease`,
      }}
      aria-labelledby={`project-${index}-title`}
    >
      {/* Card header */}
      <div className="p-6 pb-0 border-b border-[#F0F0F0]">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="editorial-label">{project.employer}</span>
              <span className="editorial-label text-[#D9D9D9]">·</span>
              <span className="editorial-label">{project.year}</span>
            </div>
            <h3
              id={`project-${index}-title`}
              className="font-serif-display font-bold text-black leading-tight"
              style={{ fontSize: 'clamp(1.3rem, 2vw, 1.65rem)' }}
            >
              {project.title}
            </h3>
            <p className="font-sans-ui text-xs text-[#3A3A3A] mt-1 tracking-wide">
              {project.subtitle}
            </p>
          </div>
          <div className="flex-shrink-0 w-7 h-7 border border-[#D9D9D9] flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-200">
            <ArrowUpRight size={13} className="text-[#3A3A3A] group-hover:text-white transition-colors duration-200" />
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-1.5 pb-5">
          {project.metrics.map((m) => (
            <span key={m} className="metric-pill">{m}</span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className="editorial-label mb-2">Challenge</p>
          <p className="font-serif-body text-[#111111] text-sm leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <p className="editorial-label mb-2">Approach</p>
          <p className="font-serif-body text-[#111111] text-sm leading-relaxed">{project.approach}</p>
        </div>
        <div>
          <p className="editorial-label mb-2">Impact</p>
          <p className="font-serif-body text-[#111111] text-sm leading-relaxed">{project.impact}</p>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-6 pb-5 flex flex-wrap gap-1.5 border-t border-[#F0F0F0] pt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="font-sans-ui text-[10px] uppercase tracking-wider text-[#3A3A3A] border border-[#ECECEC] px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <Section id="work" label="Selected Projects">
      <FadeIn>
        <SectionHeading id="work">Selected<br />Projects</SectionHeading>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="font-serif-body text-[#111111] mb-12 max-w-2xl" style={{ fontSize: '1.05rem' }}>
          A selection of high-impact engineering initiatives spanning AI automation,
          enterprise platforms, and cloud-native architecture across Oracle and Walmart.
        </p>
      </FadeIn>

      <div className="space-y-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
