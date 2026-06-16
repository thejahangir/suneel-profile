export interface Skill {
  name: string;
  level: number; // 1 to 5
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  problem: string;
  architecture: string;
  technologies: string[];
  scale: string;
  impact: string;
}

export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  projects: {
    title: string;
    description: string;
    achievements: string[];
  }[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  color: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string; // initials
}

export const personalInfo = {
  name: "Suneel Kandali",
  title: "Principal Engineer | Software Architect | Cloud-Native Engineering Leader",
  phone: "+1 5305516749",
  email: "suneelr.kandali@gmail.com",
  linkedin: "https://www.linkedin.com/in/suneel-kandali/",
  github: "https://github.com/",
  blog: "#blog",
  resume: "/suneel-resume.pdf",
  summary: "Currently serving as Principal Engineer at Oracle USA with over a decade of engineering leadership experience in the United States and 15+ years in software architecture, enterprise engineering and cloud-native application development. Expert in designing and building distributed systems, Agentic AI platforms, GenAI applications, enterprise integrations, microservices ecosystems and cloud-native solutions at scale."
};

export const rotatingTitles = [
  "Principal Engineer",
  "Software Architect",
  "Cloud-Native Engineering Leader",
  "Agentic AI Architect",
  "Enterprise Solutions Expert"
];

export const statistics = [
  { value: "15+", label: "Years Experience", description: "In software engineering & architecture" },
  { value: "10+", label: "Years in USA", description: "Leading engineering teams & delivery" },
  { value: "170K+", label: "Managed Enterprise Devices", description: "PulseGuard active deployments" },
  { value: "1.6M+", label: "Users Impacted", description: "Daily active platform users" },
  { value: "$6M+", label: "Business Savings Delivered", description: "Annually through automation" }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "architecture",
    title: "Architecture & Design",
    skills: ["Software Architecture", "Distributed Systems", "Event Driven Architecture", "Enterprise Integration Patterns", "Design Patterns"]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    skills: ["Spring Boot 3.x", "Node.js 23", "Python 3.x", "FastAPI", "GraphQL", "REST APIs"]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    skills: ["React 19", "Angular 20", "React Native", "TypeScript", "JavaScript"]
  },
  {
    id: "cloud",
    title: "Cloud Platforms",
    skills: ["Oracle Cloud Infrastructure (OCI)", "Amazon Web Services (AWS)", "Microsoft Azure"]
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    skills: ["Docker", "Kubernetes", "OCI DevOps", "Jenkins", "CI/CD Pipelines"]
  },
  {
    id: "ai",
    title: "AI & Innovation",
    skills: ["Agentic AI", "GenAI / LLMs", "OCI GenAI", "OpenAI Codex", "Model Context Protocol (MCP)", "AI Agents"]
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: "oracle",
    company: "Oracle",
    role: "Principal Engineer",
    period: "2022 - Present",
    projects: [
      {
        title: "Employee PulseGuard",
        description: "Agentic AI platform deployed across 170,000+ enterprise devices.",
        achievements: [
          "Automated 60% of support tickets through self-healing edge agents",
          "Implemented AI-driven remediation workflows triggerable on telemetry events",
          "Integrated OCI GenAI to parse, diagnose, and resolve complex OS and client issues",
          "Designed and built enterprise observability platform processing high-throughput telemetry"
        ]
      },
      {
        title: "Zoom Rooms Autopilot",
        description: "Autonomous room health and scheduling control system.",
        achievements: [
          "Managed 1300+ global Zoom Rooms autonomously with self-healing triggers",
          "Reduced conference room tech support tickets by 80% through proactive diagnostics",
          "Saved Oracle approximately $2M annually in operational resources",
          "Engineered a full microservices architecture for Zoom Room status polling and control"
        ]
      },
      {
        title: "IT AI Service Desk",
        description: "GenAI conversational agent for IT assistance.",
        achievements: [
          "Built AI-powered Slack support bot that answers queries and executes tasks",
          "Leveraged OCI GenAI integration for secure RAG on internal enterprise docs",
          "Reduced support ticket queues by 30% inside the first quarter of deployment"
        ]
      },
      {
        title: "Enterprise Meeting Scheduler",
        description: "Custom scheduling service for internal and external meetings.",
        achievements: [
          "Successfully replaced Calendly and MS Bookings corporate licensing",
          "Saved Oracle approximately $4M annually in licensing fees",
          "Designed scaling architecture with React + Spring Boot handling global traffic"
        ]
      }
    ]
  },
  {
    id: "walmart",
    company: "Walmart",
    role: "Staff Engineer",
    period: "2019 - 2022",
    projects: [
      {
        title: "Walmart Academy",
        description: "Internal education platform for the entire associate base.",
        achievements: [
          "Built and scaled learning platform serving 1.6M active associates",
          "Engineered a unified web and mobile architecture for cross-platform uniformity",
          "Utilized React + Ionic Capacitor for high-performance mobile packaging"
        ]
      },
      {
        title: "Walmart Teams App",
        description: "Communication and shift-management app.",
        achievements: [
          "Designed React Native architecture ensuring fast response times in retail environments",
          "Deployed and used across 5000+ Walmart stores nationwide"
        ]
      }
    ]
  },
  {
    id: "hyundai",
    company: "Hyundai Motors USA",
    role: "Technical Lead",
    period: "2016 - 2019",
    projects: [
      {
        title: "Marketing & Customer Platforms",
        description: "Enterprise marketing portals and APIs for three automotive brands.",
        achievements: [
          "Led development of scalable customer platforms for Hyundai, Genesis, and Kia",
          "Optimized API performance reducing latency by 45% during peak product launches",
          "Coordinated architectural direction with cross-functional design and data teams"
        ]
      }
    ]
  },
  {
    id: "dell",
    company: "Dell EMC",
    role: "Senior Engineer & Technical Lead",
    period: "2010 - 2016",
    projects: [
      {
        title: "Enterprise Collaboration Platforms",
        description: "Document storage and collaborative hubs for enterprise clients.",
        achievements: [
          "Designed document sharing workflows and real-time syncing microservices",
          "Mentored junior engineers and introduced automated testing standards",
          "Ensured high availability of collaboration portals across globally distributed servers"
        ]
      }
    ]
  }
];

export const featuredProjects: ProjectDetail[] = [
  {
    id: "pulseguard",
    title: "Employee PulseGuard",
    problem: "Oracle's IT support desk faced a massive backlog of tickets from 170,000+ employees dealing with system configuration issues, out-of-sync credentials, and software crashes. This led to lost developer hours and millions in support overhead.",
    architecture: "An event-driven network of Agentic AI nodes running at the device edge, coupled with a central Spring Boot orchestration cluster. Telemetry events trigger OCI GenAI diagnostic models, which execute self-healing Python scripts on the device container to resolve errors in real-time.",
    technologies: ["React 19", "Spring Boot", "OCI GenAI", "Python", "Kubernetes", "Docker", "Prometheus"],
    scale: "Deployed on 170,000+ corporate devices processing 10M+ daily telemetry events.",
    impact: "Automated 60% of support tickets, resulting in a dramatic drop in resolution times and saving countless engineering hours."
  },
  {
    id: "zoom-autopilot",
    title: "Zoom Rooms Autopilot",
    problem: "Managing 1,300+ physical Zoom Rooms globally was resource-heavy. Network blips, audio disconnections, and display failures went unnoticed until meetings started, causing outages and constant urgent IT tickets.",
    architecture: "A lightweight microservices mesh that continuously polls Zoom hardware APIs. Uses event-driven triggers to detect anomalies and runs diagnostics. Automatically resets hardware, updates routing, or updates calendar status without human intervention.",
    technologies: ["Node.js", "Python", "Docker", "Zoom API", "OCI Observability", "Jenkins"],
    scale: "Monitoring 1,300+ corporate rooms, processing status indicators in sub-second intervals.",
    impact: "Reduced overall Zoom Room support tickets by 80% and saved approximately $2M annually in operational costs."
  },
  {
    id: "meeting-scheduler",
    title: "Enterprise Meeting Scheduler",
    problem: "Using third-party scheduling SaaS (Calendly, MS Bookings) resulted in high licensing costs ($4M+ annually) and presented compliance hurdles regarding meeting details and calendar metadata leaving Oracle's network.",
    architecture: "A highly secure, multi-tenant scheduling engine integrated directly into Oracle's SSO and Microsoft Exchange/Active Directory. Built with a React frontend and a highly optimized Spring Boot backend caching slot availability to prevent DB locks.",
    technologies: ["React 19", "TypeScript", "Spring Boot", "Oracle Database", "Redis", "OCI DevOps"],
    scale: "Utilized by the entire global workforce of Oracle, handling millions of scheduled bookings.",
    impact: "Fully replaced third-party booking SaaS, saving Oracle approximately $4M annually while enhancing internal security compliance."
  },
  {
    id: "walmart-academy",
    title: "Walmart Academy Platform",
    problem: "Walmart needed to train, test, and onboard 1.6 Million associates across the US on new logistics, customer service, and safety guidelines. The old system was web-only, slow, and failed to load on associates' handheld store devices.",
    architecture: "A modern React web client combined with an Ionic Capacitor shell, enabling unified web, Android, and iOS deployments. Uses micro-frontend architecture to separate modules (training courses, VR tracking, metrics dashboard) for separate deployments.",
    technologies: ["React", "TypeScript", "Ionic Capacitor", "Node.js", "Azure CosmosDB", "CI/CD"],
    scale: "Serving 1.6 Million active Walmart associates daily across mobile and web interfaces.",
    impact: "Unified training delivery, improved course completions by 45%, and ensured employees can easily access training on the sales floor."
  }
];

export const certifications: Certification[] = [
  { name: "Oracle Cloud Architect Associate", issuer: "Oracle University", year: "2023", color: "from-orange-600 to-red-600" },
  { name: "Oracle GenAI Professional", issuer: "Oracle University", year: "2024", color: "from-yellow-500 to-amber-600" },
  { name: "Oracle Observability Professional", issuer: "Oracle University", year: "2023", color: "from-green-600 to-emerald-600" },
  { name: "Certified Kubernetes Application Developer (CKAD)", issuer: "The Linux Foundation", year: "2022", color: "from-blue-600 to-indigo-600" }
];

export const leadershipHighlights = [
  {
    title: "Technical Leadership & Vision",
    description: "Driving architectural direction and technology stack choices across enterprise groups. Aligning engineering initiatives with strategic business milestones."
  },
  {
    title: "Mentoring & Talent Growth",
    description: "Actively coaching senior and staff engineers. Running internal design guilds to foster architectural thinking and engineering excellence."
  },
  {
    title: "Rigorous Architecture Reviews",
    description: "Leading weekly Architecture Boards to review systems for scalability, security, disaster recovery, and integration standards."
  },
  {
    title: "Enterprise Systems Design",
    description: "Drafting blueprints for high-availability, multi-region distributed databases, message queues, and zero-trust service meshes."
  },
  {
    title: "Cross-functional Collaboration",
    description: "Translating corporate strategy into scalable systems. Working closely with Product, Security, Compliance, and Finance leaders."
  },
  {
    title: "Financial & Value Engineering",
    description: "Analyzing infrastructure spend to optimize cloud utilization. Consolidating licensing which led to over $6M+ in annual business savings."
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "Architecting Agentic AI for the Enterprise: Lessons from PulseGuard",
    category: "Agentic AI",
    date: "May 12, 2026",
    readTime: "8 min read",
    excerpt: "Exploring how to build a network of autonomous agents to monitor, diagnose, and self-heal 170k+ edge devices securely using OCI GenAI.",
    slug: "architecting-agentic-ai-enterprise"
  },
  {
    id: "2",
    title: "How We Saved $4M Annually by Rebuilding Our Enterprise Scheduler",
    category: "Software Architecture",
    date: "March 28, 2026",
    readTime: "6 min read",
    excerpt: "The deep technical dive into replacing third-party scheduling licensing (Calendly/Bookings) with a custom React and Spring Boot system.",
    slug: "saved-4m-annually-enterprise-scheduler"
  },
  {
    id: "3",
    title: "Designing Event-Driven Microservices for 1,300+ Global Zoom Rooms",
    category: "Microservices",
    date: "January 15, 2026",
    readTime: "10 min read",
    excerpt: "How an event-driven automation loop reduced physical conference room tickets by 80% and minimized meeting downtime globally.",
    slug: "event-driven-microservices-zoom-rooms"
  },
  {
    id: "4",
    title: "Navigating Multi-Cloud Architectures: AWS, Azure, and OCI in Harmony",
    category: "Cloud Native",
    date: "November 08, 2025",
    readTime: "7 min read",
    excerpt: "Best practices for enterprise architects when orchestrating workloads, network bridges, and identity syncing across OCI, AWS, and Azure.",
    slug: "navigating-multi-cloud-architectures"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Vance",
    role: "VP of Enterprise IT Systems",
    company: "Oracle",
    content: "Suneel is a rare engineering leader who combines exceptional technical depth with sharp business acumen. His architecture for PulseGuard and our scheduling ecosystem saved the company millions while significantly improving operational efficiency. He designs for the future.",
    avatar: "MV"
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Software Engineering",
    company: "Walmart (Former Colleague)",
    content: "At Walmart, Suneel was instrumental in scaling Walmart Academy to 1.6M users. His ability to lead complex front-to-back engineering efforts and coordinate across multiple product teams was crucial to our training digitization efforts.",
    avatar: "SJ"
  },
  {
    name: "David Cho",
    role: "Senior Director of Marketing Platforms",
    company: "Hyundai USA",
    content: "Suneel brought world-class architectural rigor to our marketing platforms. Under his technical leadership, we successfully consolidated APIs for three major brands and achieved unprecedented stability and speed.",
    avatar: "DC"
  }
];
