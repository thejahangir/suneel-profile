import { Section, FadeIn, SectionHeading } from './Section'

interface Article {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  href: string
}

const articles: Article[] = [
  {
    title: 'The Architecture of Agentic AI: Building Systems That Think, Act, and Learn',
    excerpt:
      'How enterprise engineering teams should approach building multi-agent AI systems — from orchestration patterns and tool use to reliability, observability, and governance at scale.',
    category: 'Agentic AI',
    date: 'January 2025',
    readTime: '12 min read',
    href: 'https://suneelkandali.com/blog',
  },
  {
    title: 'Microservices at Enterprise Scale: What They Don\'t Tell You',
    excerpt:
      'The real challenges of microservices adoption in large organizations aren\'t technical — they\'re organizational, operational, and cultural. A candid look at the full picture after 10+ years in the field.',
    category: 'Architecture',
    date: 'October 2024',
    readTime: '10 min read',
    href: 'https://suneelkandali.com/blog',
  },
  {
    title: 'Designing for Observability: From Metrics to Meaning',
    excerpt:
      'Observability isn\'t just about collecting logs and metrics — it\'s about designing systems that communicate their health clearly. A guide to building observable cloud-native platforms.',
    category: 'Cloud Native',
    date: 'July 2024',
    readTime: '8 min read',
    href: 'https://suneelkandali.com/blog',
  },
  {
    title: 'Principal Engineering: The Role Nobody Fully Explains',
    excerpt:
      'What does a Principal Engineer actually do? After 15 years, here is my working definition — part architect, part strategist, part mentor, part communicator — and why this matters for your engineering career.',
    category: 'Engineering Leadership',
    date: 'April 2024',
    readTime: '9 min read',
    href: 'https://suneelkandali.com/blog',
  },
  {
    title: 'Kubernetes Isn\'t the Destination — It\'s the Road',
    excerpt:
      'Too many teams adopt Kubernetes as an end goal rather than an enabler. A systems-thinking perspective on how to evaluate container orchestration choices against your actual organizational maturity.',
    category: 'Cloud Native',
    date: 'January 2024',
    readTime: '7 min read',
    href: 'https://suneelkandali.com/blog',
  },
  {
    title: 'RAG in Production: Lessons From Building Enterprise Knowledge Systems',
    excerpt:
      'Retrieval-Augmented Generation moves fast from demo to disaster without careful engineering. Here\'s what we learned deploying RAG systems at Oracle scale — chunking, embedding, retrieval, and trust.',
    category: 'Generative AI',
    date: 'November 2023',
    readTime: '11 min read',
    href: 'https://suneelkandali.com/blog',
  },
]

export default function Writing() {
  return (
    <Section id="writing" label="Writing & Insights">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <FadeIn>
            <SectionHeading id="writing">Writing<br />& Insights</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-serif-body text-[#111111] mt-4 mb-6" style={{ fontSize: '1rem' }}>
              Perspectives on cloud architecture, AI engineering, and building
              durable software systems at enterprise scale.
            </p>
            <a
              href="https://suneelkandali.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans-ui text-xs font-semibold uppercase tracking-widest border-b border-black pb-0.5 text-black hover:opacity-50 transition-opacity"
              aria-label="View all articles on blog"
            >
              View All Articles
            </a>
          </FadeIn>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-[#D9D9D9]">
            {articles.map((article, i) => (
              <FadeIn key={article.title} delay={i * 0.07}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-6 group hover:opacity-100"
                  aria-label={`Read article: ${article.title}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="editorial-label text-[#3A3A3A]">{article.category}</span>
                    <span className="editorial-label text-[#D9D9D9]">·</span>
                    <span className="editorial-label text-[#3A3A3A]">{article.date}</span>
                    <span className="editorial-label text-[#D9D9D9]">·</span>
                    <span className="editorial-label text-[#3A3A3A]">{article.readTime}</span>
                  </div>
                  <h3
                    className="font-serif-display font-bold text-black leading-snug mb-2 group-hover:opacity-60 transition-opacity"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                  >
                    {article.title}
                  </h3>
                  <p className="font-serif-body text-[#3A3A3A] text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
